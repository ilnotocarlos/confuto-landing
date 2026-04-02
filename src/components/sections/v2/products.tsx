import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ProductsV2() {
  return (
    <section id="prodotti" className="min-h-screen flex items-center bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            03/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">I</span>{" "}
            <span className="font-bold">prodotti</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* IDEA SPRINT */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.02]">
            <div className="h-3 bg-mint" />
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-heading text-[2rem] font-bold text-forest">
                Idea Sprint
              </h3>
              <p className="mt-2 text-lg text-charcoal/70">
                Confuto mette a fuoco l&apos;idea migliore e la testa prima che
                tu la metta sul mercato.
              </p>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Alcuni problemi di partenza
              </h4>
              <div className="mt-3 space-y-2">
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  Vuoi generare nuove idee
                </p>
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  Vuoi tradurre i concept in idee
                </p>
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  Hai una nuova idea e vuoi vederne un prototipo
                </p>
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  Vuoi scegliere meglio ed evitare errori costosi
                </p>
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  Vuoi far emergere le idee dai team
                </p>
                <p className="border-l-2 border-mint pl-4 italic text-charcoal/80">
                  Altro (il mondo è bello perché vario)
                </p>
              </div>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Output
              </h4>
              <div className="mt-3 space-y-2 text-charcoal/80">
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">01</span>
                  Spunti di miglioramento
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">02</span>
                  Idea migliore chiarita e focalizzata
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">03</span>
                  Prototipo o simulazione
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">04</span>
                  Test con clienti reali
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">05</span>
                  Nuovo servizio/features
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">06</span>
                  Metodo replicabile
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/50 flex justify-between text-sm">
                <p>
                  <span className="font-medium text-forest">Durata</span>
                  <br />
                  <span className="text-charcoal/60">Da 3 giorni</span>
                </p>
                <p>
                  <span className="font-medium text-forest">Prezzo indicativo</span>
                  <br />
                  <span className="text-charcoal/60">Da &euro;4.500</span>
                </p>
              </div>

              <p className="mt-4 text-xs text-charcoal/40">
                Assessment iniziale gratuito &middot; Sconto 10% sul primo
                lavoro assieme
              </p>

              <div className="mt-auto pt-6">
                <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
                  Scopri Idea Sprint
                  <ArrowUpRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* FIX IT */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.02]">
            <div className="h-3 bg-blush" />
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-heading text-[2rem] font-bold text-forest">
                Fix It
              </h3>
              <p className="mt-2 text-lg text-charcoal/70">
                Confuto rende il tuo prodotto o servizio più chiaro, efficace e
                usabile. Qui si fa design e redesign.
              </p>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Alcuni problemi di partenza
              </h4>
              <div className="mt-3 space-y-2">
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  Il prodotto/servizio non converte
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  I clienti sono confusi
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  L&apos;esperienza non funziona
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  Vuoi migliorare ciò che già offri
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  Vuoi capire cosa non va bene
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  Il processo interno è uno strazio
                </p>
                <p className="border-l-2 border-blush pl-4 italic text-charcoal/80">
                  Altro che ci dirai tu
                </p>
              </div>

              <h4 className="mt-6 font-heading text-lg font-medium text-forest">
                Output
              </h4>
              <div className="mt-3 space-y-2 text-charcoal/80">
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">01</span>
                  Analisi dell&apos;esperienza cliente (CX)
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">02</span>
                  Frizioni migliorate
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">03</span>
                  Offerta/servizio/prodotto ristrutturati
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">04</span>
                  Azioni concrete da implementare subito
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">05</span>
                  Semplificazione della complessità
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">06</span>
                  Prototipo o simulazione
                </p>
                <p>
                  <span className="font-mono text-sm text-charcoal/40 mr-2">07</span>
                  Test con clienti reali
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/50 flex justify-between text-sm">
                <p>
                  <span className="font-medium text-forest">Durata</span>
                  <br />
                  <span className="text-charcoal/60">Da 3 sessioni</span>
                </p>
                <p>
                  <span className="font-medium text-forest">Prezzo indicativo</span>
                  <br />
                  <span className="text-charcoal/60">Da &euro;5.000</span>
                </p>
              </div>

              <p className="mt-4 text-xs text-charcoal/40">
                Assessment iniziale gratuito &middot; Sconto 10% sul primo
                lavoro assieme
              </p>

              <div className="mt-auto pt-6">
                <Button className="bg-forest text-cream rounded-full px-8 py-4 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
                  Scopri Fix It
                  <ArrowUpRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
