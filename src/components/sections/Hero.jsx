import { ArrowRight, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data";

function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-20 md:px-10 md:pb-[70px] md:pt-[90px]">
      {/* glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-60px] h-[560px] w-[760px] -translate-x-1/2 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--primary) / 0.16), transparent 65%)",
        }}
      />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/35 bg-primary/[0.06] px-3.5 py-[7px]">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" />
            <span className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-primary/90">
              Custom Performance Systems
            </span>
          </div>

          <h1 className="mb-6 font-display text-[42px] font-bold leading-[1.04] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[58px] text-balance">
            Počítače stavané
            <br />
            na <span className="text-primary">maximálny výkon</span>
          </h1>

          <p className="mb-9 max-w-[480px] text-[17px] leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Staviame,
            čistíme a optimalizujeme zostavy na mieru — od kancelárskeho PC po
            výkonný herný stroj. Spoľahlivo, čisto a s dôrazom na detail.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <Button asChild>
              <a href="#kontakt">
                Získať ponuku
                <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#sluzby">Naše služby</a>
            </Button>
          </div>

          <div className="mt-12 flex gap-10 border-t border-white/[0.07] pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[30px] font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[13px] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual — replace the placeholder div below with <img src="..." /> of a build */}
        <div className="relative animate-float">
          <div
            className="pointer-events-none absolute inset-[-1px] z-10 rounded-[18px]"
            style={{
              background:
                "linear-gradient(140deg, hsl(var(--primary) / 0.5), transparent 55%)",
            }}
          />
          <div className="relative z-0 flex h-[360px] items-center justify-center overflow-hidden rounded-[17px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent sm:h-[440px]">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground/50">
              Fotka zostavy
            </span>
          </div>
          <div className="absolute bottom-[18px] left-[18px] z-20 flex items-center gap-3 rounded-[10px] border border-white/10 bg-background/80 px-4 py-[11px] backdrop-blur">
            <Cpu className="size-[18px] text-primary" />
            <div>
              <div className="font-display text-xs font-semibold text-white">
                Ryzen / Intel · RTX
              </div>
              <div className="text-[11px] text-muted-foreground">
                Zostava na mieru
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
