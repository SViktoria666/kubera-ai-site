# Kubera Social Content Assistant Phase 1 Implementation

Date: 2026-08-09

## 1. What Was Created

Phase 1 introduces a new isolated shadow-intelligence foundation for Kubera social content:

- a dedicated PostgreSQL database created on the existing cluster: `kubera_social_content_memory`
- PostgreSQL schema design for a separate content-memory namespace
- deterministic Telegram shadow ingestion pipeline
- topic extraction and clustering
- trend scoring
- style feature extraction
- raw-content retention and cleanup logic
- in-memory repository for synthetic tests
- synthetic fixtures and unit tests

No existing social publishing workflows were modified.

## 2. PostgreSQL Isolation Decision

Decision:

- **separate PostgreSQL database**
- recommended database name: `kubera_social_content_memory`
- schema name inside that database: `social_content`

Status:

- the dedicated database now exists
- the `social_content` schema and all Phase 1 tables have been applied

Why this decision:

- strongest isolation with low operational overhead
- avoids polluting the existing n8n database
- makes cleanup and rollback simple
- supports future separation of credentials and permissions

Rollback for the database namespace:

- drop the dedicated database
- no existing n8n objects need to be touched

## 3. Tables Created

Logical tables defined in the schema file:

- `social_content.content_sources`
- `social_content.raw_content_items`
- `social_content.topic_candidates`
- `social_content.topic_clusters`
- `social_content.style_signals`
- `social_content.trend_candidates`

Future tables intentionally not created yet:

- `content_drafts`
- `media_assets`
- `publications`
- `performance_metrics`

## 4. Backup / Rollback Status

Rollback design is simple because the namespace is isolated:

- database-level rollback: drop the phase1 database
- schema-level rollback: drop `social_content` schema if needed
- repository-level rollback: remove the new files or revert the commit
- actual database rollback now means dropping `kubera_social_content_memory`

This phase did not require touching existing production social workflows.

## 5. PostgreSQL Inventory Summary

Read-only inventory of the current host:

- PostgreSQL version: `15.18`
- existing databases: `n8n`, `postgres`, `template0`, `template1`
- observed schemas in the active database: `anima`, `information_schema`, `pg_catalog`, `pg_toast`, `public`
- root database size observed via `pg_database_size(current_database())`: `16 MB`
- the existing n8n cluster already exists and should remain untouched
- isolated Phase 1 database exists: `kubera_social_content_memory`
- current Phase 1 database size after schema creation: `7,983 kB`

Host capacity:

- RAM: `7.6 GiB` total, `5.1 GiB` available
- root disk: `75G` total, `53G` free
- `/opt/app`: `20G` total, `19G` free

## 6. Telegram Reader Status

Implementation status:

- **shadow-only**
- no live Telegram login attempted
- no session material required for this phase
- no private message collection
- no participant enumeration
- no reactions or outbound actions

Whitelist behavior:

- explicit source whitelist only
- if whitelist is empty, ingestion stops
- private or unapproved sources are rejected

## 7. Synthetic Tests

Synthetic fixture coverage created:

- Claude release cluster test
- OpenAI vs Claude separation test
- low-relevance chatter test
- duplicate message idempotency test
- empty whitelist test
- private/unapproved source rejection test
- expired raw cleanup dry-run test

Test execution was performed with Node's built-in test runner in strip-types mode.
All synthetic tests passed.

## 8. Semantic Clustering Method

Phase 1 uses a deterministic, low-cost clustering strategy:

- text normalization
- URL tracking-param stripping
- canonical topic extraction
- topic key generation
- token fingerprint similarity
- cluster merge threshold

This is intentionally lightweight so it can run without a heavy model dependency.

## 9. Trend Scoring Method

Trend score formula:

- `recency`
- `source diversity`
- `velocity`
- `Kubera relevance`
- `novelty`

Weights:

- recency: `0.30`
- source diversity: `0.25`
- velocity: `0.20`
- Kubera relevance: `0.20`
- novelty: `0.05`

Thresholds:

- `0-39` ignore
- `40-59` observing
- `60-74` candidate
- `75+` trending

## 10. Raw Retention Policy

Default raw-content retention:

- **7 days**

Rules:

- raw text is stored only as normalized content needed for clustering
- no phone numbers, participant lists, avatars, or private metadata are stored
- cleanup is configurable and can be dry-run first
- cluster and trend metadata are preserved after raw cleanup

## 11. Measured Footprint of the New Part

This phase adds only lightweight deterministic code and schema files.

Measured build/runtime impact in this repo:

- no new heavy runtime dependency added
- no new server process added
- no new production routes added
- no measurable app-side RAM burden from the shadow pipeline itself

Measured PostgreSQL footprint of the new namespace:

