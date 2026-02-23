/* ---------------------------
   NeonCraft Portfolio (CodePen)
   - Theme + EN/HI toggle
   - Scroll spy
   - Drawer + Modal
   - Particles canvas
   - Skill filter + bar animation
   - Timeline accordion
   - Toasts + copy helpers
   - Magnetic micro-interactions
---------------------------- */

const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => [...root.querySelectorAll(q)];

const App = {
    state: {
        active: "home",
        drawer: false,
        modal: false,
    },
    data: {
        email: "contact.pro@nathaniel-t.fr",
        snippet: `// Build rules (non-negotiable)
const ship = (feature) => ({
  fast: true,
  cleanUI: true,
  edgeCases: "handled",
  performance: "measured",
  maintainable: "always",
  feature
});`,
        skills: [
            {
                group: "frontend",
                icon: "fa-brands fa-react",
                name: "React",
                pct: 94,
                tags: ["Hooks", "Router", "UI Systems"],
            },
            {
                group: "frontend",
                icon: "fa-brands fa-js",
                name: "JavaScript",
                pct: 93,
                tags: ["ES6+", "DOM", "Patterns"],
            },
            {
                group: "frontend",
                icon: "fa-solid fa-wand-magic-sparkles",
                name: "UI Engineering",
                pct: 90,
                tags: ["Motion", "Accessibility", "Design tokens"],
            },

            {
                group: "backend",
                icon: "fa-brands fa-node-js",
                name: "Node.js",
                pct: 91,
                tags: ["Express", "APIs", "Auth"],
            },
            {
                group: "backend",
                icon: "fa-solid fa-database",
                name: "MongoDB",
                pct: 87,
                tags: ["Indexes", "Schema", "Perf"],
            },
            {
                group: "backend",
                icon: "fa-solid fa-shield-halved",
                name: "Security",
                pct: 84,
                tags: ["JWT/Cookies", "RBAC", "Validation"],
            },

            {
                group: "tools",
                icon: "fa-brands fa-docker",
                name: "Docker",
                pct: 76,
                tags: ["Images", "Compose", "Deploy"],
            },
            {
                group: "tools",
                icon: "fa-brands fa-git-alt",
                name: "Git",
                pct: 92,
                tags: ["Flow", "Reviews", "Releases"],
            },
            {
                group: "tools",
                icon: "fa-solid fa-gauge-high",
                name: "Performance",
                pct: 88,
                tags: ["Lighthouse", "CWV", "Profiling"],
            },
        ],
        timeline: [
            {
                role: "Administrateur Système et Réseau",
                org: "Actuellement en recherche",
                period: "2026 - 2027",
                icon: "fa-solid fa-briefcase",
                bullets: [
                    "Built MERN dashboards and internal tools with clean role-based access patterns.",
                    "Improved page speed and UX by optimizing heavy UI flows and network calls.",
                    "Delivered reusable UI patterns: tables, filters, modals, toasts, and form validation.",
                ],
            },
            {
                role: "Technicien Système et Réseau",
                org: "Tertio Engineering",
                period: "Janvier - Mars 2026 | STAGE",
                icon: "fa-solid fa-rocket",
                bullets: [
                    "Shipped multi-page websites and product prototypes (admin panels, e-commerce, booking).",
                    "Designed UI systems with tokens + components to keep the build consistent and fast.",
                    "Focused on reliability: edge cases, error states, and performance guardrails.",
                ],
            },
            {
                role: "Technicien Support Informatique",
                org: "Tertio Engineering",
                period: "Avril - Juin 2025 | STAGE",
                icon: "fa-solid fa-code",
                bullets: [
                    "Built responsive websites with strong HTML/CSS fundamentals.",
                    "Learned the craft: semantics, accessibility, maintainable CSS and clean JS.",
                    "Transitioned into modern JS tooling and component-driven UI.",
                ],
            },
        ],
        projects: [
            {
                title: "Sunsar Logistics - Ops Dashboard",
                desc: "RBAC + ops workflows with premium tables, filters, and audit-friendly screens.",
                cover: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=70",
                stack: ["React", "Node", "Mongo", "RBAC"],
                meta: "Focus: security + clarity • Outcome: scalable ops UI",
                bullets: [
                    "Role-based access (packs) with clear permission boundaries.",
                    "Fast table UI: filters, pagination feel, empty states, confirmations.",
                    "API layer centralized for easy future changes.",
                ],
                links: [
                    {
                        label: "View (demo)",
                        icon: "fa-solid fa-arrow-up-right-from-square",
                        href: "#",
                    },
                    {
                        label: "Code",
                        icon: "fa-brands fa-github",
                        href: "https://github.com/a2rp",
                    },
                ],
            },
            {
                title: "Payments + Orders Flow",
                desc: "Checkout UX with receipts, status tracking, and clean form validation patterns.",
                cover: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=70",
                stack: ["React", "Express", "Stripe"],
                meta: "Focus: UX + correctness • Outcome: clean purchase flow",
                bullets: [
                    "Careful error states: retry, cancel, and pending scenarios.",
                    "Fast feedback loops: toasts + micro animations.",
                    "Receipt-friendly layout and print readiness.",
                ],
                links: [
                    {
                        label: "Case study",
                        icon: "fa-solid fa-book-open",
                        href: "#",
                    },
                    {
                        label: "GitHub",
                        icon: "fa-brands fa-github",
                        href: "https://github.com/a2rp",
                    },
                ],
            },
            {
                title: "Payments + Orders Flow",
                desc: "Checkout UX with receipts, status tracking, and clean form validation patterns.",
                cover: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=70",
                stack: ["React", "Express", "Stripe"],
                meta: "Focus: UX + correctness • Outcome: clean purchase flow",
                bullets: [
                    "Careful error states: retry, cancel, and pending scenarios.",
                    "Fast feedback loops: toasts + micro animations.",
                    "Receipt-friendly layout and print readiness.",
                ],
                links: [
                    {
                        label: "Case study",
                        icon: "fa-solid fa-book-open",
                        href: "#",
                    },
                    {
                        label: "GitHub",
                        icon: "fa-brands fa-github",
                        href: "https://github.com/a2rp",
                    },
                ],
            },
            {
                title: "Portfolio System (This Pen)",
                desc: "Theme + EN/HI toggle, scroll spy, modal case studies, particles, and magnetic UI.",
                cover: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=70",
                stack: ["Vanilla JS", "CSS", "UX"],
                meta: "Focus: premium motion • Outcome: unique portfolio feel",
                bullets: [
                    "Micro-interactions: magnetic buttons, hover tilt, crisp focus states.",
                    "Accessible patterns: aria labels, keyboard close for modal.",
                    "No frameworks - clean structure you can extend.",
                ],
                links: [
                    {
                        label: "Fork on CodePen",
                        icon: "fa-brands fa-codepen",
                        href: "#",
                    },
                    {
                        label: "Website",
                        icon: "fa-solid fa-globe",
                        href: "https://www.ashishranjan.net",
                    },
                ],
            },
        ],
    },
};
/* ---------------- UI helpers ---------------- */
function toast(title, msg) {
    const wrap = $("#toasts");
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `
    <i class="fa-solid fa-sparkles"></i>
    <div>
      <div class="toastTitle">${escapeHTML(title)}</div>
      <div class="toastMsg">${escapeHTML(msg)}</div>
    </div>
  `;
    wrap.appendChild(el);
    setTimeout(() => {
        el.style.opacity = "0";
        el.style.transform = "translateY(8px)";
    }, 2400);
    setTimeout(() => {
        el.remove();
    }, 2850);
}
function escapeHTML(s) {
    return String(s).replace(
        /[&<>"']/g,
        (m) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;",
            }[m])
    );
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // fallback
        const t = document.createElement("textarea");
        t.value = text;
        document.body.appendChild(t);
        t.select();
        const ok = document.execCommand("copy");
        t.remove();
        return ok;
    }
}

