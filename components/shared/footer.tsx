
import Link from "next/link";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

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

  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/jayasadbuthproductionsllp/",
      icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/jayasadbuthproductionsllp/",
      icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/adbuthedits/",
      icon: Instagram,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@Adbuthedits",
      icon: Youtube,
    },
  ],
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              AdbuthVerse
            </Link>

            <Typography
              variant="body-sm"
              className="mt-4 max-w-sm text-muted-foreground"
            >
              Building the future of digital experiences. Join our team and
              make an impact.
            </Typography>

            {/* Social Links */}
            <div className="mt-6">
              <Typography
                variant="body-sm"
                className="mb-4 font-semibold"
              >
                Follow Us
              </Typography>

              <div className="flex items-center gap-3">
                {footerLinks.social.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground hover:bg-muted hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <Typography
              variant="body-sm"
              className="mb-4 font-semibold"
            >
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

          {/* Careers */}
          <div>
            <Typography
              variant="body-sm"
              className="mb-4 font-semibold"
            >
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

          {/* Legal */}
          <div>
            <Typography
              variant="body-sm"
              className="mb-4 font-semibold"
            >
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

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
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
