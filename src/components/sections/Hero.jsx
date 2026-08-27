import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, stats, heroPhotoUrl, heroPhotoAlt } from "@/data";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* ── Mobile: image fills full section ── */}
      {heroPhotoUrl && (
        <img
          src={heroPhotoUrl}
          alt={heroPhotoAlt}
          width={1248}
          height={832}
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] md:hidden"
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
          alt={heroPhotoAlt}
          width={1248}
          height={832}
          fetchpriority="high"
          decoding="async"
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

      {/*
        Single content block for both breakpoints. Previously mobile and desktop
        were two separate trees, which put a second <h1> and a duplicate copy of
        the description + stats into the DOM on every render.
      */}
      <div className="relative flex h-[640px] flex-col justify-end px-[22px] pb-[34px] md:mx-auto md:block md:h-auto md:min-h-[calc(100svh_-_64px)] md:max-w-[1240px] md:px-10 md:pb-[80px] md:pt-[90px]">
        <div className="flex flex-col md:block md:max-w-[520px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.1] px-3 py-[6px] md:mb-7 md:gap-2.5 md:border-primary/35 md:bg-primary/[0.06] md:px-3.5 md:py-[7px]">
            <span className="h-[5px] w-[5px] animate-pulse-dot rounded-full bg-primary md:h-1.5 md:w-1.5" />
            <span className="font-display text-[9.5px] font-semibold uppercase tracking-[0.2em] text-primary/90 md:text-[11px] md:font-medium md:tracking-[0.28em]">
              {content.hero_badge}
            </span>
          </div>

          <h1 className="mb-3 font-display text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-white text-balance md:mb-6 md:text-[52px] md:leading-[1.04] md:text-wrap lg:text-[60px]">
            <span className="md:block">{content.hero_title_1}</span>{" "}
            <span className="text-primary">{content.hero_title_2}</span>
          </h1>

          <p className="mb-5 text-[14px] leading-[1.55] text-muted-foreground md:mb-9 md:max-w-[420px] md:text-[17px] md:leading-relaxed">
            {content.hero_description}
          </p>

          {/* Mobile CTAs */}
          <div className="mb-5 flex gap-[10px] md:hidden">
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

          {/* Desktop CTAs */}
          <div className="hidden gap-3.5 md:flex">
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

          <div className="flex gap-[22px] border-t border-white/[0.12] pt-4 md:mt-12 md:gap-10 md:border-white/[0.07] md:pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display text-[19px] font-bold text-white md:text-[30px]">
                  {stat.value}
                </div>
                <div className="text-[10.5px] text-muted-foreground md:mt-0.5 md:text-[13px]">
                  {stat.label}
                </div>
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
