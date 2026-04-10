"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  tag: string;
  title: string;
  description: string;
  actions: string[];
  results: string[];
  quote: string;
  author: string;
}

const ideaSprintCases: CaseStudy[] = [
  {
    tag: "Food",
    title: "Sviluppo nuova proposta di servizio",
    description:
      "Un'azienda nel settore food stava valutando diverse idee per ampliare la propria offerta, senza avere chiaro quale direzione avesse più senso.",
    actions: [
      "raccolto e strutturato le idee esistenti",
      "identificato le opportunità più promettenti",
      "creato una simulazione del servizio",
      "testato con clienti target",
    ],
    results: [
      "selezione di 1 direzione prioritaria su 3",
      "validazione dell'interesse (feedback positivi ~70-80%)",
      "riduzione del rischio su nuove iniziative",
    ],
    quote:
      "Confuto ci ha aiutato a scegliere su cosa investire davvero in poco tempo.",
    author: "Marco M, Founder, startup food",
  },
  {
    tag: "Beauty",
    title: "Nuovo concept di offerta",
    description:
      "Un'azienda beauty voleva sviluppare una nuova linea di servizi, ma senza evidenze chiare sui bisogni dei clienti.",
    actions: [
      "chiarito il concept iniziale",
      "identificato i bisogni principali dei clienti",
      "testato le ipotesi con utenti reali",
    ],
    results: [
      "ridefinizione del concept su bisogni concreti",
      "eliminazione di elementi non rilevanti (~25-30%)",
      "maggiore chiarezza interna sulle priorità",
    ],
    quote:
      "Abbiamo evitato di sviluppare qualcosa che non avrebbe funzionato.",
    author: "Carlotta C, Marketing Manager, azienda beauty",
  },
  {
    tag: "Travel",
    title: "Validazione nuova esperienza",
    description:
      "Un'azienda travel stava progettando una nuova esperienza per i clienti, senza aver raccolto idee da tutta l'azienda.",
    actions: [
      "strutturato il concept dell'esperienza",
      "prototipato il percorso utente",
      "raccolto feedback da clienti",
      "raccolto le idee tra team",
    ],
    results: [
      "miglioramento della proposta prima dello sviluppo",
      "diminuzione dei problemi sulla customer experience (stimato ~20-35%)",
      "decisione più rapida sulle priorità",
    ],
    quote:
      "Abbiamo implementato soluzioni innovative partite dall'interno, che risolvono tanti problemi.",
    author: "",
  },
];

const fixItCases: CaseStudy[] = [
  {
    tag: "Formazione",
    title: "Employee Experience frammentata",
    description:
      "Un'azienda con più team e sedi aveva difficoltà a garantire un'esperienza coerente ai dipendenti lungo tutto il loro percorso (onboarding, welfare, crescita).",
    actions: [
      "mappato l'employee experience end-to-end",
      "identificato i principali punti di frizione",
      "definito azioni concrete per migliorare l'esperienza",
    ],
    results: [
      "riduzione delle principali frizioni interne (~25-30%)",
      "più chiarezza nei processi per i dipendenti",
      "aumento del livello di engagement percepito già dall'onboarding (stimato +15-20%)",
    ],
    quote:
      "Finalmente riusciamo a spiegare bene tutto il processo che abbiamo e cosa fare, quando.",
    author: "HR Manager, azienda medio-grande",
  },
  {
    tag: "Energy",
    title: "Esperienza incoerente nei punti vendita",
    description:
      "Un'azienda con rete di punti vendita aveva un'esperienza cliente non coerente tra canali e location.",
    actions: [
      "mappato l'esperienza cliente (CX)",
      "identificato i punti critici principali",
      "semplificato e riallineato il percorso",
    ],
    results: [
      "maggiore coerenza tra touchpoint",
      "miglioramento dell'esperienza percepita",
      "aumento delle interazioni positive in negozio (stimato +15-20%)",
    ],
    quote:
      "Abbiamo finalmente una visione chiara dell'esperienza cliente e una visione coerente.",
    author: "Direttore Operativo, azienda energy",
  },
  {
    tag: "Formazione",
    title: "Training sales poco efficace",
    description:
      "Un'azienda investiva in formazione per il team sales, ma senza un impatto reale sulle performance commerciali. Il team continuava ad avere difficoltà nelle vendite.",
    actions: [
      "collegato la formazione ai problemi concreti di vendita",
      "riprogettato il percorso in modo più pratico e applicabile",
      "introdotto momenti di lavoro su casi reali",
    ],
    results: [
      "aumento dell'efficacia nelle conversazioni commerciali",
      "miglioramento delle conversioni (stimato +10-20%)",
      "maggiore coinvolgimento del team",
    ],
    quote:
      "Per la prima volta il team sales si sente davvero ascoltato e integrato nelle decisioni.",
    author: "",
  },
];

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Card size="sm">
      <CardHeader>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {study.tag}
        </p>
        <CardTitle className="text-sm font-bold">{study.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs text-muted-foreground">{study.description}</p>
        <div>
          <p className="text-xs font-medium">Confuto ha:</p>
          <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground">
            {study.actions.map((a) => (
              <li key={a} className="flex gap-1.5">
                <span className="text-foreground">—</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium">Risultato:</p>
          <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground">
            {study.results.map((r) => (
              <li key={r} className="flex gap-1.5">
                <span className="text-foreground">—</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <blockquote className="border-l-2 border-foreground pl-3">
          <p className="text-xs italic">&ldquo;{study.quote}&rdquo;</p>
          {study.author && (
            <p className="mt-1 text-xs text-muted-foreground">
              — {study.author}
            </p>
          )}
        </blockquote>
      </CardContent>
    </Card>
  );
}

function Deck({
  title,
  cases,
}: {
  title: string;
  cases: CaseStudy[];
}) {
  const [flipped, setFlipped] = useState(false);
  const [current, setCurrent] = useState(0);

  function handleNext() {
    if (current < cases.length - 1) {
      setCurrent(current + 1);
    } else {
      setFlipped(false);
      setCurrent(0);
    }
  }

  if (!flipped) {
    return (
      <button
        onClick={() => setFlipped(true)}
        className="flex aspect-square w-full items-center justify-center rounded-xl ring-1 ring-foreground/10 transition-colors hover:bg-muted"
      >
        <span className="text-xl font-bold">{title}</span>
      </button>
    );
  }

  return (
    <div className="space-y-3">
      <CaseCard study={cases[current]} />
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {current + 1} / {cases.length}
        </p>
        <Button variant="outline" size="sm" onClick={handleNext}>
          {current < cases.length - 1 ? "Prossimo" : "Chiudi"}
        </Button>
      </div>
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Alcuni esempi di lavoro, con risultati
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 text-left">
          <Deck title="Idea Sprint" cases={ideaSprintCases} />
          <Deck title="Fix it" cases={fixItCases} />
        </div>
      </div>
    </section>
  );
}
