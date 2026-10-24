# RentKitta

RentKitta is a peer-to-peer neighborhood rental marketplace. This repository contains the initial monorepo scaffold for the mobile application, admin dashboard, and shared TypeScript code.

This first commit intentionally contains setup only. Product functionality, authentication, backend integrations, and marketplace screens will be added in future work.

## Tech stack

- Mobile: React Native, Expo SDK 58, Expo Router, TypeScript
- Admin: Next.js 16 App Router, React, TypeScript, Tailwind CSS 4
- Workspace: pnpm workspaces
- Quality: ESLint, Prettier, strict TypeScript

## Project structure

```text
apps/
  mobile/       Expo React Native application
  admin/        Next.js administration application
packages/
  shared/       Common TypeScript constants, types, and utilities
```

## Prerequisites

- Node.js 22.13+ or Node.js 24.3+
- pnpm 11+
- For native mobile development, the Android Studio and/or Xcode tooling required by Expo

## Installation

```bash
pnpm install
```

## Run locally

Start the mobile application with Expo:

```bash
pnpm dev:mobile
```

Start the admin application at `http://localhost:3000`:

```bash
pnpm dev:admin
```

The equivalent package-specific commands are `pnpm --filter @rentkitta/mobile start` and `pnpm --filter @rentkitta/admin dev`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm format:check
```

Format the repository with:

```bash
pnpm format
```

## Future development notes

- Keep backend and Supabase integration out of the scaffold until the application architecture is agreed.
- Add new product capabilities as focused, modular features.
- Keep shared contracts and utilities in `packages/shared` when they are used by more than one app.
- Never commit secrets or real environment values. Use `.env.example` files for documented configuration names.
