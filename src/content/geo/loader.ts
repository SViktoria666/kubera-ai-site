import "server-only";

import fs from "node:fs";
import path from "node:path";
import { geoCatalog, getGeoCatalogItemByRoute } from "./catalog";
import type { GeoCta, GeoFaqItem, GeoPageData, GeoParsedSection } from "./types";

const geoDir = path.join(process.cwd(), "src/content/geo");

function normalize(text: string) {
  return text
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/:$/, "");
}

function nonEmptyLines(text: string) {
  return text.replace(/\r\n/g, "\n").split("\n");
}

function matchLine(line: string, patterns: string[]) {
  const normalized = normalize(line);
  return patterns.some((pattern) => normalized === normalize(pattern));
}

function findLineValue(lines: string[], patterns: string[]) {
  for (let i = 0; i < lines.length; i += 1) {
    if (matchLine(lines[i], patterns)) {
      for (let j = i + 1; j < lines.length; j += 1) {
        const candidate = lines[j].trim();
        if (candidate) {
          return candidate;
        }
      }
    }
  }

  return "";
}

function isSectionHeading(line: string, locale: "en" | "es") {
  const normalized = normalize(line);
  if (!normalized) return false;
  if (/^intro$/.test(normalized)) return true;
  if (/^(faq|preguntas frecuentes)$/.test(normalized)) return true;
  if (/^(cta section|llamada a la accion)$/.test(normalized)) return true;
  if (/^(relevant industries|sectores relevantes)$/.test(normalized)) return true;
  if (/^(example automation scenarios|escenarios de automatizacion)$/.test(normalized)) return true;
  if (/^(ai automation opportunities in |oportunidades de automatizacion con ia )/.test(normalized)) return true;
  if (/^(kubera ai solutions for |soluciones de kubera ai )/.test(normalized)) return true;
  if (/^(what processes should |que procesos deben )/.test(normalized)) return true;
  if (/^(is ai automation worth it |merece la pena la automatizacion con ia )/.test(normalized)) return true;
  if (/^(ai automation in |automatizacion con ia en )/.test(normalized)) return true;
  if (/^(business challenges specific to the |desafios del mercado )/.test(normalized)) return true;
  if (/^(why |por que )/.test(normalized) && normalized.includes("ai automation")) return true;
  if (locale === "es") {
    return normalized.startsWith("introduccion") || normalized.startsWith("desafios del mercado") || normalized.startsWith("por que ");
  }

  return normalized.length < 95 && !/[.?!]$/.test(normalized) && !/^\d+\./.test(normalized);
}

function isSubHeading(line: string) {
  return /^\d+\.\s+/.test(line.trim()) || /^scenario \d+:/i.test(line.trim()) || /^\d+\)/.test(line.trim());
}

function stripSectionHeadings(bodyLines: string[]) {
  const blocks: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.map((line) => line.trim()).join(" ").trim();
    if (text) {
      blocks.push(text);
    }
    current = [];
  };

  for (const line of bodyLines) {
    if (!line.trim()) {
      flush();
      continue;
    }
    current.push(line);
  }

  flush();
  return blocks;
}

function parseFaqSection(lines: string[]) {
  const items: GeoFaqItem[] = [];
  let currentQuestion = "";
  let currentAnswer: string[] = [];

  const flush = () => {
    if (currentQuestion && currentAnswer.length) {
      items.push({
        question: currentQuestion,
        answer: currentAnswer.join(" ").trim(),
      });
    }
    currentQuestion = "";
    currentAnswer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    const questionMatch = line.match(/^\d+\.\s*(.+)$/);
    if (questionMatch) {
      flush();
      currentQuestion = questionMatch[1].trim();
      continue;
    }

    if (!currentQuestion) continue;
    currentAnswer.push(line);
  }

  flush();
  return items;
}

function parseCtaSection(lines: string[]): GeoCta | null {
  const headline = findLineValue(lines, ["Headline:", "Titular:"]);
  const body = findLineValue(lines, ["Body:", "Texto:"]);
  const primary = findLineValue(lines, ["Primary CTA:", "CTA Principal:"]);
  const secondary = findLineValue(lines, ["Secondary CTA:", "CTA Secundario:"]);

  if (!headline && !body && !primary && !secondary) {
    return null;
  }

  return {
    headline,
    body,
    primary,
    secondary,
  };
}

