import { Button } from "@/components/ui/button";

const ideaSprint = {
  title: "Idea Sprint",
  subtitle:
    "Per chi ha un'idea e vuole sapere se funziona prima di investire.",
  when: "Hai un'idea nuova. O ne hai troppe e non sai quale scegliere. Vuoi un prototipo, non una presentazione.",
  what: "In 3-5 giorni, Confuto ti aiuta a selezionare l'idea migliore, costruirne un prototipo e testarla con clienti veri. Esci con una direzione chiara e le evidenze per sostenerla.",
  outputs: [
    "L'idea migliore, chiarita e focalizzata",
    "Un prototipo o simulazione funzionante",
    "Test con clienti reali e feedback concreti",
    "Un metodo che puoi riapplicare",
  ],
  price: "Da €4.500",
  cta: "Parlami della tua idea",
};

const fixIt = {
  title: "Fix It",
  subtitle: "Per chi ha qualcosa che funziona, ma non abbastanza.",
  when: "Il prodotto non converte. I clienti sono confusi. L'esperienza ha delle crepe. Sai che c'è un problema ma non riesci a metterlo a fuoco.",
  what: "Confuto mappa l'esperienza del cliente (o del dipendente), identifica dove si rompe, e ridisegna le parti che contano. Con te, non al posto tuo.",
  outputs: [
    "Analisi dell'esperienza cliente end-to-end",
    "Frizioni identificate e risolte",
    "Azioni concrete da implementare subito",
    "Prototipo e test con utenti reali",
  ],
  price: "Da €5.000",
  cta: "Raccontami cosa non funziona",
};

function PathCard({
  data,
}: {
  data: typeof ideaSprint;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-v2-border bg-v2-bg-alt p-8 transition-colors hover:border-v2-accent">
      <h3 className="font-serif text-3xl font-bold text-v2-text">
        {data.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-v2-text-muted font-sans">
        {data.subtitle}
      </p>

      <div className="mt-8">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          Quando serve
        </p>
        <p className="mt-2 text-sm leading-relaxed text-v2-text font-sans">
          {data.when}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          Cosa succede
        </p>
        <p className="mt-2 text-sm leading-relaxed text-v2-text font-sans">
          {data.what}
        </p>
      </div>

      <div className="mt-6 flex-1">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          Cosa ottieni
        </p>
        <ul className="mt-2 space-y-1.5">
          {data.outputs.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-v2-text font-sans"
            >
              <span className="text-v2-accent">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 border-t border-v2-border pt-6">
        <p className="font-serif text-xl font-bold text-v2-text">
          {data.price}
        </p>
        <p className="mt-1 text-xs text-v2-text-muted font-sans">
          Assessment iniziale gratuito · -10% sul primo progetto insieme
        </p>
        <Button className="mt-6 cursor-pointer rounded-sm bg-v2-deep px-6 text-sm font-semibold text-white transition-colors hover:bg-v2-accent font-sans">
          {data.cta}
        </Button>
      </div>
    </div>
  );
}

export function V2PathsSection() {
  return (
    <section className="border-t border-v2-border bg-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          I percorsi
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-snug text-v2-text md:text-5xl">
          Due strade, un obiettivo:<br />
          decidere meglio.
        </h2>
        <p className="mt-4 max-w-lg text-base text-v2-text-muted font-sans">
          Ogni progetto parte da un assessment gratuito. Poi scegliamo insieme il
          percorso giusto.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <PathCard data={ideaSprint} />
          <PathCard data={fixIt} />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-v2-text-muted font-sans">
            Non rientri in nessuno dei due? Nessun problema. Parliamone e
            troviamo la strada giusta.
          </p>
          <Button
            variant="outline"
            className="cursor-pointer rounded-sm border-v2-deep px-6 text-sm font-semibold text-v2-deep transition-colors hover:bg-v2-bg-alt font-sans"
          >
            Prenota una call
          </Button>
        </div>
      </div>
    </section>
  );
}
