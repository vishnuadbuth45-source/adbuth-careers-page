import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard",
};

async function getDashboardStats() {
  const supabase = await createClient();

  const [
    { count: jobsCount },
    { count: publishedJobsCount },
    { count: draftJobsCount },
    { count: applicationsCount },
  ] = await Promise.all([
    supabase.from("jobs").select("*", { count: "exact", head: true }),
    supabase
      .from("jobs")
      .select("*", { count: "exact", head: true })
      .eq("published", true),
    supabase
      .from("jobs")
      .select("*", { count: "exact", head: true })
      .eq("published", false),
    supabase.from("applications").select("*", { count: "exact", head: true }),
  ]);

  return {
    totalJobs: jobsCount ?? 0,
    publishedJobs: publishedJobsCount ?? 0,
    draftJobs: draftJobsCount ?? 0,
    totalApplications: applicationsCount ?? 0,
  };
}

export default async function AdminHomePage() {
  const stats = await getDashboardStats();

  const statCards = [
    { title: "Total Jobs", value: stats.totalJobs, description: "All positions stored" },
    { title: "Published Jobs", value: stats.publishedJobs, description: "Visible to applicants" },
    { title: "Draft Jobs", value: stats.draftJobs, description: "Still being prepared" },
    { title: "Total Applications", value: stats.totalApplications, description: "Submitted so far" },
  ];

  return (
    <Container className="space-y-8 py-10">
      <div className="space-y-2">
        <Typography variant="h2" as="h1">
          Dashboard
        </Typography>
        <Typography variant="muted" as="p">
          A simple overview of your careers pipeline.
        </Typography>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-semibold">{card.value}</div>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
