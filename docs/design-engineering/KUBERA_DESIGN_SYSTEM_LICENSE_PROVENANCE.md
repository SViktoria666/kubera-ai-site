# Kubera Design System — License and Provenance Policy

Reviewed: 2026-10-05

## Rule

Every external resource is recorded before it becomes a dependency, copied source, or approved pattern. This private system must preserve source URL, repository/version or commit, license, commercial-use interpretation, attribution/notice requirements, reuse mode, and evidence date.

## Reuse modes

- `REFERENCE ONLY`: study behavior/architecture; no copied code/assets.
- `ARCHITECTURAL PATTERN`: reimplement independently; preserve link and rationale.
- `DIRECT DEPENDENCY`: package remains external; record version and notices.
- `ADAPTABLE CODE`: copy only after license permits and preserve required notices.
- `KUBERA ORIGINAL IMPLEMENTATION`: authored in Kubera; no external code copied.
- `LEGAL REVIEW REQUIRED`: do not ship or redistribute until resolved.

## Current records

| Resource | License/provenance decision |
|---|---|
| `@sohumsuthar/liquid-glass@3.1.0` | MIT; direct dependency already installed; approved material #001; preserve MIT notice. |
| tweakcn | Apache-2.0; architecture reference only; review NOTICE/patent terms before copying. |
| Liqui Design | MIT; reference/test candidate; source distribution through shadcn registry; do not copy until tested. |
| theme-generator | MIT; UX/reference only; no code copied. |
| applecn | MIT; architecture/agent pattern only; do not copy Apple marks, assets, or claims. |
| shadcn Registry | protocol/docs; each registry item retains its own license; private authentication must not expose secrets. |
| TMA.js ecosystem | package license and version must be checked at adoption; official Telegram platform rules remain authoritative. |
| TelegramUI | MIT per repository record; test exact dependency/version before client use. |
| shadcn-studio | MIT plus Commons Clause in repository license; legal review required; not used as a dependency or copied source. |
| Demo imagery in glass repositories | do not assume repository code license covers wallpapers or third-party images. |

## Operational checks

1. Pin the version/commit in the registry before testing.
2. Inspect package and repository license files, not only a README badge.
3. Retain NOTICE/copyright files when required.
4. Separate code rights from asset/font/icon rights.
5. Record whether the result is a dependency, copied source, or independent reimplementation.
6. Run a legal review for ambiguous, dual, Commons-Clause, AGPL, or asset-unclear resources.

This phase installed no new external dependency and copied no external code.
