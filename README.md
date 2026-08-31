# Pankaj Kumar — Portfolio

Personal portfolio site. React + Vite + TypeScript + Tailwind CSS v4, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Editing content

Everything on the site — name, summary, skills, experience, certifications, projects,
freelance services, and contact links — comes from one file:

**[`src/data/content.ts`](src/data/content.ts)**

To add a personal project, add an entry to the `projects` array there:

```ts
{
  title: "My Project",
  description: "What it does and what you used.",
  tags: ["Databricks", "Airflow"],
  repo: "https://github.com/datawithpankaj/my-project",
  link: "https://my-project-demo.example.com", // optional, if it's deployed somewhere
}
```

Remove the placeholder `"More projects coming soon"` entry once you have real ones.

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io) if configured, and falls back to
opening the visitor's email client if it isn't.

1. Create a free account at formspree.io and create a new form.
2. Copy the form ID (the part after `/f/` in your endpoint URL).
3. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID`.
4. For the deployed site, add the same value as a GitHub Actions secret named
   `VITE_FORMSPREE_ID` (repo Settings → Secrets and variables → Actions).

## Updating the resume PDF

Replace [`public/resume/Pankaj_Kumar_Resume.pdf`](public/resume/Pankaj_Kumar_Resume.pdf) with a
new export — the "Resume" button in the nav links to it directly, no code changes needed.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
that builds and deploys automatically on every push to `main`.

One-time setup on GitHub:

1. Push this repo to `github.com/datawithpankaj/datawithpankaj.github.io`
   (a repo named exactly `<username>.github.io` is served at the domain root, e.g.
   `https://datawithpankaj.github.io` — no `/repo-name/` path prefix, which is what this
   project's `vite.config.ts` assumes. If you use a different repo name instead, set `base:
   "/your-repo-name/"` in `vite.config.ts`.)
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. If using the contact form, add the `VITE_FORMSPREE_ID` secret (see above).
4. Push to `main` — the Actions tab will show the build/deploy run, and the site goes live at
   the URL Pages shows once it finishes.

## Tech stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for icons
- [Formspree](https://formspree.io) for the contact form backend
