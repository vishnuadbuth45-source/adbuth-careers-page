import { SharedLayout } from "@/components/shared/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore open roles at AdbuthVerse and join our team.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout>{children}</SharedLayout>;
}
