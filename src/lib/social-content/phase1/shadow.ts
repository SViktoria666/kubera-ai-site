import { buildKuberaAngleSuggestions, extractTopic } from "./topic-extraction.ts";
import { detectLanguage, normalizeShadowText } from "./normalize.ts";
import { buildClusterKey, shouldMergeCluster } from "./clustering.ts";
import { estimateRecencyHours, scoreTrendCandidate } from "./scoring.ts";
import type { ShadowPipelineResult, ShadowTelegramMessageInput } from "./types.ts";
import { InMemoryContentMemoryRepository } from "./repository.ts";

export type ShadowPipelineConfig = {
  rawRetentionDays: number;
  dryRunCleanup: boolean;
  allowPrivateSources: boolean;
  minimumRelevanceScore: number;
};

export const DEFAULT_SHADOW_PIPELINE_CONFIG: ShadowPipelineConfig = {
  rawRetentionDays: 7,
  dryRunCleanup: true,
  allowPrivateSources: false,
  minimumRelevanceScore: 35,
};

export type ShadowIngestionOutcome =
  | { accepted: true; rawItemId: number; topicCandidateId: number; clusterId: number; duplicate: boolean }
  | { accepted: false; reason: string };

type ShadowAcceptedEnvelope = ShadowTelegramMessageInput & {
  sourceId: number;
  sourceWhitelisted: boolean;
  sourceEnabled: boolean;
  normalizedText: string;
  language: string;
  accepted: true;
};

type ShadowRejectedEnvelope = {
  accepted: false;
  reason: string;
};

function buildStyleSignals(text: string) {
  const normalized = normalizeShadowText(text);
  const length = normalized.length;
  const questionCount = (normalized.match(/\?/g) || []).length;
  const paragraphCount = normalized.split(/\n{2,}/).filter(Boolean).length || 1;
  const emojiCount = (normalized.match(/[\u{1F300}-\u{1FAFF}]/gu) || []).length;
  const bulletCount = (normalized.match(/^\s*[-*•]/gm) || []).length;

  return {
    averageLength: length,
    hookType: questionCount > 0 ? "question" : normalized.includes(":") ? "statement" : "statement",
    paragraphPattern: bulletCount > 0 ? "bullet-list" : paragraphCount > 1 ? "multi-paragraph" : "single-paragraph",
    emojiDensity: length > 0 ? emojiCount / length : 0,
    questionFrequency: length > 0 ? questionCount / length : 0,
    toneFeatures: {
      direct: /you|your|we|our/i.test(normalized),
      analytical: /because|impact|means|important|why/i.test(normalized),
      urgent: /breaking|now|just in|today|urgent/i.test(normalized),
      conversational: /\bI\b|\bwe\b|\byou\b/i.test(normalized),
    },
    technicalDepth: /api|model|agent|architecture|integration|workflow|token|llm|benchmark/i.test(normalized)
      ? ("high" as const)
      : /automation|platform|launch|release|update/i.test(normalized)
        ? ("medium" as const)
        : ("low" as const),
    ctaPattern: /\b(comment|share|dm|join|try|follow|subscribe|book|contact)\b/i.test(normalized) ? "cta" : "none",
  };
}

export function createShadowTelegramEnvelope(
  input: ShadowTelegramMessageInput,
  repository: InMemoryContentMemoryRepository,
): ShadowAcceptedEnvelope | ShadowRejectedEnvelope {
  const source = repository.findSourceByExternalId("telegram", input.sourceExternalId);

  if (!source) {
    return { accepted: false, reason: "source_not_whitelisted" };
  }

  if (!source.whitelisted) {
    return { accepted: false, reason: "source_not_whitelisted" };
  }

  if (!source.enabled) {
    return { accepted: false, reason: "source_disabled" };
  }

  if (input.isPrivate && !DEFAULT_SHADOW_PIPELINE_CONFIG.allowPrivateSources) {
    return { accepted: false, reason: "private_source_rejected" };
  }

  const normalizedText = normalizeShadowText(input.text);
  const language = input.language || source.language || detectLanguage(normalizedText, "en");

  if (!normalizedText) {
    return { accepted: false, reason: "empty_message" };
  }

  return {
    ...input,
    sourceId: source.id,
    sourceWhitelisted: source.whitelisted,
    sourceEnabled: source.enabled,
    normalizedText,
    language,
    accepted: true,
  };
}

