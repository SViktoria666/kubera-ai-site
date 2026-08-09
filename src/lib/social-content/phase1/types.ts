export type SocialSourceType = "telegram" | "threads" | "rss" | "news" | "manual";

export type TrendCandidateStatus = "observing" | "candidate" | "trending" | "rejected" | "expired";

export type TrendThresholdBand = "ignore" | "observing" | "candidate" | "trending";

export type ContentSourceInput = {
  sourceType: SocialSourceType;
  sourceName: string;
  externalSourceId: string;
  enabled?: boolean;
  whitelisted?: boolean;
  language?: string;
  metadata?: Record<string, unknown>;
};

export type ContentSourceRecord = ContentSourceInput & {
  id: number;
  enabled: boolean;
  whitelisted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ShadowTelegramMessageInput = {
  sourceExternalId: string;
  sourceName: string;
  sourceType?: "telegram";
  externalItemId: string;
  publishedAt: string;
  text: string;
  language?: string;
  isPrivate?: boolean;
  metadata?: Record<string, unknown>;
};

export type NormalizedContentItem = {
  sourceId: number;
  externalItemId: string;
  itemHash: string;
  publishedAt: string;
  ingestedAt: string;
  normalizedText: string;
  language: string;
  processingStatus: "accepted" | "rejected";
  rejectionReason?: string;
  retentionUntil: string;
  metadata: Record<string, unknown>;
};

export type TopicCandidate = {
  id: number;
  rawItemId: number;
  canonicalTopic: string;
  topicKey: string;
  entities: string[];
  products: string[];
  eventAction: string;
  category: string;
  kuberaRelevanceScore: number;
  createdAt: string;
  updatedAt: string;
};

export type TopicCluster = {
  id: number;
  clusterKey: string;
  canonicalTopic: string;
  normalizedTopic: string;
  representativeTopicCandidateId: number;
  mergeCount: number;
  sourceCount: number;
  itemCount: number;
  firstSeenAt: string;
  lastSeenAt: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export type StyleSignals = {
  id: number;
  sourceId: number;
  clusterId?: number;
  sampleSize: number;
  averageLength: number;
  hookType: string;
  paragraphPattern: string;
  emojiDensity: number;
  questionFrequency: number;
  toneFeatures: Record<string, unknown>;
  technicalDepth: "low" | "medium" | "high";
  ctaPattern: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export type TrendCandidate = {
  id: number;
  clusterId: number;
  trendScore: number;
  sourceCount: number;
  itemCount: number;
  recencyScore: number;
  velocityScore: number;
  kuberaRelevanceScore: number;
  noveltyScore: number;
  thresholdBand: TrendThresholdBand;
  status: TrendCandidateStatus;
  firstSeenAt: string;
  lastSeenAt: string;
  suggestedKuberaAngles: string[];
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export type ShadowSourceItem = ShadowTelegramMessageInput & {
  normalizedText: string;
  language: string;
  sourceId: number;
  sourceWhitelisted: boolean;
  sourceEnabled: boolean;
};

export type ShadowPipelineStats = {
  itemsSeen: number;
  itemsAccepted: number;
  itemsRejected: number;
  duplicates: number;
  topicsCreated: number;
  clustersCreated: number;
  trendCandidates: number;
  errors: number;
};

export type ShadowPipelineResult = {
  stats: ShadowPipelineStats;
  acceptedItemIds: number[];
  rejectedItems: Array<{ externalItemId: string; reason: string }>;
  topTrendCandidates: Array<Pick<TrendCandidate, "clusterId" | "trendScore" | "sourceCount" | "itemCount" | "firstSeenAt" | "lastSeenAt" | "suggestedKuberaAngles" | "status" | "thresholdBand"> & { canonicalTopic: string }>;
};

