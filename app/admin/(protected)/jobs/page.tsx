import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { deleteJob, publishJob } from "@/lib/career-actions";

type JobRow = {
  id: string;
  title: string;
  published: boolean;
  department: string;
  location: string;
};

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Jobs",
};

async function AdminJobsPage() {
  const supabase = await createClient();
  const { data: jobs } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  const typedJobs = (jobs ?? []) as JobRow[];

  return (
    <Container className="space-y-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <Typography variant="h2" as="h1">
            Jobs management
          </Typography>
          <Typography variant="muted" as="p">
            Create, publish, edit, and remove roles from the admin area.
          </Typography>
        </div>
        <Button asChild>
          <Link href="/admin/jobs/new">Create Job</Link>
        </Button>
      </div>

      <div className="space-y-3">
        {typedJobs.length ? (
          typedJobs.map((job) => (
            <div key={job.id} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Typography variant="h4" as="h2">
                      {job.title}
                    </Typography>
                    <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">
                      {job.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{job.department} • {job.location}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <form action={publishJob.bind(null, job.id, !job.published)}>
                    <Button type="submit" variant="outline" size="sm">
                      {job.published ? "Unpublish" : "Publish"}
                    </Button>
                  </form>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/jobs/${job.id}/edit`}>Edit</Link>
                  </Button>
                  <form action={deleteJob.bind(null, job.id)}>
                    <Button type="submit" variant="destructive" size="sm">
                      Delete
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            No jobs yet. Create the first role to get started.
          </div>
        )}
      </div>
    </Container>
  );
}

export default AdminJobsPage;
