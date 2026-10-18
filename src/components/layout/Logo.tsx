import Link from "next/link";
import { HardHat } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${siteConfig.name} — página inicial`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold text-brand-navy">
        <HardHat className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-lg font-bold tracking-tight text-white">
        Obriva<span className="text-brand-gold">360</span>
      </span>
    </Link>
  );
}