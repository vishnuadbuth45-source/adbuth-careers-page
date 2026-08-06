"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/shared/typography";
import { signInWithEmail } from "@/lib/auth-actions";

type LoginState = {
  error: string;
};

const initialState: LoginState = {
  error: "",
};

async function loginAction(_: LoginState, formData: FormData): Promise<LoginState> {
  try {
    await signInWithEmail(formData);
    return initialState;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unable to sign in.",
    };
  }
}

export function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="w-full max-w-md space-y-4 rounded-xl border border-border bg-surface p-6 shadow-sm">
      <div className="space-y-1">
        <Typography variant="h3" as="h1">
          Admin Sign in
        </Typography>
        <Typography variant="muted" as="p">
          Use your Supabase admin credentials to continue.
        </Typography>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:border-ring focus:ring-2 focus:ring-ring/50"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:border-ring focus:ring-2 focus:ring-ring/50"
        />
      </div>

      {state.error ? (
        <p className="text-sm text-destructive">{state.error}</p>
      ) : null}

      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
}
