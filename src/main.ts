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

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML.replace(/\n/g, "<br>");
}

function renderMd(md: string): string {
  const html = marked.parse(md) as string;
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ["details", "summary"],
    ADD_ATTR: ["open"],
  });
}

// ── Search ──

let searchDebounce: ReturnType<typeof setTimeout>;

async function buildSearchIndex(dates: ManifestDate[]): Promise<Map<string, string>> {
  const index = new Map<string, string>();
  await Promise.all(
    dates.map(async ({ date, reports }) => {
      const chunks = await Promise.all(
        reports.map(async (r) => {
          const text = await fetchText(`/digests/${date}/${r.file}`);
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

  dateNavEl.querySelectorAll(".date-hdr").forEach((hdr) => {
    const date = (hdr as HTMLElement).dataset.date || "";
    if (!needle || !searchIndex) {
      hdr.classList.remove("search-hit");
      return;
    }
    const text = searchIndex.get(date) || "";
    const matched = text.includes(needle);
    hdr.classList.toggle("search-hit", matched);
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
        ${escapeHtml(tweet)}
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
      <section class="report-section fade" id="section-${r.file.replace(".md", "")}">
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
    reports.map(async (r) => ({ file: r.file, md: await fetchText(`/digests/${date}/${r.file}`) }))
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
    .map((r) =>
      `<a href="#section-${r.file.replace(".md", "")}" class="quick-nav-item" title="${r.label}">${r.emoji}</a>`)
    .join("");
  document.body.appendChild(nav);
}

// ── Sidebar nav ──

function buildNav(): void {
  if (!manifest) return;

  dateNavEl.innerHTML = manifest.dates
    .map((d) =>
      `<div class="date-hdr ${d.date === currentDate ? "active" : ""}" data-date="${d.date}">
        ${d.date}
        <span class="report-count">${d.reports.length} reports</span>
      </div>`)
    .join("");

  dateNavEl.querySelectorAll(".date-hdr").forEach((hdr) => {
    hdr.addEventListener("click", () => {
      navigateTo((hdr as HTMLElement).dataset.date!);
    });
  });
}

// ── Navigation ──

async function navigateTo(date: string): Promise<void> {
  currentDate = date;
  history.pushState(null, "", `#${date}`);

  // Update sidebar active
  dateNavEl.querySelectorAll(".date-hdr").forEach((hdr) => {
    hdr.classList.toggle("active", (hdr as HTMLElement).dataset.date === date);
  });

  renderDateHeader(date);

  // Highlights
  const highlights = await fetchText(`/digests/${date}/daily-highlights.txt`);
  if (highlights) renderHighlights(highlights);
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

  // Navigate to hash or latest
  const hashDate = location.hash.slice(1);
  const targetDate = manifest.dates.find((d) => d.date === hashDate)?.date ?? manifest.dates[0]!.date;
  await navigateTo(targetDate);
}

window.addEventListener("popstate", () => {
  const date = location.hash.slice(1);
  if (date && date !== currentDate) navigateTo(date);
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
