import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ideaSprintProblems = [
  "vuoi generare nuove idee",
  "vuoi tradurre i concept in idee",
  "hai una nuova idea per un servizio/prodotto/processo e vuoi vederne un prototipo",
  "vuoi scegliere meglio ed evitare errori costosi",
  "vuoi far emergere le idee dai team",
  "altro (il mondo è bello perché vario)",
];

const ideaSprintOutputs = [
  "spunti di miglioramento",
  "idea migliore chiarita e focalizzata",
  "prototipo o simulazione",
  "test con clienti reali",
  "nuovo servizio/features",
  "metodo replicabile",
];

const fixItProblems = [
  "il prodotto/servizio non converte",
  "i clienti sono confusi",
  "l'esperienza non funziona",
  "vuoi migliorare ciò che già offri",
  "vuoi capire cosa non va bene",
  "il processo interno è uno strazio",
  "altro che ci dirai tu",
];

const fixItOutputs = [
  "analisi dell'esperienza cliente (CX)",
  "frizioni migliorate",
  "offerta/servizio/prodotto ristrutturati",
  "azioni concrete da implementare subito",
  "semplificazione della complessità",
  "prototipo o simulazione",
  "test con clienti reali",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-1.5">
          <span className="text-foreground">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductsSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          I prodotti
        </p>
        <div className="mx-auto mt-10 grid grid-cols-1 items-stretch gap-6 text-left md:grid-cols-2 max-w-3xl">
          {/* Card 1 — Idea Sprint */}
          <Card size="sm" className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Idea Sprint</CardTitle>
              <p className="text-xs text-muted-foreground">
                Confuto mette a fuoco l&apos;idea migliore e la testa prima che
                tu la metta sul mercato.
              </p>
              <p className="mt-0.5 text-xs font-medium">Da 3 giorni</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-5">
              <div>
                <p className="text-xs font-medium">Alcuni problemi di partenza:</p>
                <BulletList items={ideaSprintProblems} />
              </div>
              <Separator />
              <div>
                <p className="text-xs font-medium">Output:</p>
                <BulletList items={ideaSprintOutputs} />
              </div>
              <Separator />
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">
                  Prezzo indicativo: da &euro;4.500
                </p>
                <p className="text-xs text-muted-foreground">
                  Assessment iniziale gratuito
                </p>
                <p className="text-xs text-muted-foreground">
                  Sconto 10% sul primo lavoro assieme
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">Dimmi di più</Button>
            </CardFooter>
          </Card>

          {/* Card 2 — Fix it */}
          <Card size="sm" className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Fix it</CardTitle>
              <p className="text-xs text-muted-foreground">
                Confuto rende il tuo prodotto o servizio più chiaro, efficace e
                usabile. Qui si fa design e redesign di prodotti e servizi.
              </p>
              <p className="mt-0.5 text-xs font-medium">Da 3 sessioni</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-5">
              <div>
                <p className="text-xs font-medium">Alcuni problemi di partenza:</p>
                <BulletList items={fixItProblems} />
              </div>
              <Separator />
              <div>
                <p className="text-xs font-medium">Output:</p>
                <BulletList items={fixItOutputs} />
              </div>
              <Separator />
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">
                  Prezzo indicativo: da &euro;5.000
                </p>
                <p className="text-xs text-muted-foreground">
                  Assessment iniziale gratuito
                </p>
                <p className="text-xs text-muted-foreground">
                  Sconto 10% sul primo lavoro assieme
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">Dimmi di più</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mx-auto mt-10 max-w-3xl flex items-center justify-center gap-3">
          <p className="text-sm text-muted-foreground">
            Non trovi quello che ti interessa? Parliamone.
          </p>
          <Button variant="outline" size="sm">
            Prenota una call
          </Button>
        </div>
      </div>
    </section>
  );
}
