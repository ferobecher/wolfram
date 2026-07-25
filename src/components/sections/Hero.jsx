import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, stats, heroPhotoUrl } from "@/data";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* ── Mobile: image fills full section ── */}
      {heroPhotoUrl && (
        <img
          src={heroPhotoUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
        />
      )}
      {/* Mobile gradient: barely visible at top → solid dark at bottom */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,4,5,0.15) 0%, rgba(4,4,5,0.55) 45%, rgba(4,4,5,0.96) 88%)",
        }}
      />

      {/* ── Desktop: image anchored top-right ── */}
      {heroPhotoUrl && (
        <img
          src={heroPhotoUrl}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 hidden h-full w-auto max-w-none md:block"
        />
      )}
      <div
        className="absolute inset-y-0 left-0 hidden w-[75%] pointer-events-none md:block"
        style={{
          background:
            "linear-gradient(to right, #040405 38%, rgba(4,4,5,0.82) 52%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 hidden h-[90px] pointer-events-none md:block"
        style={{ background: "linear-gradient(to bottom, #040405, transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none md:block hidden"
        style={{ background: "linear-gradient(to top, #040405, transparent)" }}
      />

      {/* ── Mobile layout: content pinned to bottom ── */}
      <div className="relative flex h-[640px] flex-col justify-end px-[22px] pb-[34px] md:hidden">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.1] px-3 py-[6px]">
          <span className="h-[5px] w-[5px] animate-pulse-dot rounded-full bg-primary" />
          <span className="font-display text-[9.5px] font-semibold uppercase tracking-[0.2em] text-primary/90">
            {content.hero_badge}
          </span>
        </div>

        <h1 className="mb-3 font-display text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-white text-balance">
          {content.hero_title_1}{" "}
          <span className="text-primary">{content.hero_title_2}</span>
        </h1>

        <p className="mb-5 text-[14px] leading-[1.55] text-muted-foreground">
          {content.hero_description}
        </p>

        <div className="mb-5 flex gap-[10px]">
          <a
            href="#kontakt"
            className="flex-1 rounded-[9px] bg-primary py-[13px] text-center font-display text-[14px] font-semibold text-background"
          >
            Získať ponuku
          </a>
          <a
            href="#sluzby"
            className="flex-1 rounded-[9px] border border-white/25 bg-white/[0.08] py-[13px] text-center font-display text-[14px] font-semibold text-white"
          >
            Služby
          </a>
        </div>

        <div className="flex gap-[22px] border-t border-white/[0.12] pt-4">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display text-[19px] font-bold text-white">{stat.value}</div>
              <div className="text-[10.5px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop layout: content on left, normal flow ── */}
      <div
        className="relative mx-auto hidden max-w-[1240px] px-10 pb-[80px] pt-[90px] md:block"
        style={{ minHeight: "calc(100svh - 64px)" }}
      >
        <div className="max-w-[520px]">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/35 bg-primary/[0.06] px-3.5 py-[7px]">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" />
            <span className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-primary/90">
              {content.hero_badge}
            </span>
          </div>

          <h1 className="mb-6 font-display text-[52px] font-bold leading-[1.04] tracking-[-0.02em] text-white lg:text-[60px]">
            <span className="block">{content.hero_title_1}</span>
            <span className="text-primary">{content.hero_title_2}</span>
          </h1>

          <p className="mb-9 max-w-[420px] text-[17px] leading-relaxed text-muted-foreground">
            {content.hero_description}
          </p>

          <div className="flex gap-3.5">
            <Button asChild className="w-auto">
              <a href="#kontakt">
                Získať ponuku
                <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" asChild className="w-auto">
              <a href="#sluzby">Naše služby</a>
            </Button>
          </div>

          <div className="mt-12 flex gap-10 border-t border-white/[0.07] pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display text-[30px] font-bold text-white">{stat.value}</div>
                <div className="mt-0.5 text-[13px] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram badge — desktop only */}
      <a
        href="https://instagram.com/wolfram.group"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-6 right-6 z-10 hidden items-center gap-2.5 rounded-[10px] border border-white/10 bg-background/70 px-4 py-[11px] backdrop-blur-md transition-colors hover:border-primary/40 md:flex"
      >
        <Instagram className="size-[18px] text-primary" strokeWidth={2} />
        <span className="font-display text-sm font-semibold text-white">@wolfram.group</span>
      </a>
    </section>
  );
}

export default Hero;
