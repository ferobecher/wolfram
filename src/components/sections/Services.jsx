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
      className="relative mx-auto max-w-[1240px] px-6 py-20 md:px-10"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <EditableText
            contentKey="services_label"
            as="div"
            className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          />
          <EditableText
            contentKey="services_title"
            as="h2"
            className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px]"
          />
        </div>
        <EditableText
          contentKey="services_description"
          as="p"
          multiline
          className="max-w-[360px] text-[15px] leading-relaxed text-muted-foreground"
        />
      </div>

      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = ICONS[service.icon] ?? Cpu;
          return (
            <Card
              key={service.id}
              className="group p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-[22px] flex size-12 items-center justify-center rounded-[11px] border border-primary/25 bg-primary/10">
                <Icon className="size-[22px] text-primary" strokeWidth={1.8} />
              </div>
              <EditableField
                value={service.title}
                onSave={(val) => updateService(service.id, "title", val)}
                as="h3"
                className="mb-2.5 font-display text-[19px] font-semibold text-white"
              />
              <EditableField
                value={service.description}
                onSave={(val) => updateService(service.id, "description", val)}
                as="p"
                multiline
                className="text-[14.5px] leading-relaxed text-muted-foreground"
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