/* ---------------- Build sections ---------------- */
function renderSnippet() {
    $("#codeSnippet").textContent = App.data.snippet;
}
function renderSkills(filter = "all") {
    const grid = $("#skillsGrid");
    const list = App.data.skills.filter((s) =>
        filter === "all" ? true : s.group === filter
    );

    grid.innerHTML = list
        .map(
            (s) => `
    <div class="skillCard" data-group="${s.group}">
      <div class="skillTop">
        <div class="skillName"><i class="${s.icon}"></i>${escapeHTML(
                s.name
            )}</div>
        <div class="skillPct">${s.pct}%</div>
      </div>
      <div class="bar"><div class="fill" style="--w:${s.pct}"></div></div>
      <div class="skillTags">
        ${s.tags
            .map((t) => `<span class="badge">${escapeHTML(t)}</span>`)
            .join("")}
      </div>
    </div>
  `
        )
        .join("");

    // animate fills once in view
    const cards = $$(".skillCard", grid);
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                const fill = $(".fill", e.target);
                const pct = $(".skillPct", e.target);
                const w = e.target
                    .querySelector(".skillPct")
                    .textContent.replace("%", "");
                // trigger width
                requestAnimationFrame(() => {
                    fill.style.width = w + "%";
                });
                // little counter feel
                let cur = 0,
                    target = Number(w);
                const tick = () => {
                    cur += Math.max(1, Math.ceil((target - cur) / 10));
                    if (cur >= target) cur = target;
                    pct.textContent = cur + "%";
                    if (cur < target) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                obs.unobserve(e.target);
            });
        },
        { threshold: 0.4 }
    );
    cards.forEach((c) => obs.observe(c));
}

