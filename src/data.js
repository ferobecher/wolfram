import {
  Cpu,
  Sparkles,
  MemoryStick,
  Stethoscope,
  Cable,
  Gauge,
  Mail,
  Phone,
  Instagram,
} from "lucide-react";

export const services = [
  {
    icon: Cpu,
    title: "Zostavenie PC na mieru",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Navrhneme a postavíme zostavu presne podľa vášho rozpočtu a využitia.",
  },
  {
    icon: Sparkles,
    title: "Čistenie a údržba",
    desc: "Lorem ipsum dolor sit amet. Hĺbkové vyčistenie od prachu, výmena teplovodivej pasty a kontrola teplôt.",
  },
  {
    icon: MemoryStick,
    title: "Upgrade komponentov",
    desc: "Lorem ipsum dolor sit amet, consectetur. Pridáme RAM, SSD, grafickú kartu či chladenie pre vyšší výkon.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostika a opravy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing. Nájdeme príčinu problému a opravíme hardvér aj softvér.",
  },
  {
    icon: Cable,
    title: "Manažment káblov",
    desc: "Lorem ipsum dolor sit amet. Prehľadné a čisté vedenie káblov pre lepšie prúdenie vzduchu a vzhľad.",
  },
  {
    icon: Gauge,
    title: "Optimalizácia výkonu",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doladíme systém, ovládače a chladenie pre stabilný výkon.",
  },
];

export const steps = [
  { num: "01", title: "Konzultácia", desc: "Lorem ipsum dolor sit amet. Spoznáme vaše potreby a rozpočet." },
  { num: "02", title: "Návrh zostavy", desc: "Consectetur adipiscing elit. Vyberieme ideálne komponenty." },
  { num: "03", title: "Stavba a testy", desc: "Sed do eiusmod tempor. Postavíme a dôkladne otestujeme." },
  { num: "04", title: "Odovzdanie", desc: "Incididunt ut labore. Doručíme pripravený a vyladený stroj." },
];

export const contacts = [
  { icon: Mail, label: "Napíšte nám", value: "info@wolfram.group" },
  { icon: Phone, label: "Zavolajte", value: "+421 900 000 000" },
  { icon: Instagram, label: "Sledujte nás", value: "@wolfram.group" },
];

export const stats = [
  { value: "500+", label: "Zostáv postavených" },
  { value: "24 h", label: "Priemerná odozva" },
  { value: "2 roky", label: "Záruka na prácu" },
];
