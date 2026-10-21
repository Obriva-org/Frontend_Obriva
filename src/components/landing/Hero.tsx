import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-136 items-center overflow-hidden bg-brand-navy lg:min-h-162">
      {/* Foto da equipa */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[78%]">
        <Image
          src="/images/gumbal.jpg"
          alt="Equipa de obra reunida no estaleiro"
          fill
          priority
          sizes="(min-width: 1024px) 78vw, 100vw"
          className="object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-brand-navy/80 lg:hidden" />
        
        <div className="absolute inset-0 hidden bg-linear-to-r from-brand-navy from-15% via-brand-navy/70 via-45% to-transparent lg:block" />
        
        <div className="absolute inset-0 hidden bg-linear-to-b from-brand-navy/30 via-transparent to-brand-navy/30 lg:block" />
      </div>

      <Container className="relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="max-w-xl">
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Toda a informação da sua obra{" "}
            <span className="text-brand-gold">num só lugar.</span>
          </h1>

          <p className="mt-5 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            Documentos, diário de obra, tarefas organizados para toda a equipa
            — do Diretor de Obra ao Dono da Obra.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/register" size="lg">
              Começar agora
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/#funcionalidades" variant="outline-light" size="lg">
              Ver funcionalidades
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <li>lorem lorem lorem lorem lorem</li>
            <li>lorem lorem lorem lorem lorem</li>
            <li>lorem lorem lorem lorem</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}