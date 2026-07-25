import { prebuilds } from "@/data";

function Prebuilds() {
  return (
    <section
      id="zostavy"
      className="relative mx-auto max-w-[1240px] px-5 py-[50px] md:px-10 md:py-20"
    >
      <div className="mb-[30px] text-center md:mb-12">
        <div className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Hotové riešenia
        </div>
        <h2 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[40px]">
          Pre-build zostavy
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-[22px]">
        {prebuilds.map((build) => (
          <div
            key={build.id}
            className="overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#0b0c10] transition-all duration-200 hover:-translate-y-[3px] hover:border-primary/40"
          >
            <div className="flex h-[180px] w-full items-center justify-center bg-white/[0.04] md:h-[220px]">
              {build.image ? (
                <img
                  src={build.image}
                  alt={build.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-sm text-muted-foreground/40">Foto zostavy</span>
              )}
            </div>
            <div className="px-[18px] py-[18px] pb-5 md:px-6 md:py-[22px] md:pb-[26px]">
              <div className="mb-2 flex items-baseline justify-between md:mb-[9px]">
                <h3 className="font-display text-[18px] font-bold text-white md:text-[20px]">
                  {build.name}
                </h3>
                <span className="font-display text-[17px] font-bold text-primary md:text-[18px]">
                  {build.price}
                </span>
              </div>
              <p className="text-[14px] leading-[1.5] text-muted-foreground md:text-[14.5px] md:leading-[1.55]">
                {build.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prebuilds;
