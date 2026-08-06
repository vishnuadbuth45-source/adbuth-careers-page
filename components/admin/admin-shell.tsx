import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-actions";
import type { NavLink } from "@/types";

const adminLinks: NavLink[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Jobs", href: "/admin/jobs" },
  { label: "Applications", href: "/admin/applications" },
  { label: "Settings", href: "/admin/settings" },
];

function AdminSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-surface md:block">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Typography variant="h4" as="span" className="text-brand">
          Admin
        </Typography>
      </div>
      <nav className="p-4" aria-label="Admin navigation">
        <ul className="space-y-1">
          {adminLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function AdminMobileNav() {
  return (
    <nav
      className="border-b border-border bg-surface md:hidden"
      aria-label="Admin mobile navigation"
    >
      <Container className="flex gap-1 overflow-x-auto py-2">
        {adminLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </Container>
    </nav>
  );
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminMobileNav />
        <header className="flex items-center justify-end border-b border-border bg-surface px-4 py-3 md:px-6">
          <form action={signOut}>
            <Button type="submit" variant="outline" size="sm">
              Logout
            </Button>
          </form>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export { AdminShell, AdminSidebar, AdminMobileNav };
