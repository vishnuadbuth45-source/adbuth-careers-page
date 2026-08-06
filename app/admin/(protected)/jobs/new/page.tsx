import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { JobForm } from "@/components/admin/job-form";

export const metadata = {
  title: "Create Job",
};

export default function NewJobPage() {
  return (
    <Container className="space-y-6 py-10">
      <div className="space-y-2">
        <Typography variant="h2" as="h1">
          Create Job
        </Typography>
        <Typography variant="muted" as="p">
          Add a new role with validation and publish controls.
        </Typography>
      </div>

      <JobForm />
    </Container>
  );
}
