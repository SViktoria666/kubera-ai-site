# Kubera AI Social Content Existing System Forensic Audit

## 1. Executive Summary

I audited the Kubera AI n8n workflows that are related to social content and adjacent content systems.

What exists today is not a blank slate. There is already a usable production skeleton:

- niche selection and content memory
- prompt-driven copy generation
- image prompt generation
- image/video publishing shells
- Threads publishing
- token refresh automation
- staged Knowledge Hub brief/draft/review/publish flows

The weakest part is the intelligence/content layer:

- niches are static
- copy is mostly library-driven
- the content selection logic is deterministic and old
- direct platform credentials are embedded in node params in multiple places
- there is no strong engagement feedback loop feeding future decisions

My conclusion:

- This does **not** need a full rebuild from zero.
- The correct next step is a **partial rebuild**: keep the orchestration and publishing infrastructure, replace the intelligence/content-generation layer, and harden the publisher boundaries.

Important audit caveat:

- I could not inspect a true folder ID boundary from MCP metadata.
- The inventory below is the complete set of **Kubera-related workflows discovered by name search and direct workflow inspection** in this workspace.
- That discovered family contains **19 workflows**.

## 2. Exact Kubera AI Workflow Inventory

### Discovered Kubera-related workflows

| ID | Workflow | Active | Trigger | Role | Notes |
|---|---|---:|---|---|---|
| `AHyrHxysPbE1L2ov` | Kubera AI — Knowledge Hub Article Brief Generator | Yes | Webhook + Execute Workflow | Brief generation | OpenAI brief builder, writes to `BRIEFS` |
| `uQ9eDEHokGlb22AO` | Kubera AI — Knowledge Hub Article Draft Writer | Yes | Webhook + Execute Workflow | Long-form draft generation | Section-based article writer, writes to `DRAFTS` |
| `VmUrT2cIK2BbDvQf` | Kubera AI — Knowledge Hub Publish Layer | Yes | Execute Workflow only | Site publish layer | Builds GitHub commit from approved drafts |
| `kiIOkE6nmZbshY7j` | Kubera AI — Knowledge Hub Scheduled Article Orchestrator | Yes | Schedule | Knowledge Hub orchestration | Selects topic, runs brief/draft/review, then publish layer |
| `Sis2MY8RWMndCHWD` | Kubera AI — Knowledge Hub Telegram Editorial Review | Yes | Webhook + Telegram Trigger + Execute Workflow | Human review | Sends draft to Telegram, stores review decision |
| `QA6c1DuFZLKgiuMP` | Kubera AI — Knowledge Hub Topic Discovery | No | Webhook + Manual | Topic intake | Appends topics to `TOPICS` |
| `tJM5DQgFBUxWDmuN` | Kubera KH — Read Content Rows | No | Manual | Read utility | Reads `BRIEFS`, `DRAFTS`, `REVIEWS` |
| `IGL2RR8zXim5latq` | Kubera AI — SMM Strategist | Yes | Execute Workflow only | Niche selection / ranking | 15 niches, round-robin selection, day-of-week topic type rotation |
| `dkJw3htR8XFIYPcs` | Kubera AI — SMM Copywriter | Yes | Execute Workflow only | Copy generation | Static niche post library + gpt-5-mini |
| `5PmX2s3QnwuTNUUy` | Kubera AI — SMM Art Director | Yes | Execute Workflow only | Image prompt generation | Split-screen art prompt, niche-aware buckets |
| `Io1Uk40wthsBA3bP` | Kubera AI — SMM Orchestrator | Yes | Schedule | Morning social orchestrator | Calls strategist -> copywriter -> art director -> publisher |
| `dTLHw8YbdS0X8A8J` | Kubera AI — SMM Publisher | Yes | Execute Workflow only | Instagram + Facebook publishing | Cloudinary -> IG media -> Facebook photo -> Sheets log |
| `e8d7OsTN3I6Dals5` | Kubera AI — SMM Video Renderer Production | Yes | Schedule | Midday video/audio pipeline | Strategist -> script -> image gen -> TTS -> render -> publisher |
| `TQSNDguACZLXBr3s` | Kubera AI — SMM Video Publisher | Yes | Execute Workflow only | Reel publishing | Meta Graph API reel container/publish chain |
| `iHVKybe15bpPiv0w` | Threads Daily AI News | Yes | Schedule | Threads + Instagram Story pipeline | RSS by day, Firecrawl, Threads thread chain, IG Story summary |
| `fPbtcRT4Ax43Vgrj` | Threads Token Auto-Refresh | Yes | Schedule | Threads token maintenance | Refreshes token and patches the workflow itself |
| `lXSftVAnYJ0p1qsS` | Kubera AI Lead Assistant Intake | Yes | Webhook | Lead intake | Webhook -> CRM sync + Telegram notification |
| `rOjsIFp1p74MsuOD` | Kubera AI Leads | Yes | Webhook | Lead notification | Simple Telegram lead alert |
| `XqFoAQmvQCNePyE4` | Kubera AI - LeadGen MVP v2 CLEAN | No | Manual | Lead-gen MVP | Separate lead-gen prototype, not social content |

