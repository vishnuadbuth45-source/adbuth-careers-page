Backend setup notes:

1. Create the tables from supabase/schema.sql in the Supabase SQL editor.
2. Create a public storage bucket named resumes and configure it for public uploads.
3. Copy .env.example to .env.local and fill in your Supabase credentials.
4. Use the server actions in lib/career-actions.ts from the admin and careers routes.