- initial database size after schema creation: `7,983 kB`
- no raw Telegram data loaded yet
- retention remains short and configurable

Operationally, the future PostgreSQL footprint for the shadow memory should remain small because raw retention is short and the model is normalized rather than blob-heavy.

## 12. Existing Kubera Workflows

No existing Kubera production workflow was changed.

## 13. Production Publish

No production publish was executed.

## 14. Required User Input for Live Telegram

This phase deliberately stops before live Telegram connectivity.

To move to a real source connection later, the user will need to provide:

- Telegram `api_id`
- Telegram `api_hash`
- a legitimate user session / login flow
- explicit whitelisted Telegram source IDs

The current phase does not require any of those credentials.

## 15. Files Created

- `src/lib/social-content/phase1/types.ts`
- `src/lib/social-content/phase1/normalize.ts`
- `src/lib/social-content/phase1/topic-extraction.ts`
- `src/lib/social-content/phase1/clustering.ts`
- `src/lib/social-content/phase1/scoring.ts`
- `src/lib/social-content/phase1/repository.ts`
- `src/lib/social-content/phase1/shadow.ts`
- `src/lib/social-content/phase1/index.ts`
- `docs/social-content-phase1-schema.sql`
- `tests/social-content-phase1.fixtures.ts`
- `tests/social-content-phase1.test.ts`
- `KUBERA_SOCIAL_CONTENT_PHASE1_IMPLEMENTATION.md`

## 16. Rollback Path

Repository rollback:

- revert the Phase 1 commit

Database rollback:

- drop `kubera_social_content_memory`

No existing social workflow rollback is needed because none were touched.

## 17. Next Safe Step

The next safe step after this phase is:

- introduce an isolated live Telegram reader against explicit whitelisted source IDs only
- keep publishing disconnected
- keep Postiz disconnected
- keep the old production social workflows unchanged

## 18. Phase 1.1 Hardening Verification

### Git / Worktree State

- repo root: `C:\Users\Admin\kubera-ai-site\.worktrees\portugal-real-image`
- branch: `main`
- HEAD: `74d049eb53272ec3d5b953c0cec08e6a829102c0`
- dirty drift present outside Phase 1 scope: `src/content/geo/generated.ts`

### tsconfig Verdict

- `allowImportingTsExtensions` is **required** for the current Phase 1 test setup
- reverting it breaks the Phase 1 test/typecheck flow because the new Phase 1 modules and tests import local `.ts` extensions directly
- the change is small, intentional, and does not add runtime behavior

### Code Isolation

- Phase 1 code lives under `src/lib/social-content/phase1/`
- no production startup side effects were found
- no background listeners were introduced
- no live Telegram login or network call happens on import
- no production publishing path was added

### Tests / Build

- synthetic Phase 1 tests: `PASS`
- TypeScript typecheck: `PASS`
- production build: `PASS`

### Database Verification

- canonical database: `kubera_social_content_memory`
- schema: `social_content`
- tables verified: `content_sources`, `raw_content_items`, `topic_candidates`, `topic_clusters`, `style_signals`, `trend_candidates`
- restore-test database verified from backup and matched the table set and zero-row baseline

### Idempotency

- repeated synthetic ingestion is idempotent
- duplicate raw items are rejected
- duplicate topic/cluster/trend records do not accumulate on repeat ingestion

### Backup / Restore Proof

- backup file: `/opt/app/kubera-social-content-backups/kubera_social_content_memory_20260809T151200Z.dump`
- backup checksum: `7d6ee5796b1a92aaaeb2444aa5602a92d6836f7678a6614a3f1b2480a98d653c`
- backup size: `26246` bytes
- disposable restore DB: `kubera_social_content_memory_restore_test`
- restore proof: `PASS`
- restore verification:
  - schema exists
  - all 6 tables exist
  - row counts: `0, 0, 0, 0, 0, 0`
- rollback path remains:
  - drop `kubera_social_content_memory`

### Retention Proof

- raw retention default remains `7 days`
- synthetic cleanup dry-run identifies expired raw items
- actual cleanup only removes expired synthetic data
- fresh raw data, topic metadata, cluster metadata, and trend metadata remain intact

### Privacy Proof

- pipeline stores normalized text and structured features only
- no phone numbers, participant lists, avatars, or session material are retained
- private or unapproved sources are rejected

### Telegram Live Readiness

- status: blocked until user provides legitimate `api_id`, `api_hash`, login/session flow, and explicit whitelisted source IDs
- reader design remains fail-closed if whitelist is empty
- live Telegram was not connected in this phase

### Remaining Blockers

- no real Telegram credentials were supplied
- no real Telegram sources were connected
- Postiz was intentionally not installed in this phase
