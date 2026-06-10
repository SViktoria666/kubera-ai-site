import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const catalogPath = path.join(rootDir, "src/content/geo/catalog.ts");
const geoDir = path.join(rootDir, "src/content/geo");
const llmsFullPath = path.join(rootDir, "public/llms-full.txt");
const outputPath = path.join(rootDir, "src/content/geo/generated.ts");

function normalize(text) {
  return text
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/:$/, "");
}

function nonEmptyLines(text) {
  return text.replace(/\r\n/g, "\n").split("\n");
}

function matchLine(line, patterns) {
  const normalized = normalize(line);
  return patterns.some((pattern) => normalized === normalize(pattern));
}

function findLineValue(lines, patterns) {
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

function isSectionHeading(line, locale) {
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

function stripSectionHeadings(bodyLines) {
  const blocks = [];
  let current = [];

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

function parseFaqSection(lines) {
  const items = [];
  let currentQuestion = "";
  let currentAnswer = [];

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

function parseCtaSection(lines) {
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

function parseSections(lines, locale) {
  const sections = [];
  let currentTitle = "";
  let currentBody = [];

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

function loadCatalog() {
  const source = fs.readFileSync(catalogPath, "utf8");
  const match = source.match(/export const geoCatalog = (\[[\s\S]*?\]) as const/);

  if (!match) {
    throw new Error("Unable to parse geoCatalog from src/content/geo/catalog.ts");
  }

  return Function(`"use strict"; return (${match[1]});`)();
}

function parseGeoFile(item) {
  const filePath = path.join(geoDir, item.fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing GEO file on disk: ${item.fileName}`);
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

  return {
    country: item.country,
    fileName: item.fileName,
    locale: item.locale,
    route: item.route,
    seoTitle,
    metaDescription,
    h1,
    sections: parseSections(nonFaqBody, item.locale),
    faq: parseFaqSection(faqLines),
    cta: parseCtaSection(ctaLines),
    relatedRoutes: item.relatedRoutes,
    raw,
  };
}

function assertInventory(catalog) {
  const expected = catalog.map((item) => item.fileName).sort();
  const actual = fs
    .readdirSync(geoDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort();

  if (actual.length !== expected.length || actual.join("|") !== expected.join("|")) {
    throw new Error(`GEO inventory mismatch. Expected ${expected.length} markdown files (${expected.join(", ")}), found ${actual.length} (${actual.join(", ")}).`);
  }
}

const catalog = loadCatalog();
assertInventory(catalog);

const generatedGeoPages = catalog.map(parseGeoFile);
const generatedLlmsFull = fs.existsSync(llmsFullPath) ? fs.readFileSync(llmsFullPath, "utf8").trim() : "";
const output = `// This file is generated by scripts/generate-geo-kb.mjs. Do not edit by hand.
import type { GeoPageData } from "./types";

export const generatedGeoPages = ${JSON.stringify(generatedGeoPages, null, 2)} as const satisfies readonly GeoPageData[];

export const generatedLlmsFull = ${JSON.stringify(generatedLlmsFull)} as const;
`;

fs.writeFileSync(outputPath, output);
console.log(`Generated ${path.relative(rootDir, outputPath)} with ${generatedGeoPages.length} GEO pages.`);