function renderTimeline() {
    const root = $("#timeline");
    root.innerHTML = App.data.timeline
        .map(
            (t, idx) => `
    <div class="tItem" data-idx="${idx}">
      <div class="tHead" role="button" tabindex="0" aria-expanded="false">
        <div class="tLeft">
          <div class="tIcon"><i class="${t.icon}"></i></div>
          <div>
            <div class="tTitle">${escapeHTML(t.role)}</div>
            <div class="tMeta">${escapeHTML(t.org)} • ${escapeHTML(
                t.period
            )}</div>
          </div>
        </div>
        <div class="tArrow"><i class="fa-solid fa-chevron-down"></i></div>
      </div>
      <div class="tBody" aria-hidden="true">
        <div class="tInner">
          <ul class="bullets">
            ${t.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `
        )
        .join("");

    const items = $$(".tItem", root);
    items.forEach((item) => {
        const head = $(".tHead", item);
        const body = $(".tBody", item);

        const toggle = () => {
            const open = item.classList.toggle("open");
            head.setAttribute("aria-expanded", open ? "true" : "false");
            body.setAttribute("aria-hidden", open ? "false" : "true");
            body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
        };

        head.addEventListener("click", toggle);
        head.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
            }
        });
    });
}

function renderProjects() {
    const root = $("#projectsGrid");
    root.innerHTML = App.data.projects
        .map(
            (p, idx) => `
    <div class="pCard" data-idx="${idx}" role="button" tabindex="0" aria-label="Open project ${escapeHTML(
                p.title
            )}">
      <div class="pCover" style="background-image:url('${p.cover}')">
        <div class="pOverlay">
          <div class="pStack">
            ${p.stack
                .slice(0, 3)
                .map((s) => `<span class="stackChip">${escapeHTML(s)}</span>`)
                .join("")}
          </div>
          <div class="stackChip"><i class="fa-solid fa-up-right-from-square"></i></div>
        </div>
      </div>
      <div class="pBody">
        <div class="pTitle">${escapeHTML(p.title)}</div>
        <div class="pDesc">${escapeHTML(p.desc)}</div>
        <div class="pFoot">
          <span><i class="fa-solid fa-sparkles"></i> case-study</span>
          <span>${p.stack.join(" • ")}</span>
        </div>
      </div>
    </div>
  `
        )
        .join("");

    $$(".pCard", root).forEach((card) => {
        const open = () => openProjectModal(Number(card.dataset.idx));
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
    });
}

/* ---------------- Modal ---------------- */
function openProjectModal(idx) {
    const p = App.data.projects[idx];
    if (!p) return;

    $("#modalTitle").textContent = p.title;
    $("#modalCover").style.backgroundImage = `url('${p.cover}')`;
    $("#modalMeta").textContent = p.meta;
    $("#modalDesc").textContent = p.desc;

    $("#modalBullets").innerHTML = `
    <ul class="bullets">
      ${p.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("")}
    </ul>
  `;

    $("#modalLinks").innerHTML = p.links
        .map(
            (l) => `
    <a class="btn secondary magnetic" href="${
        l.href
    }" target="_blank" rel="noopener">
      <i class="${l.icon}"></i><span>${escapeHTML(l.label)}</span>
    </a>
  `
        )
        .join("");

    $("#modalWrap").classList.add("open");
    $("#modalWrap").setAttribute("aria-hidden", "false");
    App.state.modal = true;
    toast("Opened", "Project case-study modal");
}

