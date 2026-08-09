import { normalizeShadowText } from "./normalize.ts";
import type {
  ContentSourceInput,
  ContentSourceRecord,
  NormalizedContentItem,
  StyleSignals,
  TopicCandidate,
  TopicCluster,
  TrendCandidate,
  TrendThresholdBand,
} from "./types.ts";

function nowIso() {
  return new Date().toISOString();
}

function stableHash(input: string) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index);
    hash |= 0;
  }
  return `h${Math.abs(hash).toString(16)}`;
}

function clone<T>(value: T): T {
  return structuredClone(value);
}

export class InMemoryContentMemoryRepository {
  private nextIds = {
    source: 1,
    raw: 1,
    topic: 1,
    cluster: 1,
    trend: 1,
    style: 1,
  };

  private sources: ContentSourceRecord[] = [];
  private rawItems: NormalizedContentItem[] = [];
  private topicCandidates: TopicCandidate[] = [];
  private clusters: TopicCluster[] = [];
  private trendCandidates: TrendCandidate[] = [];
  private styleSignals: StyleSignals[] = [];

  upsertSource(input: ContentSourceInput) {
    const timestamp = nowIso();
    const existing = this.sources.find(
      (item) => item.sourceType === input.sourceType && item.externalSourceId === input.externalSourceId,
    );

    if (existing) {
      existing.sourceName = input.sourceName;
      existing.enabled = input.enabled ?? existing.enabled;
      existing.whitelisted = input.whitelisted ?? existing.whitelisted;
      existing.language = input.language ?? existing.language;
      existing.metadata = input.metadata ?? existing.metadata;
      existing.updatedAt = timestamp;
      return existing;
    }

    const record: ContentSourceRecord = {
      id: this.nextIds.source++,
      sourceType: input.sourceType,
      sourceName: input.sourceName,
      externalSourceId: input.externalSourceId,
      enabled: input.enabled ?? true,
      whitelisted: input.whitelisted ?? true,
      language: input.language || "en",
      metadata: input.metadata || {},
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    this.sources.push(record);
    return record;
  }

  listSources() {
    return clone(this.sources);
  }

  findSourceByExternalId(sourceType: ContentSourceInput["sourceType"], externalSourceId: string) {
    const source = this.sources.find((item) => item.sourceType === sourceType && item.externalSourceId === externalSourceId);
    return source ? clone(source) : null;
  }

  findSourceById(id: number) {
    const source = this.sources.find((item) => item.id === id);
    return source ? clone(source) : null;
  }

  upsertRawItem(input: {
    sourceId: number;
    externalItemId: string;
    publishedAt: string;
    normalizedText: string;
    language: string;
    metadata?: Record<string, unknown>;
    retentionDays: number;
  }) {
    const timestamp = nowIso();
    const itemHash = stableHash([input.sourceId, input.externalItemId, input.normalizedText].join("|"));
    const existing = this.rawItems.find((item) => item.itemHash === itemHash || (item.sourceId === input.sourceId && item.externalItemId === input.externalItemId));

    if (existing) {
      return { record: clone(existing), duplicate: true as const };
    }

    const retentionUntil = new Date(new Date(input.publishedAt).getTime() + input.retentionDays * 24 * 60 * 60 * 1000).toISOString();

    const record: NormalizedContentItem = {
      sourceId: input.sourceId,
      externalItemId: input.externalItemId,
      itemHash,
      publishedAt: input.publishedAt,
      ingestedAt: timestamp,
      normalizedText: normalizeShadowText(input.normalizedText),
      language: input.language,
      processingStatus: "accepted",
      retentionUntil,
      metadata: input.metadata || {},
    };

    this.rawItems.push(record);
    return { record: clone(record), duplicate: false as const };
  }

  upsertTopicCandidate(input: {
    rawItemId: number;
    canonicalTopic: string;
    topicKey: string;
    entities: string[];
    products: string[];
    eventAction: string;
    category: string;
    kuberaRelevanceScore: number;
  }) {
    const timestamp = nowIso();
    const record: TopicCandidate = {
      id: this.nextIds.topic++,
      rawItemId: input.rawItemId,
      canonicalTopic: input.canonicalTopic,
      topicKey: input.topicKey,
      entities: [...input.entities],
      products: [...input.products],
      eventAction: input.eventAction,
      category: input.category,
      kuberaRelevanceScore: input.kuberaRelevanceScore,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    this.topicCandidates.push(record);
    return clone(record);
  }

  upsertCluster(input: {
    clusterKey: string;
    canonicalTopic: string;
    normalizedTopic: string;
    representativeTopicCandidateId: number;
    sourceCount: number;
    itemCount: number;
    firstSeenAt: string;
    lastSeenAt: string;
    metadata?: Record<string, unknown>;
  }) {
    const timestamp = nowIso();
    const existing = this.clusters.find((item) => item.clusterKey === input.clusterKey);

    if (existing) {
      existing.canonicalTopic = input.canonicalTopic || existing.canonicalTopic;
      existing.normalizedTopic = input.normalizedTopic || existing.normalizedTopic;
      existing.representativeTopicCandidateId = input.representativeTopicCandidateId;
      existing.mergeCount += 1;
      existing.sourceCount += input.sourceCount;
      existing.itemCount += input.itemCount;
      existing.firstSeenAt = existing.firstSeenAt < input.firstSeenAt ? existing.firstSeenAt : input.firstSeenAt;
      existing.lastSeenAt = existing.lastSeenAt > input.lastSeenAt ? existing.lastSeenAt : input.lastSeenAt;
      existing.metadata = { ...existing.metadata, ...(input.metadata || {}) };
      existing.updatedAt = timestamp;
      return existing;
    }

    const record: TopicCluster = {
      id: this.nextIds.cluster++,
      clusterKey: input.clusterKey,
      canonicalTopic: input.canonicalTopic,
      normalizedTopic: input.normalizedTopic,
      representativeTopicCandidateId: input.representativeTopicCandidateId,
      mergeCount: 1,
      sourceCount: input.sourceCount,
      itemCount: input.itemCount,
      firstSeenAt: input.firstSeenAt,
      lastSeenAt: input.lastSeenAt,
      metadata: input.metadata || {},
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    this.clusters.push(record);
    return record;
  }

  upsertStyleSignal(input: {
    sourceId: number;
    clusterId?: number;
    averageLength: number;
    hookType: string;
    paragraphPattern: string;
    emojiDensity: number;
    questionFrequency: number;
    toneFeatures: Record<string, unknown>;
    technicalDepth: "low" | "medium" | "high";
    ctaPattern: string;
    sampleSize: number;
    metadata?: Record<string, unknown>;
  }) {
    const timestamp = nowIso();
    const existing = this.styleSignals.find(
      (item) => item.sourceId === input.sourceId && item.clusterId === input.clusterId,
    );

    if (existing) {
      const totalSamples = existing.sampleSize + input.sampleSize;
      existing.averageLength = Math.round((existing.averageLength * existing.sampleSize + input.averageLength * input.sampleSize) / totalSamples);
      existing.emojiDensity = (existing.emojiDensity * existing.sampleSize + input.emojiDensity * input.sampleSize) / totalSamples;
      existing.questionFrequency = (existing.questionFrequency * existing.sampleSize + input.questionFrequency * input.sampleSize) / totalSamples;
      existing.hookType = input.hookType;
      existing.paragraphPattern = input.paragraphPattern;
      existing.toneFeatures = { ...existing.toneFeatures, ...input.toneFeatures };
      existing.technicalDepth = input.technicalDepth;
      existing.ctaPattern = input.ctaPattern;
      existing.sampleSize = totalSamples;
      existing.metadata = { ...existing.metadata, ...(input.metadata || {}) };
      existing.updatedAt = timestamp;
      return existing;
    }

    const record: StyleSignals = {
      id: this.nextIds.style++,
      sourceId: input.sourceId,
      clusterId: input.clusterId,
      sampleSize: input.sampleSize,
      averageLength: input.averageLength,
      hookType: input.hookType,
      paragraphPattern: input.paragraphPattern,
      emojiDensity: input.emojiDensity,
      questionFrequency: input.questionFrequency,
      toneFeatures: input.toneFeatures,
      technicalDepth: input.technicalDepth,
      ctaPattern: input.ctaPattern,
      metadata: input.metadata || {},
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    this.styleSignals.push(record);
    return record;
  }

  upsertTrendCandidate(input: {
    clusterId: number;
    trendScore: number;
    sourceCount: number;
    itemCount: number;
    recencyScore: number;
    velocityScore: number;
    kuberaRelevanceScore: number;
    noveltyScore: number;
    thresholdBand: TrendThresholdBand;
    status: TrendCandidate["status"];
    firstSeenAt: string;
    lastSeenAt: string;
    suggestedKuberaAngles: string[];
    metadata?: Record<string, unknown>;
  }) {
    const timestamp = nowIso();
    const existing = this.trendCandidates.find((item) => item.clusterId === input.clusterId);

    if (existing) {
      existing.trendScore = input.trendScore;
      existing.sourceCount = input.sourceCount;
      existing.itemCount = input.itemCount;
      existing.recencyScore = input.recencyScore;
      existing.velocityScore = input.velocityScore;
      existing.kuberaRelevanceScore = input.kuberaRelevanceScore;
      existing.noveltyScore = input.noveltyScore;
      existing.thresholdBand = input.thresholdBand;
      existing.status = input.status;
      existing.firstSeenAt = input.firstSeenAt;
      existing.lastSeenAt = input.lastSeenAt;
      existing.suggestedKuberaAngles = [...input.suggestedKuberaAngles];
      existing.metadata = { ...existing.metadata, ...(input.metadata || {}) };
      existing.updatedAt = timestamp;
      return existing;
    }

    const record: TrendCandidate = {
      id: this.nextIds.trend++,
      clusterId: input.clusterId,
      trendScore: input.trendScore,
      sourceCount: input.sourceCount,
      itemCount: input.itemCount,
      recencyScore: input.recencyScore,
      velocityScore: input.velocityScore,
      kuberaRelevanceScore: input.kuberaRelevanceScore,
      noveltyScore: input.noveltyScore,
      thresholdBand: input.thresholdBand,
      status: input.status,
      firstSeenAt: input.firstSeenAt,
      lastSeenAt: input.lastSeenAt,
      suggestedKuberaAngles: [...input.suggestedKuberaAngles],
      metadata: input.metadata || {},
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    this.trendCandidates.push(record);
    return record;
  }

  listRawItems() {
    return clone(this.rawItems);
  }

  listTopicCandidates() {
    return clone(this.topicCandidates);
  }

  listClusters() {
    return clone(this.clusters);
  }

  listTrendCandidates() {
    return clone(this.trendCandidates);
  }

  listStyleSignals() {
    return clone(this.styleSignals);
  }

  purgeExpiredRawItems(now = new Date(), dryRun = true) {
    const expiry = now.getTime();
    const expired = this.rawItems.filter((item) => new Date(item.retentionUntil).getTime() <= expiry);

    if (!dryRun) {
      this.rawItems = this.rawItems.filter((item) => new Date(item.retentionUntil).getTime() > expiry);
    }

    return expired.map((item) => clone(item));
  }

  snapshot() {
    return {
      sources: this.listSources(),
      rawItems: this.listRawItems(),
      topicCandidates: this.listTopicCandidates(),
      clusters: this.listClusters(),
      trendCandidates: this.listTrendCandidates(),
      styleSignals: this.listStyleSignals(),
    };
  }
}
