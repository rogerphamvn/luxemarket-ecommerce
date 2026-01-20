Mood Checker MVP scaffold using Next.js + Supabase

This repository contains the MVP for a Mood Checker web app. Frontend is Next.js (TypeScript) and backend is Supabase (Postgres + Auth).

Setup steps (quick):
- Install: npm i
- Copy env.sample to .env and fill SUPABASE_URL and SUPABASE_ANON_KEY
- Run: npm run dev

- Prerequisites:
- Node.js 18+ installed
- Supabase account and project created; get API URL and anon/public key

Quick Start:
- Copy env.sample to .env and fill SUPABASE_URL and SUPABASE_ANON_KEY
- Install: npm i
- Run: npm run dev
- Node.js 18+ installed
- Supabase account and project created; get API URL and anon/public key

Project structure:
- mood-checker/
  - apps/
  - components/
  - pages/
  - lib/
  - prisma/ (not used in MVP, placeholder)

Getting started:
- Copy env.sample to .env and fill SUPABASE_URL and SUPABASE_ANON_KEY
- Install: npm i
- Run dev: npm run dev

This patch creates the initial scaffold; next steps will wire Supabase, add DB schema, RLS, and basic pages.
