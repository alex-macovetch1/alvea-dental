# ALVEA — clinică stomatologică

Site complet pentru o clinică dentară din Chișinău, în română și rusă, cu programare
online care chiar funcționează.

**Clinica este fictivă.** Proiectul e o lucrare de portofoliu: numele, medicii, adresa,
telefoanele și recenziile sunt inventate. Structura, textele și funcționalitatea sunt însă
gândite pentru o clinică reală din Moldova — nu e un șablon umplut cu „lorem ipsum".

## Pagini

| Rută | Ce e acolo |
| --- | --- |
| `/` | Prima pagină: hero cu video, servicii, echipă, recenzii, prețuri, blog, formular |
| `/servicii` + `/servicii/[slug]` × 8 | Pagină proprie per serviciu: cum decurge, ce e inclus, prețuri, întrebări, medicii care îl fac |
| `/echipa` + `/echipa/[slug]` × 5 | Biografie, studii pe ani, specializări, zilele în care lucrează |
| `/preturi` | Lista completă, cu căutare live |
| `/rezultate` | Șase cazuri cu comparator înainte/după, durată și cost real |
| `/blog` + `/blog/[slug]` × 5 | Articole scrise „de medici", cu cuprins și bară de progres |
| `/despre` | Povestea clinicii, cronologie, valori, dotare |
| `/contact` | Cum ajungi, hartă, formular |
| `/programare` | Calendarul de programare, în cinci pași |
| `/admin` | Agenda clinicii — protejată cu parolă, `noindex` |

## Programarea online

Partea care nu e decor:

1. **Serviciu → medic → zi → oră → date de contact.** Fiecare pas se poate schimba
   înapoi din bara laterală.
2. **Orele libere sunt reale.** `/api/slots` construiește grila din programul clinicii
   (L–V 8–20, S 9–16, pauză 13–14), din zilele în care lucrează fiecare medic și din
   durata serviciului ales, apoi scoate ce e deja ocupat în baza de date.
3. **Calendarul arată câte ore mai sunt libere** în fiecare zi (`/api/days`), ca să nu
   deschizi o zi goală.
4. **Nu se poate suprapune.** Ora se verifică din nou pe server la confirmare, iar în
   Postgres există un index unic parțial pe `(medic, zi, oră)` — două tab-uri deschise în
   același timp nu pot lua aceeași oră.
5. **„Oricare medic disponibil"** caută prima oră liberă la oricare medic care face
   serviciul respectiv.
6. Formularul are validare, limitare la 5 cereri pe minut pe IP, iar la final primești un
   cod de programare.

Programările intră în agenda de la `/admin`, unde se pot marca „a venit" sau anula.

## Tehnologii

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · CSS Modules ·
Tailwind (reset + utilitare) · Supabase (Postgres) pentru programări.
Fonturi Manrope + Instrument Serif prin `next/font`.

## Detalii de implementare

- **Bilingv RO / RU** — tot textul stă în `lib/content.ts`, `lib/services-content.ts`,
  `lib/team-content.ts`, `lib/blog.ts` și `lib/site-content.ts`, ca perechi `{ro, ru}`.
  Alegerea se ține minte în `localStorage` și se pune pe `<html data-lang>`.
  Instrument Serif nu are chirilice, așa că în rusă accentele italice devin un sans subțire.
- **Regulile calendarului sunt funcții pure** (`lib/slots.ts`), folosite identic de browser
  și de server — nu pot ajunge să nu fie de acord.
- **Comparator înainte / după** dintr-o singură fotografie: stratul „înainte" e aceeași
  imagine trecută printr-un filtru, decupat cu `clip-path`.
- **Animații** — apariții la derulare cu un singur `IntersectionObserver`, bandă de servicii
  pe `requestAnimationFrame`, contoare, bară de progres la articole. Toate respectă
  `prefers-reduced-motion`.

## Rulare

```bash
npm install
cp .env.example .env.local   # completează cheile
npm run dev                  # http://localhost:3000
npm run build
```

Tabelul se creează din `supabase/schema.sql`.

### Variabile de mediu

```
SUPABASE_URL=...
SUPABASE_SERVICE_KEY=...
ADMIN_KEY=...            # parola pentru /admin
```

Fără ele site-ul rulează în continuare; doar programarea online spune sincer că nu e
disponibilă.

## Imagini

Fotografiile și clipurile video sunt din Unsplash și Pexels, cu licență liberă.

---

Design și cod: [Alexandru Macovetchi](https://alex-macovetch1.github.io/portofoliu/)
