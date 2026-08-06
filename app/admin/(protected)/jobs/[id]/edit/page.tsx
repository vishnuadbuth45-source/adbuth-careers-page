import { notFound } from "next/navigation";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { JobForm } from "@/components/admin/job-form";
import { createClient } from "@/lib/supabase/server";

type JobDetailRow = {
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
};

export const metadata = {
  title: "Edit Job",
};

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: job, error } = await supabase.from("jobs").select("*").eq("id", id).maybeSingle();

  const typedJob = (job ?? null) as JobDetailRow | null;

  if (error || !typedJob) {
    notFound();
  }

  return (
    <Container className="space-y-6 py-10">
      <div className="space-y-2">
        <Typography variant="h2" as="h1">
          Edit Job
        </Typography>
        <Typography variant="muted" as="p">
          Update the role details below.
        </Typography>
      </div>

      <JobForm initialValues={typedJob} jobId={typedJob.id} />
    </Container>
  );
}
