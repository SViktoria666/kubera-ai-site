import { capPercent, normalizeForSimilarity, normalizeWhitespace, slugify, tokenizeForSimilarity } from "./normalize.ts";

const COMPANY_LEXICON = [
  "anthropic",
  "openai",
  "google",
  "meta",
  "microsoft",
  "mistral",
  "xai",
  "perplexity",
  "apple",
  "amazon",
  "nvidia",
  "replit",
  "notion",
  "hubspot",
  "salesforce",
  "atlassian",
  "zapier",
  "stripe",
  "linkedin",
];

const PRODUCT_PATTERNS = [
  /\bClaude(?:\s+[A-Z0-9][A-Za-z0-9.-]*)?/i,
  /\bGPT(?:-\d+(?:\.\d+)?)?(?:\s*[A-Za-z0-9.-]+)?/i,
  /\bChatGPT\b/i,
  /\bGemini(?:\s+[A-Z0-9][A-Za-z0-9.-]*)?/i,
  /\bLlama(?:\s+[A-Z0-9][A-Za-z0-9.-]*)?/i,
  /\bMistral(?:\s+[A-Z0-9][A-Za-z0-9.-]*)?/i,
  /\bCopilot(?:\s+[A-Z0-9][A-Za-z0-9.-]*)?/i,
  /\bPerplexity(?:\s+[A-Z0-9][A-Za-z0-9.-]*)?/i,
];

const EVENT_ACTIONS: Array<{ pattern: RegExp; action: string }> = [
  { pattern: /\breleased?\b/i, action: "releases" },
  { pattern: /\blaunched?\b/i, action: "launches" },
  { pattern: /\bannounc(?:ed|es)?\b/i, action: "announces" },
  { pattern: /\bdrop(?:ped|s)?\b/i, action: "drops" },
  { pattern: /\bintroduc(?:ed|es)?\b/i, action: "introduces" },
  { pattern: /\bship(?:ped|s)?\b/i, action: "ships" },
  { pattern: /\broll(?:ed)? out\b/i, action: "rolls out" },
  { pattern: /\bunveil(?:ed|s)?\b/i, action: "unveils" },
  { pattern: /\bupdate(?:d|s)?\b/i, action: "updates" },
];

const KUBERA_KEYWORDS = [
  "automation",
  "agent",
  "agents",
  "assistant",
  "business",
  "crm",
  "customer",
  "support",
  "sales",
  "ops",
  "operations",
  "workflow",
  "telegram",
  "threads",
  "lead",
  "marketing",
  "analytics",
  "integration",
  "launch",
  "model",
  "ai",
  "llm",
];

const CATEGORY_KEYWORDS: Array<{ keywords: string[]; category: string }> = [
  { keywords: ["model", "llm", "weights", "benchmark"], category: "ai model release" },
  { keywords: ["agent", "assistant", "workflow", "automation"], category: "ai automation" },
  { keywords: ["funding", "acquired", "acquisition", "raised"], category: "company update" },
  { keywords: ["integration", "api", "sdk", "platform"], category: "platform update" },
  { keywords: ["trend", "news", "announcement"], category: "news signal" },
];

function normalizeCompany(text: string) {
  const lower = text.toLowerCase();
  return COMPANY_LEXICON.find((company) => new RegExp(`\\b${company}\\b`, "i").test(lower));
}

function normalizeProduct(product: string) {
  return normalizeWhitespace(product)
    .replace(/\b(new|latest|fresh|mini|max|pro|ultra|model|release|announced|launched|dropped|rolled out)\b/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/[.!,;:]+$/g, "")
    .trim();
}

function productRoot(product: string) {
  const normalized = normalizeProduct(product).toLowerCase();

  if (normalized.includes("claude")) return "claude";
  if (normalized.includes("chatgpt")) return "chatgpt";
  if (normalized.includes("gpt")) return "gpt";
  if (normalized.includes("gemini")) return "gemini";
  if (normalized.includes("llama")) return "llama";
  if (normalized.includes("mistral")) return "mistral";
  if (normalized.includes("copilot")) return "copilot";
  if (normalized.includes("perplexity")) return "perplexity";

  return slugify(normalized || "topic");
}

