# Kubera Social Content Assistant Target Architecture

Date: 2026-08-09
Scope: read-only research and target-architecture design only

## 1. Executive Summary

The existing Kubera AI social-content system is not a blank slate. It already contains:

- a usable social publishing shell for Instagram, Facebook, and Threads
- a niche selector with history-aware round-robin behavior
- a separate video/audio publishing flow
- Google Sheets-backed content memory
- Cloudinary-based media staging
- schedule-driven orchestration
- token refresh automation

The weakest part is the intelligence layer:

- topics are static or deterministic
- niche selection is not based on trend velocity or relevance scoring
- copy is still too library-driven
- there is no real semantic topic deduplication
- there is no mature closed-loop feedback system from performance into topic selection

The safest conclusion is:

- do not rebuild the publishing stack from zero
- keep the orchestration and publishing infrastructure
- replace the intelligence/content-generation layer
- insert Postiz as the queue/calendar/publishing layer only after the draft and approval model is proven

Verdict:

- **Partial rebuild**
- **Keep infrastructure**
- **Replace intelligence**

## 2. Existing System Facts

Source of truth:

- Previous forensic audit file: `KUBERA_SOCIAL_CONTENT_EXISTING_SYSTEM_FORENSIC_AUDIT.md`
- Absolute path: `C:\Users\Admin\kubera-ai-site\.worktrees\portugal-real-image\KUBERA_SOCIAL_CONTENT_EXISTING_SYSTEM_FORENSIC_AUDIT.md`

Discovered Kubera-related workflow family:

- 19 workflows discovered in the workspace
- the audit could not prove a hard folder boundary from MCP metadata
- the discovered family is the practical dependency set for the social/content system

### 2.1 Workflow inventory

| ID | Workflow | Role | Notes |
|---|---|---|---|
| `AHyrHxysPbE1L2ov` | Kubera AI - Knowledge Hub Article Brief Generator | Brief generation | Writes to `BRIEFS` |
| `uQ9eDEHokGlb22AO` | Kubera AI - Knowledge Hub Article Draft Writer | Draft generation | Writes to `DRAFTS` |
| `VmUrT2cIK2BbDvQf` | Kubera AI - Knowledge Hub Publish Layer | Site publish layer | GitHub commit from approved drafts |
| `kiIOkE6nmZbshY7j` | Kubera AI - Knowledge Hub Scheduled Article Orchestrator | Knowledge Hub orchestration | Topic selection -> brief -> draft -> review -> publish |
| `Sis2MY8RWMndCHWD` | Kubera AI - Knowledge Hub Telegram Editorial Review | Human review | Telegram-based approval path |
| `QA6c1DuFZLKgiuMP` | Kubera AI - Knowledge Hub Topic Discovery | Topic intake | Appends to `TOPICS` |
| `tJM5DQgFBUxWDmuN` | Kubera KH - Read Content Rows | Utility | Reads sheet rows |
| `IGL2RR8zXim5latq` | Kubera AI - SMM Strategist | Niche selection / ranking | 15 niches, round-robin, day-of-week type rotation |
| `dkJw3htR8XFIYPcs` | Kubera AI - SMM Copywriter | Copy generation | Static niche post library + gpt-5-mini |
| `5PmX2s3QnwuTNUUy` | Kubera AI - SMM Art Director | Image prompt generation | Niche-aware split-screen prompt |
| `Io1Uk40wthsBA3bP` | Kubera AI - SMM Orchestrator | Morning social orchestration | Calls strategist -> copywriter -> art director -> publisher |
| `dTLHw8YbdS0X8A8J` | Kubera AI - SMM Publisher | Instagram + Facebook publisher | Cloudinary -> Meta Graph API -> Sheets log |
| `e8d7OsTN3I6Dals5` | Kubera AI - SMM Video Renderer Production | Midday video/audio pipeline | Strategist -> script -> image gen -> TTS -> render -> publish |
| `TQSNDguACZLXBr3s` | Kubera AI - SMM Video Publisher | Reel publishing | Meta Graph API reel container/publish chain |
| `iHVKybe15bpPiv0w` | Threads Daily AI News | Threads + IG Story branch | RSS/day, Firecrawl, GPT thread chain |
| `fPbtcRT4Ax43Vgrj` | Threads Token Auto-Refresh | Token maintenance | Patches token in workflow itself |
| `lXSftVAnYJ0p1qsS` | Kubera AI Lead Assistant Intake | Lead intake | Webhook -> CRM sync + Telegram notification |
| `rOjsIFp1p74MsuOD` | Kubera AI Leads | Lead notification | Telegram alert |
| `XqFoAQmvQCNePyE4` | Kubera AI - LeadGen MVP v2 CLEAN | Separate prototype | Not core social content |

