# Shared Packages

This directory contains shared libraries and modules that are used across multiple applications within the QuillSync monorepo (e.g., used by both `apps/web` and `apps/server`).

## What goes here?
- **`types`**: Shared TypeScript interfaces, types, and DTOs (Data Transfer Objects).
- **`ui`**: Shared React components or TailwindCSS configuration.
- **`utils`**: Common utility functions.
- **`config`**: Shared configuration files like ESLint, Prettier, or tsconfig presets.

## How to use
Packages created here can be added to the `package.json` dependencies of `apps/web` or `apps/server` and linked automatically via npm workspaces.
