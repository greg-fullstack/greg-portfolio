(function () {
  'use strict';

  /* ========================================================================
     Content
     ======================================================================== */
  var SKILLS = [
    ['Angular', 0], ['TypeScript', 0], ['JavaScript', 0], ['RxJS', 0], ['NgRx / Redux', 0],
    ['Angular Material', 0], ['HTML', 0], ['CSS / SCSS', 0], ['Bootstrap', 0], ['Tailwind', 0],
    ['jQuery', 0], ['Scully', 0],
    ['Java', 1], ['C#', 1], ['Node.js', 1], ['Nest.js', 1], ['SQL', 1], ['MySQL', 1],
    ['PostgreSQL', 1], ['MongoDB', 1], ['TypeORM', 1], ['Strapi', 1],
    ['Git', 2], ['GitHub', 2], ['BitBucket', 2], ['Azure', 2], ['CI/CD', 2], ['Webpack', 2],
    ['Gulp', 2], ['Storybook', 2], ['Figma', 2], ['Adobe XD', 2],
    ['Unit Testing (Karma, Jasmine, Vitest)', 3],
    ['Claude Code', 4], ['AI Skills', 4], ['CLAUDE.md / AGENTS.md', 4], ['MCP (Model Context Protocol)', 4],
    ['AI Plugins', 4]
  ];

  var DOTS = ['var(--accent)', 'var(--accent-soft)', 'var(--text-faint)', 'var(--text-muted)', '#d8bd7a'];

  var PROJECTS = [
    {
      key: 'iacpos-booking', tab: 0, tag: 'Ticket Booking',
      title: 'IACPOS — Ticket Booking Platform',
      descr: { en: 'Event and ticket purchasing flows for museums, theaters and cultural institutions.', es: 'Flujos de compra de entradas para museos, teatros e instituciones culturales.' },
      stack: ['Angular', 'NgRx', 'Angular Material', 'Bootstrap'],
      img: 'assets/portfolio/iacpos-booking.png',
      url: 'https://tickamore.webventa.iacpospre.com/tickamore'
    },
    {
      key: 'iacpos-saas', tab: 1, tag: 'SaaS Admin',
      title: 'IACPOS — SaaS Admin Panel',
      descr: { en: 'Company and event configuration and administration tool for ticketing operators.', es: 'Herramienta de configuración y administración de empresas y eventos para operadores de ticketing.' },
      stack: ['Angular', 'NgRx', 'Angular Material'],
      img: 'assets/portfolio/iacpos-saas.png',
      url: 'https://tickamore.emporia.iacpospre.com/emporia/login'
    },
    {
      key: 'gcore-calc', tab: 2, tag: 'Cloud Tools',
      title: 'G-Core Cloud',
      descr: { en: 'Cloud products calculator with complex pricing logic and multi-step interactions.', es: 'Calculadora de productos cloud con lógica de precios compleja e interacciones multi-paso.' },
      stack: ['Angular', 'RxJS', 'Strapi', 'Scully', 'Nest.js', 'PostgreSQL'],
      img: 'assets/portfolio/gcore-calc.png',
      url: 'https://gcore.com/pricing/ai'
    }
  ];

  // Index 0 = "All" (no file — rendered as a star), then one icon per
  // category/tab in the same order as COPY[lang].cats / .tabs (minus "All").
  var CATEGORY_ICONS = [null, 'frontend.svg', 'backend.svg', 'tools-devops.svg', 'testing.svg', 'ai-assisted-dev.svg'];
  var TAB_ICONS = [null, 'ticket-booking.svg', 'saas-admin.svg', 'cloud-tools.svg'];

  function buildChip(label, iconFile) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', label);
    btn.title = label;

    var icon = document.createElement('span');
    icon.className = 'chip-icon';
    icon.setAttribute('aria-hidden', 'true');
    if (iconFile) {
      var img = document.createElement('img');
      img.src = 'assets/icons/' + iconFile;
      img.alt = '';
      icon.appendChild(img);
    } else {
      icon.textContent = '★';
    }

    var text = document.createElement('span');
    text.className = 'chip-label';
    text.textContent = label;

    btn.appendChild(icon);
    btn.appendChild(text);
    return btn;
  }

  var SOFT_SKILLS = {
    en: ['Communication', 'Creativity', 'Teamwork', 'Problem Solving', 'Engagement', 'Sociable'],
    es: ['Comunicación', 'Creatividad', 'Trabajo en equipo', 'Resolución de problemas', 'Compromiso', 'Sociable']
  };

  var COPY = {
    en: {
      'nav.about': 'About', 'nav.skills': 'Skills', 'nav.experience': 'Experience', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
      'cv': 'Download CV',
      'hero.eyebrow': 'Angular specialist',
      'hero.role': 'Software Engineer', 'hero.roleSub': 'Angular specialist',
      'hero.descr': 'Front-end engineer focused on Angular, building complex, high-traffic web applications — from ticket-booking platforms to SaaS administration tools.',
      'hero.viewProjects': 'View Projects →', 'hero.languages': 'Languages',
      'skills.title': 'Skills', 'skills.searchPlaceholder': 'Search a skill…', 'skills.noResults': 'No skills match that filter.', 'skills.softSkills': 'Soft skills',
      'experience.title': 'Experience', 'experience.present': 'Present',
      'experience.sicomoro.descr': 'Building ticket-booking and event-purchasing platforms for museums, theaters and cultural institutions, plus SaaS applications for companies to configure and administer their own ticketing systems. Works across a wide range of Angular versions (v11–v22) depending on the project. Integrates frontend with backend APIs for reservation management; CI/CD via Azure Pipelines. Focus areas: performance optimization, state management, reliable UX for high-traffic booking flows.',
      'experience.gcore.descr': 'Developed a cloud products calculator for the company website with complex pricing logic and multi-step user interactions, driven by JSON pricing data.',
      'projects.title': 'Selected Work',
      'contact.title': "Let's work together.",
      'contact.body': 'Open to front-end and Angular roles, and to interesting product work. The fastest way to reach me is email.',
      cats: ['All', 'Frontend', 'Backend', 'Tools & DevOps', 'Testing', 'AI-Assisted Dev'],
      tabs: ['All', 'Ticket Booking', 'SaaS Admin', 'Cloud Tools']
    },
    es: {
      'nav.about': 'Sobre mí', 'nav.skills': 'Habilidades', 'nav.experience': 'Experiencia', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
      'cv': 'Descargar CV',
      'hero.eyebrow': 'Especialista en Angular',
      'hero.role': 'Software Engineer', 'hero.roleSub': 'especialista en Angular',
      'hero.descr': 'Ingeniero front-end centrado en Angular, desarrollando aplicaciones web complejas y de alto tráfico — desde plataformas de venta de entradas hasta herramientas de administración SaaS.',
      'hero.viewProjects': 'Ver proyectos →', 'hero.languages': 'Idiomas',
      'skills.title': 'Habilidades', 'skills.searchPlaceholder': 'Buscar una habilidad…', 'skills.noResults': 'Ninguna habilidad coincide con el filtro.', 'skills.softSkills': 'Habilidades blandas',
      'experience.title': 'Experiencia', 'experience.present': 'Presente',
      'experience.sicomoro.descr': 'Desarrollo de plataformas de venta de entradas y compra de eventos para museos, teatros e instituciones culturales, además de aplicaciones SaaS para que las empresas configuren y administren sus propios sistemas de ticketing. Trabajo con un amplio rango de versiones de Angular (v11–v22) según el proyecto. Integración del frontend con APIs de backend para la gestión de reservas; CI/CD mediante Azure Pipelines. Áreas de enfoque: optimización de rendimiento, gestión de estado y una UX fiable para flujos de reserva de alto tráfico.',
      'experience.gcore.descr': 'Desarrollo de una calculadora de productos cloud para el sitio web de la empresa, con lógica de precios compleja e interacciones multi-paso basadas en datos de precios en JSON.',
      'projects.title': 'Trabajo seleccionado',
      'contact.title': 'Trabajemos juntos.',
      'contact.body': 'Abierto a posiciones de front-end y Angular, y a proyectos de producto interesantes. La vía más rápida es el email.',
      cats: ['Todo', 'Frontend', 'Backend', 'Herramientas y DevOps', 'Testing', 'Dev con IA'],
      tabs: ['Todo', 'Venta de entradas', 'Panel SaaS', 'Cloud']
    }
  };

  /* ========================================================================
     State
     ======================================================================== */
  var state = {
    lang: localStorage.getItem('lang') || 'en',
    query: '',
    catIndex: -1,
    tabIndex: -1
  };

  /* ========================================================================
     i18n
     ======================================================================== */
  function applyI18n() {
    var t = COPY[state.lang];
    document.documentElement.lang = state.lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === state.lang);
    });

    var cvHref = 'assets/cv/resume-' + state.lang + '.pdf';
    ['cv-btn-desktop', 'cv-btn-mobile', 'cv-btn-hero', 'cv-btn-contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute('href', cvHref);
    });

    renderSkillCategories();
    renderSkills();
    renderProjectTabs();
    renderProjects();
    renderSoftSkills();
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem('lang', lang);
    applyI18n();
  }

  /* ========================================================================
     Skills
     ======================================================================== */
  function renderSkillCategories() {
    var t = COPY[state.lang];
    var wrap = document.getElementById('skills-categories');
    wrap.innerHTML = '';
    t.cats.forEach(function (label, i) {
      var idx = i - 1;
      var btn = buildChip(label, CATEGORY_ICONS[i]);
      btn.className = 'chip' + (state.catIndex === idx ? ' active' : '');
      btn.addEventListener('click', function () {
        state.catIndex = idx;
        renderSkillCategories();
        renderSkills();
      });
      wrap.appendChild(btn);
    });
  }

  var MOBILE_GRID_BREAKPOINT = 640;

  // On the mobile 2-column grid, a lone 1-column chip left without a partner
  // to its right (because the next chip needs both columns, or the list
  // ends) would otherwise sit next to empty space. Promote it to full width
  // instead. Desktop's auto-fill grid has many columns, so this only applies
  // to the fixed 2-column mobile layout.
  function computeSkillWidths(names) {
    var baseWidths = names.map(function (name) { return name.length > 17 ? 2 : 1; });
    if (window.innerWidth > MOBILE_GRID_BREAKPOINT) return baseWidths;

    var widths = baseWidths.slice();
    var col = 0;
    for (var i = 0; i < widths.length; i++) {
      if (widths[i] === 1) {
        if (col === 0) {
          if (baseWidths[i + 1] === 1) {
            col = 1;
          } else {
            widths[i] = 2;
            col = 0;
          }
        } else {
          col = 0;
        }
      } else {
        col = 0;
      }
    }
    return widths;
  }

  function renderSkills() {
    var q = state.query.trim().toLowerCase();
    var grid = document.getElementById('skills-grid');
    var filtered = SKILLS.filter(function (s) {
      return (state.catIndex < 0 || s[1] === state.catIndex) && (!q || s[0].toLowerCase().indexOf(q) >= 0);
    });
    var widths = computeSkillWidths(filtered.map(function (s) { return s[0]; }));

    grid.innerHTML = '';
    filtered.forEach(function (s, i) {
      var card = document.createElement('div');
      card.className = 'skill-card' + (widths[i] === 2 ? ' span-2' : '');
      var dot = document.createElement('span');
      dot.className = 'skill-dot';
      dot.style.background = DOTS[s[1]];
      var name = document.createElement('span');
      name.className = 'skill-name';
      name.textContent = s[0];
      card.appendChild(dot);
      card.appendChild(name);
      grid.appendChild(card);
    });

    document.getElementById('skills-count').textContent = filtered.length + ' / ' + SKILLS.length;
    document.getElementById('skills-empty').hidden = filtered.length !== 0;
  }

  function renderSoftSkills() {
    var wrap = document.getElementById('soft-skills-list');
    wrap.innerHTML = '';
    SOFT_SKILLS[state.lang].forEach(function (s) {
      var span = document.createElement('span');
      span.className = 'soft-skill-tag';
      span.textContent = s;
      wrap.appendChild(span);
    });
  }

  /* ========================================================================
     Projects
     ======================================================================== */
  function renderProjectTabs() {
    var t = COPY[state.lang];
    var wrap = document.getElementById('project-tabs');
    wrap.innerHTML = '';
    t.tabs.forEach(function (label, i) {
      var idx = i - 1;
      var btn = buildChip(label, TAB_ICONS[i]);
      btn.className = 'chip' + (state.tabIndex === idx ? ' active' : '');
      btn.addEventListener('click', function () {
        state.tabIndex = idx;
        renderProjectTabs();
        renderProjects();
      });
      wrap.appendChild(btn);
    });
  }

  function renderProjects() {
    var grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    var filtered = PROJECTS.filter(function (p) { return state.tabIndex < 0 || p.tab === state.tabIndex; });

    filtered.forEach(function (p) {
      var card = document.createElement('a');
      card.className = 'project-card';
      card.href = p.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';

      var thumb = document.createElement('div');
      thumb.className = 'project-thumb';
      var img = document.createElement('img');
      img.className = 'project-thumb-img';
      img.src = p.img;
      img.alt = p.title;
      img.loading = 'lazy';
      thumb.appendChild(img);

      var body = document.createElement('div');
      body.className = 'project-body';

      var tag = document.createElement('span');
      tag.className = 'project-tag';
      tag.textContent = p.tag;

      var title = document.createElement('h3');
      title.className = 'project-title';
      title.textContent = p.title;

      var descr = document.createElement('p');
      descr.className = 'project-descr';
      descr.textContent = p.descr[state.lang];

      var stackWrap = document.createElement('div');
      stackWrap.className = 'project-stack';
      p.stack.forEach(function (s) {
        var st = document.createElement('span');
        st.className = 'stack-tag';
        st.textContent = s;
        stackWrap.appendChild(st);
      });

      body.appendChild(tag);
      body.appendChild(title);
      body.appendChild(descr);
      body.appendChild(stackWrap);

      card.appendChild(thumb);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ========================================================================
     Search input
     ======================================================================== */
  var searchInput = document.getElementById('skills-search');
  var clearBtn = document.getElementById('skills-clear');
  searchInput.addEventListener('input', function (e) {
    state.query = e.target.value;
    clearBtn.hidden = state.query.length === 0;
    renderSkills();
  });
  clearBtn.addEventListener('click', function () {
    state.query = '';
    searchInput.value = '';
    clearBtn.hidden = true;
    renderSkills();
  });

  /* ========================================================================
     Language switch
     ======================================================================== */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); closeMobileMenu(); });
  });

  /* ========================================================================
     Mobile menu
     ======================================================================== */
  var mobileMenu = document.getElementById('mobile-menu');
  function openMobileMenu() { mobileMenu.classList.add('is-open'); }
  function closeMobileMenu() { mobileMenu.classList.remove('is-open'); }
  document.getElementById('burger-btn').addEventListener('click', openMobileMenu);
  document.getElementById('mobile-menu-close').addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(function (a) {
    a.addEventListener('click', closeMobileMenu);
  });

  /* ========================================================================
     Header scroll state, progress bar, scroll counter, active nav link
     ======================================================================== */
  var headerEl = document.getElementById('site-header');
  var progressEl = document.getElementById('scroll-progress');
  var counterEl = document.getElementById('scroll-counter');
  var pctEl = document.getElementById('scroll-pct');
  var sectionIds = ['about', 'skills', 'experience', 'projects', 'contact'];

  function onScroll() {
    var y = window.scrollY;
    headerEl.classList.toggle('is-scrolled', y > 24);

    var active = sectionIds[0];
    sectionIds.forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec && sec.getBoundingClientRect().top <= 150) active = id;
    });
    document.querySelectorAll('[data-navlink]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-navlink') === active);
    });

    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? Math.min(100, Math.max(0, Math.round((y / max) * 100))) : 0;
    progressEl.style.width = pct + '%';
    pctEl.textContent = String(pct).padStart(2, '0');
    counterEl.classList.toggle('is-visible', y > 220 && pct < 99);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderSkills, 150);
  });

  /* ========================================================================
     Scroll reveal
     ======================================================================== */
  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
      el.classList.add('is-shown');
      obs.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });

  /* ========================================================================
     Footer year
     ======================================================================== */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ========================================================================
     Init
     ======================================================================== */
  applyI18n();
  onScroll();
})();