### Inventory count

- Discovered Kubera-related workflows: **19**
- Social/content workflows: **14**
- Knowledge Hub workflows: **7**
- Lead / adjacent workflows: **3**

Note:

- The user memory said “about 18”.
- The discovered family is **19**, not 18.
- I did not fabricate a smaller count to fit the earlier estimate.

## 3. Social Workflow Identification

### A. Instagram

Direct Instagram publishing paths:

- `dTLHw8YbdS0X8A8J` — `Kubera AI — SMM Publisher`
- `iHVKybe15bpPiv0w` — `Threads Daily AI News` 1) story branch only

What I found:

- `Kubera AI — SMM Publisher` creates the Instagram media container and publishes it through Meta Graph API.
- `Threads Daily AI News` publishes an Instagram Story summary as an adjacent branch.

### B. Facebook

Direct Facebook publishing paths:

- `dTLHw8YbdS0X8A8J` — photo upload path
- `TQSNDguACZLXBr3s` — reel publishing path via Meta Graph API naming

What I found:

- `SMM Publisher` uses the same asset/text family for Facebook photo posting.
- `SMM Video Publisher` is the Meta reel publishing shell.

### C. Threads

Direct Threads publishing paths:

- `iHVKybe15bpPiv0w` — `Threads Daily AI News`
- `fPbtcRT4Ax43Vgrj` — token refresh support

What I found:

- `Threads Daily AI News` is the actual Threads content publisher.
- It also creates a reply chain and adds an Instagram Story branch.

### D. General social-content generation

The social generation stack is:

- `IGL2RR8zXim5latq` strategist
- `dkJw3htR8XFIYPcs` copywriter
- `5PmX2s3QnwuTNUUy` art director
- `Io1Uk40wthsBA3bP` orchestrator

### E. Image generation

What I found:

- `5PmX2s3QnwuTNUUy` generates **image prompts**, not images.
- `e8d7OsTN3I6Dals5` performs actual image generation for the video pipeline.
- `iHVKybe15bpPiv0w` generates the Instagram Story dashboard image.
- I did **not** find a dedicated static morning image renderer inside the inspected social workflows.

### F. Video/audio generation

What I found:

- `e8d7OsTN3I6Dals5` is the real video/audio generation workflow.
- It uses OpenAI image generation, OpenAI TTS, Cloudinary, and a renderer endpoint.

### G. Niche selection / ranking

What I found:

- `IGL2RR8zXim5latq` is the actual niche selector.
- It uses **15 niches**, not 13.
- Selection is deterministic round-robin, not random.
- It reads from Google Sheets content memory and advances from the last used niche.

### H. Content memory

What I found:

- The Knowledge Hub stack stores content state in Google Sheets.
- The social stack also writes publication history back into sheet-based memory.
- There is no evidence of a single unified database-grade content memory layer yet.

### I. Scheduling / orchestration

What I found:

- `Io1Uk40wthsBA3bP` orchestrates the morning social flow.
- `e8d7OsTN3I6Dals5` orchestrates the midday video flow.
- `iHVKybe15bpPiv0w` orchestrates the evening Threads flow.
- `kiIOkE6nmZbshY7j` orchestrates Knowledge Hub article production.

