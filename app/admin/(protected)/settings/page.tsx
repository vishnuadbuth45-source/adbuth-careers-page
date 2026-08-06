import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";

export const metadata = {
  title: "Admin Settings",
};

export default function AdminSettingsPage() {
  return (
    <Container className="space-y-6 py-10">
      <div className="space-y-2">
        <Typography variant="h2" as="h1">
          Settings
        </Typography>
        <Typography variant="muted" as="p">
          This area is protected by Supabase authentication.
        </Typography>
      </div>
    </Container>
  );
}