### 2.2 Reconstructed dependency map

```text
MORNING SOCIAL FLOW
Io1Uk40wthsBA3bP (Orchestrator)
  -> IGL2RR8zXim5latq (Strategist)
  -> dkJw3htR8XFIYPcs (Copywriter)
  -> 5PmX2s3QnwuTNUUy (Art Director)
  -> dTLHw8YbdS0X8A8J (Instagram + Facebook publisher)

MIDDAY VIDEO FLOW
e8d7OsTN3I6Dals5 (Video renderer production)
  -> Strategist
  -> Script generation
  -> OpenAI image generation
  -> OpenAI TTS
  -> Cloudinary
  -> Renderer
  -> TQSNDguACZLXBr3s (Reel publisher)

EVENING THREADS FLOW
iHVKybe15bpPiv0w (Threads Daily AI News)
  -> Day-based RSS topic selection
  -> Firecrawl scrape
  -> GPT thread generation
  -> Threads publish
  -> Instagram Story summary branch

TOKEN MAINTENANCE
fPbtcRT4Ax43Vgrj
  -> refresh Threads token
  -> patch token back into workflow

KNOWLEDGE HUB
QA6c1DuFZLKgiuMP -> TOPICS
kiIOkE6nmZbshY7j -> AHyr -> uQ9e -> Sis2 -> VmUr
```

### 2.3 Current schedule reconstruction

| Platform / content type | Workflow | Exact time | Timezone | Active |
|---|---|---:|---|---|
| Morning image social post | `Io1Uk40wthsBA3bP` | 10:00 | Europe/Madrid | Yes |
| Midday video/audio post | `e8d7OsTN3I6Dals5` | 13:00 | Europe/Madrid | Yes |
| Evening Threads post | `iHVKybe15bpPiv0w` | 17:00 | Europe/Madrid | Yes |
| Threads token refresh | `fPbtcRT4Ax43Vgrj` | cron-based | Europe/Madrid | Yes |

## 3. Exact Kubera AI / Social Workflow Inventory

### Social content workflows

- `IGL2RR8zXim5latq` - strategy and niche selection
- `dkJw3htR8XFIYPcs` - copy generation
- `5PmX2s3QnwuTNUUy` - art direction prompt generation
- `Io1Uk40wthsBA3bP` - morning orchestration
- `dTLHw8YbdS0X8A8J` - Instagram/Facebook publishing
- `e8d7OsTN3I6Dals5` - video/audio generation
- `TQSNDguACZLXBr3s` - reel publishing
- `iHVKybe15bpPiv0w` - Threads publishing + IG Story branch
- `fPbtcRT4Ax43Vgrj` - Threads token maintenance

### Content memory and governance workflows

- `QA6c1DuFZLKgiuMP`
- `AHyrHxysPbE1L2ov`
- `uQ9eDEHokGlb22AO`
- `kiIOkE6nmZbshY7j`
- `Sis2MY8RWMndCHWD`
- `VmUrT2cIK2BbDvQf`
- `tJM5DQgFBUxWDmuN`

### Adjacent workflows

- `lXSftVAnYJ0p1qsS`
- `rOjsIFp1p74MsuOD`
- `XqFoAQmvQCNePyE4`

## 4. Server Capacity

Safe read-only SSH host:

- hostname: `n8n-viktoriia-u68591`
- IP: `89.167.87.68`
- user: `root`

### 4.1 CPU

- model: AMD EPYC-Rome Processor
- vCPU: 4
- sockets: 1
- threads per core: 1
- current load average: `0.16, 0.43, 0.31`

### 4.2 RAM

- total: `7.6 GiB`
- used: `2.4 GiB`
- free: `943 MiB`
- available: `5.1 GiB`
- swap: `2.0 GiB`
- swap used: `23 MiB`

### 4.3 Disk

- root filesystem: `75G total`, `24G used`, `49G available`
- `/opt/app`: `20G total`, `265M used`, `19G available`

### 4.4 Docker footprint

Observed Docker image footprint included:

- n8n stack images
- Redis
- PostgreSQL
- OpenClaw
- NocoDB
- Umami
- Kubera renderer
- nginx auto-ssl
- postfix

Observed Docker stats showed the host is already running a dense stack, including n8n workers, NocoDB, Umami, OpenClaw, the Kubera renderer, nginx, and postfix.

