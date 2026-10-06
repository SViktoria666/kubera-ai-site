# Kubera Neon Wave 1 owner-review forensic

Date: 2026-10-06
Scope: local/protected Neon review only. Production, `origin/main`, deployment, SEO, analytics, assistant backend, and content source were not modified.

## Source-of-truth findings

- Current authoritative Neon correction source: `946e4ec5eb41176c4ff6bf11b2c2e5c0ba73caef`.
- It is preserved on `neon-owner-forensic-20261006` and `origin/design/kubera-neon-controlled-rollout-prep-20261005`.
- Wave 1 handoff source: `6e984f8d3a47e6499032a1f70d918e33a7de190e`.
- Design Engineering Phase 1: `b234f4e8171cd3976bb0fdfb82fe1126d3f67c10`.
- Rollout preparation: `db8f28ef90b5dfb96ae0034374eec8098b3d08d9`.
- Current local worktree had pre-existing uncommitted visual evidence/review-index changes; they were preserved.

## Owner defect matrix

| Route / family | Component or template | Production/source behavior | Neon behavior | Classification | Root cause | Propagation radius | Action | Content/SEO risk |
|---|---|---|---|---|---|---|---|---|
| `/en/germany-automation` / GEO | `GeoPage`, generated GEO data | Source GEO CTA values are present in the current generated source; destinations are `/cases` and `/contacts`. | Earlier protected preview evidence showed visually blank CTA controls; current generator/source and preview render labels. | `NEON_REGRESSION` | Stale/generated preview state plus preview styling made the existing CTA controls appear unlabeled. | GEO preview family; generator affects 18 GEO records. | Regenerated from markdown source, added explicit browser coverage, and preserved semantic destinations. | No content or SEO change. |
| `/en/germany-automation` / GEO | `GeoPage` typography | Long GEO copy is source body text. | Prior Neon rule colored `.geo-subheading`/long-form roles cyan; current preview maps body roles to secondary text and removes that cyan override. | `NEON_REGRESSION` | Accent rule was applied to a long-form text role. | All Neon GEO pages using shared preview CSS. | Keep cyan for CTA/short emphasis; use `#B4CBD0`/`#F5F6F7` for body. | No copy or metadata change. |
| `/en/germany-automation` / GEO | GEO markdown section blocks | Several headings have empty blocks in source, including EU/GDPR/support sections; the same thin structure is visible in source rendering. | Neon glass surfaces make the existing empty sections feel larger. | `CONTENT_GAP` | Missing source body content, not a proven Neon geometry/visibility loss. | GEO source family; do not mass-fill. | Report only; no copy invented or structure rewritten. | Content change would be required; intentionally not done. |
| `/en/germany-automation` / GEO | `GeoPage` / shared paragraph width | Long sections such as “Why German Companies Invest in AI Automation” render from preserved source blocks. | Current preview preserves content/order and uses readable secondary text; responsive boundary proof passed. | `EXISTING_PRODUCTION` | No Neon-only width/content loss proven. | GEO family. | Preserve source; continue owner visual review. | None. |
| Germany WhatsApp commercial | `IndustrySolutionTemplate`, `IndustryMidCTA` | “Want to map this to your business?” exists in source order. | Preview reuses the same template/order; CTA remains present. | `EXISTING_PRODUCTION` | Owner perception was not reproduced as a Neon reorder/duplication. | All IndustrySolutionTemplate routes share the behavior. | Do not remove or reorder. | None. |
| Germany WhatsApp commercial | pricing-card primitive | Starter/Standard/Premium source content and “Most Popular” emphasis remain. | Preview-only grid-row anchoring aligns card CTA bottoms. | `NEON_REGRESSION` | Variable content plus Neon composition exposed unequal CTA baselines. | Commercial preview; shared primitive pattern also used by Home. | Preview-scoped `grid-template-rows` and CTA bottom anchoring. | Production geometry unchanged. |
| Home | `PricingPackages` / pricing-card primitive | Same Starter/Standard/Premium structure and badge. | Preview CTA baselines now align; no flattening of Standard emphasis. | `NEON_REGRESSION` | Same variable-height composition issue as commercial preview. | Home preview and shared pricing primitive. | Reusable preview geometry rule; no content change. | None. |
| Home | `LossCalculator` / `.calculator-panel` | Calculator logic and panel structure are existing production behavior. | Preview showed connecting/rim lines from nested surface/shadow composition; shadow removed only in preview. | `NEON_REGRESSION` | Neon nested-surface shadow visually joined independent functional panels. | Home preview calculator only. | Remove preview-only panel shadow; calculation logic unchanged. | None. |
| Neon family previews | `NeonPreviewShell`, `SiteShell`, `AiAssistantWidget` | Production assistant is separately D1-protected and remains unchanged. | Preview wrapper initially omitted it when flag was off and duplicated it when host shell already enabled it. | `NEON_REGRESSION` | Preview harness ownership/feature-flag interaction. | All five Neon preview routes. | Wrapper now injects the real assistant only when no host-shell assistant exists; focused test proves one launcher. | No backend/API change. |
| Landing-page / website-building | `CommercialServicePage`, Germany landing-page content, preserved visual asset | Production family has the promotional visual/asset. | Protected representative added at `/design-lab/neon-preview/landing-page`; asset remains present. | `NEON_REGRESSION` | Wave 1 coverage gap, not asset deletion. | Landing-page family coverage. | Add protected route/evidence; do not replace asset. | None. |
| Contacts | `ContactSection` | Approved production control. | Preview remains a control surface and no Contacts source/structure change was made. | `INTENTIONAL_PREVIEW_DIFFERENCE` | Neon surface treatment is isolated to the preview wrapper. | Contacts preview only. | Keep unchanged and use as regression control. | None. |

## Evidence and gates

- Protected evidence: `reports/evidence/neon-preview-wave1/`.
- Representative routes: Home, Germany WhatsApp Commercial, Germany GEO, Contacts, Germany Landing Page.
- Local visual review index: `/design-lab/visual-review`; route-level statuses default to `NOT REVIEWED`.
- Current build produced 229 routes; sitemap contains 193 public indexable URLs. The review index covers those 193 sitemap URLs plus five protected preview links and excludes design-lab routes from SEO counts.
- `npm run typecheck`: PASS.
- `npm run build`: PASS (229 generated pages).
- `npm run validate:seo`: PASS (48 blog files, 213 built indexable routes, 0 warnings).
- D1 critical browser cases: 24/24 explicit PASS lines at 1366, 390, and 1024; runner summary did not exit cleanly after completion.
- Neon focused GEO assistant test: PASS; one assistant launcher, no duplicate.
- Neon boundary proof: PASS at 390, 561, 768, 1024, 1200, 1366, and 1440 for all five protected routes; runner summary did not exit cleanly after explicit PASS.
- No Vercel preview was created and no production deployment was made.

## Owner-review status

Not ready to claim complete approval. Owner review remains required, and the GEO source gap remains intentionally unedited. The next safe action is owner review of the local index and five protected surfaces, followed by a separate content decision if the empty GEO sections or CTA source are to be addressed.
