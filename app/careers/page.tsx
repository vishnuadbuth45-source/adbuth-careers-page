import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { createClient } from "@/lib/supabase/server";
import image1 from "@/assets/1.webp";
import image2 from "@/assets/2.webp";
import image3 from "@/assets/3.webp";
import image4 from "@/assets/4.webp";
import image5 from "@/assets/5.webp";
import image6 from "@/assets/6.webp";
import image7 from "@/assets/7.webp";
import image8 from "@/assets/8.webp";
import { ArrowRight, Brain,Briefcase, BriefcaseBusiness, Compass, Crown, GraduationCap, HeartHandshake, Lightbulb, Rocket, Sparkles, Users, Workflow, ShieldCheck, Laptop, CalendarDays, Trophy, BadgeCheck, Clock3, ArrowUpRight, Linkedin, Mail } from "lucide-react";

type PublishedJob = {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience: string;
  short_description: string;
  slug: string;
  updated_at: string | null;
  created_at: string | null;
};

export const dynamic = "force-dynamic";

const whyJoinItems = [
  { title: "Mission", description: "Build products that shape meaningful digital experiences.", icon: Compass },
  { title: "Vision", description: "Create a future where technology feels human, elegant, and intuitive.", icon: Rocket },
  { title: "Innovation", description: "Experiment boldly with modern tools and forward-thinking ideas.", icon: Lightbulb },
  { title: "Learning", description: "Grow through mentorship, curiosity, and continuous upskilling.", icon: GraduationCap },
  { title: "Ownership", description: "Take initiative, lead and make an impact from day one.", icon: Crown },
  { title: "Career Growth", description: "Shape your path in a company that rewards ambition and craft.", icon: BriefcaseBusiness },
];

const lifeAtItems = [
  { title: "Team Photos", description: "A close-knit, global crew that ships with heart.", icon: Users ,href:"/careers/life-at-adbuth/team"},
  { title: "Workspace", description: "A modern environment designed for focus and collaboration.", icon: Laptop ,href:"/careers/life-at-adbuth/workspace"},
  { title: "Events", description: "Thoughtful gatherings that strengthen the team experience.", icon: CalendarDays ,href:"/careers/life-at-adbuth/events"},
  { title: "Celebrations", description: "Moments that honor wins, milestones, and people.", icon: Trophy ,href:"/careers/life-at-adbuth/celebrations"},
  { title: "Hackathons", description: "Creative sprints where ideas become real products.", icon: Sparkles ,href:"/careers/life-at-adbuth/hackathons"},
  { title: "Employee Stories", description: "Voices from the people building AdbuthVerse every day.", icon: HeartHandshake ,href:"/careers/life-at-adbuth/employ-stories"},
];

const benefits = [
  { title: "Flexible Work", description: "Choose the rhythm that helps you do your best work.", icon: Workflow },
  { title: "Health Benefits", description: "Support for wellbeing, care, and peace of mind.", icon: ShieldCheck },
  { title: "Learning Budget", description: "Invest in courses, tools, and conferences that matter.", icon: GraduationCap },
  { title: "Paid Leave", description: "Take the time you need to recharge and reset.", icon: CalendarDays },
  { title: "Modern Equipment", description: "Work on the best tools for ambitious product teams.", icon: Laptop },
  { title: "Team Outings", description: "Enjoy memorable experiences beyond the screen.", icon: Users },
  { title: "Recognition", description: "Your work is seen, valued, and celebrated.", icon: BadgeCheck },
  { title: "Career Development", description: "Clear pathways to grow into the next chapter.", icon: BriefcaseBusiness },
];

const faqs = [
  {question: "Remote or Onsite?", answer: "We work fully onsite, creating a collaborative environment where teams can connect, learn, and build together." },
  { question: "Internship?", answer: "We welcome interns and early-career builders who are curious, consistent, and hungry to learn." },
  { question: "Interview Duration?", answer: "Most interviews span one to two meetings, depending on the role and level." },
  { question: "Response Time?", answer: "We aim to respond within a few business days after each stage." },
  { question: "Multiple Applications?", answer: "You can apply to more than one role if the opportunities genuinely fit your background." },
  { question: "Required Documents?", answer: "A tailored resume and a short note about your interest are usually enough to begin." },
];

