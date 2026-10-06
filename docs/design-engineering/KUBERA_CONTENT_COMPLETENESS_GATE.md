# Kubera Content Completeness Gate

## Permanent engineering rule

**TECHNICALLY VALID ≠ CONTENT COMPLETE ≠ USER READY.**

A route can build, return HTTP 200, contain valid DOM, pass hydration, and still be materially incomplete for a user. Content-bearing products must prove this chain:

`SOURCE → DATA/GENERATION → PARSER → RENDER → VISIBLE CONTENT → BROWSER QA → COMPLETENESS GATE`

## Scope

This rule applies to:

- Kubera website pages;
- future client websites;
- React/Next.js products;
- Telegram Mini Apps;
- generated listings and profiles;
- service cards, paid listings, lessons, capsules, and other data-driven UI.

It is a reusable quality principle, not a Telegram framework or product migration.

## Gate requirements

Validation is family/component-aware. Where a schema requires a body, description, answer, or content-bearing item, the gate must reject:

- missing required body;
- title-only commercial/content cards;
- empty descriptions or content arrays;
- invalid structural placeholders rendered as content;
- source/generated parity loss;
- generated/parser parity loss;
- suspicious mass loss of populated fields;
- empty content-bearing rendered structures.

The gate must not impose a global word count. Buttons, navigation labels, badges, prices, metadata labels, and other compact UI strings are not content-completeness failures merely because they are short.

## Kubera implementation

- Canonical command: `npm run validate:content`.
- Controlled failure proof: `npm run test:content`.
- Current GEO contract checks all 18 markdown-backed pages, raw source preservation, required section bodies, CTA fields, and FAQ question/answer pairs.
- Renderer defense omits malformed empty GEO content panels, but parser correctness and validation remain primary.

## Incident lesson

The GEO incident would have been caught before publication by required-body and source/generated parity checks. Build/SEO/browser checks remain necessary, but they are not substitutes for semantic completeness validation.