### J. Analytics / feedback

What I found:

- No strong analytics/engagement feedback loop feeds the niche selector.
- There is memory of what was published, but not a mature closed-loop intelligence system.

### K. Auxiliary workflows

What I found:

- `QA6c1DuFZLKgiuMP` topic intake
- `Sis2MY8RWMndCHWD` editorial approval
- `VmUrT2cIK2BbDvQf` publish layer
- `tJM5DQgFBUxWDmuN` read utility

## 4. Current Architecture Diagram

```text
KNOWLEDGE HUB (separate but reusable)
Mon/Wed/Fri 09:00 Europe/Tallinn
  -> Scheduled Article Orchestrator
  -> Topic selection from TOPICS sheet
  -> Brief Generator
  -> Draft Writer
  -> Telegram Editorial Review
  -> Publish Layer
  -> GitHub commit in kubera-ai-site

MORNING SOCIAL IMAGE FLOW
10:00 Europe/Madrid
  -> SMM Orchestrator
  -> SMM Strategist (15 niches, round-robin)
  -> SMM Copywriter (static niche library)
  -> SMM Art Director (image prompt)
  -> Cloudinary asset library / external static asset stage
  -> SMM Publisher
  -> Instagram + Facebook publish
  -> Google Sheets log

MIDDAY VIDEO FLOW
13:00 Europe/Madrid
  -> SMM Video Renderer Production
  -> SMM Strategist
  -> GPT video script
  -> OpenAI image generation
  -> OpenAI TTS
  -> Cloudinary
  -> Renderer
  -> SMM Video Publisher
  -> Meta reel publish

EVENING THREADS FLOW
17:00 Europe/Madrid
  -> Threads Daily AI News
  -> Topic-by-day RSS selection
  -> Firecrawl scrape
  -> GPT content generation
  -> Threads first post + replies
  -> Instagram Story summary branch
  -> Cloudinary asset stage

THREADS MAINTENANCE
Every 50 days (cron expression based)
  -> Threads Token Auto-Refresh
  -> Refresh access token
  -> PATCH token back into workflow
```

## 5. Instagram Architecture

The Instagram path is mostly publishing infrastructure, not intelligence.

What exists:

- `dTLHw8YbdS0X8A8J` publishes Instagram media through Meta Graph API.
- `iHVKybe15bpPiv0w` publishes an Instagram Story branch.

What is reusable:

- the publisher shell
- the asset handoff through Cloudinary / URLs
- the logging back into Sheets

What is weak:

- no obvious platform-specific intelligence layer
- no strong separation between content strategy and publish mechanics
- no obvious feedback loop from performance into future Instagram copy

## 6. Facebook Architecture

The Facebook path is tightly coupled to the same publisher shell used for Instagram.

What exists:

- `dTLHw8YbdS0X8A8J` uses the same content asset family for Facebook photo publishing.
- `TQSNDguACZLXBr3s` is the reel publishing shell using Meta Graph API steps.

What is reusable:

- Meta publishing mechanics
- Cloudinary asset ingestion
- post logging

What is weak:

- same core content is reused across platforms without much platform-aware differentiation
- credentials are embedded in node params instead of being cleanly externalized

## 7. Threads Architecture

`iHVKybe15bpPiv0w` is the actual Threads pipeline.

Flow:

- schedule at 17:00 Europe/Madrid
- choose topic by day of week
- read RSS feed
- fetch article
- scrape article content with Firecrawl
- generate multi-part Threads content with GPT-4o-mini
- parse content into parts
- create first post container
- publish first post
- loop through replies
- publish replies
- create Instagram Story summary branch from the same topic

Auth support:

- `fPbtcRT4Ax43Vgrj` refreshes the Threads token on a schedule and updates the workflow itself.

What is reusable:

- the publishing chain
- the thread/reply pattern
- the token maintenance pattern

What is weak:

- token values are embedded in node parameters
- refresh logic writes back into workflow definition
- cron expression is unusual and should be treated carefully

## 8. Morning / Midday / Evening Schedule Reconstruction

