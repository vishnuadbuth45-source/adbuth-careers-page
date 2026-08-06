import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { LoginForm } from "@/components/admin/login-form";

export const metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Container className="flex min-h-screen flex-col items-center justify-center py-16">
        <div className="mb-6 flex w-full max-w-md items-center justify-between">
          <Typography variant="h4" as="h1">
            AdbuthVerse Admin
          </Typography>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Back home
          </Link>
        </div>
        <LoginForm />
      </Container>
    </div>
  );
}
