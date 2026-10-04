# Kubera Design Engineering System — Implementation Roadmap

## NOW — before/for the first Telegram Mini App

1. Keep the current Theme Playground and approved Material #001 as rollback references.
2. Add registry metadata for component IDs, required tokens, states, QA, and provenance.
3. Implement a small Telegram platform adapter and outside-Telegram mock.
4. Build mobile shell primitives: safe area, top bar/Back Button, bottom navigation, sheet, modal, list, card, form, search/filter, toast, skeleton, empty state.
5. Add Playwright viewport/overflow/focus/contrast checks for Telegram-sized frames.
6. Establish a one-week project template that consumes the adapter and approved tokens without modifying the production site.

## NEXT — high-value internal accelerator

1. Evolve Design Studio with saved theme presets, live color controls, import/export, and contrast validation.
2. Define source-owned Kubera primitives on Base UI/Radix-compatible contracts.
3. Add private registry metadata and authenticated distribution prototype.
4. Add motion recipes with reduced-motion variants.
5. Add focused visual baselines for approved materials and primary components.
6. Add `kubera-design-engineering` repo skill and Codex retrieval checklist.

## LATER — advanced system

1. Split into a private design-system repository/package when the API has survived one Telegram project.
2. Add client theme presets and versioned migrations.
3. Add advanced optical material variants and cross-browser WebKit/Firefox labs.
4. Add charts, galleries, uploads, date pickers, and richer application patterns.
5. Add MCP/registry discovery where access control and provenance are mature.

## Rollout gates

- no production migration before owner approval of the component/material and a bounded pilot;
- no package split before one real Telegram consumer validates the API;
- no external code adoption without registry/license record;
- no “approved” status without browser evidence and accessibility notes;
- every rollout has an explicit rollback SHA and negative-control check.
