import Image from "next/image";
import Link from "next/link";

const teamImage =
  "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786423853/DSC03715.webp";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div>
              <div className="mb-7 flex items-center gap-3">
  <span className="h-px w-10 bg-[#7d287e]" />

  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
    Life at AdbuthVerse
  </p>
</div>

              <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                WE CREATE
                <br />
                <span className="text-[#7d287e]">VISUAL IMPACT.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                We are a team of editors, creators, and visual storytellers
                turning ideas into content that people remember.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
               <Link
  scroll={true}
  href="/careers#open-positions"
  className="inline-flex items-center rounded-full bg-[#7d287e] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6a216b]"
>
  Join the team
  <span className="ml-2">↗</span>
</Link>

                <a
                  href="#our-team"
                  className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-brand/50 hover:bg-surface"
                >
                  Meet the team
                  <span className="ml-2">↓</span>
                </a>
              </div>
            </div>

            {/* Right intro */}
            <div className="lg:pb-2 lg:pl-12">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Behind every frame
              </p>

              <p className="mt-5 text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                Great work doesn&apos;t happen behind a screen alone.
              </p>

              <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
                It happens through collaboration, ideas, experimentation,
                deadlines, conversations, and a team that cares about the
                final frame as much as the first idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM IMAGE
      ========================================================= */}
      <section id="our-team" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
    The people behind the work
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
    One team. Many perspectives.
  </h2>
</div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-right">
              Different skills, different perspectives, one shared obsession:
              creating work that makes an impact.
            </p>
          </div>

          {/* Main image */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface">
            <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1]">
              <Image
                src={teamImage}
                alt="AdbuthVerse team"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      AdbuthVerse
                    </p>

                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      The team behind the frames.
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    Together · We Create
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              01
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Shared vision
            </p>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              ∞
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Ideas
            </p>
          </div>

          <div className="border-t border-border px-6 py-8 sm:border-t-0 sm:px-8 sm:py-10">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              24/7
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Creating
            </p>
          </div>

          <div className="border-t border-border px-6 py-8 sm:border-t-0 sm:px-8 sm:py-10">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              01
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Team
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Heading */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
  What drives us
</p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                We don&apos;t just edit videos.
                <br />
                <span className="text-muted-foreground">
                  We shape stories.
                </span>
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-0">
              <div className="border-t border-border py-7">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-[#7d287e]">
                    01
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Craft over shortcuts
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                      Every cut, transition, sound, and frame has a purpose.
                      We care about the details that turn ordinary content
                      into something memorable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border py-7">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-[#7d287e]">
                    02
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Creativity without limits
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                      We experiment, explore new ideas, and constantly push
                      ourselves to find better ways to communicate visually.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border py-7">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-[#7d287e]">
                    03
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Better together
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                      The best work comes from people sharing ideas, giving
                      feedback, challenging each other, and building something
                      better together.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border py-7">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-[#7d287e]">
                    04
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Make an impact
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                      Our goal isn&apos;t simply to make content look good. We
                      create visuals that communicate, connect, and leave an
                      impression.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CREATIVE STATEMENT
      ========================================================= */}
      <section className="overflow-hidden border-y border-border bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Our mindset
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              CREATE.
              <br />
              EDIT.
              <br />
              <span className="text-[#7d287e]">IMPACT.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              We&apos;re building a team where editors aren&apos;t just operators behind
              a timeline. They&apos;re storytellers, problem solvers, and creators
              who have a voice in the work.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d287e]">
            Your next frame could start here
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
            Ready to create with us?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            If you&apos;re an editor, creator, storyteller, or someone who simply
            loves making great things, we&apos;d love to hear from you.
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