import { marked } from "marked";
import DOMPurify from "dompurify";

// ── Types ──

interface ManifestReport { file: string; label: string; emoji: string; }
interface ManifestDate { date: string; reports: ManifestReport[]; }
interface Manifest { generated: string; dates: ManifestDate[]; }

// ── State ──

let manifest: Manifest | null = null;
let currentDate = "";

// ── DOM ──

const dateListEl = document.getElementById("date-list")!;
const dateHeaderEl = document.getElementById("date-header")!;
const heroEl = document.getElementById("hero")!;
const reportsEl = document.getElementById("reports")!;
const themeToggle = document.getElementById("theme-toggle")!;
const sidebarToggle = document.getElementById("sidebar-toggle")!;
const sidebar = document.getElementById("sidebar")!;

// ── Theme ──

function initTheme(): void {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  themeToggle.textContent = saved === "dark" ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.textContent = next === "dark" ? "🌙" : "☀️";
});

sidebarToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

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
  return DOMPurify.sanitize(marked.parse(md) as string);
}

// ── Render: date header ──

function renderDateHeader(date: string): void {
  const d = new Date(date + "T00:00:00");
  const weekday = d.toLocaleDateString("zh-TW", { weekday: "long" });
  const formatted = d.toLocaleDateString("zh-TW", { year: "numeric", month: "long", day: "numeric" });
  dateHeaderEl.innerHTML = `
    <div class="date-header-main">${formatted} ${weekday}</div>
    <div class="date-header-sub">AI Ecosystem Daily Digest</div>
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

// ── Render: all reports as newspaper sections ──

async function renderAllReports(date: string, reports: ManifestReport[]): Promise<void> {
  reportsEl.innerHTML = reports
    .map((r) => `
      <section class="report-section" id="section-${r.file.replace(".md", "")}">
        <div class="report-section-header" data-file="${r.file}">
          <span class="report-section-emoji">${r.emoji}</span>
          <h2 class="report-section-title">${r.label}</h2>
          <span class="report-section-toggle">▼</span>
        </div>
        <div class="report-section-body content" data-file="${r.file}">
          <div class="loading">Loading...</div>
        </div>
      </section>`)
    .join("");

  // Fetch all reports in parallel
  const results = await Promise.all(
    reports.map(async (r) => ({
      file: r.file,
      md: await fetchText(`/digests/${date}/${r.file}`),
    }))
  );

  // Render each
  for (const { file, md } of results) {
    const body = reportsEl.querySelector(`.report-section-body[data-file="${file}"]`);
    if (body && md) {
      body.innerHTML = renderMd(md);
    } else if (body) {
      body.innerHTML = `<p class="no-data">No data available</p>`;
    }
  }

  // Toggle collapse
  reportsEl.querySelectorAll(".report-section-header").forEach((header) => {
    header.addEventListener("click", () => {
      const section = header.closest(".report-section")!;
      section.classList.toggle("collapsed");
      const toggle = header.querySelector(".report-section-toggle")!;
      toggle.textContent = section.classList.contains("collapsed") ? "▶" : "▼";
    });
  });

  // Quick-nav: jump anchors
  updateQuickNav(reports);
}

// ── Quick nav (sticky report jump links) ──

function updateQuickNav(reports: ManifestReport[]): void {
  const existing = document.getElementById("quick-nav");
  if (existing) existing.remove();

  const nav = document.createElement("nav");
  nav.id = "quick-nav";
  nav.className = "quick-nav";
  nav.innerHTML = reports
    .map((r) =>
      `<a href="#section-${r.file.replace(".md", "")}" class="quick-nav-item">${r.emoji}</a>`)
    .join("");

  document.body.appendChild(nav);
}

// ── Render: date list sidebar ──

function renderDateList(): void {
  if (!manifest) return;

  dateListEl.innerHTML = manifest.dates
    .map((d) =>
      `<button class="date-item ${d.date === currentDate ? "active" : ""}" data-date="${d.date}">
        ${d.date}
        <span class="report-count">${d.reports.length}</span>
      </button>`)
    .join("");

  dateListEl.querySelectorAll(".date-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigateTo((btn as HTMLElement).dataset.date!);
    });
  });
}

// ── Navigation ──

async function navigateTo(date: string): Promise<void> {
  currentDate = date;
  window.location.hash = date;

  dateListEl.querySelectorAll(".date-item").forEach((btn) => {
    btn.classList.toggle("active", (btn as HTMLElement).dataset.date === date);
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
    reportsEl.innerHTML = `<div class="welcome"><p>No reports for ${date}</p></div>`;
  }

  sidebar.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Init ──

async function init(): Promise<void> {
  initTheme();

  reportsEl.innerHTML = `<div class="loading">Loading...</div>`;
  manifest = await fetchJson<Manifest>("/manifest.json");

  if (!manifest || manifest.dates.length === 0) {
    heroEl.innerHTML = "";
    reportsEl.innerHTML = `
      <div class="welcome">
        <h2>🛰️ AI Ecosystem Radar</h2>
        <p>每日 AI 生態日報即將上線。<br>Daily AI ecosystem reports coming soon.</p>
      </div>`;
    return;
  }

  renderDateList();

  const hashDate = window.location.hash.replace("#", "");
  const targetDate = manifest.dates.find((d) => d.date === hashDate)?.date ?? manifest.dates[0]!.date;
  await navigateTo(targetDate);
}

window.addEventListener("hashchange", () => {
  const date = window.location.hash.replace("#", "");
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
