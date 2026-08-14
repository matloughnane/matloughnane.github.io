# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarily **people who already know Mat** — friends, family, and colleagues. They
arrive because they were sent a link, or because they want to see where he's been
lately, or to cook something he's made before. They are not strangers who need
convincing who he is; they already know, and the site either does him justice or
doesn't.

Search arrivals on individual recipe and destination posts exist (the archive goes
back to 2020 and old permalinks are actively redirected) but were not identified as
the audience that shapes decisions.

## Product Purpose

A personal site for Mat Loughnane — travel, food, and coding stories — kept
deliberately separate from his professional studio work at hexastudios.co.

Success over the next year is that **anyone who lands here comes away with a clear,
favourable sense of who Mat is**. Not traffic growth, not publishing volume,
not archive depth for its own sake. The site is a representation of a person.

## Positioning

A continuous, first-person archive of one life across three subjects that don't
normally sit together — travel, cooking, and software. Everything on it was
actually cooked, visited, or built by the author. It is not a content operation,
a niche blog, or a portfolio; a neighbouring site could copy the categories but
not the six-year single-author record behind them.

## Operating Context

- **Publishing** is writing a `.md` or `.mdx` file into `src/pages/posts/` with
  frontmatter (`title`, `author`, `categories`, `tags`, `image`, `learn_more`).
  There is no CMS or admin UI. Friction to publish is friction to the whole product.
- **Deploy** is a push to `master`; GitHub Actions builds and publishes to
  GitHub Pages, served at matloughnane.com (`public/CNAME`).
- **Drafts** are held back with `draft: true` or a `wip` tag and filtered out in
  `src/lib/posts.ts`.
- **Recipes** carry structured frontmatter — `recipe: true`, `prepTime`, `cookTime`,
  `recipeIngredient`, `recipeInstructions` — authored per post.

## Capabilities and Constraints

- **37 published posts** plus 4 drafts, spanning 2020–2026. By category:
  16 Recipes, 14 Travel, 7 Code, and a small number with one-off categories
  (`Ferry, Kiosk, Hardware`; `about`).
- The homepage currently surfaces only the **latest 7** posts (`limit={7}`); the
  rest live behind paginated `/posts`.
- Existing surfaces: home, about, paginated posts index, client-side search.
- File-based routing, static output, sitemap integration.
- **Binding constraint — existing URLs.** The Jekyll→Astro redirect map in
  `astro.config.mjs` (31 legacy permalinks) and the `/posts/DATE-slug/` scheme must
  keep working. Old links must not break.
- **Not** established as binding, and therefore open: static-only GitHub Pages
  hosting, the Travel/Food/Code category trio, and the outbound Hexa Studios link.
  These are current practice, not commitments — future work may revisit them.
- Comments are disabled site-wide (`comments: false` on every post).
- **Undecided / unbuilt:** the recipe frontmatter is structured for schema.org
  Recipe markup, but no JSON-LD is emitted anywhere. The data exists; the output
  does not. Whether to ship it is an open decision, not an oversight to assume.

## Brand Commitments

- The name **Mat Loughnane** and the personal/professional split from
  **Hexa Studios** (hexastudios.co) are factual and current.
- Voice is first-person, plain, and unpretentious — short posts, no preamble,
  occasional puns in the call-to-action copy (`Slea Head`, `Jekyll > Astro`,
  `Exper-AI-menting`, `Read Amour`, `Bridge the Gap`). That wordplay is a real
  characteristic of the existing writing.
- No formal identity system, logo, or brand guidelines were established as binding.

## Evidence on Hand

Real, first-party, and safe to use:

- **Photography** — the author's own travel and food photos throughout
  `public/assets/images/` (travel, recipes, code, about).
- **Recipes** — genuine, tested, with real ingredient lists and method
  (e.g. Soda Bread, Carrot Cake — named as his favourite thing to make).
- **Projects** — Bridgit (a charities iPaaS, launched in beta), The Arranmore
  Challenge App, the Arranmore ferry kiosk, annual Hexa round-ups.
- **Biography** — software developer from London, living in Dublin; over a decade
  building web and mobile apps; founder of Hexa Studios.

Absent, and **not to be fabricated**: testimonials, client names, analytics or
traffic figures, follower counts, awards, press mentions, or newsletter subscriber
numbers. There is no measurement in place for any of them.

## Product Principles

1. **It represents a person, not a publication.** Every decision is judged by
   whether someone who knows Mat would recognise him in it.
2. **Publishing must stay a single file.** Anything that makes posting harder than
   dropping a markdown file into a folder works against the product.
3. **Old links are permanent.** Six years of permalinks are already redirected once;
   they don't get to break a second time.
4. **The archive is real, so use the real thing.** Genuine photos, genuine recipes,
   genuine projects — never placeholder or invented content.
5. **Personal stays separate from the studio.** This site is not a Hexa Studios
   sales surface; it points there and stops.
