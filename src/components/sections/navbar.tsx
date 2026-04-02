"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Casi studio", href: "#casi-studio" },
  { label: "Chi siamo", href: "#chi-siamo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold text-forest">
          Confuto
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal/70 hover:text-forest transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="bg-forest text-cream rounded-full px-6 py-2 h-auto text-sm font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200">
            Prenota una call
            <ArrowUpRight className="ml-1.5 size-3.5" />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-forest"
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sand/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base text-charcoal/70 hover:text-forest transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full bg-forest text-cream rounded-full px-6 py-3 h-auto text-base font-medium hover:bg-forest/90 active:scale-[0.98] transition-all duration-200 mt-4">
            Prenota una call
            <ArrowUpRight className="ml-1.5 size-4" />
          </Button>
        </div>
      )}
    </nav>
  );
}
