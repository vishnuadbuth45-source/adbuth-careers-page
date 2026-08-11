
import Image from "next/image";
import Link from "next/link";

const workspaceImages = [
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423892/IMG_1045.webp",
    alt: "AdbuthVerse workspace",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423892/IMG_1005.webp",
    alt: "AdbuthVerse editing workspace",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423892/IMG_1040.webp",
    alt: "AdbuthVerse creative workspace",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423891/IMG_0975.webp",
    alt: "AdbuthVerse team workspace",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423891/IMG_0999.webp",
    alt: "AdbuthVerse production environment",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423890/IMG_0987.webp",
    alt: "AdbuthVerse editing environment",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423889/IMG_0970.webp",
    alt: "AdbuthVerse creative studio",
  },
];

const workspaceFeatures = [
  {
    number: "01",
    title: "Built for editing",
    description:
      "Our workspace is designed around the way editors actually work — powerful systems, multiple screens, focused workstations, and everything needed to move from raw footage to final cut.",
  },
  {
    number: "02",
    title: "Fast & collaborative",
    description:
      "Great edits rarely happen in isolation. Our environment makes it easy to discuss ideas, review work, share feedback, and solve creative problems together.",
  },
  {
    number: "03",
    title: "Creative freedom",
    description:
      "The best ideas can come from anywhere. We create an environment where people can experiment, try new approaches, and find their own creative process.",
  },
  {
    number: "04",
    title: "A place to grow",
    description:
      "Whether you're sharpening your editing skills or exploring a completely new creative direction, the workspace is built around continuous learning and improvement.",
  },
];

const tools = [
  "High-performance editing systems",
  "Multi-monitor workstations",
  "Professional audio setup",
  "Fast storage & file workflows",
  "Collaborative review process",
  "Creative production environment",
];

export default function WorkspacePage() {
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

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                  Life at AdbuthVerse
                </p>
              </div>

              <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                WHERE
                <br />
                <span className="text-brand">CREATION</span>
                <br />
                HAPPENS.
              </h1>
            </div>

            <div className="lg:pb-2 lg:pl-10">
              <p className="text-xl font-medium leading-8 tracking-tight sm:text-2xl">
                More than a workspace. It's the environment where ideas become
                edits, edits become stories, and stories create impact.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
                From powerful editing setups to collaborative spaces, our
                workspace is built around the people and processes behind the
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE IMAGE
      ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface">
            <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
              <Image
                src={workspaceImages[0].src}
                alt={workspaceImages[0].alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    The environment
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Designed around the way we create.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                    A space where focused editing, creative conversations, and
                    collaboration can happen side by side.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                More than a desk
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                A workspace built for
                <span className="text-muted-foreground"> visual thinkers.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                Video editing is a craft that demands focus, creativity,
                precision, and collaboration. That's why we don't think of our
                workspace as simply somewhere to sit and work.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                It's a place where editors can get deep into a timeline,
                creators can bounce ideas around, and teams can come together
                to turn concepts into finished work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKSPACE FEATURES
      ========================================================= */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-border py-14 lg:border-b-0 lg:border-r lg:py-20 lg:pr-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                How we work
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Built for the
                <br />
                <span className="text-muted-foreground">creative process.</span>
              </h2>

              <p className="mt-6 text-sm leading-6 text-muted-foreground">
                Everything around us plays a role in helping the team do
                better work.
              </p>
            </div>

            <div>
              {workspaceFeatures.map((feature) => (
                <div
                  key={feature.number}
                  className="border-b border-border px-0 py-8 last:border-b-0 sm:py-10 lg:px-14"
                >
                  <div className="flex gap-6">
                    <span className="pt-1 text-sm font-semibold text-brand">
                      {feature.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {feature.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOOLS / SYSTEMS
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                The setup
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                The tools to
                <br />
                <span className="text-muted-foreground">
                  bring ideas to life.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
                Our systems and workflow are built to keep the creative process
                moving — from the first piece of footage to the final export.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="bg-background p-7 transition-colors duration-300 hover:bg-surface"
                >
                  <span className="text-xs font-semibold text-brand">
                    0{index + 1}
                  </span>

                  <p className="mt-4 text-base font-medium">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE GRID
      ========================================================= */}
      <section className="border-y border-border bg-surface/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Inside AdbuthVerse
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A glimpse into our workspace.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-right">
              The screens, spaces, setups, and everyday moments behind the
              work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {workspaceImages.slice(1, 5).map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    index === 0
                      ? "aspect-[3/4] md:h-full"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom images */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {workspaceImages.slice(5).map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CREATIVE STATEMENT
      ========================================================= */}
      <section className="overflow-hidden bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              The idea
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              GOOD SPACE.
              <br />
              GOOD PEOPLE.
              <br />
              <span className="text-brand">GREAT WORK.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              We believe the environment you create in matters. When the
              people, tools, and atmosphere come together, better ideas follow.
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
            Make this your workspace
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
            Want to create with us?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Bring your creativity, your curiosity, and your obsession with
            great work. There's a place for you here.
          </p>

          <Link
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
