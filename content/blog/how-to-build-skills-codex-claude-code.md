---
title: "How to Build a Skill for Codex and Claude Code: A Step-by-Step Guide"
slug: "how-to-build-skills-codex-claude-code"
description: "Re-typing the same instructions to a coding agent is a sign you need a skill. This guide shows how to build one for Codex or Claude Code: what to prepare, how to write the file, how to test that it triggers and works, and how to share it with a team."
seoTitle: "How to Build a Skill for Codex and Claude Code"
metaDescription: "A step-by-step guide to building a reliable skill for Codex or Claude Code: the SKILL.md format, the questions to answer first, a worked example, testing, troubleshooting and sharing with a team."
date: "2026-11-02"
publishedAt: "2026-11-02"
tags: ["Codex skills", "Claude Code", "AI agents", "developer productivity"]
status: "published"
language: "en"
category: "AI Automation"
---

# How to Build a Skill for Codex and Claude Code: A Step-by-Step Guide

Short answer. A skill is a folder with a file called SKILL.md. The file has a short header that tells the agent when to use the skill, and a body that tells it how to do the work. Codex and Claude Code both read this format. To build one that works: do the task by hand with the agent first, write down the corrections you made, turn them into a short SKILL.md, then test it on three realistic requests and one request that should not trigger it. Keep the file small, put the surprises first, and add detail only where the agent got something wrong.

Any team that uses a coding agent for a few weeks ends up repeating itself. The same reminders before every release, the same format for a status report, the same warning about a database table that must be filtered a certain way. Each repetition costs minutes, and results drift as people phrase it differently.

A skill moves that knowledge out of people's heads and into a file the agent loads when it is relevant. This guide is written so that a reader who already uses Codex or Claude Code can build a first skill in an afternoon. It covers the format, the preparation that matters more than the syntax, a complete worked example that was tested, how to check triggering, and what to do when it misbehaves.

Details for Claude Code come from Anthropic's documentation and details for the shared format from the open Agent Skills specification. Codex details come from OpenAI's documentation. Tools change quickly, so check these pages again before you rely on a path or a setting.

## What a skill is, and what it is not

A skill is a directory. Its only required file is SKILL.md. Around it you can add scripts the agent runs, reference documents it reads when needed and templates.

Two properties make skills different from a long instruction file. First, only the name and description are loaded at the start of a session. The full body loads when the agent decides the skill applies, and extra files load only if the body points to them. Second, a skill can bundle code, so a fragile step can be a tested script instead of a paragraph of advice.

A skill is not a replacement for general project notes, and it is not a connector to an outside service. Use it for a repeatable procedure or knowledge that only some tasks need. For a broader view of how to choose an automation boundary, see [how to choose your first AI automation project](/blog/how-to-choose-first-ai-automation-project) and [AI automation readiness](/blog/ai-automation-readiness).

## One format, two tools

Both tools follow the same open format, so a well-written SKILL.md moves between them with small changes. The differences are mostly where files live and which optional extras exist.

Claude Code reads skills from a personal folder, ~/.claude/skills/<name>/SKILL.md, from a project folder, .claude/skills/<name>/SKILL.md, and from plugins. Enterprise settings can add more. You can invoke a skill by typing /skill-name, or Claude can load it by itself when the description matches. Edits to existing skills are picked up live.

Codex scans .agents/skills in every directory from the working directory up to the repository root, $HOME/.agents/skills for a user and /etc/codex/skills for administrators, plus bundled system skills. It follows symlinked skill folders. You run /skills or type $ and the skill name, and Codex can also match by description. An optional file, agents/openai.yaml, can set policy.allow_implicit_invocation to false, which keeps a skill explicit-only. The bundled $skill-creator asks what the skill does, when it should trigger and whether it needs scripts. To disable a skill, add a [[skills.config]] entry with enabled = false to ~/.codex/config.toml and restart. Duplicate names are not merged, so keep names unique.