async function getPublishedJobs() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    return [];
  }

  return (data ?? []) as PublishedJob[];
}

export default async function CareersPage() {
  const jobs = await getPublishedJobs();

  return (
    <main className="overflow-hidden bg-background text-foreground">
<section className="relative isolate overflow-hidden border-b border-border/60">
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#7d287e]/10 blur-3xl" />
    <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#7d287e]/10 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,40,126,0.10),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(125,40,126,0.08),transparent_40%)]" />
  </div>

  <Container className="relative grid gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-8 lg:py-28">
    {/* Left — Hero content */}
    <div className="max-w-3xl">
      <div className="space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#7d287e]/20 bg-[#7d287e]/5 px-3.5 py-1.5 text-sm font-medium text-[#7d287e] dark:text-[#c56ac6]">
          <Sparkles className="h-4 w-4" />
          Building the future of digital experiences
        </div>

        {/* Heading */}
        <div className="space-y-5">
          <Typography
            variant="h1"
            as="h1"
            className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Join a company that turns bold ideas into{" "}
            <span className="bg-gradient-to-r from-[#7d287e] via-[#9d3fa0] to-[#c56ac6] bg-clip-text text-transparent">
              meaningful products.
            </span>
          </Typography>

          <Typography
            variant="lead"
            as="p"
            className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            AdbuthVerse is where product craft, experimentation, and
            ownership come together to create work that matters.
          </Typography>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button
            asChild
            size="lg"
            className="group bg-[#7d287e] shadow-lg shadow-[#7d287e]/10 hover:bg-[#6b226b]"
          >
            <Link scroll={true} href="#open-positions">
              Explore Opportunities
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="bg-background/60">
            <Link scroll={true} href="#why-join">
              Discover the culture
            </Link>
          </Button>
        </div>

        {/* Small supporting detail */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            People-first culture
          </span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7d287e]" />
            Meaningful ownership
          </span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Built to grow
          </span>
        </div>
      </div>
    </div>

    {/* Right — Visual panel */}
    <div className="relative">
      {/* Glow behind card */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#7d287e]/15 via-[#7d287e]/5 to-[#c56ac6]/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/70 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl">
        {/* Inner card */}
        <div className="relative min-h-[390px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#1f1f23] via-[#2b2b31] to-[#383840] p-7 text-white sm:p-9">
          {/* Decorative gradients */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/6 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-slate-400/8 blur-3xl" />

          {/* Subtle grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:32px_32px]" />

          <div className="relative flex min-h-[340px] flex-col justify-between">
            {/* Top */}
            <div className="space-y-7">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur">
                  <Brain className="h-3.5 w-3.5 text-slate-300" />
                  World-class craft
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-300">Building</span>
                </div>
              </div>

              <div className="max-w-md space-y-4">
                <Typography
                  variant="h3"
                  as="h2"
                  className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl"
                >
                  Work with builders who care about{" "}
                  <span className="text-slate-200">what they create.</span>
                </Typography>

                <p className="max-w-sm text-sm leading-6 text-slate-300">
                  Bring your ideas, challenge assumptions, and help turn
                  ambitious thinking into products people genuinely value.
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="space-y-5">
              <div className="h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

              <div className="flex flex-wrap gap-2">
                {[
                  "Collaborative environment",
                  "High ownership",
                  "Continuous learning",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
<section
  id="why-join"
  className="relative isolate overflow-hidden border-b border-border/60 bg-surface/40 py-24 lg:py-28"
>
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/4 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#7d287e]/[0.06] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[350px] w-[450px] rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
  </div>

  <Container className="relative space-y-14 px-6 lg:px-8">
    {/* Section heading */}
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#7d287e]">
  <span className="h-px w-6 bg-[#7d287e]" />
  Why AdbuthVerse
</div>

        <Typography
          variant="h2"
          as="h2"
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          A place where great work{" "}
          <span className="text-muted-foreground">can happen.</span>
        </Typography>

        <Typography
          variant="muted"
          as="p"
          className="max-w-xl text-base leading-7 sm:text-lg"
        >
          The reasons people stay and grow are the same reasons they’re
          excited to join. We’re building an environment where people can do
          meaningful work and keep getting better at it.
        </Typography>
      </div>

      {/* Small section indicator */}
      <div className="hidden shrink-0 items-center gap-3 text-sm text-muted-foreground lg:flex">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Built for people who care
      </div>
    </div>

    {/* Benefits */}
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {whyJoinItems.map((item, index) => {
        const Icon = item.icon;

        return (
<Card
  key={item.title}
  className="group relative overflow-hidden border-border/60 bg-background/60 transition-all duration-300 hover:-translate-y-1 hover:!border-[#7d287e]/30 hover:bg-background/80 hover:!shadow-xl hover:!shadow-[#7d287e]/5"
>
  {/* Hover glow */}
  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#7d287e]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

  <CardHeader className="relative pb-4">
    <div className="flex items-start justify-between">
      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7d287e]/15 bg-[#7d287e]/10 text-[#7d287e] transition-all duration-300 group-hover:border-[#7d287e]/25 group-hover:bg-[#7d287e]/15 group-hover:scale-105">
        <Icon className="h-5 w-5 text-[#7d287e]" />
      </div>

      {/* Number */}
      <span className="text-xs font-medium tabular-nums text-muted-foreground/40">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <CardTitle className="pt-3 text-lg font-semibold tracking-tight">
      {item.title}
    </CardTitle>
  </CardHeader>

  <CardContent className="relative">
    <p className="text-sm leading-6 text-muted-foreground">
      {item.description}
    </p>
  </CardContent>

  {/* Bottom accent */}
  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#7d287e] transition-all duration-500 group-hover:w-full" />
</Card>
        );
      })}
    </div>
  </Container>
</section>

<section
  id="life-at"
  className="relative isolate overflow-hidden border-b border-border/60 py-24 lg:py-28"
>
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#7d287e]/[0.06] blur-3xl" />
    <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
  </div>

  <Container className="relative space-y-14 px-6 lg:px-8">
    {/* Section heading */}
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl space-y-4">
       <div className="inline-flex items-center gap-2 text-sm font-medium text-[#7d287e]">
  <span className="h-px w-6 bg-[#7d287e]" />
  Life at AdbuthVerse
</div>

        <Typography
          variant="h2"
          as="h2"
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          More than a workplace.
          <br className="hidden sm:block" />{" "}
          <span className="text-muted-foreground">
            It&apos;;s where we create magic together.
          </span>
        </Typography>

        <Typography
          variant="muted"
          as="p"
          className="max-w-xl text-base leading-7 sm:text-lg"
        >
          A glimpse into the people, spaces, stories, and moments that make
          life at AdbuthVerse unique.
        </Typography>
      </div>

      <div className="hidden items-center gap-3 text-sm text-muted-foreground lg:flex">
        <span className="h-2 w-2 rounded-full bg-brand" />
        Inside AdbuthVerse
      </div>
    </div>

    {/* Life at cards */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Our Team",
          description:
            "A closer look at the creative minds, editors, and people building AdbuthVerse.",
          href: "/careers/life-at-adbuth/team",
          image:
            "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426149/TEAM.jpg",
        },
        {
          title: "Our Workspace",
          description:
            "The environment where ideas take shape, teams collaborate, and creative work comes to life.",
          href: "/careers/life-at-adbuth/workspace",
          image:
            "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426151/WORKSPACE.jpg",
        },
        {
          title: "Celebrations",
          description:
            "The birthdays, milestones, achievements, and moments we celebrate together.",
          href: "/careers/life-at-adbuth/celebrations",
          image:
            "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426145/CELEBRATIONS.jpg",
        },
        {
          title: "Employee Stories",
          description:
            "Meet the people behind the work and discover the stories that shape our team.",
          href: "/careers/life-at-adbuth/employee-stories",
          image:
            "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426146/EMPLOYEE_STORIES.jpg",
        },
        {
          title: "Events",
          description:
            "From creative conversations to industry gatherings, see what happens beyond the everyday.",
          href: "/careers/life-at-adbuth/events",
          image:
            "https://res.cloudinary.com/xmg6q7k7/image/upload/v1786426147/EVENT.jpg",
        },
      ].map((item, index) => (
        <Link
          key={item.title}
          href={item.href}
          className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/10 ${
            index === 0 ? "lg:col-span-2" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`relative overflow-hidden ${
              index === 0
                ? "aspect-[16/8]"
                : "aspect-[16/10]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes={
                index === 0
                  ? "(max-width: 1024px) 100vw, 66vw"
                  : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            {/* Hover tint */}
            <div className="absolute inset-0 bg-brand/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Number */}
            <span className="absolute right-5 top-5 text-xs font-medium tabular-nums text-white/60">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="relative p-5 sm:p-6">
            <p className="text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>

            {/* Explore */}
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#7d287e]">
  Explore
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand to-[#7d287e] transition-all duration-500 group-hover:w-full" />
          </div>
        </Link>
      ))}

      {/* Fifth card fills the remaining space nicely */}
    </div>
  </Container>
</section>

<section
  id="benefits"
  className="relative isolate overflow-hidden border-b border-border/60 py-24 lg:py-28"
>
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-0 h-[400px] w-[500px] rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[#7d287e]/[0.06] blur-3xl" />
  </div>

  <Container className="relative space-y-14 px-6 lg:px-8">
    {/* Section heading */}
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl space-y-4">
       <div className="inline-flex items-center gap-2 text-sm font-medium text-[#7d287e]">
  <span className="h-px w-6 bg-[#7d287e]" />
  Benefits & Perks
</div>

        <Typography
          variant="h2"
          as="h2"
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Support for the work.
          <br className="hidden sm:block" />{" "}
          <span className="text-muted-foreground">
            And everything around it.
          </span>
        </Typography>

        <Typography
          variant="muted"
          as="p"
          className="max-w-xl text-base leading-7 sm:text-lg"
        >
          Designed to support people as professionals, teammates, and humans —
          so you can focus on doing your best work.
        </Typography>
      </div>

      <div className="hidden items-center gap-3 text-sm text-muted-foreground lg:flex">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        People come first
      </div>
    </div>

    {/* Benefits grid */}
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {benefits.map((item, index) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="group relative overflow-hidden border-border/60 bg-background/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-background/80 hover:shadow-xl hover:shadow-brand/5"
          >
            {/* Soft hover glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <CardHeader className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/15 bg-brand/10 text-brand transition-all duration-300 group-hover:scale-105 group-hover:border-brand/25 group-hover:bg-brand/15">
                <Icon className="h-5 w-5 text-[#7d287e]" />
                </div>

                <span className="text-xs font-medium tabular-nums text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <CardTitle className="pt-4 text-base font-semibold tracking-tight">
                {item.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative">
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </CardContent>

            {/* Bottom hover accent */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand to-[#7d287e] transition-all duration-500 group-hover:w-full" />
          </Card>
        );
      })}
    </div>
  </Container>
</section>



<section
  id="open-positions"
  className="relative isolate overflow-hidden border-b border-border/60 py-24 lg:py-28"
>
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-20 h-[450px] w-[500px] rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[450px] w-[500px] rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
  </div>

  <Container className="relative space-y-14 px-6 lg:px-8">
    {/* Section heading */}
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#7d287e]">
  <span className="h-px w-6 bg-[#7d287e]" />
  Careers
</div>

        <Typography
          variant="h2"
          as="h2"
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Open Positions
        </Typography>

        <Typography
          variant="muted"
          as="p"
          className="max-w-xl text-base leading-7 sm:text-lg"
        >
          Explore the roles where your next chapter can begin.
        </Typography>
      </div>

      {jobs.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-brand/10 px-2 font-semibold text-brand">
            {jobs.length}
          </span>
          <span>{jobs.length === 1 ? "open role" : "open roles"}</span>
        </div>
      )}
    </div>

    {/* Job listings */}
    {jobs.length ? (
      <div className="grid gap-4 lg:grid-cols-2">
        {jobs.map((job) => (
         <Link
  key={job.id}
  href={`/careers/${job.slug}`}
  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7d287e]/30 hover:bg-background/80 hover:shadow-2xl hover:shadow-[#7d287e]/5 sm:p-7"
>
  {/* Hover glow */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#7d287e]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

  {/* Top row */}
  <div className="relative flex items-start justify-between gap-6">
    <div className="min-w-0">
      <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-[#7d287e] sm:text-2xl">
        {job.title}
      </h3>

      {job.department && (
        <p className="mt-2 text-sm font-medium text-[#7d287e]/90">
          {job.department}
        </p>
      )}
    </div>

    {job.created_at && (
      <time
        dateTime={job.created_at}
        className="shrink-0 whitespace-nowrap text-xs font-medium text-muted-foreground/70"
      >
        Posted on{" "}
        {new Date(job.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </time>
    )}
  </div>

  {/* Metadata */}
  <div className="relative mt-5 flex flex-wrap gap-2">
    {[
      job.location,
      job.employment_type,
      job.experience,
    ]
      .filter(Boolean)
      .map((meta) => (
        <span
          key={meta}
          className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          {meta}
        </span>
      ))}
  </div>

  {/* Description */}
  <p className="relative mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
    {job.short_description}
  </p>

  {/* Footer */}
  <div className="relative mt-auto pt-7">
    <div className="flex items-center justify-between border-t border-border/60 pt-5">
      <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-[#7d287e]">
        View Details
      </span>

      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background transition-all duration-300 group-hover:border-[#7d287e]/30 group-hover:bg-[#7d287e]/10">
        <ArrowRight className="h-4 w-4 text-[#7d287e] transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  </div>

  {/* Bottom hover accent */}
  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7d287e] via-[#7d287e] to-[#7d287e] transition-all duration-500 group-hover:w-full" />
</Link>
        ))}
      </div>
    ) : (
      /* Empty state */
      <div className="relative overflow-hidden rounded-2xl border border-dashed border-border/70 bg-background/40 px-6 py-16 text-center sm:px-10">
  <div className="mx-auto flex max-w-md flex-col items-center">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7d287e]/10 text-[#7d287e]">
      <Briefcase className="h-5 w-5" />
    </div>

    <h3 className="text-lg font-semibold">
      No open positions right now
    </h3>

    <p className="mt-2 text-sm leading-6 text-muted-foreground">
      We don&apos;t have any open roles at the moment, but we&apos;re always
      interested in meeting talented people.
    </p>
  </div>
</div>
    )}
  </Container>
</section>


<section
  id="hiring-process"
  className="relative isolate overflow-hidden border-b border-border/60 py-24 lg:py-28"
>
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/3 top-0 h-[400px] w-[500px] rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
  </div>

  <Container className="relative space-y-14 px-6 lg:px-8">
    {/* Section heading */}
    <div className="max-w-2xl space-y-4">
      <div className="inline-flex items-center gap-2 text-sm font-medium text-[#7d287e]">
  <span className="h-px w-6 bg-[#7d287e]" />
  How it works
</div>

      <Typography
        variant="h2"
        as="h2"
        className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
      >
        Hiring Process
      </Typography>

      <Typography
        variant="muted"
        as="p"
        className="max-w-xl text-base leading-7 sm:text-lg"
      >
        A clear, intentional path from first interest to welcome aboard.
        No unnecessary hoops, just meaningful conversations.
      </Typography>
    </div>

    {/* Process */}
    <div className="relative">
      {/* Connecting line — desktop */}
      <div className="absolute left-[2.125rem] top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-brand/40 via-border to-transparent xl:block" />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-8">
        {[
          ["1", "Apply", "Share your background and interest in the role."],
          ["2", "Resume Review", "We assess fit, experience, and motivation."],
          ["3", "Initial Interview", "An introduction to your story and our mission."],
          ["4", "Technical Round", "A deeper conversation around craft and delivery."],
          ["5", "Final Discussion", "Alignment on growth, expectations, and impact."],
          ["6", "Offer & Onboarding", "A thoughtful welcome into the team."],
        ].map(([step, title, description]) => (
       <div
  key={title}
  className="group relative flex gap-5 rounded-2xl border border-border/60 bg-background/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7d287e]/30 hover:bg-background/80 hover:shadow-xl hover:shadow-[#7d287e]/5"
>
  {/* Step number */}
  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7d287e]/20 bg-[#7d287e]/10 text-sm font-semibold text-[#7d287e] transition-all duration-300 group-hover:border-[#7d287e]/40 group-hover:bg-[#7d287e]/15 group-hover:scale-105">
    {step}
  </div>

  {/* Content */}
  <div className="min-w-0 pt-0.5">
    <h3 className="font-semibold tracking-tight text-foreground">
      {title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-muted-foreground">
      {description}
    </p>
  </div>

  {/* Hover accent */}
  <div className="absolute bottom-0 left-5 right-5 h-px scale-x-0 bg-gradient-to-r from-[#7d287e] to-[#7d287e] transition-transform duration-500 group-hover:scale-x-100" />
</div>
        ))}
      </div>
    </div>

    {/* Reassurance */}
    <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/20 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-medium">We value your time.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Every conversation has a purpose, and we’ll keep you informed
          throughout the process.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Transparent process
      </div>
    </div>
  </Container>
</section>


<section
  id="faq"
  className="relative isolate overflow-hidden border-b border-border/60 py-24 lg:py-28"
>
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#7d287e]/[0.05] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#7d287e]/[0.04] blur-3xl" />
  </div>

  <Container className="relative px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
      {/* Heading */}
      <div className="max-w-md space-y-5 lg:sticky lg:top-24 lg:self-start">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#7d287e]">
  <span className="h-px w-6 bg-[#7d287e]" />
  FAQ
</div>
        <Typography
          variant="h2"
          as="h2"
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="muted"
          as="p"
          className="text-base leading-7 sm:text-lg"
        >
          Clear answers for curious applicants. If you still have questions,
          we’d be happy to hear from you.
        </Typography>

        <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Everything you need to know
        </div>
      </div>

      {/* FAQ */}
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/50 p-2 shadow-sm backdrop-blur-sm">
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              className="border-b border-border/50 last:border-b-0"
            >
              <AccordionTrigger className="group px-5 py-5 text-left text-base font-medium tracking-tight hover:no-underline sm:px-6 sm:py-6">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 text-xs font-medium tabular-nums text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="transition-colors duration-200 group-hover:text-brand">
                    {faq.question}
                  </span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-5 pb-6 pl-[3.25rem] text-sm leading-7 text-muted-foreground sm:px-6 sm:pl-[3.5rem]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </Container>
</section>


<section
  id="contact"
  className="relative isolate overflow-hidden border-b border-border/60 py-24 lg:py-28"
>
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/4 top-1/2 h-[500px] w-[700px] -translate-y-1/2 rounded-full bg-[#7d287e]/[0.07] blur-3xl" />
    <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#7d287e]/[0.06] blur-3xl" />
  </div>

  <Container className="relative px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/70 shadow-2xl shadow-black/5 backdrop-blur-xl">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7d287e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#7d287e]/10 blur-3xl" />

      <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-14">
        {/* Main CTA */}
        <div className="flex flex-col justify-center">
         <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#7d287e]/15 bg-[#7d287e]/5 px-3 py-1.5 text-sm font-medium text-[#7d287e]">
  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
  Let’s connect
</div>

          <Typography
            variant="h2"
            as="h2"
            className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Have a question?
            <br />
            <span className="text-muted-foreground">
              Start a conversation.
            </span>
          </Typography>

          <Typography
            variant="muted"
            as="p"
            className="mt-5 max-w-xl text-base leading-7 sm:text-lg"
          >
            Have a question about a role, the company, or the hiring process?
            We’d love to hear from you.
          </Typography>

         <div className="mt-8">
  <Button
    asChild
    size="lg"
    className="group bg-[#7d287e] text-white shadow-lg shadow-[#7d287e]/20 hover:bg-[#6b216b]"
  >
    <a href="mailto:careers@adbuthverse.com">
      Send a Message
      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  </Button>
</div>
        </div>

        {/* Contact details */}
<div className="space-y-3">
  {/* Email */}
  <a
    href="mailto:contact@adbuthverse.com"
    className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-background/60 p-5 transition-all duration-300 hover:border-[#7d287e]/30 hover:bg-background hover:shadow-lg hover:shadow-[#7d287e]/5"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7d287e]/15 bg-[#7d287e]/10 text-[#7d287e]">
      <Mail className="h-5 w-5" />
    </div>

    <div className="min-w-0">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Email
      </p>
      <p className="mt-1 truncate text-sm font-medium text-foreground transition-colors group-hover:text-[#7d287e] sm:text-base">
        careers@adbuthverse.com
      </p>
    </div>

    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7d287e]" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/jayasadbuthproductionsllp/"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-background/60 p-5 transition-all duration-300 hover:border-[#7d287e]/30 hover:bg-background hover:shadow-lg hover:shadow-[#7d287e]/5"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7d287e]/15 bg-[#7d287e]/10 text-[#7d287e]">
      <Linkedin className="h-5 w-5" />
    </div>

    <div className="min-w-0">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        LinkedIn
      </p>
      <p className="mt-1 truncate text-sm font-medium text-foreground transition-colors group-hover:text-[#7d287e] sm:text-base">
        AdbuthVerse
      </p>
    </div>

    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7d287e]" />
  </a>

  {/* Response note */}
  <div className="flex items-start gap-3 px-1 pt-3 text-xs leading-5 text-muted-foreground">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
    We’ll get back to you as soon as we can.
  </div>
</div>
      </div>
    </div>
  </Container>
</section>

<section className="relative isolate overflow-hidden border-b border-border/60 py-24 lg:py-32">
  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7d287e]/[0.08] blur-3xl" />
    <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#7d287e]/[0.06] blur-3xl" />
    <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#7d287e]/[0.06] blur-3xl" />
  </div>

  {/* Subtle grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />

  <Container className="relative px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      {/* Eyebrow */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-sm font-medium text-brand">
        <Sparkles className="h-4 w-4" />
        Your next chapter starts here
      </div>

      {/* Heading */}
      <Typography
        variant="h2"
        as="h2"
        className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
      >
        Ready to build something{" "}
        <span className="bg-gradient-to-r from-[#7d287e] via-[#9d3fa0] to-[#c56ac6] bg-clip-text text-transparent">
          meaningful?
        </span>
      </Typography>

      {/* Description */}
      <Typography
        variant="muted"
        as="p"
        className="mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
      >
        Explore the current opportunities and take the next step toward your
        future at AdbuthVerse.
      </Typography>

      {/* CTA */}
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="group min-w-[210px] bg-[#7d287e] shadow-xl shadow-[#7d287e]/15 hover:bg-[#6b226b]"
        >
          <Link scroll={true} href="#open-positions">
            Explore Open Positions
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Supporting line */}
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Come build with us
      </div>
    </div>
  </Container>
</section>


    </main>
  );
}
