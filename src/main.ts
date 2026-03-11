import { marked } from "marked";
import DOMPurify from "dompurify";

marked.use({ breaks: true, gfm: true });

// Allow <details> and <summary>
DOMPurify.addHook("uponSanitizeElement", (_node, data) => {
  if (data.tagName === "details" || data.tagName === "summary") {
    data.allowedTags[data.tagName] = true;
  }
});

// ── Types ──

interface ManifestReport { file: string; label: string; emoji: string; }
interface ManifestDate { date: string; reports: ManifestReport[]; }
interface Manifest { generated: string; dates: ManifestDate[]; }

// ── State ──

let manifest: Manifest | null = null;
let currentDate = "";
let searchIndex: Map<string, string> | null = null;

// ── DOM ──

const dateNavEl = document.getElementById("date-nav")!;
const dateHeaderEl = document.getElementById("date-header")!;
const heroEl = document.getElementById("hero")!;
const reportsEl = document.getElementById("reports")!;
const themeToggle = document.getElementById("theme-toggle")!;
const mobToggle = document.getElementById("mob-toggle")!;
const sidebar = document.getElementById("sidebar")!;
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const searchStatus = document.getElementById("search-status")!;
const cwrap = document.getElementById("cwrap")!;
const fontDown = document.getElementById("font-down")!;
const fontUp = document.getElementById("font-up")!;
const fontSizeLabel = document.getElementById("font-size-label")!;
const widthToggle = document.getElementById("width-toggle")!;

// ── Font Size ──

const FONT_STEPS = [
  { scale: 0.8, label: "XS" },
  { scale: 0.9, label: "S" },
  { scale: 1.0, label: "M" },
  { scale: 1.1, label: "L" },
  { scale: 1.25, label: "XL" },
];
let fontStep = Number(localStorage.getItem("ar-font-step") ?? 2);

function applyFontSize(step: number): void {
  fontStep = Math.max(0, Math.min(FONT_STEPS.length - 1, step));
  const { scale, label } = FONT_STEPS[fontStep]!;
  document.documentElement.style.setProperty("--font-scale", String(scale));
  fontSizeLabel.textContent = label;
  localStorage.setItem("ar-font-step", String(fontStep));
}

fontDown.addEventListener("click", () => applyFontSize(fontStep - 1));
fontUp.addEventListener("click", () => applyFontSize(fontStep + 1));

// ── Width Toggle ──

let wideMode = localStorage.getItem("ar-wide") === "1";

function applyWidth(wide: boolean): void {
  wideMode = wide;
  document.getElementById("main")!.classList.toggle("wide", wide);
  widthToggle.textContent = wide ? "⇤" : "⇔";
  widthToggle.title = wide ? "標準寬度" : "加寬顯示";
  localStorage.setItem("ar-wide", wide ? "1" : "0");
}

widthToggle.addEventListener("click", () => applyWidth(!wideMode));

// ── Theme ──

let theme = localStorage.getItem("ar-theme") || "dark";

function applyTheme(t: string): void {
  theme = t;
  document.documentElement.dataset.theme = t;
  themeToggle.textContent = t === "dark" ? "◐ LIGHT" : "● DARK";
  localStorage.setItem("ar-theme", t);
}

themeToggle.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
mobToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

// ── Helpers ──

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    return res.ok ? await res.text() : null;
  } catch { return null; }
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    return res.ok ? (await res.json()) as T : null;
  } catch { return null; }
}

function textToHtml(text: string): string {
  // Decode any HTML entities from LLM output (e.g. &#x20;), then escape for safe rendering
  const ta = document.createElement("textarea");
  ta.innerHTML = text;
  const decoded = ta.value;
  const div = document.createElement("div");
  div.textContent = decoded;
  return div.innerHTML.replace(/\n/g, "<br>");
}

function renderMd(md: string): string {
  const html = marked.parse(md) as string;
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ["details", "summary"],
    ADD_ATTR: ["open", "href", "target"],
  });
}

/** Manifest stores file without .md — ensure we fetch with extension */
function reportUrl(date: string, file: string): string {
  const f = file.endsWith(".md") ? file : `${file}.md`;
  return `/digests/${date}/${f}`;
}

// ── Search ──

let searchDebounce: ReturnType<typeof setTimeout>;

async function buildSearchIndex(dates: ManifestDate[]): Promise<Map<string, string>> {
  const index = new Map<string, string>();
  await Promise.all(
    dates.map(async ({ date, reports }) => {
      const chunks = await Promise.all(
        reports.map(async (r) => {
          const text = await fetchText(reportUrl(date, r.file));
          return text || "";
        })
      );
      index.set(date, chunks.join("\n").toLowerCase());
    })
  );
  return index;
}

