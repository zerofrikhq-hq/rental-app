# RentKitta agent conventions

- Keep TypeScript in strict mode and preserve the workspace's type-safe boundaries.
- Keep features modular and avoid adding business functionality outside the requested scope.
- Reuse shared components, constants, and utilities instead of duplicating them.
- Keep secrets, tokens, passwords, and real environment values out of Git.
- Avoid unnecessary dependencies; prefer the capabilities already provided by Expo and Next.js.
- Preserve the `apps/*` and `packages/*` monorepo structure.
- Use pnpm for dependency installation and workspace commands.
- Run linting, type checks, and formatting checks before committing changes.