### 4.5 Relevant ports already in use

- `22` SSH
- `25` postfix
- `80` nginx
- `443` nginx
- `3001` Umami
- `3100` Kubera renderer
- `5678` n8n
- `8080` NocoDB
- `18789-18790` OpenClaw gateway

### 4.6 Can this host safely run Postiz?

Verdict: **YES WITH CONDITIONS**

Reasoning:

- official Postiz docs recommend 8 GB RAM for a small team, while 2 GB is only the tested floor for a minimal single-user install
- this host has 7.6 GiB total and about 5.1 GiB available now, but it already runs a dense multi-service stack
- disk is adequate
- port mapping must avoid existing listeners, especially `8080`

Conditions:

- use the official Docker Compose image-based install, not a source build on the host
- avoid sharing host port `8080` because NocoDB already uses it
- keep Postiz on a dedicated host port such as `4007` if following the official compose default mapping
- avoid co-locating additional memory-heavy build jobs on this box

## 5. Official Postiz Facts

Primary sources used:

- Official app repo: `https://github.com/gitroomhq/postiz-app`
- Official self-host compose repo: `https://github.com/gitroomhq/postiz-docker-compose`
- Documentation index: `https://docs.postiz.com/llms.txt`

### 5.1 License and repository

- Official application repository: `gitroomhq/postiz-app`
- License: AGPL-3.0
- Official docker-compose repository: `gitroomhq/postiz-docker-compose`

### 5.2 Architecture

Postiz docs state the system is composed of:

- Frontend
- Backend
- Orchestrator
- Temporal
- Redis
- SQL database
- Storage

The docs also state that the orchestrator now replaces the old cron/worker model for scheduled async processing.

### 5.3 Installation model

Official self-host path:

- clone `gitroomhq/postiz-docker-compose`
- run `docker compose up`

The compose setup ships with Postgres, Redis, and Temporal pre-wired.

### 5.4 Resource requirements

Official system requirements:

- CPU floor: 2 vCPU
- CPU recommended: 4 vCPU
- RAM floor: 2 GB for light single-user use
- RAM recommended: 8 GB
- Disk floor: 20 GB
- Disk recommended: 50 GB plus persistent uploads volume

### 5.5 Ports

Official docs list:

- Postiz container: 5000 inside the container, commonly mapped to host `4007:5000`
- Backend from source: 3000
- Frontend from source: 4200
- Temporal frontend / UI: 8080 in bundled compose

### 5.6 Storage

Official docs support:

- local filesystem storage
- Cloudflare R2

Relevant storage variables:

- `STORAGE_PROVIDER`
- `UPLOAD_DIRECTORY`
- `NEXT_PUBLIC_UPLOAD_STATIC_DIRECTORY`
- R2 variables (`CLOUDFLARE_*`)

### 5.7 API

Postiz public API supports:

- API key auth
- OAuth2 token auth
- creating drafts
- scheduling posts
- uploading media
- listing integrations
- analytics

The official docs also mention:

- an official Postiz NodeJS SDK
- a custom n8n node for Postiz

That means the product can be controlled programmatically through API/CLI paths and can plausibly sit behind an n8n orchestration layer if needed.

The docs also show the CLI can authenticate and manage uploads/posts.

### 5.8 Supported platforms relevant here

Official docs explicitly support:

- Instagram
- Facebook
- Threads
- Telegram

### 5.9 Upload and media behavior

Official docs support:

- multipart upload
- upload from URL
- returning an `id` and `path`
- passing uploaded media into the `image` array for a post

The docs do **not** provide a dedicated, explicit media-retention or media-cleanup policy.

I did **not** find a public delete-media endpoint in the docs. A GitHub issue on the official repo also reports a self-hosted Cloudflare case where deleting a media record removed the database row but not the underlying cloud file. Treat file deletion as something that must be verified, not assumed.

### 5.10 Official sources and specific proof points

- System requirements: `https://docs.postiz.com/installation/system-requirements`
- Docker compose install: `https://docs.postiz.com/installation/docker-compose`
- Architecture: `https://docs.postiz.com/howitworks`
- API auth and create post: `https://docs.postiz.com/public-api/introduction`, `https://docs.postiz.com/public-api/posts/create`
- Upload file: `https://docs.postiz.com/public-api/uploads/upload-file`
- Upload from URL: `https://docs.postiz.com/public-api/uploads/upload-from-url`
- Media CLI upload: `https://docs.postiz.com/cli/media-upload`
- Provider overview: `https://docs.postiz.com/providers/overview`
- Instagram: `https://docs.postiz.com/providers/instagram`
- Facebook: `https://docs.postiz.com/providers/facebook`
- Threads: `https://docs.postiz.com/providers/threads`
- Telegram: `https://docs.postiz.com/providers/telegram`
- Cloudflare R2: `https://docs.postiz.com/configuration/r2`

