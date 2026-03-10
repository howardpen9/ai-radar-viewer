import { marked } from "marked";
import DOMPurify from "dompurify";

interface ManifestReport { file: string; label: string; emoji: string; }
interface ManifestDate { date: string; reports: ManifestReport[]; }
interface Manifest { generated: string; dates: ManifestDate[]; }

let manifest: Manifest | null = null;
let currentDate = "";
let currentReport = "";

const dateListEl = document.getElementById("date-list")!;
const heroEl = document.getElementById("hero")!;
const tabsEl = document.getElementById("report-tabs")!;
const contentEl = document.getElementById("content")!;
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

// ── Fetch helpers ──

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

// ── Render highlights hero ──

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML.replace(/\n/g, "<br>");
}

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
    <div class="hero-title">✨ Today's Highlights</div>
    <div class="highlight-cards">${cards}</div>
  `;
}

// ── Render markdown report ──

function renderReport(md: string): void {
  const html = DOMPurify.sanitize(marked.parse(md) as string);
  contentEl.innerHTML = html;
}

// ── Render date list ──

function renderDateList(): void {
  if (!manifest) return;

  dateListEl.innerHTML = manifest.dates
    .map((d) =>
      `<button class="date-item ${d.date === currentDate ? "active" : ""}" data-date="${d.date}">
        ${d.date}
        <span class="report-count">${d.reports.length} reports</span>
      </button>`)
    .join("");

  dateListEl.querySelectorAll(".date-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigateTo((btn as HTMLElement).dataset.date!);
    });
  });
}

// ── Render report tabs ──

function renderTabs(reports: ManifestReport[]): void {
  tabsEl.innerHTML = reports
    .map((r) =>
      `<button class="tab-btn ${r.file === currentReport ? "active" : ""}" data-file="${r.file}">
        ${r.emoji} ${r.label}
      </button>`)
    .join("");

  tabsEl.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectReport((btn as HTMLElement).dataset.file!);
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

  const highlights = await fetchText(`/digests/${date}/daily-highlights.txt`);
  if (highlights) renderHighlights(highlights);
  else heroEl.innerHTML = "";

  const entry = manifest?.dates.find((d) => d.date === date);
  if (entry && entry.reports.length > 0) {
    renderTabs(entry.reports);
    await selectReport(entry.reports[0]!.file);
  } else {
    tabsEl.innerHTML = "";
    contentEl.innerHTML = `<div class="welcome"><p>No reports for ${date}</p></div>`;
  }

  sidebar.classList.remove("open");
}

async function selectReport(file: string): Promise<void> {
  currentReport = file;

  tabsEl.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", (btn as HTMLElement).dataset.file === file);
  });

  contentEl.innerHTML = `<div class="loading">Loading report...</div>`;
  const md = await fetchText(`/digests/${currentDate}/${file}`);
  if (md) renderReport(md);
  else contentEl.innerHTML = `<div class="welcome"><p>Report not found</p></div>`;
}

// ── Init ──

async function init(): Promise<void> {
  initTheme();

  contentEl.innerHTML = `<div class="loading">Loading manifest...</div>`;
  manifest = await fetchJson<Manifest>("/manifest.json");

  if (!manifest || manifest.dates.length === 0) {
    heroEl.innerHTML = "";
    tabsEl.innerHTML = "";
    contentEl.innerHTML = `
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
  if (!manifest) return;
  const dates = manifest.dates.map((d) => d.date);
  const idx = dates.indexOf(currentDate);
  if (e.key === "[" && idx < dates.length - 1) navigateTo(dates[idx + 1]!);
  else if (e.key === "]" && idx > 0) navigateTo(dates[idx - 1]!);
});

init();
