import { cn } from "@/lib/utils/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  
  tone?: "light" | "dark";
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wider",
            dark ? "text-brand-gold" : "text-brand-gold-hover",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-text-secondary",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}