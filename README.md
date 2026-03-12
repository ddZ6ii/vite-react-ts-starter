# vite-react-ts-starter

A minimal React + TypeScript starter with strict linting, formatting, and testing configured out of the box.

## Stack

| Tool                                           | Version | Purpose                 |
| ---------------------------------------------- | ------- | ----------------------- |
| [Vite](https://vitejs.dev)                     | 7       | Build tool & dev server |
| [React](https://react.dev)                     | 19      | UI library              |
| [TypeScript](https://www.typescriptlang.org)   | 5.9     | Type safety             |
| [Vitest](https://vitest.dev)                   | 4       | Unit testing            |
| [Testing Library](https://testing-library.com) | 16      | Component testing       |
| [ESLint](https://eslint.org)                   | 9       | Linting                 |
| [Prettier](https://prettier.io)                | 3       | Code formatting         |
| [lucide-react](https://lucide.dev)             | 0.577   | Icon library            |

**Tooling:** ESLint (strict TypeScript + React rules), Prettier (with Tailwind class sorting), pnpm.

## Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io) 10 — `npm install -g pnpm`

## Getting Started

```bash
# 1. Clone / download this starter
git clone <repo-url> my-app
cd my-app

# 2. Install dependencies
pnpm install

# 3. Start the dev server (opens browser automatically)
pnpm dev
```

The dev server opens in Chrome automatically.

## Scripts

| Script               | Description                           |
| -------------------- | ------------------------------------- |
| `pnpm dev`           | Start dev server (opens Chrome)       |
| `pnpm build`         | Format, lint, type-check, then bundle |
| `pnpm preview`       | Preview the production build          |
| `pnpm build:preview` | Build then immediately preview        |
| `pnpm test`          | Run tests once                        |
| `pnpm test:watch`    | Run tests in watch mode               |
| `pnpm lint`          | Run ESLint                            |
| `pnpm format`        | Format all files with Prettier        |
| `pnpm format:check`  | Check formatting without writing      |
| `pnpm format:lint`   | Format then lint                      |

## Path Aliases

Configured in [vite.config.ts](vite.config.ts) — use these instead of relative imports.

| Alias         | Resolves to       |
| ------------- | ----------------- |
| `@`           | `src/`            |
| `@assets`     | `src/assets/`     |
| `@components` | `src/components/` |
| `@contexts`   | `src/contexts/`   |
| `@hooks`      | `src/hooks/`      |
| `@pages`      | `src/pages/`      |
| `@reducers`   | `src/reducers/`   |
| `@stores`     | `src/stores/`     |
| `@themes`     | `src/themes/`     |
| `@types`      | `src/types/`      |
| `@utils`      | `src/utils/`      |

## Tooling Notes

**ESLint** — strict TypeScript rules (`strictTypeChecked` + `stylisticTypeChecked`), plus `jsx-a11y`, `react-hooks`, `react-x`, and `react-dom` plugins. Unused variables are an error unless prefixed with `_`.

**Prettier** — no semicolons, single quotes, 2-space indent, trailing commas, LF line endings.

**Vitest** — runs in a jsdom environment with globals enabled. Test setup file is at [`src/__tests__/setup.ts`](src/__tests__/setup.ts). Place tests in `src/__tests__/`.

**Vite** — automatically opens Chrome on `dev` and `preview`. The `@` aliases above are also available in TypeScript via [`tsconfig.app.json`](tsconfig.app.json).