| Topic | Claude Code | Codex |
| --- | --- | --- |
| Manual start | Type the skill name after a slash | Type the skill name after a dollar sign |
| Automatic start | By description | By description |
| Turn off automatic start | A field in the header | A setting in the optional openai yaml file |
| Extra header fields | Many, such as allowed tools and subagent mode | Few, mostly in the separate yaml file |
| Documentation | Anthropic | OpenAI |

If a skill must work in both tools, keep to the core fields in the specification and test it in each. Claude Code ignores unknown header fields without an error. Uploads to claude.ai and the Skills API are stricter and accept only name, description, license, compatibility, metadata and allowed-tools.

Topic-specific paths and optional fields are not interchangeable by default. Claude Code currently reserves the names `synced` and the `anthropic-skills` namespace for synced skills, so avoid those names. Keep the portability qualification visible: a feature documented for one product or version is not automatically available in the other.

## Anatomy of a skill

```text
release-check/
├── SKILL.md          required
├── scripts/          code the agent runs
├── references/       documents read on demand
└── assets/           templates and static files
```

The header sits between two lines of three dashes.

| Field | Required | Rule |
| --- | --- | --- |
| name | Yes in the standard | Lowercase letters, numbers and hyphens, up to 64 characters, must match the folder name |
| description | Yes in the standard | Up to 1,024 characters, says what the skill does and when to use it |
| license | No | A short license name or file reference |
| compatibility | No | Up to 500 characters on environment needs |
| metadata | No | Free key and value pairs |
| allowed-tools | No | Pre-approved tools, marked experimental in the specification |

Claude Code adds fields such as disable-model-invocation, user-invocable, context and paths. Keep the body under 500 lines and aim for under 5,000 tokens, and keep file references one level deep from SKILL.md. These are authoring recommendations, not a guarantee that every host enforces the same limit.

## Before you write anything: the Kubera Skill Canvas

This is a Kubera AI planning heuristic, not a validated method. Skills fail more often from missing knowledge than from wrong syntax. The format cannot supply what you have not written down. The canvas has six boxes to fill in before you open an editor.

| Box | Question | Example answer |
| --- | --- | --- |
| Trigger | Which requests should start this skill? | Release, deploy, ship, is this ready |
| Outcome | What does a good result look like? | A short report with a verdict and the first fix |
| Inputs | What does the agent need to find or be told? | Test command, env example, changelog |
| Surprises | What does the agent get wrong without help? | Fake keys in test files, tests that did not run |
| Limits | What must it not do? | Change code without being asked |
| Proof | How will you know it worked? | Three test requests and one that must not trigger |

The Surprises box is the most valuable. The open specification says that the highest-value content in many skills is a list of gotchas, meaning facts that contradict reasonable assumptions. If you cannot name one thing the agent gets wrong without the skill, the skill may not be needed.

## Questions to answer, in order

1. What task do I repeat, and how often?
2. What would a newcomer need to be told to do it correctly?
3. Where did the agent go wrong last time, and what did I say to fix it?
4. What are the exact commands, file names and formats involved?
5. Which steps are fragile and must be done one specific way?
6. Which steps allow judgment?
7. What should the output look like? Can I show a template?
8. What must the agent not touch or decide alone?
9. Which parts can fail silently?
10. How will I tell a good run from a bad one?

Write the answers as plain notes. They are the raw material.

## Step by step: build a skill from a real task

### Step 1. Do the task with the agent first

Do a real task in a normal conversation. Give context, correct mistakes, state preferences. Then extract the pattern. The open guidance on best practices recommends this over asking a model to invent a skill from general knowledge, which produces vague advice such as "follow best practices".

### Step 2. Collect your corrections

List each time you steered the agent: the library to use, the edge case to check, the format you wanted. These become gotchas and rules.

### Step 3. Ask the agent to draft, with your material

Paste your notes and the Canvas and ask for a first SKILL.md. In Codex, $skill-creator is built for this. In Claude Code you can ask directly.

### Step 4. Name it

Choose a lowercase, hyphenated name that matches the folder. Anthropic's guide prefers a verb form such as processing-pdfs and warns against vague names like helper or utils.

### Step 5. Write the description

This is the line that triggers everything, so it gets its own section below.

