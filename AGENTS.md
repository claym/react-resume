# Repository guidance

Personal resume site for Clay Mitchell (claymitchell.net), forked from `tbakerx/react-resume-template`. Next.js 13 (Pages Router) + React 18 + TypeScript + Tailwind, Yarn with `nodeLinker: node-modules`. Single static page; no tests, no API routes.

## Commands

```bash
yarn install
yarn dev        # runs `yarn compile` (tsc --build type check) then `next dev`
yarn build      # `yarn compile` then `next build`
yarn start      # serve production build
yarn lint       # prettier --write + eslint --fix --max-warnings=0 over ./src (MUTATES files)
yarn compile    # type check only (tsconfig has noEmit)
yarn sitemap    # next-sitemap -> sitemap + robots.txt
yarn clean      # rm -rf build-tsc .next
```

There is no test framework. Verify changes with `yarn compile` and `yarn lint`. Note `yarn lint` rewrites files, so run it on a clean tree or review the diff afterward.

Contact form needs `.env.local` (see `.env.local.sample`): `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_USER_ID`. Form sends via `@emailjs/browser` from the client.

## Architecture

- **Content lives in `src/data/data.tsx`; shapes live in `src/data/dataDef.ts`.** Almost all site edits (hero text, about, skills, experience timeline, testimonials, contact items, social links, page title/description) are changes to exported constants there. Entries such as `heroData.description` and `TimelineItem.content` are JSX, so the file is `.tsx`. Add new fields to `dataDef.ts` first, then the data, then the consuming component.
- **`src/pages/index.tsx` composes the page** from section components in `src/components/Sections/` (Hero, About, Resume, Testimonials, Contact, Footer). `Header` is loaded with `next/dynamic` and `ssr: false`. `Portfolio` is intentionally commented out of the page (data and images remain), as are the `education` block in `Resume/index.tsx` and several About/Contact items. Check for commented-out blocks before assuming something was deleted.
- **`SectionId` (in `data.tsx`) ties navigation together.** Each `Section` wrapper (`components/Layout/Section.tsx`) gets an id from it, `Header` builds nav links from it, and `hooks/useNavObserver.tsx` uses an IntersectionObserver on those ids to highlight the active nav item. Adding a section means updating `SectionId`, the page, and the Header's nav list.
- **Canonical URL / OG tags** are built in `components/Layout/Page.tsx` with a hardcoded `https://claymitchell.net` host. `next-sitemap.js` has the same host. Update both if the domain changes.
- `next.config.js` has a custom webpack tweak that clears `include` on Next's TS loader rules (carried over from the template). Leave it alone unless fixing a build problem. `pageExtensions` is `tsx, mdx, ts`. Remote images are allowed only from `images.unsplash.com` and `source.unsplash.com`.
- Static images are imported from `src/images/` (hero background, profile pic, portfolio, testimonial); favicons and `site.webmanifest` are in `public/`.

## Conventions (enforced by ESLint/Prettier)

- Prettier: 120 cols, single quotes, no bracket spacing (`{a}` not `{ a }`), trailing commas, `arrowParens: avoid`, `bracketSameLine`. `object-curly-spacing: never`.
- ESLint errors: `react-memo/require-memo` (wrap components in `memo`, set `displayName`) and `react-memo/require-usememo`, `react/jsx-sort-props` (alphabetical JSX props), `simple-import-sort`, `react-hooks/exhaustive-deps`. Lint runs with `--max-warnings=0`.
- Some existing files (e.g. `Contact/ContactForm.tsx`, `Resume/index.tsx`) are not Prettier-formatted (4-space indent, double quotes, comment-wrapped JSX blocks). `yarn lint` will reformat them, so expect diff noise when touching them.
- TypeScript is `strict` with `noUnusedLocals` and `noUnusedParameters`, so commented-out imports in `data.tsx` are deliberate: unused imports fail the type check.
- Styling is Tailwind utility classes; global SCSS is in `src/globalStyles.scss`. Prettier sorts Tailwind classes via `prettier-plugin-tailwindcss`.

## Deployment

Deployed to Vercel (`.vercel` is gitignored). `.omc/` (oh-my-claudecode state) is gitignored too.
