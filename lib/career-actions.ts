"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { uploadResume } from "@/lib/supabase/storage";
import type { Database } from "@/types/database";

export type JobInsert = Database["public"]["Tables"]["jobs"]["Insert"];
export type JobUpdate = Database["public"]["Tables"]["jobs"]["Update"];
export type ApplicationInsert = Database["public"]["Tables"]["applications"]["Insert"];

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "An unexpected error occurred.";
}

function isValidSlug(value: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

export async function getJobs() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getJobBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createJob(input: JobInsert) {
  if (!input.title?.trim()) {
    throw new Error("Title is required.");
  }

  if (!input.slug?.trim()) {
    throw new Error("Slug is required.");
  }

  if (!isValidSlug(input.slug)) {
    throw new Error("Slug must be lowercase and contain only letters, numbers, and hyphens.");
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .insert({
      ...input,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/careers");
  revalidatePath("/admin/jobs");

  return data;
}

export async function updateJob(id: string, input: JobUpdate) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .update({
      ...input,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/careers");
  revalidatePath("/admin/jobs");

  return data;
}

export async function deleteJob(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("jobs").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/careers");
  revalidatePath("/admin/jobs");
}

export async function publishJob(
  id: string,
  published: boolean
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("jobs")
    .update({
      published,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/careers");
  revalidatePath("/admin/jobs");
}

export async function submitApplication(input: ApplicationInsert, resumeFile?: File) {
  const supabase = await createClient();

  if (!input.job_id) {
    throw new Error("A job is required.");
  }

  if (!input.full_name?.trim()) {
    throw new Error("Full name is required.");
  }

  if (!input.email?.trim()) {
    throw new Error("Email is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    throw new Error("Please provide a valid email address.");
  }

  let resumeUrl: string | null = null;

  if (resumeFile) {
    try {
      const upload = await uploadResume(resumeFile, input.job_id);
      resumeUrl = upload.publicUrl;
    } catch (error) {
      console.error("Resume upload failed, continuing without attachment:", error);
      resumeUrl = null;
    }
  }

  const { data, error } = await supabase
    .from("applications")
    .insert({
      ...input,
      resume_url: resumeUrl,
      created_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/applications");

  return data;
}
