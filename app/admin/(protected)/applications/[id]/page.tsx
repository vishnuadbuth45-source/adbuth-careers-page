import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

type ApplicationDetailRow = {
  id: string;
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
  jobs?: {
    title?: string | null;
  } | null;
};

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Application Details",
};

export default async function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: application, error } = await supabase
    .from("applications")
    .select("*, jobs:job_id(id, title)")
    .eq("id", id)
    .maybeSingle();

  const typedApplication = (application ?? null) as ApplicationDetailRow | null;

  if (error || !typedApplication) {
    notFound();
  }

  const jobTitle = typedApplication.jobs?.title ?? "Unknown role";

  return (
    <Container className="space-y-8 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <Typography variant="h2" as="h1">
            {typedApplication.full_name}
          </Typography>
          <Typography variant="muted" as="p">
            Applied for {jobTitle}
          </Typography>
        </div>
        <Button asChild variant="outline">
          <Link href="/admin/applications">Back to applications</Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-border bg-surface p-6">
          <Typography variant="h4" as="h3" className="mb-4">
            Personal Information
          </Typography>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-medium text-muted-foreground">Full name</dt>
              <dd>{typedApplication.full_name}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Email</dt>
              <dd>{typedApplication.email}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Phone</dt>
              <dd>{typedApplication.phone ?? "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Current location</dt>
              <dd>{typedApplication.current_location ?? "—"}</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <Typography variant="h4" as="h3" className="mb-4">
            Professional Information
          </Typography>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-medium text-muted-foreground">Years of experience</dt>
              <dd>{typedApplication.years_of_experience ?? "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">LinkedIn</dt>
              <dd>{typedApplication.linkedin ?? "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Portfolio</dt>
              <dd>{typedApplication.portfolio ?? "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Applied on</dt>
              <dd>{new Date(typedApplication.created_at).toLocaleDateString()}</dd>
            </div>
          </dl>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-border bg-surface p-6">
          <Typography variant="h4" as="h3" className="mb-4">
            Resume
          </Typography>
          {typedApplication.resume_url ? (
            <Button asChild>
              <a href={typedApplication.resume_url} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </Button>
          ) : (
            <p className="text-sm text-muted-foreground">No resume uploaded.</p>
          )}
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <Typography variant="h4" as="h3" className="mb-4">
            Cover Letter
          </Typography>
          <p className="whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
            {typedApplication.cover_letter ?? "No cover letter provided."}
          </p>
        </section>
      </div>
    </Container>
  );
}
