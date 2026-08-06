import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

function getEnvValue(name: keyof NodeJS.ProcessEnv) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function createClient() {
  return createBrowserClient<Database>(
    getEnvValue("NEXT_PUBLIC_SUPABASE_URL"),
    getEnvValue("NEXT_PUBLIC_SUPABASE_ANON_KEY")
  );
}
