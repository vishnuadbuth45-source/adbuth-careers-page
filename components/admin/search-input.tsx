"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function SearchInput({
  placeholder = "Search...",
}: {
  placeholder?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("search") ?? "");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    }, 300); // debounce

    return () => clearTimeout(timer);
  }, [value, pathname, router, searchParams]);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border px-3 py-2 pr-10"
      />
      {isPending && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
          Searching…
        </span>
      )}
    </div>
  );
}