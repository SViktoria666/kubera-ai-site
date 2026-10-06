import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const geoDir = path.join(root, "src", "content", "geo");
const catalogSource = fs.readFileSync(path.join(geoDir, "catalog.ts"), "utf8");
const catalog = [...catalogSource.matchAll(/country:\s*"([^"]+)"[\s\S]*?fileName:\s*"([^"]+)"[\s\S]*?route:\s*"([^"]+)"/g)].map((match) => ({
  country: match[1],
  fileName: match[2],
  route: match[3],
}));

function normalize(text) {
  return text.normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim().replace(/:$/, "");
}

function matches(line, patterns) {
  return patterns.some((pattern) => normalize(line) === normalize(pattern));
}

function isSectionHeading(line, locale) {
  const value = normalize(line);
  if (!value) return false;
  if (/^intro$/.test(value)) return true;
  if (/^(faq|preguntas frecuentes)$/.test(value)) return true;
  if (/^(cta section|llamada a la accion)$/.test(value)) return true;
  if (/^(relevant industries|sectores relevantes)$/.test(value)) return true;
  if (/^(example automation scenarios|escenarios de automatizacion)$/.test(value)) return true;
  if (/^(ai automation opportunities in |oportunidades de automatizacion con ia )/.test(value)) return true;
  if (/^(kubera ai solutions for |soluciones de kubera ai )/.test(value)) return true;
  if (/^(what processes should |que procesos deben )/.test(value)) return true;
  if (/^(is ai automation worth it |merece la pena la automatizacion con ia )/.test(value)) return true;
  if (/^(ai automation in |automatizacion con ia en )/.test(value)) return true;
  if (/^(business challenges specific to the |desafios del mercado )/.test(value)) return true;
  if (/^(why |por que )/.test(value) && value.includes("ai automation")) return true;
  if (locale === "es") {
    return value.startsWith("introduccion") || value.startsWith("desafios del mercado") || value.startsWith("por que ");
  }
  return value.length < 95 && !/[.?!]$/.test(value) && !/^\d+\./.test(value);
}

function isStructuralPlaceholder(title) {
  return /^(relevant industries|example automation scenarios|kubera ai solutions for |ai automation opportunities in |why .* choose kubera ai:?$|why .* businesses choose kubera ai:?$)/i.test(normalize(title));
}

function parseSections(fileName) {
  const raw = fs.readFileSync(path.join(geoDir, fileName), "utf8");
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const locale = fileName === "spain.md" ? "es" : "en";
  const h1Index = lines.findIndex((line) => matches(line, ["H1"]));
  const bodyLines = h1Index >= 0 ? lines.slice(h1Index + 2) : lines;
  const faqIndex = bodyLines.findIndex((line) => matches(line, ["FAQ", "Preguntas Frecuentes"]));
  const body = bodyLines.slice(0, faqIndex >= 0 ? faqIndex : bodyLines.length);
  const sections = [];
  let title = "";
  let current = [];
  const flush = () => {
    if (!title) return;
    const blocks = current.join("\n").split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
    sections.push({ title, blocks });
    title = "";
    current = [];
  };

  for (const rawLine of body) {
    const line = rawLine.trim();
    if (!line) {
      current.push("");
    } else if (isSectionHeading(line, locale)) {
      flush();
      title = line.replace(/^#+\s*/, "").trim();
    } else {
      current.push(rawLine);
    }
  }
  flush();
  return sections;
}

const records = [];
for (const item of catalog) {
  parseSections(item.fileName).forEach((section, index) => {
    const body = section.blocks.join(" ").trim();
    const bodyLength = body.length;
    const structural = !body && isStructuralPlaceholder(section.title);
    const quality = structural ? "STRUCTURAL PLACEHOLDER" : bodyLength === 0 ? "EMPTY" : bodyLength < 120 ? "THIN" : "ADEQUATE";
    records.push({
      route: item.route,
      countryRegion: item.country,
      section: section.title,
      cardItem: index + 1,
      titlePresent: Boolean(section.title),
      bodyPresent: Boolean(body),
      bodyLength,
      bodyQualityClass: quality,
      duplicateBoilerplate: false,
      empty: quality === "EMPTY",
      thin: quality === "THIN",
      sourceFile: `src/content/geo/${item.fileName}`,
      sourceField: `sections[${index}]`,
      sharedTemplate: "GeoPage",
      ownerActionNeeded: quality === "ADEQUATE" ? "NO" : quality === "STRUCTURAL PLACEHOLDER" ? "TEMPLATE/PARSER REVIEW" : "CONTENT REMEDIATION",
      bodyFingerprint: body.toLowerCase().replace(/\s+/g, " "),
    });
  });
}

const bodyGroups = new Map();
for (const record of records) {
  const key = record.bodyFingerprint;
  bodyGroups.set(key, (bodyGroups.get(key) ?? 0) + 1);
}
for (const record of records) {
  const key = record.bodyFingerprint;
  if (record.bodyPresent && bodyGroups.get(key) > 1) {
    record.duplicateBoilerplate = true;
    if (record.bodyQualityClass === "ADEQUATE") record.bodyQualityClass = "DUPLICATE/BOILERPLATE";
  }
}

const summary = {
  totalGeoRoutes: catalog.length,
  affectedRoutes: [...new Set(records.filter((record) => record.bodyQualityClass !== "ADEQUATE" || record.duplicateBoilerplate).map((record) => record.route))].length,
  totalItems: records.length,
  emptyItems: records.filter((record) => record.bodyQualityClass === "EMPTY").length,
  thinItems: records.filter((record) => record.bodyQualityClass === "THIN").length,
  adequateItems: records.filter((record) => record.bodyQualityClass === "ADEQUATE").length,
  duplicateBoilerplate: records.filter((record) => record.bodyQualityClass === "DUPLICATE/BOILERPLATE").length,
  structuralPlaceholders: records.filter((record) => record.bodyQualityClass === "STRUCTURAL PLACEHOLDER").length,
  renderingBugs: 0,
  rootSource: "src/content/geo/*.md -> scripts/generate-geo-kb.mjs/generated.ts -> GeoPage parser -> GeoPage renderer",
  classificationRule: "EMPTY = no parsed body; THIN = body length under 120 characters; STRUCTURAL PLACEHOLDER = known container heading with no body; ADEQUATE = 120+ characters; no rendering bug inferred from source absence.",
};

const output = { generatedAt: new Date().toISOString(), summary, routes: records };
for (const record of output.routes) delete record.bodyFingerprint;
const outputPath = path.join(root, "reports", "KUBERA_GEO_CONTENT_GAP_FORENSIC_2026-10-06.json");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(JSON.stringify(summary, null, 2));
console.log(`REPORT=${outputPath}`);
