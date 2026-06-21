import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContent } from "@/context/ContentContext";
import EditableText from "@/components/admin/EditableText";

const CONTACT_ICONS = {
  contact_email: Mail,
  contact_phone: Phone,
  contact_instagram: Instagram,
};

const CONTACT_LABELS = {
  contact_email: "Napíšte nám",
  contact_phone: "Zavolajte",
  contact_instagram: "Sledujte nás",
};

function Contact() {
  const { content } = useContent();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section
      id="kontakt"
      className="relative mx-auto max-w-[1240px] px-5 py-[50px] md:px-10 md:py-[90px]"
    >
      <div
        className="pointer-events-none absolute right-[5%] top-0 h-[420px] w-[520px] blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--primary) / 0.1), transparent 65%)",
        }}
      />
      <div className="relative flex flex-col gap-10 md:grid md:items-start md:gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <EditableText
            contentKey="contact_label"
            as="div"
            className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          />
          <EditableText
            contentKey="contact_title"
            as="h2"
            className="mb-[14px] font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:mb-4 md:text-[40px]"
          />
          <EditableText
            contentKey="contact_description"
            as="p"
            multiline
            className="mb-[26px] text-[15px] leading-relaxed text-muted-foreground md:mb-9 md:text-[16px]"
          />

          <div className="flex flex-col gap-[14px] md:gap-5">
            {Object.keys(CONTACT_ICONS).map((key) => {
              const Icon = CONTACT_ICONS[key];
              return (
                <div key={key} className="flex items-center gap-[15px]">
                  <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] border border-white/[0.09] bg-white/[0.04]">
                    <Icon className="size-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.04em] text-muted-foreground">
                      {CONTACT_LABELS[key]}
                    </div>
                    <EditableText
                      contentKey={key}
                      as="div"
                      className="font-display text-[15.5px] font-semibold text-white"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Card className="px-5 py-6 md:p-[34px]">
          <form onSubmit={handleSubmit} className="space-y-[18px]">
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Meno</Label>
                <Input id="name" placeholder="Vaše meno" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefón</Label>
                <Input id="phone" type="tel" placeholder="+421 9xx xxx xxx" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="vas@email.sk" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Správa</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Lorem ipsum — opíšte, čo potrebujete: nové PC, čistenie, upgrade…"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Odoslať dopyt
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
