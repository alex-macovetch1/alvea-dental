# ALVEA — clinică stomatologică

Site de prezentare pentru o clinică dentară din Chișinău, în română și rusă.

**Clinica este fictivă.** Proiectul e o lucrare de portofoliu: numele, medicii, adresa,
telefoanele și recenziile sunt inventate. Structura, textele și funcționalitatea sunt însă
gândite pentru o clinică reală din Moldova — nu e un șablon umplut cu „lorem ipsum".

## Ce e făcut

- **Bilingv RO / RU** — comutator în bara de sus, alegerea se ține minte în `localStorage`.
  Tot conținutul stă într-un singur fișier (`lib/content.ts`), ca o traducere să nu se piardă prin componente.
- **Video în hero**, comprimat la 685 KB, cu poster și parallax la derulare.
- **Comparator înainte / după** — se trage cu mouse-ul, cu degetul sau cu săgețile de la tastatură.
- **Bandă de servicii** care nu se oprește niciodată și accelerează când derulezi pagina.
- **Miniatură care urmărește cursorul** peste lista de servicii; pe telefon fiecare rând își are propria poză.
- **Contoare animate**, linie de progres pe pași, apariții la derulare — toate respectă `prefers-reduced-motion`.
- **Formular de programare** cu validare și limitare de cereri pe IP (`app/api/appointment`).
- **Prețuri publicate** — partea pe care aproape nicio clinică din Moldova nu o pune pe site.

## Tehnologii

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · CSS Modules · Tailwind (reset + utilitare).
Fonturi Manrope + Instrument Serif, servite local prin `next/font`.

## Rulare

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Imagini

Fotografiile și clipurile video sunt din Unsplash și Pexels, cu licență liberă.

---

Design și cod: [Alexandru Macovetchi](https://alex-macovetch1.github.io/portofoliu/)
