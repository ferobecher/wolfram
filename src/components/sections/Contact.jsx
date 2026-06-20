import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contacts } from "@/data";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: napojiť na backend / e-mailovú službu
  }

  return (
    <section
      id="kontakt"
      className="relative mx-auto max-w-[1240px] px-6 py-[90px] md:px-10"
    >
      <div
        className="pointer-events-none absolute right-[5%] top-0 h-[420px] w-[520px] blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--primary) / 0.1), transparent 65%)",
        }}
      />
      <div className="relative grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Kontakt
          </div>
          <h2 className="mb-4 font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px]">
            Povedzte nám o vašom projekte
          </h2>
          <p className="mb-9 text-[16px] leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ozveme sa
            vám do 24 hodín s nezáväznou ponukou.
          </p>

          <div className="flex flex-col gap-5">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-[15px]">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] border border-white/[0.09] bg-white/[0.04]">
                  <Icon className="size-5 text-primary" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs tracking-[0.04em] text-muted-foreground">
                    {label}
                  </div>
                  <div className="font-display text-[15.5px] font-semibold text-white">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="p-6 sm:p-[34px]">
          <form onSubmit={handleSubmit} className="space-y-[18px]">
            <div className="grid gap-[18px] sm:grid-cols-2">
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
