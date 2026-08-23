/* Omar Wameed - portfolio
   Language switch (ar default, en), theme switch, scroll reveal. */

(function () {
  "use strict";

  /* ---------- copy ---------- */

  var EN = {
    docTitle: "Omar Wameed | Front-End Developer",
    docDesc: "Portfolio of Omar Wameed, front-end developer. Live business systems in Arabic and English: a customer loyalty platform and a sales and recruitment system.",

    skip: "Skip to projects",
    brandName: "Omar Wameed",
    navProjects: "Projects",
    navSkills: "Skills",
    navExperience: "Experience",
    navContact: "Contact",
    navMain: "Main navigation",

    heroName: "Omar Wameed",
    heroTitle: "Bilingual front-ends for business systems.",
    heroSub: "Front-end developer. The last two systems I built are live right now, and you can open and try them yourself.",
    ctaProjects: "See the work",
    ctaCv: "Download CV",

    projTitle: "Live projects",
    projSub: "Both are published on the web. Open one and try it before you read about it.",
    projNote: "These are management systems built for large screens, so open them on a desktop for the best experience.",
    ctaOpen: "Open the site",
    ariaTech: "Technologies",

    p1Kicker: "Freelance, accessories retail store",
    p1Title: "Customer Loyalty Platform",
    p1Body: "A complete loyalty system: customer registration, points on every purchase, membership tiers, redeemable rewards, and a dashboard for sales and points performance.",
    p1F1: "Full Arabic and English interface with RTL support",
    p1F2: "Dashboard and charts for sales performance",
    p1F3: "Membership tiers and tracking of customers close to an upgrade",
    p1F4: "White label platform, reusable for any brand",
    altLoyalty: "Customer loyalty platform: dashboard showing total customers, today's sales, points issued and top customers",

    p2Kicker: "Built during the internship at Darjah Recruitment",
    p2Title: "Sales and Recruitment System",
    p2Body: "A ten page management system for a recruitment agency: sales pipeline, job orders, candidate database, contracts with a guarantee period, commissions and invoices.",
    p2F1: "Drag and drop kanban board for the sales pipeline",
    p2F2: "Automatic commission calculation and guarantee period tracking",
    p2F3: "Branded contract and invoice printing",
    p2F4: "Full switch between Arabic and English",
    altCrm: "Sales and recruitment system: manager dashboard with commission metrics, job orders and sales stage distribution",

    skillsTitle: "What I work with",
    sk1: "Front-end development",
    sk2: "Architecture and state",
    sk2v: "Component based architecture, reusable components, Zustand",
    sk3: "Responsive design",
    sk3v: "Responsive design, mobile first, cross browser compatibility, Arabic RTL interfaces",
    sk4: "AI assisted development",
    sk4v: "Prompt engineering, coding and debugging with Claude, ChatGPT and Gemini",
    sk5: "Tools",
    sk5v: "Git, GitHub, browser dev tools, deployment on Cloudflare",

    expTitle: "Experience",
    e1Meta: "Freelance",
    e1Role: "Front-End Developer, Customer Loyalty Platform",
    e1Desc: "Built the entire front-end for a loyalty system for an accessories store, from dashboards to customer and points management, using reusable components.",
    e2Meta: "3 months",
    e2Role: "Front-End Developer Intern, Darjah Recruitment Company",
    e2Desc: "Developed responsive interfaces and turned design requirements into cross browser pages, alongside IT support for office hardware and printers.",
    e3Meta: "Instagram store",
    e3Role: "Customer Support Representative",
    e3Desc: "Handled daily customer inquiries: product information, pricing and order status, resolving issues with clear communication.",
    eduLabel: "Education",
    eduValue: "Bachelor's Degree in Optometry Technology, College of Health and Medical Technologies",
    langLabel: "Languages",
    langValue: "Arabic native, English at B2 level",

    contactTitle: "Ready to work with you",
    contactSub: "If you have a front-end project, or you are looking for a developer to join your team, get in touch.",
    cEmail: "Email",
    cPhone: "WhatsApp",

    footName: "Omar Wameed, Front-End Developer",
    footPlace: "Baghdad, Iraq"
  };

  /* Arabic is what ships in the HTML, so it is captured on first run. */
  var AR = null;

  var ATTR_MAP = [
    ["data-i18n", null],
    ["data-i18n-alt", "alt"],
    ["data-i18n-aria", "aria-label"],
    ["data-i18n-title", "title"]
  ];

  function nodes() {
    return document.querySelectorAll("[data-i18n],[data-i18n-alt],[data-i18n-aria],[data-i18n-title]");
  }

  function captureArabic() {
    var dict = { docTitle: document.title, docDesc: metaDesc() };
    Array.prototype.forEach.call(nodes(), function (el) {
      ATTR_MAP.forEach(function (pair) {
        var key = el.getAttribute(pair[0]);
        if (!key) return;
        dict[key] = pair[1] ? el.getAttribute(pair[1]) : el.textContent;
      });
    });
    return dict;
  }

  function metaDesc(value) {
    var tag = document.querySelector('meta[name="description"]');
    if (!tag) return "";
    if (value !== undefined) tag.setAttribute("content", value);
    return tag.getAttribute("content");
  }

  function apply(lang) {
    var dict = lang === "en" ? EN : AR;
    var html = document.documentElement;

    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "en" ? "ltr" : "rtl");

    Array.prototype.forEach.call(nodes(), function (el) {
      ATTR_MAP.forEach(function (pair) {
        var key = el.getAttribute(pair[0]);
        if (!key || !(key in dict)) return;
        if (pair[1]) el.setAttribute(pair[1], dict[key]);
        else el.textContent = dict[key];
      });
    });

    document.title = dict.docTitle;
    metaDesc(dict.docDesc);

    var btn = document.getElementById("langBtn");
    var label = document.getElementById("langLabel");
    label.textContent = lang === "en" ? "ع" : "EN";
    btn.setAttribute("title", lang === "en" ? "العربية" : "English");
    btn.setAttribute("aria-label", lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية");

    var theme = document.getElementById("themeBtn");
    theme.setAttribute("title", lang === "en" ? "Toggle theme" : "تبديل الوضع");
    theme.setAttribute("aria-label", theme.getAttribute("title"));

    try { localStorage.setItem("ow.lang", lang); } catch (e) {}
  }

  /* ---------- theme ---------- */

  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    try { localStorage.setItem("ow.theme", mode); } catch (e) {}
  }

  function storedTheme() {
    var saved = null;
    try { saved = localStorage.getItem("ow.theme"); } catch (e) {}
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  /* ---------- boot ---------- */

  AR = captureArabic();

  var savedLang = null;
  try { savedLang = localStorage.getItem("ow.lang"); } catch (e) {}
  apply(savedLang === "en" ? "en" : "ar");

  setTheme(storedTheme());

  document.getElementById("langBtn").addEventListener("click", function () {
    apply(document.documentElement.getAttribute("lang") === "en" ? "ar" : "en");
  });

  document.getElementById("themeBtn").addEventListener("click", function () {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------- scroll reveal (IntersectionObserver, no scroll listener) ---------- */

  var reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });

    /* hairline under the nav only once the page has moved */
    var nav = document.getElementById("nav");
    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px";
    document.body.prepend(sentinel);

    new IntersectionObserver(function (entries) {
      nav.classList.toggle("stuck", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  }
})();
