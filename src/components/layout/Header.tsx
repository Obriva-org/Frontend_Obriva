"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { publicNav } from "@/config/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  // Fecha o menu com Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {publicNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/login" variant="outline-light" size="sm">
            Entrar
          </ButtonLink>
          <ButtonLink href="/register" size="sm">
            Criar conta
          </ButtonLink>
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-brand-navy lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {publicNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-brand-gold"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ButtonLink href="/login" variant="outline-light">
                Entrar
              </ButtonLink>
              <ButtonLink href="/register">Criar conta</ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}