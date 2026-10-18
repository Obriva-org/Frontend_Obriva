import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant =
  | "primary" // dourado, ação principal
  | "secondary" // azul-marinho
  | "outline" // contorno, fundos claros
  | "outline-light" // contorno, fundos escuros
  | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-gold text-brand-navy hover:bg-brand-gold-hover",
  secondary: "bg-brand-navy text-white hover:bg-brand-navy-light",
  outline:
    "border border-border bg-surface text-text-primary hover:border-brand-gold hover:text-brand-gold-hover",
  "outline-light":
    "border border-white/25 text-white hover:border-brand-gold hover:text-brand-gold",
  ghost: "text-text-primary hover:bg-black/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: StyleProps = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = StyleProps & {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={buttonStyles({ variant, size, className })}
      {...rest}
    >
      {children}
    </Link>
  );
}