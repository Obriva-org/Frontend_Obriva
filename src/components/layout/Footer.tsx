import Link from "next/link";
import { cacheLife } from "next/cache";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-brand-navy text-white/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Gestão de obras simples e rastreável para equipas em Angola.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-gold" aria-hidden />
                {siteConfig.contact.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-gold" aria-hidden />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-gold" aria-hidden />
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-brand-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}