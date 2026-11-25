---
title: "Hermes Mobile App: A Security Check Before Your Phone Controls an Agent"
slug: "hermes-mobile-app-business-security-check"
description: "Hermes Mobile is in beta with no release date. What Nous Research has published, and a four-question security check before a phone controls an agent."
seoTitle: "Hermes Mobile App: A Security Check for Business Teams"
metaDescription: "Hermes Mobile is in beta with no release date. What Nous Research has published, and a four-question security check before a phone controls an agent."
excerpt: "The Hermes Mobile app is in beta, and on 25 November 2026 the official page is still a waitlist with no release date. The phone is a remote control for an agent that holds files and credentials. A four-question security check for European business teams."
date: "2026-11-25"
publishedAt: "2026-11-25"
tags: ["AI agents", "AI security", "AI governance", "data safety"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# Hermes Mobile App: A Security Check Before Your Phone Controls an Agent

The first useful thing a business agent does is run while nobody is at a desk. It drafts the weekly report overnight, watches an inbox, prepares a pull request. The second thing the team wants is to check on it from a phone, approve a step, and give the next instruction while travelling. That is the promise of Hermes Mobile, the phone app for Hermes Agent, the open-source agent from Nous Research.

On 25 November 2026 the app is in a closed beta, and Nous has not stated when a wider release will come. This article covers what is published, what is only reported, and the part that matters more than the date: a phone app is a remote control for a computer that holds your files, keys and logins. It rests on Nous Research's own pages as read on 25 November 2026, and reports from other sites are marked as reported. This article is not legal advice.

## What is published and what is reported

The official Hermes Mobile page is a beta waitlist. It carries the title "Hermes Mobile Beta Waitlist" and a line asking visitors to select their platform. It does not state a release date, store availability, pricing, features, privacy terms or how the app connects. Nous's post of 3 November says the team released the beta at its NousCon event, that it filled up quickly, that the team is working to free up more room and to get the app production ready for wider release, and it points to the waitlist.

| Item | What we found | Basis |
| --- | --- | --- |
| Official beta | An iOS and Android beta opened around the NousCon event at the end of October 2026 | Nous post of 3 November and the official page |
| Distribution | TestFlight for iOS and Firebase App Distribution for Android | Reported by press, and by users in the project's issue tracker |
| Capacity | Nous says the beta filled up quickly, press reports within about a day, and users reported full or broken invite links | Nous post of 3 November, press, and issues in the project repository |
| Release date | Not stated by Nous | Official page and post |
| Reports of a late November release or more seats before Christmas | Attributed to a Nous team member by aggregators, and we could not open the source post | Reported, unconfirmed |
| App features | Chat, tool approvals, management of bots and routines, a voice mode, SSH access | Reported from testers and press, with no official feature page |
| Fake apps | Nous warned that lookalike apps use Hermes branding | Reported, and we could not open the post |

If someone on your team is offered a Hermes app in a store or through an unfamiliar link, treat it as unverified. The official route today is the waitlist page.

## What the documentation confirms, and what is only reported

The phone app is not the agent. Hermes Agent runs on a machine, whether a laptop, a server or a hosted container, and clients connect to it. Nous's documentation describes four kinds of connection from its desktop client, and the same logic applies to any phone client.

| Path | What it is | Sign-in as documented |
| --- | --- | --- |
| Hermes Cloud | A hosted instance that Nous runs for you, included with paid Nous Portal plans | Portal sign-in |
| Remote gateway | Your own Hermes gateway reached over the network | Session token or OAuth |
| SSH | A Hermes install reached over SSH | SSH key |
| Local | The agent on the same machine | Automatic |

The two tables below keep apart what Nous documents for the browser Webapp and what is only reported about the native app.

### Browser Webapp, documented by Nous

| Detail | What it is |
| --- | --- |
| A workspace that the gateway serves to a normal browser, with sessions, profiles, scheduled jobs, the host file tree, Git review, previews and a terminal rail | A workspace that the gateway serves to a normal browser, with sessions, profiles, scheduled jobs, the host file tree, Git review, previews and a terminal rail |
| Default state | Off. An administrator turns it on in the configuration and restarts the gateway |
| Remote access | Binding to a non-local address engages a sign-in gate. Username and password are described for a trusted network or VPN, and OAuth or OIDC for internet-facing use |
| Sign-in link | A one-use link that works within sixty seconds and signs a browser in as you until used |
| Reach | A signed-in user can run arbitrary commands as the operating system account running Hermes and can reach that account's environment and credentials |
| Phone access | Reachable from a phone through a Web Access setting, behind sign-in with a Nous account. Only the native app can turn that setting on |

### Native mobile app, reported and not documented

| Source of the report | Chat with the agent, approval of tool calls, management of bots and routines |
| --- | --- |
| Press reports on the beta | A voice mode and a terminal over SSH or Mosh |
| Testers and an independent guide, with the guide noting its team did not test the app | Connection to Nous Cloud or to a self-hosted gateway |
| Press reports and testers | Pairing, authentication, data stored on the phone, revocation |
| No official documentation found | No official documentation found |

The documentation mentions the native app in one place only: it says the Web Access setting can be turned on by the native app. Everything else about the app comes from testers and press. A policy for a business should be written against the Webapp and gateway documentation, which exist, and revised when Nous documents the app.

The sentence that matters most for a business is the one about reach. The agent's reach is the reach of the account it runs under, and a phone that is signed in to it carries the same reach in a pocket.

## The Phone-to-Host Control Check

Kubera AI planning heuristic, not a universal benchmark. The check below is a way we organise questions before a mobile client is connected to an agent that touches company systems. It is not a validated method, and it does not replace a security review or advice from counsel.

| Question | What it asks | What the documents say |
| --- | --- | --- |
| 1 Host | Where does the agent run, and whose account is it | Local machine, your server, or a Hermes Cloud container |
| 2 Path | How does the phone reach it | Portal sign-in, OAuth, session token, SSH, or a VPN |
| 3 Reach | What can a signed-in session do | Run commands with the host account's access, per the Webapp warning |
| 4 Exit | What happens when the phone is lost or the beta ends | Sign-out and token revocation, and an unconfirmed release path |

### Question 1: host

The host decides which data the agent can see. A Hermes Cloud agent runs in its own container, which Nous describes as hosted around the clock, and its files, memory and settings persist with it. A self-hosted agent runs where you put it. Nous's materials describe execution backends including local, Docker, SSH, Singularity and Modal, with container hardening and namespace isolation.

A dedicated host with a narrow account is a sensible default: a separate operating system user, a container, and only the folders the task needs. The more company data sits on the host, the more a phone sign-in can reach.

### Question 2: path

The documentation is direct about remote access. Binding the Webapp to an address other than the local machine engages a sign-in gate. A username and password are described as suitable for a trusted local network or VPN, and OAuth or OIDC for anything facing the internet. Nous's guidance is to prefer an SSH tunnel, Tailscale or another trusted VPN, to keep the loopback address when a reverse proxy or tunnel runs on the same machine, and not to forward the port directly from a router. HTTPS is strongly recommended for remote use. The one-use sign-in link works once within sixty seconds and signs a browser in as you until it is used, so it should be kept private.

None of this describes the native app's own pairing, because Nous has not published documentation for it. An independent guide, Hermes Atlas, says it found no complete native setup documentation. Treat any step-by-step guide to the native app as unverified.

### Question 3: reach

An approval screen on a phone is a control only for the actions the agent asks about. The [human-in-the-loop AI agent design guide](/blog/ai-agent-autonomy-human-in-the-loop) explains why that boundary should be set by action, not by the convenience of the device. Nous's repository lists command approval, direct message pairing and container isolation among its security features. Its messaging documentation recommends restricting each chat platform to named users and distinguishes administrators from regular users.

A short list turns that into practice.

| Control | Practice |
| --- | --- |
| Named users | List the people who may send instructions on each channel, and no one else |
| Approvals | Require a human approval for external writes, deletions and payments |
| Separate accounts | Run the agent under its own user, with its own keys and a spending limit |
| Scoped folders | Mount only the directories the task needs |
| Logs | Keep the gateway logs and review them, since secrets in them are redacted according to the documentation |

Our guide to [AI agents and the customer relationship](/blog/customers-ai-agents-identity-permissions-liability) explains why identity and permissions come before autonomy.

### Question 4: exit

Decide in advance what happens when a phone is lost. The documentation describes a command that signs out every open tab of the Webapp, and says that starting the web dashboard with a new password ends every earlier sign-in, but we found no official procedure for revoking a native app. Keep a written drill: sign out the sessions, rotate the keys on the host, and review the logs for the period. A backup archive made with the agent's backup command contains the whole home directory, including keys and logins, and the documentation says to keep it private.

The second exit is the product's own status. The app is a beta with no stated release date, so keep the gateway and browser access as a fallback and do not promise clients a date that Nous has not given. If an automation outage occurs, the [AI automation outage recovery plan](/blog/ai-automation-outage-recovery-plan) gives the first-hour questions to ask.

## Data and contracts for European teams

An agent that handles client files, email or calendars handles personal data. Who stands in which role depends on the configuration you choose and on the contract you sign, so we set out the configurations first.

| Configuration | Who handles personal data | What to settle |
| --- | --- | --- |
| Self-hosted agent with a third-party model provider | You host, and the model provider receives the prompts | The provider's terms and your agreement with it |
| Self-hosted agent with Nous Portal inference | Nous receives the inference payloads you route through the Portal | The Privacy Mode setting, the portal terms and retention |
| Hermes Cloud agent | Nous hosts the instance that stores files, memory and conversations | The data processing section, sub-processors, location and deletion |
| Native phone app | Not documented | What the app sends to Nous or to others |

For a self-hosted agent, Nous's documentation says conversations, memory and skills are stored locally in the Hermes home directory, that the agent collects no telemetry by default, and that model requests go to the provider you choose. The privacy question then moves to that provider. Our guide to [AI data safety for European businesses](/blog/ai-data-safety-european-businesses) has the checklist.

For Nous Portal and Hermes Cloud, whether Nous acts as a processor depends on the setup and on the contract, and we do not draw that conclusion for you. This is what the documents say as of 25 November 2026.

| Document | What it states | What it leaves out |
| --- | --- | --- |
| Portal terms, section 9, updated 10 November 2026 | You instruct Nous to process data, you are the controller, Nous commits to confidentiality, audits, deletion or return of data, and you authorise sub-processors that Nous identifies on request | Types of personal data, help with data subject requests and international transfers. Security is handled in another section, and the terms are governed by California law |
| Privacy policy, updated 28 September 2026 | A Privacy Mode in which inference payloads are not stored or used for training, except as needed for security, integrity and operation, and which may apply only going forward | Retention periods, locations, EU or GDPR statements and any statement of controller or processor roles |
| Hermes Cloud page | Hosted instance in its own container, with data persisting while stopped, and data centre locations including Frankfurt and Paris | Whether you choose the region, since two passages disagree. Also deletion on cancellation, certifications and any data residency commitment |

The terms address processing but omit points a European buyer normally checks. We have not assessed whether the terms meet the content required of a controller–processor agreement (Article 28). For personal data subject to GDPR, ask Nous in writing for its sub-processor list, the data location for your Hermes Cloud agent, transfer arrangements and deletion terms, and have counsel review the answers. The article on [AI data safety for European businesses](/blog/ai-data-safety-european-businesses) covers the checklist in more depth.

Hermes Agent itself uses the MIT licence, according to the official site and repository. Our [licence check for AI agents](/blog/is-it-really-open-source-ai-agent-licence-check) explains what that does and does not cover, and the native phone app's licence has not been stated. Staff who install agent apps on their own phones raise the [shadow AI question](/blog/shadow-ai-business-risk-europe), which we cover in shadow AI in European businesses.

## From the check to a project

The four questions are most useful when they become written deliverables. When we scope an agent project for a business, we use the Phone-to-Host Control Check as a planning heuristic and turn it into four documents:

| Question | Deliverable in the project scope |
| --- | --- |
| Host | A map of where the agent runs, under which account, with which folders mounted |
| Path | A description of how each device reaches the agent, and which sign-in and network controls apply |
| Reach | A permission matrix listing what the agent may read and change, and which actions need a human approval |
| Exit | A written drill for a lost device, a revoked key and a change of vendor terms |

Kubera AI [builds AI workflow automations and multi-agent systems for businesses across Europe](/services), and the scope of such a project can be agreed in writing, so the documents above are the first thing the client receives.

## A test design for a consulting firm

Illustrative scenario, not a specific Kubera client. We describe the design intent here, not a measured result.

A fifteen-person European consulting firm wants an agent to prepare client briefings overnight and two partners to approve outgoing emails from their phones. The managing partner decides that the phone is a convenience and the host is the control.

The design intent has four parts. The agent runs in a container on a firm server under its own user, with only the briefing folders mounted and an allowlist of the two partners. The phone reaches it through a VPN and the browser Webapp until the native app has published documentation. Outgoing email and file deletion require approval, and the two-week test uses public and synthetic material until the processing terms are read. A loss drill is written down and rehearsed once: sign out, rotate keys, read logs.

## What remains unverified

| Open point | Why it is open |
| --- | --- |
| Release date of Hermes Mobile | Nous has not stated one, and the late November reports are unconfirmed |
| How the native app pairs and authenticates | No official documentation was found |
| Features of the native app | Known only from testers and press |
| Data stored on the phone and any telemetry from the app | No official statement was found |
| Region choice and data residency for Hermes Cloud | The page lists locations but two passages disagree on whether you choose, and no residency commitment was found |
| Sub-processor list | Nous identifies sub-processors on request, and we did not request it |
| Whether the portal data processing section meets Article 28 | We did not assess it, and it omits several usual points |
| Licence of the mobile app | Not stated |

## Frequently asked questions

### Is there an official Hermes Mobile app?

There is an official beta, announced by Nous Research around its NousCon event. As of 25 November 2026 the official page is a waitlist, and the app is not described as generally available.

### When will Hermes Mobile be released?

Nous has not stated a date. Reports of a late November release and extra beta seats before Christmas come from aggregators attributing them to a Nous team member, and we could not open the source post.

### How do I join the beta?

Use the official waitlist page at Nous Research. Distribution has used TestFlight for iOS and Firebase App Distribution for Android, and users have reported full and broken links. Do not install lookalike apps from stores.

### Does the app run the agent on my phone?

The documentation describes the agent running on a host, which can be your machine, your server or a Hermes Cloud container, with clients connecting to it. We found no statement that it runs on the phone.

### What can a signed-in session do?

According to Nous's documentation for the browser workspace, a signed-in user can run arbitrary commands as the operating system account running Hermes and can reach that account's environment and credentials. Plan permissions accordingly.

### How should a phone reach a self-hosted agent?

The documentation recommends an SSH tunnel, Tailscale or another trusted VPN, sign-in through OAuth for anything facing the internet, HTTPS for remote use, and no direct port forwarding from a router. The native app's own steps are not documented.

### Is Hermes Agent open source?

Nous's site and repository state the MIT licence for Hermes Agent. The mobile app's licence has not been stated.

### Is our data safe in Hermes Cloud?

We cannot say. Nous's terms contain a data processing section, its privacy policy describes a Privacy Mode, and its Cloud page lists data centre locations. Region choice, sub-processors, transfers and deletion terms were not confirmed, so ask for them in writing and have counsel review them. This article is not legal advice.

### Is Nous a processor of our personal data?

It depends on the configuration and the contract. With Hermes Cloud, Nous hosts the instance that stores your files and conversations, and its terms describe processing on your instructions. For personal data subject to GDPR, a controller–processor agreement (Article 28) governs the relationship, and we have not assessed whether the portal terms meet it.

### Should our team wait for the official release?

A team can start now with the documented browser access, a VPN, a narrow host account and approvals, and treat the native app as an addition once it has documentation and a release. Do not promise clients dates that Nous has not given.

## Sources

Official pages and documentation read on 25 November 2026, with the update dates stated in the text where the pages show them. Reports from other sites are listed last and used only for the points marked as reported. The Hermes Agent FAQ page is older than the rest, so its statements on telemetry should be rechecked against the current documentation.

Nous Research, Hermes Mobile beta waitlist: https://hermes-agent.nousresearch.com/mobile
Nous Research on X, post of 3 November 2026, whose text we read in a search result because the page itself could not be opened: https://x.com/NousResearch/status/2117696344756252822
Hermes Agent documentation, Hermes Desktop and browser Webapp: https://hermes-agent.nousresearch.com/docs/user-guide/desktop
Hermes Agent documentation, connecting Desktop to many instances: https://hermes-agent.nousresearch.com/docs/user-guide/multi-connection-desktop
Hermes Agent documentation, messaging gateway security: https://hermes-agent.nousresearch.com/docs/user-guide/messaging
Hermes Agent documentation, backup and transfer: https://hermes-agent.nousresearch.com/docs/user-guide/backup-and-transfer
Hermes Agent documentation, FAQ: https://hermes-agent.nousresearch.com/docs/reference/faq
Hermes Agent official site: https://hermes-agent.nousresearch.com/
Hermes Agent repository: https://github.com/nousresearch/hermes-agent
Hermes Agent repository, releases: https://github.com/NousResearch/hermes-agent/releases
Nous Portal, Terms of Service: https://portal.nousresearch.com/terms
Nous Portal, Privacy Policy: https://portal.nousresearch.com/privacy
Nous Portal, Hermes Cloud: https://portal.nousresearch.com/cloud
Project issue tracker, Android beta tester limit: https://github.com/NousResearch/hermes-agent/issues/147269
Project issue tracker, iOS invitation not found: https://github.com/NousResearch/hermes-agent/issues/147556
Independent guide, Hermes Atlas: https://hermesatlas.com/guide/mobile
Reports on the beta and features: https://aicoder.com/news/news-20261031-nous-hermes-agent-mobile-beta-ios-testflight-android-firebase-own-gateway, https://lapaasvoice.com/hermes-agent-mobile-app-launches-in-open-beta-for-ios-and-android/, https://explainx.ai/blog/hermes-mobile-beta-nous-research-ios-android-full-after-thanksgiving-release-claimed-vs-verified-2026, https://huggingnews.com/ai/nous-research-targets-full-public-launch-of-hermes-ai-app-after-thanksgi-cfa9fc81

[Discuss your automation project →](/contacts)
