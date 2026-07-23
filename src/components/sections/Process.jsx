import { content, steps } from "@/data";

function Process() {
  return (
    <section
      id="proces"
      className="relative border-y border-white/[0.06] bg-[#070709] px-5 py-[50px] md:px-10 md:py-[70px]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[30px] md:mb-[52px] md:text-center">
          <div className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {content.process_label}
          </div>
          <h2 className="font-display text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-[38px] md:leading-[1.5]">
            {content.process_title}
          </h2>
        </div>

        <div className="flex flex-col md:grid md:gap-[22px] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id} className="relative flex gap-[18px] pb-[26px] md:block md:gap-0 md:pb-0 md:pt-2">
              <div className="flex shrink-0 flex-col items-center md:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary">
                  {step.num}
                </div>
                <div className="mt-1.5 w-px flex-1 bg-white/[0.09]" />
              </div>
              <div className="mb-4 hidden font-display text-[13px] font-bold tracking-[0.1em] text-primary md:block">
                {step.num}
              </div>
              <div className="pt-[7px] md:pt-0">
                <h3 className="mb-[7px] font-display text-[17px] font-semibold text-white md:mb-2.5 md:text-[18px]">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.55] text-muted-foreground md:leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
