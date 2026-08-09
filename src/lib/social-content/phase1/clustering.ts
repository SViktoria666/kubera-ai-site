import { normalizeForSimilarity, slugify, tokenizeForSimilarity } from "./normalize.ts";
import type { TopicCandidate, TopicCluster } from "./types.ts";

function jaccardSimilarity(a: Set<string>, b: Set<string>) {
  if (a.size === 0 || b.size === 0) {
    return 0;
  }

  let intersection = 0;
  for (const token of a) {
    if (b.has(token)) {
      intersection += 1;
    }
  }

  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : intersection / union;
}

function signatureForCandidate(candidate: TopicCandidate) {
  const parts = [
    candidate.topicKey,
    candidate.category,
    candidate.entities.join(" "),
    candidate.products.join(" "),
    candidate.eventAction,
    candidate.canonicalTopic,
  ];
  return tokenizeForSimilarity(parts.join(" "));
}

export function buildClusterKey(candidate: TopicCandidate) {
  return slugify(candidate.topicKey);
}

export function clusterSimilarity(cluster: TopicCluster, candidate: TopicCandidate) {
  const clusterTokens = tokenizeForSimilarity([cluster.clusterKey, cluster.canonicalTopic, cluster.normalizedTopic].join(" "));
  const candidateTokens = signatureForCandidate(candidate);
  return jaccardSimilarity(clusterTokens, candidateTokens);
}

export function shouldMergeCluster(cluster: TopicCluster, candidate: TopicCandidate) {
  return cluster.clusterKey === buildClusterKey(candidate);
}

export function mergeCandidateIntoCluster(cluster: TopicCluster, candidate: TopicCandidate, sourceId: number, publishedAt: string) {
  return {
    ...cluster,
    canonicalTopic: cluster.canonicalTopic || candidate.canonicalTopic,
    normalizedTopic: normalizeForSimilarity(candidate.canonicalTopic),
    representativeTopicCandidateId: cluster.representativeTopicCandidateId || candidate.id,
    mergeCount: cluster.mergeCount + 1,
    sourceCount: cluster.sourceCount + 1,
    itemCount: cluster.itemCount + 1,
    firstSeenAt: cluster.firstSeenAt < publishedAt ? cluster.firstSeenAt : publishedAt,
    lastSeenAt: cluster.lastSeenAt > publishedAt ? cluster.lastSeenAt : publishedAt,
    metadata: {
      ...cluster.metadata,
      lastSourceId: sourceId,
      topicKey: candidate.topicKey,
      category: candidate.category,
      entities: Array.from(new Set([...(cluster.metadata.entities as string[] | undefined || []), ...candidate.entities])),
      products: Array.from(new Set([...(cluster.metadata.products as string[] | undefined || []), ...candidate.products])),
    },
    updatedAt: new Date().toISOString(),
  };
}
