export type CommercialServiceFaqItem = {
  answer: string;
  question: string;
};

export type CommercialServicePricingItem = {
  ai: string;
  pages: string;
  price: string;
  revisions: string;
  scope: string;
  support: string;
  timeline: string;
  title: string;
  extra?: string;
  featured?: boolean;
};

export type CommercialServiceContent = {
  finalCta: {
    body: string;
    buttonLabel: string;
    fields: {
      adSpendLabel: string;
      adSpendOptions: string[];
      emailLabel: string;
      nameLabel: string;
      websiteLabel: string;
    };
    heading: string;
  };
  faq: CommercialServiceFaqItem[];
  hero: {
    eyebrow: string;
    primaryCta: string;
    secondaryCta: string;
    subtitle: string;
    trustLine: string;
    title: string;
  };
  h1: string;
  metaDescription: string;
  path: string;
  aiMechanism: {
    body: string;
    eyebrow: string;
    heading: string;
    conversation: Array<{
      role: "assistant" | "visitor";
      text: string;
    }>;
  };
  process: {
    body: string;
    eyebrow: string;
    heading: string;
    steps: Array<{
      body: string;
      icon: string;
      title: string;
    }>;
  };
  proof: {
    body: string;
    eyebrow: string;
    flowTitle: string;
    heading: string;
    scenarioLabel: string;
    scenarioTitle: string;
    visualLabels: {
      browserCta: string;
      browserTitle: string;
      bookingLabel: string;
      thankYouLabel: string;
      mobileTitle: string;
    };
  };
  pricing: {
    eyebrow: string;
    guarantee: string;
    heading: string;
    items: CommercialServicePricingItem[];
  };
  problem: {
    body: string;
    eyebrow: string;
    heading: string;
    items: Array<{
      body: string;
      icon: string;
      title: string;
    }>;
  };
  relatedServices: {
    compactLinks: Array<{
      href: string;
      title: string;
    }>;
    heading: string;
    items: Array<{
      body: string;
      href?: string;
      title: string;
    }>;
    eyebrow: string;
  };
  seoTitle: string;
  whoThisIsFor: {
    body: string;
    eyebrow: string;
    heading: string;
    chips: string[];
  };
};

