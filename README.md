# 📡 AI Radar Viewer

Static web viewer for [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) daily AI ecosystem digests.

**Live**: [ai-radar-viewer.up.railway.app](https://ai-radar-viewer.up.railway.app)

## Features

- Dark / Light theme with localStorage persistence
- Font size control (XS / S / M / L / XL)
- Full-text search across all dates
- Collapsible report sections with emoji quick-nav
- Keyboard navigation: `[` older, `]` newer
- Mobile responsive sidebar
- RSS feed support (Atom)

## Architecture

```
ai-ecosystem-radar (private)
  │ GitHub Actions daily cron
  │ → generates digests + manifest.json + feed.xml
  │
  ├─ repository_dispatch: digest-updated
  │
  ▼
ai-radar-viewer (public)
  │ sync-data workflow
  │ → copies digests/ manifest.json feed.xml into data/
  │ → git push → Railway auto-deploy
  │
  ▼
Railway (static site via Caddy)
  → https://ai-radar-viewer.up.railway.app
```

Zero runtime cost. Data syncs automatically after each daily digest run.

## Stack

- **Vite** + vanilla TypeScript (no framework)
- **marked** — Markdown rendering
- **DOMPurify** — HTML sanitization (with `<details>/<summary>` support)
- **Google Fonts** — Space Mono (UI) + Source Serif 4 (body)
- **Railway** — static hosting via Nixpacks/Caddy

## Local Development

```bash
pnpm install
pnpm dev
```

Reports are served from `data/` directory (configured as Vite `publicDir`).

## Data Sync

The `.github/workflows/sync-data.yml` workflow:
1. Triggered by `repository_dispatch` from ai-ecosystem-radar
2. Checks out the private data repo using `DATA_REPO_TOKEN`
3. Copies `digests/`, `manifest.json`, `feed.xml` into `data/`
4. Commits and pushes — Railway auto-deploys

### Required Secrets

| Secret | Purpose |
|--------|---------|
| `DATA_REPO_TOKEN` | Fine-grained PAT with read access to ai-ecosystem-radar |

## Related

- [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) — Data source (daily digest pipeline)
- [duanyytop/agents-radar](https://github.com/duanyytop/agents-radar) — Upstream inspiration

## License

MIT
