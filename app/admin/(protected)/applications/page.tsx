import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { createClient } from "@/lib/supabase/server";

type ApplicationRow = {
  id: string;
  full_name: string;
  email: string;
  resume_url: string | null;
  created_at: string;
  jobs?: {
    title?: string | null;
  } | null;
};

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Applications",
};

export default async function AdminApplicationsPage() {
  const supabase = await createClient();
  const { data: applications } = await supabase
    .from("applications")
    .select("*, jobs:job_id(id, title)")
    .order("created_at", { ascending: false });

  const typedApplications = (applications ?? []) as ApplicationRow[];

  return (
    <Container className="space-y-6 py-10">
      <div className="space-y-2">
        <Typography variant="h2" as="h1">
          Applications management
        </Typography>
        <Typography variant="muted" as="p">
          Review candidate submissions in a read-only admin view.
        </Typography>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Candidate</th>
              <th className="px-4 py-3 text-left font-medium">Job Applied</th>
              <th className="px-4 py-3 text-left font-medium">Applied On</th>
              <th className="px-4 py-3 text-left font-medium">Resume</th>
              <th className="px-4 py-3 text-left font-medium">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {typedApplications.length ? (
              typedApplications.map((application) => (
                <tr key={application.id}>
                  <td className="px-4 py-3">
                    <div className="font-medium">{application.full_name}</div>
                    <div className="text-muted-foreground">{application.email}</div>
                  </td>
                  <td className="px-4 py-3">{application.jobs?.title ?? "Unknown role"}</td>
                  <td className="px-4 py-3">{new Date(application.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    {application.resume_url ? (
                      <a href={application.resume_url} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                        Download
                      </a>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/applications/${application.id}`} className="text-primary underline-offset-4 hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  No applications received yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
