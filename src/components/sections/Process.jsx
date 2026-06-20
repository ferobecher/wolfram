import { useContent } from "@/context/ContentContext";
import EditableText from "@/components/admin/EditableText";
import EditableField from "@/components/admin/EditableField";

function Process() {
  const { steps, updateStep } = useContent();

  return (
    <section
      id="proces"
      className="relative border-y border-white/[0.06] bg-[#070709] px-6 py-[70px] md:px-10"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[52px] text-center">
          <EditableText
            contentKey="process_label"
            as="div"
            className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          />
          <EditableText
            contentKey="process_title"
            as="h2"
            className="font-display text-[30px] font-bold tracking-[-0.02em] text-white sm:text-[38px]"
          />
        </div>

        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id} className="relative pt-2">
              <div className="mb-4 font-display text-[13px] font-bold tracking-[0.1em] text-primary">
                {step.num}
              </div>
              <EditableField
                value={step.title}
                onSave={(val) => updateStep(step.id, "title", val)}
                as="h3"
                className="mb-2.5 font-display text-[18px] font-semibold text-white"
              />
              <EditableField
                value={step.description}
                onSave={(val) => updateStep(step.id, "description", val)}
                as="p"
                multiline
                className="text-[14px] leading-relaxed text-muted-foreground"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
