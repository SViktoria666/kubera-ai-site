# Kubera AI Analytics

Umami is the production analytics layer for Kubera AI. It is loaded globally from the shared site shell so it covers all current and future pages without editing each route.

## What Victoria can see

- page views
- unique visitors
- sessions
- countries and regions
- landing pages and exit pages
- referrers and UTM values
- returning visitors
- device, browser, operating system, and screen size
- custom events for CTA clicks, contact links, calculator usage, assistant usage, and contact forms

## What we do not send

- names
- email addresses
- phone numbers
- WhatsApp numbers
- Telegram usernames
- CRM IDs
- form text
- assistant transcripts
- company names

## Session lifecycle

- Opening the assistant always starts a fresh session.
- The welcome message is shown only for the new open session.
- While the widget remains open, the active conversation stays in memory.
- A transient API, model, timeout, or network failure does not reset the conversation.
- Closing the widget intentionally clears the visible conversation, lead draft, compact memory, error state, and session identifier.
- Reopening the widget after a close always starts a new conversation.

## Compact memory strategy

The assistant sends a bounded message window plus a compact structured memory summary to the backend.

The memory summary keeps only safe, useful facts:

- language
- page path
- country
- company
- business type or intent
- service interest
- urgency
- budget
- collected contact fields
- customer name
- city or region
- industry
- requested services
- discussed pages
- preferred contact method
- questions already answered
- information still needed
- current conversation stage

This keeps long conversations stable without sending an unbounded transcript.

Rules:

- Keep the memory bounded and compact.
- Preserve confirmed facts through long conversations.
- Never overwrite a confirmed fact with a guess.
- Do not repeat questions that are already answered.
- Clear the memory only when the user deliberately closes the widget.

## Capability honesty

- The assistant may describe a capability as confirmed only when the knowledge base explicitly supports it.
- If a capability is not confirmed, the assistant must say it may be possible in principle and needs technical assessment of the specific systems, APIs, workflow, and security requirements.
- Unconfirmed integrations such as SAP should never be stated as already supported.
- Keep the wording consultative and avoid generic yes/no claims for unknown capabilities.

## Contact collection state machine

The assistant follows a stable flow:

- `closed`
- `active`
- `waiting_for_response`
- `collecting_contacts`
- `submitting_lead`
- `transient_error`
- `completed`

Rules:

- Never ask for a field already provided.
- Distinguish email, phone, WhatsApp, and Telegram.
- Resume from the last missing field after a transient error.
- Submit the lead only once.
- Keep partial progress until the user closes the widget.
- Ask for contacts only after the conversation has established the need, urgency, name, company, and country.

## Retry behavior

- One automatic retry is allowed for transient network or 5xx failures.
- Validation and malformed-response failures are not retried automatically.
- The user sees a calm retry message in their current language.
- The retry button retries only the failed request.
- Closing the widget clears all retry state.

## Analytics dictionary

- `page_context` - page context snapshot
- `primary_cta_click` - primary CTA click
- `secondary_cta_click` - secondary CTA click
- `pricing_viewed` - pricing section viewed
- `pricing_package_clicked` - pricing package clicked
- `pricing_cta_clicked` - pricing CTA clicked
- `calculator_viewed` - calculator opened
- `calculator_started` - calculator started
- `calculator_completed` - calculator completed
- `calculator_result_cta_clicked` - CTA clicked after calculator
- `ai_assistant_opened` - assistant opened
- `ai_assistant_closed` - assistant closed
- `ai_assistant_started` - first assistant message sent
- `ai_assistant_message_sent` - user sent a message
- `ai_assistant_contact_step_started` - contact collection started
- `ai_assistant_submitted` - lead submitted to CRM
- `assistant_error` - transient assistant error
- `assistant_retry_clicked` - retry clicked by user
- `assistant_retry_success` - retry succeeded
- `assistant_contact_collection_started` - contact collection began
- `assistant_contact_collection_resumed` - contact collection resumed after an error
- `assistant_closed_with_active_conversation` - widget closed while a conversation was active
- `contact_form_opened` - contact form opened
- `contact_form_started` - contact form started
- `contact_form_submitted` - contact form submitted
- `contact_form_success` - contact form succeeded
- `contact_form_error` - contact form failed
- `email_click` - email link clicked
- `telegram_click` - Telegram link clicked
- `whatsapp_click` - WhatsApp link clicked
- `phone_click` - phone link clicked
- `external_link_click` - outbound link clicked
- `blog_article_opened` - blog article viewed
- `case_opened` - case viewed
- `service_page_viewed` - service page viewed
- `country_landing_viewed` - country landing page viewed
- `industry_solution_viewed` - industry solution viewed

## Page categories

- `home` - Главная
- `services` - Услуги
- `country_landing` - Лендинг по стране
- `industry_solution` - Отраслевое решение
- `use_case` - Use Case
- `case` - Кейсы
- `blog` - Блог
- `pricing` - Цены
- `calculator` - Калькулятор
- `contacts` - Контакты
- `how_we_work` - Как мы работаем
- `demo` - Демо
- `other` - Другая страница

## Where Victoria looks in Umami

- Countries and regions: Geography
- Exact pages: Pages
- English vs Russian pages: Pages, filtered by `/ru` and English routes
- Traffic sources: Referrers and UTM reports
- Session duration: Sessions and Pages
- Calculator usage: Events and Goals
- AI assistant usage: Events and Goals
- Conversions: Goals and Boards

## Operational rules

- Tracker loads asynchronously from the shared site shell.
- No paid Umami features are used.
- No analytics payload contains PII.
- Analytics failures must not break rendering, forms, calculator behavior, or the assistant.

## Disable analytics safely

To disable analytics without breaking the site:

1. Remove or clear `NEXT_PUBLIC_UMAMI_SCRIPT_URL`.
2. Remove or clear `NEXT_PUBLIC_UMAMI_WEBSITE_ID`.
3. Redeploy the website.

The website continues to work because the tracker is optional.

## Rollback

- Revert the website commit that introduced the assistant lifecycle fix or analytics change.
- Leave Umami historical data intact.
- Do not touch NocoDB or n8n unless the rollback explicitly includes them.
