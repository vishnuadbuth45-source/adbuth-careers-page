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

const stories = [
  {
    image: image1,
    title: "Growing With AdbuthVerse",
    description:
      "Every project brings a new opportunity to learn, take ownership, and grow alongside the team.",
  },
  {
    image: image2,
    title: "Building Something Meaningful",
    description:
      "Our people get the opportunity to turn ideas into products that create real impact.",
  },
  {
    image: image3,
    title: "Learning Through Experience",
    description:
      "We believe some of the best learning happens when you are given the opportunity to build and experiment.",
  },
  {
    image: image4,
    title: "A Culture of Collaboration",
    description:
      "Great work happens when different perspectives come together and everyone has a voice.",
  },
  {
    image: image5,
    title: "Taking Ownership",
    description:
      "Our team members are encouraged to take responsibility, make decisions, and lead from wherever they are.",
  },
  {
    image: image6,
    title: "Challenges That Shape Us",
    description:
      "Challenges are part of building something ambitious, and every challenge gives us an opportunity to become better.",
  },
  {
    image: image7,
    title: "People Behind the Products",
    description:
      "Behind every product and idea is a group of passionate people working together to make it happen.",
  },
  {
    image: image8,
    title: "The Journey Ahead",
    description:
      "We are still building, still learning, and excited about everything that comes next.",
  },
];

export default function EmployeeStoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
              Life at AdbuthVerse
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Employee Stories
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The best way to understand AdbuthVerse is through the people who
              experience it every day. Here are some of the stories behind our
              journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <article
                key={story.title}
                className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-7">
                  <h2 className="text-xl font-semibold">{story.title}</h2>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {story.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Your story could be next
          </h2>

          <p className="mt-4 text-muted-foreground">
            Bring your ideas, skills, and ambition to a team that is building
            something meaningful.
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