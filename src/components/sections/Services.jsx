import { Card } from "@/components/ui/card";
import { services } from "@/data";

function Services() {
  return (
    <section
      id="sluzby"
      className="relative mx-auto max-w-[1240px] px-6 py-20 md:px-10"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Čo ponúkame
          </div>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px]">
            Služby od stavby po údržbu
          </h2>
        </div>
        <p className="max-w-[360px] text-[15px] leading-relaxed text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt.
        </p>
      </div>

      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <Card
            key={title}
            className="group p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="mb-[22px] flex size-12 items-center justify-center rounded-[11px] border border-primary/25 bg-primary/10">
              <Icon className="size-[22px] text-primary" strokeWidth={1.8} />
            </div>
            <h3 className="mb-2.5 font-display text-[19px] font-semibold text-white">
              {title}
            </h3>
            <p className="text-[14.5px] leading-relaxed text-muted-foreground">
              {desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services;
