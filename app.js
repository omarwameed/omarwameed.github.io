/* Omar Wameed - portfolio
   Language switch (ar default, en), theme switch, scroll reveal. */

(function () {
  "use strict";

  /* ---------- copy ---------- */

  var EN = {
    docTitle: "Omar Wameed | IT Technical Support & Front-End Developer",
    docDesc: "Omar Wameed, IT technical support and front-end developer. Gets machines working again, and builds bilingual business systems you can try right now.",

    skip: "Skip to projects",
    brandName: "Omar Wameed",
    navProjects: "Projects",
    navSkills: "Skills",
    navExperience: "Experience",
    navCerts: "Certificates",
    navContact: "Contact",
    navMain: "Main navigation",

    heroName: "Omar Wameed",
    heroTitle: "From the user's screen to the line of code.",
    heroSub: "IT support and front-end developer. I get your machine working again, and build bilingual business systems that are live right now.",
    ctaProjects: "Try the projects",
    ctaCv: "Download CV",

    projTitle: "Not mockups. Systems that open and run.",
    projSub: "Every project here is live on the web. Click, try it, then judge.",
    projNote: "Management systems designed for big screens. Open them on a computer to see them the way they were built.",
    ctaOpen: "Open the site",
    ariaTech: "Technologies",

    p1Kicker: "Freelance, accessories retail store",
    p1Title: "Customer Loyalty Platform",
    p1Body: "Every purchase turns into points, and every point brings the customer closer to a reward. Customers, tiers and sales, all tracked from one dashboard.",
    p1F1: "Full Arabic and English, with proper RTL",
    p1F2: "Charts that show sales performance at a glance",
    p1F3: "Flags customers who are close to the next tier",
    p1F4: "Takes on any store's branding without a rebuild",
    altLoyalty: "Customer loyalty platform: dashboard showing total customers, today's sales, points issued and top customers",

    p2Kicker: "Built at Darjah Recruitment Company",
    p2Title: "Sales and Recruitment System",
    p2Body: "A recruitment agency sells, hires and bills at the same time. Ten pages cover the whole road: from the first client call, to the right candidate, to the last commission invoice.",
    p2F1: "Drag deals across sales stages on a kanban board",
    p2F2: "Commissions and guarantee periods calculate themselves",
    p2F3: "Contracts and invoices print in the company's branding",
    p2F4: "Flips between Arabic and English in one click",
    altCrm: "Sales and recruitment system: manager dashboard with commission metrics, job orders and sales stage distribution",

    skillsTitle: "The toolkit",
    sk0: "Technical support and hardware",
    sk0v: "Printer setup and troubleshooting, computer hardware diagnostics, IT issue resolution for staff, Microsoft Office",
    sk1: "Front-end development",
    sk2: "Architecture and state",
    sk2v: "Component based architecture, reusable components, Zustand",
    sk3: "Responsive design",
    sk3v: "Responsive design, mobile first, cross browser compatibility, Arabic RTL interfaces",
    sk4: "AI assisted development",
    sk4v: "Prompt engineering, coding and debugging with Claude, ChatGPT and Gemini",
    sk5: "Tools",
    sk5v: "Git, GitHub, browser dev tools, deployment on Cloudflare, Vercel and Netlify",

    expTitle: "Where I've worked",
    e1Meta: "Freelance",
    e1Role: "Front-End Developer, Customer Loyalty Platform",
    e1Desc: "Took a loyalty-system idea for an accessories store and delivered the full front-end: dashboards, customer management and points, all built from components that get reused, not rewritten.",
    e2Meta: "6 months",
    e2Role: "IT Help Desk Support, Darjah Recruitment Company",
    e2Desc: "The first call when a computer freezes or a printer jams. Diagnosed hardware and software faults for staff, set up and maintained the office printers, and helped develop and support the company's ERP system. At the Graphic Design and Career Path Orientation workshops, I was the technical support that kept each session running without a stop.",
    e3Meta: "Instagram store",
    e3Role: "Customer Support Representative",
    e3Desc: "Every day in Instagram DMs: how much is it, is it in stock, where's my order. Every message got a clear answer, and every issue reached a fix.",
    eduLabel: "Education",
    eduValue: "Bachelor's Degree in Optometry Technology, College of Health and Medical Technologies",
    langLabel: "Languages",
    langValue: "Arabic native, English at B2 level",

    certsTitle: "Certificates",
    cert1Date: "October 2026",
    cert1Body: "A Cisco Networking Academy course on the fundamentals of user support: how to take in a problem, diagnose it step by step, and keep communicating clearly until it's solved.",
    altCert: "Certificate of completion for IT Customer Support Basics from Cisco Networking Academy, awarded to Omar Wameed",

    contactTitle: "Got a fault or an idea? Message me.",
    contactSub: "Whether you need someone to get the office machines running again, or a developer to join your team and build your system's front-end, reach me any way below.",
    cEmail: "Email",
    cPhone: "WhatsApp",

    footName: "Omar Wameed, IT Technical Support & Front-End Developer",
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
