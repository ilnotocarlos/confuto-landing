const rows = [
  {
    classic: "Ti lascia un report da 80 pagine",
    confuto: "Ti lascia una decisione presa e condivisa",
  },
  {
    classic: "Lavora per te, nel suo ufficio",
    confuto: "Lavora con te, nel tuo spazio",
  },
  {
    classic: "Mesi di analisi",
    confuto: "Giorni di azione",
  },
  {
    classic: "Slide bellissime, mai implementate",
    confuto: "Prototipi testati con clienti",
  },
  {
    classic: "Ti dice cosa fare",
    confuto: "Ti aiuta a decidere cosa fare",
  },
];

export function DifferenceSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Confuto non è classica consulenza.
            <br />
            È un laboratorio.
          </h2>

          <div className="mt-10 overflow-hidden rounded-lg border">
            {/* Header */}
            <div className="grid grid-cols-2 border-b bg-muted/50">
              <div className="px-5 py-3">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Consulenza tradizionale
                </p>
              </div>
              <div className="border-l px-5 py-3">
                <p className="text-xs font-medium uppercase tracking-widest">
                  Confuto
                </p>
              </div>
            </div>
            {/* Rows */}
            {rows.map((row) => (
              <div
                key={row.classic}
                className="grid grid-cols-2 border-b last:border-b-0"
              >
                <div className="px-5 py-4">
                  <p className="text-sm text-muted-foreground line-through">
                    {row.classic}
                  </p>
                </div>
                <div className="border-l px-5 py-4">
                  <p className="text-sm font-medium">{row.confuto}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-2xl font-semibold italic tracking-tight md:text-3xl">
            Tutti dicono di pensare fuori dagli schemi, ma nessuno butta via lo
            schema.
          </p>
        </div>
      </div>
    </section>
  );
}