| Platform | Content type | Workflow | Exact time | Timezone | Active? |
|---|---|---|---|---|---|
| Instagram + Facebook | Image post | `Io1Uk40wthsBA3bP` -> `dTLHw8YbdS0X8A8J` | 10:00 | Europe/Madrid | Yes |
| Video / reel | Static video + audio | `e8d7OsTN3I6Dals5` -> `TQSNDguACZLXBr3s` | 13:00 | Europe/Madrid | Yes |
| Threads | Text thread + IG Story summary | `iHVKybe15bpPiv0w` | 17:00 | Europe/Madrid | Yes |
| Threads maintenance | Token refresh | `fPbtcRT4Ax43Vgrj` | `0 9 */50 * *` | Europe/Madrid | Yes |
| Knowledge Hub | Brief/draft/review/publish | `kiIOkE6nmZbshY7j` | Mon/Wed/Fri 09:00 | Europe/Tallinn | Yes |

Important note:

- The `*/50` day-of-month cron for Threads token refresh is not a clean literal “every 50 days” calendar interval.

## 9. Niche Selection / Ranking Logic

### What exists

- `IGL2RR8zXim5latq` contains the real niche selector.
- There are **15 niches** in a static array.
- The selector reads content memory from Google Sheets.
- It finds the last used niche and advances to the next one.
- This is round-robin selection, not random ranking.

### Exact niche list

1. Client communications and chat support
2. Sales and lead management
3. Internal business processes
4. HR and recruitment
5. Content and marketing automation
6. Finance and document processing
7. E-commerce and logistics
8. Education and online schools
9. Real estate and rental management
10. Hotels and restaurants
11. Transport and logistics
12. Beauty and wellness
13. Medical clinics and dental care
14. Auto business and car rental
15. Landing page

### Ranking logic

- `IGL2RR8zXim5latq` also uses a day-of-week content-type mapping.
- It is not truly ranked by performance.
- It is a deterministic rotation with memory, not a learning system.

## 10. AI Prompts / Models

### Strategist

- Workflow: `IGL2RR8zXim5latq`
- Model: `gpt-5-mini`
- Output: JSON with `post_type`, `post_topic`, `post_niche`
- Behavior: topic selection by day and niche rotation from history

### Copywriter

- Workflow: `dkJw3htR8XFIYPcs`
- Model: `gpt-5-mini`
- Behavior: static post library keyed by niche

### Art Director

- Workflow: `5PmX2s3QnwuTNUUy`
- Model: code-only prompt builder, no direct model call in the inspected node
- Behavior: niche-aware cinematic split-screen image prompt

### Knowledge Hub brief generator

- Workflow: `AHyrHxysPbE1L2ov`
- Model: `gpt-4.1-mini`
- Behavior: structured brief JSON for long-form article planning

### Knowledge Hub draft writer

- Workflow: `uQ9eDEHokGlb22AO`
- Model: `gpt-4.1`
- Behavior: section-based long-form article generation

### Video renderer

- Workflow: `e8d7OsTN3I6Dals5`
- Models: `gpt-4o-mini`, `gpt-image-2`, `tts-1`
- Behavior: script, image, audio, renderer handoff

### Threads generator

- Workflow: `iHVKybe15bpPiv0w`
- Model: `gpt-4o-mini`
- Behavior: article-to-thread transformation with reply chain

## 11. Image Generation

### Static social images

What I found:

- `5PmX2s3QnwuTNUUy` only writes prompts.
- `dTLHw8YbdS0X8A8J` consumes assets from Cloudinary.
- I did not find a dedicated static-image renderer for the morning social posts in the inspected workflows.

Interpretation:

- The current morning image flow is likely using pre-generated assets or an external renderer not surfaced in this inspection.

### Video image generation

What I found:

- `e8d7OsTN3I6Dals5` actually generates a video image with OpenAI image generation.

### Threads Story image generation

What I found:

- `iHVKybe15bpPiv0w` generates a dashboard-style Instagram Story image via OpenAI image generation and Cloudinary.

## 12. Video / Audio Generation

The clear video/audio renderer is:

- `e8d7OsTN3I6Dals5`

