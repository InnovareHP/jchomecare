# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JC Homecare — a Payload CMS 3.x website built on Next.js 15 (App Router) with PostgreSQL. Based on the official Payload Website Template. Uses pnpm as the package manager.

## Commands

```bash
pnpm dev                    # Start dev server (localhost:3000)
pnpm build                  # Production build (Next.js + sitemap)
pnpm start                  # Serve production build
pnpm lint                   # ESLint check
pnpm lint:fix               # ESLint auto-fix
pnpm test                   # Run all tests (integration + e2e)
pnpm test:int               # Vitest integration tests only
pnpm test:e2e               # Playwright e2e tests only
pnpm generate:types         # Regenerate payload-types.ts after schema changes
pnpm generate:importmap     # Regenerate admin import map after adding/modifying components
pnpm payload migrate:create # Create a new Postgres migration
pnpm payload migrate        # Run pending migrations
```

Run a single integration test: `pnpm test:int -- tests/int/api.int.spec.ts`
Run a single e2e test: `pnpm test:e2e -- tests/e2e/admin.e2e.spec.ts`

TypeScript check: `npx tsc --noEmit`

## Architecture

### Payload + Next.js Unified App

The app runs Payload CMS and the frontend in a single Next.js instance. The Payload config is at `src/payload.config.ts` and uses `@payloadcms/db-postgres`.

### Route Groups

- `src/app/(frontend)/` — Public website routes (pages, posts, search, sitemaps)
- `src/app/(payload)/` — Payload admin panel routes (auto-managed)

### Collections & Globals

Collections: `Pages`, `Posts`, `Media`, `Categories`, `Users` (in `src/collections/`)
Globals: `Header`, `Footer` (in `src/Header/config.ts`, `src/Footer/config.ts`)

### Layout Builder Blocks

Page/post content is built from blocks in `src/blocks/`: ArchiveBlock, Banner, CallToAction, Code, Content, Form, MediaBlock. Each block has a `config.ts` (schema) and a React component.

### Plugins

Configured in `src/plugins/index.ts`: redirects, nested-docs (categories), SEO, form-builder, search (posts only).

### Access Control

Shared access functions in `src/access/`: `anyone`, `authenticated`, `authenticatedOrPublished`. The Local API bypasses access control by default — always pass `overrideAccess: false` when operating on behalf of a user.

### Path Aliases

- `@/*` → `src/*`
- `@payload-config` → `src/payload.config.ts`

### Key Patterns

- **Hooks pass `req`**: Always pass `req` to nested Payload operations inside hooks for transaction safety.
- **Context flags prevent hook loops**: Use `context.skipHooks` (or similar) when a hook triggers an operation on the same collection.
- **Revalidation hooks**: Collections and globals use `afterChange` hooks to call `revalidatePath`/`revalidateTag` for Next.js ISR.
- **Component paths as strings**: Admin panel custom components are referenced by file path (e.g., `'@/components/BeforeLogin'`), not direct imports. Run `pnpm generate:importmap` after adding new components.
- **Types regeneration**: Run `pnpm generate:types` after changing collection/global schemas. Types live in `src/payload-types.ts`.

### Testing

- Integration tests: `tests/int/*.int.spec.ts` (Vitest + jsdom)
- E2e tests: `tests/e2e/*.e2e.spec.ts` (Playwright, Chromium only)
- Test helpers: `tests/helpers/` (login, seedUser)

### UI

TailwindCSS v4 + shadcn/ui. shadcn components go in `src/components/`, utilities alias at `@/utilities/ui`.
