
import Image from "next/image";
import Link from "next/link";

const celebrations = {
  kiran: [
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786424122/IMG_5973.webp",
      alt: "Kiran Sir birthday celebration at AdbuthVerse",
    },
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786424121/IMG_5958.webp",
      alt: "Kiran Sir birthday celebration at AdbuthVerse",
    },
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423982/IMG_5947.webp",
      alt: "Kiran Sir birthday celebration at AdbuthVerse",
    },
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423981/IMG_5907.webp",
      alt: "Kiran Sir birthday celebration at AdbuthVerse",
    },
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423980/IMG_5885.webp",
      alt: "Kiran Sir birthday celebration at AdbuthVerse",
    },
  ],

  rakesh: [
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423979/IMG_3694.webp",
      alt: "Rakesh birthday celebration at AdbuthVerse",
    },
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423976/IMG_3613.webp",
      alt: "Rakesh birthday celebration at AdbuthVerse",
    },
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423977/IMG_3650.webp",
      alt: "Rakesh birthday celebration at AdbuthVerse",
    },
    {
      src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423978/IMG_3676.webp",
      alt: "Rakesh birthday celebration at AdbuthVerse",
    },
  ],
};

const celebrationTypes = [
  {
    number: "01",
    title: "Birthdays",
    description:
      "Because the people behind the work deserve to be celebrated.",
  },
  {
    number: "02",
    title: "Milestones",
    description:
      "Every achievement is a reason to pause, appreciate, and celebrate together.",
  },
  {
    number: "03",
    title: "Festivals",
    description:
      "We bring our people together to enjoy the moments beyond the work.",
  },
  {
    number: "04",
    title: "Team moments",
    description:
      "Sometimes the smallest moments become the memories we remember most.",
  },
];

export default function CelebrationsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-brand" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
                  Life at AdbuthVerse
                </p>
              </div>

              <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                WE WORK
                <br />
                HARD.
                <br />
                <span className="text-[#7d287e]">WE CELEBRATE HARDER.</span>
              </h1>
            </div>

            <div className="lg:pb-2 lg:pl-10">
              <p className="text-xl font-medium leading-8 tracking-tight sm:text-2xl">
                Behind every project, deadline, and finished frame are people
                who deserve to celebrate the journey together.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
                From birthdays and milestones to spontaneous team moments,
                these are some of the memories that make life at AdbuthVerse
                special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CELEBRATION INTRO
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
                More than work
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                The moments
                <br />
                <span className="text-muted-foreground">
                  between the edits.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                Work is a big part of what brings us together, but it isn&apos;t the
                whole story. We believe that celebrating the people around us
                creates a stronger team and a better place to work.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A birthday cake, a team surprise, a milestone, or simply
                getting everyone together — these moments matter because the
                people matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED STORY — KIRAN
      ========================================================= */}
      <section className="border-y border-border bg-surface/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Story header */}
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#7d287e]">
                  Birthday
                </span>

                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Celebration 01
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Celebrating
                <br />
                <span className="text-[#7d287e]">Kiran Sir.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground lg:text-right">
              A birthday isn&apos;t just about another year. It&apos;s an opportunity
              for the team to come together, share a few laughs, and make the
              day memorable.
            </p>
          </div>

          {/* Kiran gallery */}
          <div className="grid gap-5 lg:grid-cols-12">
            {/* Large image */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface lg:col-span-7">
              <div className="relative aspect-[4/3] h-full min-h-[350px] overflow-hidden lg:min-h-[520px]">
                <Image
                  src={celebrations.kiran[0].src}
                  alt={celebrations.kiran[0].alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    AdbuthVerse
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    Another year. Another memory.
                  </p>
                </div>
              </div>
            </div>

            {/* Smaller images */}
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
              {celebrations.kiran.slice(1).map((image, index) => (
                <div
                  key={image.src}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CELEBRATION PHILOSOPHY
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
              What we celebrate
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              Because it&apos;s the people
              <span className="text-muted-foreground"> that make it.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {celebrationTypes.map((item) => (
              <div
                key={item.number}
                className="bg-background p-7 transition-colors duration-300 hover:bg-surface sm:p-8"
              >
                <span className="text-sm font-semibold text-[#7d287e]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECOND STORY — RAKESH
      ========================================================= */}
      <section className="border-y border-border bg-surface/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#7d287e]">
                  Birthday
                </span>

                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Celebration 02
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Celebrating
                <br />
                <span className="text-[#7d287e]">Rakesh.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground lg:text-right">
              A day to step away from the timelines, share some smiles, and
              celebrate one of the people who helps move the team forward.
            </p>
          </div>

          {/* Rakesh gallery */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {celebrations.rakesh.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface ${
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? "aspect-square h-full sm:aspect-auto sm:min-h-[520px]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={
                      index === 0
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 50vw, 25vw"
                    }
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-sm font-medium text-white">
                        Good people. Good moments.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BIG STATEMENT
      ========================================================= */}
      <section className="overflow-hidden bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              The culture
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              WORK
              <br />
              TOGETHER.
              <br />
              <span className="text-brand">CELEBRATE TOGETHER.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              The best teams aren&apos;t only connected by the work they do. They
              are connected by the moments they share along the way.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Your next chapter
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
            Make your next milestone with us.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Join a team where the work matters, the people matter, and there&apos;s
            always a reason to celebrate.
          </p>

          <Link scroll={true}
            href="/careers#open-positions"
            className="mt-9 inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 hover:shadow-lg"
          >
            Explore Open Positions
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