function closeModal() {
    $("#modalWrap").classList.remove("open");
    $("#modalWrap").setAttribute("aria-hidden", "true");
    App.state.modal = false;
}
$("#closeModal").addEventListener("click", closeModal);
$("#modalWrap").addEventListener("click", (e) => {
    if (e.target.id === "modalWrap") closeModal();
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && App.state.modal) closeModal();
});

/* ---------------- Drawer ---------------- */
function setDrawer(open) {
    App.state.drawer = open;
    const d = $("#drawer");
    d.classList.toggle("open", open);
    d.setAttribute("aria-hidden", open ? "false" : "true");
    $("#menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
}
$("#menuBtn").addEventListener("click", () => setDrawer(!App.state.drawer));
$("#closeDrawer").addEventListener("click", () => setDrawer(false));
$$(".drawerLink").forEach((a) =>
    a.addEventListener("click", () => setDrawer(false))
);
document.addEventListener("click", (e) => {
    if (!App.state.drawer) return;
    const d = $("#drawer");
    const btn = $("#menuBtn");
    if (!d.contains(e.target) && !btn.contains(e.target)) setDrawer(false);
});

/* ---------------- Scroll spy ---------------- */
function initScrollSpy() {
    const links = $$(".navLink");
    const sections = $$("section[id]");

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((ent) => {
                if (!ent.isIntersecting) return;
                const id = ent.target.id;
                App.state.active = id;
                links.forEach((l) => {
                    l.classList.toggle("active", l.dataset.section === id);
                });
            });
        },
        { threshold: 0.35 }
    );

    sections.forEach((s) => obs.observe(s));

    // smooth click
    links.forEach((l) => {
        l.addEventListener("click", (e) => {
            e.preventDefault();
            const id = l.getAttribute("href");
            const target = $(id);
            if (!target) return;
            const topbarH = $("#topbar").offsetHeight;
            const y =
                target.getBoundingClientRect().top +
                window.scrollY -
                topbarH -
                10;
            window.scrollTo({ top: y, behavior: "smooth" });
        });
    });
}

/* ---------------- Counters (hero stats) ---------------- */
function animateStats() {
    const nums = $$(".statNum");
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((ent) => {
                if (!ent.isIntersecting) return;
                const el = ent.target;
                const target = Number(el.dataset.count || 0);
                let cur = 0;
                const tick = () => {
                    cur += Math.max(1, Math.ceil((target - cur) / 12));
                    if (cur >= target) cur = target;
                    el.textContent = cur;
                    if (cur < target) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                obs.unobserve(el);
            });
        },
        { threshold: 0.65 }
    );
    nums.forEach((n) => obs.observe(n));
}

/* ---------------- Copy actions ---------------- */
$("#copyEmail").addEventListener("click", async () => {
    const ok = await copyText(App.data.email);
    toast(
        ok ? "Copied" : "Oops",
        ok ? "Email copied to clipboard" : "Copy failed (browser restriction)"
    );
});
$("#emailBtn").addEventListener("click", async () => {
    const ok = await copyText(App.data.email);
    toast(
        ok ? "Copied" : "Oops",
        ok ? "Email copied to clipboard" : "Copy failed"
    );
});
$("#copySnippet").addEventListener("click", async () => {
    const ok = await copyText(App.data.snippet);
    toast(ok ? "Copied" : "Oops", ok ? "Snippet copied" : "Copy failed");
});

/* ---------------- Form ---------------- */
$("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    toast("Sent", "Message queued (demo). Add backend later.");
    e.target.reset();
});
$("#clearForm").addEventListener("click", () => {
    $("#contactForm").reset();
    toast("Cleared", "Form cleared");
});