It does:

- strategist call
- script generation
- prompt build
- OpenAI image generation
- image to binary
- Cloudinary upload
- OpenAI TTS
- Cloudinary audio upload
- render call
- publish handoff

This is reusable infrastructure.

## 13. Existing Content Memory

### Primary memory store

- Google Sheets doc: `153FpgvxmAVwrmRYMEQ-tDCiEHbvj02je0pzoqn9pJiQ`
- Sheet name: `Kubera AI — Content Memory`

### Important tabs

- `TOPICS`
- `BRIEFS`
- `DRAFTS`
- `REVIEWS`
- `Kubera AI LeadGen Test`

### What is stored

- topic intake
- brief JSON
- article drafts
- review decisions
- published status
- social log rows

### Assessment

- The memory layer works, but it is sheet-based and operationally fragile.
- It is sufficient as a staging ledger.
- It is not yet a robust intelligence memory layer.

### Can this be replaced later by Postiz + separate memory?

Yes.

- The current system already has a visible separation between generation and publishing.
- Postiz could replace direct publisher nodes.
- A separate content memory layer could sit above it without rebuilding the entire upstream pipeline.

## 14. Publishing APIs

### Instagram / Facebook

`dTLHw8YbdS0X8A8J`

- uses Meta Graph API
- creates media containers
- publishes Instagram image posts
- uploads Facebook photos
- logs the publish event

### Threads

`iHVKybe15bpPiv0w`

- uses Threads Graph API
- creates the first container
- publishes the post
- creates reply containers
- publishes replies

### Reels

`TQSNDguACZLXBr3s`

- uses Meta Graph API reel-related endpoints
- does container creation/status/publish workflow

### Auth mechanism assessment

What I found:

- multiple nodes contain hardcoded access tokens or bearer tokens
- some external services are called with hardcoded secrets in the node parameters

That is a high-risk implementation pattern.

## 15. Error / Retry / Idempotency Analysis

### What is good

- `dTLHw8YbdS0X8A8J` has a publish success check and a cleanup step
- `TQSNDguACZLXBr3s` has a status polling / wait loop
- the Knowledge Hub draft writer has a QA gate
- some Google Sheets steps in the lead flows use retries

### What is weak

- no strong end-to-end idempotency key pattern in social publishing
- no clear duplicate publish lock
- no platform-level retry budget uniformly enforced
- multiple direct tokens are hardcoded into node params
- token refresh workflow patches its own workflow definition

### Result

- The system is operational, but brittle.
- It will work until a token expires, a node fails, or a duplicate publish occurs.

## 16. Existing Storage / Media Retention

### What I found

- Cloudinary is used as the media staging layer for social and story assets
- Google Sheets is used as the content memory ledger
- `dTLHw8YbdS0X8A8J` includes a Cloudinary delete step for one image flow
- `e8d7OsTN3I6Dals5` uploads image and audio assets but I did not see a symmetric cleanup path in the inspected summary
- `iHVKybe15bpPiv0w` creates a story image URL through Cloudinary transformation

### Risk

- Some media assets may linger if cleanup is not symmetric across all branches.

## 17. Workflow Dependency Graph

```text
IGL2RR8zXim5latq
  -> dkJw3htR8XFIYPcs
  -> 5PmX2s3QnwuTNUUy
  -> Io1Uk40wthsBA3bP
  -> dTLHw8YbdS0X8A8J

IGL2RR8zXim5latq
  -> e8d7OsTN3I6Dals5
  -> TQSNDguACZLXBr3s

iHVKybe15bpPiv0w
  -> Threads daily thread chain
  -> Instagram Story branch
  -> Cloudinary staging
  -> Threads token support via fPbtcRT4Ax43Vgrj

QA6c1DuFZLKgiuMP
  -> TOPICS sheet

AHyrHxysPbE1L2ov
  -> BRIEFS sheet

uQ9eDEHokGlb22AO
  -> DRAFTS sheet
  -> REVIEWS sheet

kiIOkE6nmZbshY7j
  -> AHyrHxysPbE1L2ov
  -> uQ9eDEHokGlb22AO
  -> Sis2MY8RWMndCHWD
  -> VmUrT2cIK2BbDvQf

Sis2MY8RWMndCHWD
  -> Telegram review decision
  -> REVIEWS/DRAFTS/TOPICS updates

VmUrT2cIK2BbDvQf
  -> GitHub commit in kubera-ai-site
```