export const landingPageDesignPortugalContent: CommercialServiceContent = {
  path: "/services/portugal/landing-page-design",
  seoTitle: "Design de Landing Pages em Portugal | Kubera AI",
  metaDescription:
    "Design de landing pages para empresas em Portugal, prontos para Google Ads e lançados em dias. Auditoria gratuita, layout focado e uma página construída para conversão.",
  h1: "Design de Landing Pages para Empresas em Portugal",
  hero: {
    eyebrow: "Landing Pages · Portugal",
    title: "Design de Landing Pages para Empresas em Portugal",
    subtitle:
      "Uma página focada e rápida para a sua campanha de Google Ads ou para o seu site — pronta em dias, não em meses, com um único caminho claro desde o clique até à chamada agendada.",
    primaryCta: "Pedir uma Auditoria Gratuita",
    secondaryCta: "Ver como funciona ↓",
    trustLine: "Construído em Next.js · Infraestrutura rápida e escalável · Trabalhamos com empresas em toda a Europa",
  },
  whoThisIsFor: {
    eyebrow: "Para quem é este serviço",
    heading: "Pensado para empresas portuguesas que já investem (ou estão a considerar investir) em tráfego pago",
    body:
      "Este serviço destina-se a empresas em Portugal que já utilizam o Google Ads e estão a perder contactos por causa de uma homepage genérica, ou que estão prestes a começar e querem uma página construída especificamente para esse tráfego desde o primeiro dia — em vez de enviar cliques para uma página pensada para navegação, não para conversão.",
    chips: ["Serviços locais", "Clínicas e consultórios", "Empresas B2B"],
  },
  problem: {
    eyebrow: "O problema do €/clique",
    heading: "O seu anúncio recebe o clique. O seu site perde o contacto.",
    body:
      "A maior parte do tráfego do Google Ads em Portugal ainda chega a uma homepage genérica — cheia de links de menu, lenta em telemóvel, e a dizer algo completamente diferente do que o anúncio prometeu. O visitante chegou pronto para agir. Até encontrar forma de entrar em contacto, a maioria já desistiu.",
    items: [
      {
        icon: "ad",
        title: "A promessa não bate certo",
        body: "O anúncio promete uma coisa, a homepage fala de outra — e o visitante sai em segundos.",
      },
      {
        icon: "form",
        title: "O contacto está escondido",
        body: "O formulário de contacto está a três cliques de distância, escondido num menu.",
      },
      {
        icon: "mobile",
        title: "Mobile fraco",
        body: "Em telemóvel — de onde vem a maior parte deste tráfego — a página é lenta e o botão é difícil de encontrar.",
      },
    ],
  },
  process: {
    eyebrow: "Como a página é construída",
    heading: "Uma única pessoa acompanha a sua página do primeiro rascunho ao lançamento",
    body: "Sem passagem para uma equipa júnior a meio do processo. Trabalha diretamente com a pessoa que constrói a sua página, do primeiro rascunho até ao dia do lançamento.",
    steps: [
      {
        icon: "search",
        title: "Auditoria e briefing",
        body: "Analisamos os seus anúncios e site atuais, e definimos o único objetivo que esta página precisa de cumprir.",
      },
      {
        icon: "wireframe",
        title: "Rascunho",
        body: "Um rascunho funcional completo, construído com o seu conteúdo e oferta reais — não um modelo genérico com o seu logótipo colado.",
      },
      {
        icon: "review",
        title: "Ronda de revisão",
        body: "Revê o rascunho ao vivo e pede alterações. Estão incluídas duas rondas estruturadas de revisões.",
      },
      {
        icon: "launch",
        title: "Lançamento e monitorização",
        body: "A página vai ao ar já com o rastreamento de conversões (GA4 + Google Ads) configurado.",
      },
    ],
  },
  proof: {
    eyebrow: "Como isto funciona na prática",
    heading: "Exemplo de uma landing page orientada para conversão",
    body:
      "Exemplo ilustrativo. Veja como abordaríamos uma landing page para um negócio como o seu — um exemplo de metodologia, não um resultado de cliente.",
    scenarioLabel: "Serviço local em Lisboa",
    scenarioTitle: "Google Ad → landing page focada → formulário curto de qualificação → chamada agendada",
    flowTitle: "Caminho de conversão",
    visualLabels: {
      browserTitle: "Landing Page · Website Design",
      browserCta: "Pedir uma Auditoria Gratuita",
      mobileTitle: "Mobile preview",
      bookingLabel: "Estado de booking",
      thankYouLabel: "Obrigado. A chamada foi agendada.",
    },
  },
  aiMechanism: {
    eyebrow: "Opcional: uma página que também qualifica os seus contactos",
    heading: "Uma página que responde — mesmo quando está offline",
    body:
      "Cada página que construímos pode incluir um assistente simples que recebe o visitante, faz duas ou três perguntas de qualificação, e agenda uma chamada diretamente no seu calendário — sem que precise de verificar uma caixa de entrada ou aplicação separada. Disponível como complemento opcional nos três pacotes abaixo.",
    conversation: [
      { role: "assistant", text: "Olá. Posso fazer três perguntas rápidas para perceber o que precisa?" },
      { role: "visitor", text: "Sim." },
      { role: "assistant", text: "Já tem um website ou precisa de uma página nova?" },
      { role: "visitor", text: "Preciso de uma página nova." },
      { role: "assistant", text: "Perfeito. Vou recolher os contactos e preparar o pedido de chamada." },
    ],
  },
  pricing: {
    eyebrow: "Como funcionam os preços",
    heading: "Preços aprovados",
    guarantee:
      "Se a sua página não estiver online dentro do prazo indicado após a aprovação do conteúdo, continuamos a trabalhar nela sem custo adicional até estar — o relógio não reinicia o preço.",
    items: [
      {
        title: "Design de Landing Page",
        price: "600 €–1.200 €",
        scope: "Uma landing page responsiva, formulário de contacto, CTA, análise básica, ligação de domínio, lançamento técnico",
        timeline: "10 dias úteis após aprovação do conteúdo",
        pages: "1 página",
        revisions: "2 rondas estruturadas incluídas",
        ai: "Opcional — assistente de qualificação de contactos",
        support: "Não incluído — disponível à parte",
        featured: true,
      },
      {
        title: "Design de Website Empresarial",
        price: "1.200 €–2.500 €",
        extra: "Até 2.800 € para âmbito maior",
        scope: "Site responsivo com várias páginas, formulário de contacto, análise básica, lançamento técnico",
        timeline: "Aproximadamente 14 dias úteis após aprovação do conteúdo; varia com o número de páginas",
        pages: "4–6 páginas",
        revisions: "2 rondas estruturadas incluídas",
        ai: "Opcional",
        support: "Não incluído — disponível à parte",
      },
      {
        title: "Redesign de Website",
        price: "A partir de 1.500 €",
        extra: "O preço final depende da dimensão e complexidade do site atual.",
        scope: "Redesign do site existente dentro da estrutura atual",
        timeline: "Confirmado após auditoria",
        pages: "Depende do site existente",
        revisions: "2 rondas estruturadas incluídas",
        ai: "Opcional",
        support: "Não incluído — disponível à parte",
      },
    ],
  },
  faq: [
    {
      question: "Quem exatamente vai trabalhar na minha página?",
      answer: "Uma única pessoa, do primeiro rascunho até ao lançamento.",
    },
    {
      question: "O que precisam de mim para começar?",
      answer: "O seu anúncio atual (se já estiver a decorrer), materiais de marca, e uma breve chamada para confirmar o objetivo da página.",
    },
    {
      question: "Quantas revisões estão incluídas?",
      answer: "Duas rondas estruturadas. Qualquer coisa além disso é orçamentada separadamente.",
    },
    {
      question: "O que acontece depois de a página estar no ar?",
      answer: "Tem acesso ao rastreamento de conversões desde o primeiro dia. A otimização contínua está disponível à parte.",
    },
    {
      question: "Trabalham apenas com empresas em Portugal?",
      answer: "Não — trabalhamos em toda a UE. Esta página é construída especificamente para o mercado português.",
    },
    {
      question: "Também fazem redesign do meu site atual, não só uma landing page?",
      answer: "Sim — ver Redesign de Website como serviço relacionado.",
    },
    {
      question: "E se ainda não tiver o Google Ads a decorrer?",
      answer: "A mesma página funciona bem também para tráfego orgânico e redes sociais, embora seja otimizada principalmente para tráfego pago.",
    },
    {
      question: "O assistente de IA é obrigatório?",
      answer: "Não — é um complemento opcional, não faz parte do serviço base.",
    },
    {
      question: "Qual a diferença para um Website de Negócio completo?",
      answer: "Uma landing page é uma única página focada num objetivo ou campanha específica. Para um site completo com várias páginas, ver Design de Website Empresarial.",
    },
    {
      question: "Este serviço está disponível noutros países também?",
      answer: "Sim — ver a lista completa de serviços disponíveis.",
    },
  ],
  relatedServices: {
    eyebrow: "Serviços relacionados",
    heading: "Continue a navegar pela estrutura comercial da Kubera AI",
    items: [
      {
        title: "Design de Website Empresarial (Portugal)",
        body: "Para um site completo com várias páginas em vez de uma única página de campanha.",
      },
      {
        title: "Redesign de Website (Portugal)",
        body: "Para melhorar um site existente em vez de começar de novo.",
      },
      {
        title: "Todos os Serviços",
        body: "Ver o catálogo completo de serviços Kubera.",
        href: "/services",
      },
    ],
    compactLinks: [
      { title: "AI Automation", href: "/services" },
      { title: "AI Chatbots", href: "/use-cases/ai-customer-support-ecommerce" },
      { title: "Process Automation", href: "/use-cases/n8n-ecommerce-automation" },
    ],
  },
  finalCta: {
    heading: "Pronto para ver como a sua página poderia ficar?",
    body: "Peça uma auditoria gratuita à sua página ou anúncio atual — sem compromisso, sem checklist genérica.",
    buttonLabel: "Pedir uma Auditoria Gratuita",
    fields: {
      nameLabel: "Nome",
      emailLabel: "Email profissional",
      websiteLabel: "URL do site atual",
      adSpendLabel: "Investimento mensal em publicidade",
      adSpendOptions: ["Ainda não tenho anúncios", "< 1.000 €", "1.000–5.000 €", "5.000 €+"],
    },
  },
};
