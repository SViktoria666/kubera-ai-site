# Kubera AI Analytics

Umami подключён как глобальный слой анонимной аналитики для сайта Kubera AI.

## Что измеряем

- Посещения и уникальных посетителей
- Страны и регионы
- Страницы входа и выхода
- Время на сайте и на странице
- Возвратные визиты
- Источники трафика и UTM
- Устройства, браузеры и язык браузера
- Клики по CTA
- Клики по WhatsApp, Telegram и email
- Открытие и использование AI-ассистента
- Открытие и отправка контактной формы
- Использование калькулятора
- Внешние ссылки

## Что не собираем

- Имена, email, телефоны, WhatsApp-номера, Telegram usernames
- Текст сообщений форм и AI-ассистента
- Названия компаний
- CRM record IDs
- Любые токены, пароли, salts и приватные ключи

## Где смотреть в Umami

- **Общая посещаемость** - Overview сайта
- **Страны и регионы** - Geography / Countries / Regions
- **Отдельные страницы** - Pages
- **Переходы и источники** - Referrers / Channels / UTM
- **Время и вовлечённость** - Sessions / Pages
- **События** - Events
- **Конверсии** - Goals
- **Сегментация** - Filters / Segments

## Русский словарь событий

- `page_context` - контекст страницы
- `primary_cta_click` - клик по основному CTA
- `secondary_cta_click` - клик по вторичному CTA
- `pricing_viewed` - просмотр блока цен
- `pricing_package_clicked` - клик по пакету цен
- `pricing_cta_clicked` - клик по CTA в блоке цен
- `calculator_viewed` - открытие калькулятора
- `calculator_started` - начало использования калькулятора
- `calculator_completed` - завершение калькулятора
- `calculator_result_cta_clicked` - клик по CTA после расчёта
- `ai_assistant_opened` - открытие AI-ассистента
- `ai_assistant_closed` - закрытие AI-ассистента
- `ai_assistant_started` - начало диалога
- `ai_assistant_message_sent` - отправка сообщения в ассистент
- `ai_assistant_contact_step_started` - начало шага сбора контактов
- `ai_assistant_submitted` - передача контактов ассистенту
- `contact_form_opened` - открытие контактной формы
- `contact_form_started` - начало заполнения формы
- `contact_form_submitted` - отправка формы
- `contact_form_success` - успешная отправка формы
- `contact_form_error` - ошибка отправки формы
- `email_click` - клик по email
- `telegram_click` - клик по Telegram
- `whatsapp_click` - клик по WhatsApp
- `phone_click` - клик по телефону
- `external_link_click` - клик по внешней ссылке

## Типы страниц

- `home` - главная
- `services` - услуги
- `country_landing` - лендинг по стране
- `industry_solution` - отраслевое решение
- `use_case` - сценарий использования
- `case` - кейс
- `blog` - блог
- `pricing` - цены
- `calculator` - калькулятор
- `contacts` - контакты
- `how_we_work` - как мы работаем
- `demo` - демо
- `other` - другая страница

## Принцип работы

- Tracker подключён один раз в `src/components/core/SiteShell.tsx`.
- Включение только на production.
- Preview-окружения и local dev не трекаются по умолчанию.
- Автоматический pageview оставлен Umami.
- Дополнительные события передаются только через безопасные свойства без PII.

## Приватность

- Трекинг анонимный и cookieless.
- `Do Not Track` уважается.
- Не отправляем персональные данные в Umami.
- В CRM передаются только данные, необходимые для лида, отдельным approved workflow.

## Отключение аналитики

Для временного отключения аналитики без поломки сайта:

1. Уберите или очистите `NEXT_PUBLIC_UMAMI_SCRIPT_URL`
2. Уберите или очистите `NEXT_PUBLIC_UMAMI_WEBSITE_ID`
3. Пересоберите и задеплойте сайт

Tracker в этом случае просто не отрендерится, а сайт продолжит работать.

## Добавление нового трекинга

1. Используйте уже существующий `trackUmamiEvent()` или глобальный `data-analytics-event`.
2. Не передавайте значения полей форм, сообщения или CRM-идентификаторы.
3. Для новых CTA используйте понятное имя события и безопасные свойства:
   - `page_path`
   - `page_language`
   - `page_type`
   - `placement`
   - `cta_id`
4. Если нужен новый тип отчёта, сначала проверьте, можно ли получить его через Pages / Events / Filters / Goals без добавления нового события.
