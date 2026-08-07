"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { submitApplication } from "@/lib/career-actions";

interface ApplicationFormProps {
  jobId: string;
  onSuccess?: () => void;
}

export function ApplicationForm({ jobId, onSuccess }: ApplicationFormProps) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    current_location: "",
    years_of_experience: "",
    linkedin: "",
    portfolio: "",
    cover_letter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      if (!form.full_name.trim()) {
        throw new Error("Full name is required.");
      }
      if (!form.email.trim()) {
        throw new Error("Email is required.");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        throw new Error("Please provide a valid email address.");
      }
      if (!resumeFile) {
        throw new Error("Please upload a resume.");
      }
      const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(resumeFile.type)) {
        throw new Error("Only PDF and DOCX resumes are supported.");
      }

      await submitApplication(
        {
          job_id: jobId,
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          current_location: form.current_location.trim() || null,
          years_of_experience: form.years_of_experience ? Number(form.years_of_experience) : null,
          linkedin: form.linkedin.trim() || null,
          portfolio: form.portfolio.trim() || null,
          cover_letter: form.cover_letter.trim() || null,
        },
        resumeFile
      );
      alert("Your application has been submitted successfully.");
      setSuccess(true);
      setForm({
        full_name: "",
        email: "",
        phone: "",
        current_location: "",
        years_of_experience: "",
        linkedin: "",
        portfolio: "",
        cover_letter: "",
      });
      setResumeFile(null);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit application.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setResumeFile(file);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-background p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Application Form</h3>
        <p className="text-sm text-muted-foreground">We will review your application and contact you if your profile is a fit.</p>
      </div>

      {error ? <p className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p> : null}
      {success ? <p className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-700">Your application was submitted successfully.</p> : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="font-medium">Full Name</span>
          <input required value={form.full_name} onChange={(event) => updateField("full_name", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Email</span>
          <input required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Phone Number</span>
          <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Current Location</span>
          <input value={form.current_location} onChange={(event) => updateField("current_location", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Years of Experience</span>
          <input type="number" min="0" value={form.years_of_experience} onChange={(event) => updateField("years_of_experience", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">LinkedIn</span>
          <input value={form.linkedin} onChange={(event) => updateField("linkedin", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Portfolio / GitHub</span>
          <input value={form.portfolio} onChange={(event) => updateField("portfolio", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Resume (PDF or DOCX)</span>
          <input type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFileChange} className="w-full rounded-md border border-input bg-background px-3 py-2" />
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        <span className="font-medium">Cover Letter</span>
        <textarea rows={10} value={form.cover_letter} onChange={(event) => updateField("cover_letter", event.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2" />
      </label>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