function extractProduct(text: string) {
  for (const pattern of PRODUCT_PATTERNS) {
    const match = text.match(pattern);
    if (match?.[0]) {
      return normalizeProduct(match[0]);
    }
  }

  const fallback = text.match(/\b([A-Z][A-Za-z0-9.-]+(?:\s+[A-Z0-9][A-Za-z0-9.-]+){0,2})\b/);
  return fallback?.[1] ? normalizeProduct(fallback[1]) : "";
}

function extractEventAction(text: string) {
  for (const candidate of EVENT_ACTIONS) {
    if (candidate.pattern.test(text)) {
      return candidate.action;
    }
  }

  return "updates";
}

function deriveCategory(text: string) {
  const normalized = normalizeForSimilarity(text);

  for (const entry of CATEGORY_KEYWORDS) {
    if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
      return entry.category;
    }
  }

  if (
    /release|launche|announce|drop|introduc|roll out|update/.test(normalized) &&
    /(claude|gpt|chatgpt|gemini|llama|mistral|copilot|perplexity|model)/.test(normalized)
  ) {
    return "ai model release";
  }

  return "general ai / business signal";
}

function buildCanonicalTopic(company: string | undefined, product: string, eventAction: string, text: string) {
  const canonicalProduct = normalizeProduct(product) || normalizeWhitespace(product) || "topic";
  if (company && canonicalProduct) {
    return `${company} ${eventAction} ${canonicalProduct}`.replace(/\s+/g, " ").trim();
  }

  if (canonicalProduct) {
    return `${canonicalProduct} ${eventAction}`.replace(/\s+/g, " ").trim();
  }

  return normalizeWhitespace(text).split(/[.!?]/)[0].slice(0, 120);
}

function extractEntities(text: string) {
  const normalized = normalizeForSimilarity(text);
  const company = normalizeCompany(normalized);
  const product = extractProduct(text);
  const entities = new Set<string>();

  if (company) {
    entities.add(company);
  }

  if (product) {
    entities.add(normalizeProduct(product));
  }

  return { company, product, entities: [...entities] };
}

function scoreKuberaRelevance(text: string, category: string) {
  const normalized = normalizeForSimilarity(text);
  const matches = KUBERA_KEYWORDS.filter((keyword) => normalized.includes(keyword)).length;
  const categoryBonus = category.includes("ai") || category.includes("automation") ? 20 : 8;
  return capPercent(Math.min(100, matches * 14 + categoryBonus));
}

export type TopicExtractionResult = {
  canonicalTopic: string;
  topicKey: string;
  entities: string[];
  products: string[];
  eventAction: string;
  category: string;
  kuberaRelevanceScore: number;
  tokenFingerprint: string[];
};

export function extractTopic(text: string): TopicExtractionResult {
  const normalizedText = normalizeWhitespace(text);
  const { company, product, entities } = extractEntities(normalizedText);
  const eventAction = extractEventAction(normalizedText);
  const category = deriveCategory(normalizedText);
  const canonicalTopic = buildCanonicalTopic(company, product, eventAction, normalizedText);
  const productList = product ? [normalizeProduct(product)] : [];
  const topicKey = slugify(productRoot(product || canonicalTopic));
  const fingerprint = [...tokenizeForSimilarity(normalizedText)]
    .filter((token) => token.length >= 3)
    .slice(0, 24);

  return {
    canonicalTopic,
    topicKey,
    entities,
    products: productList,
    eventAction,
    category,
    kuberaRelevanceScore: scoreKuberaRelevance(normalizedText, category),
    tokenFingerprint: fingerprint,
  };
}

export function buildKuberaAngleSuggestions(topic: TopicExtractionResult) {
  const angles = new Set<string>();
  const lower = `${topic.canonicalTopic} ${topic.category}`.toLowerCase();

  if (lower.includes("model") || lower.includes("claude") || lower.includes("gpt") || lower.includes("gemini")) {
    angles.add("customer support");
    angles.add("internal automation");
    angles.add("sales operations");
  }

  if (lower.includes("automation") || lower.includes("workflow") || lower.includes("assistant")) {
    angles.add("lead handling");
    angles.add("workflow automation");
  }

  if (lower.includes("crm") || lower.includes("support") || lower.includes("sales")) {
    angles.add("customer operations");
  }

  if (angles.size === 0) {
    angles.add("business operations");
    angles.add("productivity");
  }

  return [...angles].slice(0, 5);
}
