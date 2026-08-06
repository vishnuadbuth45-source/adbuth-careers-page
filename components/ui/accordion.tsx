"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("w-full", className)} {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("border-b border-border", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-colors hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("pb-4 text-sm text-muted-foreground", className)} {...props}>
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
