import Image from "next/image";
import Link from "next/link";

const employees = [
  {
    name: "Rajesh",
    role: "Senior Editor",
    chapter: "The First One",
    image:
      "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426684/Rajesh.webp",
    intro:
      "From being the first employee to becoming a senior editor, Rajesh has grown alongside AdbuthVerse and continues to leave his mark through his work.",
    story:
      "Rajesh has been part of AdbuthVerse from the very beginning. As the company's first employee, his journey is closely connected to the story of how the team has grown.",
    quote:
      "I’m grateful for the people here and for everything I’ve been able to learn along the way. I want to keep growing and help the company grow with me.",
    highlights: [
      "First employee at AdbuthVerse",
      "Senior Editor",
      "Growing with the company from the beginning",
    ],
  },
  {
    name: "Rakesh",
    role: "Business Development Manager",
    chapter: "Built From The Beginning",
    image:
      "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426685/Rakesh_Mungara.webp",
    intro:
      "Rakesh has been part of the journey from its early days, working closely with the founders and helping shape the company along the way.",
    story:
      "As one of the longest-standing members of the team, Rakesh has seen AdbuthVerse evolve from its early days into the company it is today. His work in business development has played an important role in building relationships and creating new opportunities.",
    quote:
      "Being part of the journey from the early days has been special. There is always something new to build, and I’m proud to contribute to where we are going.",
    highlights: [
      "Long-standing member of the team",
      "Business Development Manager",
      "Worked alongside the founders from the early days",
    ],
  },
  {
    name: "Venkata Lokesh",
    role: "Editor",
    chapter: "Growing Into The Work",
    image:
      "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426686/Venkata_Lokesh.webp",
    intro:
      "Lokesh joined AdbuthVerse as a Junior Editor. Today, he works as an Editor while continuing to learn, experiment, and grow with the people around him.",
    story:
      "Lokesh's journey reflects the kind of growth that happens when people are given the space to learn. He started as a Junior Editor and gradually grew into his current role as an Editor.",
    quote:
      "Working from my hometown and being surrounded by good people has made the journey really enjoyable. I’m learning every day, and I’m happy that we get to grow together.",
    highlights: [
      "Joined as a Junior Editor",
      "Now working as an Editor",
      "Learning and growing with the team",
    ],
  },
];

export default function EmployeeStoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-surface/40 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/[0.06] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.05] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
              <span className="h-px w-8 bg-brand" />
              Life at AdbuthVerse
            </div>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              The people
              <br />
              behind the work.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Every project has a story. And behind every story are people
              learning, creating, taking responsibility, and growing together.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
                Employee Stories
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Careers are built one chapter at a time.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                At AdbuthVerse, we believe growth isn&apost only about job titles.
                It&aposs about the work you take ownership of, the people you learn
                from, and the impact you create along the way.
              </p>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                These are a few of the people who have helped shape our
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPLOYEE STORIES
      ========================================================= */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl space-y-28 px-6 lg:px-8 lg:space-y-40">
          {employees.map((employee, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={employee.name}
                className="group"
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                    reversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-[2rem] bg-brand/[0.04] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface">
                      <div className="relative aspect-[4/5]">
                        {employee.image.includes("PASTE_") ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-muted">
                            <p className="px-8 text-center text-sm text-muted-foreground">
                              Add Lokesh&apos;s Cloudinary image here
                            </p>
                          </div>
                        ) : (
                          <Image
                            src={employee.image}
                            alt={`${employee.name} - ${employee.role}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                            {employee.chapter}
                          </p>

                          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {employee.name}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-white/70">
                            {employee.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Story */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold tabular-nums text-[#7d287e]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-10 bg-border" />
                    </div>

                    <p className="mt-7 text-xl font-medium leading-8 text-foreground sm:text-2xl">
                      {employee.intro}
                    </p>

                    <p className="mt-7 text-base leading-7 text-muted-foreground">
                      {employee.story}
                    </p>

                    {/* Quote */}
                    <blockquote className="relative mt-8 border-l-2 border-brand pl-6">
                      <p className="text-lg font-medium leading-8 tracking-tight">
                        “{employee.quote}”
                      </p>
                    </blockquote>

                    {/* Highlights */}
                    <div className="mt-9 flex flex-wrap gap-2">
                      {employee.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          CULTURE STATEMENT
      ========================================================= */}
      <section className="border-y border-border bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
            What growth looks like here
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
            Start somewhere.
            <br />
            Learn every day.
            <br />
            <span className="text-[#7d287e]">Grow together.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            From the people who have been here since the beginning to those
            just starting their journey, everyone has a role in shaping what
            AdbuthVerse becomes next.
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
            Your story could be next
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Build your story with us.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Bring your curiosity, creativity, and ambition. There is always
            room for people who want to learn, contribute, and make an impact.
          </p>

         <Link
  scroll={true}
  href="/careers#open-positions"
  className="mt-9 inline-flex items-center rounded-full bg-[#7d287e] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6a216b] hover:shadow-lg"
>
  Explore Open Positions
  <span className="ml-2">↗</span>
</Link>
        </div>
      </section>
    </main>
  );
}
