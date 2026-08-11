
import Image from "next/image";
import Link from "next/link";

const eventImages = [
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423853/DSC03715.webp",
    alt: "AI ConX event at Nellore Town Hall",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423950/DSC03247.webp",
    alt: "AI ConX speakers and audience",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423951/DSC03320.webp",
    alt: "AI ConX event discussion",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423952/DSC03354.webp",
    alt: "AI ConX event at Nellore Town Hall",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423951/DSC03342.webp",
    alt: "AI ConX audience and speakers",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423953/DSC03356.webp",
    alt: "AI ConX creative industry event",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423954/DSC03414.webp",
    alt: "AI ConX speaker session",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423955/DSC03417.webp",
    alt: "AI ConX event audience",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423956/DSC03472.webp",
    alt: "AI ConX creative technology discussion",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423956/DSC03507.webp",
    alt: "AI ConX event gathering",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423957/DSC03546.webp",
    alt: "AI ConX speakers and attendees",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423958/DSC03585.webp",
    alt: "AI ConX event session",
  },
  {
    src: "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423959/DSC03675.webp",
    alt: "AI ConX event at Nellore Town Hall",
  },
];

const themes = [
  {
    number: "01",
    title: "AI × Creativity",
    description:
      "Exploring how artificial intelligence is changing the way creative ideas are imagined, produced, and brought to life.",
  },
  {
    number: "02",
    title: "AI × Filmmaking",
    description:
      "Looking at the possibilities AI creates for filmmakers, editors, storytellers, and the future of visual production.",
  },
  {
    number: "03",
    title: "The Orange Economy",
    description:
      "A conversation around the creative economy and the growing opportunities for people and businesses built around creativity.",
  },
  {
    number: "04",
    title: "Ideas × Industry",
    description:
      "Bringing together creative professionals, industry minds, and local leaders to exchange ideas about what comes next.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={eventImages[0].src}
            alt={eventImages[0].alt}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                AdbuthVerse Presents
              </p>
            </div>

            <h1 className="text-6xl font-bold leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-[9rem]">
              AI
              <span className="text-brand"> CONX</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-white/80 sm:text-2xl">
              Where artificial intelligence meets creativity, filmmaking,
              storytelling, and the future of the Orange Economy.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
                Nellore Town Hall
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
                AI × Creativity
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
                Industry × Ideas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT INTRO
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                The idea
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                A conversation about
                <br />
                <span className="text-muted-foreground">
                  what's next.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                AI ConX was created around one simple idea: the future of
                creativity is being shaped right now.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We brought together people from the creative and technology
                ecosystem — including industry minds and local leaders — to
                explore how artificial intelligence is transforming creative
                work, filmmaking, storytelling, and the wider creative
                economy.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Hosted at Nellore Town Hall, AI ConX was a space for ideas,
                conversations, perspectives, and connections around the
                possibilities ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT STATS
      ========================================================= */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          <div className="px-6 py-9 sm:px-8 sm:py-11">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI
            </p>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              At the center
            </p>
          </div>

          <div className="px-6 py-9 sm:px-8 sm:py-11">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              01
            </p>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Big conversation
            </p>
          </div>

          <div className="border-t border-border px-6 py-9 sm:border-t-0 sm:px-8 sm:py-11">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              ∞
            </p>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Possibilities
            </p>
          </div>

          <div className="border-t border-border px-6 py-9 sm:border-t-0 sm:px-8 sm:py-11">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              NLR
            </p>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Nellore
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY THEMES
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              The conversation
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              Four ideas at the heart of AI ConX.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              AI is bigger than a technology discussion. It is becoming part
              of how we imagine, create, communicate, and build.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {themes.map((theme) => (
              <div
                key={theme.number}
                className="bg-background p-8 transition-colors duration-300 hover:bg-surface sm:p-10"
              >
                <span className="text-sm font-semibold text-brand">
                  {theme.number}
                </span>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                  {theme.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED MOMENT
      ========================================================= */}
      <section className="border-y border-border bg-surface/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              The room
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              When ideas filled the room.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {/* Large */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-border lg:col-span-8">
              <div className="relative aspect-[4/3] min-h-[400px] overflow-hidden lg:min-h-[600px]">
                <Image
                  src={eventImages[1].src}
                  alt={eventImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 67vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    AI ConX
                  </p>

                  <p className="mt-2 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Bringing creative minds and new possibilities together.
                  </p>
                </div>
              </div>
            </div>

            {/* Side */}
            <div className="grid gap-5 lg:col-span-4">
              <div className="group relative overflow-hidden rounded-[2rem] border border-border">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
                  <Image
                    src={eventImages[2].src}
                    alt={eventImages[2].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRY / LEADERS
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                People & perspectives
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                Big minds.
                <br />
                <span className="text-muted-foreground">
                  Different perspectives.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                AI ConX brought together voices from different parts of the
                ecosystem — people working in creative industries, technology,
                business, and local leadership.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                That mix was intentional. The future of creative work won't be
                shaped by one industry alone. It will be shaped by the
                conversations between them.
              </p>

              <div className="mt-8 inline-flex rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium">
                Industry × Technology × Creativity × Leadership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PHOTO MOSAIC
      ========================================================= */}
      <section className="border-y border-border bg-surface/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Inside AI ConX
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Moments from the day.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-right">
              Conversations, people, ideas, and moments from AI ConX at Nellore
              Town Hall.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {eventImages.slice(3).map((image, index) => {
              const layoutClasses = [
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-5",
                "lg:col-span-7",
                "lg:col-span-7",
                "lg:col-span-5",
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-4",
              ];

              return (
                <div
                  key={image.src}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${layoutClasses[index]}`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 4 || index === 5
                        ? "aspect-[16/10]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BIG STATEMENT
      ========================================================= */}
      <section className="overflow-hidden bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Why events like this matter
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-[0.92] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              THE FUTURE
              <br />
              ISN'T JUST
              <br />
              <span className="text-brand">WATCHED.</span>
              <br />
              IT'S CREATED.
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              AI ConX was our way of bringing people into the conversation —
              exploring how technology can expand human creativity rather than
              replace it.
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
            Be part of what's next
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
            Don't just watch the future.
            <br />
            Create it.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Join AdbuthVerse and work alongside people who are curious about
            what's possible and passionate about making it real.
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
