// =============================================================
// controller/controller.js — Camada de Controle (MVC)
// Conecta Model e View. Gerencia eventos e estado da aplicação.
// =============================================================

const Controller = (() => {

    // Estado interno
    let state = {
      menuOpen:      false,
      activeFilter:  "all",
      activeSection: "home",
    };
  
    // ---------------------------
    // INICIALIZAÇÃO
    // ---------------------------
    const init = () => {
      _renderAll();
      _bindEvents();
      setTimeout(() => View.hideLoader(),        500);
      setTimeout(() => View.animateSkillBars(),  900);
      console.info("[Controller] Portfólio iniciado.");
    };
  
    // ---------------------------
    // RENDERIZAÇÃO INICIAL
    // ---------------------------
    const _renderAll = () => {
      const profile   = Model.getProfile();
      const navItems  = Model.getNavItems();
      const skills    = Model.getSkills();
      const projects  = Model.getProjects();
      const filters   = Model.getProjectFilters();
      const landings  = Model.getLandingExamples();
      const pfExamples= Model.getPortfolioExamples();
      const contact   = Model.getContact();
  
      View.renderNav(navItems, profile);
      View.renderHero(profile);
      View.renderAbout(profile);
      View.renderSkills(skills);
      View.renderProjectFilters(filters, state.activeFilter);
      View.renderProjects(projects);
      View.renderLandingExamples(landings);
      View.renderPortfolioExamples(pfExamples);
      View.renderContact(contact);
      View.renderFooter(profile);
    };
  
    // ---------------------------
    // REGISTRO DE EVENTOS
    // ---------------------------
    const _bindEvents = () => {
      _bindMobileMenu();
      _bindProjectFilters();
      _bindContactForm();
      _bindScrollEvents();
      _bindScrollTop();
      _bindSmoothScroll();
      _bindSkipLink();
    };
  
    // Menu Mobile
    const _bindMobileMenu = () => {
      const btn     = View.$("#menu-toggle");
      const overlay = View.$("#menu-overlay");
  
      btn?.addEventListener("click", () => {
        state.menuOpen = !state.menuOpen;
        View.toggleMobileMenu(state.menuOpen);
      });
  
      overlay?.addEventListener("click", () => {
        state.menuOpen = false;
        View.toggleMobileMenu(false);
      });
  
      document.addEventListener("keydown", e => {
        if (e.key === "Escape" && state.menuOpen) {
          state.menuOpen = false;
          View.toggleMobileMenu(false);
        }
      });
  
      View.$$(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
          if (state.menuOpen) {
            state.menuOpen = false;
            View.toggleMobileMenu(false);
          }
        });
      });
    };
  
    // Filtros de Projetos
    const _bindProjectFilters = () => {
      const container = View.$("#project-filters");
      if (!container) return;
  
      container.addEventListener("click", e => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
  
        const filter = btn.dataset.filter;
        if (filter === state.activeFilter) return;
  
        state.activeFilter = filter;
        View.setActiveFilter(filter);
        View.renderProjects(Model.getProjectsByFilter(filter));
      });
    };
  
    // Formulário de Contato
    const _bindContactForm = () => {
      const form = View.$("#contact-form");
      if (!form) return;
  
      form.addEventListener("submit", e => {
        e.preventDefault();
  
        const name    = View.$("#form-name")?.value.trim();
        const email   = View.$("#form-email")?.value.trim();
        const message = View.$("#form-message")?.value.trim();
  
        if (!name || name.length < 2) {
          View.showFormFeedback("error", "Insira seu nome completo.");
          View.$("#form-name")?.focus();
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          View.showFormFeedback("error", "Insira um e-mail válido.");
          View.$("#form-email")?.focus();
          return;
        }
        if (!message || message.length < 10) {
          View.showFormFeedback("error", "A mensagem deve ter ao menos 10 caracteres.");
          View.$("#form-message")?.focus();
          return;
        }
  
        const btn = form.querySelector("button[type='submit']");
        if (btn) { btn.textContent = "Enviando..."; btn.disabled = true; }
  
        setTimeout(() => {
          View.showFormFeedback("success", `✓ Mensagem enviada, ${name}! Entrarei em contato em breve.`);
          View.clearContactForm();
          if (btn) { btn.textContent = "Enviar Mensagem ↗"; btn.disabled = false; }
        }, 1200);
      });
    };
  
    // Scroll: navbar, seção ativa, animações, botão top
    const _bindScrollEvents = () => {
      const sections = View.$$("section[id]");
      const navbar   = View.$("#navbar");
  
      const onScroll = () => {
        const y = window.scrollY;
        navbar?.classList.toggle("scrolled", y > 60);
        View.toggleScrollTopBtn(y > 400);
  
        sections.forEach(sec => {
          const top = sec.offsetTop - 120;
          if (y >= top && y < top + sec.offsetHeight && state.activeSection !== sec.id) {
            state.activeSection = sec.id;
            View.setActiveNavLink(sec.id);
          }
        });
  
        View.$$("[data-animate]").forEach(el => {
          if (!el.classList.contains("visible") &&
              el.getBoundingClientRect().top < window.innerHeight - 80) {
            el.classList.add("visible");
          }
        });
      };
  
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    };
  
    // Botão Scroll-to-top
    const _bindScrollTop = () => {
      View.$("#scroll-top")?.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    };
  
    // Smooth Scroll em âncoras
    const _bindSmoothScroll = () => {
      View.$$('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
          const id = link.getAttribute("href").slice(1);
          const el = document.getElementById(id);
          if (!el) return;
          e.preventDefault();
          window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        });
      });
    };
  
    // Skip Link
    const _bindSkipLink = () => {
      View.$("#skip-link")?.addEventListener("click", e => {
        e.preventDefault();
        const main = View.$("main");
        if (main) { main.setAttribute("tabindex", "-1"); main.focus(); }
      });
    };
  
    return { init };
  
  })();
  
  // Ponto de entrada
  document.addEventListener("DOMContentLoaded", () => Controller.init());