export function runShadowPipeline(
  messages: ShadowTelegramMessageInput[],
  repository: InMemoryContentMemoryRepository,
  config: Partial<ShadowPipelineConfig> = {},
): ShadowPipelineResult {
  const resolvedConfig = {
    ...DEFAULT_SHADOW_PIPELINE_CONFIG,
    ...config,
  };
  const acceptedItemIds: number[] = [];
  const rejectedItems: Array<{ externalItemId: string; reason: string }> = [];
  const stats = {
    itemsSeen: 0,
    itemsAccepted: 0,
    itemsRejected: 0,
    duplicates: 0,
    topicsCreated: 0,
    clustersCreated: 0,
    trendCandidates: 0,
    errors: 0,
  };

  for (const message of messages) {
    stats.itemsSeen += 1;
    const envelope = createShadowTelegramEnvelope(message, repository);

    if (!envelope.accepted) {
      stats.itemsRejected += 1;
      rejectedItems.push({ externalItemId: message.externalItemId, reason: envelope.reason });
      continue;
    }

    const upsert = repository.upsertRawItem({
      sourceId: envelope.sourceId,
      externalItemId: envelope.externalItemId,
      publishedAt: envelope.publishedAt,
      normalizedText: envelope.normalizedText,
      language: envelope.language,
      metadata: envelope.metadata || {},
      retentionDays: resolvedConfig.rawRetentionDays,
    });

    if (upsert.duplicate) {
      stats.duplicates += 1;
      continue;
    }

    stats.itemsAccepted += 1;
    acceptedItemIds.push(repository.listRawItems().length);

    const topic = extractTopic(envelope.normalizedText);
    if (topic.kuberaRelevanceScore < resolvedConfig.minimumRelevanceScore) {
      repository.upsertTopicCandidate({
        rawItemId: repository.listRawItems().length,
        canonicalTopic: topic.canonicalTopic,
        topicKey: topic.topicKey,
        entities: topic.entities,
        products: topic.products,
        eventAction: topic.eventAction,
        category: topic.category,
        kuberaRelevanceScore: topic.kuberaRelevanceScore,
      });
      stats.topicsCreated += 1;
      continue;
    }

    const topicCandidate = repository.upsertTopicCandidate({
      rawItemId: repository.listRawItems().length,
      canonicalTopic: topic.canonicalTopic,
      topicKey: topic.topicKey,
      entities: topic.entities,
      products: topic.products,
      eventAction: topic.eventAction,
      category: topic.category,
      kuberaRelevanceScore: topic.kuberaRelevanceScore,
    });
    stats.topicsCreated += 1;

    const clusterKey = buildClusterKey(topicCandidate);
    const existingClusters = repository.listClusters();
    const matchingCluster = existingClusters.find((cluster) => shouldMergeCluster(cluster, topicCandidate));
    const cluster = repository.upsertCluster({
      clusterKey: matchingCluster?.clusterKey || clusterKey,
      canonicalTopic: topicCandidate.canonicalTopic,
      normalizedTopic: normalizeShadowText(topicCandidate.canonicalTopic),
      representativeTopicCandidateId: topicCandidate.id,
      sourceCount: 1,
      itemCount: 1,
      firstSeenAt: envelope.publishedAt,
      lastSeenAt: envelope.publishedAt,
      metadata: {
        category: topicCandidate.category,
        entities: topicCandidate.entities,
        products: topicCandidate.products,
        eventAction: topicCandidate.eventAction,
      },
    });

    if (!matchingCluster) {
      stats.clustersCreated += 1;
    }

    const style = buildStyleSignals(envelope.normalizedText);
    repository.upsertStyleSignal({
      sourceId: envelope.sourceId,
      clusterId: cluster.id,
      averageLength: style.averageLength,
      hookType: style.hookType,
      paragraphPattern: style.paragraphPattern,
      emojiDensity: style.emojiDensity,
      questionFrequency: style.questionFrequency,
      toneFeatures: style.toneFeatures,
      technicalDepth: style.technicalDepth,
      ctaPattern: style.ctaPattern,
      sampleSize: 1,
      metadata: {
        language: envelope.language,
      },
    });

    const recencyHours = estimateRecencyHours(cluster.firstSeenAt, cluster.lastSeenAt);
    const trendScore = scoreTrendCandidate({
      sourceCount: cluster.sourceCount,
      itemCount: cluster.itemCount,
      recencyHours,
      kuberaRelevanceScore: topicCandidate.kuberaRelevanceScore,
      coverageCount: 0,
    });

    const trendCandidate = repository.upsertTrendCandidate({
      clusterId: cluster.id,
      trendScore: trendScore.trendScore,
      sourceCount: cluster.sourceCount,
      itemCount: cluster.itemCount,
      recencyScore: trendScore.recencyScore,
      velocityScore: trendScore.velocityScore,
      kuberaRelevanceScore: trendScore.kuberaRelevanceScore,
      noveltyScore: trendScore.noveltyScore,
      thresholdBand: trendScore.thresholdBand,
      status: trendScore.status,
      firstSeenAt: cluster.firstSeenAt,
      lastSeenAt: cluster.lastSeenAt,
      suggestedKuberaAngles: buildKuberaAngleSuggestions(topic),
      metadata: {
        topicKey: topic.topicKey,
        category: topic.category,
      },
    });

    if (trendCandidate.thresholdBand !== "ignore") {
      stats.trendCandidates += 1;
    }
  }

  const topTrendCandidates = repository
    .listTrendCandidates()
    .filter((candidate) => candidate.thresholdBand !== "ignore")
    .sort((a, b) => b.trendScore - a.trendScore)
    .map((candidate) => {
      const cluster = repository.listClusters().find((item) => item.id === candidate.clusterId);
      return {
        clusterId: candidate.clusterId,
        canonicalTopic: cluster?.canonicalTopic || "",
        trendScore: candidate.trendScore,
        sourceCount: candidate.sourceCount,
        itemCount: candidate.itemCount,
        firstSeenAt: candidate.firstSeenAt,
        lastSeenAt: candidate.lastSeenAt,
        suggestedKuberaAngles: candidate.suggestedKuberaAngles,
        status: candidate.status,
        thresholdBand: candidate.thresholdBand,
      };
    })
    .slice(0, 10);

  return {
    stats,
    acceptedItemIds,
    rejectedItems,
    topTrendCandidates,
  };
}
