import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";

const footerLinks = {
  company: [
    { label: "About AdbuthVerse", href: "/careers#why-join" },
    { label: "Contact", href: "/careers#contact" },
  ],
  careers: [
    { label: "Open Roles", href: "/careers#open-positions" },
    { label: "Life at AdbuthVerse", href: "/careers#life-at" },
    { label: "Benefits", href: "/careers#benefits" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/careers" className="inline-block">
              <Typography variant="h4" as="span" className="text-brand">
                AdbuthVerse
              </Typography>
            </Link>
            <Typography variant="muted" className="mt-3 max-w-xs">
              Building the future of digital experiences. Join our team and
              make an impact.
            </Typography>
          </div>

          <div>
            <Typography variant="body-sm" className="mb-4 font-semibold">
              Company
            </Typography>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="body-sm" className="mb-4 font-semibold">
              Careers
            </Typography>
            <ul className="space-y-2">
              {footerLinks.careers.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="body-sm" className="mb-4 font-semibold">
              Legal
            </Typography>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <Typography variant="caption">
            &copy; {currentYear} AdbuthVerse. All rights reserved.
          </Typography>
          <Typography variant="caption">
            Crafted with care for exceptional talent.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