## 6. Current Postiz Resource Model

### 6.1 Base install footprint

Documented floor:

- 2 GB RAM
- 20 GB disk

Documented recommended starting point:

- 8 GB RAM
- 50 GB disk plus persistent uploads

Practical estimate for the Kubera use case:

- app + Temporal + Redis + Postgres + volumes: roughly 3 to 6 GB disk before media growth
- if using local uploads and keeping a modest draft queue, add media growth on top of that

### 6.2 Idle RAM footprint

The docs do not publish an exact idle-RAM figure.

Reasonable estimate for self-hosted, image-based installs:

- roughly 0.5 to 1.5 GiB idle for the Postiz stack itself
- higher during build, indexing, or bursty scheduling

This is an estimate, not a documented guarantee.

### 6.3 Media storage scenarios

Assumption:

- 30-day month
- 365-day year

#### Scenario A

- 1 image/post
- 500 KB average
- 5 posts/day

Calculations:

- per day: 2.5 MB
- per month: 75 MB
- 3 months: 225 MB
- per year: 912.5 MB

#### Scenario B

- 1 image/post
- 2 MB average
- 5 posts/day

Calculations:

- per day: 10 MB
- per month: 300 MB
- 3 months: 900 MB
- per year: 3.65 GB

#### Scenario C

- 5-image carousel
- 1 MB/image
- 2 carousels/day

Calculations:

- per carousel: 5 MB
- per day: 10 MB
- per month: 300 MB
- 3 months: 900 MB
- per year: 3.65 GB

### 6.4 Storage with retention windows

#### 7 days

- Scenario A: 17.5 MB
- Scenario B: 70 MB
- Scenario C: 70 MB

#### 30 days

- Scenario A: 75 MB
- Scenario B: 300 MB
- Scenario C: 300 MB

#### 90 days

- Scenario A: 225 MB
- Scenario B: 900 MB
- Scenario C: 900 MB

## 7. Media Retention Design

### 7.1 Required safety rule

Never delete media immediately after sending the publish API request.

Deletion must happen only after:

- publish success is confirmed
- platform processing delay has passed
- the post is known to exist on the target platform

### 7.2 Recommended lifecycle

```text
UPLOADED
  -> DRAFT
  -> APPROVED
  -> SCHEDULED
  -> PUBLISH_REQUESTED
  -> PUBLISH_CONFIRMED
  -> SAFETY_DELAY
  -> CLEANUP_ELIGIBLE
  -> DELETE_MEDIA
  -> KEEP_METADATA
```

### 7.3 Recommended default retention

Best default for this use case:

- **30 days**

Why:

- 7 days is too aggressive for delayed review, publish retries, and platform-side async confirmation
- 90 days is safe but increases storage accumulation without much benefit for a low-volume social queue
- 30 days is the best compromise between rollback safety and disk hygiene

### 7.4 Keep / pin behavior

Media should never be deleted when:

- a post is pinned
- the asset is marked KEEP
- publication is disputed
- the post is still in review
- platform confirmation is missing

### 7.5 Cleanup job behavior

Cleanup should:

- inspect publication state
- wait for a safety delay
- delete only media, not the post metadata
- preserve platform IDs, URLs, and performance data
- log deletion action
- stop on repeated cleanup failure

### 7.6 Best compatibility note

Postiz supports local storage and R2, but the public docs do not document a native auto-retention mechanism for media. That means retention should be designed as an external operational policy, not assumed to exist natively.

## 8. Manual Image Workflow

### 8.1 MVP goal

The user manually creates images in:

- ChatGPT / OpenAI image generation
- Minimax
- or an external editor

Then uploads them into the content pipeline for draft and scheduling.

### 8.2 Best workflow choice

Preferred MVP:

1. create draft in Postiz
2. upload image directly into Postiz
3. choose platform/account
4. schedule or save as draft
5. publish only after approval

This is the simplest path because Postiz explicitly supports:

- drafts
- uploads
- scheduling
- Instagram / Facebook / Threads / Telegram integrations

