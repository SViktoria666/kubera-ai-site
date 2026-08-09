import type { ShadowTelegramMessageInput } from "../src/lib/social-content/phase1/types.ts";

export const fixtureSources = [
  {
    sourceType: "telegram" as const,
    sourceName: "Kubera AI Research Group A",
    externalSourceId: "tg-group-a",
    enabled: true,
    whitelisted: true,
    language: "en",
  },
  {
    sourceType: "telegram" as const,
    sourceName: "Kubera AI Research Group B",
    externalSourceId: "tg-group-b",
    enabled: true,
    whitelisted: true,
    language: "en",
  },
  {
    sourceType: "telegram" as const,
    sourceName: "Private Unapproved Group",
    externalSourceId: "tg-private",
    enabled: true,
    whitelisted: false,
    language: "en",
  },
  {
    sourceType: "telegram" as const,
    sourceName: "Disabled Group",
    externalSourceId: "tg-disabled",
    enabled: false,
    whitelisted: true,
    language: "en",
  },
] as const;

export const caseAClaudeRelease: ShadowTelegramMessageInput[] = [
  {
    sourceExternalId: "tg-group-a",
    sourceName: "Kubera AI Research Group A",
    externalItemId: "a1",
    publishedAt: "2026-08-09T07:00:00.000Z",
    text: "Anthropic just dropped Claude X. This looks like a major model release for teams building assistants.",
    language: "en",
  },
  {
    sourceExternalId: "tg-group-b",
    sourceName: "Kubera AI Research Group B",
    externalItemId: "a2",
    publishedAt: "2026-08-09T07:05:00.000Z",
    text: "Claude X is out now from Anthropic. The model release is already sparking automation discussion.",
    language: "en",
  },
  {
    sourceExternalId: "tg-group-a",
    sourceName: "Kubera AI Research Group A",
    externalItemId: "a3",
    publishedAt: "2026-08-09T07:10:00.000Z",
    text: "People are discussing the new Claude model from Anthropic and what it means for AI workflows.",
    language: "en",
  },
  {
    sourceExternalId: "tg-group-b",
    sourceName: "Kubera AI Research Group B",
    externalItemId: "a4",
    publishedAt: "2026-08-09T07:15:00.000Z",
    text: "Anthropic releases Claude X with a stronger reasoning stack and better enterprise use cases.",
    language: "en",
  },
  {
    sourceExternalId: "tg-group-a",
    sourceName: "Kubera AI Research Group A",
    externalItemId: "a5",
    publishedAt: "2026-08-09T07:20:00.000Z",
    text: "Claude X release is important for customer support, internal automation, and sales ops.",
    language: "en",
  },
];

export const caseBOpenAIRelease: ShadowTelegramMessageInput[] = [
  {
    sourceExternalId: "tg-group-a",
    sourceName: "Kubera AI Research Group A",
    externalItemId: "b1",
    publishedAt: "2026-08-09T08:00:00.000Z",
    text: "OpenAI launches GPT-5. The new model release changes the benchmark conversation.",
    language: "en",
  },
  {
    sourceExternalId: "tg-group-b",
    sourceName: "Kubera AI Research Group B",
    externalItemId: "b2",
    publishedAt: "2026-08-09T08:04:00.000Z",
    text: "Anthropic releases Claude X. Another model release in the same morning.",
    language: "en",
  },
];

export const caseCChatter: ShadowTelegramMessageInput[] = [
  {
    sourceExternalId: "tg-group-a",
    sourceName: "Kubera AI Research Group A",
    externalItemId: "c1",
    publishedAt: "2026-08-09T09:00:00.000Z",
    text: "Morning coffee and random admin chatter. Nothing to cluster here.",
    language: "en",
  },
];

export const caseDduplicateMessage: ShadowTelegramMessageInput[] = [
  {
    sourceExternalId: "tg-group-a",
    sourceName: "Kubera AI Research Group A",
    externalItemId: "d1",
    publishedAt: "2026-08-09T10:00:00.000Z",
    text: "Anthropic just dropped Claude X.",
    language: "en",
  },
  {
    sourceExternalId: "tg-group-a",
    sourceName: "Kubera AI Research Group A",
    externalItemId: "d1",
    publishedAt: "2026-08-09T10:00:00.000Z",
    text: "Anthropic just dropped Claude X.",
    language: "en",
  },
];

export const caseGExpiredFixture: ShadowTelegramMessageInput = {
  sourceExternalId: "tg-group-a",
  sourceName: "Kubera AI Research Group A",
  externalItemId: "g1",
  publishedAt: "2026-07-01T10:00:00.000Z",
  text: "Anthropic just dropped Claude X.",
  language: "en",
};