## 18. KEEP / MODIFY / REPLACE Matrix

| Workflow | Platform / function | Current status | Keep? | What should change |
|---|---|---|---|---|
| `IGL2RR8zXim5latq` | niche selection | active | KEEP + MODIFY | Replace static niche rotation with intelligence-based selector |
| `dkJw3htR8XFIYPcs` | copy generation | active | KEEP + MODIFY | Replace static post library with trend/style-aware generator |
| `5PmX2s3QnwuTNUUy` | image prompt generation | active | KEEP + MODIFY | Keep prompt shell, improve art direction input contract |
| `Io1Uk40wthsBA3bP` | social orchestration | active | KEEP + MODIFY | Keep as conductor, add stronger approval / draft boundaries |
| `dTLHw8YbdS0X8A8J` | Instagram + Facebook publishing | active | KEEP + MODIFY | Keep publisher shell, harden credentials and idempotency |
| `e8d7OsTN3I6Dals5` | video/audio rendering | active | KEEP + MODIFY | Keep render pipeline, improve cleanup and content selection |
| `TQSNDguACZLXBr3s` | reel publishing | active | KEEP + MODIFY | Keep Meta publishing shell, harden retries and tokens |
| `iHVKybe15bpPiv0w` | Threads publisher + IG Story branch | active | KEEP + MODIFY | Replace topic source with trend detector, keep publish shell |
| `fPbtcRT4Ax43Vgrj` | Threads token refresh | active | KEEP + MODIFY | Remove workflow self-patching and hardcoded secrets |
| `AHyrHxysPbE1L2ov` | brief generation | active | KEEP AS IS / REUSE | Useful as upstream planning layer |
| `uQ9eDEHokGlb22AO` | draft generation | active | KEEP AS IS / REUSE | Useful as upstream writing layer |
| `kiIOkE6nmZbshY7j` | scheduling/orchestration | active | KEEP AS IS / REUSE | Good orchestration skeleton |
| `Sis2MY8RWMndCHWD` | Telegram review | active | KEEP AS IS / REUSE | Good human approval layer |
| `VmUrT2cIK2BbDvQf` | publish layer | active | KEEP AS IS / REUSE | Good publish abstraction for site content |
| `QA6c1DuFZLKgiuMP` | topic intake | inactive | KEEP + MODIFY | Can become social trend intake, but needs new data source |
| `tJM5DQgFBUxWDmuN` | read utility | inactive | KEEP / ARCHIVE LATER | Utility only |
| `lXSftVAnYJ0p1qsS` | lead intake | active | LEAVE SEPARATE | Not part of social content assistant |
| `rOjsIFp1p74MsuOD` | lead notification | active | LEAVE SEPARATE | Not part of social content assistant |
| `XqFoAQmvQCNePyE4` | lead-gen MVP | inactive | ARCHIVE LATER | Separate prototype, not social content |

## 19. Postiz Integration Readiness

### Verdict

Yes, the existing pipeline can be adapted to use Postiz without rebuilding everything.

### Why

- generation is already separated from publishing
- each platform has a clear publish shell
- memory and approval are already externalized enough to sit upstream of Postiz

### What would change

- replace direct Meta / Threads publisher nodes
- keep strategist / copywriter / art director / renderer upstream
- route drafts into Postiz queue
- preserve the existing memory layer until a better one is ready

### What might still need edits

- publish payload shape
- image URL handoff
- replay / dedupe state
- per-platform formatting differences

## 20. Reusable Infrastructure

Good infrastructure to keep:

- Google Sheets content memory
- scheduled orchestration
- explicit review layer
- Cloudinary staging
- Meta publish shells
- Threads thread/reply chain
- video render pipeline
- GitHub publish layer for Knowledge Hub content

## 21. Parts That Should Be Redesigned

The weakest parts are the parts that decide what to say, not the parts that press publish.

