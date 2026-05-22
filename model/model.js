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

    tagline:   "Estudante de Tecnologia · Full Stack em Formação",

    bio: `Sou estudante de Desenvolvimento de Software apaixonado por tecnologia e desenvolvimento web.
    Atualmente trabalho em projetos Full Stack utilizando Angular, Node.js, PostgreSQL e Prisma ORM.
    Tenho experiência com APIs REST, autenticação JWT, Swagger, Git e arquitetura MVC.
    Busco crescer profissionalmente na área de tecnologia e participar de projetos reais como desenvolvedor.`,

    initials:  "AL",

    location:  "São Paulo, Brasil",

    // LINKS
    github:    "https://github.com/andreemartinns",

    linkedin:  "https://www.linkedin.com/in/andre-luiz-jesus-martins",

    // CONTATO
    email:     "andreemartinns2@gmail.com",

    status:    "Disponível para oportunidades",
  };

  // ---------------------------
  // HABILIDADES TÉCNICAS
  // ---------------------------
  const skills = [

    {
      name: "HTML5",
      category: "front",
      level: 90,
      icon: "🌐"
    },

    {
      name: "CSS3",
      category: "front",
      level: 85,
      icon: "🎨"
    },

    {
      name: "JavaScript",
      category: "front",
      level: 80,
      icon: "⚡"
    },

    {
      name: "TypeScript",
      category: "front",
      level: 72,
      icon: "🔷"
    },

    {
      name: "Angular",
      category: "front",
      level: 75,
      icon: "🅰️"
    },

    {
      name: "Node.js",
      category: "back",
      level: 72,
      icon: "🟢"
    },

    {
      name: "Express",
      category: "back",
      level: 70,
      icon: "🚀"
    },

    {
      name: "PostgreSQL",
      category: "back",
      level: 68,
      icon: "🐘"
    },

    {
      name: "Prisma ORM",
      category: "back",
      level: 65,
      icon: "🔺"
    },

    {
      name: "REST API",
      category: "back",
      level: 75,
      icon: "🔗"
    },

    {
      name: "Git",
      category: "tools",
      level: 82,
      icon: "🔀"
    },

    {
      name: "GitHub",
      category: "tools",
      level: 85,
      icon: "🐙"
    },
  ];

  // ---------------------------
  // PROJETOS
  // ---------------------------
  const projects = [

    {
      id: 1,

      title: "Sistema Pizzaria",

      description:
        "Sistema web para gerenciamento de pedidos de pizzaria com interface moderna, organização de pedidos e experiência responsiva.",

      tags: [
        "HTML5",
        "CSS3",
        "JavaScript"
      ],

      category: "web",

      github:
        "https://github.com/andreemartinns/meu-projeto-pizzaria",

      demo: "#",

      status: "Concluído",

      highlight: true,
    },

    {
      id: 2,

      title: "Clínica Andreza Carvalho",

      description:
        "Sistema Full Stack para clínica médica com gerenciamento de usuários, autenticação, API REST e arquitetura MVC.",

      tags: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "JWT"
      ],

      category: "backend",

      github:
        "https://github.com/clinica-andreza-carvalho",

      demo: "#",

      status: "Concluído",

      highlight: true,
    },

    {
      id: 3,

      title: "ARCHV Rooms",

      description:
        "Plataforma de gerenciamento de salas com autenticação, painel administrativo, planos e integração entre front-end Angular e API Node.js.",

      tags: [
        "Angular",
        "Node.js",
        "PostgreSQL",
        "JWT"
      ],

      category: "web",

      github:
        "https://github.com/orgs/archv-rooms/repositories",

      demo: "#",

      status: "Em desenvolvimento",

      highlight: true,
    },

    {
      id: 4,

      title: "Riff Store",

      description:
        "Projeto de loja virtual com foco em experiência visual moderna, catálogo de produtos e estrutura escalável para e-commerce.",

      tags: [
        "HTML5",
        "CSS3",
        "JavaScript"
      ],

      category: "web",

      github:
        "https://github.com/riff-store",

      demo: "#",

      status: "Em desenvolvimento",

      highlight: false,
    },
  ];

  // ---------------------------
  // CONTATO
  // ---------------------------
  const contact = {

    email:
      profile.email,

    github:
      profile.github,

    linkedin:
      profile.linkedin,

    availability:
      profile.status,

    responseTime:
      "Geralmente respondo em até 24h",

    preferredContact:
      "email",
  };

  // ---------------------------
  // NAVEGAÇÃO
  // ---------------------------
  const navItems = [

    {
      id: "home",
      label: "Início",
      href: "#home"
    },

    {
      id: "about",
      label: "Sobre",
      href: "#about"
    },

    {
      id: "skills",
      label: "Habilidades",
      href: "#skills"
    },

    {
      id: "projects",
      label: "Projetos",
      href: "#projects"
    },

    {
      id: "contact",
      label: "Contato",
      href: "#contact"
    },
  ];

  // ---------------------------
  // FILTROS DE PROJETOS
  // ---------------------------
  const projectFilters = [

    {
      id: "all",
      label: "Todos"
    },

    {
      id: "web",
      label: "Web"
    },

    {
      id: "backend",
      label: "Back-end"
    },

    {
      id: "tool",
      label: "Ferramentas"
    },
  ];

  // ---------------------------
  // API PÚBLICA
  // ---------------------------
  return {

    getProfile:
      () => ({ ...profile }),

    getSkills:
      () => [...skills],

    getProjects:
      () => [...projects],

    getProjectsByFilter:
      (f) =>
        f === "all"
          ? [...projects]
          : projects.filter(p => p.category === f),

    getContact:
      () => ({ ...contact }),

    getNavItems:
      () => [...navItems],

    getProjectFilters:
      () => [...projectFilters],
  };

})();