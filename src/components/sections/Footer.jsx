import { Instagram } from "lucide-react";
import Wordmark from "@/components/Wordmark";

const columns = [
  {
    title: "Služby",
    links: [
      { href: "#sluzby", label: "Zostavenie PC" },
      { href: "#sluzby", label: "Čistenie a údržba" },
      { href: "#sluzby", label: "Upgrade komponentov" },
      { href: "#sluzby", label: "Diagnostika" },
    ],
  },
  {
    title: "Spoločnosť",
    links: [
      { href: "#proces", label: "Postup" },
      { href: "#kontakt", label: "Kontakt" },
      { href: "#", label: "Referencie" },
      { href: "#", label: "Cenník" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { href: "mailto:info@wolfram.group", label: "info@wolfram.group" },
      { href: "tel:+421900000000", label: "+421 900 000 000" },
      { href: null, label: "Bratislava, Slovensko" },
      { href: null, label: "Po–Pia · 9:00–17:00" },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#070709] px-5 pb-7 pt-10 md:px-10 md:pb-8 md:pt-14">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 border-b border-white/[0.07] pb-8 md:gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Wordmark className="mb-[18px]" />
            <p className="mb-5 max-w-[300px] text-sm leading-relaxed text-muted-foreground">
              Custom Performance Systems. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <a
              href="https://instagram.com/wolfram.group"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-display text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
            >
              <Instagram className="size-[18px]" strokeWidth={2} />
              @wolfram.group
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-[18px] font-display text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {col.title}
              </div>
              <div className="flex flex-col gap-3">
                {col.links.map((link, i) =>
                  link.href ? (
                    <a
                      key={i}
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span key={i} className="text-sm text-muted-foreground">
                      {link.label}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3.5 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="text-[13px] text-muted-foreground/80">
            © 2026 Wolfram Group. Všetky práva vyhradené.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-muted-foreground/80 transition-colors hover:text-muted-foreground">
              Ochrana súkromia
            </a>
            <a href="#" className="text-[13px] text-muted-foreground/80 transition-colors hover:text-muted-foreground">
              Obchodné podmienky
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
