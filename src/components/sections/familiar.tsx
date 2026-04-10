const painPoints = [
  "i clienti non capiscono bene cosa offri",
  "non sei sicuro che i clienti lo compreranno davvero",
  "hai idee confuse e non sai quali abbiano più senso",
  "il prodotto non performa come dovrebbe",
  "internamente lavorate nel caos totale",
  "stai decidendo senza dati reali",
  "il processo ha troppi colli di bottiglia",
  "vuoi fare meglio ma non sai da dove partire",
  "non sai più cosa inventarti",
];

export function FamiliarSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ti suona familiare?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Stai lavorando su un prodotto, servizio, processo, ma:
          </p>
          <ul className="mt-4 space-y-2.5">
            {painPoints.map((point) => (
              <li key={point} className="flex gap-3 text-lg">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-foreground/20 text-xs">
                  &#x2713;
                </span>
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-medium">
            Il rischio è concreto: bruciare budget, tempo ed energie su qualcosa
            che nessuno comprerà. E nel frattempo, perdere opportunità di
            crescita.
          </p>
        </div>
      </div>
    </section>
  );
}