/* ---------------- Back to top + clock ---------------- */
$("#backTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
function updateClock() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const txt = `${months[d.getMonth()]} ${pad(
        d.getDate()
    )}, ${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
        d.getSeconds()
    )} hrs`;
    $("#clock").textContent = txt;
}
setInterval(updateClock, 1000);
updateClock();

/* ---------------- Resume button (demo) ---------------- */
$("#openResume").addEventListener("click", () => {
    toast("Resume", "Replace with your PDF link / drive link.");
});

/* ---------------- Magnetic buttons ---------------- */
function initMagnetic() {
    const mags = $$(".magnetic");
    mags.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
        });
        el.addEventListener("mouseleave", () => {
            el.style.transform = "";
        });
    });
}

/* ---------------- Card tilt (profile) ---------------- */
function initTilt() {
    const card = $(".profileCard");
    if (!card) return;
    card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -10;
        const ry = (px - 0.5) * 12;
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
}

/* ---------------- Skill filter buttons ---------------- */
function initFilters() {
    const btns = $$(".filterBtn");
    btns.forEach((b) => {
        b.addEventListener("click", () => {
            btns.forEach((x) => x.classList.remove("active"));
            b.classList.add("active");
            renderSkills(b.dataset.filter);
            toast("Filter", b.textContent.trim());
        });
    });
}

/* ---------------- Name typing (tiny vibe) ---------------- */
function initNameType() {
    const el = $("#nameType");
    const full = el.textContent.trim();
    el.textContent = "";
    let i = 0;
    const tick = () => {
        i++;
        el.textContent = full.slice(0, i);
        if (i < full.length) setTimeout(tick, 55);
    };
    setTimeout(tick, 250);
}

/* ---------------- Particles canvas ---------------- */
function initCanvasFX() {
    const c = $("#fx");
    const ctx = c.getContext("2d", { alpha: true });

    let w = 0,
        h = 0,
        dpr = 1;
    const symbols = [
        "{",
        "}",
        "<",
        ">",
        "/",
        "*",
        "+",
        "=",
        ";",
        "&",
        "%",
        "$",
        "#",
        "@",
    ];
    const dots = [];

    function resize() {
        dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        w = c.width = Math.floor(window.innerWidth * dpr);
        h = c.height = Math.floor(window.innerHeight * dpr);
        c.style.width = window.innerWidth + "px";
        c.style.height = window.innerHeight + "px";
        dots.length = 0;

        const count = Math.floor(
            (window.innerWidth * window.innerHeight) / 28000
        );
        for (let i = 0; i < count; i++) {
            dots.push(makeDot());
        }
    }

    function makeDot() {
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.35 * dpr,
            vy: (Math.random() - 0.5) * 0.35 * dpr,
            r: (1.2 + Math.random() * 2.4) * dpr,
            a: 0.08 + Math.random() * 0.12,
            sym: symbols[(Math.random() * symbols.length) | 0],
            s: (11 + Math.random() * 12) * dpr,
        };
    }

    function step() {
        ctx.clearRect(0, 0, w, h);

        // dots
        for (const p of dots) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -50) p.x = w + 50;
            if (p.x > w + 50) p.x = -50;
            if (p.y < -50) p.y = h + 50;
            if (p.y > h + 50) p.y = -50;

            ctx.globalAlpha = p.a;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(41,255,198,1)";
            ctx.fill();

            ctx.globalAlpha = p.a * 0.9;
            ctx.font = `${p.s}px ui-monospace`;
            ctx.fillStyle = "rgba(124,92,255,1)";
            ctx.fillText(p.sym, p.x + 10 * dpr, p.y - 10 * dpr);
        }

        // links
        ctx.globalAlpha = 0.06;
        ctx.strokeStyle = "rgba(255,255,255,1)";
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const a = dots[i],
                    b = dots[j];
                const dx = a.x - b.x,
                    dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 160 * dpr) {
                    ctx.lineWidth = 1 * dpr;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    resize();
    step();
}

/* ---------------- Init ---------------- */
function boot() {
    renderSnippet();
    renderSkills("all");
    renderTimeline();
    renderProjects();

    initNameType();
    initScrollSpy();
    initFilters();
    animateStats();
    initMagnetic();
    initTilt();
    initCanvasFX();

    toast("Ready", "Portfolio loaded with micro-interactions");
}

boot();
