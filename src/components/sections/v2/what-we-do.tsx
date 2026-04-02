export function WhatWeDoV2() {
  const capabilities = [
    "Capire cosa ha senso",
    "Mettere ordine nel caos",
    "Testare idee con clienti reali",
    "Migliorare ciò che già vendi",
    "Mettere a fuoco il problema",
    "Prendere decisioni chiare",
  ];

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
          02/
        </span>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
              <span className="font-light">Cosa fa</span>
              <br />
              <span className="font-bold">Confuto</span>
            </h2>

            <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
              Confuto aiuta le idee che sono già dentro{" "}
              <span className="font-medium text-forest">
                Organizzazioni, Enti e PMI
              </span>{" "}
              ad emergere, strutturarsi e diventare azione.
            </p>

            <p className="mt-4 text-lg text-charcoal/80 leading-relaxed">
              Lavora assieme a persone e team per prendere decisioni su
              prodotti, processi e servizi in modo rapido, collaborativo e
              concreto.
            </p>

            <p className="mt-8 font-heading text-charcoal/50 italic">
              La saggezza non basta, servono i fatti.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-charcoal/40 uppercase tracking-widest mb-6">
              In pochi giorni ti aiuta a
            </p>
            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="bg-mint/20 rounded-2xl px-6 py-4 text-forest font-medium transition-transform duration-200 hover:scale-[1.02]"
                >
                  {cap}
                </div>
              ))}
            </div>
            <p className="mt-6 text-charcoal/60 leading-relaxed">
              Niente teoria. Solo soluzioni chiare e condivise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
