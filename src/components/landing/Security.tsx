import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FileLock2, History, Layers, LockKeyhole, type LucideIcon } from "lucide-react";

const points: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: LockKeyhole,
    title: "Acesso só a quem pertence à obra",
    text: "Cada utilizador só consulta as obras em que participa, com as permissões do seu papel.",
  },
  {
    icon: FileLock2,
    title: "Ficheiros protegidos",
    text: "Os downloads respeitam as permissões da obra. Não há ligações públicas permanentes.",
  },
  {
    icon: Layers,
    title: "Versões nunca perdidas",
    text: "Uma nova versão de um documento não apaga a anterior. Pode consultar todas.",
  },
  {
    icon: History,
    title: "Quem fez o quê, e quando",
    text: "Ações relevantes ficam registadas com utilizador, data e hora para consulta futura.",
  },
];

export function Security() {
  return (
    <section className="bg-brand-navy py-20 sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Segurança e rastreabilidade"
          title="Informação protegida, histórico preservado"
          description="Na obra, o que foi decidido e por quem importa. O Obriva guarda isso por si."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-navy-light/60 p-6"
            >
              <Icon className="h-6 w-6 text-brand-gold" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}