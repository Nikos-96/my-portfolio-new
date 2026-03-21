# My Portfolio

Personal portfolio website with a React frontend, Node.js/Express backend and Strapi CMS.

## Stack

- **Frontend** — React, TypeScript, Vite, Zustand
- **Backend** — Node.js, Express, TypeScript
- **CMS** — Strapi

## Setup

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment variables

**Frontend** — copy and fill in production URLs:
```bash
cp frontend/.env.development frontend/.env.production
```

**Backend** — copy and fill in secrets:
```bash
cp backend/.env.example backend/.env
```

**CMS** — copy your local `.env` to the server manually (contains auto-generated Strapi secrets).

### 3. Build

```bash
npm run build
```

### 4. Start

```bash
# From backend/
pm2 start ecosystem.config.js --env production --name my-portfolio-backend

# From cms/
pm2 start npm --name my-portfolio-cms -- run start

pm2 save
```

## Update
```bash
git pull
npm run install:all
npm run build
pm2 reload my-portfolio-backend
pm2 reload my-portfolio-cms
```

Frontend is static — serve the `frontend/dist/` folder with nginx.