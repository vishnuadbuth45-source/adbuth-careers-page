create extension if not exists pgcrypto;

insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', true)
on conflict (id) do update
set public = true;

drop policy if exists "Allow public uploads for resumes" on storage.objects;
drop policy if exists "Allow public reads for resumes" on storage.objects;

create policy "Allow public uploads for resumes"
on storage.objects
for insert to public
with check (bucket_id = 'resumes');

create policy "Allow public reads for resumes"
on storage.objects
for select to public
using (bucket_id = 'resumes');

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  department text not null,
  location text not null,
  employment_type text not null,
  experience text not null,
  salary text,
  short_description text not null,
  description text not null,
  responsibilities text[] not null default '{}',
  requirements text[] not null default '{}',
  benefits text[] not null default '{}',
  tech_stack text[] not null default '{}',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  current_location text,
  years_of_experience integer,
  linkedin text,
  portfolio text,
  resume_url text,
  cover_letter text,
  created_at timestamptz not null default now()
);

alter table public.jobs enable row level security;
alter table public.applications enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.jobs to anon, authenticated;
grant select, insert, update, delete on public.jobs to authenticated;
grant select, insert on public.applications to anon, authenticated;
grant update, delete on public.applications to authenticated;

drop policy if exists "Allow read access for jobs" on public.jobs;
drop policy if exists "Allow authenticated users to manage jobs" on public.jobs;
drop policy if exists "Allow public insert access for applications" on public.applications;
drop policy if exists "Allow authenticated users to read applications" on public.applications;

create policy "Allow read access for jobs" on public.jobs
  for select using (true);

create policy "Allow authenticated users to manage jobs" on public.jobs
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Allow public insert access for applications" on public.applications
  for insert with check (true);

create policy "Allow authenticated users to read applications" on public.applications
  for select using (auth.role() = 'authenticated');

create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger if not exists jobs_update_updated_at
before update on public.jobs
for each row
execute function public.update_updated_at_column();
