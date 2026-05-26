# Web App

Next.js 15 web target for the Universal Next.js + Expo Template.

## Commands

```bash
pnpm --filter web dev
pnpm --filter web typecheck
pnpm --filter web lint
```

From the workspace root, the preferred shortcut is:

```bash
pnpm dev:web
```

## App Structure

- `app/layout.tsx` defines SEO metadata, fonts, and the root theme shell.
- `app/page.tsx` renders the shared starter module from `@repo/starter`.
- `app/theme-shell.tsx` owns the Gluestack color mode provider and theme toggle.

Shared UI comes from `@repo/ui`; shared content and starter screen composition
come from `@repo/starter`.
