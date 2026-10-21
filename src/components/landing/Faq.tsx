import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Como posso começar a usar?",
    a: "Crie uma conta e registe a sua primeira obra. Está a abrir-se a primeira versão a obras-piloto; se quiser participar, fale connosco através da página de contacto.",
  },
  {
    q: "Funciona no telemóvel?",
    a: "Sim. A aplicação é web e adapta-se a telemóveis, tablets e computadores, para registar o diário e fotografias diretamente da obra.",
  },
  {
    q: "Preciso de internet para usar?",
    a: "Sim. Nesta primeira versão é necessária ligação à internet. O modo offline completo não faz parte do âmbito inicial.",
  },
  {
    q: "Os meus ficheiros ficam privados?",
    a: "Sim. Só os participantes da obra, com as permissões do seu papel, podem consultar e descarregar os documentos. Não existem ligações públicas permanentes.",
  },
  {
    q: "Posso ter papéis diferentes em obras diferentes?",
    a: "Sim. O papel é atribuído em cada obra: pode ser Diretor de Obra numa e Fiscal noutra, com a mesma conta.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-surface py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Perguntas frequentes" title="Dúvidas comuns" />

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-background">
          {faqs.map((item) => (
            <details key={item.q} className="group px-5 py-4 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-navy [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-brand-gold-hover transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-text-secondary">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}