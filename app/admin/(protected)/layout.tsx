import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in
  if (!user) {
    redirect("/admin/login");
  }

  // Only allow your admin account
  if (user.email !== "iamvishnuamarapu@gmail.com") {
    redirect("/careers");
  }

  return <AdminShell>{children}</AdminShell>;
}