### 8.3 Comparison

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| Direct upload into Postiz | Simplest, least moving parts, uses native draft/schedule model | Requires the user to touch Postiz UI | **Best MVP** |
| Telegram approval bot | Good for approval workflows and mobile-first operations | More custom code and more moving parts | Good later |
| Future Kubera UI / NocoDB | Centralized and customizable | Higher migration risk and more build work | Not first choice |

### 8.4 Carousel support

Postiz public docs and API schema support multi-image post payloads and Instagram post settings through the `image` array / platform settings. That makes carousel-style publishing plausible in the product surface, but exact behavior should still be test-verified in a live install before it becomes a migration dependency.

## 9. Telegram Monitor Architecture

### 9.1 Recommended free stack

Best low-cost option:

- Python + Telethon

### 9.2 Why Telethon

Telethon can read authorized Telegram groups through a user session.

This is suitable for:

- whitelisted source groups
- read-only monitoring
- event-driven ingestion

### 9.3 Security / privacy constraints

Must not:

- scrape arbitrary groups
- message users
- auto-join groups
- collect member lists
- retain unnecessary private content forever

Must:

- whitelist group IDs
- store only normalized message signals where possible
- use the user's authorized session responsibly

### 9.4 Recommended flow

```text
Telegram group event
  -> Telethon listener
  -> whitelist check
  -> normalize message
  -> extract topic + style features
  -> forward signal to queue / API
  -> optional raw text short retention
  -> feature retention / deletion policy
```

### 9.5 n8n integration

Best handoff mechanism:

- Telethon sends normalized JSON to an HTTP endpoint
- n8n consumes the event and routes it into the intelligence pipeline

Polling is acceptable for backup, but event-driven ingestion is the primary recommendation.

## 10. Threads Monitoring Architecture

### 10.1 What to monitor

Only publicly allowed / technically permitted sources:

- public Threads sources
- official AI/company/news feeds
- sanctioned feeds and RSS where available

### 10.2 Purpose

Not to copy content.

Instead:

- detect topic velocity
- extract facts
- capture tone and hook patterns
- measure whether a topic is rising fast

### 10.3 Recommended guardrail

The system should never ingest the source post as a rewrite target.

It should ingest:

- facts
- topic cluster
- velocity signal
- stylistic features

## 11. Trend Detector

### 11.1 Problem to solve

Multiple source messages can refer to the same underlying event:

- `Anthropic released Claude`
- `new Claude model`
- `Claude release`

These should become one topic cluster, not multiple duplicate topics.

### 11.2 Proposed scoring model

```text
Trend Score =
  recency
  + source_diversity
  + discussion_velocity
  + Kubera_relevance
  + novelty
  - already_covered_penalty
  - semantic_duplicate_penalty
```

### 11.3 Required sub-steps

1. ingest source signals
2. embed / normalize topic text
3. cluster semantically similar mentions
4. score cluster velocity
5. score Kubera relevance
6. apply anti-duplicate penalty
7. emit one approved trend topic

### 11.4 Output

The output of the trend detector is a `master topic`, not a post.

## 12. Style Intelligence

The system should learn style features, not copy text.

Useful features:

- average post length
- sentence length
- hook structure
- paragraph structure
- emoji density
- question frequency
- directness
- technical depth
- CTA style
- formatting patterns
- storytelling density

### 12.1 Data lifecycle

```text
RAW MESSAGE
  -> extraction
  -> style features
  -> topic signal
  -> short retention or anonymized retention
  -> deletion policy for raw text
```

### 12.2 Anti-plagiarism rule

The generator should not receive a prompt like:

- "rewrite this post"

It should receive:

- facts
- topic cluster
- Kubera angle
- style profile

## 13. Anti-Copy Architecture

The content engine should:

- compare the draft against source material
- reject drafts that are too similar
- regenerate if similarity is above threshold
- avoid paraphrase-only output

Recommended safeguard chain:

```text
sources
  -> fact extraction
  -> topic clustering
  -> Kubera angle generation
  -> platform draft generation
  -> semantic similarity check
  -> approve or regenerate
```

## 14. 15 Niches: New Role

The 15 niches should not be deleted.

They should be repurposed from:

- `round-robin content source`

to:

- `contextual relevance lens`

Example:

```text
Claude release
  -> which Kubera niche is relevant?
  -> customer support
  -> recruitment automation
  -> sales enablement
  -> internal operations
```

This means:

- the trend creates the topic
- the niche chooses the angle

The current strategist workflow should be preserved conceptually, but the selection logic should be changed from deterministic rotation to relevance-based scoring.

