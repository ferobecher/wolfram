import { Button } from "@/components/ui/button";
import Wordmark from "@/components/Wordmark";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#proces", label: "Postup" },
  { href: "#kontakt", label: "Kontakt" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <nav className="flex items-center justify-between px-6 py-[18px] md:px-10">
        <a href="#hero" aria-label="Wolfram Group">
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
        <Button size="sm" className="md:hidden" asChild>
          <a href="#kontakt">Ponuka</a>
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
