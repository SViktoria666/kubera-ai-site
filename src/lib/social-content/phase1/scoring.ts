import { capPercent } from "./normalize.ts";
import type { TrendCandidateStatus, TrendThresholdBand, TopicCluster } from "./types.ts";

export type TrendScoringWeights = {
  recency: number;
  sourceDiversity: number;
  velocity: number;
  kuberaRelevance: number;
  novelty: number;
};

export type TrendScoringInput = {
  sourceCount: number;
  itemCount: number;
  recencyHours: number;
  kuberaRelevanceScore: number;
  coverageCount?: number;
};

export type TrendScoreBreakdown = {
  recencyScore: number;
  sourceCountScore: number;
  velocityScore: number;
  kuberaRelevanceScore: number;
  noveltyScore: number;
  trendScore: number;
  thresholdBand: TrendThresholdBand;
  status: TrendCandidateStatus;
};

export const DEFAULT_TREND_WEIGHTS: TrendScoringWeights = {
  recency: 0.3,
  sourceDiversity: 0.25,
  velocity: 0.2,
  kuberaRelevance: 0.2,
  novelty: 0.05,
};

function recencyScore(recencyHours: number) {
  if (recencyHours <= 1) return 100;
  if (recencyHours >= 72) return 0;
  return capPercent(100 - recencyHours * 1.5);
}

function sourceDiversityScore(sourceCount: number) {
  if (sourceCount <= 0) return 0;
  return capPercent((sourceCount / 4) * 100);
}

function velocityScore(itemCount: number) {
  if (itemCount <= 0) return 0;
  return capPercent((itemCount / 12) * 100);
}

function noveltyScore(coverageCount = 0) {
  if (coverageCount <= 0) return 100;
  return capPercent(100 - coverageCount * 20);
}

export function scoreTrendCandidate(input: TrendScoringInput, weights = DEFAULT_TREND_WEIGHTS): TrendScoreBreakdown {
  const recency = recencyScore(input.recencyHours);
  const sourceCount = sourceDiversityScore(input.sourceCount);
  const velocity = velocityScore(input.itemCount);
  const kuberaRelevance = capPercent(input.kuberaRelevanceScore);
  const novelty = noveltyScore(input.coverageCount);

  const weightedScore =
    recency * weights.recency +
    sourceCount * weights.sourceDiversity +
    velocity * weights.velocity +
    kuberaRelevance * weights.kuberaRelevance +
    novelty * weights.novelty;

  const trendScore = Math.round(capPercent(weightedScore));
  const thresholdBand = getThresholdBand(trendScore);
  const status = getTrendStatus(trendScore);

  return {
    recencyScore: Math.round(recency),
    sourceCountScore: Math.round(sourceCount),
    velocityScore: Math.round(velocity),
    kuberaRelevanceScore: Math.round(kuberaRelevance),
    noveltyScore: Math.round(novelty),
    trendScore,
    thresholdBand,
    status,
  };
}

export function getThresholdBand(score: number): TrendThresholdBand {
  if (score >= 75) return "trending";
  if (score >= 60) return "candidate";
  if (score >= 40) return "observing";
  return "ignore";
}

export function getTrendStatus(score: number): TrendCandidateStatus {
  if (score >= 75) return "trending";
  if (score >= 60) return "candidate";
  if (score >= 40) return "observing";
  return "rejected";
}

export function estimateRecencyHours(firstSeenAt: string, lastSeenAt: string, now = new Date()) {
  const first = new Date(firstSeenAt).getTime();
  const last = new Date(lastSeenAt).getTime();
  const comparison = Number.isNaN(last) ? first : last;
  const deltaMs = now.getTime() - comparison;
  return deltaMs <= 0 ? 0 : deltaMs / (1000 * 60 * 60);
}

export function summarizeClusterForTrend(cluster: TopicCluster, breakdown: TrendScoreBreakdown, angles: string[]) {
  return {
    clusterId: cluster.id,
    canonicalTopic: cluster.canonicalTopic,
    trendScore: breakdown.trendScore,
    sourceCount: cluster.sourceCount,
    itemCount: cluster.itemCount,
    firstSeenAt: cluster.firstSeenAt,
    lastSeenAt: cluster.lastSeenAt,
    status: breakdown.status,
    thresholdBand: breakdown.thresholdBand,
    suggestedKuberaAngles: angles,
  };
}
