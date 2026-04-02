"use client";

import { useRef } from "react";

const cases = [
  {
    sector: "Food",
    title: "Sviluppo nuova proposta di servizio",
    type: "Idea Sprint",
    description:
      "Un'azienda nel settore food stava valutando diverse idee per ampliare la propria offerta, senza avere chiaro quale direzione avesse più senso.",
    actions: [
      "Raccolto e strutturato le idee esistenti",
      "Identificato le opportunità più promettenti",
      "Creato una simulazione del servizio",
      "Testato con clienti target",
    ],
    results: [
      "Selezione di 1 direzione prioritaria su 3",
      "Validazione dell'interesse (feedback positivi ~70-80%)",
      "Riduzione del rischio su nuove iniziative",
    ],
    quote:
      "Confuto ci ha aiutato a scegliere su cosa investire davvero in poco tempo.",
    author: "Marco M, Founder, startup food",
  },
  {
    sector: "Beauty",
    title: "Nuovo concept di offerta",
    type: "Idea Sprint",
    description:
      "Un'azienda beauty voleva sviluppare una nuova linea di servizi, ma senza evidenze chiare sui bisogni dei clienti.",
    actions: [
      "Chiarito il concept iniziale",
      "Identificato i bisogni principali dei clienti",
      "Testato le ipotesi con utenti reali",
    ],
    results: [
      "Ridefinizione del concept su bisogni concreti",
      "Eliminazione di elementi non rilevanti (~25-30%)",
      "Maggiore chiarezza interna sulle priorità",
    ],
    quote:
      "Abbiamo evitato di sviluppare qualcosa che non avrebbe funzionato.",
    author: "Carlotta C, Marketing Manager, azienda beauty",
  },
  {
    sector: "Travel",
    title: "Validazione nuova esperienza",
    type: "Idea Sprint",
    description:
      "Un'azienda travel stava progettando una nuova esperienza per i clienti, senza aver raccolto idee da tutta l'azienda.",
    actions: [
      "Strutturato il concept dell'esperienza",
      "Prototipato il percorso utente",
      "Raccolto feedback da clienti",
      "Raccolto le idee tra team",
    ],
    results: [
      "Miglioramento della proposta prima dello sviluppo",
      "Diminuzione dei problemi sulla CX (stimato ~20-35%)",
      "Decisione più rapida sulle priorità",
    ],
    quote:
      "Abbiamo implementato soluzioni innovative partite dall'interno. Senza l'approccio di Confuto non avremmo saputo lavorarci così efficacemente.",
    author: "Maurizio S, Responsabile Innovazione, azienda travel",
  },
  {
    sector: "Formazione",
    title: "Employee Experience frammentata",
    type: "Fix It",
    description:
      "Un'azienda con più team e sedi aveva difficoltà a garantire un'esperienza coerente ai dipendenti lungo tutto il loro percorso.",
    actions: [
      "Mappato l'employee experience end-to-end",
      "Identificato i principali punti di frizione",
      "Definito azioni concrete per migliorare l'esperienza",
    ],
    results: [
      "Riduzione delle principali frizioni interne (~25-30%)",
      "Più chiarezza nei processi per i dipendenti",
      "Aumento engagement percepito dall'onboarding (stimato +15-20%)",
    ],
    quote:
      "Finalmente riusciamo a spiegare bene tutto il processo che abbiamo e cosa fare, quando.",
    author: "HR Manager, azienda medio-grande",
  },
  {
    sector: "Energy",
    title: "Esperienza incoerente nei punti vendita",
    type: "Fix It",
    description:
      "Un'azienda con rete di punti vendita aveva un'esperienza cliente non coerente tra canali e location.",
    actions: [
      "Mappato l'esperienza cliente (CX)",
      "Identificato i punti critici principali",
      "Semplificato e riallineato il percorso",
    ],
    results: [
      "Maggiore coerenza tra touchpoint",
      "Miglioramento dell'esperienza percepita",
      "Aumento interazioni positive in negozio (stimato +15-20%)",
    ],
    quote:
      "Abbiamo finalmente una visione chiara dell'esperienza cliente e una visione coerente.",
    author: "Direttore Operativo, azienda energy",
  },
  {
    sector: "Formazione",
    title: "Training sales poco efficace",
    type: "Fix It",
    description:
      "Un'azienda investiva in formazione per il team sales, ma senza un impatto reale sulle performance commerciali.",
    actions: [
      "Collegato la formazione ai problemi concreti di vendita",
      "Riprogettato il percorso in modo più pratico e applicabile",
      "Introdotto momenti di lavoro su casi reali",
    ],
    results: [
      "Aumento dell'efficacia nelle conversazioni commerciali",
      "Miglioramento delle conversioni (stimato +10-20%)",
      "Maggiore coinvolgimento del team",
    ],
    quote:
      "Per la prima volta il team sales si sente davvero ascoltato e integrato nelle decisioni.",
    author: "Responsabile Commerciale, azienda universitaria",
  },
];

export function CaseStudiesV2() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="casi-studio"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            04/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Alcuni esempi di lavoro,</span>
            <br />
            <span className="font-bold">con risultati.</span>
          </h2>

          <p className="mt-4 font-heading text-charcoal/50 italic">
            Ogni idea è geniale, finché non serve davvero a qualcosa.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="mt-14 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible"
        >
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-sand/30 p-6 md:p-8 min-w-[85vw] md:min-w-0 snap-center flex flex-col transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-sand/50 shrink-0" />
                <span className="text-sm text-charcoal/70">
                  {c.sector} &middot; {c.type}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-forest mb-3">
                {c.title}
              </h3>

              <p className="text-sm text-charcoal/70 mb-4">{c.description}</p>

              <p className="text-xs uppercase tracking-widest text-forest mb-2">
                Risultato
              </p>
              <div className="space-y-1 mb-6">
                {c.results.map((r, j) => (
                  <p key={j} className="text-sm font-medium text-forest">
                    {r}
                  </p>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-sand/30">
                <p className="italic text-sm text-charcoal/70">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <p className="mt-2 text-xs text-charcoal/50">— {c.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
