import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export type BadgeTone = "success" | "warning" | "danger" | "info" | "neutral";

const tones: Record<BadgeTone, string> = {
  success: "bg-success-background text-emerald-700",
  warning: "bg-warning-background text-amber-700",
  danger: "bg-danger-background text-red-700",
  info: "bg-info-background text-blue-700",
  neutral: "bg-background text-text-secondary",
};

export function Badge({
  tone = "neutral",
  children,
  className,
}: {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}