function parseSections(lines: string[], locale: "en" | "es") {
  const sections: GeoParsedSection[] = [];
  let currentTitle = "";
  let currentBody: string[] = [];

  const flush = () => {
    if (currentTitle) {
      sections.push({
        title: currentTitle,
        blocks: stripSectionHeadings(currentBody),
      });
    }
    currentTitle = "";
    currentBody = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      currentBody.push("");
      continue;
    }

    if (isSectionHeading(line, locale)) {
      flush();
      currentTitle = line.replace(/^#+\s*/, "").trim();
      continue;
    }

    currentBody.push(rawLine);
  }

  flush();
  return sections;
}

function parseGeoFile(fileName: string): GeoPageData {
  const catalogItem = geoCatalog.find((item) => item.fileName === fileName);

  if (!catalogItem) {
    throw new Error(`Unknown GEO file: ${fileName}`);
  }

  const filePath = path.join(geoDir, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing GEO file on disk: ${fileName}`);
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const lines = nonEmptyLines(raw);

  const seoTitle = findLineValue(lines, ["SEO Title:", "Título SEO:"]);
  const metaDescription = findLineValue(lines, ["Meta Description:", "Meta Descripción:"]);
  const h1 = findLineValue(lines, ["H1"]);

  const h1Index = lines.findIndex((line) => matchLine(line, ["H1"]));
  const bodyLines = h1Index >= 0 ? lines.slice(h1Index + 2) : lines.slice();

  const faqHeadingIndex = bodyLines.findIndex((line) => matchLine(line, ["FAQ", "Preguntas Frecuentes"]));
  const ctaHeadingIndex = bodyLines.findIndex((line) => matchLine(line, ["CTA Section", "Llamada a la Acción"]));

  const faqLines = faqHeadingIndex >= 0 ? bodyLines.slice(faqHeadingIndex + 1, ctaHeadingIndex >= 0 ? ctaHeadingIndex : undefined) : [];
  const ctaLines = ctaHeadingIndex >= 0 ? bodyLines.slice(ctaHeadingIndex + 1) : [];
  const nonFaqBody = faqHeadingIndex >= 0 ? bodyLines.slice(0, faqHeadingIndex) : bodyLines;

  const sections = parseSections(nonFaqBody, catalogItem.locale);
  const faq = parseFaqSection(faqLines);
  const cta = parseCtaSection(ctaLines);

  return {
    country: catalogItem.country,
    fileName,
    locale: catalogItem.locale,
    route: catalogItem.route,
    seoTitle,
    metaDescription,
    h1,
    sections,
    faq,
    cta,
    relatedRoutes: catalogItem.relatedRoutes,
    raw,
  };
}

const expectedGeoFileNames = geoCatalog.map((item) => item.fileName).sort();
const actualGeoFileNames = fs
  .readdirSync(geoDir)
  .filter((fileName) => fileName.endsWith(".md"))
  .sort();

if (actualGeoFileNames.length !== expectedGeoFileNames.length || actualGeoFileNames.join("|") !== expectedGeoFileNames.join("|")) {
  throw new Error(
    `GEO inventory mismatch. Expected ${expectedGeoFileNames.length} markdown files (${expectedGeoFileNames.join(", ")}), found ${actualGeoFileNames.length} (${actualGeoFileNames.join(", ")}).`,
  );
}

export function getAllGeoPages() {
  return geoCatalog.map((item) => parseGeoFile(item.fileName));
}

export function getGeoPageByRoute(route: string) {
  const catalogItem = getGeoCatalogItemByRoute(route);

  if (!catalogItem) {
    return null;
  }

  return parseGeoFile(catalogItem.fileName);
}

export function getGeoPageRoutes() {
  return geoCatalog.map((item) => item.route);
}

export function getGeoIndexLinks() {
  return geoCatalog.map((item) => ({
    country: item.country,
    route: item.route,
    locale: item.locale,
  }));
}
