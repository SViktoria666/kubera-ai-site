# Kubera Design Studio — Architecture Target

Status: architecture ready; implementation deliberately deferred beyond the bounded UI Kit.

## Purpose

Design Studio is an internal preview and decision tool, not a Figma replacement and not a production route. It should load approved themes, materials, components, platform frames, and QA rules from structured data.

## Layers

```text
Design Studio shell
  ├─ theme/preset state
  ├─ token controls and swatches
  ├─ material controls
  ├─ component preview registry
  ├─ viewport/platform frame
  ├─ accessibility/readability panel
  └─ export: tokens + preset + implementation guidance
```

Runtime components should not know that they are inside Design Studio. The shell supplies tokens and preview data; the same component source can later be consumed by a web or Telegram project.

## Initial data model

```ts
type ThemePreset = {
  id: string;
  name: string;
  status: 'current' | 'approved' | 'experimental';
  tokens: Record<string, string>;
  compatibility: { web: boolean; telegram: boolean; mobile: boolean };
  provenance: string[];
};

type ArsenalSlot = {
  id: string;
  primary?: string;
  alternatives?: string[];
  experimental?: string[];
  constraints: string[];
};

type PreviewSpec = {
  componentId: string;
  variant: string;
  states: string[];
  requiredTokens: string[];
  qa: string[];
};
```

## Planned panels

- Themes: Current Kubera, Kubera Neon, future Emerald/Light/client presets.
- Live colors: background, surface, primary, secondary, text, border, glow, atmosphere, brand.
- Materials: glass family, frost, refraction, specular, dispersion, rim, glow, fallback.
- Typography: family, scale, weight, line-height; guarded from structural layout changes.
- Components: buttons, navigation, cards, forms, pricing, tabs, modal, mobile navigation, Telegram controls.
- Viewports: mobile, tablet, desktop, Telegram Mini App frame with safe-area simulation.
- Accessibility: contrast, focus, reduced motion, target sizes.
- Export: token preset, component configuration, provenance, and Codex implementation recipe.

## Implementation phases

1. Now: retain the UI Kit and move its metadata into the registry; add explicit component IDs and required-token lists.
2. Next: add a token editor with preset save/import/export and contrast checks.
3. Next: add platform frames and Telegram adapter preview.
4. Later: add material tuning controls and visual diff baselines; never let editor values silently become production values.

## Guardrails

- Theme and material controls cannot mutate page width, typography geometry, breakpoints, DOM order, content, or routing.
- Export must include provenance and a browser fallback.
- Preview-only values are session-scoped until explicitly saved as a named preset.
- A preset cannot become production without owner approval and browser evidence.
