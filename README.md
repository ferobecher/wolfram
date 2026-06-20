# Wolfram Group — jednostránková web stránka

Vite + React + Tailwind CSS + shadcn/ui. Tmavá téma s ľadovo-modrým akcentom podľa banneru.

## Spustenie

```bash
npm install
npm run dev        # vývojový server (http://localhost:5173)
npm run build      # produkčný build do /dist
npm run preview    # náhľad produkčného buildu
```

Otvorte priečinok vo VS Code, spustite `npm install` a `npm run dev`.

## Štruktúra

```
src/
  App.jsx                     # poskladá sekcie
  data.js                     # texty služieb, krokov, kontaktov (filler)
  index.css                   # Tailwind + shadcn CSS premenné (téma)
  lib/utils.js                # cn() helper
  components/
    Wordmark.jsx              # logo WOLFRAM | GROUP
    ui/                       # shadcn komponenty: button, card, input, textarea, label
    sections/                 # Navbar, Hero, Services, Process, Contact, Footer
```

## shadcn/ui

Projekt je nakonfigurovaný pre shadcn (`components.json`, alias `@/`, CSS premenné).
Ďalšie komponenty pridáte cez CLI, napr.:

```bash
npx shadcn@latest add dialog
```

### Téma
Farby sú v `src/index.css` ako HSL premenné. Hlavné:
- `--primary: 202 71% 62%` — ľadovo-modrá (#57b0e3)
- `--background: 240 13% 2%` — takmer čierna

Písma: **Sora** (nadpisy, `font-display`) + **Manrope** (text), načítané v `index.html`.

## Poznámky
- Všetky texty sú filler (Lorem ipsum + slovenské popisy) — nahraďte vlastnými v `src/data.js` a sekciách.
- Kontaktný formulár má pripravený `handleSubmit` v `Contact.jsx` — napojte na svoj backend.
- V `Hero.jsx` je placeholder „Fotka zostavy" — nahraďte ho `<img>` vlastnou fotkou.
"# wolfram" 