## 15. Platform-Specific Generation

The future system must generate native versions for each platform:

- Instagram
- Facebook
- Threads
- Telegram

It should not produce one identical text for all platforms.

### 15.1 Platform adaptation examples

- Threads: concise, opinionated, hook-forward, thread-friendly
- Instagram: polished, visual-first, slightly more compressed
- Facebook: slightly longer, more explanatory, page-friendly
- Telegram: direct, useful, operational, link-friendly

## 16. Postiz Integration Readiness

### 16.1 Can Postiz fit the target use case?

Yes, with conditions.

Reasons:

- Postiz supports drafts
- Postiz supports scheduling
- Postiz supports uploads
- Postiz supports Instagram, Facebook, Threads, Telegram
- Postiz has a public API and CLI

### 16.2 Best insertion point

Preferred pipeline:

```text
intelligence
  -> content generation
  -> quality gate
  -> approval
  -> Postiz queue/calendar
  -> social publishing
```

### 16.3 Why Postiz should not be the intelligence layer

Postiz is best used for:

- queue
- calendar
- draft management
- account connections
- publishing

It should not be treated as the trend detector or style brain.

### 16.4 Can the current publisher shells be kept?

Yes, temporarily.

The existing direct publishers are useful as:

- fallback
- migration safety net
- comparison path

But they should be replaced or disabled once Postiz is proven in isolated testing.

## 17. Content Memory vs Publishing Queue

### 17.1 Separate the responsibilities

#### Content Memory

Should store:

- topic history
- source signals
- style features
- trend clusters
- niche context
- performance history
- previous coverage

#### Publishing Queue

Should store:

- draft state
- scheduled state
- platform state
- media attachments
- publish state

### 17.2 Suggested MVP split

Best low-risk option:

- keep Google Sheets as the short-term content memory source of truth
- use Postiz as publishing queue and UI
- move to PostgreSQL or NocoDB only after the model is proven

## 18. Existing Workflow Reuse Matrix

| Workflow | Current status | Keep? | What should change |
|---|---|---|---|
| `IGL2RR8zXim5latq` | strategist / niche selection | Modify | Replace round-robin with trend-aware relevance scoring |
| `dkJw3htR8XFIYPcs` | copywriter | Replace logic | Replace static niche library with platform-native generation |
| `5PmX2s3QnwuTNUUy` | art director | Modify | Convert from prompt factory to optional visual brief generator |
| `Io1Uk40wthsBA3bP` | morning orchestrator | Keep as fallback | Keep orchestration shell; route to new intelligence stack |
| `dTLHw8YbdS0X8A8J` | Instagram/Facebook publisher | Keep as fallback | Keep as direct publishing fallback until Postiz is proven |
| `e8d7OsTN3I6Dals5` | video/audio pipeline | Archive later | Not needed for MVP content-assistant path unless multimedia publishing is retained |
| `TQSNDguACZLXBr3s` | reel publisher | Keep as fallback | Keep until Postiz or new queue is validated |
| `iHVKybe15bpPiv0w` | Threads publisher / story branch | Modify | Split monitoring from publishing; keep publishing fallback if needed |
| `fPbtcRT4Ax43Vgrj` | Threads token refresh | Archive later | Likely obsolete if Postiz handles Threads |
| `QA6c1DuFZLKgiuMP` | topic intake | Keep | Useful as the seed ingestion pattern |
| `AHyrHxysPbE1L2ov` | brief generator | Keep + modify | Useful brief stage, but should consume trend clusters |
| `uQ9eDEHokGlb22AO` | draft writer | Keep + modify | Good draft stage, but must become platform-native generator |
| `kiIOkE6nmZbshY7j` | article orchestrator | Keep | Separate knowledge hub pipeline, not core social path |
| `Sis2MY8RWMndCHWD` | editorial review | Keep | Useful approval pattern |
| `VmUrT2cIK2BbDvQf` | publish layer | Keep | Reusable publish boundary concept |
| `tJM5DQgFBUxWDmuN` | row reader | Keep | Utility only |
| `lXSftVAnYJ0p1qsS` | lead intake | Unrelated | No change needed for social content |
| `rOjsIFp1p74MsuOD` | lead alert | Unrelated | No change needed for social content |
| `XqFoAQmvQCNePyE4` | lead-gen prototype | Unrelated | No change needed for social content |

## 19. Target Architecture