function applySearch(query: string): void {
  const needle = query.trim().toLowerCase();
  let hits = 0;

  dateNavEl.querySelectorAll(".date-group").forEach((group) => {
    const hdr = group.querySelector(".date-hdr") as HTMLElement;
    const date = hdr.dataset.date || "";
    if (!needle || !searchIndex) {
      group.classList.remove("search-hit");
      return;
    }
    const text = searchIndex.get(date) || "";
    const matched = text.includes(needle);
    group.classList.toggle("search-hit", matched);
    if (matched) hits++;
  });

  searchStatus.textContent = needle ? `匹配 ${hits} 天` : "";
}

searchInput.addEventListener("input", () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => applySearch(searchInput.value), 120);
});

// ── Render: date header ──

function renderDateHeader(date: string): void {
  const d = new Date(date + "T00:00:00");
  const weekday = d.toLocaleDateString("zh-TW", { weekday: "long" });
  const formatted = d.toLocaleDateString("zh-TW", { year: "numeric", month: "long", day: "numeric" });
  dateHeaderEl.innerHTML = `
    <div class="date-header-main">${formatted} ${weekday}</div>
    <div class="date-header-sub">AI ECOSYSTEM DAILY DIGEST</div>
  `;
}

// ── Render: highlights hero ──

function renderHighlights(text: string): void {
  const tweets = text.split(/\n{3,}/).map((t) => t.trim()).filter(Boolean);
  if (tweets.length === 0) { heroEl.innerHTML = ""; return; }

  const cards = tweets
    .map((tweet, i) =>
      `<div class="highlight-card">
        <span class="tweet-index">${i + 1}/${tweets.length}</span>
        ${textToHtml(tweet)}
      </div>`)
    .join("");

  heroEl.innerHTML = `
    <div class="hero-title">✨ TODAY'S HIGHLIGHTS</div>
    <div class="highlight-cards">${cards}</div>
  `;
}

// ── Render: all reports ──

async function renderAllReports(date: string, reports: ManifestReport[]): Promise<void> {
  reportsEl.innerHTML = reports
    .map((r) => `
      <section class="report-section fade" id="section-${r.file.replace(/\.md$/, "")}">
        <div class="report-section-header" data-file="${r.file}">
          <span class="report-section-emoji">${r.emoji}</span>
          <h2 class="report-section-title">${r.label}</h2>
          <span class="report-section-toggle">▼</span>
        </div>
        <div class="report-section-body md" data-file="${r.file}">
          <div class="loading"><div class="loading-icon">⏳</div><div>Loading…</div></div>
        </div>
      </section>`)
    .join("");

  // Fetch all in parallel
  const results = await Promise.all(
    reports.map(async (r) => ({ file: r.file, md: await fetchText(reportUrl(date, r.file)) }))
  );

  for (const { file, md } of results) {
    const body = reportsEl.querySelector(`.report-section-body[data-file="${file}"]`);
    if (body && md) {
      body.innerHTML = renderMd(md);
    } else if (body) {
      body.innerHTML = `<p class="no-data">暫無數據</p>`;
    }
  }

  // Collapse toggle
  reportsEl.querySelectorAll(".report-section-header").forEach((header) => {
    header.addEventListener("click", () => {
      const section = header.closest(".report-section")!;
      section.classList.toggle("collapsed");
      const toggle = header.querySelector(".report-section-toggle")!;
      toggle.textContent = section.classList.contains("collapsed") ? "▶" : "▼";
    });
  });

  updateQuickNav(reports);
}

// ── Quick nav ──

