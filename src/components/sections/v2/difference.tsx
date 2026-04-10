const rows = [
  {
    traditional: "Ti lascia un documento",
    confuto: "Ti lascia una decisione",
  },
  {
    traditional: "Lavora per te",
    confuto: "Lavora con te",
  },
  {
    traditional: "Parla di strategia",
    confuto: "Fa prototipi e li testa",
  },
  {
    traditional: "Si presenta in sala riunioni",
    confuto: "Preferisce guardarti negli occhi, sul campo",
  },
  {
    traditional: "Ti vende un metodo",
    confuto: "Ti insegna a replicarlo",
  },
];

export function V2DifferenceSection() {
  return (
    <section className="border-t border-v2-border bg-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          La differenza
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-snug text-v2-text md:text-5xl">
          Confuto non è una consulenza.
        </h2>

        <div className="mt-14 overflow-hidden rounded-lg border border-v2-border">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-v2-border bg-v2-bg">
            <div className="px-6 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
                La consulenza tradizionale
              </p>
            </div>
            <div className="border-l border-v2-border px-6 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-accent font-sans">
                Confuto
              </p>
            </div>
          </div>
          {/* Rows */}
          {rows.map((row) => (
            <div
              key={row.traditional}
              className="grid grid-cols-2 border-b border-v2-border last:border-b-0"
            >
              <div className="px-6 py-5">
                <p className="text-base text-v2-text-muted/60 line-through decoration-v2-border font-sans">
                  {row.traditional}
                </p>
              </div>
              <div className="border-l-[3px] border-v2-accent px-6 py-5">
                <p className="text-base font-medium text-v2-text font-sans">
                  {row.confuto}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-v2-bg-accent px-8 py-6">
          <p className="text-center font-serif text-lg leading-relaxed text-v2-text">
            Confuto è un&apos;entità. Non un&apos;agenzia, non un freelance. Un
            modo di pensare che si adatta al tuo contesto e lo migliora
            dall&apos;interno.
          </p>
        </div>
      </div>
    </section>
  );
}
