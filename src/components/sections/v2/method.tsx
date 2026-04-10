const steps = [
  {
    number: "01",
    title: "Ascoltiamo",
    body: "Parliamo del tuo caso. Capiamo il contesto, le persone coinvolte, il problema reale (che spesso non è quello che pensi).",
  },
  {
    number: "02",
    title: "Costruiamo insieme",
    body: "Workshop, prototipi, simulazioni. Lavoriamo fianco a fianco con il tuo team. Le idee migliori sono già dentro la tua organizzazione.",
  },
  {
    number: "03",
    title: "Testiamo con i fatti",
    body: "Ogni ipotesi viene validata con clienti reali. Non opinioni. Dati. Feedback. Evidenze su cui decidere.",
  },
];

export function V2MethodSection() {
  return (
    <section className="border-t border-v2-border bg-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          Il metodo
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl font-bold leading-snug text-v2-text md:text-5xl">
              Tre giorni per fare chiarezza.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-v2-text-muted font-sans">
              La maggior parte delle consulenze ti lascia con un documento e
              tanti saluti. Confuto fa il contrario: entra nel tuo contesto,
              lavora con le tue persone, e in pochi giorni produce qualcosa di
              concreto che puoi usare subito.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-0 divide-y divide-v2-border">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 py-12 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-2">
                <span className="font-serif text-7xl font-bold text-v2-border md:text-8xl">
                  {step.number}
                </span>
              </div>
              <div className="md:col-span-4 md:col-start-4 flex items-center">
                <h3 className="font-serif text-2xl font-bold text-v2-text">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-5 md:col-start-8 flex items-center">
                <p className="text-base leading-relaxed text-v2-text-muted font-sans">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-l-[3px] border-v2-accent bg-v2-bg px-8 py-6">
          <p className="font-serif text-lg italic leading-relaxed text-v2-text">
            Il risultato non è un report. È una decisione presa, con le prove
            per sostenerla.
          </p>
        </div>
      </div>
    </section>
  );
}