```text
WHITELISTED SOURCES
  - Telegram groups
  - public Threads sources
  - trusted AI/news feeds
        |
        v
INGESTION
  - Telethon listener
  - RSS / public source monitor
        |
        v
NORMALIZATION
  - message normalization
  - source tagging
  - language tagging
        |
        v
TOPIC CLUSTERING
  - semantic deduplication
  - velocity scoring
  - recency scoring
        |
        v
TREND DETECTOR
  - approved topic cluster
        |
        v
STYLE INTELLIGENCE
  - hooks
  - tone
  - length
  - formatting
        |
        v
KUBERA RELEVANCE
  - choose relevant niche lens
        |
        v
KUBERA ANGLE GENERATOR
  - explain what happened
  - why it matters
  - what Kubera thinks
  - practical application
        |
        v
PLATFORM ADAPTER
  - Instagram
  - Facebook
  - Threads
  - Telegram
        |
        v
QUALITY GATE
  - anti-copy similarity check
  - factual validation
  - brand tone validation
        |
        v
DRAFT QUEUE
  - Postiz draft or equivalent
        |
        v
MANUAL IMAGE UPLOAD
  - ChatGPT / OpenAI
  - Minimax
  - direct file upload
        |
        v
APPROVAL
  - human review
        |
        v
POSTIZ PUBLISHING LAYER
        |
        v
SOCIAL NETWORKS
  - Instagram
  - Facebook
  - Threads
  - Telegram
        |
        v
PERFORMANCE FEEDBACK
  - engagement history
  - reuse penalties
  - future scoring
        |
        v
CONTENT MEMORY
  - trends
  - drafts
  - history
  - style features
```

## 20. Migration Phases

Recommended phased migration:

1. backup and rollback proof
2. isolated Postiz test
3. manual drafts only
4. Telegram monitor shadow mode
5. trend detector shadow mode
6. AI drafts, no publishing
7. manual approval
8. one test account / one platform
9. gradual production rollout
10. fallback period
11. archive obsolete logic only after proof

## 21. Backup Strategy

Before any implementation:

- snapshot workflow exports
- snapshot Google Sheet state used as content memory
- record current Postiz-related config state once installed
- preserve old publisher shells as fallback

## 22. Rollback Strategy

Rollback should be at the layer boundary, not by improvising inside production.

If a new intelligence module fails:

- disable the new module
- keep the existing publisher shell
- route drafts back to the old path temporarily

If Postiz fails:

- revert to the existing direct publisher shell
- do not delete legacy publishers until Postiz is fully proven

## 23. Security Risks

Observed or likely risks:

- hardcoded credentials in workflow params
- token refresh workflows that patch themselves
- duplicate publishing paths
- media URLs that may expire
- missing idempotency on retries
- stale schedule jobs
- direct API calls to platform endpoints
- raw source text retention without minimization

## 24. Cost Estimate

### 24.1 Infrastructure cost

For this host, the main cost is already sunk:

- 4 vCPU
- 7.6 GiB RAM
- 75 GB root disk

Postiz itself does not look expensive to host on a small server, but it will compete for memory with the existing stack.

### 24.2 Operational cost

Main operational cost centers:

- manual approval time
- trend monitoring logic
- source whitelisting
- media retention / cleanup
- content memory hygiene

## 25. Exact Implementation Order

1. define the trend/topic data model
2. add a source monitor for whitelisted Telegram groups
3. add public Threads monitoring where allowed
4. build semantic clustering and trend scoring
5. produce platform-native text drafts
6. add similarity / anti-copy checks
7. preserve existing publishers as fallback only
8. wire manual image upload into the draft queue
9. test Postiz in isolation
10. migrate one platform at a time

## 26. Exact First Safe Implementation Task

Build a read-only shadow ingestion service that:

- reads only whitelisted Telegram groups
- reads only allowed public Threads / news sources
- normalizes messages into topic signals
- clusters duplicate topic mentions
- writes trend candidates into a separate draft table or sheet
- does **not** publish anything

This is the smallest safe step because it validates the new intelligence layer before any publishing replacement.

## 27. Recommended Answers to the Core Questions

### 27.1 Can we reuse the existing system?

Yes.

The system already contains enough infrastructure to avoid a full rewrite:

- publishing shells
- token refresh
- scheduling
- content memory
- approval patterns

### 27.2 What must be rebuilt?

The intelligence/content-generation layer:

- trend detection
- topic deduplication
- relevance scoring
- platform-native generation
- anti-copy checks

### 27.3 Can Postiz sit on top of the current stack?

Yes.

Best role:

- calendar
- queue
- draft UI
- publishing boundary

