export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  experience: string;
  salary: string | null;
  short_description: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  tech_stack: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Application {
  id: string;
  job_id: string;
  full_name: string;
  email: string;
  phone: string | null;
  current_location: string | null;
  years_of_experience: number | null;
  linkedin: string | null;
  portfolio: string | null;
  resume_url: string | null;
  cover_letter: string | null;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: "admin" | "super_admin";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PageMeta {
  title: string;
  description?: string;
}
