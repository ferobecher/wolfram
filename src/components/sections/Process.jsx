import { steps } from "@/data";

function Process() {
  return (
    <section
      id="proces"
      className="relative border-y border-white/[0.06] bg-[#070709] px-6 py-[70px] md:px-10"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[52px] text-center">
          <div className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Ako to prebieha
          </div>
          <h2 className="font-display text-[30px] font-bold tracking-[-0.02em] text-white sm:text-[38px]">
            Jednoduchý postup v 4 krokoch
          </h2>
        </div>

        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="relative pt-2">
              <div className="mb-4 font-display text-[13px] font-bold tracking-[0.1em] text-primary">
                {step.num}
              </div>
              <h3 className="mb-2.5 font-display text-[18px] font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