### Step 6. Write the body

Steps in order, gotchas near the top, a template for the output.

### Step 7. Bundle a script only where code beats prose

A scan that must give the same answer every time belongs in a script.

### Step 8. Test, then refine

Covered below.

## The worked example

This skill checks a small web project before release. The example was checked with the fixture test below. It is an illustration, so adapt it to your project.

### release-check/SKILL.md

```markdown
---
name: release-check
description: Runs a pre-release check on a small web project and reports blockers before deploy. Use when the user says they are about to release, deploy, ship or publish, or asks whether the project is ready, even if they do not mention a checklist.
---

# Release check

Report what blocks a release. Do not fix anything unless the user asks.

## Steps

1. Find the test and build commands in package.json or the README. Run them. Quote the failing line, not a summary.
2. Run `bash scripts/scan_secrets.sh .`. Exit code 2 means blockers, 1 means warnings, 0 means clean. List every hit with file and line.
3. Compare `.env.example` with the variables the code reads. List any variable the code reads that is missing from the example.
4. Check that CHANGELOG.md has an entry for the current version.
5. Write the report using the template below.

## Gotchas

- A passing build does not mean the tests ran. Confirm the test command exited with code 0 and printed a test count.
- A BLOCK hit makes the verdict blocked. A WARN hit is a lead, not proof: say what it looks like and ask a person to confirm. The script finds candidates, and a person decides whether to release.
- Files named `*.test.*` and `*.example` are expected to contain fake keys. The script skips them.
- If a command cannot run here, write "not checked" and the reason. Do not guess a result.

## Report template

Verdict: ready, ready with warnings, or blocked
First thing to fix: one sentence
Blockers: bullet list, each with file and line
Warnings: bullet list
Not checked: bullet list with reasons
```

### release-check/scripts/scan_secrets.sh

```bash
#!/usr/bin/env bash
# Exit codes: 0 clean, 1 warnings only, 2 blockers found.
dir="${1:-.}"
ex=(--exclude-dir=.git --exclude-dir=node_modules --exclude-dir=dist --exclude='*.test.*' --exclude='*.example')
block=$(grep -rnE "${ex[@]}" 'AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----' "$dir")
warn=$(grep -rniE "${ex[@]}" '(api[_-]?key|secret|token|password)["'"'"' ]*[:=]["'"'"' ]*[A-Za-z0-9_-]{16,}' "$dir")
[ -n "$block" ] && printf 'BLOCK\n%s\n' "$block"
[ -n "$warn" ] && printf 'WARN\n%s\n' "$warn"
[ -n "$block" ] && exit 2
[ -n "$warn" ] && exit 1
echo clean
```

The script separates three outcomes. A hit is printed. A warning is a generic pattern a person must judge. A blocker is a high-confidence pattern, such as a cloud access key ID or a private key header, and ends the run with exit code 2. The script does not stop a release itself. The report gives the verdict and a person decides. This is an illustrative scanner, not a comprehensive production secret scanner: it can produce false hits and misses, so tune it to your project.

To reproduce the check, create four fixture folders and run the script on each:

```bash
mkdir -p fx/clean fx/warn fx/block fx/testonly
echo 'const a = 1;' > fx/clean/app.js
echo 'const API_KEY = "abcd1234efgh5678ijkl9012";' > fx/warn/app.js
echo 'const k = "AKIAABCDEFGHIJKLMNOP";' > fx/block/app.js
echo 'const API_KEY = "abcd1234efgh5678ijkl9012";' > fx/testonly/app.test.js
for d in clean warn block testonly; do bash scripts/scan_secrets.sh fx/$d >/dev/null; echo "$d $?"; done
```

Expected output: clean 0, warn 1, block 2, testonly 0. Both key strings are fake. A generic warning is not the same as a blocker: warning means a person must inspect the candidate; blocker means the high-confidence pattern should stop the release review.

Notice what the file leaves out: it does not explain what a changelog is. It says "do not guess a result" because agents tend to fill gaps with plausible text, and it states the limit in the first lines. The scan is a script because a pattern search should return the same result every run. It will produce false hits and misses, so tune it to your project.

