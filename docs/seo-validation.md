# SEO Validation Contract

This is a documentation contract. It does not claim that an automated SEO gate exists.

## Current checks

- `npm run validate:blog` validates the repository's current blog/content rules.
- `npm run build` runs the current prebuild validation/generation path.
- Route, metadata, sitemap, robots, and rendered output must be inspected when a change affects them.

## Future automated checks

The following are desired future checks, not installed gates: canonical/sitemap consistency, duplicate index entries, schema/date agreement, crawlable internal links, and rendered-source agreement.

## Validation checklist

For a relevant page verify:

- title, description, and exactly one intended H1;
- canonical and host consistency;
- robots behavior and sitemap membership;
- structured data/schema validity and date agreement;
- rendered article/page content, not only source text;
- internal links resolve to current canonical slugs and are crawlable;
- related cards and CTA do not introduce broken or redirected targets;
- source, metadata, schema, and rendered page tell the same story.

Do not classify a historical GSC state as a current error without checking the live URL, redirects, robots, canonical, sitemap, and intended indexability.