function updateQuickNav(reports: ManifestReport[]): void {
  const existing = document.getElementById("quick-nav");
  if (existing) existing.remove();

  const nav = document.createElement("nav");
  nav.id = "quick-nav";
  nav.className = "quick-nav";
  nav.innerHTML = reports
    .map((r) => {
      const slug = r.file.replace(/\.md$/, "");
      return `<button class="quick-nav-item" data-section="${slug}">
        <span class="qn-emoji">${r.emoji}</span>
        <span class="qn-label">${r.label}</span>
      </button>`;
    })
    .join("");

  // Use scrollIntoView instead of anchor links (avoids hash change → popstate)
  nav.querySelectorAll(".quick-nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = (btn as HTMLElement).dataset.section!;
      document.getElementById(`section-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.body.appendChild(nav);
}

// ── Sidebar nav ──

function buildNav(): void {
  if (!manifest) return;

  dateNavEl.innerHTML = manifest.dates
    .map((d) => {
      const isActive = d.date === currentDate;
      const reportItems = d.reports
        .map((r) =>
          `<a class="nav-report" data-date="${d.date}" data-file="${r.file}">
            <span class="nav-report-emoji">${r.emoji}</span>
            <span class="nav-report-label">${r.label}</span>
          </a>`)
        .join("");
      return `<div class="date-group ${isActive ? "expanded" : ""}">
        <div class="date-hdr ${isActive ? "active" : ""}" data-date="${d.date}">
          <span class="date-hdr-arrow">${isActive ? "▼" : "▶"}</span>
          <span class="date-hdr-text">${d.date}</span>
          <span class="report-count">${d.reports.length}</span>
        </div>
        <div class="nav-reports">${reportItems}</div>
      </div>`;
    })
    .join("");

  // Date header click: navigate + expand
  dateNavEl.querySelectorAll(".date-hdr").forEach((hdr) => {
    hdr.addEventListener("click", () => {
      const date = (hdr as HTMLElement).dataset.date!;
      navigateTo(date);
    });
  });

  // Report item click: navigate + scroll to section
  dateNavEl.querySelectorAll(".nav-report").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const el = item as HTMLElement;
      const date = el.dataset.date!;
      const file = el.dataset.file!;
      const slug = file.replace(/\.md$/, "");
      if (date !== currentDate) {
        navigateTo(date).then(() => {
          document.getElementById(`section-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        document.getElementById(`section-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      sidebar.classList.remove("open");
    });
  });
}

function updateNavActive(date: string): void {
  dateNavEl.querySelectorAll(".date-group").forEach((group) => {
    const hdr = group.querySelector(".date-hdr") as HTMLElement;
    const isActive = hdr.dataset.date === date;
    hdr.classList.toggle("active", isActive);
    group.classList.toggle("expanded", isActive);
    const arrow = hdr.querySelector(".date-hdr-arrow");
    if (arrow) arrow.textContent = isActive ? "▼" : "▶";
  });
}

// ── Navigation ──

async function navigateTo(date: string): Promise<void> {
  currentDate = date;
  history.pushState(null, "", `#${date}`);

  // Update sidebar active
  updateNavActive(date);

  renderDateHeader(date);

  // Highlights — guard against SPA fallback returning HTML
  const highlights = await fetchText(`/digests/${date}/daily-highlights.txt`);
  if (highlights && !highlights.trimStart().startsWith("<!")) renderHighlights(highlights);
  else heroEl.innerHTML = "";

  // All reports
  const entry = manifest?.dates.find((d) => d.date === date);
  if (entry && entry.reports.length > 0) {
    await renderAllReports(date, entry.reports);
  } else {
    reportsEl.innerHTML = `<div class="loading"><div class="loading-icon">📡</div><div>No reports for ${date}</div></div>`;
  }

  sidebar.classList.remove("open");
  cwrap.scrollTop = 0;
}

// ── Init ──

async function init(): Promise<void> {
  applyTheme(theme);
  applyFontSize(fontStep);
  applyWidth(wideMode);

  reportsEl.innerHTML = `<div class="loading"><div class="loading-icon">📡</div><div>正在加載…</div></div>`;
  manifest = await fetchJson<Manifest>("/manifest.json");

  if (!manifest || manifest.dates.length === 0) {
    heroEl.innerHTML = "";
    reportsEl.innerHTML = `
      <div class="welcome">
        <h2>📡 AI Ecosystem Radar</h2>
        <p>每日 AI 生態日報即將上線。</p>
      </div>`;
    return;
  }

  buildNav();

  // Build search index in background
  buildSearchIndex(manifest.dates).then((idx) => { searchIndex = idx; });

  // Navigate to hash or latest (support #date and #date/report formats)
  const hashRaw = location.hash.slice(1);
  const hashDate = hashRaw.split("/")[0];
  const targetDate = manifest.dates.find((d) => d.date === hashDate)?.date ?? manifest.dates[0]!.date;
  await navigateTo(targetDate);
}

window.addEventListener("popstate", () => {
  const date = location.hash.slice(1).split("/")[0];
  // Only navigate if it looks like a valid date (YYYY-MM-DD)
  if (date && /^\d{4}-\d{2}-\d{2}$/.test(date) && date !== currentDate) navigateTo(date);
});

// Keyboard: [ = older, ] = newer
document.addEventListener("keydown", (e) => {
  if (!manifest || (e.target as HTMLElement).tagName === "INPUT") return;
  const dates = manifest.dates.map((d) => d.date);
  const idx = dates.indexOf(currentDate);
  if (e.key === "[" && idx < dates.length - 1) navigateTo(dates[idx + 1]!);
  else if (e.key === "]" && idx > 0) navigateTo(dates[idx - 1]!);
});

init();
