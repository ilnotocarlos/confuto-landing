import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confuto — Valida idee, prodotti e processi in giorni, non in mesi",
  description:
    "Confuto lavora con PMI e organizzazioni per validare prodotti, servizi e processi. Niente slide. Niente teoria. Solo decisioni chiare e condivise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
