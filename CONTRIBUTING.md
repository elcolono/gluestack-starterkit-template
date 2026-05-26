# Contributing

Thanks for helping improve the Universal Next.js + Expo Template.

## Development Setup

1. Fork and clone the repository.
2. Install dependencies:

```bash
pnpm install
```

3. Run the app you want to work on:

```bash
pnpm dev:web
pnpm dev:mobile
```

## Before Opening a Pull Request

Run the checks that match your change:

```bash
pnpm --filter web typecheck
pnpm lint
```

For larger web changes, also run:

```bash
pnpm build
```

## Pull Request Guidelines

- Keep pull requests focused on one feature, fix, or cleanup.
- Include screenshots or screen recordings for UI changes.
- Mention any follow-up work that should not block the PR.
- Update the README when commands, setup steps, or project structure change.
- Do not commit generated build output, local env files, signing files, or local editor state.

## Commit Messages

Use short conventional-style messages when possible:

```text
feat(web): add theme toggle
fix(ui): prevent hydration mismatch
docs: document setup commands
```

## Code Style

- Prefer shared components exported from `@repo/ui`.
- Keep reusable product UI in workspace packages.
- Use Gluestack and NativeWind tokens instead of raw colors.
- Avoid broad refactors in feature PRs unless they are required by the change.
