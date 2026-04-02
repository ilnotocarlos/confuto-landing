"use client";

import { useRef } from "react";

const cases = [
  {
    sector: "Food",
    type: "Idea Sprint",
    challenge:
      "Tre idee sul tavolo, zero criteri per scegliere su cosa investire.",
    action:
      "Raccolto le idee esistenti, identificato le più promettenti, creato una simulazione e testato con clienti target.",
    result:
      "1 direzione prioritaria selezionata su 3. Feedback positivi tra il 70 e l'80%. Rischio ridotto su nuove iniziative.",
    quote:
      "Ci ha aiutato a scegliere su cosa investire davvero, in poco tempo.",
    author: "Marco M., Founder, startup food",
  },
  {
    sector: "Beauty",
    type: "Idea Sprint",
    challenge:
      "Nuova linea di servizi in sviluppo, ma senza evidenze concrete sui bisogni dei clienti.",
    action:
      "Chiarito il concept, identificato i bisogni prioritari, testato le ipotesi con utenti reali.",
    result:
      "Concept ridefinito su bisogni concreti. 25-30% di elementi inutili eliminati. Maggiore chiarezza interna.",
    quote:
      "Abbiamo evitato di sviluppare qualcosa che non avrebbe funzionato.",
    author: "Carlotta C., Marketing Manager, azienda beauty",
  },
  {
    sector: "Travel",
    type: "Fix It",
    challenge:
      "Nuova esperienza cliente progettata a tavolino, senza input dai team interni.",
    action:
      "Strutturato il concept, prototipato il percorso, raccolto feedback da clienti e idee dai team.",
    result:
      "20-35% di problemi sulla customer experience eliminati prima dello sviluppo. Decisioni più rapide sulle priorità.",
    quote:
      "Soluzioni innovative partite dall'interno. Senza questo approccio non ci saremmo riusciti.",
    author: "Maurizio S., Responsabile Innovazione, azienda travel",
  },
];

export function CaseStudiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="casi-studio" className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            06/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Non chiediamo di fidarti.</span>
            <br />
            <span className="font-bold">Guarda i risultati.</span>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="mt-14 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible"
        >
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-sand/30 p-8 min-w-[85vw] md:min-w-0 snap-center flex flex-col transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* Top: placeholder icon + sector */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-sand/50 shrink-0" />
                <span className="text-sm text-charcoal/70">
                  {c.sector} &middot; {c.type}
                </span>
              </div>

              {/* Sfida */}
              <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                Sfida
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                {c.challenge}
              </p>

              {/* Risultato */}
              <p className="text-xs uppercase tracking-widest text-forest mb-2">
                Risultato
              </p>
              <p className="text-lg font-medium text-forest leading-relaxed mb-6">
                {c.result}
              </p>

              {/* Quote */}
              <div className="mt-auto pt-6 border-t border-sand/30">
                <p className="italic text-charcoal/70">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <p className="mt-2 text-sm text-charcoal/60">— {c.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-forest font-medium hover:underline underline-offset-4 transition-colors duration-200"
          >
            Vedi altri casi &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
