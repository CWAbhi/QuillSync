# Husky Git Hooks

This directory contains [Husky](https://typicode.github.io/husky/) configurations for managing Git hooks.

Husky helps maintain code quality by automatically running scripts (like linting, formatting, or testing) before certain Git actions are finalized.

## Common Hooks
- `pre-commit`: Runs linters, formatters, or type-checks before a commit is created.
- `commit-msg`: Validates the commit message format (e.g., using `commitlint`) to ensure it follows the Conventional Commits specification.
