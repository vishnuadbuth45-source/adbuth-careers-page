# AdbuthVerse Careers Platform

A modern careers website built with Next.js, TypeScript, Tailwind CSS, shadcn-style UI components, and Supabase.

This project includes:
- A premium public careers landing page
- Public job listing and job details pages
- A public application flow with resume upload
- An authenticated admin dashboard for jobs and applications
- Supabase-backed persistence for jobs, applications, and resume storage

---

## 1. Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase Auth + Supabase JS + Supabase SSR
- shadcn-style UI components

---

## 2. Project Structure

```text
app/
  careers/
    page.tsx
    [slug]/page.tsx
  admin/
    login/
    (protected)/
      page.tsx
      jobs/
      applications/
components/
  admin/
  shared/
  ui/
lib/
  supabase/
  career-actions.ts
  auth-actions.ts
styles/
  globals.css
types/
  database.ts
  index.ts
supabase/
  schema.sql
```

---

## 3. Prerequisites

Make sure you have installed:
- Node.js 18+ or later
- npm
- A Supabase account

---

## 4. Installation

1. Clone the project
2. Install dependencies

```bash
npm install
```

3. Create a local environment file

```bash
copy .env.example .env.local
```

Then fill in the required values:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> The file [.env.example](.env.example) contains the template values. Copy it to .env.local so Next.js can load your real environment variables.

---

## 5. Supabase Setup

### 5.1 Create a Supabase Project

1. Go to Supabase
2. Create a new project
3. Open Project Settings → API
4. Copy the Project URL and the anon public key

### 5.2 Create the database schema

Open the Supabase SQL Editor and run the SQL from [supabase/schema.sql](supabase/schema.sql).

This creates:
- jobs table
- applications table
- basic policies
- updated_at trigger

### 5.3 Create Storage Bucket

In Supabase Storage:
- Create a bucket named `resumes`
- Make it publicly accessible if you want direct resume links

### 5.4 Enable Authentication

In Supabase Auth:
- Enable Email/Password authentication
- Create an admin user account for login into the admin area

---

## 6. Running the Project

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 7. Application Flow

### Public side

1. Visitors land on the careers landing page
2. They browse the premium employer-brand section
3. They see published roles in the Open Positions section
4. Clicking a role opens the job details page
5. Candidates can complete the application form
6. The app uploads the resume to Supabase Storage
7. The application is saved to the applications table

### Admin side

1. Visit `/admin/login`
2. Sign in with a Supabase-authenticated admin account
3. Access the protected admin area
4. Manage jobs and review applications

---

## 8. Admin Features

### Admin dashboard

The admin dashboard shows:
- Total Jobs
- Published Jobs
- Draft Jobs
- Total Applications

### Job management

Admins can:
- Create jobs
- Edit jobs
- Delete jobs
- Publish jobs
- Unpublish jobs

### Applications management

Admins can:
- View submitted applications in a read-only table
- Open an application detail page
- Review personal info, professional info, resume link, and cover letter

---

## 9. Database Tables

### jobs

Fields:
- id
- title
- slug
- department
- location
- employment_type
- experience
- salary
- short_description
- description
- responsibilities
- requirements
- benefits
- tech_stack
- published
- created_at
- updated_at

### applications

Fields:
- id
- job_id
- full_name
- email
- phone
- current_location
- years_of_experience
- linkedin
- portfolio
- resume_url
- cover_letter
- created_at

---

## 10. Important Files

- [app/careers/page.tsx](app/careers/page.tsx) – public careers landing page
- [app/careers/[slug]/page.tsx](app/careers/[slug]/page.tsx) – public job details and application form
- [app/admin/login/page.tsx](app/admin/login/page.tsx) – admin login page
- [app/admin/(protected)/page.tsx](app/admin/(protected)/page.tsx) – admin dashboard
- [app/admin/(protected)/jobs/page.tsx](app/admin/(protected)/jobs/page.tsx) – job management
- [app/admin/(protected)/applications/page.tsx](app/admin/(protected)/applications/page.tsx) – applications overview
- [lib/career-actions.ts](lib/career-actions.ts) – server actions for jobs and applications
- [lib/supabase/storage.ts](lib/supabase/storage.ts) – resume upload helper
- [supabase/schema.sql](supabase/schema.sql) – SQL schema for the database

---

## 11. Notes

- The public careers page only displays jobs where `published = true`.
- The admin area is protected with Supabase authentication.
- The application flow is designed to be read-only from the admin side.

---

## 12. Troubleshooting

### Supabase client error

If you see an error such as:

```text
Your project's URL and Key are required to create a Supabase client
```

Check that:
- your `.env.local` file exists
- the keys are correctly copied from Supabase
- the Next.js dev server was restarted after updating the environment file

### Admin login does not work

Verify that:
- Email/Password auth is enabled in Supabase
- the admin account exists in Supabase Auth
- your Supabase URL and anon key are correct

### Resume upload fails

Verify that:
- the `resumes` bucket exists in Supabase Storage
- the bucket is configured correctly for uploads

---

## 13. Next Steps

You can extend this project by:
- adding richer admin analytics
- adding email notifications
- adding application status workflow
- creating a polished application success page
- adding image assets and real team photos
