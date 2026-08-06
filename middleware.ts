import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

function getEnvValue(name: keyof NodeJS.ProcessEnv) {
  const value = process.env[name];

  if (!value) {
    console.warn(`Missing required environment variable: ${name}`);
  }

  return value ?? "";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    let response = NextResponse.next({ request });

    const supabase = createServerClient<Database>(
      getEnvValue("NEXT_PUBLIC_SUPABASE_URL"),
      getEnvValue("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            response = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    if (!getEnvValue("NEXT_PUBLIC_SUPABASE_URL") || !getEnvValue("NEXT_PUBLIC_SUPABASE_ANON_KEY")) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
