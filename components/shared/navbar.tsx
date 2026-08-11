import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo- 01.png";
import type { NavLink } from "@/types";

const careersLinks: NavLink[] = [
  { label: "Open Roles", href: "/careers#open-positions" },
  { label: "About Us", href: "/careers#why-join" },
  { label: "Culture", href: "/careers#why-join" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <nav
          className="flex h-16 items-center justify-between md:h-18"
          aria-label="Main navigation"
        >
          <Link
            href="/careers"
            className="flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-border/60 bg-white/80 p-1 shadow-sm">
              <Image src={logo} alt="AdbuthVerse logo" fill className="object-contain" sizes="36px" />
            </div>
            <span className="text-lg md:text-xl">AdbuthVerse</span>
            <span className="hidden text-sm font-normal text-muted-foreground sm:inline">
              Careers
            </span>
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {careersLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
  <Button variant="ghost" size="sm" className="md:hidden" asChild>
    <Link href="/careers#why-join">About</Link>
  </Button>

  <Button
    variant="brand"
    size="sm"
    className="bg-[#7d287e] hover:bg-[#6b226b]"
    asChild
  >
    <Link href="/careers#open-positions">View Open Roles</Link>
  </Button>
</div>
        </nav>
      </Container>
    </header>
  );
}

export { Navbar };
