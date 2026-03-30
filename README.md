# Student Dashboard

En webbapplikation byggd med React och TypeScript där studenter kan se sina kurser, söka bland dem och hålla koll på inlämningsuppgifter.

🔗 [Live Demo]()

---

## Beskrivning

Jag byggde det här projektet som en individuell inlämning i kursen JavaScript - Fördjupning. Tanken var att skapa en enkel studentportal där man kan se kurser hämtade från ett externt API, filtrera uppgifter och få en överblick över sin studiesituation.

---

## Tekniker

- React 18 + TypeScript
- React Router – för navigering utan sidladdning
- Styled-Components – CSS skrivet direkt i komponenterna
- Vite – byggverktyg
- JSONPlaceholder API – extern data för kurser och uppgifter
- Open Meteo API – väderdata på startsidan

---

## Så här kör du projektet
```bash
# Installera beroenden
npm install

# Starta utvecklingsservern
npm run dev

# Bygg för produktion
npm run build
```

---

## Sidor och routes

| Route | Sida | Beskrivning |
|---|---|---|
| `/` | Home | Översikt med väder, kurser och uppgifter |
| `/courses` | Courses | Lista med kurser hämtade från API |
| `/courses/:id` | CourseDetails | Detaljvy för en specifik kurs |
| `/assignments` | Assignments | Uppgifter med filter (alla / klara / ej klara) |

---

## Komponenter

| Komponent | Typ | Beskrivning |
|---|---|---|
| `Navbar.tsx` | Presentational | Navigationslänkar högst upp |
| `Footer.tsx` | Presentational | Sidfot längst ner |
| `Layout.tsx` | Presentational | Centrerar och ramar in sidinnehållet |
| `CourseCard.tsx` | Presentational | Visar en kurs som ett kort |
| `SearchBar.tsx` | Presentational | Sökfält som skickar input till föräldern |
| `Courses.tsx` | **Stateful** | Hämtar kursdata från API, hanterar sökning |
| `AssignmentList.tsx` | **Stateful** | Hämtar uppgifter från API, hanterar filter |

---

## Kravlista

### Godkänt (G)

- [x] Minst 6 komponenter varav 2 är statefulla (`Courses`, `AssignmentList`)
- [x] React Router används för dynamisk URL-uppdatering
- [x] Git och GitHub har använts genom hela projektet
- [x] README.md finns med titel, beskrivning, instruktioner och demolänk
- [x] Uppgiften lämnas in i tid
- [ ] Muntlig presentation genomförd

### Väl Godkänt (VG)

- [x] Alla G-krav uppfyllda
- [x] Styled-Components används genomgående i alla komponenter
- [x] Data hämtas från externa webb-API:er
  - Kurser: `https://jsonplaceholder.typicode.com/users`
  - Uppgifter: `https://jsonplaceholder.typicode.com/todos`
  - Väder: `https://api.open-meteo.com`