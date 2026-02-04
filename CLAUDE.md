# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Formatting
- Use Prettier with the configured settings (4 spaces, single quotes, trailing commas)
- No linting commands are configured - suggest adding ESLint if code quality checks are needed

## Architecture

This is an Astro 5.17.1 static site (personal website/blog) with file-based routing. The project uses:

- **Astro components** (`.astro`) for static content and layouts
- **MDX** for blog posts in `/src/pages/posts/` with frontmatter metadata
- **Tailwind CSS 4.x** with custom theme configuration for styling
- **TypeScript** with strict mode enabled
- **Shadcn/ui components** (New York style) with path alias `@/*` → `./src/*`

### Key Patterns

1. **Component Organization**:
   - UI components in `/src/components/ui/` (Astro-based)
   - Page-specific components in respective folders (home/, posts/, navigation/)
   - Minimal React components for interactive elements only

2. **Styling**:
   - Tailwind utilities preferred
   - Custom CSS properties for theming in `/src/styles/global.css`
   - Dark mode support via CSS custom properties

3. **Content**:
   - Blog posts as MDX files in `/src/pages/posts/`
   - Static assets in `/public/`

### Deployment

GitHub Actions automatically deploys to GitHub Pages on push to `master` branch. The site is accessible at https://matloughnane.github.io