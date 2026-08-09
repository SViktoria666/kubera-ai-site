-- Kubera Social Content Assistant Phase 1
-- Separate PostgreSQL database recommended: kubera_social_content_memory
-- Schema name: social_content
--
-- This schema is intentionally isolated from the existing n8n database.

CREATE SCHEMA IF NOT EXISTS social_content;

CREATE TABLE IF NOT EXISTS social_content.content_sources (
  id BIGSERIAL PRIMARY KEY,
  source_type TEXT NOT NULL,
  source_name TEXT NOT NULL,
  external_source_id TEXT NOT NULL,
  enabled BOOLEAN NOT NULL DEFAULT TRUE,
  whitelisted BOOLEAN NOT NULL DEFAULT TRUE,
  language TEXT NOT NULL DEFAULT 'en',
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT content_sources_source_type_external_source_id_key UNIQUE (source_type, external_source_id)
);

CREATE TABLE IF NOT EXISTS social_content.raw_content_items (
  id BIGSERIAL PRIMARY KEY,
  source_id BIGINT NOT NULL REFERENCES social_content.content_sources(id) ON DELETE CASCADE,
  external_item_id TEXT NOT NULL,
  item_hash TEXT NOT NULL,
  published_at TIMESTAMPTZ NOT NULL,
  ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  normalized_text TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'en',
  processing_status TEXT NOT NULL DEFAULT 'accepted',
  rejection_reason TEXT,
  retention_until TIMESTAMPTZ NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  CONSTRAINT raw_content_items_item_hash_key UNIQUE (item_hash),
  CONSTRAINT raw_content_items_source_id_external_item_id_key UNIQUE (source_id, external_item_id)
);

CREATE INDEX IF NOT EXISTS raw_content_items_retention_until_idx
  ON social_content.raw_content_items (retention_until);

CREATE TABLE IF NOT EXISTS social_content.topic_candidates (
  id BIGSERIAL PRIMARY KEY,
  raw_item_id BIGINT NOT NULL REFERENCES social_content.raw_content_items(id) ON DELETE CASCADE,
  canonical_topic TEXT NOT NULL,
  topic_key TEXT NOT NULL,
  entities JSONB NOT NULL DEFAULT '[]'::jsonb,
  products JSONB NOT NULL DEFAULT '[]'::jsonb,
  event_action TEXT NOT NULL,
  category TEXT NOT NULL,
  kubera_relevance_score NUMERIC(5,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT topic_candidates_raw_item_id_key UNIQUE (raw_item_id),
  CONSTRAINT topic_candidates_topic_key_key UNIQUE (topic_key, raw_item_id)
);

CREATE TABLE IF NOT EXISTS social_content.topic_clusters (
  id BIGSERIAL PRIMARY KEY,
  cluster_key TEXT NOT NULL UNIQUE,
  canonical_topic TEXT NOT NULL,
  normalized_topic TEXT NOT NULL,
  representative_topic_candidate_id BIGINT NOT NULL REFERENCES social_content.topic_candidates(id) ON DELETE CASCADE,
  merge_count INTEGER NOT NULL DEFAULT 1,
  source_count INTEGER NOT NULL DEFAULT 1,
  item_count INTEGER NOT NULL DEFAULT 1,
  first_seen_at TIMESTAMPTZ NOT NULL,
  last_seen_at TIMESTAMPTZ NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS topic_clusters_last_seen_idx
  ON social_content.topic_clusters (last_seen_at DESC);

CREATE TABLE IF NOT EXISTS social_content.style_signals (
  id BIGSERIAL PRIMARY KEY,
  source_id BIGINT NOT NULL REFERENCES social_content.content_sources(id) ON DELETE CASCADE,
  cluster_id BIGINT REFERENCES social_content.topic_clusters(id) ON DELETE CASCADE,
  sample_size INTEGER NOT NULL DEFAULT 1,
  average_length NUMERIC(10,2) NOT NULL DEFAULT 0,
  hook_type TEXT NOT NULL DEFAULT 'statement',
  paragraph_pattern TEXT NOT NULL DEFAULT 'single-paragraph',
  emoji_density NUMERIC(10,6) NOT NULL DEFAULT 0,
  question_frequency NUMERIC(10,6) NOT NULL DEFAULT 0,
  tone_features JSONB NOT NULL DEFAULT '{}'::jsonb,
  technical_depth TEXT NOT NULL DEFAULT 'low',
  cta_pattern TEXT NOT NULL DEFAULT 'none',
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT style_signals_source_id_cluster_id_key UNIQUE (source_id, cluster_id)
);

CREATE TABLE IF NOT EXISTS social_content.trend_candidates (
  id BIGSERIAL PRIMARY KEY,
  cluster_id BIGINT NOT NULL REFERENCES social_content.topic_clusters(id) ON DELETE CASCADE,
  trend_score NUMERIC(6,2) NOT NULL DEFAULT 0,
  source_count INTEGER NOT NULL DEFAULT 0,
  item_count INTEGER NOT NULL DEFAULT 0,
  recency_score NUMERIC(6,2) NOT NULL DEFAULT 0,
  velocity_score NUMERIC(6,2) NOT NULL DEFAULT 0,
  kubera_relevance_score NUMERIC(6,2) NOT NULL DEFAULT 0,
  novelty_score NUMERIC(6,2) NOT NULL DEFAULT 0,
  threshold_band TEXT NOT NULL DEFAULT 'ignore',
  status TEXT NOT NULL DEFAULT 'observing',
  first_seen_at TIMESTAMPTZ NOT NULL,
  last_seen_at TIMESTAMPTZ NOT NULL,
  suggested_kubera_angles JSONB NOT NULL DEFAULT '[]'::jsonb,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT trend_candidates_cluster_id_key UNIQUE (cluster_id)
);

CREATE INDEX IF NOT EXISTS trend_candidates_score_idx
  ON social_content.trend_candidates (trend_score DESC, last_seen_at DESC);

COMMENT ON SCHEMA social_content IS 'Isolated content memory for Kubera Social Content Assistant Phase 1';

