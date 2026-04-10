export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <span className="text-lg font-semibold tracking-tight">Confuto</span>
        </div>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Prenota Assessment
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Prodotti
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Risultati
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Contattaci
          </a>
        </nav>
      </div>
    </header>
  );
}
