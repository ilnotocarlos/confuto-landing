import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ideaSprintWhen = [
  "generazione di nuove idee",
  "vuoi tradurre le idee in concept chiari",
  "vuoi vederne un rapido prototipo",
  "vuoi scegliere meglio ed evitare errori costosi",
  "vuoi far collaborare tra loro le aree/persone",
  "vuoi creare senso e valore",
  "hai in mente un nuovo brand",
];

const ideaSprintOutputs = [
  "concept di miglioramento",
  "idea migliore chiarita e focalizzata",
  "decisioni validate e condivise",
  "prototipo o simulazione",
  "test con clienti reali",
  "nuovo servizio/features",
];

const fixItWhen = [
  "il prodotto/servizio non converte",
  "i clienti sono confusi",
  "l'esperienza d'uso non funziona",
  "non capisci cosa migliorare prima",
  "il processo interno è uno strazio",
  "non c'è coerenza",
  "il valore percepito è basso",
];

const fixItOutputs = [
  "analisi dell'esperienza cliente (CX)",
  "mappa delle frizioni reali (clienti o processi)",
  "offerta/servizio/prodotto ristrutturati",
  "semplificazione della complessità",
  "prototipo/simulazione con test",
  "azioni concrete implementabili subito",
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
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Due percorsi, un obiettivo:
            <br />
            decidere meglio.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 text-left md:grid-cols-2 max-w-3xl">
          {/* Card 1 — Idea Sprint */}
          <Card size="sm" className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Idea Sprint</CardTitle>
              <p className="text-xs text-muted-foreground">
                Per chi vuole generare idee, mettere a fuoco l&apos;idea
                migliore e validarla prima di lanciarla sul mercato.
              </p>
            </CardHeader>
            <CardContent className="flex-1 space-y-5">
              <div>
                <p className="text-xs font-medium">Quando serve:</p>
                <BulletList items={ideaSprintWhen} />
              </div>
              <Separator />
              <div>
                <p className="text-xs font-medium">Cosa ottieni:</p>
                <BulletList items={ideaSprintOutputs} />
              </div>
              <Separator />
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground">
                  Durata: da 3 giorni
                </p>
                <p className="text-sm font-semibold">
                  Prezzo indicativo: da &euro;4.500
                </p>
                <p className="text-xs text-muted-foreground">
                  Include: assessment iniziale gratuito, sconto del 10% sul
                  primo progetto
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">Scopri Idea Sprint</Button>
            </CardFooter>
          </Card>

          {/* Card 2 — Fix it */}
          <Card size="sm" className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Fix it</CardTitle>
              <p className="text-xs text-muted-foreground">
                Per chi ha un prodotto, un servizio o un processo che non
                funziona abbastanza.
              </p>
            </CardHeader>
            <CardContent className="flex-1 space-y-5">
              <div>
                <p className="text-xs font-medium">Quando serve:</p>
                <BulletList items={fixItWhen} />
              </div>
              <Separator />
              <div>
                <p className="text-xs font-medium">Cosa ottieni:</p>
                <BulletList items={fixItOutputs} />
              </div>
              <Separator />
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground">
                  Durata: da 4 sessioni
                </p>
                <p className="text-sm font-semibold">
                  Prezzo indicativo: da &euro;5.500
                </p>
                <p className="text-xs text-muted-foreground">
                  Include: assessment iniziale gratuito, sconto del 10% sul
                  primo progetto
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">Scopri Fix it</Button>
            </CardFooter>
          </Card>
        </div>
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          Non sai quale scegliere? Non trovi quello che ti interessa? Ne
          parliamo in una call.
        </p>
      </div>
    </section>
  );
}
