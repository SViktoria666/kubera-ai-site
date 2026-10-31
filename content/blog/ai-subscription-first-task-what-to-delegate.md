---
title: "You Already Pay for AI. Now Decide What Work to Give It"
slug: "ai-subscription-first-task-what-to-delegate"
description: "Many teams pay for an AI assistant and open it only now and then. The fix is not more features. It is one familiar, repeating task that you can check. This guide shows how to find it, test it, count the time honestly and decide whether it deserves a place in your week."
seoTitle: "You Pay for AI. Now Pick the Work It Does"
metaDescription: "Paid for an AI assistant but still unsure what to use it for? A practical way to pick one task, test it against your own notes, count the real time saved and decide what to keep."
date: "2026-10-28"
publishedAt: "2026-10-28"
tags: ["ai automation", "productivity", "ai adoption", "business processes"]
status: "published"
language: "en"
category: "AI Automation"
---

# You Already Pay for AI. Now Decide What Work to Give It

Short answer. If you have an AI subscription and no regular use for it, stop collecting impressive answers and pick one task you already do every week, know well and can check. Run it with AI on at least four occurrences, using past weeks' material if the task is weekly, compare each output with your source material, and log the minutes spent on preparing, reviewing and correcting. Keep the task if it saves time after those minutes are counted. Drop it if it does not. This article gives a scoring table for choosing the task, five practical examples with prompts, a worked time calculation and a four-week plan.

Picture a small office. Three people have an AI assistant seat. The tool answered a few questions in the first week, rewrote an awkward email and summarised a long PDF. Then it settled into the pattern of most subscriptions: opened when someone remembers, ignored when the week gets busy, while every conference talk and LinkedIn post shows something it can apparently do.

The problem is rarely the tool. It is that nobody decided which part of the week it belongs to. A subscription without a job description is a gym membership in January.

