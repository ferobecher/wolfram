import { Cpu, Sparkles, MemoryStick, Stethoscope, Cable, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useContent } from "@/context/ContentContext";
import EditableText from "@/components/admin/EditableText";
import EditableField from "@/components/admin/EditableField";

const ICONS = { Cpu, Sparkles, MemoryStick, Stethoscope, Cable, Gauge };

function Services() {
  const { services, updateService } = useContent();

  return (
    <section
      id="sluzby"
      className="relative mx-auto max-w-[1240px] px-5 py-[50px] md:px-10 md:py-20"
    >
      <div className="mb-[30px] flex flex-col gap-5 md:mb-12 md:flex-row md:flex-wrap md:items-end md:justify-between">
        <div>
          <EditableText
            contentKey="services_label"
            as="div"
            className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          />
          <EditableText
            contentKey="services_title"
            as="h2"
            className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[40px]"
          />
        </div>
        <EditableText
          contentKey="services_description"
          as="p"
          multiline
          className="text-[15px] leading-[1.6] text-muted-foreground md:max-w-[360px] md:leading-relaxed"
        />
      </div>

      <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2 md:gap-[18px] lg:grid-cols-3">
        {services.map((service) => {
          const Icon = ICONS[service.icon] ?? Cpu;
          return (
            <Card
              key={service.id}
              className="group flex flex-row items-start gap-4 px-5 py-[22px] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 md:block md:p-7"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[11px] border border-primary/25 bg-primary/10 md:mb-[22px]">
                <Icon className="size-[22px] text-primary" strokeWidth={1.8} />
              </div>
              <div className="min-w-0 flex-1">
                <EditableField
                  value={service.title}
                  onSave={(val) => updateService(service.id, "title", val)}
                  as="h3"
                  className="mb-[7px] font-display text-[17px] font-semibold text-white md:mb-2.5 md:text-[19px]"
                />
                <EditableField
                  value={service.description}
                  onSave={(val) => updateService(service.id, "description", val)}
                  as="p"
                  multiline
                  className="text-[14px] leading-[1.55] text-muted-foreground md:text-[14.5px] md:leading-relaxed"
                />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
