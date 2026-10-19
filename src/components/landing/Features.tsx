import {
  FolderOpen,
  History,
  ListChecks,
  NotebookPen,
  ShieldAlert,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: FolderOpen,
    title: "Gestão documental",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    icon: NotebookPen,
    title: "Equipa e papéis",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    icon: ListChecks,
    title: "Tarefas e prazos",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    icon: ShieldAlert,
    title: "lorem a lore",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    icon: Users,
    title: "lorem e lore",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    icon: History,
    title: "lorem e lore",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Funcionalidades"
          title="O essencial para acompanhar a obra no dia a dia"
          description="Seis módulos pensados para a rotina real do canteiro, sem complicação."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-brand-gold/60 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-brand-gold">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}