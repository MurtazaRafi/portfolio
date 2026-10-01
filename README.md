# Portfolio template

Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn/ui-style Button, Framer Motion, GSAP,
Material UI, Supabase (PostgreSQL) and a REST route handler.

## Run
```bash
npm install
cp .env.example .env.local   # add your Supabase keys
npm run dev
```

## Customise
- `data/site.ts`: your name, role, intro, about text and projects
- `public/`: add `cv.pdf`, a hero image and project screenshots
- `app/globals.css`: theme colours (CSS variables for light and dark)

## Supabase table (run in the SQL editor)
```sql
create table messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);
alter table messages enable row level security;
```
The API route uses the service role key on the server, so no public insert policy is needed.

## Add real shadcn/ui components
`npx shadcn@latest init` then `npx shadcn@latest add card input`.
