# QuillSync Backend (Server)

This directory contains the Node.js backend application for QuillSync.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Language:** TypeScript
- **Database:** MongoDB (with Mongoose)
- **Real-Time:** Socket.IO

## Development

To start the development server for the backend, run the following command from the root of the repository:

```bash
npm run dev:server
```

## Folder Structure (Recommended)
- `src/controllers/`: Request handlers for REST endpoints.
- `src/services/`: Core business logic and database interactions.
- `src/models/`: MongoDB schema definitions.
- `src/routes/`: Express route definitions.
- `src/sockets/`: Real-time Socket.IO event handlers.
- `src/middlewares/`: Express middlewares (e.g., auth, error handling).
