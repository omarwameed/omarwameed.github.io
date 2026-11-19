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

    buildRolls(lang);
  }

  /* ---------- top menu: letters roll on hover ----------
     Learned from horizonx.so: each piece sits in a mask with a front copy
     and a gold copy underneath; on hover both slide up. English rolls
     letter by letter with a small stagger. Arabic rolls the whole word,
     because splitting Arabic into letters breaks how they join.
     Rebuilt after every language switch, since apply() rewrites the text.
     The link keeps an aria-label so screen readers read the word once. */
  function buildRolls(lang) {
    Array.prototype.forEach.call(document.querySelectorAll(".nav-links a"), function (a) {
      var word = a.textContent.trim();
      var parts = lang === "en" ? Array.from(word) : [word];
      a.setAttribute("aria-label", word);
      a.textContent = "";
      parts.forEach(function (piece, i) {
        var mask = document.createElement("span");
        mask.className = "roll-m";
        mask.setAttribute("aria-hidden", "true");
        if (piece === " ") mask.classList.add("roll-space");
        for (var k = 0; k < 2; k++) {
          var s = document.createElement("span");
          s.textContent = piece;
          s.style.transitionDelay = (i * 18) + "ms";
          mask.appendChild(s);
        }
        a.appendChild(mask);
      });
    });
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

  /* Language switch as a terminal command (chosen by the user from 28 demos).
     A navy screen types `lang --set en`, prints a confirmation, the page
     swaps behind it, and the screen blurs away.
     - First switch in a visit plays the full scene (~2.6s); later ones are a
       quicker cut (~1.3s) so switching back and forth never feels like waiting.
     - A click or any key during the scene skips straight to the result.
     - Clicks on the language button during the scene are ignored.
     - Instant with reduced motion (reduceMotion is defined below; hoisted).
     The command and status lines are fixed strings on purpose: they are
     part of the scene, like a logo, not UI copy that needs translating. */
  var termBusy = false;
  var term = null;

  function getTerm() {
    if (term) return term;
    var el = document.createElement("div");
    el.className = "term";
    el.setAttribute("role", "status");
    el.innerHTML =
      '<div class="term-box" dir="ltr">' +
        '<p class="term-line"><span class="term-prompt">omar@portfolio</span><span class="term-path">:~$</span> <span class="term-cmd"></span><span class="term-caret" aria-hidden="true"></span></p>' +
        '<p class="term-out" dir="auto"></p>' +
      "</div>";
    document.body.appendChild(el);
    term = {
      root: el,
      cmd: el.querySelector(".term-cmd"),
      caret: el.querySelector(".term-caret"),
      out: el.querySelector(".term-out")
    };
    return term;
  }

  document.getElementById("langBtn").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("lang") === "en" ? "ar" : "en";

    if (reduceMotion || !Element.prototype.animate) {
      apply(next);
      return;
    }
    if (termBusy) return;
    termBusy = true;

    var seen = false;
    try { seen = sessionStorage.getItem("ow.termSeen") === "1"; sessionStorage.setItem("ow.termSeen", "1"); } catch (e) {}
    var pace = seen
      ? { type: 22, beforeOut: 90, hold: 320, fade: 360 }
      : { type: 58, beforeOut: 260, hold: 760, fade: 520 };

    var t = getTerm();
    var command = "lang --set " + next;
    var message = next === "en" ? "✓ switching to English" : "✓ جاري التحويل للعربية";
    var skipped = false;
    var swapped = false;
    var timers = [];
    var later = function (fn, ms) { timers.push(setTimeout(fn, ms)); };

    t.cmd.textContent = "";
    t.out.textContent = "";
    t.out.style.opacity = "0";
    t.caret.style.display = "";
    t.root.classList.add("is-on");
    t.root.getAnimations().forEach(function (a) { a.cancel(); });
    t.root.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: "ease-out", fill: "forwards" });

    var swap = function () { if (!swapped) { swapped = true; apply(next); } };

    var finish = function () {
      timers.forEach(clearTimeout);
      swap();
      t.root.removeEventListener("pointerdown", skip);
      document.removeEventListener("keydown", skip, true);
      t.root.animate([{ opacity: 1, filter: "blur(0)" }, { opacity: 0, filter: "blur(8px)" }],
        { duration: skipped ? 220 : pace.fade, easing: "ease-in", fill: "forwards" })
        .finished.then(done, done);
    };
    var done = function () {
      t.root.classList.remove("is-on");
      t.root.getAnimations().forEach(function (a) { a.cancel(); });
      termBusy = false;
    };
    var skip = function () {
      if (skipped) return;
      skipped = true;
      t.cmd.textContent = command;
      t.out.textContent = message;
      t.out.style.opacity = "1";
      finish();
    };
    t.root.addEventListener("pointerdown", skip);
    document.addEventListener("keydown", skip, true);

    /* type the command one character at a time */
    var at = 280;
    for (var i = 1; i <= command.length; i++) {
      (function (n) { later(function () { t.cmd.textContent = command.slice(0, n); }, at); })(i);
      at += pace.type;
    }
    at += pace.beforeOut;
    later(function () {
      t.caret.style.display = "none";
      t.out.textContent = message;
      t.out.animate([{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }],
        { duration: 260, easing: "ease-out", fill: "forwards" });
      swap();
    }, at);
    at += pace.hold;
    later(finish, at);
  });

  /* Motion is opt-out for anyone who asked their system for less of it. */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Theme switch: the new theme spreads out as a circle from the button.
     Uses the View Transitions API; browsers without it switch instantly. */
  /* The theme a pending transition is heading to. The swap itself runs a
     frame later, so a quick second click must toggle from the target, not
     from the theme still on screen, or two clicks would land on one switch. */
  var themeTarget = null;

  document.getElementById("themeBtn").addEventListener("click", function (e) {
    var current = themeTarget || document.documentElement.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";

    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }
    themeTarget = next;

    var b = e.currentTarget.getBoundingClientRect();
    var x = b.left + b.width / 2;
    var y = b.top + b.height / 2;
    var r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    var t = document.startViewTransition(function () { setTheme(next); });
    t.finished.then(function () { if (themeTarget === next) themeTarget = null; }, function () {});
    t.ready.then(function () {
      document.documentElement.animate(
        { clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + r + "px at " + x + "px " + y + "px)"] },
        { duration: 560, easing: "cubic-bezier(.2, .7, .3, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    }).catch(function () {});
  });

  /* Hero headline: each word rises out of its own mask, once, on load.
     Splitting happens at spaces only, so Arabic letters inside a word stay
     joined. A later language switch replaces the text and drops the effect,
     which is fine: the entrance is for the first impression. */
  (function () {
    var h = document.querySelector(".hero-title");
    if (!h || reduceMotion) return;
    var words = h.textContent.trim().split(/\s+/);
    h.textContent = "";
    words.forEach(function (w, i) {
      var outer = document.createElement("span");
      var inner = document.createElement("span");
      outer.className = "w";
      inner.className = "wi";
      inner.style.setProperty("--i", i);
      inner.textContent = w;
      outer.appendChild(inner);
      h.appendChild(outer);
      if (i < words.length - 1) h.appendChild(document.createTextNode(" "));
    });
    h.classList.add("is-split");
  })();

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

  /* ---------- gold spotlight on cards ----------
     A soft glow sits under the pointer on tool cards and contact boxes, so
     the card you're about to click answers before you click. Mouse only. */

  if (fineHover && !calm) {
    Array.prototype.forEach.call(document.querySelectorAll(".tool-card a, .cbox"), function (card) {
      var frame = 0;
      card.classList.add("glow");
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left;
        var y = e.clientY - r.top;
        if (frame) return;
        frame = requestAnimationFrame(function () {
          frame = 0;
          card.style.setProperty("--gx", x.toFixed(0) + "px");
          card.style.setProperty("--gy", y.toFixed(0) + "px");
        });
      });
    });
  }

  /* ---------- background: liquid gold silk (WebGL), Fable's mix 64 ----------
     Picked by the user from ten mixes designed by Fable. Navy cloth folds
     slowly; gold only appears as narrow metallic filaments on the fold
     ridges and thin veins, so the colour never turns muddy.
     Phone-safe by design (the previous shader broke on phones):
     - highp whenever the GPU supports it (mediump on phones is ~16-bit and
       collapsed the old sin()-based noise into blocks or nothing);
     - a sin-free hash that stays stable even in mediump;
     - time wraps every 15 minutes so values never grow large;
     - no film grain: a +-0.5/255 ordered dither hides banding instead;
     - the cloth drifts on its own, so touch screens see motion too.
     Also: veins calm behind the text column (right in RTL, left in LTR),
     evenly calmer on phones, calmer after the hero, porcelain in light
     mode, reduced resolution, pauses in hidden tabs, one still frame with
     reduced motion, nothing drawn without WebGL. */
  (function () {
    var hero = document.querySelector(".hero");
    if (!hero) return;

    var wrap = document.createElement("div");
    wrap.className = "bg-fx";
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = '<canvas class="bg-silk"></canvas>';
    var cv = wrap.querySelector("canvas");
    var opts = { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: "low-power" };
    var gl = cv.getContext("webgl", opts) || cv.getContext("experimental-webgl", opts);
    if (!gl) return;
    document.body.prepend(wrap);

    var VS = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
    var FS = [
      "#ifdef GL_FRAGMENT_PRECISION_HIGH",
      "precision highp float;",
      "#else",
      "precision mediump float;",
      "#endif",
      "uniform vec2 R;uniform float T;uniform vec2 M;uniform float I;uniform float L;uniform float D;uniform float Q;",
      "const vec3 NAVY=vec3(0.039,0.067,0.141);",
      "const vec3 SURF=vec3(0.059,0.098,0.192);",
      "const vec3 GOLD=vec3(0.847,0.706,0.388);",
      "const vec3 CREAM=vec3(1.0,0.925,0.745);",
      "const vec3 BRONZE=vec3(0.50,0.35,0.13);",
      "vec3 goldramp(float a){vec3 c=mix(BRONZE,GOLD,smoothstep(0.0,0.6,a));return mix(c,CREAM,smoothstep(0.55,1.0,a));}",
      /* gold light rolls off softly: dim gold stays saturated, bright gold ends at cream, never white */
      "vec3 glight(vec3 base,float l){l=max(l,0.0);float a=1.0-exp(-l);return base*(1.0-a*0.9)+goldramp(a)*a;}",
      "float b2(vec2 p){return mod(2.0*p.x+3.0*p.y,4.0);}",
      "float bayer(vec2 p){p=floor(p);return (4.0*b2(mod(p,2.0))+b2(mod(floor(p*0.5),2.0)))/16.0;}",
      "float hash21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}",
      "float vnoise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);",
      " float a=hash21(i);float b=hash21(i+vec2(1.0,0.0));float c=hash21(i+vec2(0.0,1.0));float d=hash21(i+vec2(1.0,1.0));",
      " return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}",
      "float fbm4(vec2 p){float v=0.0;float a=0.5;mat2 m=mat2(0.8,0.6,-0.6,0.8);",
      " for(int i=0;i<4;i++){v+=a*vnoise(p);p=m*p*2.0+vec2(1.7,9.2);a*=0.5;}return v;}",
      "float fbm5(vec2 p){float v=0.0;float a=0.5;mat2 m=mat2(0.8,0.6,-0.6,0.8);",
      " for(int i=0;i<5;i++){v+=a*vnoise(p);p=m*p*2.0+vec2(1.7,9.2);a*=0.5;}return v;}",
      "void main(){",
      " vec2 uv=(gl_FragCoord.xy*2.0-R)/R.y;float asp=R.x/R.y;",
      /* mirror for LTR so the busy side always sits away from the text */
      " if(D<0.5)uv.x=-uv.x;",
      /* phones show a narrow slice of the cloth, so zoom out there to fit more filaments in */
      " vec2 p=uv*(Q>0.5?1.1:1.75)+vec2(0.45,0.0);",
      " float t=T*0.09;",
      " vec2 q=vec2(fbm4(p+vec2(t,t*0.7)),fbm4(p+vec2(5.2,1.3)-vec2(t*0.8,t*0.5)));",
      " vec2 r=vec2(fbm4(p+3.2*q+vec2(1.7,9.2)+M*0.3),fbm4(p+3.2*q+vec2(8.3,2.8)-M.yx*0.2));",
      " float f=fbm5(p+2.4*r);",
      " float fn=smoothstep(0.2,0.78,f);",
      " float ridge=exp(-pow((f-0.58)/0.03,2.0))*0.8;",
      " float glint=exp(-pow((f-0.76)/0.028,2.0))*2.2;",
      " float v=r.x*4.0+r.y*1.5;",
      " float vein=smoothstep(0.13,0.0,abs(fract(v)-0.5))*smoothstep(0.3,0.55,f);",
      " float l=ridge+glint+vein*0.8;",
      " l*=Q>0.5?mix(1.0,0.22,smoothstep(-asp*0.25,asp*0.9,uv.x)):0.85;",
      " l*=I;",
      " vec3 col;",
      " if(L<0.5){",
      "  vec3 base=mix(NAVY*0.5,SURF*1.35,fn)*mix(1.0,0.7,smoothstep(0.0,asp,uv.x));",
      "  col=glight(base,l);",
      " }else{",
      "  vec3 base=mix(vec3(0.953,0.961,0.98),vec3(0.885,0.9,0.94),fn*0.9);",
      "  col=mix(base,vec3(0.52,0.39,0.11),clamp(l*0.32,0.0,0.6));",
      " }",
      " col=clamp(col,0.0,1.0)+(bayer(gl_FragCoord.xy)-0.5)/255.0;",
      " gl_FragColor=vec4(col,1.0);",
      "}"
    ].join("\n");

    function shader(type, src) {
      var o = gl.createShader(type);
      gl.shaderSource(o, src);
      gl.compileShader(o);
      return o;
    }
    var prog = gl.createProgram();
    gl.attachShader(prog, shader(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { wrap.remove(); return; }
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var aLoc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);
    var uR = gl.getUniformLocation(prog, "R"), uT = gl.getUniformLocation(prog, "T");
    var uM = gl.getUniformLocation(prog, "M"), uI = gl.getUniformLocation(prog, "I"), uL = gl.getUniformLocation(prog, "L");
    var uD = gl.getUniformLocation(prog, "D"), uQ = gl.getUniformLocation(prog, "Q");

    var small = window.matchMedia("(max-width: 760px)").matches;
    var scale = (small ? 0.5 : 0.6) * Math.min(1.5, window.devicePixelRatio || 1);
    var W = 0, H = 0, lastW = 0, lastH = 0;
    function resize(force) {
      /* phones fire resize while the address bar slides; only reallocate on a
         real change (width, or height by more than ~120px) */
      if (!force && innerWidth === lastW && Math.abs(innerHeight - lastH) < 120) return;
      lastW = innerWidth; lastH = innerHeight;
      W = Math.max(1, Math.round(innerWidth * scale));
      H = Math.max(1, Math.round(innerHeight * scale));
      cv.width = W; cv.height = H;
      gl.viewport(0, 0, W, H);
    }
    resize(true);

    /* mouse in -1..1 (y up), eased; when idle for 2s (or on touch screens,
       which never send mouse moves) the cloth drifts on its own */
    var mx = 0, my = 0, tx = 0, ty = 0, lastMove = -1e9;
    window.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX / innerWidth * 2 - 1;
      ty = -(e.clientY / innerHeight * 2 - 1);
      lastMove = performance.now();
    }, { passive: true });

    var progress = 0;
    var calm = reduceMotion;
    var t0 = performance.now(), prev = t0;

    function draw(now) {
      var light = document.documentElement.getAttribute("data-theme") === "light";
      var t = (now - t0) / 1000;
      var dt = Math.min(0.05, Math.max(0, (now - prev) / 1000)); prev = now;
      var idle = now - lastMove > 2000;
      if (idle) { tx = Math.sin(t * 0.19) * 0.6; ty = Math.cos(t * 0.14) * 0.45; }
      var k = 1 - Math.exp(-dt * (idle ? 1.2 : 4.5));
      mx += (tx - mx) * k; my += (ty - my) * k;
      gl.uniform2f(uR, W, H);
      gl.uniform1f(uT, calm ? 11.0 : t % 900);
      gl.uniform2f(uM, calm ? 0.25 : mx, calm ? 0.1 : my);
      gl.uniform1f(uI, 1 - progress * 0.55);
      gl.uniform1f(uL, light ? 1 : 0);
      gl.uniform1f(uD, document.documentElement.getAttribute("dir") === "rtl" ? 1 : 0);
      gl.uniform1f(uQ, small ? 0 : 1);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    window.addEventListener("resize", function () { resize(false); if (calm) draw(performance.now()); });

    var thresholds = [];
    for (var i = 0; i <= 20; i++) thresholds.push(i / 20);
    new IntersectionObserver(function (entries) {
      progress = 1 - entries[0].intersectionRatio;
      if (calm) draw(0);
    }, { threshold: thresholds }).observe(hero);

    /* fade in after the first frame so the page never flashes */
    requestAnimationFrame(function (now) { draw(now); wrap.classList.add("is-on"); });

    if (calm) {
      new MutationObserver(function () { draw(0); })
        .observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      return;
    }

    var running = true;
    cv.addEventListener("webglcontextlost", function (e) { e.preventDefault(); running = false; wrap.remove(); });
    document.addEventListener("visibilitychange", function () {
      running = !document.hidden;
      if (running) requestAnimationFrame(loop);
    });
    function loop(now) {
      if (!running) return;
      draw(now);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  })();

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