## Writing the description

The description decides whether the skill is ever used. The specification calls it the primary mechanism agents use to decide whether to load a skill.

Say what and when. Both parts, in a few sentences.
Use imperative phrasing. "Use this skill when..." tells the agent when to act.
Describe user intent, not mechanics. Match what people actually say.
List situations where the user will not name the topic. The worked example includes "even if they do not mention a checklist".
Write in third person for Claude. Anthropic's guide says the description is injected into the system prompt, so "Processes Excel files" works and "I can help you with Excel" does not.
Say when it should not start. OpenAI's guide advises stating when a skill should and should not trigger.
Mind the cap. 1,024 characters in the standard. Product-specific upload or host limits may differ, so check the target tool's current documentation.

Weak: Helps with releases.

Stronger: the description in the worked example, which names the action, the situations and the near-synonyms users say.

One limit: agents often skip skills for simple one-step requests they can do alone, so a skill pays off most on specialized tasks.

## Writing the body

Add what the agent lacks, cut what it knows. For each paragraph ask: would the agent get this wrong without it? If not, delete it.
Match strictness to fragility. Give freedom where several approaches work and explain why. Be exact where a step is fragile, such as a migration command.
Give defaults, not menus. Name one tool and mention an alternative briefly.
Teach the method, not one answer. "Read the schema, join on the id column" generalizes.
Put gotchas in the body. The agent should see them before it meets the situation.
Add a template for the output. Agents match concrete structures well.
Add a check loop for risky work. Plan, validate against a source, then execute. Explain reasons, since reasoned rules are followed better than shouted ones.
Put the most important lines first. Claude Code keeps only the start of an invoked skill after a conversation is compacted.

## Test it before you trust it

Testing has two parts: does it trigger, and is the output good.

### Minimum check for a first skill

Write three requests that should start it and one near-miss that should not, such as a question that shares words with the skill but needs something else. Run each once in a fresh session. Then run two of the real cases once without the skill and compare the outputs. This catches obvious first-draft problems but does not prove reliability, because a single run can pass by luck.

### Extended check before sharing widely

Once the skill is useful, test it properly. Write about 20 realistic prompts: 8 to 10 that should start it and 8 to 10 that should not, with near-misses among the negatives. Run each three times and count how often the skill loaded. Keep about 60 percent of prompts for tuning and 40 percent aside to check you are not overfitting. Five rounds of tuning is usually enough. For output quality, write at least three evaluations, add specific checks only after seeing real output, such as "the report names a file and line for every blocker", and review outputs yourself, since some qualities do not reduce to pass or fail.

Read the traces. If the agent wastes steps, the instructions are probably vague, irrelevant or offer too many options. If it rewrites the same helper in every run, bundle that helper in scripts. The official evaluation guidance also recommends comparing with-skill and without-skill runs and adding assertions only after seeing real outputs.

In Claude Code, /skill-name runs a skill directly and you can ask what skills are available. In Codex, /skills lists them.

## Install and share

For personal use, put the folder in the personal skills directory. For a team, commit it to the repository so changes are reviewed like code. Treat any outside skill as code: read SKILL.md and every script before use, and keep allowed-tools narrow. For data handling in the tasks you automate, see [AI data safety for European businesses](/blog/ai-data-safety-european-businesses).

Claude Code looks in .claude/skills while Codex looks in .agents/skills, so a repository serving both needs a copy or link in each place. OpenAI's documentation says Codex follows symlinked skill folders. This research did not confirm the same for Claude Code, so test a link there or keep a copy. For team rollout, [onboarding your team to AI automation](/blog/onboard-team-ai-automation) covers the wider adoption problem, while [AI skill resilience](/blog/ai-skill-resilience) covers keeping human capability in use.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Skill does not start | Description too vague or uses words users do not say | Add user phrasing and situations, then rerun the trigger test |
| Skill starts on unrelated requests | Description too broad | Add what it does not cover, or switch off automatic start |
| Slash command not recognized | Invalid name or folder mismatch | Check the name rules and the folder name |
| Header seems ignored | Malformed YAML | Check indentation and quotes, run the tool's debug mode |
| Agent follows it, then drifts | Instruction too narrow, or conversation compacted | Word rules for the whole task, move key lines to the top, invoke again |
| A rule is sometimes skipped | Rule must hold every time | Move it to a hook or a script |
| Output is generic | Skill built from general knowledge | Rebuild from a real task and real corrections |
| Skill makes results worse | Over-detailed, pushes the agent down wrong paths | Cut to the surprises, retest against no skill |

