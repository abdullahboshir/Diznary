# How to Deploy to Vercel

This monorepo is configured to deploy both the **Frontend** (Next.js) and **Backend** (NestJS Serverless) on Vercel using a single project configuration.

## 1. Prerequisites
- **Vercel CLI**: Installed and logged in (`npm i -g vercel && vercel login`).
- **Git**: Project pushed to a Git repository (GitHub/GitLab/Bitbucket).

## 2. Environment Variables
You MUST set the following environment variables in your Vercel Project Settings:

### Backend Variables
- `DATABASE_URL`: Your PostgreSQL connection string (Postgres/Supabase/Prisma managed).
- `JWT_SECRET`: Secret key for authentication.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `SSLCOMMERZ_STORE_ID`, `SSLCOMMERZ_STORE_PASSWORD`
- `FRONTEND_URL`: URL of your deployed frontend (e.g. `https://diznary.vercel.app`).

### Frontend Variables
- `NEXT_PUBLIC_API_BASE_URL`: For this setup, since we use rewrites, you can often leave this as `/api/v1` or pointing to the full Vercel URL.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## 3. Deployment Steps

### Option A: Connect via Git (Recommended)
1. Go to Vercel Dashboard -> **Add New Project**.
2. Import your Git repository.
3. **Framework Preset**: Vercel should detect Next.js, but since `vercel.json` is present, it will respect the multi-build config.
4. **Root Directory**: Leave as `./`.
5. **Build Command**: `turbo run build` (or leave default if Vercel handles it via workspaces).
6. **Deploy**.

### Option B: Deploy via CLI
Run the following command in the root directory:
```bash
vercel
```
Follow the prompts to link the project.

## 4. Verification
- **Frontend**: Visit `https://your-project.vercel.app`.
- **Backend**: Visit `https://your-project.vercel.app/api/v1`. You should see "Hello World!".

## Troubleshooting
- **Backend Cold Start**: The first request might be slow as the serverless function spins up.
- **Connection Limits**: Ensure your database (e.g. Supabase/Neon) handles serverless connections well (use connection pooling).
