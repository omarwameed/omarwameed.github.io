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
    navDock: "Quick navigation",
    lbAria: "Certificate view",
    lbClose: "Close",

    toolsTitle: "Tools I rely on",
    toolsSub: "The ones I open every day and recommend without hesitation.",
    tagAi: "AI",
    tagDev: "Developer tools",
    tagHost: "Hosting",
    tagNotes: "Notes",
    whyClaude: "My partner for coding and debugging, from the first idea to the last fix.",
    whyChatgpt: "For planning and quick questions before I start writing.",
    whyGithub: "All my code lives here, and this site is published from it.",
    whyCloudflare: "Hosts both systems above, fast and always on.",
    whyVercel: "Push a small site, and a minute later it's live.",
    whyObsidian: "Every project's notebook: decisions, problems, and how they got solved.",

    copyIdle: "Copy",
    copyDone: "Copied",
    copyFail: "Couldn't copy",

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

  /* ---------- certificate viewer ----------
     The link still points at the image, so without JS (or without <dialog>
     support) it simply opens the file. With JS it opens over the page. */

  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");

  /* Unlock directly instead of waiting for the async "close" event, which
     did not arrive in testing and left the page unable to scroll. */
  function unlockScroll() { document.documentElement.classList.remove("lb-open"); }

  function closeLightbox() {
    if (lb.open) lb.close();
    unlockScroll();
  }

  if (lb && typeof lb.showModal === "function") {
    Array.prototype.forEach.call(document.querySelectorAll(".cert-media"), function (link) {
      link.addEventListener("click", function (e) {
        var src = link.querySelector("img");
        e.preventDefault();
        lbImg.src = link.getAttribute("href");
        lbImg.alt = src ? src.alt : "";
        lb.showModal();
        document.documentElement.classList.add("lb-open");
      });
    });

    document.getElementById("lbClose").addEventListener("click", closeLightbox);

    /* a click on the dark area outside the image lands on the dialog itself */
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });

    /* Esc fires "cancel" right away, then closes natively */
    lb.addEventListener("cancel", unlockScroll);
    lb.addEventListener("close", unlockScroll);
  }

  /* ---------- copy buttons (email, phone) ----------
     The label is swapped in place and the button eases from its old width
     to the new one. Labels come from hidden spans in the button, so they
     follow the language switch like every other string. */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      /* the async API can refuse (no focus, no permission): fall back */
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return legacyCopy(text);
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      ta.remove();
      if (ok) resolve(); else reject();
    });
  }

  function setLabel(btn, text) {
    var label = btn.querySelector(".copy-label");
    var from = btn.offsetWidth;
    label.textContent = text;
    btn.style.width = "auto";
    var to = btn.offsetWidth;
    btn.style.width = from + "px";
    void btn.offsetWidth; /* commit the start width before animating */
    btn.style.width = to + "px";
  }

  var copyStatus = document.getElementById("copyStatus");

  Array.prototype.forEach.call(document.querySelectorAll(".copy"), function (btn) {
    var timer = 0;
    var pick = function (key) {
      var el = btn.querySelector('[hidden][data-i18n="' + key + '"]');
      return el ? el.textContent : "";
    };

    btn.addEventListener("transitionend", function (e) {
      if (e.propertyName === "width" && !btn.classList.contains("is-done") && !btn.classList.contains("is-fail")) {
        btn.style.width = "";
      }
    });

    btn.addEventListener("click", function () {
      clearTimeout(timer);
      copyText(btn.getAttribute("data-copy")).then(function () {
        btn.classList.remove("is-fail");
        btn.classList.add("is-done");
        setLabel(btn, pick("copyDone"));
        if (copyStatus) copyStatus.textContent = pick("copyDone");
      }, function () {
        btn.classList.add("is-fail");
        setLabel(btn, pick("copyFail"));
        if (copyStatus) copyStatus.textContent = pick("copyFail");
      }).then(function () {
        timer = setTimeout(function () {
          btn.classList.remove("is-done", "is-fail");
          setLabel(btn, pick("copyIdle"));
          if (copyStatus) copyStatus.textContent = "";
          /* release the fixed width even if no transitionend fires, so a
             later language switch can't clip the label */
          setTimeout(function () { btn.style.width = ""; }, 320);
        }, 1800);
      });
    });
  });

  /* ---------- active section in the top nav and the mobile dock ----------
     A thin band across the middle of the screen decides which section is
     "current", so the highlight follows reading position, not page top. */

  var spyLinks = document.querySelectorAll("[data-spy]");

  if ("IntersectionObserver" in window && spyLinks.length) {
    var setActive = function (id) {
      Array.prototype.forEach.call(spyLinks, function (a) {
        var on = a.getAttribute("data-spy") === id;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    ["projects", "skills", "experience", "certs", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    /* back at the hero: nothing is current */
    var hero = document.querySelector(".hero");
    if (hero) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) setActive("");
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 }).observe(hero);
    }
  }

  /* ---------- certificate foil + tilt ----------
     Only for a real mouse, and never with reduced motion. Touch devices get
     the static sheen from CSS. Pointer events on the card, no scroll work. */

  var fineHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (fineHover && !calm) {
    Array.prototype.forEach.call(document.querySelectorAll(".cert-media"), function (card) {
      var stamp = card.querySelector(".stamp");
      if (!stamp) return;
      var frame = 0;

      card.addEventListener("pointermove", function (e) {
        var r = stamp.getBoundingClientRect();
        var x = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
        var y = Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1);
        if (frame) return;
        frame = requestAnimationFrame(function () {
          frame = 0;
          stamp.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
          stamp.style.setProperty("--my", (y * 100).toFixed(1) + "%");
          stamp.style.setProperty("--ry", ((x - 0.5) * 9).toFixed(2) + "deg");
          stamp.style.setProperty("--rx", ((0.5 - y) * 7).toFixed(2) + "deg");
          stamp.classList.add("is-lit");
        });
      });

      card.addEventListener("pointerleave", function () {
        if (frame) { cancelAnimationFrame(frame); frame = 0; }
        stamp.classList.remove("is-lit");
        ["--mx", "--my", "--rx", "--ry"].forEach(function (p) { stamp.style.removeProperty(p); });
      });
    });
  }

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
