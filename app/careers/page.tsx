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
import { ArrowRight, Brain, BriefcaseBusiness, Compass, Crown, GraduationCap, HeartHandshake, Lightbulb, Rocket, Sparkles, Users, Workflow, ShieldCheck, Laptop, CalendarDays, Trophy, BadgeCheck, Clock3 } from "lucide-react";

type PublishedJob = {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience: string;
  short_description: string;
  slug: string;
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
  { title: "Team Photos", description: "A close-knit, global crew that ships with heart.", icon: Users },
  { title: "Workspace", description: "A modern environment designed for focus and collaboration.", icon: Laptop },
  { title: "Events", description: "Thoughtful gatherings that strengthen the team experience.", icon: CalendarDays },
  { title: "Celebrations", description: "Moments that honor wins, milestones, and people.", icon: Trophy },
  { title: "Hackathons", description: "Creative sprints where ideas become real products.", icon: Sparkles },
  { title: "Employee Stories", description: "Voices from the people building AdbuthVerse every day.", icon: HeartHandshake },
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
  { question: "Remote or Onsite?", answer: "We work with a hybrid spirit, balancing remote flexibility with focused in-person collaboration when it adds value." },
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
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(147,197,253,0.15),_transparent_40%)]" />
        <Container className="relative grid gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand" />
              Building the future of digital experiences
            </div>
            <div className="space-y-4">
              <Typography variant="h1" as="h1" className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Join a company that turns bold ideas into meaningful products.
              </Typography>
              <Typography variant="lead" as="p" className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                AdbuthVerse is where product craft, experimentation, and ownership come together to create work that matters.
              </Typography>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <Link href="#open-positions">
                  Explore Opportunities
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#why-join">Discover the culture</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-border bg-surface/70 p-4 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(99,102,241,0.25),_transparent_55%,_rgba(34,211,238,0.2))]" />
            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white">
              <div className="space-y-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm">
                  <Brain className="h-4 w-4" />
                  Premium team, world-class craft
                </div>
                <Typography variant="h3" as="h2" className="max-w-md text-2xl font-semibold sm:text-3xl">
                  Collaborate with builders who care deeply about design, speed, and impact.
                </Typography>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Remote-first mindset</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">High ownership</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Learning-led growth</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="why-join" className="border-b border-border bg-surface/50 py-24">
        <Container className="space-y-10 px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <Typography variant="h2" as="h2">
              Why Join AdbuthVerse
            </Typography>
            <Typography variant="muted" as="p" className="text-lg">
              The reasons people stay and grow are the same reasons they’re excited to join.
            </Typography>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyJoinItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="group transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="life-at" className="border-b border-border py-24">
        <Container className="space-y-10 px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <Typography variant="h2" as="h2">
              Life at AdbuthVerse
            </Typography>
            <Typography variant="muted" as="p" className="text-lg">
              A blend of thoughtful collaboration, inspiring moments, and people-first energy.
            </Typography>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {lifeAtItems.map((item, index) => {
              const Icon = item.icon;
              const images = [image1, image2, image3, image4, image5, image6, image7, image8];
              const image = images[index % images.length];

              return (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-border bg-surface/70 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-52 w-full">
                    <Image
                      src={image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="benefits" className="border-b border-border bg-surface/50 py-24">
        <Container className="space-y-10 px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <Typography variant="h2" as="h2">
              Benefits & Perks
            </Typography>
            <Typography variant="muted" as="p" className="text-lg">
              Designed to support people as professionals, teammates, and humans.
            </Typography>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="open-positions" className="border-b border-border py-24">
        <Container className="space-y-10 px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <Typography variant="h2" as="h2">
              Open Positions
            </Typography>
            <Typography variant="muted" as="p" className="text-lg">
              Explore the roles where your next chapter can begin.
            </Typography>
          </div>

          {jobs.length ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {jobs.map((job) => (
                <Card key={job.id} className="transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle>{job.title}</CardTitle>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        {job.department}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.employment_type}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{job.short_description}</p>
                    <Button asChild variant="outline">
                      <Link href={`/careers/${job.slug}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-surface/70 p-10 text-center text-sm text-muted-foreground">
              No positions are live right now. Please check back soon.
            </div>
          )}
        </Container>
      </section>

      <section className="border-b border-border bg-surface/50 py-24">
        <Container className="space-y-10 px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <Typography variant="h2" as="h2">
              Hiring Process
            </Typography>
            <Typography variant="muted" as="p" className="text-lg">
              A clear, intentional path from first interest to welcome aboard.
            </Typography>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["1", "Apply", "Share your background and interest in the role."],
              ["2", "Resume Review", "We assess fit, experience, and motivation."],
              ["3", "Initial Interview", "An introduction to your story and our mission."],
              ["4", "Technical Round", "A deeper conversation around craft and delivery."],
              ["5", "Final Discussion", "Alignment on growth, expectations, and impact."],
              ["6", "Offer & Onboarding", "A thoughtful welcome into the team."],
            ].map(([step, title, description]) => (
              <div key={title} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                  {step}
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="space-y-10 px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <Typography variant="h2" as="h2">
              Frequently Asked Questions
            </Typography>
            <Typography variant="muted" as="p" className="text-lg">
              Clear answers for curious applicants.
            </Typography>
          </div>
          <div className="rounded-2xl border border-border bg-surface/70 p-4">
            <Accordion>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section id="contact" className="border-t border-border bg-surface/70 py-24">
        <Container className="px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-border bg-background p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div className="space-y-4">
              <Typography variant="h2" as="h2">
                Contact the team
              </Typography>
              <Typography variant="muted" as="p" className="text-lg">
                Have a question about a role, the company, or the hiring process? We’d love to hear from you.
              </Typography>
            </div>
            <div className="space-y-4 rounded-2xl border border-border bg-surface/70 p-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a href="mailto:careers@adbuthverse.com" className="mt-1 text-sm text-primary hover:underline">
                  careers@adbuthverse.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="mt-1 text-sm text-primary hover:underline">
                  linkedin.com/company/adbuthverse
                </a>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="mailto:careers@adbuthverse.com">Send a Message</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/70 py-24">
        <Container className="px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 via-background to-brand/10 p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto max-w-2xl space-y-5">
              <Typography variant="h2" as="h2">
                Ready to build something meaningful?
              </Typography>
              <Typography variant="muted" as="p" className="text-lg">
                Explore the current opportunities and take the next step toward your future at AdbuthVerse.
              </Typography>
              <Button asChild size="lg" className="group">
                <Link href="#open-positions">
                  Explore Open Positions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
