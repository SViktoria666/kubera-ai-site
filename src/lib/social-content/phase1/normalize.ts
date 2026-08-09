const TRACKING_PARAMS = new Set([
  "fbclid",
  "gclid",
  "igshid",
  "mc_cid",
  "mc_eid",
  "ref",
  "srsltid",
  "src",
  "utm_campaign",
  "utm_content",
  "utm_medium",
  "utm_source",
  "utm_term",
]);

const URL_PATTERN = /https?:\/\/[^\s<>"')\]]+|www\.[^\s<>"')\]]+/gi;

const LANGUAGE_MARKERS: Record<string, string[]> = {
  en: ["the", "and", "for", "with", "release", "released", "new", "model", "automation"],
  es: ["el", "la", "los", "las", "y", "para", "con", "nuevo", "modelo", "automatizacion"],
  de: ["der", "die", "das", "und", "mit", "fur", "für", "neue", "modell", "automatisierung"],
  fr: ["le", "la", "les", "et", "pour", "avec", "nouveau", "modele", "modèle", "automatisation"],
  it: ["il", "lo", "la", "e", "per", "con", "nuovo", "modello", "automazione"],
  nl: ["de", "het", "een", "en", "voor", "met", "nieuw", "model", "automatisering"],
  pt: ["o", "a", "os", "as", "e", "para", "com", "novo", "modelo", "automacao", "automação"],
  pl: ["i", "z", "na", "dla", "nowy", "model", "automatyzacja"],
  et: ["ja", "ning", "uue", "mudel", "automaatika"],
  lv: ["un", "jauns", "modelis", "automatizacija", "automatizācija"],
  lt: ["ir", "naujas", "modelis", "automatizacija", "automatizacija"],
  fi: ["ja", "uusi", "malli", "automaatio"],
  sv: ["och", "nya", "modell", "automatisering"],
  da: ["og", "ny", "model", "automatisering"],
  ru: ["и", "для", "новый", "модель", "автоматизация"],
};

const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_MARKERS);

export function normalizeWhitespace(value: string) {
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();
}

export function normalizeUrl(rawUrl: string) {
  const trimmed = rawUrl.trim().replace(/[),.;!?]+$/g, "");
  const normalizedCandidate = trimmed.startsWith("www.") ? `https://${trimmed}` : trimmed;

  try {
    const url = new URL(normalizedCandidate);
    for (const param of [...url.searchParams.keys()]) {
      if (TRACKING_PARAMS.has(param) || param.startsWith("utm_")) {
        url.searchParams.delete(param);
      }
    }

    const search = url.searchParams.toString();
    return `${url.origin}${url.pathname}${search ? `?${search}` : ""}`.replace(/\/$/, url.pathname === "/" ? "/" : "");
  } catch {
    return trimmed;
  }
}

export function normalizeShadowText(value: string) {
  const compact = normalizeWhitespace(value);
  return compact.replace(URL_PATTERN, (match) => normalizeUrl(match));
}

export function normalizeForSimilarity(value: string) {
  return normalizeShadowText(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(value: string) {
  return normalizeForSimilarity(value).replace(/\s+/g, "-").replace(/-+/g, "-");
}

export function normalizeTimestamp(value: string | number | Date) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid timestamp");
  }
  return date.toISOString();
}

export function detectLanguage(text: string, fallback = "en") {
  const normalized = normalizeForSimilarity(text);
  let bestLanguage = fallback;
  let bestScore = 0;

  for (const [language, markers] of Object.entries(LANGUAGE_MARKERS)) {
    let score = 0;
    for (const marker of markers) {
      const pattern = new RegExp(`\\b${marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
      const matches = normalized.match(pattern);
      score += matches?.length || 0;
    }

    if (language === "ru" && /[а-яё]/i.test(text)) {
      score += 5;
    }

    if (language === "es" && /[ñáéíóúü]/i.test(text)) {
      score += 2;
    }

    if (score > bestScore) {
      bestScore = score;
      bestLanguage = language;
    }
  }

  return bestScore > 0 ? bestLanguage : fallback;
}

export function tokenizeForSimilarity(text: string) {
  return new Set(
    normalizeForSimilarity(text)
      .split(" ")
      .filter((token) => token.length >= 3),
  );
}

export function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function average(values: number[]) {
  if (values.length === 0) {
    return 0;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function capPercent(value: number) {
  return clampNumber(value, 0, 100);
}

export function supportedLanguages() {
  return [...SUPPORTED_LANGUAGES];
}

