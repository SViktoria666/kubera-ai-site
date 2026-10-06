export function validateContentBearingItems(items, context = "content items") {
  const failures = [];
  for (const [index, item] of items.entries()) {
    if (!item || typeof item !== "object") {
      failures.push(`${context}[${index}] is not an object`);
      continue;
    }
    if (item.titlePresent && !item.bodyPresent && item.requiredBody !== false) {
      failures.push(`${context}[${index}] is title-only: ${item.title ?? "(untitled)"}`);
    }
  }
  return failures;
}

export function validateGeoGeneratedPages(pages) {
  const failures = [];
  if (!Array.isArray(pages) || pages.length === 0) return ["generated GEO page collection is empty"];
  for (const page of pages) {
    if (!page?.route) failures.push("generated GEO page is missing route");
    if (!page?.h1?.trim()) failures.push(`${page?.route ?? "(unknown route)"} is missing H1`);
    for (const [index, section] of (page.sections ?? []).entries()) {
      if (!section?.title?.trim()) failures.push(`${page.route} sections[${index}] is missing title`);
      if (!Array.isArray(section?.blocks) || !section.blocks.some((block) => String(block).trim())) {
        failures.push(`${page.route} sections[${index}] is an empty content-bearing section`);
      }
    }
    if (page.cta) {
      for (const field of ["headline", "body", "primary", "secondary"]) {
        if (!String(page.cta[field] ?? "").trim()) failures.push(`${page.route} CTA is missing ${field}`);
      }
    }
    for (const [index, item] of (page.faq ?? []).entries()) {
      if (!item.question?.trim() || !item.answer?.trim()) failures.push(`${page.route} FAQ[${index}] is incomplete`);
    }
  }
  return failures;
}

export function validateSourceGeneratedParity(sourcePages, generatedPages) {
  const failures = [];
  const generatedByFile = new Map(generatedPages.map((page) => [page.fileName, page]));
  for (const source of sourcePages) {
    const generated = generatedByFile.get(source.fileName);
    if (!generated) {
      failures.push(`${source.fileName} has no generated page`);
      continue;
    }
    if (source.raw !== generated.raw) failures.push(`${source.fileName} raw source differs from generated raw field`);
    if (source.route !== generated.route) failures.push(`${source.fileName} route differs between source catalog and generated data`);
  }
  if (sourcePages.length !== generatedPages.length) failures.push(`source/generated page count differs: ${sourcePages.length} vs ${generatedPages.length}`);
  return failures;
}
