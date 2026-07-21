export type LandingPageDesignLocale = "en" | "pt-PT";

export type LandingPageDesignCountryPageData = {
  canonical: string;
  breadcrumb: string[];
  faq: Array<{ answer: string; question: string }>;
  finalCta: {
    body: string;
    buttonLabel: string;
    fields: {
      emailLabel: string;
      nameLabel: string;
      needLabel: string;
      needOptions: string[];
      successMessage: string;
      websiteLabel: string;
    };
    heading: string;
  };
  h1: string;
  hero: {
    eyebrow: string;
    primaryCta: string;
    secondaryCta: string;
    subtitle: string;
    trustLine: string;
  };
  heroVisual: {
    adMessage: string;
    browserAdLabel: string;
    browserCta: string;
    browserLeadLabel: string;
    browserTitle: string;
    confirmState: string;
    mobileBadge: string;
    mobilePreviewLabel: string;
    routeLine: string;
    trustLabel: string;
  };
  languageSwitcher: {
    current: "en" | "pt";
    enHref: string;
    ptHref: string;
  };
  locale: LandingPageDesignLocale;
  metaDescription: string;
  path: string;
  pricing: {
    body: string;
    cards: Array<{
      ai: string;
      extra?: string;
      pages: string;
      price: string;
      revisions: string;
      scope: string;
      support: string;
      timeline: string;
      title: string;
      featured?: boolean;
    }>;
    heading: string;
    eyebrow: string;
    guarantee: string;
  };
  process: {
    body: string;
    heading: string;
    eyebrow: string;
    steps: Array<{ body: string; icon: string; title: string }>;
  };
  proof: {
    body: string;
    heading: string;
    eyebrow: string;
    scenarioLabel: string;
    scenarioTitle: string;
    flowTitle: string;
    visualLabels: {
      adMessage: string;
      illustrativeExample: string;
      landingPagePreview: string;
      shortForm: string;
      bookingConfirmed: string;
      mobilePreview: string;
      trustProof: string;
      tracking: string;
    };
  };
  relatedServices: {
    eyebrow: string;
    heading: string;
    items: Array<{ body: string; href?: string; title: string }>;
    compactLinks: Array<{ href: string; title: string }>;
  };
  seoTitle: string;
  whoThisIsFor: {
    body: string;
    chips: string[];
    eyebrow: string;
    heading: string;
  };
  sectionLabels: {
    ai: string;
    faq: string;
    pricing: string;
  };
  aiMechanism: {
    body: string;
    eyebrow: string;
    heading: string;
    conversation: Array<{ role: "assistant" | "visitor"; text: string }>;
  };
};

export type LandingPageDesignHubCountryCard = {
  eyebrow: string;
  h1: string;
  href: {
    en: string;
    pt: string;
  };
  body: string;
};

export type LandingPageDesignHubPageData = {
  breadcrumb: string[];
  canonical: string;
  countryCards: LandingPageDesignHubCountryCard[];
  h1: string;
  hero: {
    eyebrow: string;
    primaryCta: string;
    secondaryCta: string;
    subtitle: string;
  };
  languageSwitcher: {
    current: "en" | "pt";
    enHref: string;
    ptHref: string;
  };
  locale: LandingPageDesignLocale;
  metaDescription: string;
  path: string;
  sections: Array<{
    body: string;
    heading: string;
    eyebrow: string;
  }>;
  seoTitle: string;
};

