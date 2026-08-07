import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { createClient } from "@/lib/supabase/server";
import { DeleteApplicationButton } from "@/components/admin/deletion-button";
import { SearchInput } from "@/components/admin/search-input";

type ApplicationRow = {
  id: string;
  full_name: string;
  email: string;
  resume_url: string | null;
  created_at: string;
  years_of_experience: number | null;
  current_location: string | null;
};

type Props = {
  params: Promise<{ jobId: string }>;
  searchParams: Promise<{ search?: string }>;
};

export const dynamic = "force-dynamic";

export default async function JobApplicationsPage({
  params,
  searchParams,
}: Props) {
  const { jobId } = await params;
  const { search = "" } = await searchParams;

  const supabase = await createClient();

  // Fetch the job first (for title + 404 check)
  const { data: job, error: jobError } = await supabase
    .from("jobs")
    .select("id, title")
    .eq("id", jobId)
    .single();

  if (jobError || !job) {
    notFound();
  }

  // Fetch only applications for this job
  let query = supabase
    .from("applications")
    .select(
      "id, full_name, email, resume_url, created_at, years_of_experience, current_location"
    )
    .eq("job_id", jobId)
    .order("created_at", { ascending: false });

  if (search) {
    query = query.or(
      `full_name.ilike.%${search}%,email.ilike.%${search}%`
    );
  }

  const { data: applications } = await query;
  const typedApplications = (applications ?? []) as ApplicationRow[];

  return (
    <Container className="space-y-6 py-10">
      <div className="space-y-2">
        <Link
          href="/admin/applications"
          className="text-sm text-muted-foreground hover:underline"
        >
          ← Back to all jobs
        </Link>

        <Typography variant="h2" as="h1">
          Applications for “{job.title}”
        </Typography>
        <Typography variant="muted" as="p">
          {typedApplications.length} application
          {typedApplications.length === 1 ? "" : "s"}
        </Typography>
      </div>

      {/* Search */}
      <SearchInput placeholder="Search by name or email..." />

      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Candidate</th>
              <th className="px-4 py-3 text-left font-medium">Experience</th>
              <th className="px-4 py-3 text-left font-medium">Location</th>
              <th className="px-4 py-3 text-left font-medium">Applied On</th>
              <th className="px-4 py-3 text-left font-medium">Resume</th>
              <th className="px-4 py-3 text-left font-medium">View</th>
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {typedApplications.length ? (
              typedApplications.map((app) => (
                <tr key={app.id}>
                  <td className="px-4 py-3">
                    <div className="font-medium">{app.full_name}</div>
                    <div className="text-muted-foreground">{app.email}</div>
                  </td>
                  <td className="px-4 py-3">
                    {app.years_of_experience != null
                      ? `${app.years_of_experience} yrs`
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {app.current_location ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(app.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    {app.resume_url ? (
                      <a
                        href={app.resume_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/applications/detail/${app.id}`}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <DeleteApplicationButton id={app.id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-muted-foreground"
                >
                  No applications for this job yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}