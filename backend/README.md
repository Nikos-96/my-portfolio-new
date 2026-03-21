# express-ts-starter

A minimal but production-ready Express + TypeScript backend template.

## Stack

- **Express 5** — web framework
- **TypeScript** — strict mode
- **Pino** — structured logging
- **Helmet** — security headers
- **Zod** — env validation and request validation
- **Vitest + Supertest** — testing
- **ESLint** — linting

## Structure

```
src/
├── __tests__/        # test files
├── config/
│   ├── cors.ts       # cors options
│   └── env.ts        # env validation (start here for new env vars)
├── controllers/      # route handlers and request validation
├── middleware/
│   ├── errorHandler.ts
│   └── rateLimiter.ts
├── routes/           # express routers
├── types/
│   └── index.ts      # shared types and interfaces
└── utils/
    └── logger.ts
```

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled production build |
| `npm test` | Run tests |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No (default: 3000) | Server port |
| `NODE_ENV` | No (default: development) | `development`, `production`, or `test` |
| `CORS_ORIGIN` | Production only | Allowed origin URL |

## Adding a new endpoint

1. **Add types** → `src/types/index.ts`
2. **Create controller** → `src/controllers/yourController.ts`
3. **Create route** → `src/routes/your.ts`
4. **Mount route** → `src/index.ts`
5. **Write test** → `src/__tests__/your.test.ts`

### Controller pattern

```typescript
import { Request, Response } from 'express';
import { z } from 'zod';
import { ApiResponse, YourType } from '../types';
import { logger } from '../utils/logger';

const schema = z.object({
    field: z.string().min(1),
});

export const yourHandler = (req: Request, res: Response) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ status: 'error', error: result.error.flatten() } satisfies ApiResponse);
        return;
    }

    const { field } = result.data;

    // your logic here

    res.json({ status: 'ok', data: { field } } satisfies ApiResponse<YourType>);
};
```

## Before committing

```bash
npx tsc --noEmit
npm run lint
npm test
```
