# Portfolio

Personal portfolio site. React + Vite + TypeScript + Tailwind CSS v4, deployed to GitHub Pages.

This is a reusable template: anyone can make it their own by editing [`src/data/content.ts`](src/data/content.ts) (name, summary, skills, experience, projects, contact links) and replacing the photo and resume in `public/`. No other files need to change.

## Local development

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

A GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds and deploys on every push to `main`.

1. Push this repo to `github.com/<username>/<username>.github.io`, or set `base: "/your-repo-name/"` in `vite.config.ts` if using a different repo name.
2. In the repo, set **Settings → Pages → Source** to **GitHub Actions**.
3. For the contact form to send email, create a form at [Formspree](https://formspree.io) and add its ID as a repo secret named `VITE_FORMSPREE_ID`.
