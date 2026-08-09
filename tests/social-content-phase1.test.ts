import test from "node:test";
import assert from "node:assert/strict";

import { detectLanguage, normalizeShadowText, normalizeUrl } from "../src/lib/social-content/phase1/normalize.ts";
import { extractTopic } from "../src/lib/social-content/phase1/topic-extraction.ts";
import { InMemoryContentMemoryRepository } from "../src/lib/social-content/phase1/repository.ts";
import { runShadowPipeline } from "../src/lib/social-content/phase1/shadow.ts";
import {
  caseAClaudeRelease,
  caseBOpenAIRelease,
  caseCChatter,
  caseDduplicateMessage,
  caseGExpiredFixture,
  fixtureSources,
} from "./social-content-phase1.fixtures.ts";

function seedRepository() {
  const repo = new InMemoryContentMemoryRepository();
  for (const source of fixtureSources) {
    repo.upsertSource({
      sourceType: source.sourceType,
      sourceName: source.sourceName,
      externalSourceId: source.externalSourceId,
      enabled: source.enabled,
      whitelisted: source.whitelisted,
      language: source.language,
    });
  }
  return repo;
}

test("normalization removes tracking params and collapses whitespace", () => {
  const normalized = normalizeShadowText("  Hello   world  https://example.com/a?utm_source=x&keep=y  ");
  assert.equal(normalized, "Hello world https://example.com/a?keep=y");
  assert.equal(normalizeUrl("https://example.com/a?utm_source=x&fbclid=1&keep=y"), "https://example.com/a?keep=y");
  assert.equal(detectLanguage("Bonjour, nouvelle annonce avec modèle et automatisation.", "en"), "fr");
});

test("topic extraction canonicalizes a Claude release into a reusable topic entity", () => {
  const topic = extractTopic("Anthropic just dropped Claude X. This looks like a major model release.");
  assert.equal(topic.canonicalTopic, "anthropic releases Claude X");
  assert.equal(topic.category, "ai model release");
  assert.ok(topic.kuberaRelevanceScore >= 20);
  assert.equal(topic.topicKey.includes("claude"), true);
});

test("shadow pipeline clusters five Claude messages into one cluster", () => {
  const repo = seedRepository();
  const result = runShadowPipeline(caseAClaudeRelease, repo, { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 35 });

  assert.equal(result.stats.itemsSeen, 5);
  assert.equal(result.stats.itemsRejected, 0);
  assert.equal(result.stats.duplicates, 0);
  assert.equal(result.stats.clustersCreated, 1);
  assert.equal(result.stats.trendCandidates >= 1, true);
  assert.equal(repo.listClusters().length, 1);
  assert.equal(repo.listTrendCandidates().length, 1);
  assert.equal(result.topTrendCandidates[0]?.canonicalTopic.toLowerCase().includes("claude"), true);
  assert.ok(result.topTrendCandidates[0]?.suggestedKuberaAngles.includes("customer support"));
});

test("shadow pipeline keeps OpenAI and Claude releases in separate clusters", () => {
  const repo = seedRepository();
  const result = runShadowPipeline(caseBOpenAIRelease, repo, { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 20 });

  assert.equal(result.stats.itemsSeen, 2);
  assert.equal(repo.listClusters().length, 2);
  assert.equal(new Set(repo.listClusters().map((cluster) => cluster.clusterKey)).size, 2);
});

test("low-relevance chatter is accepted but does not create a trending candidate", () => {
  const repo = seedRepository();
  const result = runShadowPipeline(caseCChatter, repo, { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 80 });

  assert.equal(result.stats.itemsSeen, 1);
  assert.equal(result.stats.itemsAccepted, 1);
  assert.equal(result.stats.trendCandidates, 0);
  assert.equal(repo.listTrendCandidates().length, 0);
});

test("duplicate telegram messages are idempotent", () => {
  const repo = seedRepository();
  const result = runShadowPipeline(caseDduplicateMessage, repo, { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 35 });

  assert.equal(result.stats.itemsSeen, 2);
  assert.equal(result.stats.duplicates, 1);
  assert.equal(repo.listRawItems().length, 1);
});

test("empty whitelist rejects ingestion", () => {
  const repo = new InMemoryContentMemoryRepository();
  const result = runShadowPipeline(caseAClaudeRelease, repo, { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 35 });

  assert.equal(result.stats.itemsAccepted, 0);
  assert.equal(result.stats.itemsRejected, 5);
  assert.equal(result.rejectedItems.every((item) => item.reason === "source_not_whitelisted"), true);
});

test("private or unapproved sources are rejected", () => {
  const repo = seedRepository();
  const privateResult = runShadowPipeline(
    [
      {
        sourceExternalId: "tg-private",
        sourceName: "Private Unapproved Group",
        externalItemId: "f1",
        publishedAt: "2026-08-09T11:00:00.000Z",
        text: "Anthropic just dropped Claude X.",
        isPrivate: true,
        language: "en",
      },
    ],
    repo,
    { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 35 },
  );

  assert.equal(privateResult.rejectedItems[0]?.reason, "source_not_whitelisted");

  const disabledRepo = new InMemoryContentMemoryRepository();
  disabledRepo.upsertSource({
    sourceType: "telegram",
    sourceName: "Disabled Group",
    externalSourceId: "tg-disabled",
    enabled: false,
    whitelisted: true,
    language: "en",
  });

  const disabledResult = runShadowPipeline(
    [
      {
        sourceExternalId: "tg-disabled",
        sourceName: "Disabled Group",
        externalItemId: "f2",
        publishedAt: "2026-08-09T11:00:00.000Z",
        text: "Anthropic just dropped Claude X.",
        language: "en",
      },
    ],
    disabledRepo,
    { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 35 },
  );

  assert.equal(disabledResult.rejectedItems[0]?.reason, "source_disabled");
});

test("expired raw content is identified by cleanup dry-run", () => {
  const repo = seedRepository();
  runShadowPipeline([caseGExpiredFixture], repo, { rawRetentionDays: 7, dryRunCleanup: true, minimumRelevanceScore: 35 });

  const expired = repo.purgeExpiredRawItems(new Date("2026-08-09T12:00:00.000Z"), true);

  assert.equal(expired.length, 1);
  assert.equal(expired[0]?.externalItemId, "g1");
  assert.equal(repo.listRawItems().length, 1);
});
