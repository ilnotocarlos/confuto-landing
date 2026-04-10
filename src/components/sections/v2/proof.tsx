const cases = [
  {
    tag: "Food",
    title: "Un'azienda food con troppe idee e nessuna certezza.",
    story:
      "Volevano ampliare l'offerta, ma ogni riunione produceva nuove direzioni senza mai sceglierne una. In 4 giorni abbiamo raccolto le idee, identificato la più promettente, costruito una simulazione e testata con i clienti target.",
    result:
      "1 direzione scelta su 3, con feedback positivi dal 70-80% dei clienti.",
    quote:
      "Confuto ci ha aiutato a scegliere su cosa investire davvero, in poco tempo.",
    author: "Marco M., Founder",
  },
  {
    tag: "Beauty",
    title:
      "Una linea di servizi beauty costruita sui dati, non sulle intuizioni.",
    story:
      "Avevano un concept accattivante ma nessuna evidenza che i clienti lo volessero. Abbiamo chiarito il concept, mappato i bisogni reali e testato le ipotesi. Il 25-30% degli elementi iniziali si è rivelato irrilevante.",
    result:
      "Concept ridefinito su bisogni concreti. Eliminati gli sprechi prima di sviluppare.",
    quote:
      "Abbiamo evitato di sviluppare qualcosa che non avrebbe funzionato.",
    author: "Carlotta C., Marketing Manager",
  },
  {
    tag: "Energy",
    title: "Punti vendita incoerenti che parlavano lingue diverse.",
    story:
      "L'esperienza cliente cambiava da un negozio all'altro. Abbiamo mappato il percorso, trovato i punti critici e riallineato tutto. Le interazioni positive in negozio sono cresciute del 15-20%.",
    result:
      "Un'esperienza cliente finalmente coerente su tutti i touchpoint.",
    quote:
      "Abbiamo finalmente una visione chiara e coerente dell'esperienza cliente.",
    author: "Direttore Operativo",
  },
  {
    tag: "Formazione",
    title:
      "Un'employee experience frammentata che nessuno sapeva spiegare.",
    story:
      "Più team, più sedi, processi diversi. I dipendenti si perdevano tra onboarding, welfare e crescita. Abbiamo mappato tutto end-to-end, identificato le frizioni e definito azioni concrete.",
    result:
      "-25/30% di frizioni interne. Engagement percepito dall'onboarding +15-20%.",
    quote:
      "Finalmente riusciamo a spiegare tutto il nostro processo: cosa fare, quando.",
    author: "HR Manager",
  },
];

export function V2ProofSection() {
  return (
    <section className="border-t border-v2-border bg-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          Prove
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-snug text-v2-text md:text-5xl">
          Non parole. Fatti.
        </h2>

        <div className="mt-16 space-y-0 divide-y divide-v2-border">
          {cases.map((c, i) => (
            <article
              key={c.tag}
              className={`grid gap-8 py-14 md:grid-cols-12 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className="md:col-span-7" style={{ direction: "ltr" }}>
                <span className="inline-block rounded-sm bg-v2-bg-accent px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-v2-text font-sans">
                  {c.tag}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-snug text-v2-text">
                  {c.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-v2-text-muted font-sans">
                  {c.story}
                </p>
                <p className="mt-4 text-sm font-medium text-v2-text font-sans">
                  Risultato chiave:{" "}
                  <span className="text-v2-text-muted font-normal">
                    {c.result}
                  </span>
                </p>
              </div>
              <div
                className="flex items-center md:col-span-4 md:col-start-9"
                style={{ direction: "ltr" }}
              >
                <div className="border-l-[3px] border-v2-accent pl-6">
                  <p className="font-serif text-lg italic leading-relaxed text-v2-text">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  {c.author && (
                    <p className="mt-3 text-xs font-medium text-v2-text-muted font-sans">
                      {c.author}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
