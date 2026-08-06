import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
}

const sizeStyles = {
  default: "max-w-[var(--container-max)]",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
  full: "max-w-full",
};

function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--container-padding)]",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
