# Yori Jomo

Et responsivt redesign af hjemmesiden for **Yori Jomo**, et københavnsk skobrand, der kombinerer skandinavisk minimalisme med traditionelt italiensk håndværk.

Projektet er udviklet som en del af en gruppeopgave på multimediedesignuddannelsen med fokus på visuel identitet, digitalt design, brugeroplevelse og frontend-udvikling.

## Projektbeskrivelse

Formålet med projektet er at skabe en mere levende og engagerende digital oplevelse, samtidig med at Yori Jomos minimalistiske og eksklusive brandidentitet bevares.

Den visuelle retning er inspireret af skandinaviske og japanske designprincipper med fokus på typografi, billedmateriale, whitespace og et enkelt, eksklusivt udtryk.

Hjemmesiden tager udgangspunkt i vores design udviklet i Figma og er efterfølgende kodet med HTML, CSS og JavaScript.

## Teknologier og værktøjer

- **HTML5** – Sidens struktur og semantiske elementer
- **CSS3** – Styling, layout og responsivt design
- **JavaScript** – Interaktive elementer og funktionalitet
- **Figma** – UI-design, prototyper og designsystem
- **Git & GitHub** – Versionsstyring og samarbejde
- **GitHub Pages** – Hosting og publicering af hjemmesiden

### Typografi

Hjemmesiden anvender to skrifttyper fra Google Fonts:

- **Instrument Sans** – Primær skrifttype
- **IBM Plex Mono** – Navigation, knapper og understøttende elementer

## Projektstruktur

    yori-jomo/
    ├── assets/
    │   ├── Billeder
    │   └── SVG-ikoner og logoer
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── newsletter-popup.css
    ├── newsletter-popup.js
    ├── login.html
    ├── login.css
    ├── login.js
    ├── robots.txt
    ├── .gitignore
    └── README.md

### Filernes funktion

- `index.html` – Hjemmesidens struktur og indhold
- `styles.css` – Styling og responsive layouts
- `script.js` – Navigation, søgefunktion og nyhedsbrevsinteraktioner
- `newsletter-popup.css` – Styling af nyhedsbrev-popup
- `newsletter-popup.js` – Funktionalitet til nyhedsbrev-popup
- `login.html`, `login.css`, `login.js` – Filer til login-prototypen
- `assets/` – Billeder, logoer, ikoner og grafiske elementer
- `robots.txt` – Instruktioner til søgemaskiners crawlere

## Responsivt design

Hjemmesiden er udviklet til desktop, tablet og mobil.

Layoutet anvender CSS Grid, Flexbox, container-relative enheder, fleksible skriftstørrelser og media queries til at tilpasse indholdet til forskellige skærmstørrelser.

### Breakpoints

- **Desktop:** Over 900px
- **Tablet:** 601px–900px
- **Mobil:** 600px og derunder

Hjemmesidens indhold har en maksimal bredde på 1890px for at sikre ensartede proportioner på større skærme.

## Funktionalitet

Den nuværende implementering indeholder:

- Responsiv navigation med mobilmenu
- Søgefunktion, der filtrerer de fremhævede produkter
- Editorial billedsektioner
- Produktvisning med udvalgte sko
- Interaktive knapper og hover-effekter
- Formular til tilmelding af nyhedsbrev
- Nyhedsbrev-popup med lukkefunktion
- Links til sociale medier
- Smooth scrolling og navigation mellem sektioner

### Nuværende begrænsninger

Hjemmesiden er en frontend-prototype og ikke en færdig webshop.

- Nyhedsbrevsformularerne er endnu ikke tilkoblet en ekstern tjeneste.
- Produktvisningen har ikke et fungerende betalings- eller checkoutsystem.
- Enkelte knapper og navigationselementer fungerer som placeholders.
- Loginfunktionen er en klientside-prototype og giver ikke sikker adgangsbeskyttelse.

## Kør projektet lokalt

1. Klon eller download projektet fra GitHub.
2. Åbn projektmappen i Visual Studio Code.
3. Åbn `index.html` i en browser, eller brug en lokal udviklingsserver som Live Server.

Projektet kræver ingen installation af pakker eller build-processer.

Der kræves internetforbindelse for at indlæse skrifttyper fra Google Fonts.

## GitHub og samarbejde

Projektet udvikles i fællesskab ved hjælp af Git og GitHub.

Gruppemedlemmer kan arbejde på separate branches, så ændringer og nye funktioner kan udvikles uden at påvirke hovedversionen direkte.

Ændringer kan gennemgås og flettes ind i `main` via pull requests.

`main`-branchen indeholder den aktuelle fælles version af hjemmesiden.

## Hosting og deployment

Hjemmesiden hostes via **GitHub Pages**.

Ændringer, der flettes ind i den publicerede branch, kan automatisk blive opdateret på den offentlige hjemmeside via GitHub Pages.

Cloudflare Workers anvendes ikke længere til hosting eller passwordbeskyttelse.

## Designproces

Designet er udviklet i Figma med fokus på visuel research, moodboards, typografi, farver, billedstil, layout og responsive tilpasninger.

Der er arbejdet med et designsystem for at skabe en sammenhængende visuel identitet på tværs af hjemmesidens elementer.

Den visuelle retning tager udgangspunkt i Yori Jomos brandidentitet og kombinerer minimalisme, funktionalitet og visuel storytelling.

Målet er at skabe en digital oplevelse, der understøtter brandets eksklusive positionering og fremhæver kvalitet, håndværk og tidløst design.

## Projektstatus

Projektet er under udvikling.

Gruppeprojekt på EK multimediedesign uddannelsen, oktober 2026.
