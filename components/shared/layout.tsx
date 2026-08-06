import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import type { ReactNode } from "react";

interface SharedLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

function SharedLayout({
  children,
  showNavbar = true,
  showFooter = true,
}: SharedLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}

export { SharedLayout };
