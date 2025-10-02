import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const RetroButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center uppercase tracking-wide font-semibold rounded-full transition focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]";
    const sizes = "text-base sm:text-lg px-8 sm:px-10 py-3";
    const primary =
      "text-white border-2 border-[#6b3e12] shadow-[0_6px_0_#6b3e12,0_12px_20px_rgba(0,0,0,0.2)] bg-gradient-to-b from-amber-300 to-orange-500 hover:brightness-110";
    const secondary =
      "text-[hsl(var(--foreground))] border-2 border-[#6b3e12] bg-[hsl(var(--background))] hover:bg-[hsl(var(--card))] shadow-[0_3px_0_#6b3e12]";

    return (
      <button
        ref={ref}
        className={cn(base, sizes, variant === "primary" ? primary : secondary, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RetroButton.displayName = "RetroButton";
