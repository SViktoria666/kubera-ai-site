---
title: "EU AI Act After the Omnibus: What Applies on 2 December 2026 and What Does Not"
slug: "eu-ai-act-after-omnibus-2-december-2026"
description: "Many companies read the Digital Omnibus as a general delay of the AI Act. It was not. This guide sorts the dates into what is already in force, what lands on 2 December 2026, and what moved to 2027 and 2028, with a label check you can run on your own content and agents."
seoTitle: "EU AI Act After the Omnibus: What Applies on 2 December 2026"
metaDescription: "The Digital Omnibus delayed high-risk rules, not Article 50. What applies now, what changes on 2 December 2026, and a practical label check for business content and AI agents."
date: "2026-11-09"
publishedAt: "2026-11-09"
tags: ["EU AI Act", "AI governance", "GDPR", "AI compliance", "AI automation"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# EU AI Act After the Omnibus: What Applies on 2 December 2026 and What Does Not

Short answer. Regulation (EU) 2026/1744, the Digital Omnibus on AI, delayed the rules for high-risk AI systems to 2 December 2027 and 2 August 2028. It did not delay the transparency duties of Article 50, which apply since 2 August 2026. On 2 December 2026 two things happen: providers of generative systems that were already on the market before 2 August must have machine-readable marking in place, and two new prohibitions start to apply. For most mid-size businesses the practical work is not the marking date but the duties that already apply to them as deployers: telling people when they talk to an AI agent, and labelling deepfakes and certain published text. This article sorts the dates, explains who is affected, and gives a four-question label check. It is general information, not legal advice.

The Omnibus gave European businesses something useful: more time for the heaviest part of the AI Act. The part that remains for ordinary companies is smaller and more concrete than the headlines suggest. Most of it comes down to knowing which of your AI uses touch customers or the public, and putting a visible label or a short disclosure in the right place.

## The dates, sorted

The Omnibus entered into force on 27 July 2026, after publication in the Official Journal on 24 July. The table below separates what already applies from what is coming.

| Date | What applies | Who |
|---|---|---|
| 2 February 2025 | Prohibited practices and the AI literacy duty | All operators |
| 2 August 2025 | Obligations for general-purpose AI models | Model providers |
| 2 August 2026 | Article 50 transparency duties, plus enforcement powers of the Commission and national authorities | Providers and deployers |
| 2 December 2026 | Machine-readable marking for generative systems placed on the market before 2 August 2026 | Providers of those systems |
| 2 December 2026 | Two new prohibitions: AI that generates child sexual abuse material and non-consensual intimate imagery | Providers and deployers |
| 2 December 2027 | High-risk rules for stand-alone Annex III systems, such as recruitment and credit | Providers and deployers |
| 2 August 2028 | High-risk rules for AI that is a safety component of products under Annex I | Providers and deployers |

Where these dates come from. The act is [Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj) of 8 July 2026, published in the Official Journal as OJ L, 2026/1744 on 24 July 2026 (CELEX 32026R1744, ELI reg/2026/1744). Its Article 4 sets entry into force on the third day after publication, 27 July 2026. The application dates sit in the amended Article 113 of the AI Act. I checked the Official Journal text directly for this article; confirm your own position with a qualified adviser before relying on a date for a particular system.

## What the 2 December date is not

The 2 December date is a transition rule for one duty and one group. Three misreadings are common.

- Not a delay for Article 50 in general. Chatbot disclosure, deepfake labelling and the labelling of public-interest text apply from 2 August 2026 without a general grace period. The limited transition to 2 December concerns marking and detection for generative systems placed on the market before 2 August.
- Not a date for deployers. The marking duty sits with providers of generative systems. Deployers are the companies that use those systems under their own authority.
- Not a date for new systems. A generative system placed on the market on or after 2 August 2026 had to comply from that day.

## Provider or deployer: the question that decides your duties

The [European Commission's Article 50 transparency guidance](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations) uses two roles. A provider develops an AI system and places it on the market under its own name. A deployer uses a system under its own authority, unless the use is purely personal. One organisation can hold both roles. A law firm's published analysis of the Guidelines gives the example of a company that builds an in-house generative tool and uses it to produce deepfakes, which “wears both hats”.

For a typical mid-size business there are three situations.

- You use off-the-shelf tools for text, images or support replies. You are a deployer.
- You build an agent or chatbot for your own use on top of a vendor's model. You may be a provider of that system as well as its deployer. The Commission guidance does not settle every third-party-model arrangement, so take advice if you are in this position.
- You build systems for clients, as an agency or integrator does. Whether you or the client is the provider depends on whose name the system carries and who places it on the market. Settle this in the contract, in writing.

The duties are cumulative, not alternative. One example in the commentary: an image generator embedded in a chatbot makes the provider subject to the chatbot and marking duties, and if a deployer uses it to create a deepfake, the deployer's labelling duty applies on top.

## What Article 50 asks, by situation

| Situation | Duty | Who carries it |
|---|---|---|
| People talk directly to an AI system, such as a chatbot or voice agent | Tell them it is AI, at the latest at the first interaction | Provider, designed into the system |
| An AI agent acts for a person, for example writes to a supplier | Disclose that it is an agent and name the person on whose behalf it acts | Provider, with the deployer configuring it |
| Image, audio or video that is a deepfake | Clear visible label at first exposure | Deployer |
| Text published to inform the public on matters of public interest | Label it, unless genuine human review and editorial responsibility exist | Deployer |
| Emotion recognition or biometric categorisation is used on people | Inform the people exposed | Deployer |
| Synthetic output of generative systems | Machine-readable marking and available detection | Provider |

The table is built from the [official Commission guidance and FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act). Three points from that commentary matter in practice.

### Chatbots and agents

Burying the disclosure in terms and conditions is not enough, and a generic word such as “assistant” does not do the job alone. The Guidelines read agents broadly: an agent should disclose that it is artificial and for whom it acts. One firm notes the Guidelines suggest re-disclosing at key steps such as authorisation, reporting and validation. The exception for cases where it is obvious that you are dealing with a machine is read narrowly. A professional-only internal helpdesk assistant may qualify, but a public-facing helpdesk chatbot generally will not. See [AI agent autonomy and human-in-the-loop](/blog/ai-agent-autonomy-human-in-the-loop) for how to set the approval points where such disclosures belong.

### Deepfakes

The Guidelines split the legal definition into four cumulative criteria: appreciable resemblance to a subject, a subject that exists or could plausibly exist, one of the listed categories of persons, objects, places or events, and the capacity to appear falsely authentic to the reasonably foreseeable audience. Fantastical content falls outside. Commentary gives these examples inside the duty: fully AI-generated actors, digital replicas, and composite images that change how a person appears, such as altering body shape or skin colour. One suggested label is “Image created with AI” in the caption. Machine-readable marks alone do not satisfy the deployer's duty, because people must be able to see the label without technical tools. A lighter regime applies to evidently artistic, creative, satirical or fictional works.

### Text on matters of public interest

The text duty is narrower than many people assume. It covers AI-generated or manipulated text published to inform the public on matters of public interest. The Guidelines describe that broadly: politics, public administration, justice, public health, consumer safety and cultural, financial or scientific developments open to public debate. Commentary says routine marketing copy drafted with AI help is generally not that. It says investor information and sustainability reports on a company website can be, and need a label unless the exception applies.

The exception needs both genuine human review and a person or entity with editorial responsibility. The Guidelines set the bar for review at substantive examination, including fact-checking. Superficial, formal or automated checks do not qualify. Substantive AI editing after sign-off removes the exception, and the responsible person or entity must be publicly identifiable. The relevant date for text is the date of publication, so text generated earlier but published after 2 August is covered. Advice prepared for a single client is not published, so it falls outside the text duty, according to one firm's reading.

Standard editing such as grammar correction and translation is outside the marking scope. AI summaries and paraphrasing that change meaning, style or structure must be marked.

## The Kubera Label Decision Path

This is a planning tool from our own practice, not an official test. Run it for each AI-assisted output your business produces or sends.

1. Does a person talk to the AI, or does the AI act for a person? If yes, the disclosure duty is in play. Check that the first interaction names it as AI, and that agents say for whom they act.
2. Does the output look like a real person, place, object or event, in image, audio or video? If yes, treat it as a possible deepfake and put a visible label on it at first exposure.
3. Is it published text meant to inform the public on a public-interest matter? If yes, either label it or document the exception.
4. If you rely on the exception, can you show it? Name the editor, record what was checked and keep a rule that nobody edits with AI after sign-off.

If all four answers are no, as with an internal draft or a one-client advisory note, Article 50 is unlikely to require a label, but other law such as GDPR and consumer rules still applies.

## What to ask your AI vendors before 2 December

Providers of generative systems carry the marking duty, and the Guidelines say marking without available detection will not achieve compliance. Providers may rely on an upstream model provider's marking solution, but the system provider stays responsible for showing compliance. If you build on someone else's model, your contract should cover:

- written confirmation that outputs are marked and that the mark persists;
- access to detection for the people who need it;
- a promise not to remove marks or labels, and a restriction on you removing them;
- evidence, for example from the vendor's Code of Practice signature or technical documentation.

The Commission and the AI Board describe the voluntary [Code of Practice on Transparency of AI-Generated Content](https://digital-strategy.ec.europa.eu/en/library/commission-opinion-assessment-code-practice-transparency-ai-generated-content) as an adequate means of showing compliance. Signing is not required, and adherence is not conclusive proof of compliance, but it is a reasonable question to ask a vendor whether they have signed.

Only final outputs need marking in the closed-workflow examples described by the Commission. Source code, short outputs such as captions, purely machine-to-machine communication and intermediate outputs in closed workflows are outside the marking duty unless they become a final output exposed to people. That matters for agent pipelines. Messages that agents pass to each other inside your workflow are generally not what the marking duty is about, though what reaches the customer is.

## The prohibitions that start on 2 December

The two new prohibitions cover AI systems that generate or manipulate realistic images, videos, audio or similar material of an identifiable natural person's intimate parts or sexually explicit activities without that person's explicit consent, and systems that generate or manipulate material or performance within the meaning of Directive 2011/93/EU, subject to the statutory exception in national law. The Omnibus limits the system prohibition to systems intended for that outcome or whose design makes it reasonably foreseeable and reproducible without significant modification and without adequate safeguards; use is prohibited when the deployer uses the system for that purpose. For an ordinary business the practical effect is small: do not offer such tools and check that no image tool you license is marketed this way. Fine levels were not changed by the Omnibus as far as the official amendments show. They come from Article 99 of the original AI Act: up to €35 million or 7 percent of worldwide annual turnover for prohibited practices, and up to €15 million or 3 percent for most other operator obligations, which includes Article 50. For SMEs the lower of the two figures applies, and the Omnibus adds a similar cap for small mid-caps in new Article 99(6a). Enforcement of fines is national, so check the rules in your country.

## AI literacy: softened, still applying

Article 4 was rewritten. Providers and deployers no longer have to guarantee a sufficient level of AI literacy for every individual. They must take measures to support its development among staff and others who operate AI systems on their behalf. The amended text does not require guaranteeing any specific level of knowledge for any individual. A short, recorded training and an internal rule on which tools are allowed is a reasonable response. For the staff side, see [shadow AI risk in Europe](/blog/shadow-ai-business-risk-europe).

## Using the extra year for high-risk systems

The Annex III date moved from 2 August 2026 to 2 December 2027. That covers areas such as recruitment, education and credit. A hiring tool used by a firm can fall under the employment category. The delay does not suspend the duties already in force. The sensible use of the year is an inventory: list every AI system, mark which affect people's access to jobs, credit or services, and decide which vendor contracts need renegotiating. Doing this now is cheaper than doing it in autumn 2027.

## Illustrative scenario

A 40-person online retailer in Spain, with all details invented for illustration. The team uses AI in five ways.

| AI use | Who sees it | Label check result |
|---|---|---|
| Support chatbot on the website | Customers | Disclose AI at first message. Public-facing, so the obviousness exception is unlikely to apply |
| Product photos with an AI-generated model wearing the clothes | Public on website and social media | Treat as a deepfake. Add a visible label such as “Image created with AI” |
| Weekly newsletter with AI-drafted copy on new products | Subscribers | Routine marketing copy, generally outside the text duty. Keep human editing anyway |
| Sustainability report text drafted with AI, published on the website | Public and investors | Possible public-interest text. Label, or document genuine review by a named, identifiable editor |
| Internal summary of supplier emails | Staff only | No Article 50 label. Check data protection instead |

The work for this company is two labels, one disclosure line, one documented review process and one vendor letter. That is a week of effort for a small team, and it is better started now than on 1 December.

## A three-week plan to 2 December

- By 15 November. List every AI use and run the label path on each. Mark which ones face customers or the public.
- By 22 November. Send the vendor questions. Ask each provider about marking, detection and the Code of Practice.
- By 29 November. Add the labels and disclosures. Write the editorial rule for any published text you rely on.
- Before 2 December. Test as a customer would: see the disclosure at first message, see the label on an image without any tool.
- After 2 December. Keep the inventory current. Review it when you change a model, since a new model can change what the output looks like and how it is marked.

For wider guidance on safe handling of data in these tools, see [AI data safety for European businesses](/blog/ai-data-safety-european-businesses). If you are adding agents to your workflows, [what agentic AI is](/blog/what-is-agentic-ai) explains the building blocks. If those agents will act for customers, [the Agent Door Policy](/blog/customers-ai-agents-identity-permissions-liability) maps identity to permissions and confirmation.

For a broader implementation readiness check, see [AI automation readiness](/blog/ai-automation-readiness), and use [how to measure the ROI of AI automation](/blog/how-to-measure-roi-ai-automation) when you turn the review into a documented business case.

## Frequently asked questions

### Did the Digital Omnibus delay the whole AI Act?

No. It delayed the high-risk rules to 2 December 2027 for stand-alone Annex III systems and 2 August 2028 for product safety components. Prohibited practices, AI literacy and the Article 50 transparency duties were not delayed.

### What happens on 2 December 2026?

Providers of generative AI systems placed on the market before 2 August 2026 must have machine-readable marking and detection in place. Two new prohibitions also apply, on AI systems used or offered for the prohibited intimate-material and Directive 2011/93/EU material outcomes described above.

### Does my company have to mark AI-generated content in a machine-readable way?

Only if you are a provider of a generative AI system. Companies that use someone else's tool are deployers, who have visible labelling and disclosure duties instead. If you build a tool, check which role you hold.

### Do I have to label every AI-assisted text?

No. The text duty covers AI-generated or manipulated text published to inform the public on matters of public interest, and it falls away with genuine human review and identifiable editorial responsibility. Routine marketing copy is generally not covered, according to commentary on the Guidelines.

### Do we need to tell customers that our chatbot is AI?

Yes, at the latest at the first interaction, and not only in the terms and conditions. The exception for obvious cases is read narrowly, and a public-facing support chatbot generally will not qualify.

### What about AI agents that write to suppliers for us?

The Guidelines take a broad reading: an agent should disclose that it is artificial and the person on whose behalf it acts. Plan the disclosure into the first message and the key steps.

### Does an AI-generated product image need a label?

If it appears as a realistic person, place or event and could look genuine to the audience, treat it as a possible deepfake and label it visibly. A fantastical image falls outside the definition. Check with counsel for borderline cases.

### Is AI literacy training still required?

Article 4 still applies. Since the Omnibus it asks providers and deployers to take measures to support AI literacy, without guaranteeing a specific level for any person.

### What are the penalties?

Under Article 99 of the AI Act, up to €35 million or 7 percent of worldwide turnover for prohibited practices and up to €15 million or 3 percent for most other obligations, including Article 50. For SMEs the lower figure applies, and the Omnibus adds a similar cap for small mid-caps. Check national enforcement rules for your country.

### Where should a mid-size company start?

With an inventory of AI uses and the four-question label path. Then ask vendors about marking and detection and fix the labels that face customers.

## Sources

- [Regulation (EU) 2026/1744, Digital Omnibus on AI, EUR-Lex, CELEX 32026R1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)
- [Regulation (EU) 2024/1689, Artificial Intelligence Act, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [European Commission, Guidelines on transparency obligations under Article 50](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations)
- [European Commission, FAQ on transparency obligations under Article 50](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
- [European Commission opinion on the Code of Practice for transparency of AI-generated content](https://digital-strategy.ec.europa.eu/en/library/commission-opinion-assessment-code-practice-transparency-ai-generated-content)
- Digital Omnibus on AI: new deadlines and key amendments, Cobalt
- Commission publishes guidelines on transparency obligations, press release, 20 July 2026
- AI Transparency: Guidelines on Article 50, Part 2, deployer obligations, McCann FitzGerald
- AI Act Article 4: what the Digital Omnibus changes for AI literacy, Trainyng

[Discuss your automation project →](/contacts)
