import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const shifts = [
  { from: "Documentos espalhados", to: "Tudo num só lugar, com versões" },
  { from: "Registos soltos no WhatsApp", to: "Diário de obra organizado por data" },
  { from: "Problemas que se esquecem", to: "Não conformidades acompanhadas até ao fim" },
];

export function ProblemStrip() {
  return (
    <section aria-label="O que muda" className="border-b border-border bg-surface">
      <Container className="grid gap-6 py-10 md:grid-cols-3">
        {shifts.map((s) => (
          <div key={s.from} className="flex flex-col gap-1.5">
            <p className="text-sm text-text-secondary line-through decoration-text-secondary/40">
              {s.from}
            </p>
            <p className="flex items-start gap-2 text-base font-semibold text-brand-navy">
              <ArrowRight
                className="mt-1 h-4 w-4 shrink-0 text-brand-gold-hover"
                aria-hidden
              />
              {s.to}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}