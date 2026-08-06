"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signInWithEmail(formData: FormData) {
  const email = formData.get("email")?.toString().trim() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const supabase = await createClient();
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
});

console.log("LOGIN ERROR:", error);
console.log("SESSION:", data.session);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
