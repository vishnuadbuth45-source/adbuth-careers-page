import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { ApplicationForm } from "@/components/admin/application-form";
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

export const dynamic = "force-dynamic";

async function getJobBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    return null;
  }

  return (data ?? null) as JobDetailRow | null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found",
      description: "The requested role could not be found.",
    };
  }

  return {
    title: `${job.title} | AdbuthVerse Careers`,
    description: job.short_description,
    openGraph: {
      title: `${job.title} | AdbuthVerse Careers`,
      description: job.short_description,
      type: "website",
    },
  } satisfies Metadata;
}

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const typedJob = job as JobDetailRow;

  return (
    <main className="bg-background py-16 sm:py-20">
      <Container className="space-y-8 px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-surface/70 p-8 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground">
                {typedJob.department}
              </div>
              <div className="space-y-2">
                <Typography variant="h1" as="h1">
                  {typedJob.title}
                </Typography>
                <Typography variant="lead" as="p">
                  {typedJob.short_description}
                </Typography>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-background/70 p-6 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Location</p>
              <p className="mt-1 font-medium">{typedJob.location}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Experience</p>
              <p className="mt-1 font-medium">{typedJob.experience}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Employment Type</p>
              <p className="mt-1 font-medium">{typedJob.employment_type}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Salary</p>
              <p className="mt-1 font-medium">{typedJob.salary ?? "Negotiable"}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-border bg-surface/70 p-8">
              <Typography variant="h3" as="h2" className="mb-4">
                Description
              </Typography>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>{typedJob.description}</p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-surface/70 p-8">
              <Typography variant="h3" as="h2" className="mb-4">
                Responsibilities
              </Typography>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {job.responsibilities?.length ? (
                  typedJob.responsibilities.map((item: string) => <li key={item}>{item}</li>)
                ) : (
                  <li>No responsibilities listed yet.</li>
                )}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-surface/70 p-8">
              <Typography variant="h3" as="h2" className="mb-4">
                Requirements
              </Typography>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {job.requirements?.length ? (
                  typedJob.requirements.map((item: string) => <li key={item}>{item}</li>)
                ) : (
                  <li>No requirements listed yet.</li>
                )}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-surface/70 p-8">
              <Typography variant="h3" as="h2" className="mb-4">
                Benefits
              </Typography>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {job.benefits?.length ? (
                  typedJob.benefits.map((item: string) => <li key={item}>{item}</li>)
                ) : (
                  <li>No benefits listed yet.</li>
                )}
              </ul>
            </section>
          </div>

          <aside className="rounded-2xl border border-border bg-surface/70 p-8 shadow-sm">
            <Typography variant="h3" as="h2" className="mb-4">
              Why this role stands out
            </Typography>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Join a team that values craft, ownership, and meaningful impact from the start.</p>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="font-medium text-foreground">Tech Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.tech_stack?.length ? (
                    typedJob.tech_stack.map((item: string) => (
                      <span key={item} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs">
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted-foreground">Not listed yet.</span>
                  )}
                </div>
              </div>
            </div>
            <div id="apply" className="mt-8 space-y-4">
              <Button asChild size="lg" className="w-full">
                <Link href="/careers">Explore More Opportunities</Link>
              </Button>
            </div>
          </aside>
        </div>

        <div className="rounded-2xl border border-border bg-surface/70 p-8">
          <Typography variant="h3" as="h2" className="mb-4">
            Apply for this role
          </Typography>
          <Typography variant="muted" as="p" className="mb-6">
            Share your details and upload your resume to start the process.
          </Typography>
          <ApplicationForm jobId={typedJob.id} />
        </div>
      </Container>
    </main>
  );
}
