import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { content, contacts } from "@/data";

const FORMSPREE_ID = "xbdnpyov";

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
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
          <div className="mb-3.5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {content.contact_label}
          </div>
          <h2 className="mb-[14px] font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:mb-4 md:text-[40px]">
            {content.contact_title}
          </h2>
          <p className="mb-[26px] text-[15px] leading-relaxed text-muted-foreground md:mb-9 md:text-[16px]">
            {content.contact_description}
          </p>

          <div className="flex flex-col gap-[14px] md:gap-5">
            {contacts.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-[15px]">
                  <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] border border-white/[0.09] bg-white/[0.04]">
                    <Icon className="size-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.04em] text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-display text-[15.5px] font-semibold text-white">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Card className="px-5 py-6 md:p-[34px]">
          {status === "success" ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
                ✓
              </div>
              <h3 className="font-display text-lg font-semibold text-white">Správa odoslaná</h3>
              <p className="text-sm text-muted-foreground">
                Ozveme sa vám do 24 hodín.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Odoslať ďalšiu správu
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-[18px]">
              <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Meno</Label>
                  <Input id="name" name="name" placeholder="Vaše meno" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefón</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+421 9xx xxx xxx" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="vas@email.sk" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Správa</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Opíšte, čo potrebujete: nové PC, čistenie, upgrade…"
                  required
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Niečo sa pokazilo. Skúste to znova alebo nás kontaktujte priamo.
                </p>
              )}
              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Odosielam…" : "Odoslať dopyt"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

export default Contact;
