import { useState } from "react";
import { Button } from "@/components/ui/button";
import Wordmark from "@/components/Wordmark";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#proces", label: "Postup" },
  { href: "#kontakt", label: "Kontakt" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <nav className="flex items-center justify-between px-5 py-[15px] md:px-10 md:py-[18px]">
        <a href="#hero" aria-label="Wolfram Group" onClick={() => setMenuOpen(false)}>
          <Wordmark />
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-[0.02em] text-muted-foreground transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="#kontakt">Nezáväzná ponuka</a>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 -mr-2.5 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-[2px] w-[22px] rounded-full bg-[#e6e8ec] transition-transform duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[22px] rounded-full bg-[#e6e8ec] transition-opacity duration-150 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-[22px] rounded-full bg-[#e6e8ec] transition-transform duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
      {menuOpen && (
        <div className="flex flex-col border-t border-white/[0.06] px-5 pb-[18px] pt-2 animate-menu-down md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/[0.05] py-[13px] text-base font-medium text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-3.5 w-full" onClick={() => setMenuOpen(false)}>
            <a href="#kontakt">Nezáväzná ponuka</a>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