If a skill is allowed to take actions, separate guidance from authority. [Agent autonomy and human in the loop](/blog/ai-agent-autonomy-human-in-the-loop) explains where approvals belong, and [what is agentic AI](/blog/what-is-agentic-ai) gives the broader vocabulary.

## Illustrative scenario

Illustrative scenario, not a specific Kubera client. A four-person agency ships small client sites. Before each launch someone asks the agent to "check if we're good". Answers vary: one run checks tests, another reads the changelog, a third declares victory because the build passed.

The lead developer picks the release task, because it repeats weekly and the failure is known. She walks the agent through one real release and notes three corrections: tests sometimes do not run, fake keys live in test files, and the report must name the first fix. She drafts the skill from those notes, adds a scan script, writes three test requests and one near-miss such as "explain how releases work", and runs each with and without the skill. The with-skill runs report consistently. The skill goes into the repository. A month later the notes gain a fourth gotcha.

## A seven-day plan

| Day | Task |
| --- | --- |
| 1 | Choose a repeated task and fill in the Canvas |
| 2 | Do the task with the agent and record corrections |
| 3 | Draft the SKILL.md and write the description |
| 4 | Write three output tests and ten trigger prompts |
| 5 | Run with and without the skill and compare |
| 6 | Cut and fix, add a script if the agent keeps rewriting code |
| 7 | Share it and name an owner for changes |

For choosing which workflow deserves automation first, see [how to choose your first AI automation project](/blog/how-to-choose-first-ai-automation-project), and for deciding how much freedom an agent gets, see [agent autonomy and human in the loop](/blog/ai-agent-autonomy-human-in-the-loop). Teams comparing agents and chatbots can start with [what is agentic AI](/blog/what-is-agentic-ai).

## Frequently asked questions

### Do I need to code to write a skill?

No. A skill can be plain Markdown instructions. Scripts are optional and only worth adding for steps that must be exact.

### How long should a skill be?

Short. Stay under 500 lines and aim for under 5,000 tokens, and move extras to reference files the body points to.

### Is a skill the same as a prompt?

A prompt is typed each time. A skill is stored, loaded when relevant and can include scripts and templates.

### Can one skill work in both Codex and Claude Code?

Often, if it uses only the shared fields in the open specification. Test it in each tool and copy it to each tool's folder.

### Why does my skill not trigger?

Usually the description. Add the words users actually say and situations where they do not name the topic.

### Should I let the agent write the skill?

Yes, as a drafter, but feed it your real notes and corrections. A draft built from general knowledge tends to be vague.

### Are third-party skills safe?

Treat them like code. Read the file and any script before use, and keep tool permissions narrow.

### How do I improve a skill over time?

Each time you correct the agent, add the correction to the gotchas, then rerun your tests.

### When is a skill the wrong tool?

When you need a live connection to an outside system, a rule that must hold on every action, or a one-off task. Use a connector, a hook or a normal prompt instead.

### How should a team review a skill before sharing it?

Run realistic prompts with and without the skill, inspect scripts as code, check the permissions it requests and keep a named owner for future corrections.

## Sources

- [Agent Skills specification](https://agentskills.io/specification.md)
- [Evaluating skill output quality](https://agentskills.io/skill-creation/evaluating-skills)
- [Skill authoring best practices, Anthropic](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [Claude Code skills documentation](https://code.claude.com/docs/en/skills)
- [Build skills, OpenAI](https://learn.chatgpt.com/docs/build-skills)
- [OpenAI Codex skills and prompts guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

[Discuss your automation project →](/contacts)
