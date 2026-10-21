import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roles = [
  {
    name: "Diretor de Obra",
    summary: "lorem a lore lorem lorem",
    items: [
      "lorem a lore lorem lorem lo lore lorem lorn ",
      "lorem a lore lorem lorem lo o lore lorem lor lorem",
      "lorem a lore lorem lorem lo lore lore ",
    ],
  },
  {
    name: "Pedeiro",
    summary: "lorem a lore lorem lorem",
    items: [
      "lorem a lore lorem lorem lo lore lorem lorn ",
      "lorem a lore lorem lorem lo o lore lorem lor lorem",
      "lorem a lore lorem lorem lo lore lore ",
    ],
  },
  {
    name: "Arquiteto / Projetista",
    summary: "lorem a lore lorem lorem",
    items: [
      "lorem a lore lorem lorem lo lore lorem lorn ",
      "lorem a lore lorem lorem lo o lore lorem lor lorem",
      "lorem a lore lorem lorem lo lore lore ",
    ],
  },
  {
    name: "Dono da Obra",
    summary: "lorem a lore lorem lorem",
    items: [
      "lorem a lore lorem lorem lo lore lorem lorn ",
      "lorem a lore lorem lorem lo o lore lorem lor lorem",
      "lorem a lore lorem lorem lo lore lore ",
    ],
  },
];

export function Roles() {
  return (
    <section id="para-quem" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Para quem"
          title="Cada interveniente vê e faz o que lhe compete"
          description="O papel é definido em cada obra. A mesma pessoa pode ter papéis diferentes em obras diferentes."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <article
              key={role.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{role.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{role.summary}</p>
              <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
                {role.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-hover"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}