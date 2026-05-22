// =============================================================
// js/app.js — Camada de Visualização (MVC)
// Renderiza dados no DOM. Não acessa o Model diretamente.
// Compartilhado entre index.html e portfolio.html.
// =============================================================

const View = (() => {

  // ---------------------------
  // UTILITÁRIOS
  // ---------------------------
  const esc = (str) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ---------------------------
  // NAVEGAÇÃO
  // ---------------------------
  const renderNav = (navItems, profile) => {
    const logo = $("#nav-logo");
    const nav = $("#nav-links");

    if (logo) {
      logo.textContent = `<${profile.initials} />`;
      logo.setAttribute(
        "aria-label",
        `Logo de ${esc(profile.fullName)}`
      );
    }

    if (!nav) return;

    nav.innerHTML = navItems.map(item => `
      <li>
        <a href="${esc(item.href)}"
           class="nav-link"
           aria-label="Ir para ${esc(item.label)}">
          ${esc(item.label)}
        </a>
      </li>
    `).join("");
  };

  // ---------------------------
  // HERO
  // ---------------------------
  const renderHero = (profile) => {

    const set = (id, val, attr) => {
      const el = $(id);

      if (!el) return;

      if (attr) {
        el[attr] = val;
      } else {
        el.textContent = val;
      }
    };

    const nameEl = $("#hero-name");

    if (nameEl) {
      nameEl.innerHTML = `
        ${esc(profile.name)}
        <span class="accent">
          ${esc(profile.lastName)}
        </span>
      `;
    }

    set("#hero-role", profile.role);
    set("#hero-tagline", profile.tagline);
    set("#hero-status", profile.status);

    const avatar = $("#hero-avatar");

    if (avatar) {
      avatar.textContent = profile.initials;
      avatar.setAttribute(
        "aria-label",
        `Avatar de ${esc(profile.fullName)}`
      );

      avatar.setAttribute("role", "img");
    }

    const ctaGH = $("#cta-github");

    if (ctaGH) {
      ctaGH.href = profile.github;
      ctaGH.setAttribute(
        "aria-label",
        "Ver perfil no GitHub"
      );
    }
  };

  // ---------------------------
  // SOBRE
  // ---------------------------
  const renderAbout = (profile) => {

    const bio = $("#about-bio");

    if (bio) {
      bio.innerHTML = profile.bio
        .split("\n")
        .filter(Boolean)
        .map(p => `<p>${esc(p.trim())}</p>`)
        .join("");
    }

    const loc = $("#about-location");
    const email = $("#about-email");

    if (loc) {
      loc.textContent = profile.location;
    }

    if (email) {
      email.textContent = profile.email;
    }
  };

  // ---------------------------
  // HABILIDADES
  // ---------------------------
  const renderSkills = (skills) => {

    const container = $("#skills-grid");

    if (!container) return;

    container.innerHTML = skills.map(skill => `
      <article class="skill-card">

        <div class="skill-header">
          <span class="skill-icon">
            ${skill.icon}
          </span>

          <span class="skill-name">
            ${esc(skill.name)}
          </span>

          <span class="skill-level-label">
            ${skill.level}%
          </span>
        </div>

        <div class="skill-bar">
          <div
            class="skill-fill"
            data-level="${skill.level}"
            style="width:0%">
          </div>
        </div>

        <span class="skill-category">
          ${esc(skill.category)}
        </span>

      </article>
    `).join("");
  };

  const animateSkillBars = () => {

    $$(".skill-fill").forEach(fill => {

      const level = fill.getAttribute("data-level");

      requestAnimationFrame(() => {

        setTimeout(() => {
          fill.style.width = level + "%";
        }, 100);

      });

    });

  };

  // ---------------------------
  // FILTROS DE PROJETOS
  // ---------------------------
  const renderProjectFilters = (
    filters,
    active = "all"
  ) => {

    const container = $("#project-filters");

    if (!container) return;

    container.innerHTML = filters.map(f => `
      <button
        class="filter-btn ${f.id === active ? "active" : ""}"
        data-filter="${esc(f.id)}">

        ${esc(f.label)}

      </button>
    `).join("");
  };

  // ---------------------------
  // PROJETOS
  // ---------------------------
  const renderProjects = (projects) => {

    const container = $("#projects-grid");

    if (!container) return;

    if (!projects.length) {

      container.innerHTML = `
        <p class="no-results">
          Nenhum projeto encontrado.
        </p>
      `;

      return;
    }

    container.innerHTML = projects.map(project => `

      <article class="project-card ${project.highlight ? "highlight" : ""}">

        ${project.highlight
          ? `<span class="badge">⭐ Destaque</span>`
          : ""
        }

        <div class="project-card-header">

          <h3 class="project-title">
            ${esc(project.title)}
          </h3>

          <span class="project-status
            ${project.status === "Concluído"
              ? "status-done"
              : "status-wip"
            }">

            ${project.status}

          </span>

        </div>

        <p class="project-desc">
          ${esc(project.description)}
        </p>

        <div class="project-tags">

          ${project.tags.map(tag => `
            <span class="tag">
              ${esc(tag)}
            </span>
          `).join("")}

        </div>

        <div class="project-actions">

          <a
            href="${esc(project.github)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-project">

            ⌥ Código

          </a>

          <a
            href="${esc(project.demo)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-project btn-demo">

            ↗ Demo

          </a>

        </div>

      </article>

    `).join("");
  };

  // ---------------------------
  // CONTATO
  // ---------------------------
  const renderContact = (contact) => {

    const setHref = (
      id,
      href,
      label,
      text
    ) => {

      const el = $(id);

      if (!el) return;

      el.href = href;

      if (label) {
        el.setAttribute("aria-label", label);
      }

      if (text) {
        el.textContent = text;
      }
    };

    setHref(
      "#contact-email",
      `mailto:${contact.email}`,
      `Enviar e-mail para ${contact.email}`,
      contact.email
    );

    setHref(
      "#contact-github",
      contact.github,
      "GitHub"
    );

    setHref(
      "#contact-linkedin",
      contact.linkedin,
      "LinkedIn"
    );

    setHref(
      "#contact-email-btn",
      `mailto:${contact.email}`,
      "E-mail"
    );

    setHref(
      "#contact-github-btn",
      contact.github,
      "GitHub"
    );

    setHref(
      "#contact-linkedin-btn",
      contact.linkedin,
      "LinkedIn"
    );

    const avail = $("#contact-availability");
    const response = $("#contact-response");

    if (avail) {
      avail.textContent = contact.availability;
    }

    if (response) {
      response.textContent = contact.responseTime;
    }
  };

  // ---------------------------
  // FOOTER
  // ---------------------------
  const renderFooter = (profile) => {

    const name = $("#footer-name");
    const year = $("#footer-year");

    if (name) {
      name.textContent = profile.fullName;
    }

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  };

  // ---------------------------
  // FEEDBACK DO FORMULÁRIO
  // ---------------------------
  const showFormFeedback = (
    type,
    message
  ) => {

    const el = $("#form-feedback");

    if (!el) return;

    el.textContent = message;
    el.className = `form-feedback ${type}`;

    el.removeAttribute("hidden");

    setTimeout(() => {

      el.setAttribute("hidden", "");
      el.textContent = "";
      el.className = "form-feedback";

    }, 4000);
  };

  const clearContactForm = () => {
    $("#contact-form")?.reset();
  };

  // ---------------------------
  // MENU MOBILE
  // ---------------------------
  const toggleMobileMenu = (isOpen) => {

    const menu = $("#nav-links");
    const btn = $("#menu-toggle");
    const overlay = $("#menu-overlay");

    if (!menu || !btn) return;

    menu.classList.toggle("open", isOpen);

    btn.classList.toggle("active", isOpen);

    btn.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.style.overflow = isOpen
      ? "hidden"
      : "";

    overlay?.classList.toggle(
      "visible",
      isOpen
    );
  };

  // ---------------------------
  // LINK ATIVO
  // ---------------------------
  const setActiveNavLink = (sectionId) => {

    $$(".nav-link").forEach(link => {

      const active =
        link.getAttribute("href") === `#${sectionId}`;

      link.classList.toggle("active", active);
    });
  };

  // ---------------------------
  // FILTRO ATIVO
  // ---------------------------
  const setActiveFilter = (filterId) => {

    $$(".filter-btn").forEach(btn => {

      const active =
        btn.dataset.filter === filterId;

      btn.classList.toggle("active", active);
    });
  };

  // ---------------------------
  // SCROLL TOP
  // ---------------------------
  const toggleScrollTopBtn = (visible) => {

    $("#scroll-top")
      ?.classList.toggle("visible", visible);
  };

  // ---------------------------
  // LOADER
  // ---------------------------
  const hideLoader = () => {

    const loader = $("#page-loader");

    if (!loader) return;

    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.remove();
    }, 600);
  };

  // ---------------------------
  // API PÚBLICA
  // ---------------------------
  return {
    $,
    $$,

    renderNav,
    renderHero,
    renderAbout,

    renderSkills,
    animateSkillBars,

    renderProjectFilters,
    renderProjects,

    renderContact,
    renderFooter,

    showFormFeedback,
    clearContactForm,

    toggleMobileMenu,

    setActiveNavLink,
    setActiveFilter,

    toggleScrollTopBtn,
    hideLoader,
  };

})();