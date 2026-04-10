const actions = [
  "capire cosa ha senso",
  "mettere ordine nel caos",
  "testare idee con clienti reali",
  "migliorare ciò che già vendi",
  "mettere a fuoco il problema",
  "prendere decisioni chiare",
];

export function WhatWeDoSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Cosa fa Confuto
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Confuto aiuta le idee che sono già dentro Organizzazioni, Enti e PMI
            ad emergere, strutturarsi e diventare azione.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Lavora assieme a persone e team per prendere decisioni su prodotti,
            processi e servizi in modo rapido, collaborativo e concreto.
          </p>
          <p className="mt-10 text-lg font-medium">
            In pochi giorni ti aiuta a:
          </p>
          <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
            {actions.map((action) => (
              <li key={action} className="flex gap-2">
                <span className="text-foreground">—</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xl font-semibold italic">
            Niente teoria. Solo soluzioni chiare e condivise.
            <br />
            La saggezza non basta, servono i fatti.
          </p>
        </div>
      </div>
    </section>
  );
}
