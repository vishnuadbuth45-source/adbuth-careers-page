import Image from "next/image";

import image1 from "@/assets/1.webp";
import image2 from "@/assets/2.webp";
import image3 from "@/assets/3.webp";
import image4 from "@/assets/4.webp";
import image5 from "@/assets/5.webp";
import image6 from "@/assets/6.webp";
import image7 from "@/assets/7.webp";
import image8 from "@/assets/8.webp";
import Link from "next/link";

const teamImages = [
  {
    src: image1,
    alt: "AdbuthVerse team",
  },
  {
    src: image2,
    alt: "AdbuthVerse team",
  },
  {
    src: image3,
    alt: "AdbuthVerse team",
  },
  {
    src: image4,
    alt: "AdbuthVerse team",
  },
  {
    src: image5,
    alt: "AdbuthVerse team",
  },
  {
    src: image6,
    alt: "AdbuthVerse team",
  },
  {
    src: image7,
    alt: "AdbuthVerse team",
  },
  {
    src: image8,
    alt: "AdbuthVerse team",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
              Life at AdbuthVerse
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Meet the Team
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Behind every idea, product, and breakthrough is a team of
              passionate people. Get a glimpse of the people who make
              AdbuthVerse what it is.
            </p>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Team
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              A collection of moments, people, and memories from life at
              AdbuthVerse.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Want to be part of the team?
          </h2>

          <p className="mt-4 text-muted-foreground">
            We are always looking for talented, curious, and driven people to
            build the future with us.
          </p>

          <Link
  href="/careers"
  className="mt-8 inline-flex items-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
>
  Explore Open Positions
</Link>
        </div>
      </section>
    </main>
  );
}