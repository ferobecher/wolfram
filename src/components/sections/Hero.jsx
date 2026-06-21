import { ArrowRight, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditableText from "@/components/admin/EditableText";
import HeroPhoto from "@/components/admin/HeroPhoto";

function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-[1240px] px-5 pb-[50px] pt-10 md:px-10 md:pb-[70px] md:pt-[90px]">
      <div
        className="pointer-events-none absolute left-1/2 top-[-40px] h-[420px] w-[480px] -translate-x-1/2 blur-2xl md:top-[-60px] md:h-[560px] md:w-[760px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--primary) / 0.16), transparent 65%)",
        }}
      />
      <div className="relative flex flex-col gap-10 md:grid md:items-center md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-14">
        <div className="md:order-1 lg:col-start-1 lg:row-start-1">
          <div className="mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-primary/35 bg-primary/[0.06] px-[13px] py-[7px] md:mb-7 md:px-3.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" />
            <EditableText
              contentKey="hero_badge"
              as="span"
              className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-primary/90"
            />
          </div>

          <h1 className="mb-[18px] font-display text-[38px] font-bold leading-[1.06] tracking-[-0.02em] text-white md:mb-6 md:text-[52px] md:leading-[1.04] md:text-balance lg:text-[58px]">
            <EditableText contentKey="hero_title_1" as="span" className="block" />
            <EditableText contentKey="hero_title_2" as="span" className="text-primary" />
          </h1>

          <EditableText
            contentKey="hero_description"
            as="p"
            multiline
            className="mb-[26px] max-w-[480px] text-[17px] leading-relaxed text-muted-foreground md:mb-9"
          />

          <div className="flex flex-col gap-[11px] md:flex-row md:flex-wrap md:gap-3.5">
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
        </div>

        <div className="relative animate-float md:order-3 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div
            className="pointer-events-none absolute inset-[-1px] z-10 rounded-[18px]"
            style={{
              background:
                "linear-gradient(140deg, hsl(var(--primary) / 0.5), transparent 55%)",
            }}
          />
          <HeroPhoto className="relative z-0 h-[300px] rounded-[17px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent md:h-[440px]" />
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

        <div className="grid grid-cols-3 gap-[10px] border-t border-white/[0.07] pt-[26px] md:order-2 md:flex md:gap-10 md:pt-8 lg:col-start-1 lg:row-start-2">
          {[1, 2, 3].map((n) => (
            <div key={n}>
              <EditableText
                contentKey={`stat_${n}_value`}
                as="div"
                className="font-display text-[24px] font-bold text-white md:text-[30px]"
              />
              <EditableText
                contentKey={`stat_${n}_label`}
                as="div"
                className="mt-[3px] text-[12px] text-muted-foreground md:mt-0.5 md:text-[13px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
