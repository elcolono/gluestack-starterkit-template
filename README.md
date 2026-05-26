# Universal Next.js + Expo Template

A universal app template for building web and native product surfaces from one
workspace. The web app runs on Next.js, the native app runs on Expo, and shared
UI lives in local workspace packages powered by Gluestack UI and NativeWind.

## Stack

- `apps/web` - Next.js 15 app with App Router
- `apps/mobile` - Expo app for iOS, Android, and Expo web
- `packages/ui` - shared Gluestack UI components
- `packages/starter` - shared starter screen and template content

## Commands

```bash
pnpm install
pnpm dev:web
pnpm dev:mobile
pnpm dev:mobile:web
pnpm --filter web typecheck
pnpm lint
```

## Repository Structure

```text
apps/
  web/       Next.js app
  mobile/    Expo app
packages/
  ui/        Shared Gluestack UI components
  starter/   Shared starter screen
```

## Development

Run the web app:

```bash
pnpm dev:web
```

Run the Expo app:

```bash
pnpm dev:mobile
```

Run Expo for web:

```bash
pnpm dev:mobile:web
```

## Shared UI

App screens should prefer the components exported from `@repo/ui`. Shared
feature or content modules can live in `packages/starter` or new workspace
packages, then be consumed by both Next.js and Expo targets.

The template includes Gluestack light/dark mode support. The Next.js app uses
the Gluestack provider at the root and renders a compact theme toggle inside the
starter content header.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md)
before opening a pull request.

Useful GitHub workflows:

- Open a bug report with the Bug report issue template.
- Open a feature request with the Feature request issue template.
- Include screenshots for UI pull requests.
- Run the relevant checks before requesting review.

## Security

Please do not open public issues for undisclosed vulnerabilities. See
[SECURITY.md](./SECURITY.md) for reporting guidance.

## License

MIT. See [LICENSE](./LICENSE).