export const landingPageDesignCountryPages = {
  en: {
    canonical: "https://www.kubera-automation.com/services/portugal/landing-page-design",
    breadcrumb: ["Home", "Services", "Landing Page Design", "Portugal"],
    faq: [
      {
        question: "Who builds the page?",
        answer: "One person owns the work from the first brief through launch.",
      },
      {
        question: "What do you need from us to start?",
        answer: "Your current ad or campaign context, brand assets, and a short call to confirm the goal of the page.",
      },
      {
        question: "How many revisions are included?",
        answer: "Two structured rounds of revisions are included in every package.",
      },
      {
        question: "Do you include tracking?",
        answer: "Yes. GA4 and Google Ads conversion tracking are set up before launch.",
      },
      {
        question: "Can this work for organic or social traffic too?",
        answer: "Yes. The architecture works for paid, organic, and social traffic, although it is optimised for paid campaigns.",
      },
      {
        question: "Do you also redesign existing sites?",
        answer: "Yes. A full redesign package is available as a related service.",
      },
      {
        question: "Is the AI assistant required?",
        answer: "No. It is an optional add-on for lead qualification and booking support.",
      },
      {
        question: "Will the form book a call automatically?",
        answer: "No. The current flow submits the request and confirms receipt; it does not auto-book a call.",
      },
      {
        question: "Do you work only with Portugal?",
        answer: "No. The page is for Portugal, but Kubera AI works with companies across Europe.",
      },
      {
        question: "Can I use this page as a template for other markets later?",
        answer: "Yes. The architecture is structured so future country pages can be added without redesigning the hub.",
      },
    ],
    finalCta: {
      body: "Request a free audit of your current page or ad campaign. We will review the structure and tell you what needs to change.",
      buttonLabel: "Request a Free Audit",
      fields: {
        emailLabel: "Professional email",
        nameLabel: "Name",
        needLabel: "What do you need?",
        needOptions: [
          "A new landing page",
          "Redesign of an existing landing page",
          "Landing page with AI lead qualification",
          "I’m not sure yet",
        ],
        successMessage: "Thank you — your request has been received.",
        websiteLabel: "Current website URL",
      },
      heading: "Want to see how your page could look?",
    },
    h1: "Landing Page Design for Businesses in Portugal",
    hero: {
      eyebrow: "Commercial service · Portugal",
      primaryCta: "Request a Free Audit",
      secondaryCta: "See the process",
      subtitle:
        "A focused landing page for paid, organic, or social traffic. Built to turn clicks into qualified leads with one clear path, one primary CTA, and a layout that works on mobile first.",
      trustLine: "Built in Next.js · Fast delivery · EU-based delivery model",
    },
    heroVisual: {
      adMessage: "Google Ads → Landing Page → Lead",
      browserAdLabel: "Paid traffic",
      browserCta: "Request a Free Audit",
      browserLeadLabel: "Short form · trust proof · booking state",
      browserTitle: "Landing page preview",
      confirmState: "Thank you — your request has been received.",
      mobileBadge: "Mobile first",
      mobilePreviewLabel: "Mobile preview",
      routeLine: "Google Ads → Landing Page → Lead",
      trustLabel: "GA4 + Ads tracking ready",
    },
    languageSwitcher: {
      current: "en",
      enHref: "/services/portugal/landing-page-design",
      ptHref: "/pt/services/portugal/landing-page-design",
    },
    locale: "en",
    metaDescription:
      "Landing page design for businesses in Portugal. A conversion-focused page built for paid traffic, organic traffic, and social campaigns, with local SEO and clear lead capture.",
    path: "/services/portugal/landing-page-design",
    pricing: {
      body: "Approved pricing stays unchanged.",
      cards: [
        {
          title: "Landing Page Design",
          price: "€600–€1,200",
          scope: "One responsive landing page with CTA, form, tracking, and technical launch.",
          timeline: "10 business days after content approval",
          pages: "1 page",
          revisions: "2 structured revision rounds included",
          ai: "Optional lead qualification assistant",
          support: "Not included, available separately",
          featured: true,
        },
        {
          title: "Business Website Design",
          price: "€1,200–€2,500",
          extra: "Up to €2,800 for larger scope",
          scope: "Multi-page business site with form, tracking, and technical launch.",
          timeline: "About 14 business days after content approval",
          pages: "4–6 pages",
          revisions: "2 structured revision rounds included",
          ai: "Optional",
          support: "Not included, available separately",
        },
        {
          title: "Website Redesign",
          price: "From €1,500",
          scope: "Redesign of an existing website inside the current structure.",
          timeline: "Confirmed after audit",
          pages: "Depends on the existing site",
          revisions: "2 structured revision rounds included",
          ai: "Optional",
          support: "Not included, available separately",
        },
      ],
      guarantee: "If the approved page is not live by the agreed launch window, we keep working until it is live at no extra cost.",
      heading: "Approved pricing",
      eyebrow: "Pricing",
    },
    process: {
      body: "One person owns the work from the first brief to the live page.",
      heading: "A simple process that stays focused on conversion",
      eyebrow: "Process",
      steps: [
        {
          icon: "01",
          title: "Audit and brief",
          body: "We review the current ad, page, and offer so the landing page has one clear job.",
        },
        {
          icon: "02",
          title: "Design and build",
          body: "We create the page structure, copy blocks, form, and visual mockup in a clean implementation.",
        },
        {
          icon: "03",
          title: "Review and refine",
          body: "You review the live draft and request changes through a structured revision round.",
        },
        {
          icon: "04",
          title: "Launch and tracking",
          body: "The page goes live with GA4 and Google Ads conversion tracking already in place.",
        },
      ],
    },
    proof: {
      body: "The demonstration shows the page architecture rather than a fake client result.",
      heading: "Illustrative example",
      eyebrow: "Demonstration",
      scenarioLabel: "Local service business",
      scenarioTitle: "Paid ad -> matching landing page -> short form -> confirmation",
      flowTitle: "Conversion flow",
      visualLabels: {
        illustrativeExample: "ILLUSTRATIVE EXAMPLE",
        landingPagePreview: "Landing page preview",
        shortForm: "Short form",
        bookingConfirmed: "Booking confirmed state",
        mobilePreview: "MOBILE PREVIEW",
        adMessage: "Google Ads message",
        trustProof: "Trust proof",
        tracking: "Tracking ready",
      },
    },
    relatedServices: {
      eyebrow: "Related links",
      heading: "Continue through the service structure",
      items: [
        {
          title: "Landing Page Design Hub",
          body: "Choose the country you need from the next step in the architecture.",
          href: "/services/landing-page-design",
        },
        {
          title: "Services",
          body: "Return to the main commercial service catalog.",
          href: "/services",
        },
        {
          title: "Soluções de Automação de IA",
          body: "Browse the wider solutions hub by market and industry.",
          href: "/en/solutions",
        },
        {
          title: "AI Chatbots",
          body: "See a real use case for chat-based lead qualification.",
          href: "/use-cases/ai-customer-support-ecommerce",
        },
      ],
      compactLinks: [
        { title: "Landing Page Design Hub", href: "/services/landing-page-design" },
        { title: "Services", href: "/services" },
        { title: "AI Chatbots", href: "/use-cases/ai-customer-support-ecommerce" },
        { title: "Process Automation", href: "/use-cases/n8n-ecommerce-automation" },
      ],
    },
    seoTitle: "Landing Page Design for Businesses in Portugal | Kubera AI",
    whoThisIsFor: {
      eyebrow: "Who this is for",
      heading: "Built for businesses that need a page that actually matches the campaign",
      body:
        "This service is for businesses that already run paid traffic or want a dedicated landing page for a campaign, instead of sending clicks to a generic homepage.",
      chips: ["Local service businesses", "B2B companies", "Clinics and consultancies"],
    },
    sectionLabels: {
      ai: "AI Assistant",
      faq: "FAQ",
      pricing: "Pricing",
    },
    aiMechanism: {
      eyebrow: "Optional qualification layer",
      heading: "A landing page that can also qualify leads",
      body:
        "If you want it, the page can include a small assistant that asks a few qualification questions and routes the request forward without adding noise to the main page.",
      conversation: [
        { role: "assistant", text: "Hi. I can ask three quick questions to understand what you need." },
        { role: "visitor", text: "Sure." },
        { role: "assistant", text: "Do you need a new landing page or a redesign?" },
        { role: "visitor", text: "A new landing page." },
        { role: "assistant", text: "Great. I’ll prepare the request for review." },
      ],
    },
  },
  pt: {
    canonical: "https://www.kubera-automation.com/pt/services/portugal/landing-page-design",
    breadcrumb: ["Início", "Serviços", "Design de Landing Pages", "Portugal"],
    faq: [
      {
        question: "Quem constrói a página?",
        answer: "Uma pessoa acompanha o trabalho desde o briefing inicial até ao lançamento.",
      },
      {
        question: "O que precisam para começar?",
        answer: "Contexto da campanha, materiais de marca e uma chamada curta para confirmar o objetivo da página.",
      },
      {
        question: "Quantas rondas de revisão estão incluídas?",
        answer: "Duas rondas estruturadas de revisão estão incluídas em todos os pacotes.",
      },
      {
        question: "O tracking está incluído?",
        answer: "Sim. GA4 e o tracking de conversões do Google Ads são configurados antes do lançamento.",
      },
      {
        question: "A página também funciona para tráfego orgânico ou social?",
        answer: "Sim. A arquitetura funciona para tráfego pago, orgânico e social, embora seja optimizada para campanhas pagas.",
      },
      {
        question: "Também fazem redesign de websites existentes?",
        answer: "Sim. Existe um pacote específico para redesign.",
      },
      {
        question: "O assistente de IA é obrigatório?",
        answer: "Não. É um complemento opcional para qualificação de contactos e apoio à marcação.",
      },
      {
        question: "A forma marca uma chamada automaticamente?",
        answer: "Não. O fluxo actual envia o pedido e confirma a recepção; não agenda a chamada automaticamente.",
      },
      {
        question: "Trabalham apenas com Portugal?",
        answer: "Não. Esta página é para Portugal, mas a Kubera AI trabalha com empresas em toda a Europa.",
      },
      {
        question: "Posso usar esta estrutura como base para outros mercados?",
        answer: "Sim. A arquitectura foi preparada para adicionar novos países sem refazer o hub.",
      },
    ],
    finalCta: {
      body: "Peça uma auditoria gratuita à sua página ou campanha actual. Iremos rever a estrutura e indicar o que precisa de mudar.",
      buttonLabel: "Pedir uma Auditoria Gratuita",
      fields: {
        emailLabel: "Email profissional",
        nameLabel: "Nome",
        needLabel: "De que precisa?",
        needOptions: [
          "Uma nova landing page",
          "Redesign de uma landing page existente",
          "Landing page com qualificação de contactos por IA",
          "Ainda não tenho a certeza",
        ],
        successMessage: "Obrigado — o seu pedido foi recebido.",
        websiteLabel: "URL do site actual",
      },
      heading: "Quer ver como a sua página pode ficar?",
    },
    h1: "Design de Landing Pages para Empresas em Portugal",
    hero: {
      eyebrow: "Serviço comercial · Portugal",
      primaryCta: "Pedir uma Auditoria Gratuita",
      secondaryCta: "Ver o processo",
      subtitle:
        "Uma landing page focada para tráfego pago, orgânico ou social. Criada para transformar cliques em contactos qualificados com um caminho claro, uma CTA principal e uma experiência mobile-first.",
      trustLine: "Construído em Next.js · Entrega rápida · Modelo de entrega baseado na UE",
    },
    heroVisual: {
      adMessage: "Google Ads → Landing Page → Lead",
      browserAdLabel: "Tráfego pago",
      browserCta: "Pedir uma Auditoria Gratuita",
      browserLeadLabel: "Formulário curto · prova de confiança · estado de confirmação",
      browserTitle: "Pré-visualização da landing page",
      confirmState: "Obrigado — o seu pedido foi recebido.",
      mobileBadge: "Mobile first",
      mobilePreviewLabel: "PRÉ-VISUALIZAÇÃO EM TELEMÓVEL",
      routeLine: "Google Ads → Landing Page → Lead",
      trustLabel: "Tracking GA4 + Ads pronto",
    },
    languageSwitcher: {
      current: "pt",
      enHref: "/services/portugal/landing-page-design",
      ptHref: "/pt/services/portugal/landing-page-design",
    },
    locale: "pt-PT",
    metaDescription:
      "Design de landing pages para empresas em Portugal. Páginas focadas em conversão para tráfego pago, orgânico e social, com SEO local e captação clara de contactos.",
    path: "/pt/services/portugal/landing-page-design",
    pricing: {
      body: "Os preços aprovados mantêm-se inalterados.",
      cards: [
        {
          title: "Design de Landing Page",
          price: "600 €–1.200 €",
          scope: "Uma landing page responsiva com CTA, formulário, tracking e lançamento técnico.",
          timeline: "10 dias úteis após aprovação do conteúdo",
          pages: "1 página",
          revisions: "2 rondas estruturadas de revisão incluídas",
          ai: "Assistente opcional para qualificação de contactos",
          support: "Não incluído, disponível em separado",
          featured: true,
        },
        {
          title: "Design de Website Empresarial",
          price: "1.200 €–2.500 €",
          extra: "Até 2.800 € para âmbito maior",
          scope: "Website multi-página com formulário, tracking e lançamento técnico.",
          timeline: "Cerca de 14 dias úteis após aprovação do conteúdo",
          pages: "4–6 páginas",
          revisions: "2 rondas estruturadas de revisão incluídas",
          ai: "Opcional",
          support: "Não incluído, disponível em separado",
        },
        {
          title: "Redesign de Website",
          price: "A partir de 1.500 €",
          scope: "Redesign de um website existente dentro da estrutura actual.",
          timeline: "Confirmado após auditoria",
          pages: "Depende do site existente",
          revisions: "2 rondas estruturadas de revisão incluídas",
          ai: "Opcional",
          support: "Não incluído, disponível em separado",
        },
      ],
      guarantee: "Se a página aprovada não estiver online dentro da janela combinada, continuamos a trabalhar nela sem custo adicional até estar publicada.",
      heading: "Preços aprovados",
      eyebrow: "Preços",
    },
    process: {
      body: "Uma pessoa acompanha o trabalho desde o briefing inicial até à página online.",
      heading: "Um processo simples e focado na conversão",
      eyebrow: "Processo",
      steps: [
        {
          icon: "01",
          title: "Auditoria e briefing",
          body: "Revertemos a campanha, a página actual e a oferta para que a landing page tenha uma função clara.",
        },
        {
          icon: "02",
          title: "Design e implementação",
          body: "Criamos a estrutura, os blocos de texto, o formulário e o mockup visual numa implementação limpa.",
        },
        {
          icon: "03",
          title: "Revisão e afinação",
          body: "Revê a versão ao vivo e pede alterações numa ronda estruturada de revisão.",
        },
        {
          icon: "04",
          title: "Lançamento e tracking",
          body: "A página fica online com GA4 e tracking de conversões do Google Ads já configurados.",
        },
      ],
    },
    proof: {
      body: "A demonstração mostra a arquitectura da página e não um resultado inventado de cliente.",
      heading: "Exemplo ilustrativo",
      eyebrow: "Demonstração",
      scenarioLabel: "Negócio local",
      scenarioTitle: "Anúncio pago -> landing page alinhada -> formulário curto -> confirmação",
      flowTitle: "Fluxo de conversão",
      visualLabels: {
        illustrativeExample: "EXEMPLO ILUSTRATIVO",
        landingPagePreview: "Pré-visualização da landing page",
        shortForm: "Formulário curto",
        bookingConfirmed: "Estado de confirmação",
        mobilePreview: "PRÉ-VISUALIZAÇÃO EM TELEMÓVEL",
        adMessage: "Mensagem do Google Ads",
        trustProof: "Prova de confiança",
        tracking: "Tracking pronto",
      },
    },
    relatedServices: {
      eyebrow: "Ligações relacionadas",
      heading: "Continue pela estrutura comercial",
      items: [
        {
          title: "Hub de Design de Landing Pages",
          body: "Escolha o país de que precisa no passo seguinte da arquitectura.",
          href: "/pt/services/landing-page-design",
        },
        {
          title: "Serviços",
          body: "Voltar ao catálogo principal de serviços comerciais.",
          href: "/services",
        },
        {
          title: "Soluções de Automação de IA",
          body: "Explorar o hub mais amplo por mercado e indústria.",
          href: "/en/solutions",
        },
        {
          title: "Chatbots de IA",
          body: "Ver um caso real de qualificação de contactos por chat.",
          href: "/use-cases/ai-customer-support-ecommerce",
        },
      ],
      compactLinks: [
        { title: "Hub de Design de Landing Pages", href: "/pt/services/landing-page-design" },
        { title: "Serviços", href: "/services" },
        { title: "Chatbots de IA", href: "/use-cases/ai-customer-support-ecommerce" },
        { title: "Automação de Processos", href: "/use-cases/n8n-ecommerce-automation" },
      ],
    },
    seoTitle: "Design de Landing Pages para Empresas em Portugal | Kubera AI",
    whoThisIsFor: {
      eyebrow: "Para quem é este serviço",
      heading: "Criado para empresas que precisam de uma página alinhada com a campanha",
      body:
        "Este serviço é para empresas que já usam tráfego pago ou querem uma landing page dedicada a uma campanha, em vez de enviarem cliques para uma homepage genérica.",
      chips: ["Serviços locais", "Empresas B2B", "Clínicas e consultórios"],
    },
    sectionLabels: {
      ai: "Assistente de IA",
      faq: "FAQ",
      pricing: "Preços",
    },
    aiMechanism: {
      eyebrow: "Camada opcional de qualificação",
      heading: "Uma landing page que também pode qualificar contactos",
      body:
        "Se quiser, a página pode incluir um pequeno assistente que faz algumas perguntas de qualificação e encaminha o pedido sem adicionar ruído à página principal.",
      conversation: [
        { role: "assistant", text: "Olá. Posso fazer três perguntas rápidas para perceber o que precisa?" },
        { role: "visitor", text: "Claro." },
        { role: "assistant", text: "Precisa de uma nova landing page ou de um redesign?" },
        { role: "visitor", text: "Preciso de uma nova landing page." },
        { role: "assistant", text: "Perfeito. Vou preparar o pedido para revisão." },
      ],
    },
  },
} satisfies Record<"en" | "pt", LandingPageDesignCountryPageData>;

