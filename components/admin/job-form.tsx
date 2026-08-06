"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createJob, updateJob } from "@/lib/career-actions";
import type { Database } from "@/types/database";

type JobRow = Database["public"]["Tables"]["jobs"]["Row"];
type JobFormProps = {
  initialValues?: Partial<JobRow>;
  jobId?: string;
};

const defaultValues = {
  title: "",
  department: "",
  location: "",
  employment_type: "",
  experience: "",
  salary: "",
  short_description: "",
  description: "",
  responsibilities: [] as string[],
  requirements: [] as string[],
  benefits: [] as string[],
  tech_stack: [] as string[],
  slug: "",
  published: false,
};

function parseList(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function JobForm({ initialValues, jobId }: JobFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({ ...defaultValues, ...initialValues });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        department: form.department.trim(),
        location: form.location.trim(),
        employment_type: form.employment_type.trim(),
        experience: form.experience.trim(),
        salary: form.salary?.trim() ? form.salary.trim() : null,
        short_description: form.short_description.trim(),
        description: form.description.trim(),
        responsibilities: parseList(form.responsibilities.join("\n")),
        requirements: parseList(form.requirements.join("\n")),
        benefits: parseList(form.benefits.join("\n")),
        tech_stack: parseList(form.tech_stack.join("\n")),
        published: form.published,
      };

      if (!payload.title || !payload.slug || !payload.department || !payload.location || !payload.employment_type || !payload.experience || !payload.short_description || !payload.description) {
        throw new Error("Please fill in all required fields.");
      }

      if (jobId) {
        await updateJob(jobId, payload);
      } else {
        await createJob(payload);
      }

      router.refresh();
      router.push("/admin/jobs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save job.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(field: keyof typeof form, value: string | boolean | string[]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-surface p-6">
      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="font-medium">Title</span>
          <input
            required
            value={form.title}
            onChange={(event) => updateField("title", event.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Slug</span>
          <input
            required
            value={form.slug}
            onChange={(event) => updateField("slug", event.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Department</span>
          <input
            required
            value={form.department}
            onChange={(event) => updateField("department", event.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Location</span>
          <input
            required
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Employment Type</span>
          <input
            required
            value={form.employment_type}
            onChange={(event) => updateField("employment_type", event.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Experience</span>
          <input
            required
            value={form.experience}
            onChange={(event) => updateField("experience", event.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Salary</span>
          <input
            value={form.salary ?? ""}
            onChange={(event) => updateField("salary", event.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="flex items-center gap-2 pt-8 text-sm font-medium">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(event) => updateField("published", event.target.checked)}
          />
          Publish immediately
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        <span className="font-medium">Short Description</span>
        <textarea
          required
          rows={3}
          value={form.short_description}
          onChange={(event) => updateField("short_description", event.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
        />
      </label>

      <label className="block space-y-2 text-sm">
        <span className="font-medium">Full Description</span>
        <textarea
          required
          rows={6}
          value={form.description}
          onChange={(event) => updateField("description", event.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="font-medium">Responsibilities (one per line)</span>
          <textarea
            rows={6}
            value={form.responsibilities.join("\n")}
            onChange={(event) => updateField("responsibilities", event.target.value.split("\n"))}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Requirements (one per line)</span>
          <textarea
            rows={6}
            value={form.requirements.join("\n")}
            onChange={(event) => updateField("requirements", event.target.value.split("\n"))}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Benefits (one per line)</span>
          <textarea
            rows={6}
            value={form.benefits.join("\n")}
            onChange={(event) => updateField("benefits", event.target.value.split("\n"))}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Tech Stack (one per line)</span>
          <textarea
            rows={6}
            value={form.tech_stack.join("\n")}
            onChange={(event) => updateField("tech_stack", event.target.value.split("\n"))}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </label>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : jobId ? "Save Changes" : "Create Job"}
        </Button>
      </div>
    </form>
  );
}
