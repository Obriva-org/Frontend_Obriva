export type NavItem = { label: string; href: string };

export const publicNav: NavItem[] = [
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Para quem", href: "/#para-quem" },
  { label: "Perguntas", href: "/#faq" },
  { label: "Contacto", href: "/contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "/#funcionalidades" },
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "Em breve", href: "/#roadmap" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/about" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  {
    title: "Conta",
    links: [
      { label: "Entrar", href: "/login" },
      { label: "Criar conta", href: "/register" },
      { label: "Recuperar palavra-passe", href: "/forgot-password" },
    ],
  },
];