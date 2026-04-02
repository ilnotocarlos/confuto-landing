const rows = [
  {
    traditional: "Ti lascia un report da 80 pagine",
    confuto: "Ti lascia una decisione presa e condivisa",
  },
  {
    traditional: "Lavora per te, nel suo ufficio",
    confuto: "Lavora con te, nel tuo spazio",
  },
  {
    traditional: "Mesi di analisi",
    confuto: "Giorni di azione",
  },
  {
    traditional: "Slide bellissime, mai implementate",
    confuto: "Prototipi testati con clienti veri",
  },
  {
    traditional: "Ti dice cosa fare",
    confuto: "Ti aiuta a decidere cosa fare",
  },
];

export function DifferenceSection() {
  return (
    <section className="min-h-screen flex items-center bg-mint/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            05/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Non è consulenza.</span>
            <br />
            <span className="font-bold">
              È <span className="text-blush">laboratorio</span>.
            </span>
          </h2>
        </div>

        <div className="mt-14 rounded-2xl overflow-hidden bg-white">
          {/* Header */}
          <div className="grid grid-cols-2 px-6 md:px-8 py-4">
            <span className="text-xs font-medium text-charcoal/40 uppercase tracking-widest">
              Consulenza tradizionale
            </span>
            <span className="text-xs font-medium text-forest uppercase tracking-widest">
              Confuto
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 px-6 md:px-8 py-5 border-t border-sand/30 hover:bg-mint/10 transition-colors duration-200"
            >
              <span className="text-charcoal/40 line-through pr-4">
                {row.traditional}
              </span>
              <span className="text-forest font-medium">{row.confuto}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
