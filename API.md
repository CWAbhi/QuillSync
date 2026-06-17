## Purpose: Create contracts between frontend and backend. This document is the single source of truth for all API interactions.

## Each endpoint entry must include:
• Method and path
• Purpose in plain language
• Request format with field descriptions
• Response format with field descriptions
• All possible error cases and their HTTP codes

## Example endpoint entry:

- POST /api/projects
- Purpose: Create a new project.
- Request body:
 name (string, required) — Project display name
 description (string, optional) — Short project description
- Response 201:
 id (uuid) — Created project ID
 name (string) — Project name
 createdAt (ISO 8601 timestamp)
- Errors:
 400 — Missing required field
 401 — Not authenticated
 409 — Project name already exists for this team