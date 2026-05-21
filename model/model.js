// =============================================================
// model/model.js — Camada de Dados (MVC)
// Fonte de verdade da aplicação. Apenas dados puros.
// Não acessa o DOM. Não manipula eventos.
// =============================================================

const Model = (() => {

    // ---------------------------
    // DADOS DO PERFIL PESSOAL
    // ---------------------------
    const profile = {
      name:      "André Luiz",
      lastName:  "Jesus Martins",
      fullName:  "André Luiz Jesus Martins",
      role:      "Desenvolvedor de Software",
      tagline:   "Estudante de Tecnologia · Full Stack em Formação · Apaixonado por Web",
      bio:       `Olá! Sou André Luiz, estudante de Desenvolvimento de Software com foco em tecnologias web modernas.\nTenho interesse em construir interfaces elegantes no front-end e arquiteturas robustas no back-end.\nBusco constantemente aprender novas tecnologias, contribuir com projetos reais e crescer como desenvolvedor.`,
      initials:  "AL",
      location:  "Brasil",
      github:    "https://github.com/andreluiz",
      linkedin:  "https://linkedin.com/in/andreluiz",
      email:     "andre.luiz@email.com",
      status:    "Disponível para oportunidades",
    };
  
    // ---------------------------
    // HABILIDADES TÉCNICAS
    // ---------------------------
    const skills = [
      { name: "HTML5",      category: "front",  level: 90, icon: "⬜" },
      { name: "CSS3",       category: "front",  level: 85, icon: "🎨" },
      { name: "JavaScript", category: "front",  level: 80, icon: "⚡" },
      { name: "React",      category: "front",  level: 65, icon: "⚛️"  },
      { name: "Node.js",    category: "back",   level: 70, icon: "🟢" },
      { name: "Python",     category: "back",   level: 72, icon: "🐍" },
      { name: "SQL",        category: "back",   level: 68, icon: "🗃️"  },
      { name: "Git",        category: "tools",  level: 80, icon: "🔀" },
      { name: "Linux",      category: "tools",  level: 65, icon: "🐧" },
      { name: "REST API",   category: "back",   level: 70, icon: "🔗" },
      { name: "TypeScript", category: "front",  level: 55, icon: "🔷" },
      { name: "Docker",     category: "tools",  level: 45, icon: "🐳" },
    ];
  
    // ---------------------------
    // PROJETOS
    // ---------------------------
    const projects = [
      {
        id: 1,
        title:       "DevTask Manager",
        description: "Aplicação de gerenciamento de tarefas para desenvolvedores, com sistema de kanban, prioridades e filtros por projeto. Interface responsiva com tema escuro.",
        tags:        ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
        category:    "web",
        github:      "https://github.com/andreluiz/devtask-manager",
        demo:        "#",
        status:      "Concluído",
        highlight:   true,
      },
      {
        id: 2,
        title:       "CodeBlog API",
        description: "API RESTful para um blog de tecnologia com autenticação JWT, CRUD de artigos, categorias e comentários. Documentação via Swagger.",
        tags:        ["Node.js", "Express", "PostgreSQL", "JWT"],
        category:    "backend",
        github:      "https://github.com/andreluiz/codeblog-api",
        demo:        "#",
        status:      "Em desenvolvimento",
        highlight:   true,
      },
      {
        id: 3,
        title:       "WeatherScope",
        description: "Dashboard de clima em tempo real consumindo a API OpenWeatherMap. Exibe previsão de 5 dias, gráficos de temperatura e geolocalização do usuário.",
        tags:        ["JavaScript", "REST API", "CSS3", "Chart.js"],
        category:    "web",
        github:      "https://github.com/andreluiz/weatherscope",
        demo:        "#",
        status:      "Concluído",
        highlight:   false,
      },
      {
        id: 4,
        title:       "PyStudy CLI",
        description: "Ferramenta de linha de comando para criação de ambientes de estudo de Python com templates de projetos e tracker de progresso.",
        tags:        ["Python", "CLI", "PyPI", "Automação"],
        category:    "tool",
        github:      "https://github.com/andreluiz/pystudy-cli",
        demo:        "#",
        status:      "Concluído",
        highlight:   false,
      },
      {
        id: 5,
        title:       "LandingForge",
        description: "Gerador de landing pages para pequenos negócios: SaaS, cursos e institucionais. Interface drag-and-drop com exportação em HTML.",
        tags:        ["React", "Node.js", "TypeScript", "CSS Modules"],
        category:    "web",
        github:      "https://github.com/andreluiz/landingforge",
        demo:        "#",
        status:      "Em desenvolvimento",
        highlight:   true,
      },
    ];
  
    // ---------------------------
    // EXEMPLOS DE LANDING PAGES
    // ---------------------------
    const landingExamples = [
      {
        id:          "saas",
        title:       "Landing Page SaaS",
        icon:        "🚀",
        description: "Página de produto para software como serviço. Hero com headline impactante, features, pricing e depoimentos.",
        elements:    ["Hero + CTA duplo", "Features em grid 3 colunas", "Pricing cards com destaque", "Depoimentos / social proof", "FAQ em accordion", "Footer completo"],
        color:       "#00d4ff",
      },
      {
        id:          "curso",
        title:       "Landing Page de Curso Online",
        icon:        "🎓",
        description: "Página de vendas para curso digital. Foco em transformação do aluno, autoridade do instrutor e urgência.",
        elements:    ["Hero com promessa de transformação", "Autoridade do instrutor", "Grade curricular / módulos", "Depoimentos de alunos", "Garantia + bônus", "CTA com contador regressivo"],
        color:       "#a78bfa",
      },
      {
        id:          "institucional",
        title:       "Landing Page Institucional",
        icon:        "🏢",
        description: "Apresentação para empresas e startups. Credibilidade, equipe, cases de sucesso e formulário de contato.",
        elements:    ["Hero com missão da empresa", "Sobre nós / história", "Equipe e liderança", "Cases e resultados", "Logos de parceiros", "Formulário de contato"],
        color:       "#34d399",
      },
    ];
  
    // ---------------------------
    // EXEMPLOS DE PORTFÓLIOS
    // ---------------------------
    const portfolioExamples = [
      { id: "dev",        icon: "💻", title: "Portfólio de Desenvolvedor", description: "Projetos técnicos, stack, GitHub stats e contato para recrutadores." },
      { id: "designer",   icon: "🎨", title: "Portfólio de Designer",      description: "Galeria visual, branding, UI kits e case studies detalhados."         },
      { id: "freelancer", icon: "🌐", title: "Portfólio de Freelancer",    description: "Serviços, pacotes de preço, depoimentos e CTA para contratação."       },
    ];
  
    // ---------------------------
    // CONTATO
    // ---------------------------
    const contact = {
      email:            profile.email,
      github:           profile.github,
      linkedin:         profile.linkedin,
      availability:     profile.status,
      responseTime:     "Geralmente respondo em até 24h",
      preferredContact: "email",
    };
  
    // ---------------------------
    // NAVEGAÇÃO
    // ---------------------------
    const navItems = [
      { id: "home",     label: "Início",       href: "#home"     },
      { id: "about",    label: "Sobre",         href: "#about"    },
      { id: "skills",   label: "Habilidades",   href: "#skills"   },
      { id: "projects", label: "Projetos",      href: "#projects" },
      { id: "landing",  label: "Landing Pages", href: "#landing"  },
      { id: "contact",  label: "Contato",       href: "#contact"  },
    ];
  
    // ---------------------------
    // FILTROS DE PROJETOS
    // ---------------------------
    const projectFilters = [
      { id: "all",     label: "Todos"       },
      { id: "web",     label: "Web"         },
      { id: "backend", label: "Back-end"    },
      { id: "tool",    label: "Ferramentas" },
    ];
  
    // ---------------------------
    // API PÚBLICA
    // ---------------------------
    return {
      getProfile:           () => ({ ...profile }),
      getSkills:            () => [...skills],
      getProjects:          () => [...projects],
      getProjectsByFilter:  (f) => f === "all" ? [...projects] : projects.filter(p => p.category === f),
      getLandingExamples:   () => [...landingExamples],
      getPortfolioExamples: () => [...portfolioExamples],
      getContact:           () => ({ ...contact }),
      getNavItems:          () => [...navItems],
      getProjectFilters:    () => [...projectFilters],
    };
  
  })();