export const landingPageDesignHubPages = {
  en: {
    canonical: "https://www.kubera-automation.com/services/landing-page-design",
    breadcrumb: ["Home", "Services", "Landing Page Design"],
    countryCards: [
      {
        eyebrow: "Active country",
        h1: "Portugal",
        href: {
          en: "/services/portugal/landing-page-design",
          pt: "/pt/services/portugal/landing-page-design",
        },
        body: "Open the localized landing page for businesses in Portugal.",
      },
    ],
    h1: "Landing Page Design Services Across Europe",
    hero: {
      eyebrow: "Commercial hub",
      primaryCta: "Open Portugal page",
      secondaryCta: "Back to Services",
      subtitle:
        "Kubera creates landing pages for paid, organic, and social traffic. Each market gets its own content, SEO, and conversion structure, so the page speaks to the market instead of relying on a generic template.",
    },
    languageSwitcher: {
      current: "en",
      enHref: "/services/landing-page-design",
      ptHref: "/pt/services/landing-page-design",
    },
    locale: "en",
    metaDescription:
      "Landing Page Design hub for Kubera AI. Choose the market page you need and review the structure behind the commercial landing page series.",
    path: "/services/landing-page-design",
    sections: [
      {
        eyebrow: "Why this hub exists",
        heading: "One architecture, many country pages",
        body:
          "The hub keeps the commercial service series organised. The page structure stays shared, while each country gets its own localized content, metadata, and SEO.",
      },
      {
        eyebrow: "How it works",
        heading: "Pick the market, then the localized page",
        body:
          "Future countries can be added from data without rebuilding the architecture. For now, only Portugal is live because the rest of the market pages are not published yet.",
      },
    ],
    seoTitle: "Landing Page Design Services Across Europe | Kubera AI",
  },
  pt: {
    canonical: "https://www.kubera-automation.com/pt/services/landing-page-design",
    breadcrumb: ["Início", "Serviços", "Design de Landing Pages"],
    countryCards: [
      {
        eyebrow: "País activo",
        h1: "Portugal",
        href: {
          en: "/services/portugal/landing-page-design",
          pt: "/pt/services/portugal/landing-page-design",
        },
        body: "Abrir a landing page localizada para empresas em Portugal.",
      },
    ],
    h1: "Serviços de Design de Landing Pages na Europa",
    hero: {
      eyebrow: "Hub comercial",
      primaryCta: "Abrir a página de Portugal",
      secondaryCta: "Voltar aos Serviços",
      subtitle:
        "A Kubera cria landing pages para tráfego pago, orgânico e social. Cada mercado recebe o seu próprio conteúdo, SEO e estrutura de conversão, para que a página fale com o mercado em vez de depender de um template genérico.",
    },
    languageSwitcher: {
      current: "pt",
      enHref: "/services/landing-page-design",
      ptHref: "/pt/services/landing-page-design",
    },
    locale: "pt-PT",
    metaDescription:
      "Hub de Design de Landing Pages da Kubera AI. Escolha o país de que precisa e reveja a estrutura por trás da série de páginas comerciais.",
    path: "/pt/services/landing-page-design",
    sections: [
      {
        eyebrow: "Porque existe este hub",
        heading: "Uma arquitectura, muitas páginas por país",
        body:
          "O hub mantém a série de páginas comerciais organizada. A estrutura da página mantém-se partilhada, enquanto cada país recebe o seu próprio conteúdo localizado, metadata e SEO.",
      },
      {
        eyebrow: "Como funciona",
        heading: "Escolha o mercado e depois a página localizada",
        body:
          "Os países futuros podem ser adicionados a partir de dados, sem reconstruir a arquitectura. Para já, apenas Portugal está activo porque as restantes páginas ainda não foram publicadas.",
      },
    ],
    seoTitle: "Serviços de Design de Landing Pages na Europa | Kubera AI",
  },
} satisfies Record<"en" | "pt", LandingPageDesignHubPageData>;

export const landingPageDesignCountryRoutePairs = {
  en: "/services/portugal/landing-page-design",
  pt: "/pt/services/portugal/landing-page-design",
} as const;
