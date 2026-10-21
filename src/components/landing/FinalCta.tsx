import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(40rem_16rem_at_50%_-20%,rgba(212,175,55,0.22),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para organizar a sua próxima obra?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Crie a conta, registe a obra e convide a equipa em poucos minutos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/register" size="lg">
                Criar conta
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light" size="lg">
                Falar connosco
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}