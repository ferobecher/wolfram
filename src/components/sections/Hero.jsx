import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, stats, heroPhotoUrl } from "@/data";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100svh - 64px)" }}
    >
      {heroPhotoUrl && (
        <img
          src={heroPhotoUrl}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-none"
        />
      )}

      {/* left fade — solid background then melts into image */}
      <div
        className="absolute inset-y-0 left-0 w-[75%]"
        style={{
          background:
            "linear-gradient(to right, #040405 38%, rgba(4,4,5,0.82) 52%, transparent 72%)",
        }}
      />

      {/* subtle top fade */}
      <div
        className="absolute inset-x-0 top-0 h-[90px]"
        style={{
          background: "linear-gradient(to bottom, #040405 0%, transparent 100%)",
        }}
      />

      {/* bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-28"
        style={{
          background: "linear-gradient(to top, #040405 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pb-[60px] pt-10 md:px-10 md:pb-[80px] md:pt-[90px]">
        <div className="max-w-[520px]">
          <div className="mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-primary/35 bg-primary/[0.06] px-[13px] py-[7px] md:mb-7 md:px-3.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" />
            <span className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-primary/90">
              {content.hero_badge}
            </span>
          </div>

          <h1 className="mb-[18px] font-display text-[38px] font-bold leading-[1.06] tracking-[-0.02em] text-white md:mb-6 md:text-[52px] md:leading-[1.04] lg:text-[60px]">
            <span className="block">{content.hero_title_1}</span>
            <span className="text-primary">{content.hero_title_2}</span>
          </h1>

          <p className="mb-[26px] max-w-[420px] text-[17px] leading-relaxed text-muted-foreground md:mb-9">
            {content.hero_description}
          </p>

          <div className="flex flex-col gap-[11px] md:flex-row md:gap-3.5">
            <Button asChild className="w-full md:w-auto">
              <a href="#kontakt">
                Získať ponuku
                <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full md:w-auto">
              <a href="#sluzby">Naše služby</a>
            </Button>
          </div>

          <div className="mt-[34px] grid grid-cols-3 gap-[10px] border-t border-white/[0.07] pt-[26px] md:mt-12 md:flex md:gap-10 md:pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display text-[24px] font-bold text-white md:text-[30px]">
                  {stat.value}
                </div>
                <div className="mt-[3px] text-[12px] text-muted-foreground md:mt-0.5 md:text-[13px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram badge — bottom right */}
      <a
        href="https://instagram.com/wolfram.group"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-6 right-6 z-10 flex items-center gap-2.5 rounded-[10px] border border-white/10 bg-background/70 px-4 py-[11px] backdrop-blur-md transition-colors hover:border-primary/40"
      >
        <Instagram className="size-[18px] text-primary" strokeWidth={2} />
        <span className="font-display text-sm font-semibold text-white">@wolfram.group</span>
      </a>
    </section>
  );
}

export default Hero;