Redesign candidates:

- static niche rotation
- static post library
- no trend detector
- no feedback loop from performance
- no content-classification or style-learning layer
- hardcoded tokens in node params
- self-patching token refresh flow
- no real publisher abstraction boundary for a future unified social queue

## 22. Risks

High-risk findings:

- hardcoded access tokens / bearer tokens in node params
- Threads refresh workflow writes back into workflow definition
- no hard publisher idempotency layer
- duplicate-post risk if schedules overlap or nodes are manually executed
- Cloudinary asset retention may be uneven
- no strong engagement feedback loop
- no unified social memory store
- static niche corpus can drift from business reality
- `Threads Token Auto-Refresh` cron expression is suspicious as a literal 50-day cadence
- lead workflows also contain hardcoded secrets, though they are outside social scope

## 23. Recommended Migration Path - Without Implementation

### Stage 1

Keep the existing publisher shells and memory.

### Stage 2

Replace the intelligence layer:

- trend detector
- topic scoring
- style and niche router
- content memory classifier

### Stage 3

Insert a draft/approval contract:

- social draft object
- human approval or policy gate
- publisher input normalization

### Stage 4

Move direct platform publishes behind one queue:

- keep existing Meta/Threads shells as fallback during transition
- introduce Postiz later if desired

### Stage 5

Harden secrets and retry/idempotency.

## 24. Exact Next Safest Step

Build a thin **Social Content Assistant** layer on top of the current system:

- keep the publishers
- keep the memory ledger
- replace the static niche / copy logic
- add trend and feedback intelligence
- keep the current workflows as fallback during transition

That is a **partial rebuild**, not a full rebuild.

## 25. Final Workflow Summary Table

| Workflow | Platform / function | Current status | Keep? | What should change |
|---|---|---|---|---|
| `Io1Uk40wthsBA3bP` | Morning orchestration | Active | Keep + modify | Add stronger intelligence / approval boundary |
| `IGL2RR8zXim5latq` | Niche selection | Active | Keep + modify | Replace static round-robin with smarter scoring |
| `dkJw3htR8XFIYPcs` | Copy generation | Active | Keep + modify | Replace static library with dynamic content brain |
| `5PmX2s3QnwuTNUUy` | Image prompt generation | Active | Keep + modify | Keep shell, improve art direction input |
| `dTLHw8YbdS0X8A8J` | Instagram + Facebook publish | Active | Keep + modify | Harden tokens, idempotency, and asset cleanup |
| `e8d7OsTN3I6Dals5` | Video/audio render | Active | Keep + modify | Improve cleanup and content selection |
| `TQSNDguACZLXBr3s` | Reel publish | Active | Keep + modify | Harden Meta publish shell |
| `iHVKybe15bpPiv0w` | Threads publisher + IG Story summary | Active | Keep + modify | Replace topic source with trend detector |
| `fPbtcRT4Ax43Vgrj` | Threads token refresh | Active | Keep + modify | Remove self-patching secret handling |
| `AHyrHxysPbE1L2ov` | Brief generator | Active | Keep | Reuse as upstream planning layer |
| `uQ9eDEHokGlb22AO` | Draft writer | Active | Keep | Reuse as upstream writing layer |
| `kiIOkE6nmZbshY7j` | Scheduler/orchestrator | Active | Keep | Reuse orchestration skeleton |
| `Sis2MY8RWMndCHWD` | Telegram review | Active | Keep | Reuse human approval layer |
| `VmUrT2cIK2BbDvQf` | Publish layer | Active | Keep | Reuse publish abstraction |
| `QA6c1DuFZLKgiuMP` | Topic intake | Inactive | Keep + modify | Can become social trend intake |
| `tJM5DQgFBUxWDmuN` | Read utility | Inactive | Archive later | Utility only |
| `lXSftVAnYJ0p1qsS` | Lead intake | Active | Leave separate | Not social content |
| `rOjsIFp1p74MsuOD` | Lead notification | Active | Leave separate | Not social content |
| `XqFoAQmvQCNePyE4` | Lead-gen MVP | Inactive | Archive later | Separate lead-gen prototype |

