import { createClient } from "@/lib/supabase/server";

export const RESUME_BUCKET = "resumes";

export async function uploadResume(file: File, jobId: string) {
  const supabase = await createClient();
  const fileName = `${jobId}/${crypto.randomUUID()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from(RESUME_BUCKET)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data: publicUrlData } = supabase.storage
    .from(RESUME_BUCKET)
    .getPublicUrl(data.path);

  return {
    path: data.path,
    publicUrl: publicUrlData.publicUrl,
  };
}