### 27.4 Best overall verdict

- **PARTIAL REBUILD**
- not a full rewrite
- not a pure config tweak
- not just a UI swap

## 28. Sources

### Postiz official documentation

- `https://docs.postiz.com/installation/system-requirements`
- `https://docs.postiz.com/installation/docker-compose`
- `https://docs.postiz.com/howitworks`
- `https://docs.postiz.com/public-api/introduction`
- `https://docs.postiz.com/public-api/posts/create`
- `https://docs.postiz.com/public-api/uploads/upload-file`
- `https://docs.postiz.com/public-api/uploads/upload-from-url`
- `https://docs.postiz.com/cli/media-upload`
- `https://docs.postiz.com/configuration/reference`
- `https://docs.postiz.com/configuration/r2`
- `https://docs.postiz.com/providers/overview`
- `https://docs.postiz.com/providers/instagram`
- `https://docs.postiz.com/providers/facebook`
- `https://docs.postiz.com/providers/threads`
- `https://docs.postiz.com/providers/telegram`

### Official GitHub

- `https://github.com/gitroomhq/postiz-app`
- `https://github.com/gitroomhq/postiz-docker-compose`

### Official GitHub issues used as cautionary evidence

- `https://github.com/gitroomhq/postiz-app/issues/821`
- `https://github.com/gitroomhq/postiz-app/issues/462`

### Local Kubera forensic report

- `C:\Users\Admin\kubera-ai-site\.worktrees\portugal-real-image\KUBERA_SOCIAL_CONTENT_EXISTING_SYSTEM_FORENSIC_AUDIT.md`

## 29. Final Recommendation

The best path is:

1. keep the current publisher infrastructure as fallback
2. add a read-only trend intelligence layer
3. repurpose niches as contextual lenses
4. use Postiz as queue/calendar/publishing
5. keep content memory separate from publishing state
6. only archive the old direct publisher path after a proven migration

### Final one-line answer

**Kubera should not be rebuilt from zero; it should be partially rebuilt by replacing the intelligence layer and preserving the proven orchestration/publishing infrastructure.**

## 30. Final Table

| Workflow | Platform/function | Current status | Keep? | What should change |
|---|---|---|---|---|
| `IGL2RR8zXim5latq` | niche selection | Active | Yes, with modifications | Replace rotation with trend-aware scoring |
| `dkJw3htR8XFIYPcs` | copy generation | Active | Fallback only | Replace static library with platform-native generation |
| `5PmX2s3QnwuTNUUy` | prompt design | Active | Partial | Convert to visual brief / optional media prompt assistant |
| `Io1Uk40wthsBA3bP` | orchestration | Active | Yes | Point to new intelligence outputs |
| `dTLHw8YbdS0X8A8J` | Instagram / Facebook publishing | Active | Fallback | Keep as direct publisher fallback until Postiz is proven |
| `e8d7OsTN3I6Dals5` | video/audio generation | Active | Later / fallback | Keep only if multimedia automation remains in scope |
| `TQSNDguACZLXBr3s` | reel publishing | Active | Fallback | Retain as emergency path |
| `iHVKybe15bpPiv0w` | Threads publishing | Active | Modify | Split monitor vs publisher responsibilities |
| `fPbtcRT4Ax43Vgrj` | token refresh | Active | Later archive | Replace with cleaner auth lifecycle if Postiz takes over |
| `QA6c1DuFZLKgiuMP` | topic intake | Inactive | Yes | Reuse the topic intake pattern |
| `AHyrHxysPbE1L2ov` | brief generation | Active | Yes, with modifications | Make brief generation trend-driven |
| `uQ9eDEHokGlb22AO` | draft writing | Active | Yes, with modifications | Add platform-native variants and anti-copy checks |
| `kiIOkE6nmZbshY7j` | article orchestration | Active | Yes | Keep for Knowledge Hub, separate from social assistant |
| `Sis2MY8RWMndCHWD` | human review | Active | Yes | Reuse approval pattern |
| `VmUrT2cIK2BbDvQf` | publish layer | Active | Yes | Reuse publish boundary concept |
| `tJM5DQgFBUxWDmuN` | utility reader | Inactive | Yes | Utility only |
| `lXSftVAnYJ0p1qsS` | lead intake | Active | No change | Unrelated to social assistant |
| `rOjsIFp1p74MsuOD` | lead alert | Active | No change | Unrelated to social assistant |
| `XqFoAQmvQCNePyE4` | lead-gen prototype | Inactive | No change | Unrelated to social assistant |
