# AGENTS.md

DogLife Store landing page: one static Astro page (Spanish, es-PE, prices in soles `S/`) selling
dehydrated chicken feet in Lima. There is no backend, cart, or checkout — orders go through WhatsApp,
and every CTA URL comes from `buildWhatsAppUrl()` in `src/data/doglife.ts`. Don't add e-commerce
plumbing unless explicitly asked.

## Commands

pnpm (lockfile is `pnpm-lock.yaml`; Node >=22.23.4 per `engines`).

- `pnpm dev` — dev server on :4321. Prefer `pnpm dev --background`, then manage it with
  `pnpm astro dev status | logs | stop`.
- `pnpm build` — the only verification available. No lint, test, or typecheck scripts exist, and
  `astro check` is not installed (`@astrojs/check` and `typescript` are absent).
- `pnpm preview` — serve the built `dist/`.

Windows quirk: `pnpm astro dev stop` can hang; use `./node_modules/.bin/astro dev stop`.

## Layout & content

- `src/pages/index.astro` is the whole site: it just composes the section components in order and
  holds the scrollspy script. Section ids (`#inicio`, `#beneficios`, `#catalogo-packs`,
  `#seguridad-faq`, `#como-pedir`, `#contacto`) are the nav targets in `Header`, `MobileBottomNav`,
  and `Footer` — renaming one silently breaks navigation/scrollspy.
- All copy, prices, phone numbers, packs, FAQ, order steps, and testimonials live in
  `src/data/doglife.ts`. Edit content there, not inside components.
- Mobile and desktop copy are intentionally different (extra `mobile*` fields, `md:hidden` /
  `hidden md:` pairs). Don't "dedupe" them into one string.
- Most sections use `.deferred-section` plus an inline `--section-intrinsic-height` for
  `content-visibility`; keep that pattern for new sections to avoid layout jumps.

## Styling

- Tailwind v4 through `@tailwindcss/vite`; there is no `tailwind.config.*`. Tokens live in the
  `@theme` block of `src/styles/global.css` and mirror `DESIGN.md` — change both when a token changes.
- Use semantic token utilities (`bg-mocha`, `text-honey`, `border-craft-border`, `px-margin-mobile`,
  `text-body-md`, `shadow-ambient`), never raw hex or arbitrary color values.
- Shared helpers (`.fluid-hero-title`, `.boutique-card`, `.visually-hidden`, `.pb-safe`) are defined
  in the same file; reuse them instead of recreating effects per component.
- `@/*` maps to `src/*` (tsconfig paths).

## Assets

- Icons are SVG files in `src/assets/icons` imported as Astro components with `aria-hidden="true"`.
- Photos live in `src/assets/images` and are processed with `astro:assets` (`Image`, `getImage`);
  only `favicon.*` belongs in `public/`.
- The hero is art-directed with a `<picture>` (separate mobile/desktop crops) — keep both sources.

Docs: https://docs.astro.build
