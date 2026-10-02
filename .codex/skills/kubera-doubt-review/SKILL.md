---
name: kubera-doubt-review
description: Independently challenge an important Kubera PASS claim before merge, publication, deployment, migration, or acceptance.
---

## Trigger

Use before a risky merge or production action, after a multi-step fix or migration, after repeated failed attempts, or whenever Codex claims PASS on important work. Do not silently remediate findings during a review-only task.

## Reviewer mindset

Try to falsify the PASS claim rather than confirm the implementation. Read the requested evidence and repository reality independently of the implementer’s conclusion.

## Check

- wrong source of truth or stale assumption;
- hidden scope expansion, dirty-state risk, or missing files;
- nonexistent/stale commands and incomplete tests;
- false visual or deployment proof;
- missing preview, production identity, rollback, or owner approval;
- secrets or sensitive data;
- regression and protected-system risk;
- disagreement between docs, code, checkpoint, and deployed state;
- unresolved unknowns that affect the decision.

## Verdict

Classify findings as `CRITICAL BLOCKER`, `HIGH BLOCKER`, `MEDIUM FIX BEFORE ACCEPTANCE`, `LOW/LATER`, or `NO ISSUE`. Use only `APPROVE`, `FIX REQUIRED`, or `REJECT / REDESIGN`.

A review does not authorize a fix, merge, push, deploy, or external action. Preserve evidence, state the exact correction, and stop when the review scope is complete. Do not create a recursive review/fix loop.

## Output

Return the review scope, evidence checked, findings by severity, exact required corrections, verdict, owner approvals required, and the next safe action. Do not claim acceptance when required evidence is unavailable.
