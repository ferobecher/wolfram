import { Cpu, Sparkles, MemoryStick, Stethoscope, Cable, Gauge, Mail, Phone, Instagram } from "lucide-react";

export const content = {
  hero_badge: "CUSTOM PERFORMANCE SYSTEMS",
  hero_title_1: "Počítače stavané",
  hero_title_2: "na maximálny výkon",
  hero_description:
    "Staviame, čistíme a optimalizujeme zostavy na mieru — od kancelárskeho PC po výkonný herný stroj. Spoľahlivo, čisto a s dôrazom na detail.",
  stat_1_value: "5 +",
  stat_1_label: "Rokov skúseností",
  stat_2_value: "24 h",
  stat_2_label: "Priemerná odozva",
  stat_3_value: "2 roky",
  stat_3_label: "Záruka na prácu",
  services_label: "ČO PONÚKAME",
  services_title: "Služby od stavby po údržbu",
  services_description: "",
  process_label: "AKO TO PREBIEHA",
  process_title: "Jednoduchý postup v 4 krokoch",
  contact_label: "KONTAKT",
  contact_title: "Povedzte nám o vašom projekte",
  contact_description:
    "Ozveme sa vám do 24 hodín s nezáväznou ponukou.",
  contact_email: "wolframgroup26@gmail.com",
  contact_phone: "+421 944 074 022",
  contact_instagram: "@wolfram.group",
  footer_description: "Custom Performance Systems.",
  footer_instagram: "@wolfram.group",
};

export const heroPhotoUrl =
  "https://stwdxszimedzvmomhowv.supabase.co/storage/v1/object/public/photos/hero/1782154312657.png";

export const services = [
  {
    id: 1,
    icon: Cpu,
    title: "Zostavenie PC na mieru",
    description: "Navrhneme a postavíme zostavu presne podľa vášho rozpočtu a využitia.",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Čistenie a údržba",
    description: "Hĺbkové vyčistenie od prachu, výmena teplovodivej pasty a kontrola teplôt.",
  },
  {
    id: 3,
    icon: MemoryStick,
    title: "Upgrade komponentov",
    description: "Pridáme RAM, SSD, grafickú kartu či chladenie pre vyšší výkon.",
  },
  {
    id: 4,
    icon: Stethoscope,
    title: "Diagnostika a opravy",
    description: "Nájdeme príčinu problému a opravíme hardvér aj softvér.",
  },
  {
    id: 5,
    icon: Cable,
    title: "Manažment káblov",
    description: "Prehľadné a čisté vedenie káblov pre lepšie prúdenie vzduchu a vzhľad.",
  },
  {
    id: 6,
    icon: Gauge,
    title: "Optimalizácia výkonu",
    description: "Doladíme systém, ovládače a chladenie pre stabilný výkon.",
  },
];

export const steps = [
  { id: 1, num: "01", title: "Konzultácia", description: "Spoznáme vaše potreby a rozpočet." },
  { id: 2, num: "02", title: "Návrh zostavy", description: "Vyberieme ideálne komponenty." },
  { id: 3, num: "03", title: "Stavba a testy", description: "Postavíme a dôkladne otestujeme." },
  { id: 4, num: "04", title: "Odovzdanie", description: "Doručíme pripravený a vyladený stroj." },
];

export const contacts = [
  { icon: Mail, label: "Napíšte nám", value: "wolframgroup26@gmail.com" },
  { icon: Phone, label: "Zavolajte", value: "+421 944 074 022" },
  { icon: Instagram, label: "Sledujte nás", value: "@wolfram.group" },
];

export const stats = [
  { value: "5 +", label: "Rokov skúseností" },
  { value: "24 h", label: "Priemerná odozva" },
  { value: "2 roky", label: "Záruka na prácu" },
];

export const prebuilds = [
  {
    id: 1,
    name: "Wolfram Core",
    price: "1 200 €",
    desc: "Spoľahlivá zostava na prácu a bežné hranie. Tichý chod, plynulý výkon.",
    image: null,
  },
  {
    id: 2,
    name: "Wolfram Edge",
    price: "2 000 €",
    desc: "Vyvážený výkon pre náročné hry a tvorbu obsahu vo vysokých detailoch.",
    image: null,
  },
  {
    id: 3,
    name: "Wolfram Apex",
    price: "Na mieru",
    desc: "Vrcholová zostava bez kompromisov — komponenty a chladenie na najvyššej úrovni.",
    image: null,
  },
];
