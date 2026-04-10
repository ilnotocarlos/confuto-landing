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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Cosa fa Confuto
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg text-muted-foreground">
              Confuto lavora assieme a persone e team per strutturare le
              decisioni su prodotti, processi e servizi in modo rapido,
              collaborativo e concreto.
            </p>
            <p className="mt-6 text-xl font-semibold italic">
              Niente teoria. Solo soluzioni chiare e condivise.
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">In pochi giorni ti aiuta a:</p>
            <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
              {actions.map((action) => (
                <li key={action} className="flex gap-2">
                  <span className="text-foreground">—</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xl font-semibold italic">
          La saggezza non basta, servono i fatti.
        </p>
      </div>
    </section>
  );
}
