---
title: "Microsoft's Live Speech and Lip Patent: What a Patent Application Means for European Business"
slug: "microsoft-live-speech-lip-patent-application-eu-check"
description: "Microsoft's published patent application describes live speech edits with matching lips. A four-question test and the EU transparency rules that would apply."
seoTitle: "Microsoft Live Speech and Lip Patent: What It Means for Europe"
metaDescription: "Microsoft's published patent application describes live speech edits with matching lips. A four-question test and the EU transparency rules that would apply."
excerpt: "A published Microsoft patent application describes AI that changes words in live video and adjusts the speaker's lips to match. It is an application and not a product. This guide separates what is known from what is reported, and shows what EU transparency rules would ask of a company that used such a tool."
date: "2026-11-23"
publishedAt: "2026-11-23"
tags: ["AI Governance", "AI Automation", "Data Safety"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# Microsoft's Live Speech and Lip Patent: What a Patent Application Means for European Business

Every few weeks a patent filing from a large technology company reaches a managing director's inbox with a headline that sounds like a product launch. The latest describes software that listens to a live speaker, replaces chosen words, and redraws the speaker's mouth so the video matches the new audio. The forwarded message usually ends with a question: should we be worried, or should we be buying?

Neither is the right first reaction. A patent application is a legal document about what an inventor wants to protect, and it says little about what a company will build or ship. Still, this one points at a real capability that European companies already meet in a milder form, live translation and dubbing of meetings and webinars. Done well, it removes language barriers. The business question is what labelling, consent and contract work would be needed if a tool like this were used on your people and your customers.

This article uses a four-question test to read the application, compares it with what Microsoft actually ships, and sets out what the EU AI Act asks of a company that uses synthetic or altered audio and video. It is based on sources as they stood on 23 November 2026. This article is not legal advice.

## What the application is, and what we could read

The document is US patent application 2026/0341309 A1 from Microsoft Technology Licensing, titled "Near Real-Time Artificial Intelligence (AI) Enhancement of Video or Augmented Reality (AR) Presentations of Live Events". It was filed on 29 April 2025 and published on 29 October 2026.

We need to be plain about the limits of our reading. We could not open the full text of the application. The [Justia record](https://patents.justia.com/patent/20260341309) sits behind a bot check, and the patent office's own file was not available to us. What we could read is limited to indexed excerpts of the Justia record and a tracker page that quotes a fragment of claim 1. The excerpts show the title, the publication date, and parts of the description: it covers post-production enhancement of video based on script modification as well as near-real-time enhancement of live events, and it describes identifying spoken words to modify according to a first set of parameters and based on the profile of the intended audience. The tracker quotes claim 1 as "identifying, from a plurality of spoken words as scanned from the live audio recording, one or more spoken words to modify" and then truncates it. Everything else about individual claims comes from press and tracker paraphrase, and is marked as reported.

| Item | What we found | Basis |
| --- | --- | --- |
| Applicant and title | Microsoft Technology Licensing, with the title quoted above | Justia record, and consistent press reports |
| Filing and publication dates | Filed 29 April 2025, published 29 October 2026 | Justia record for publication, tracker and press reports for filing |
| Core idea | An AI agent picks spoken words in a live feed, a generative system replaces them, and video frames are changed so the lips match | Claim 1 fragment quoted by a tracker, rest reported |
| Timing | Near real time, with one to ten seconds given as an example, tied to the delay broadcasters already use to filter profanity | Reported |
| Viewer profiles | Changes could depend on a viewer's age, languages and location | Reported |
| Original recording | A dependent claim keeps the original as a ground truth record | Reported |
| Product or launch | We found no Microsoft statement about building or shipping it | Our search |

## The Application-to-Action Test

Kubera AI planning heuristic, not a universal benchmark. The test below is a way we organise a first look at a patent or a similar announcement before it reaches a budget discussion. It is not a validated method, and it does not replace advice from a patent attorney or from counsel.

| Question | What it asks | For this application |
| --- | --- | --- |
| 1 Status | Is it an application, a grant or a product | An application, published but not shown to be granted |
| 2 Scope | What do the claims cover, as opposed to what the description lists | Reported to be broad on word replacement, narrower on translation |
| 3 Neighbour | What does the same company already ship in this area | Interpreter in Teams, which translates audio |
| 4 Duty | What would EU rules require if you used the capability | Disclosure, marking and data protection steps, set out below |

The test has one rule. A patent can raise a question for your roadmap, and only a product and a contract can answer it.

## Question 1: status, United States practice

In the United States, most utility applications are published after an 18 month period that runs from the earliest filing date, and publication usually comes before any grant. The [USPTO's own guidance](https://www.uspto.gov/patents/basics/apply) says this. Filing on 29 April 2025 and publication on 29 October 2026 is exactly that interval, so the publication date reflects the routine timetable and does not signal approval or an imminent launch.

This is a point about United States practice, since the document is a United States application. A European company reading it should note that a published application gives no right to stop anyone. A grant would, within its claims and its territory, and even then it covers a described invention and not a product.

Reports on the status of this application differ. A [patent tracker](https://patentlyze.com/patent/microsoft-live-ai-video-rewrites-speech/) lists the status as examiner objections with a chance for the company to respond, and says the examiner's first review rejected the claims as filed, which it calls routine. One news summary instead says the patent office approved it. We could not read the file and cannot settle the difference. Two points follow for planning. Treat it as a published application, and treat the claim wording as a snapshot, because claims are often amended after a first rejection.

## Question 2: scope

A patent is read through its claims. The description may list many uses, and a claim may cover only some. The reports we found agree on a rough shape. A broad first claim covers scanning live audio, choosing words to change according to parameters and a viewer profile, replacing them with generative AI, and adjusting video so the speaker's mouth matches. A separate and narrower claim covers translation, where speech in a language that is not in the viewer's profile is replaced with translated words and the video is redrawn. The description is also reported to name lectures, award ceremonies, sports and live television as settings, and to mention phones, cameras and AR glasses as hardware.

Two cautions apply. First, the lists of profile attributes and settings describe what a profile or an event could include. They do not say that Microsoft collects those data or runs those events. Second, the tracker reports that claim 1 does not say viewers are told an edit happened. A patent application describes a technical method, and the absence of a labelling step in a claim does not mean a product would omit labels or that the law would allow it. The law decides that, as we set out below.

The same capability has a plain and useful reading. A speaker in one language, a viewer in another, and a system that produces translated speech with a matching face is a natural next step for multilingual training, sales calls and customer events. The patent is about the method. What a company does with the method is a separate decision.

## Question 3: the neighbour that ships today

The most reliable way to place a patent is to look at what the same company already sells. Microsoft's [Interpreter agent in Teams](https://learn.microsoft.com/en-us/microsoftteams/interpreter-agent-teams) provides real-time speech-to-speech translation in meetings. Microsoft's own pages disagree on the language count: the Learn page, updated on 18 November 2026, lists nine languages, and the [support page](https://support.microsoft.com/en-us/teams/copilot/interpreter-in-microsoft-teams-meetings-and-calls), updated on 19 November 2026, lists ten, adding Taiwanese. Both pages say participants can have Interpreter simulate their own voice, that short segments of speech are analysed in real time for that purpose, and that voice samples or biometric data are not stored. That last point is a vendor statement. The support page adds that an administrator policy governs voice simulation, with a default automated voice used when it is off.

| Aspect | Interpreter in Teams, per Microsoft's pages | The published application, as reported |
| --- | --- | --- |
| What changes | Translated audio, with optional voice simulation | Words in audio, and mouth movement in video |
| Who chooses | Participants choose voice simulation, and an administrator policy controls whether it is offered | Viewer profile and preset parameters |
| Video or lip changes | The pages do not mention lip changes | Central to the method |
| Notice to others | The support page says an indicator on the speaker's video feed shows that speech is being translated | No labelling step in claim 1, as reported |

The comparison is useful in both directions. It shows that the shipped product is narrower than the application, that live translated audio is already a normal business tool, and that Microsoft's product pages describe a visible indicator. It also shows where a buyer's questions would sit if lip adjustment were ever added: who consents to a simulated voice or a redrawn face, who controls the setting, and what the other people in the meeting are told.

## Question 4: the duty in the EU

The [EU AI Act Article 50 text](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) addresses altered media. Its transparency duties have applied since 2 August 2026, and the Digital Omnibus did not delay them. Our guide to [EU AI Act after the Omnibus](/blog/eu-ai-act-after-omnibus-2-december-2026) explains the dates and the roles. The parts that matter here are these.

Article 113 sets 2 August 2026 as the general date of application and lists the exceptions, and [Article 50 is not among them](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113). Under Article 50(4), deployers of an AI system that generates or manipulates image, audio or video content constituting a deep fake must disclose that the content has been artificially generated or manipulated. The Regulation defines a deep fake as AI-generated or manipulated image, audio or video content that resembles existing persons, objects, places, entities or events and would falsely appear to a person to be authentic or truthful. Providers of generative systems, for their part, must add machine-readable marks so that such content can be detected.

The [Commission's Guidelines on Article 50](https://ai-act-service-desk.ec.europa.eu/sites/default/files/2026-07/guidelines_on_the_implementation_of_the_transparency_obligations_for_certain_ai_systems_under_article_50_of_the_ai_act_bzptwqhk0ikg1dtlddap41psfy_131215.pdf), dated 20 July 2026, add detail. They say the assessment of whether content would falsely appear authentic is objective and does not require an intent to deceive. Their examples of deep fakes include a realistic synthetic avatar of a company CEO and voice cloning of a podcast's regular presenters. One of their non-examples is audio changes that do not alter the actual words spoken. On disclosure, the information must be clear and distinguishable, and given at the latest at first exposure. The guidelines also say each output must be covered, that disclosure only at the start may not inform people who join later, and that a machine-readable mark alone is not enough.

Now the gap. In the parts of the guidelines we read, lip-sync, audio dubbing and speech translation are not addressed, and no guidance on deep fakes in real-time settings is given. The exception for assistive functions and standard editing uses AI translation of text as an example, which is not the same thing. So the guidelines do not say whether a live translation with an adjusted face needs a label.

Our reading, which counsel should test, is as follows. A system that changes the words a real person says in audio, and redraws their mouth, produces manipulated audio and video of an existing person. Whether it would falsely appear authentic depends on context and audience expectations. A viewer who has chosen a translated stream and has been told so is differently placed from a viewer who has not. This points toward one practical rule: tell the audience, in a clear and visible way, that translation or alteration is in use, and do it for every session and not only at the start. Our guide to [AI agents and the customer relationship](/blog/ai-agents-taking-orders-from-other-agents) takes the same approach to disclosure.

Data protection is a separate layer. A voice and a face are personal data. Where a vendor processes them for you, personal data subject to GDPR calls for a controller–processor agreement (Article 28), and you should ask about retention, sub-processors and training use. Our guide to [AI data safety for European businesses](/blog/ai-data-safety-european-businesses) gives a longer list.

## What a business can do now

None of this requires waiting for a product. A short written policy for live translation, dubbing and voice or face tools protects a company whether or not this patent ever becomes software.

| Step | What to put in the policy |
| --- | --- |
| Inventory | List any tool that translates, dubs, clones a voice or changes video in meetings, webinars or customer events |
| Disclose | Show a clear label to the audience whenever speech or video is synthetic or altered, in every session |
| Consent | Obtain the speaker's agreement before a simulated voice or an adjusted face is used, and record it |
| Keep the original | Retain the unaltered recording where the law and your policy allow, so a dispute can be checked |
| Contract | Ask the vendor for the processing agreement and for its answer on training use and retention |
| Review | Revisit the policy when a tool adds video or lip features, since the duties may change |

Our guide to [shadow AI in European businesses](/blog/shadow-ai-business-risk-europe) explains why the inventory comes first: staff often switch these features on before anyone has approved them. For a staged implementation, see [how to build an AI roadmap](/blog/how-to-build-an-ai-roadmap), and for a review checkpoint see [human-in-the-loop design](/blog/ai-agent-autonomy-human-in-the-loop). If the rollout needs outside implementation help, Kubera's [AI automation services](/services) provide the relevant starting point.

## Illustrative scenario, not a specific Kubera client

Illustrative scenario, not a specific Kubera client. We describe the design intent here, not a measured result.

A European training company runs paid webinars for customers in several countries and is offered a tool that dubs the presenter into six languages with matching lip movement. The head of operations reads about Microsoft's application and asks for a decision rule, not a prediction about Microsoft.

The design intent has four parts. The vendor receives the same written questions about processing terms, retention, training use and marking of outputs. The company decides in advance that every dubbed stream carries a visible label for the whole session and that the presenter gives written consent to a simulated voice and an adjusted face. The original recording is kept under the company's retention rule. A pilot runs on one webinar series with audience feedback collected, and the decision to expand waits for the vendor's written answers and for review by counsel. The patent plays no part in the decision, except as a reminder to ask about lip and face changes before they arrive. The company also compares the operational cost of the pilot using its own [AI automation cost model](/blog/how-much-does-ai-automation-cost), rather than treating the patent story as a business case.

## What remains unverified

| Open point | Why it is open |
| --- | --- |
| The full claim wording of the application | We could not open the claims, saw one quoted fragment of claim 1, and rely on reports for the rest |
| The status of the application | A tracker reports objections and a first rejection, one news summary says approval, and we could not read the file |
| Microsoft's plans | We found no statement from the company |
| How Article 50 applies to live translation with lip adjustment | The Commission's guidelines, in the parts we read, do not address it |
| Voice handling in Interpreter | Microsoft's statement that voice samples are not stored is a vendor statement, and its pages differ on the language count |

## Frequently asked questions

### What does Microsoft's patent application describe?

According to reports, it describes AI that picks words in a live audio feed, replaces them with generative AI and changes video frames so the speaker's lips match, in near real time. The document is a published application, with the number US 2026/0341309 A1.

### Is it a granted patent or a product?

It is a published application. We found no grant record, and reports on its status conflict. We found no Microsoft statement about building or shipping it, so it is not a product.

### Why was it published now?

The USPTO publishes most applications after 18 months from the earliest filing date. Filing on 29 April 2025 and publication on 29 October 2026 matches that interval.

### Does Microsoft sell something like this today?

Interpreter in Teams translates speech in meetings and can simulate a participant's voice, according to Microsoft's documentation. The pages we read do not mention lip changes, and the support page describes an indicator on the speaker's video feed.

### Would the EU AI Act require a label?

Article 50 requires deployers to disclose deep fakes, meaning manipulated audio or video that resembles real people and would falsely appear authentic. The Commission's guidelines do not address live translation with lip adjustment in the parts we read. A clear label in every session is a sound default, and counsel should confirm.

### Is machine translation of speech a deep fake?

The sources we read do not say. The guidelines treat AI translation of text as an example of content that does not need marking, which is a different case. Change of the actual words spoken, together with a redrawn face, is closer to the deep fake examples than audio alone.

### Do we need the speaker's consent?

The Article 50 duty is about disclosure to the audience. Consent for voice and face use is a separate matter under data protection and image rights, and a written consent from the speaker is a prudent step. This article is not legal advice.

### Does GDPR apply to voice and face?

A voice and a face are personal data. If a vendor processes them for you, personal data subject to GDPR calls for a controller–processor agreement (Article 28) and a check of retention, sub-processors and training use.

### How should a company watch patent news?

Use the four questions: status, scope, the shipped neighbour and the duty. A patent can prompt a policy review. A product and a contract are what drive a purchase.

### Should we stop using live translation tools?

No. Live translation is a useful tool for multilingual work. Inventory what is in use, label it clearly, record consent and review the vendor's terms.

## Sources

Read between 18 and 23 November 2026. The full text of the application could not be opened. Patent claim details come from the tracker and press reports listed last.

- [Justia, record of application 20260341309](https://patents.justia.com/patent/20260341309) (indexed excerpts only)
- [European Commission, AI Act Service Desk, Article 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)
- [European Commission, AI Act Service Desk, Article 113](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113)
- [Regulation EU 2024/1689, consolidated text, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng)
- [European Commission, Guidelines on Article 50 of the AI Act, C(2026) 5054](https://ai-act-service-desk.ec.europa.eu/sites/default/files/2026-07/guidelines_on_the_implementation_of_the_transparency_obligations_for_certain_ai_systems_under_article_50_of_the_ai_act_bzptwqhk0ikg1dtlddap41psfy_131215.pdf), 20 July 2026
- [European Commission, page on the transparency guidelines](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations)
- [USPTO, Applying for Patents](https://www.uspto.gov/patents/basics/apply), on publication after 18 months
- [Microsoft Learn, Manage Interpreter agent for your organization](https://learn.microsoft.com/en-us/microsoftteams/interpreter-agent-teams)
- [Microsoft Support, Interpreter in Microsoft Teams meetings and calls](https://support.microsoft.com/en-us/teams/copilot/interpreter-in-microsoft-teams-meetings-and-calls)
- [Patentlyze, tracker page quoting claim 1 and status](https://patentlyze.com/patent/microsoft-live-ai-video-rewrites-speech/)
- Press reports on the claims: [TweakTown](https://www.tweaktown.com/news/114554/microsoft-ai-patent-rewrites-what-people-say-on-livestreams-then-redraws-their-lips-to-match/index.html), [IBTimes](https://ibtimes.co.uk/microsoft-ai-patent-rewrite-live-speech-1830381), [Gadget Review](https://www.gadgetreview.com/microsoft-files-patent-application-for-ai-that-could-rewrite-live-speech-and-resync-a-speakers-lips)
- Press reports on status: [AI Weekly](https://aiweekly.co/alerts/microsoft-patents-real-time-ai-that-rewrites-speakers-words), [Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/30565/microsoft-patent-ai-rewrites-live-speech)

[Discuss your automation project →](/contacts)
