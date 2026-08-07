import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Applications",
};

type JobWithCount = {
  id: string;
  title: string;
  department: string;
  location: string;
  published: boolean;
  created_at: string;
  applications: { count: number }[];
};

export default async function AdminApplicationsPage() {
  const supabase = await createClient();

  const { data: jobs, error } = await supabase
    .from("jobs")
    .select(
      `
      id,
      title,
      department,
      location,
      published,
      created_at,
      applications(count)
    `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  const typedJobs = (jobs ?? []) as JobWithCount[];

  return (
    <Container className="space-y-6 py-10">
      <div className="space-y-2">
        <Typography variant="h2" as="h1">
          Applications
        </Typography>
        <Typography variant="muted" as="p">
          Select a job to review its applications.
        </Typography>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Job Title</th>
              <th className="px-4 py-3 text-left font-medium">Department</th>
              <th className="px-4 py-3 text-left font-medium">Location</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">Applications</th>
              <th className="px-4 py-3 text-left font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {typedJobs.length ? (
              typedJobs.map((job) => {
                const count = job.applications?.[0]?.count ?? 0;

                return (
                  <tr key={job.id}>
                    <td className="px-4 py-3 font-medium">{job.title}</td>
                    <td className="px-4 py-3">{job.department}</td>
                    <td className="px-4 py-3">{job.location}</td>
                    <td className="px-4 py-3">
                      {job.published ? (
                        <span className="text-green-600">Published</span>
                      ) : (
                        <span className="text-muted-foreground">Draft</span>
                      )}
                    </td>
                    <td className="px-4 py-3">{count}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/applications/${job.id}`}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        View applications →
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-muted-foreground"
                >
                  No jobs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}