This is not only a small-office problem. Eurostat reports that 19.95 percent of EU enterprises with ten or more employees used AI technologies in 2025, a rise of 6.47 percentage points on 2024. Among enterprises that had considered AI but did not use it, 70.89 percent named a lack of relevant expertise as a reason, 52.52 percent unclear legal consequences and 48.83 percent data protection concerns. Those figures measure enterprise adoption, not subscription usage, but they point the same way: the barrier is knowing where to start, not access to a tool. See [Eurostat's use of AI in enterprises](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises).

## Why trying everything does not work

The same question applies after a team buys an assistant: the [Aim, Brief, Judge and Learn habits](/blog/why-ai-amplifies-people-differently) turn a subscription into a repeatable way of working.

The usual advice is to experiment widely. It produces a pile of one-off impressions, because a single good answer says very little about whether the tool can be relied on for the same job next month.

A field experiment on 758 consultants at Boston Consulting Group, published in [Organization Science](https://pubsonline.informs.org/doi/abs/10.1287/orsc.2025.21838), shows why. Participants used GPT-4 on tasks the model handled well and on one task designed to fall outside its reliable range. Inside that range, AI users completed about 12.2 percent more tasks, finished about 25.1 percent faster, and produced work graded roughly 32 percent higher in quality. On the task outside it, the control group got the right answer about 84.5 percent of the time, while the AI groups reached 60 percent and 70.6 percent. The paper's abstract describes the drop as 19 percent, while the body reports it as a difference in percentage points, so treat the exact figure with care. The important detail is that AI users' written recommendations were still rated as coherent. The model was not obviously wrong. It was convincingly wrong.

The researchers call this the jagged frontier: AI is strong on some tasks and unreliable on others that look similar, and the line is not visible from outside. The study used GPT-4 and a consulting setting, and models have changed since, so the lesson is about method, not about current accuracy. You find the edge by testing on work where you can tell right from wrong.

A second warning is about self-assessment. A 2025 randomised trial by METR on 16 experienced open source developers found that AI use increased task completion time by 19 percent, while the developers themselves believed it had sped them up by about 20 percent. METR later said that data from its follow-up experiment was an unreliable signal, partly because many developers would not work without AI. The first result applies to a specific group of experts in codebases they knew very well and should not be generalised to office work. What it supports is narrower: feeling faster and being faster are different things, so measure.

## Step one: look at your last 30 days

Do not start with the tool. Start with a list of what you actually did. Open your calendar, sent mail and task list for the past month and write down every piece of work that happened at least three times. Aim for 10 to 15 items. Next to each, note how long it takes and what you start from.

| Recurring task | Starting material | Typical time | Who checks the result |
| --- | --- | ---: | --- |
| Weekly summary for the owner | Notes and task list | 50 minutes | The author |
| Questions before a client call | Previous emails and CRM notes | 20 minutes | The author |
| First reply to common customer enquiries | Past replies and price list | 5 minutes each | A colleague |
| Comparing supplier quotes | Three PDF quotes | 40 minutes | The buyer |
| Turning call notes into a follow-up email | Rough notes | 15 minutes | The author |
| Monthly report commentary | A spreadsheet | 60 minutes | The manager |

Notice that the right-hand column matters. Work that nobody could check is not a good first candidate, however tempting.

## The Kubera Repeat-Task Scorecard

This is a Kubera AI planning heuristic, not a validated method. It scores each candidate task on five questions, zero to two points each. The aim is to put the first test in the middle of what you understand, not at the edge of it.

| Question | 0 points | 1 point | 2 points |
| --- | --- | --- | --- |
| Familiar. Would you spot a wrong answer? | Probably not | Sometimes | Almost certainly |
| Frequent. How often do you do it? | Less than monthly | Monthly | Weekly or more |
| Checkable. Can you compare the output with source material? | No source | Partly | Yes, line by line |
| Contained. What does an error cost? | Money or legal exposure | Embarrassment | Minor rework |
| Costed. Is the current time known? | No idea | Rough guess | Measured |

Add up the scores. A task with 8 to 10 points and no zero on Contained is a good first candidate. A task with 5 to 7 needs the weak question fixed first, for example by timing the task for a week. A task with 4 or fewer should wait. The thresholds are a starting point, so adjust them after your first test.

**Safety gate.** A zero on Contained overrides the total. A task where an error costs money or creates legal exposure does not go first, however high it scores on frequency or any other question. Move it to the test list only with a person approving every output, or leave it until a lower-risk task has built a track record. Sending replies to angry customers without review is the classic trap: frequent tasks look attractive because the payoff multiplies, and the cost of an error multiplies too.

## Five practical examples, with prompts

Each example follows the same rule: give the model the source material, ask it to separate what the material says from what it infers, and compare the output with the source before you use it.

### Example 1: the weekly summary

**Task.** Turn a week of rough notes and a task list into a short update for a manager or client.

**Prompt.** “Below are my notes and task list for this week. Write a draft update with three sections: done, in progress, open questions. Only put an item under done if the notes explicitly say it is finished. If a note describes a plan or an intention, put it under in progress. Quote the line from my notes that supports each item. List anything you could not place.”

**What to check.** Every item under done against the quoted line. The common error is a plan turned into a fact. A note that says “call the supplier about the delivery” can become “supplier confirmed delivery” in a confident draft. Asking for the supporting line makes it visible in seconds.

### Example 2: questions before a client call

**Task.** Prepare a short list of questions for a call from the history you already have.

**Prompt.** “Here are the last five emails and my CRM notes for this client. List what we agreed, what is unresolved and what the client has not answered yet. Then suggest five questions for tomorrow’s call, each linked to the unresolved point it addresses. Do not invent facts. Mark any point where the history is unclear.”

**What to check.** That the agreed points are agreed. If the model lists a discount as agreed when the email only proposed it, you have found the weak spot and learned how much to trust the rest.

### Example 3: first draft of replies to common enquiries

**Task.** Draft answers to the five types of question you get every week.

**Prompt.** “Use only the price list and the past replies pasted below. Draft a reply to the enquiry. If the answer is not in the material, say what is missing instead of guessing. Keep it under 120 words in the same tone as the examples.”

**What to check.** Prices, dates and conditions against the price list. Keep a person sending every reply during the test. If you later want drafts to go out automatically, that is a separate project with its own safeguards.

### Example 4: comparing supplier quotes

**Task.** Put three PDF quotes into one table.

**Prompt.** “Extract from each quote: supplier, unit price, quantity, delivery cost, delivery time, payment terms and validity date. Present them in one table. If a value is not stated in the quote, write ‘not stated’. Do not calculate totals yet.”

**What to check.** Each cell against its PDF. Ask for totals only in a second step and verify the arithmetic yourself, because a table that looks complete can still carry one wrong number.

### Example 5: commentary for a monthly report

**Task.** Describe what changed in a spreadsheet.

**Prompt.** “Here is this month’s table and last month’s. List the five largest changes in absolute and percentage terms. Say which of them are driven by one or two rows. Do not suggest reasons unless the table contains them.”

**What to check.** Recompute the largest changes in the spreadsheet. The prompt blocks explanations the model cannot know. Add the reasons yourself.

## The rule for personal data

Several of these examples involve customer names, emails or notes. Before pasting them into any assistant, check what your plan does with the data, who the provider is under your contract, and whether your own policy allows it. Under [GDPR Article 28](https://eur-lex.europa.eu/eli/reg/2016/679/oj), processing by a processor is governed by a contract or other legal act setting out the processing and the parties’ obligations; whether that relationship applies to your use depends on the facts. Where you can, remove names or use test material for the trial. This is general information, not legal advice. For a longer treatment see [AI data safety for European businesses](/blog/ai-data-safety-european-businesses), and for the staff-side risk of unapproved tools see [shadow AI as a business risk](/blog/shadow-ai-business-risk-europe).

Avoid starting your trial with tasks where AI outputs affect people's rights or employment, such as ranking job applicants. Those are sensitive under EU rules and are not good first experiments.

## Counting the time honestly

Fast generation proves little. What matters is total minutes, including the work that comes before and after the model answers. Log four numbers for each run: preparation, the AI run, checking against the source, and correction.

### Worked example: the weekly summary

Assumptions, all illustrative. The manual summary takes a baseline number of minutes. With AI, the time is preparation of notes plus the AI run plus checking plus correction. There are 46 working weeks a year. Time is valued at EUR 35 an hour, a loaded cost chosen for the example. The subscription costs EUR 20 a month, EUR 240 a year. These are not measured results.

| Scenario | Manual minutes | Prep | AI run | Check | Correct | AI total | Saved per week |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Low | 40 | 10 | 3 | 15 | 7 | 35 | 5 |
| Central | 50 | 10 | 3 | 12 | 5 | 30 | 20 |
| High | 60 | 10 | 2 | 8 | 5 | 25 | 35 |

| Scenario | Hours saved per year | Value at EUR 35 | Value minus subscription |
| --- | ---: | ---: | ---: |
| Low | 3.8 | EUR 134 | EUR -106 |
| Central | 15.3 | EUR 537 | EUR 297 |
| High | 26.8 | EUR 939 | EUR 699 |

Hours are rounded to one decimal and euro amounts to the nearest euro from unrounded figures, so small differences are rounding.

Three things follow. First, checking and correcting together are the largest block in every scenario, larger than the AI run itself, which is why a task you cannot check cheaply is a poor candidate. Second, in the Low case the task covers only about 56 percent of the subscription, so one task may not be enough. Third, the sensible aim is two or three working tasks per seat, not a perfect one. These figures show how to calculate, not what you will save.

Keep a simple log for every run:

| Date | Task | Prep min | AI min | Check min | Fix min | Errors found | Used as is |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| Mon | Weekly summary | 10 | 3 | 12 | 5 | 1 | No |

The errors column is the one that tells you where the frontier is.

## Illustrative scenario

Illustrative scenario, not a specific Kubera client. A 25-person service company has five AI seats. The office manager lists 12 recurring tasks and scores them. Customer reply drafting scores 6, because the replies are frequent but errors in prices would cost money, and nobody has timed the task. The weekly owner update scores 9. She tests the update on four runs, using the first prompt above: the current week and the last three, rebuilt from old notes whose real outcomes she knows.

In the first run the draft marks two items as done that the notes only describe as planned. She catches both because the prompt asks for a supporting quote. In the second run, after she adds a rule that plans stay in progress, the draft needs one small fix, and the later runs stay clean. Her log shows about 30 minutes against a 50 minute baseline. She keeps the task, times the reply task for a week to raise its score, and puts the quote comparison on the list for the next round. Nothing in the process required buying anything new.

## A four-week plan

A weekly task happens only once a week, so two weeks of live use gives two data points. The way round this is to replay past weeks: take notes from a week that is already over, run the task and compare the draft with what you know happened. Four runs, two or three of them replays, is a minimum for a first judgement. Replays are weaker evidence than live runs, because you already know the outcome and may read the draft more kindly, so treat them as a screen, not proof. A task that occurs daily can be judged in two weeks.

| When | Action | Output |
| --- | --- | --- |
| Week 1, days 1 to 2 | List recurring work from the last 30 days | 10 to 15 candidates |
| Week 1, day 3 | Score them and apply the safety gate | One or two top candidates |
| Week 1, day 4 | Write the prompt with a source-quote rule | A saved prompt |
| Week 1, day 5 | Replay one past week and fill in the log | First data point |
| Week 2 | Run the live task and replay another past week | Two more data points |
| Week 3 | Run the live task and replay a third past week | Fourth data point and a pattern of errors |
| Week 4 | Calculate net time, review errors, decide | Keep, adjust or drop |

Decide in advance what counts as success, for example net saving of ten minutes a week with no error reaching the recipient. A threshold set before the test is harder to bend afterwards.

## When a subscription is not enough

A chat assistant works well for tasks that a person starts and finishes. Some tasks are better as automation: they repeat many times a day, start from an event such as an incoming email, and need the same steps each time. Then the issue is no longer which prompt, but how to build a safe flow with approvals and monitoring. [How to choose your first AI automation project](/blog/how-to-choose-first-ai-automation-project) covers that decision, [AI automation readiness](/blog/ai-automation-readiness) helps you check your processes and data, and [how to measure ROI of AI automation](/blog/how-to-measure-roi-ai-automation) extends the time log into a business case.

For a broader operating model, see [human-in-the-loop AI agent autonomy](/blog/ai-agent-autonomy-human-in-the-loop) and [business processes to automate first](/blog/business-processes-to-automate-first).

## Frequently asked questions

### Which task should I try first?

One you do weekly, know well and can check against a source. A weekly summary, a call preparation list or a quote comparison are common choices.

### How long should the test run?

For a weekly task, plan on four weeks, or two weeks with replays of past weeks, giving at least four runs. A daily task can be judged in two weeks. Fewer runs make the log too thin to judge.

### What if the model makes a mistake?

That is useful information. Record it in the errors column, note what kind of mistake it was and adjust the prompt. A repeating mistake that you cannot prevent means the task sits outside the reliable range.

### Should I ask the model to choose my tasks?

It can help you brainstorm. Describe what you do regularly and where you get stuck, and ask for small, checkable options. You still score and choose them yourself, since the model does not know your risk tolerance.

### Is it fine to paste customer data?

Only after you have checked your plan's data terms, your contract position and your internal policy. Remove names where you can. This is not legal advice.

### Does a faster answer mean a better result?

No. Speed of generation is only one part. Preparation, checking and correction often take longer than the model run.

### How many tasks per person is realistic?

Two or three that you actually repeat. The worked example above shows that a single small task may not cover a subscription on its own.

### What if the model needs more context every time?

Save a template with your standard instructions and the format of the source material. If you spend more time preparing than you save, the task may not suit a chat tool.

### When should we move from a subscription to automation?

When the task is frequent, rule-based, starts from an event and needs to run without someone opening an app. Start with the articles on choosing a first automation project and readiness.

### Can small teams do this without a consultant?

Yes. The method needs a list, a scorecard, a prompt and a log. External help becomes useful when the task touches several systems, personal data or approvals.

## Sources

- [Eurostat, use of artificial intelligence in enterprises](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises)
- [Navigating the Jagged Technological Frontier, Organization Science](https://pubsonline.informs.org/doi/abs/10.1287/orsc.2025.21838)
- [METR developer study, arXiv](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [METR experiment design update](https://metr.org/blog/2026-02-24-uplift-update/)

[Discuss your automation project →](/contacts)
