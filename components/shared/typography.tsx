import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "lead"
  | "muted";

const variantStyles: Record<TypographyVariant, string> = {
  display: "text-display font-semibold tracking-[-0.03em]",
  h1: "text-h1 font-semibold tracking-[-0.03em]",
  h2: "text-h2 font-semibold tracking-[-0.02em]",
  h3: "text-h3 font-semibold tracking-[-0.01em]",
  h4: "text-h4 font-medium",
  "body-lg": "text-body-lg",
  body: "text-body",
  "body-sm": "text-body-sm",
  caption: "text-caption text-muted-foreground",
  lead: "text-body-lg text-muted-foreground",
  muted: "text-body-sm text-muted-foreground",
};

const defaultElements: Record<TypographyVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-lg": "p",
  body: "p",
  "body-sm": "p",
  caption: "span",
  lead: "p",
  muted: "p",
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
}

function Typography({
  variant = "body",
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Typography, type TypographyVariant };
