import type { AssistantConversationMemory, AssistantLeadDraft, AssistantLocale, AssistantMessage } from "./types";

type AssistantLocalizedCopy = {
  welcome: string;
  placeholder: string;
  send: string;
  retry: string;
  temporaryError: string;
};

type AssistantPromptCopy = {
  contact: string;
  country: string;
  company: string;
  name: string;
  need: string;
  ready: string;
  urgency: string;
};

type CapabilityLocalization = {
  confirmed: string;
  related: string;
  assessment: string;
  unknown: string;
  mayBePossible: string;
  needReview: string;
  followUp: string;
  followUpQuestion: string;
};

const SHORT_AMBIGUOUS_PATTERNS = [
  /^ok(?:ay)?$/i,
  /^yes$/i,
  /^no$/i,
  /^hi$/i,
  /^hello$/i,
  /^hey$/i,
  /^crm$/i,
  /^sap$/i,
  /^api$/i,
  /^ai$/i,
  /^n8n$/i,
  /^email$/i,
  /^whatsapp$/i,
  /^telegram$/i,
];

const localeKeywordPatterns: Array<{ locale: AssistantLocale; patterns: RegExp[] }> = [
  {
    locale: "ru",
    patterns: [
      /\b(привет|здравствуйте|пожалуйста|компания|контакт|автоматизац|интеграц|система|безопасност|цена|срок|спасибо|могу ли|можете ли)\b/i,
      /[а-яё]/i,
    ],
  },
  {
    locale: "uk",
    patterns: [
      /\b(привіт|будь ласка|компані|контакт|автоматизац|інтеграц|система|безпек|ціна|термін|дякую|можете|чи можна)\b/i,
      /[іїєґ]/i,
    ],
  },
  {
    locale: "es",
    patterns: [/\b(hola|por favor|empresa|contacto|automatizaci[oó]n|integraci[oó]n|seguridad|precio|plazo|gracias|puedes|puede)\b/i],
  },
  {
    locale: "de",
    patterns: [/\b(hallo|bitte|unternehmen|kontakt|automatisier|integration|sicherheit|preis|zeit|danke|kannst|koennen|können)\b/i],
  },
  {
    locale: "fr",
    patterns: [/\b(bonjour|s'il vous plait|entreprise|contact|automatisation|int[eé]gration|s[eé]curit[eé]|prix|d[eé]lai|merci|pouvez|peux)\b/i],
  },
  {
    locale: "it",
    patterns: [/\b(ciao|per favore|azienda|contatto|automazion|integrazion|sicurezza|prezzo|tempo|grazie|puoi|potete)\b/i],
  },
  {
    locale: "pt",
    patterns: [/\b(ola|ol[aá]|preciso|minha|meu|empresa|contato|automatiz|automacao|integra[cç][aã]o|seguran[cç]a|pre[cç]o|prazo|obrigado|pode|podem|negocio)\b/i],
  },
  {
    locale: "nl",
    patterns: [/\b(hallo|alstublieft|bedrijf|contact|automatiser|integratie|veiligheid|prijs|tijd|bedankt|kun|kunt)\b/i],
  },
  {
    locale: "pl",
    patterns: [/\b(cze[śs]?[cć]|prosz[eę]|firma|kontakt|automatyzac|integrac|bezpiecze[nń]stwo|cena|termin|dziekuje|dziękuję|czy mo[zż]esz)\b/i],
  },
  {
    locale: "et",
    patterns: [/\b(tere|palun|ettev[oõ]te|kontakt|automatiseer|integratsioon|turvalisus|hind|aeg|ait[aä]h|kas saate|kas sa saad)\b/i],
  },
  {
    locale: "lv",
    patterns: [/\b(sveiki|l[ūu]dzu|uz[nņ]e[mm]ums|kontakts|automatiz[aā]c|integr[aā]c|dro[šs]i|cena|termi[nņ]s|paldies|vai varat)\b/i],
  },
  {
    locale: "lt",
    patterns: [/\b(sveiki|pr[aą]šau|[iį]mon[eė]|kontaktas|automatizav|integracij|saugum|kaina|laikas|a[cč]i[uų]|ar galite)\b/i],
  },
  {
    locale: "fi",
    patterns: [/\b(hei|ole hyv[aä]t|yritys|yhteystieto|automaatio|integraatio|turvallisuus|hinta|aika|kiitos|voitteko|voitko)\b/i],
  },
  {
    locale: "sv",
    patterns: [/\b(hej|sn[äa]lla|f[öo]retag|kontakt|automatiser|integration|s[aä]kerhet|pris|tid|tack|kan ni|kan du)\b/i],
  },
  {
    locale: "da",
    patterns: [/\b(hej|venligst|virksomhed|kontakt|automatiser|integration|sikkerhed|pris|tid|tak|kan du|kan i)\b/i],
  },
];

const localeCopy: Record<AssistantLocale, AssistantLocalizedCopy> = {
  en: {
    welcome: "Hi! I'm the Kubera AI Assistant. I can help you find the right AI automation solution for your business. What would you like to improve or automate?",
    placeholder: "Type your message",
    send: "Send",
    retry: "Retry",
    temporaryError: "Sorry - I had a temporary connection issue. Your conversation is still here. Please try again.",
  },
  ru: {
    welcome: "Здравствуйте! Я Kubera AI Assistant. Помогу подобрать подходящее AI-решение для вашего бизнеса. Что вы хотите улучшить или автоматизировать?",
    placeholder: "Введите сообщение",
    send: "Отправить",
    retry: "Повторить",
    temporaryError: "Извините, произошла временная ошибка соединения. Диалог сохранён. Попробуйте ещё раз.",
  },
  es: {
    welcome: "Hola. Soy Kubera AI Assistant. Puedo ayudarte a encontrar la mejor solucion de automatizacion con IA para tu negocio. ¿Que te gustaria mejorar o automatizar?",
    placeholder: "Escribe tu mensaje",
    send: "Enviar",
    retry: "Reintentar",
    temporaryError: "Lo siento - hubo un problema temporal de conexion. Tu conversacion sigue aqui. Intentalo de nuevo.",
  },
  de: {
    welcome: "Hallo! Ich bin der Kubera AI Assistant. Ich helfe dir, die passende KI-Automatisierung fuer dein Unternehmen zu finden. Was moechtest du verbessern oder automatisieren?",
    placeholder: "Schreibe deine Nachricht",
    send: "Senden",
    retry: "Erneut versuchen",
    temporaryError: "Entschuldigung - es gab ein voruebergehendes Verbindungsproblem. Dein Gespraech ist noch da. Bitte versuche es erneut.",
  },
  fr: {
    welcome: "Bonjour. Je suis Kubera AI Assistant. Je peux vous aider a trouver la bonne solution d'automatisation IA pour votre entreprise. Que souhaitez-vous ameliorer ou automatiser ?",
    placeholder: "Ecrivez votre message",
    send: "Envoyer",
    retry: "Reessayer",
    temporaryError: "Desole - il y a eu un probleme de connexion temporaire. Votre conversation est toujours la. Veuillez reessayer.",
  },
  it: {
    welcome: "Ciao! Sono Kubera AI Assistant. Posso aiutarti a trovare la soluzione di automazione IA giusta per la tua azienda. Cosa vorresti migliorare o automatizzare?",
    placeholder: "Scrivi il tuo messaggio",
    send: "Invia",
    retry: "Riprova",
    temporaryError: "Spiacente - c'e stato un problema di connessione temporaneo. La conversazione e ancora qui. Riprova.",
  },
  pt: {
    welcome: "Olà! Sou o Kubera AI Assistant. Posso ajudar a encontrar a melhor solucao de automacao com IA para o seu negocio. O que gostaria de melhorar ou automatizar?",
    placeholder: "Escreva a sua mensagem",
    send: "Enviar",
    retry: "Tentar novamente",
    temporaryError: "Desculpe - houve um problema temporario de ligacao. A sua conversa continua aqui. Tente novamente.",
  },
  nl: {
    welcome: "Hoi! Ik ben de Kubera AI Assistant. Ik help je graag de juiste AI-automatisering voor je bedrijf te vinden. Wat wil je verbeteren of automatiseren?",
    placeholder: "Typ je bericht",
    send: "Versturen",
    retry: "Opnieuw proberen",
    temporaryError: "Sorry - er was een tijdelijk verbindingsprobleem. Je gesprek staat er nog steeds. Probeer het opnieuw.",
  },
  pl: {
    welcome: "Czesc! Jestem Kubera AI Assistant. Pomoge Ci znalezc odpowiednie rozwiazanie automatyzacji AI dla Twojej firmy. Co chcesz ulepszyc lub zautomatyzowac?",
    placeholder: "Napisz wiadomosc",
    send: "Wyslij",
    retry: "Sprobuj ponownie",
    temporaryError: "Przepraszam - wystapil tymczasowy problem z polaczeniem. Twoja rozmowa nadal tutaj jest. Sprobuj ponownie.",
  },
  et: {
    welcome: "Tere! Mina olen Kubera AI Assistant. Aitan leida teie ettevottele sobiva AI-automatiseerimise lahenduse. Mida soovite parandada voi automatiseerida?",
    placeholder: "Kirjuta oma sonum",
    send: "Saada",
    retry: "Proovi uuesti",
    temporaryError: "Vabandust - tekkis ajutine uhenduse probleem. Teie vestlus on alles. Palun proovi uuesti.",
  },
  lv: {
    welcome: "Sveiki! Es esmu Kubera AI Assistant. Es varu palidzet atrast jusu uznemumam piemerotu AI automatizacijas risinajumu. Ko velaties uzlabot vai automatizet?",
    placeholder: "Ierakstiet savu zinojumu",
    send: "Nosutit",
    retry: "Meginat velreiz",
    temporaryError: "Atvainojiet - radusies pagaida savienojuma problema. Jus uzzinajums joprojam ir saglabats. Ludzu, megini velreiz.",
  },
  lt: {
    welcome: "Sveiki! As esu Kubera AI Assistant. Galiu padeti rasti tinkama AI automatizacijos sprendima jusu verslui. Ką norėtumėte patobulinti ar automatizuoti?",
    placeholder: "Rasykite zinute",
    send: "Siusti",
    retry: "Bandyti dar karta",
    temporaryError: "Atsiprasome - ivyko laikina rysio problema. Jusų pokalbis vis dar cia. Pabandykite dar karta.",
  },
  fi: {
    welcome: "Hei! Olen Kubera AI Assistant. Voin auttaa loytamaan yrityksellesi sopivan AI-automaatioratkaisun. Mitä haluaisit parantaa tai automatisoida?",
    placeholder: "Kirjoita viestisi",
    send: "Laheta",
    retry: "Yrita uudelleen",
    temporaryError: "Pahoittelut - yhteys katkesi hetkellisesti. Keskustelusi on yha tallella. Yrita uudelleen.",
  },
  sv: {
    welcome: "Hej! Jag ar Kubera AI Assistant. Jag kan hjalpa dig att hitta ratt AI-automatisering for ditt foretag. Vad vill du forbattra eller automatisera?",
    placeholder: "Skriv ditt meddelande",
    send: "Skicka",
    retry: "Forsok igen",
    temporaryError: "Ursakta - det blev ett tillfalligt anslutningsproblem. Din konversation finns kvar. Forsok igen.",
  },
  da: {
    welcome: "Hej! Jeg er Kubera AI Assistant. Jeg kan hjalpe dig med at finde den rigtige AI-automatisering til din virksomhed. Hvad vil du forbedre eller automatisere?",
    placeholder: "Skriv din besked",
    send: "Send",
    retry: "Proev igen",
    temporaryError: "Beklager - der opstod et midlertidigt forbindelsesproblem. Din samtale er stadig her. Proev igen.",
  },
  uk: {
    welcome: "Вітаю! Я Kubera AI Assistant. Допоможу підібрати правильне AI-рішення для вашого бізнесу. Що саме ви хочете покращити або автоматизувати?",
    placeholder: "Введіть повідомлення",
    send: "Надіслати",
    retry: "Спробувати ще раз",
    temporaryError: "Вибачте - виникла тимчасова проблема з підключенням. Розмова збережена. Спробуйте ще раз.",
  },
};

const promptCopy: Record<AssistantLocale, AssistantPromptCopy> = {
  en: {
    need: "Hi, I'm Kubera AI Assistant. Tell me what you'd like to automate or improve, and I'll help you find the best fit.",
    urgency: "What makes this important now? For example: lost leads, slow replies, manual work, or a deadline.",
    name: "What is your name?",
    company: "What company are you from?",
    country: "Which country is the business operating in?",
    contact: "What is the best contact for follow-up: email, Telegram, or WhatsApp?",
    ready: "Thanks. I have enough context and will pass this to the Kubera AI team.",
  },
  ru: {
    need: "Привет! Я Kubera AI Assistant. Расскажите, что вы хотите автоматизировать или улучшить, и я помогу подобрать лучший вариант.",
    urgency: "Почему это важно сейчас? Например: теряются лиды, медленные ответы, ручная работа или дедлайн.",
    name: "Как вас зовут?",
    company: "Из какой вы компании?",
    country: "В какой стране работает бизнес?",
    contact: "Как лучше связаться: email, Telegram или WhatsApp?",
    ready: "Спасибо. Контекста достаточно, передам это команде Kubera AI.",
  },
  es: {
    need: "Hola, soy Kubera AI Assistant. Cuéntame qué te gustaría automatizar o mejorar y te ayudaré a encontrar la mejor opción.",
    urgency: "¿Por qué es importante ahora? Por ejemplo: leads perdidos, respuestas lentas, trabajo manual o una fecha límite.",
    name: "¿Cómo te llamas?",
    company: "¿De qué empresa eres?",
    country: "¿En qué país opera el negocio?",
    contact: "¿Cuál es el mejor contacto para seguimiento: email, Telegram o WhatsApp?",
    ready: "Gracias. Tengo suficiente contexto y lo enviaré al equipo de Kubera AI.",
  },
  de: {
    need: "Hallo, ich bin der Kubera AI Assistant. Erzaehl mir, was du automatisieren oder verbessern moechtest, und ich helfe dir beim passenden Fit.",
    urgency: "Was ist daran gerade wichtig? Zum Beispiel: verlorene Leads, langsame Antworten, manuelle Arbeit oder eine Frist.",
    name: "Wie heißt du?",
    company: "Aus welchem Unternehmen kommst du?",
    country: "In welchem Land ist das Unternehmen aktiv?",
    contact: "Was ist der beste Kontakt fuer die Rueckmeldung: E-Mail, Telegram oder WhatsApp?",
    ready: "Danke. Ich habe genug Kontext und leite das an das Kubera AI Team weiter.",
  },
  fr: {
    need: "Bonjour, je suis Kubera AI Assistant. Dites-moi ce que vous souhaitez automatiser ou ameliorer, et je vous aiderai a trouver la meilleure solution.",
    urgency: "Pourquoi est-ce important maintenant ? Par exemple : leads perdus, reponses lentes, travail manuel ou une deadline.",
    name: "Comment vous appelez-vous ?",
    company: "De quelle entreprise venez-vous ?",
    country: "Dans quel pays l'entreprise opère-t-elle ?",
    contact: "Quel est le meilleur contact pour le suivi : email, Telegram ou WhatsApp ?",
    ready: "Merci. J'ai suffisamment de contexte et je transmettrai cela a l'equipe Kubera AI.",
  },
  it: {
    need: "Ciao, sono Kubera AI Assistant. Dimmi cosa vorresti automatizzare o migliorare e ti aiuterò a trovare la soluzione più adatta.",
    urgency: "Perché è importante ora? Ad esempio: lead persi, risposte lente, lavoro manuale o una scadenza.",
    name: "Come ti chiami?",
    company: "Da quale azienda vieni?",
    country: "In quale paese opera l'azienda?",
    contact: "Qual è il miglior contatto per il follow-up: email, Telegram o WhatsApp?",
    ready: "Grazie. Ho abbastanza contesto e passerò tutto al team Kubera AI.",
  },
  nl: {
    need: "Hoi, ik ben de Kubera AI Assistant. Vertel me wat je wilt automatiseren of verbeteren, dan help ik je de beste match te vinden.",
    urgency: "Waarom is dit nu belangrijk? Bijvoorbeeld: gemiste leads, trage reacties, handmatig werk of een deadline.",
    name: "Hoe heet je?",
    company: "Bij welk bedrijf ben je betrokken?",
    country: "In welk land is het bedrijf actief?",
    contact: "Wat is het beste contact voor follow-up: e-mail, Telegram of WhatsApp?",
    ready: "Bedankt. Ik heb genoeg context en stuur dit door naar het Kubera AI team.",
  },
  pt: {
    need: "Olá, sou o Kubera AI Assistant. Diga-me o que gostaria de automatizar ou melhorar e eu ajudo a encontrar a melhor opção.",
    urgency: "Porque é importante agora? Por exemplo: leads perdidos, respostas lentas, trabalho manual ou um prazo.",
    name: "Como se chama?",
    company: "De que empresa é?",
    country: "Em que país o negócio opera?",
    contact: "Qual é o melhor contacto para seguimento: email, Telegram ou WhatsApp?",
    ready: "Obrigado. Já tenho contexto suficiente e vou passar isto para a equipa Kubera AI.",
  },
  pl: {
    need: "Cześć, jestem Kubera AI Assistant. Powiedz mi, co chcesz zautomatyzować lub poprawić, a pomogę dobrać najlepsze rozwiązanie.",
    urgency: "Dlaczego to ważne teraz? Na przykład: utracone leady, wolne odpowiedzi, praca ręczna albo termin.",
    name: "Jak masz na imię?",
    company: "Z jakiej firmy jesteś?",
    country: "W jakim kraju działa firma?",
    contact: "Jaki kontakt jest najlepszy do dalszego kontaktu: email, Telegram czy WhatsApp?",
    ready: "Dziękuję. Mam już wystarczający kontekst i przekażę to zespołowi Kubera AI.",
  },
  et: {
    need: "Tere, mina olen Kubera AI Assistant. Räägi, mida soovid automatiseerida või parandada, ja aitan leida sobivaima lahenduse.",
    urgency: "Miks on see praegu oluline? Näiteks: kadunud leadid, aeglased vastused, käsitöö või tähtaeg.",
    name: "Mis on teie nimi?",
    company: "Mis ettevõttest te olete?",
    country: "Millises riigis ettevõte tegutseb?",
    contact: "Mis on parim kontakt järeltegevuseks: e-post, Telegram või WhatsApp?",
    ready: "Aitäh. Mul on piisavalt konteksti ja edastan selle Kubera AI tiimile.",
  },
  lv: {
    need: "Sveiki, es esmu Kubera AI Assistant. Pastāstiet, ko vēlaties automatizēt vai uzlabot, un es palīdzēšu atrast labāko risinājumu.",
    urgency: "Kāpēc tas ir svarīgi tagad? Piemēram: zaudēti līdi, lēnas atbildes, manuāls darbs vai termiņš.",
    name: "Kā jūs sauc?",
    company: "No kāda uzņēmuma jūs esat?",
    country: "Kurā valstī uzņēmums darbojas?",
    contact: "Kāds ir labākais saziņas veids: email, Telegram vai WhatsApp?",
    ready: "Paldies. Man ir pietiekami daudz konteksta, un es to nodosšu Kubera AI komandai.",
  },
  lt: {
    need: "Sveiki, as esu Kubera AI Assistant. Pasakykite, ka norite automatizuoti ar patobulinti, ir padėsiu rasti tinkamiausią sprendimą.",
    urgency: "Kodėl tai svarbu dabar? Pavyzdžiui: prarasti leadai, lėti atsakymai, rankinis darbas arba terminas.",
    name: "Koks jūsų vardas?",
    company: "Iš kokios įmonės esate?",
    country: "Kokioje šalyje veikia verslas?",
    contact: "Koks geriausias kontaktas tolimesniam bendravimui: email, Telegram ar WhatsApp?",
    ready: "Ačiū. Turiu pakankamai konteksto ir perduosiu tai Kubera AI komandai.",
  },
  fi: {
    need: "Hei, olen Kubera AI Assistant. Kerro, mita haluaisit automatisoida tai parantaa, niin autan loytamaan parhaan vaihtoehdon.",
    urgency: "Miksi tämä on tärkeää nyt? Esimerkiksi: menetetyt liidit, hitaat vastaukset, manuaalinen työ tai määräaika.",
    name: "Mikä on nimesi?",
    company: "Mistä yrityksestä olet?",
    country: "Missä maassa yritys toimii?",
    contact: "Mikä on paras yhteystapa jatkoa varten: email, Telegram vai WhatsApp?",
    ready: "Kiitos. Minulla on tarpeeksi kontekstia ja välitän tämän Kubera AI -tiimille.",
  },
  sv: {
    need: "Hej, jag är Kubera AI Assistant. Berätta vad du vill automatisera eller förbättra så hjälper jag dig hitta rätt lösning.",
    urgency: "Varför är detta viktigt nu? Till exempel: förlorade leads, långsamma svar, manuellt arbete eller en deadline.",
    name: "Vad heter du?",
    company: "Vilket företag kommer du från?",
    country: "I vilket land verkar företaget?",
    contact: "Vilken är bästa kontaktvägen för uppföljning: email, Telegram eller WhatsApp?",
    ready: "Tack. Jag har tillräckligt med kontext och skickar detta vidare till Kubera AI-teamet.",
  },
  da: {
    need: "Hej, jeg er Kubera AI Assistant. Fortæl mig, hvad du gerne vil automatisere eller forbedre, så hjælper jeg dig med at finde det bedste match.",
    urgency: "Hvorfor er dette vigtigt nu? For eksempel: mistede leads, langsomme svar, manuelt arbejde eller en deadline.",
    name: "Hvad hedder du?",
    company: "Hvilken virksomhed kommer du fra?",
    country: "I hvilket land opererer virksomheden?",
    contact: "Hvad er den bedste kontakt til opfølgning: email, Telegram eller WhatsApp?",
    ready: "Tak. Jeg har nok kontekst og sender dette videre til Kubera AI-teamet.",
  },
  uk: {
    need: "Вітаю, я Kubera AI Assistant. Розкажіть, що ви хочете автоматизувати або покращити, і я допоможу знайти найкращий варіант.",
    urgency: "Чому це важливо саме зараз? Наприклад: втрачені ліди, повільні відповіді, ручна робота або дедлайн.",
    name: "Як вас звати?",
    company: "З якої ви компанії?",
    country: "У якій країні працює бізнес?",
    contact: "Який контакт найкраще використати для зворотного зв'язку: email, Telegram чи WhatsApp?",
    ready: "Дякую. У мене достатньо контексту, і я передам це команді Kubera AI.",
  },
};

const capabilityLocalization: Record<
  AssistantLocale,
  CapabilityLocalization
> = {
  en: {
    confirmed: "Confirmed capability",
    related: "Related but unconfirmed",
    assessment: "Requires technical assessment",
    unknown: "Out of scope or unknown",
    mayBePossible: "It may be possible, but",
    needReview: "a technical assessment of the specific system, APIs, workflow, and security requirements is needed.",
    followUp: "If you want, I can help you frame the request for a technical review.",
    followUpQuestion: "What system are you using, and what exact workflow do you want to connect?",
  },
  ru: {
    confirmed: "Подтвержденная возможность",
    related: "Похоже возможно, но не подтверждено",
    assessment: "Требуется техническая оценка",
    unknown: "Вне подтвержденной области или неизвестно",
    mayBePossible: "Это может быть возможно, но",
    needReview: "нужна техническая проверка конкретной системы, API, workflow и требований к безопасности.",
    followUp: "Если хотите, я помогу сформулировать задачу для технической оценки.",
    followUpQuestion: "Какая у вас система и какой именно workflow нужно связать?",
  },
  es: {
    confirmed: "Capacidad confirmada",
    related: "Relacionado pero no confirmado",
    assessment: "Requiere evaluacion tecnica",
    unknown: "Fuera del alcance confirmado o desconocido",
    mayBePossible: "Puede ser posible, pero",
    needReview: "hace falta revisar el sistema concreto, las APIs, el flujo de trabajo y los requisitos de seguridad.",
    followUp: "Si quieres, te ayudo a redactar la solicitud para una revision tecnica.",
    followUpQuestion: "¿Que sistema usas y que flujo exacto quieres conectar?",
  },
  de: {
    confirmed: "Bestaetigte Faehigkeit",
    related: "Verwandt, aber nicht bestaetigt",
    assessment: "Technische Pruefung erforderlich",
    unknown: "Ausserhalb des bestaetigten Bereichs oder unbekannt",
    mayBePossible: "Es kann moeglich sein, aber",
    needReview: "eine technische Pruefung des konkreten Systems, der APIs, des Workflows und der Sicherheitsanforderungen ist notwendig.",
    followUp: "Wenn du moechtest, formuliere ich die Anfrage fuer eine technische Pruefung.",
    followUpQuestion: "Welches System nutzt du und welchen konkreten Workflow willst du verbinden?",
  },
  fr: {
    confirmed: "Capacite confirmee",
    related: "Lie mais non confirme",
    assessment: "Analyse technique requise",
    unknown: "Hors perimetre confirme ou inconnu",
    mayBePossible: "Cela peut etre possible, mais",
    needReview: "une analyse technique du systeme precise, des API, du workflow et des exigences de securite est necessaire.",
    followUp: "Si vous voulez, je peux vous aider a formuler la demande pour une analyse technique.",
    followUpQuestion: "Quel systeme utilisez-vous et quel workflow exact voulez-vous connecter ?",
  },
  it: {
    confirmed: "Capacita confermata",
    related: "Correlato ma non confermato",
    assessment: "Serve una valutazione tecnica",
    unknown: "Fuori dall'ambito confermato o sconosciuto",
    mayBePossible: "Potrebbe essere possibile, ma",
    needReview: "serve una valutazione tecnica del sistema specifico, delle API, del workflow e dei requisiti di sicurezza.",
    followUp: "Se vuoi, ti aiuto a formulare la richiesta per una valutazione tecnica.",
    followUpQuestion: "Quale sistema stai usando e quale workflow preciso vuoi collegare?",
  },
  pt: {
    confirmed: "Capacidade confirmada",
    related: "Relacionado mas nao confirmado",
    assessment: "Requer avaliacao tecnica",
    unknown: "Fora do ambito confirmado ou desconhecido",
    mayBePossible: "Pode ser possivel, mas",
    needReview: "e necessario rever o sistema especifico, as APIs, o fluxo de trabalho e os requisitos de seguranca.",
    followUp: "Se quiser, posso ajudar a redigir o pedido para uma avaliacao tecnica.",
    followUpQuestion: "Que sistema utiliza e que fluxo exato quer ligar?",
  },
  nl: {
    confirmed: "Bevestigde mogelijkheid",
    related: "Gerelateerd maar niet bevestigd",
    assessment: "Technische beoordeling vereist",
    unknown: "Buiten de bevestigde scope of onbekend",
    mayBePossible: "Het kan mogelijk zijn, maar",
    needReview: "er is een technische beoordeling nodig van het specifieke systeem, de API's, de workflow en de beveiligingsvereisten.",
    followUp: "Als je wilt, help ik je de vraag voor een technische beoordeling te formuleren.",
    followUpQuestion: "Welk systeem gebruik je en welke workflow wil je precies koppelen?",
  },
  pl: {
    confirmed: "Potwierdzona mozliwosc",
    related: "Powiazane, ale niepotwierdzone",
    assessment: "Wymaga oceny technicznej",
    unknown: "Poza potwierdzonym zakresem lub nieznane",
    mayBePossible: "To moze byc mozliwe, ale",
    needReview: "potrzebna jest ocena techniczna konkretnego systemu, API, workflow i wymagan bezpieczenstwa.",
    followUp: "Jesli chcesz, pomoge przygotowac prosbe o ocene techniczna.",
    followUpQuestion: "Z jakiego systemu korzystasz i jaki dokladnie workflow chcesz polaczyc?",
  },
  et: {
    confirmed: "Kinnitatud voimalus",
    related: "Seotud, kuid kinnitamata",
    assessment: "Vajab tehnilist hindamist",
    unknown: "Valjaspool kinnitatud valdkonda voi teadmata",
    mayBePossible: "See voi olla voimalik, kuid",
    needReview: "vajalik on konkreetse süsteemi, API-de, workflow ja turvanouete tehniline hindamine.",
    followUp: "Kui soovite, aitan sonastada taotluse tehniliseks hindamiseks.",
    followUpQuestion: "Millist süsteemi kasutate ja millise konkreetse workflow soovite uhendada?",
  },
  lv: {
    confirmed: "Apstiprinata iespeja",
    related: "Saistits, bet neapstiprinats",
    assessment: "Nepieciesama tehniska izvertešana",
    unknown: "Aiz apstiprinata apjoma vai nezinams",
    mayBePossible: "Tas var but iespejams, bet",
    needReview: "nepieciesama konkresas sistemas, API, workflow un drosibas prasibu tehniska izvertešana.",
    followUp: "Ja velaties, palidzesu noformulet pieprasijumu tehniskajai izvertešanai.",
    followUpQuestion: "Kuru sistemu jus izmantojat un kadu tiesi workflow velaties pieslegt?",
  },
  lt: {
    confirmed: "Patvirtinta galimybe",
    related: "Susije, bet nepatvirtinta",
    assessment: "Reikia techninio ivertinimo",
    unknown: "Už patvirtintos srities ribu arba nezinoma",
    mayBePossible: "Tai gali buti imanoma, bet",
    needReview: "reikia ivertinti konkrecia sistema, API, workflow ir saugumo reikalavimus.",
    followUp: "Jei norite, padedu suformuluoti uzklausa techniniam ivertinimui.",
    followUpQuestion: "Kokia sistema naudojate ir koki tiksliai workflow norite prijungti?",
  },
  fi: {
    confirmed: "Vahvistettu kyky",
    related: "Liittyva mutta vahvistamaton",
    assessment: "Vaatii teknisen arvioinnin",
    unknown: "Vahvistetun alueen ulkopuolella tai tuntematon",
    mayBePossible: "Se voi olla mahdollista, mutta",
    needReview: "tarvitaan kyseisen jarjestelman, API-rajapintojen, workflow'n ja turvallisuusvaatimusten tekninen arviointi.",
    followUp: "Voin halutessasi auttaa muotoilemaan pyynnon teknista arviota varten.",
    followUpQuestion: "Mita jarjestelmaa kaytat ja mihin tarkkaan workflow'hon haluat liitoksen?",
  },
  sv: {
    confirmed: "Bekraftad formaga",
    related: "Relaterat men obekraftat",
    assessment: "Krav pa teknisk bedomning",
    unknown: "Utanfors bekraftat omrade eller okant",
    mayBePossible: "Det kan vara mojligt, men",
    needReview: "en teknisk bedomning av det specifika systemet, API:erna, arbetsflodet och sakerhetskraven behovs.",
    followUp: "Om du vill hjalper jag dig formulera en begaran for teknisk bedomning.",
    followUpQuestion: "Vilket system anvander du och vilket exakt arbetsflode vill du koppla?",
  },
  da: {
    confirmed: "Bekraeftet mulighed",
    related: "Relateret men ikke bekraeftet",
    assessment: "Kraver teknisk vurdering",
    unknown: "Uden for bekrftet omrade eller ukendt",
    mayBePossible: "Det kan vaere muligt, men",
    needReview: "der er brug for en teknisk vurdering af det specifikke system, API'er, workflow og sikkerhedskrav.",
    followUp: "Hvis du vil, kan jeg hjaelpe med at formulere en anmodning til teknisk vurdering.",
    followUpQuestion: "Hvilket system bruger du, og hvilket praecist workflow vil du forbinde?",
  },
  uk: {
    confirmed: "Підтверджена можливість",
    related: "Пов'язано, але не підтверджено",
    assessment: "Потрібна технічна оцінка",
    unknown: "Поза підтвердженою сферою або невідомо",
    mayBePossible: "Це може бути можливо, але",
    needReview: "потрібно технічно перевірити конкретну систему, API, workflow та вимоги до безпеки.",
    followUp: "Якщо хочете, я допоможу сформулювати запит для технічної оцінки.",
    followUpQuestion: "Яку систему ви використовуєте і який саме workflow хочете підключити?",
  },
};

function normalizeLocaleCode(value: string | undefined | null): AssistantLocale | undefined {
  if (!value) {
    return undefined;
  }

  const normalized = value.trim().toLowerCase().split("-")[0];
  switch (normalized) {
    case "en":
    case "ru":
    case "es":
    case "de":
    case "fr":
    case "it":
    case "nl":
    case "pt":
    case "pl":
    case "et":
    case "lv":
    case "lt":
    case "fi":
    case "sv":
    case "da":
    case "uk":
      return normalized;
    default:
      return undefined;
  }
}

function normalizeText(value: string) {
  return value
    .normalize("NFKC")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function isAmbiguousShortMessage(text: string) {
  const normalized = normalizeText(text);
  return normalized.length <= 4 || SHORT_AMBIGUOUS_PATTERNS.some((pattern) => pattern.test(normalized));
}

export function detectAssistantLocaleFromText(text: string, fallback?: AssistantLocale): AssistantLocale {
  const normalized = text.trim();
  const normalizedForMatch = normalizeText(normalized);
  const current = fallback ?? "en";

  if (!normalized) {
    return current;
  }

  if (isAmbiguousShortMessage(normalized)) {
    return current;
  }

  if (/\b(switch to english|answer in english|respond in english|reply in english|speak english|english now|in english)\b/i.test(normalizedForMatch)) {
    return "en";
  }

  const germanSignals = ["brauche", "unternehmen", "automatisier", "deutschland", "kontakt", "termin", "bitte"].filter((token) =>
    normalizedForMatch.includes(token),
  );
  if (germanSignals.length >= 2) {
    return "de";
  }

  const portugueseSignals = ["preciso", "minha", "meu", "obrigado", "obrigada", "negocio", "automacao"].filter((token) =>
    normalizedForMatch.includes(token),
  );
  if (portugueseSignals.length >= 2) {
    return "pt";
  }

  const polishSignals = ["potrzeb", "automatyzac", "firma", "prosze", "dziekuje", "przed"].filter((token) =>
    normalizedForMatch.includes(token),
  );
  if (polishSignals.length >= 2) {
    return "pl";
  }

  const danishSignals = ["brug for", "virksomhed", "haster", "tak", "automatisering", "samtale"].filter((token) =>
    normalizedForMatch.includes(token),
  );
  if (danishSignals.length >= 2) {
    return "da";
  }

  const ukrainianSignals = ["потріб", "компані", "автоматизац", "будь ласка", "дяку", "можете", "зараз"].filter((token) =>
    normalizedForMatch.includes(token),
  );
  if (ukrainianSignals.length >= 2) {
    return "uk";
  }

  let bestLocale = current;
  let bestScore = 0;

  for (const entry of localeKeywordPatterns) {
    let score = 0;
    for (const pattern of entry.patterns) {
      if (pattern.test(normalizedForMatch)) {
        score += 2;
      }
    }

    if (score > bestScore) {
      bestLocale = entry.locale;
      bestScore = score;
    }
  }

  return bestScore > 0 ? bestLocale : current;
}

export function detectAssistantLocaleFromMessages(messages: AssistantMessage[], fallback?: AssistantLocale) {
  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content || "";
  return detectAssistantLocaleFromText(latestUserMessage, fallback);
}

export function resolveAssistantReplyLocale(params: {
  latestUserMessage?: string;
  requestLocale?: AssistantLocale;
  conversationMemory?: Pick<AssistantConversationMemory, "locale" | "structured"> | null;
  pageLocale?: string | null;
  fallback?: AssistantLocale;
}): AssistantLocale {
  const fallbackLocale = params.fallback || "en";
  const pageLocale = normalizeAssistantLocale(params.pageLocale || undefined, fallbackLocale);
  const structuredLocale = params.conversationMemory?.structured?.language;
  const memoryLocale = params.conversationMemory?.locale;
  const sessionLocale = params.requestLocale;
  const baseLocale = structuredLocale || memoryLocale || sessionLocale || pageLocale || fallbackLocale;

  if (!params.latestUserMessage) {
    return baseLocale;
  }

  return detectAssistantLocaleFromText(params.latestUserMessage, baseLocale);
}

export function normalizeAssistantLocale(locale?: string | null, fallback: AssistantLocale = "en"): AssistantLocale {
  return normalizeLocaleCode(locale) || fallback;
}

export function getAssistantUiCopy(locale: AssistantLocale): AssistantLocalizedCopy {
  return localeCopy[locale] || localeCopy.en;
}

export function getAssistantPromptCopy(locale: AssistantLocale): AssistantPromptCopy {
  return promptCopy[locale] || promptCopy.en;
}

export function getCapabilityLocalization(locale?: AssistantLocale): CapabilityLocalization {
  if (!locale) {
    return capabilityLocalization.en;
  }

  return capabilityLocalization[locale] || capabilityLocalization.en;
}

export function getConsultativeResponse(locale: AssistantLocale) {
  const responses: Record<AssistantLocale, string> = {
    en: "Yes, projects like this are within Kubera AI's area of competence. For an accurate assessment, the team will clarify the details and propose the optimal solution. If you'd like, I can also point you to a relevant blog article, case study, or service page. What exactly do you want to automate or improve?",
    ru: "Да, такие проекты находятся в зоне компетенции Kubera AI. Для точной оценки команда уточнит детали и предложит оптимальное решение. Если хотите, я также могу подсказать релевантную статью, кейс или страницу услуги. Что именно вы хотите автоматизировать или улучшить?",
    es: "Sí, este tipo de proyectos está dentro de la competencia de Kubera AI. Para una evaluacion precisa, el equipo aclarara los detalles y propondra la solucion optima. Si quieres, tambien puedo sugerirte un articulo, caso o pagina de servicio relevante. ¿Que quieres automatizar o mejorar exactamente?",
    de: "Ja, solche Projekte liegen im Bereich von Kubera AI. Fuer eine genaue Bewertung klaert das Team die Details und schlaegt die passende Loesung vor. Wenn du moechtest, nenne ich dir auch einen passenden Blogartikel, eine Fallstudie oder eine Leistungsseite. Was genau moechtest du automatisieren oder verbessern?",
    fr: "Oui, ce type de projet fait partie du domaine de Kubera AI. Pour une evaluation precise, l'equipe va clarifier les details et proposer la meilleure solution. Si vous voulez, je peux aussi vous orienter vers un article, une etude de cas ou une page de service pertinente. Que souhaitez-vous automatiser ou ameliorer exactement ?",
    it: "Sì, questo tipo di progetto rientra nelle competenze di Kubera AI. Per una valutazione precisa, il team chiarira i dettagli e proporra la soluzione ottimale. Se vuoi, posso anche indicarti un articolo del blog, un case study o una pagina servizio pertinente. Cosa vuoi automatizzare o migliorare esattamente?",
    nl: "Ja, dit soort projecten valt binnen de expertise van Kubera AI. Voor een nauwkeurige beoordeling zal het team de details verduidelijken en de beste oplossing voorstellen. Als je wilt, kan ik ook een relevant blogartikel, case study of servicepagina aanraden. Wat wil je precies automatiseren of verbeteren?",
    pt: "Sim, este tipo de projeto faz parte da area de competencia da Kubera AI. Para uma avaliacao precisa, a equipa vai clarificar os detalhes e propor a melhor solucao. Se quiser, tambem posso indicar um artigo, caso ou pagina de servico relevante. O que quer automatizar ou melhorar exatamente?",
    pl: "Tak, taki projekt miesci sie w kompetencjach Kubera AI. Aby przygotowac dokladna ocene, zespół doprecyzuje szczegoly i zaproponuje najlepsze rozwiazanie. Jesli chcesz, moge tez wskazac odpowiedni artykul, case study lub strone uslugi. Co dokladnie chcesz zautomatyzowac lub usprawnic?",
    et: "Jah, sellised projektid on Kubera AI kompetentsi sees. Tapsa hinnangu jaoks selgitab tiim detailid ja pakub parima lahenduse. Kui soovite, saan soovitada ka sobiva blogipostituse, juhtumi voi teenuse lehe. Mida soovite tapselt automatiseerida voi parendada?",
    lv: "Jā, šadi projekti ir Kubera AI kompetences jomā. Precīzai izvērtēšanai komanda precizēs detaļas un ieteiks optimālo risinājumu. Ja vēlaties, varu arī ieteikt atbilstošu rakstu, gadījumu vai pakalpojuma lapu. Ko tieši vēlaties automatizēt vai uzlabot?",
    lt: "Taip, tokie projektai patenka i Kubera AI kompetencijos sriti. Tiksliai ivertinimui komanda patikslins detales ir pasiulys tinkamiausia sprendima. Jei norite, galiu taip pat pasiulyti tinkama straipsni, case study arba paslaugos puslapi. Ką tiksliai norite automatizuoti ar patobulinti?",
    fi: "Kyllä, tällaiset projektit kuuluvat Kubera AI:n osaamisalueeseen. Tarkkaa arviota varten tiimi tarkentaa yksityiskohdat ja ehdottaa parasta ratkaisua. Jos haluat, voin myös suositella sopivaa blogiartikkelia, case studya tai palvelusivua. Mitä haluat tarkalleen automatisoida tai parantaa?",
    sv: "Ja, den typen av projekt ligger inom Kubera AI:s kompetensomrade. For en noggrann bedomning klargor teamet detaljerna och foreslar den basta losningen. Om du vill kan jag ocksa foresla en relevant bloggartikel, case study eller servicesida. Vad vill du automatisera eller forbattra exakt?",
    da: "Ja, den type projekter ligger inden for Kubera AI's kompetenceomrade. For en praecis vurdering afklarer teamet detaljerne og foreslar den bedste loesning. Hvis du vil, kan jeg ogsa pege dig mod en relevant blogartikel, case study eller serviceside. Hvad vil du helt praecist automatisere eller forbedre?",
    uk: "Так, такі проєкти входять до сфери компетенції Kubera AI. Для точної оцінки команда уточнить деталі та запропонує найкраще рішення. Якщо хочете, я також можу підказати релевантну статтю, кейс або сторінку послуги. Що саме ви хочете автоматизувати або покращити?",
  };

  return responses[locale] || responses.en;
}

export function getResponseTimeResponse(locale: AssistantLocale) {
  const responses: Record<AssistantLocale, string> = {
    en: "The Kubera AI team usually contacts clients within a few hours. If the request is urgent, we try to respond as quickly as possible.",
    ru: "Обычно команда Kubera AI связывается в течение нескольких часов. Если запрос срочный, мы стараемся ответить максимально быстро.",
    es: "Normalmente el equipo de Kubera AI contacta en unas pocas horas. Si la solicitud es urgente, intentamos responder lo antes posible.",
    de: "Das Kubera AI Team meldet sich normalerweise innerhalb weniger Stunden. Wenn die Anfrage dringend ist, versuchen wir so schnell wie moeglich zu antworten.",
    fr: "L'equipe Kubera AI contacte normalement les clients en quelques heures. Si la demande est urgente, nous essayons de repondre le plus vite possible.",
    it: "Il team Kubera AI contatta di solito i clienti entro poche ore. Se la richiesta e urgente, proviamo a rispondere il prima possibile.",
    nl: "Het Kubera AI team neemt meestal binnen een paar uur contact op. Als de aanvraag urgent is, proberen we zo snel mogelijk te reageren.",
    pt: "A equipa Kubera AI costuma contactar os clientes dentro de algumas horas. Se o pedido for urgente, tentamos responder o mais rapidamente possivel.",
    pl: "Zespol Kubera AI zwykle kontaktuje sie w ciagu kilku godzin. Jesli sprawa jest pilna, staramy sie odpowiedziec jak najszybciej.",
    et: "Kubera AI tiim votab tavaliselt uhendust paari tunni jooksul. Kui taotlus on kiireloomuline, püüame vastata esimesel voimalusel.",
    lv: "Kubera AI komanda parasti sazinās dažu stundu laikā. Ja pieprasījums ir steidzams, cenšamies atbildēt pēc iespējas ātrāk.",
    lt: "Kubera AI komanda paprastai susisiekia per kelias valandas. Jei uzklausa skubi, stengiames atsakyti kuo greiciau.",
    fi: "Kubera AI -tiimi ottaa yleensä yhteytta muutaman tunnin kuluessa. Jos pyyntö on kiireellinen, pyrimme vastaamaan mahdollisimman nopeasti.",
    sv: "Kubera AI-teamet hor vanligt av sig inom nagra timmar. Om forfragningen ar bradskande forsoker vi svara sa snabbt som mojligt.",
    da: "Kubera AI-teamet kontakter normalt kunder inden for fa timer. Hvis foresporgslen er presserende, forsoger vi at svare sa hurtigt som muligt.",
    uk: "Команда Kubera AI зазвичай зв'язується протягом кількох годин. Якщо запит терміновий, ми намагаємося відповісти якнайшвидше.",
  };

  return responses[locale] || responses.en;
}

export function buildSubmittedAssistantMessage(locale: AssistantLocale, lead: AssistantLeadDraft) {
  const name = lead.name?.trim();
  const contact = lead.email ? { type: "email" as const, value: lead.email } : lead.telegram ? { type: "Telegram" as const, value: lead.telegram } : lead.whatsapp ? { type: "WhatsApp" as const, value: lead.whatsapp } : null;
  const contactLabel = contact?.type || "contact";
  const contactValue = contact?.value ? `: ${contact.value}` : "";

  const templates: Record<AssistantLocale, string> = {
    en: `Thank you${name ? `, ${name}` : ""}, for contacting us. I have passed your request to the Kubera AI team. They will contact you via the provided ${contactLabel}${contactValue}. If you want to correct the contact or add details, just write here.`,
    ru: `Спасибо${name ? `, ${name}` : ""}, за обращение. Я передал ваш запрос команде Kubera AI. С вами свяжутся по указанному ${contactLabel}${contactValue}. Если хотите исправить контакт или добавить детали, просто напишите здесь.`,
    es: `Gracias${name ? `, ${name}` : ""}, por contactarnos. He enviado tu solicitud al equipo de Kubera AI. Se pondran en contacto contigo por ${contactLabel}${contactValue}. Si quieres corregir el contacto o anadir detalles, escribe aqui.`,
    de: `Vielen Dank${name ? `, ${name}` : ""}, fuer Ihre Anfrage. Ich habe Ihre Anfrage an das Kubera AI Team weitergeleitet. Das Team kontaktiert Sie ueber ${contactLabel}${contactValue}. Wenn Sie den Kontakt korrigieren oder Details ergaenzen moechten, schreiben Sie einfach hier.`,
    fr: `Merci${name ? `, ${name}` : ""} pour votre demande. J'ai transmis votre demande a l'equipe Kubera AI. Elle vous contactera via ${contactLabel}${contactValue}. Si vous voulez corriger le contact ou ajouter des details, ecrivez simplement ici.`,
    it: `Grazie${name ? `, ${name}` : ""} per averci contattato. Ho inviato la tua richiesta al team Kubera AI. Ti contatteranno tramite ${contactLabel}${contactValue}. Se vuoi correggere il contatto o aggiungere dettagli, scrivi qui.`,
    nl: `Dank u${name ? `, ${name}` : ""} voor uw bericht. Ik heb uw aanvraag doorgestuurd naar het Kubera AI team. Zij nemen contact met u op via ${contactLabel}${contactValue}. Wilt u het contact corrigeren of details toevoegen, schrijf dan hier.`,
    pt: `Obrigado${name ? `, ${name}` : ""} pelo contacto. Enviei o seu pedido para a equipa Kubera AI. A equipa entrara em contacto por ${contactLabel}${contactValue}. Se quiser corrigir o contacto ou acrescentar detalhes, escreva aqui.`,
    pl: `Dziekuje${name ? `, ${name}` : ""} za kontakt. Przekazalem zapytanie zespolowi Kubera AI. Skontaktuja sie z Panstwem przez ${contactLabel}${contactValue}. Jesli chcesz poprawic kontakt lub dodac szczegoly, napisz tutaj.`,
    et: `Aitah${name ? `, ${name}` : ""} poordumise eest. Edastasin teie päringu Kubera AI tiimile. Nad võtavad teiega ühendust kanali ${contactLabel}${contactValue} kaudu. Kui soovite kontakti parandada või detaile lisada, kirjutage siia.`,
    lv: `Paldies${name ? `, ${name}` : ""} par ziņojumu. Es nodevu jūsu pieprasījumu Kubera AI komandai. Ar jums sazināsies caur ${contactLabel}${contactValue}. Ja vēlaties labot kontaktu vai pievienot detaļas, rakstiet šeit.`,
    lt: `Ačiū${name ? `, ${name}` : ""} už žinutę. Perdaviau jūsų užklausą Kubera AI komandai. Jie susisieks per ${contactLabel}${contactValue}. Jei norite pataisyti kontaktą ar pridėti detalių, parašykite čia.`,
    fi: `Kiitos${name ? `, ${name}` : ""} yhteydenotosta. Välitin pyyntösi Kubera AI -tiimille. He ottavat yhteyttä kanavan ${contactLabel}${contactValue} kautta. Jos haluat korjata yhteystiedon tai lisätä tietoja, kirjoita tähän.`,
    sv: `Tack${name ? `, ${name}` : ""} for din forfragan. Jag har skickat den till Kubera AI-teamet. De kontaktar dig via ${contactLabel}${contactValue}. Om du vill korrigera kontaktuppgiften eller lagga till detaljer, skriv har.`,
    da: `Tak${name ? `, ${name}` : ""} for din henvendelse. Jeg har sendt din foresporgsel til Kubera AI-teamet. De kontakter dig via ${contactLabel}${contactValue}. Hvis du vil rette kontakten eller tilfoje detaljer, saa skriv her.`,
    uk: `Дякуємо${name ? `, ${name}` : ""} за звернення. Я передав ваш запит команді Kubera AI. З вами зв'яжуться через ${contactLabel}${contactValue}. Якщо хочете виправити контакт або додати деталі, просто напишіть тут.`,
  };

  return templates[locale];
}

export function getSupportedAssistantLocaleCodes() {
  return Object.keys(localeCopy) as AssistantLocale[];
}
