# TAFE Gippsland Design System

A design system for **TAFE Gippsland**, the public TAFE serving greater Gippsland in
regional Victoria, Australia. Nine campuses — Leongatha, Warragul, Yallourn, Morwell,
Traralgon, Sale, Bairnsdale, Forestec and Lakes Entrance (Seamec) — delivering
vocational education and training: certificates, diplomas, apprenticeships,
pre-apprenticeships, VCE/VCAL, short courses and university pathways.

- **Purpose:** we believe education changes people's lives.
- **Promise:** by providing high quality, relevant and accessible education programs, we will help strengthen the communities of greater Gippsland.
- **Positioning:** TAFE Gippsland is your local TAFE.
- **Big idea:** transformation. The brand sees itself as an agent of change — for students, for industry, for Gippsland.
- **Pillars:** expert people; accessible to all; quality products and services; rewarding partnerships; commitment to community.
- **Personality:** passionate, determined, genuine, forward thinking.
- **Audiences:** prospective and current students, business and industry partners, staff.

## Sources this system was built from

| Source | What it gave us |
| --- | --- |
| `uploads/style-guide.pdf` — *TAFE Gippsland Brand guidelines*, job number **0187_1121_TAFE Gippsland style guide_07**, November 2021, 74 pp. (also at `uploads/0187_1121_TAFE Gippsland style guide_07 (2).pdf` and `uploads/assets-1787175363902-832v.pdf`) | Everything: logo rules, full colour system, fonts, print paragraph styles, page turning device, imagery and illustration direction, writing principles and editorial standards, print applications, sub brands, signage and stationery |
| `uploads/style-guide.txt` | Full extracted text of the guide — searchable, and the citation source for every section reference in this readme |
| `reference/website-*.png` | Screenshots of tafegippsland.edu.au embedded in section 6.1 of the guide — the source for the button, header and footer treatments and for the page turning device as built on screen |
| `assets/photography/*` | The sixteen brand photographs embedded in sections 2.7 and 2.7.2 of the guide |
| `raw/` | Working directory of raw images extracted from the PDF; kept for traceability, not part of the system |

No codebase, Figma file or slide deck was provided. Nothing here was invented from a
screenshot where the guide had an answer.

**Contact for anything this system does not cover:** marketing@tafegippsland.edu.au
(marketing requests go through the Staffpoint marketing request form).

---

## Index

- `styles.css` — the single entry point. Consumers link this file only.
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `surfaces.css`
- `components/brand/` — Logo, PageTurn, ColourPanel
- `components/type/` — Heading, SubHeading, Body, Testimonial
- `components/content/` — ProofPoint, CourseListing, BulletList, RuledTable
- `components/actions/` — Button
- `components/layout/` — BrandFooter
- `templates/slide-deck/SlideDeck.dc.html` — 16:9 presentation, seven slide types
- `templates/course-flyer/CourseFlyer.dc.html` — the standard A4 course flyer
- `templates/course-guide/CourseGuide.dc.html` — A4 full-bleed literature: two covers, internal spread, back page
- `guidelines/*.card.html` — twenty foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/logo/` · `assets/photography/` · `reference/`
- `SKILL.md` — Agent Skills wrapper, for using this system in Claude Code

### Components

Logo, PageTurn, ColourPanel, Heading, SubHeading, Body, Testimonial, ProofPoint,
CourseListing, BulletList, RuledTable, Button, BrandFooter.

**Intentional additions.** The style guide documents print applications and a page of
website screenshots; it defines no component library. The primitives above were derived
from the elements the guide actually specifies (logo, page turning device, colour fields,
the nine print paragraph styles, proof points, course flyer listings, the standard back
page). Two additions go slightly beyond the PDF:

- **Button** — taken from the live website screenshots in section 6.1, because no print
  piece defines a call to action.
- **ColourPanel** — a wrapper for the "solid palette colour or full-bleed image, with a
  page turning device" construction that every cover, banner and poster in section 4 uses.

---

## Content fundamentals

The guide devotes a whole section (3.0) to voice, and it is unusually specific. Follow it.

**Voice principles, in the guide's own words**

- *You've got us on your side* — talk in a way that feels real, trustworthy and down to earth.
- *We're big on dreams, too* — language that shows we understand people's ambitions, little and lofty.
- *Allow us to inspire you* — words that are exciting, alive and hopeful.
- *We address to impress* — smart with word choice, witty when the time is right, fresh and future focused.

**Writing principles, with the guide's examples**

| Principle | Do | Don't |
| --- | --- | --- |
| Hello you — speak directly to the audience | Your spot at TAFE Gippsland awaits. | Graduates can now apply to TAFE Gippsland. |
| Short and sweet — no waffle | Bags of potential | We think you've got absolute bags of potential. You're going to go really far! |
| Sorry what? — no jargon, ever | Transform yourself and your career will transform with you | Develop your capabilities and acquire the credentials to further your career. |
| Funny bone — subtle, smart wit | Upskilling. It's a beautiful thing | Has the idea of joining a beauty course got you blushing? |
| Not a textbook approach | This isn't just a course directory. It's a catalogue of possibilities. | TAFE Gippsland Course Directory 2018-2019 |

**Person and tense.** Second person throughout — "you", "your career", "you'll learn".
First person plural for the institution — "we", "our courses", "we'll call you". Never
third person about the student ("students may apply"). Contractions are encouraged:
*don't, won't, you'll, we've.*

**Course copy is rewritten, not transcribed.** The guide contrasts old accreditation-speak
with new copy: *"This qualification addresses work in roles that usually involve service
delivery"* becomes *"Learn to serve your community — have you always wanted to serve your
community?"*. Lead with the benefit and a question, name the outcome, then the practical
detail. Headline patterns from the guide: *Become a financial wiz*, *Do your part for
education*, *Kick start your career as a hairdresser, beautician or make-up artist*.

**Casing.** Sentence case everywhere, headings included. Minimal capitalisation:
*apprenticeship, traineeship, bachelor degree, credit transfer, certificates, diplomas*
all lower case; *Certificate II*, *Diploma of Nursing*, *Victorian Government*,
*Statement of Attainment* capitalised. No full stops in headings.

**Emoji: never.** The guide has no emoji and no emoji provision. Do not introduce them.
Tick and cross marks (✔ ✘) appear inside the guide itself as instructional annotation —
they are an internal documentation device, not brand furniture.

**Mechanics** (section 3.3, full list on the *Editorial quick reference* card): numbers in
words to nine and numerals from 10; percent spelled out with numerals ("nine percent");
dates as *Sunday 1 February, 2011*; times as *6pm*, *6.30pm*; money as *$500*, *$9.50*;
spaced en rules, never em rules; ampersand avoided except in official department titles;
double quotation marks with the punctuation inside; *tafegippsland.edu.au* lower case with
no `http://`; Macquarie Dictionary first spelling, *-ise* not *-ize*; abbreviations
minimised in body copy but permitted in tables; acronyms spelled out on first use except
TAFE, VCE, VCAL, ATAR and IT. All text left aligned, single spaced.

**Standing sign-offs.** *Discover you, transformed, visit tafegippsland.edu.au* is the brand
advertising sign-off. *Enrol now* is the acquisition call to action and is not to be
reworded. Every printed piece carries *National Provider Number 0417* and a Marketing job
number.

---

## Visual foundations

**Colour.** One primary family — greens, led by PMS 3302 (`#004c46`; the logo sheet quotes
`#004136` for the same Pantone, and both values are tokenised). Around it sit three
secondary families: purple/magenta, red/orange/yellow, and blue, each a five-step range.
The palette is deliberately large: *"our organisation is one of many colours, and the
vibrant colour palette brings to life the diversity of our regions, students and courses."*
Use colours from one family together; keep a single piece to one or two background colours.
Neutrals are warm, not cool — warm grey `#e4e1dc` and `#d7d2cb`, with `#d3d2cd` and
`#b8b6b0` for quiet page turning devices. Black is `#121b21` (PMS 433), never pure `#000`.
Colour is applied as flat, full-bleed fields. **No gradients** anywhere in the brand, with
one exception: a protection scrim under reversed type on photography.

**Type.** Two families. **Tiempos Text** (display serif) for headings, sub headings and
pull-out copy in Medium and Regular only — never body copy. **Graphik** (sans) for body
copy and some sub headings, in Black, Bold, Semibold, Medium and Regular. Nine print
paragraph styles are specified exactly (sizes, leading, optical kerning, space before and
after) and are transcribed onto the *Print paragraph styles* card and into
`tokens/typography.css`. Tracking is tight throughout — optical −25 on most styles.
Headings are sentence case and generously sized: Heading_01 is 50pt on 50pt leading, so
headings set solid, and short lines are the norm.

**Spacing and layout.** The system is print-first and millimetre-based. DL: 3mm bleed, 7mm
sides, 10mm top. A4: 3mm bleed, 18mm sides and top, with a 70mm band from the top of a
cover holding the heading and stand-first. Internal, untrimmed printing switches to 5mm
clear margin (13mm sides on A4). Logo position: left of page, top left first preference on
customer-facing work, bottom left second; internal documents take top left on covers and
top or bottom right on subsequent pages. There is no fixed rule beyond that — the logo must
simply read clearly and be prominent.

**The page turning device.** The brand's one signature graphic: a turned page corner,
informed by the transformation idea — *"as new chapters begin in the lives of our students,
a page turns."* Size and angle vary freely; the position does not. Bottom right corner
only, brand palette colours only, used with restraint (one per page or screen; covers carry
it, internal spreads mostly don't). Sub-brand pairings are fixed: Safe TAFE uses its green
and yellow, Koorie Services the Aboriginal flag colours, Student Support Services its two
greens.

**Backgrounds.** Either a flat palette colour or a full-bleed photograph. No textures, no
patterns, no repeating motifs, no stock gradients.

**Imagery.** Real people in real learning and working environments, reflecting the
personality traits — passionate, determined, genuine, forward thinking. Subjects may look
at or away from camera; testimonial portraits look at camera and stay informal. Never
staged, never idle, never a person doing nothing. Colour is natural and unfiltered: daylit
workshops and classrooms, warm skin tones, high-vis yellow and workshop timber recurring;
one dark studio treatment exists for portraiture. No grain, no duotone, no black and white
except in monochromatic print environments. Stock photography only when the library has no
suitable image and it cannot be shot.

**Illustration.** A deliberately simple, non-specialist character style: start with a
rectangle body, add straight-line arms and legs, define shapes with lines, add details.
White shapes are outlined; black and green shapes are not. Skin is left uncoloured. Two
composition scales — *clusters* (few elements, any application) and *stories* (richer
compositions for covers and spreads). **The illustration artwork is vector art in the
InDesign source and could not be extracted, so it is not included here** — do not redraw
it, request the files from Marketing.

**Corners, borders and shadow.** Square corners, radius 0 — there is not a rounded card
anywhere in the guide. Rules are 0.5pt at 60% black. No drop shadows, no inner shadows, no
outlined "card" containers: content is separated by flat colour blocks, hairline rules and
whitespace. Cards, where they exist, are simply colour fields with type on them.

**Transparency and blur.** None in print. On screen, transparency appears only as the dark
green protection scrim over photography so reversed type stays legible. No frosted glass,
no blur.

**Motion, hover and press.** The guide predates any motion specification and defines none.
For screen work: short, plain transitions (120–320ms, standard ease), no bounce, no
parallax, no decorative animation. Hover on the website's dark green buttons darkens toward
`#00774c`; text links move from `#00774c` to `#004136` and stay underlined where they were
underlined. Press states shift colour rather than scaling. These are documented as
extensions, not as brand rules — confirm with Marketing before shipping anything animated.

---

## Iconography

**There is no TAFE Gippsland icon system in the style guide.** Sections 2.0–9.0 contain no
icon library, no icon font, no glyph sheet and no drawing rules for icons. What exists:

- **Website line icons.** The course-category grid on tafegippsland.edu.au uses a set of
  single-weight line icons — a paw for Animal Studies, crossed tools for Building Trades, a
  briefcase for Business, scissors for Hair, Beauty & Make-Up, a heart for Health, an open
  book for Year 11, 12, VCAL & VCE, a clock for Short Courses, a monitor for Online
  Courses. These live in the site's CMS (Squiz), not in the style guide, so **the source
  files were not available**. See `reference/website-home.png`.
- **Instructional marks inside the guide.** ✔ ✘ ☞ ✍ are used as editorial annotation in the
  PDF itself. They are not brand assets.
- **Social icons.** Section 9.2 refers to a social media icon set held by Marketing. Not
  supplied.
- **The Aboriginal flag** is a required element in all Koorie Services communications. Not
  supplied; obtain the correct artwork rather than reproducing it.

**Substitution — flagged.** For prototyping, use [Lucide](https://lucide.dev) from CDN at
`stroke-width: 1.75`, which is the closest freely available match to the website's
single-weight geometric line icons. This is a stand-in, not the brand set:

```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
```

Icons are sparse in this brand — colour, type and the page turning device carry the work.
Do not add an icon to something the guide would set in type. Emoji are never used.

---

## Logos and assets

`assets/logo/` holds the master logo in three forms: the original crop, a transparent
version, and a reversed (white) version generated from it.

**Caveat, and an ask.** The logo files here are **180 × 72 px raster crops** taken from the
supplied PDF — the vector artwork was not provided. They are adequate for on-screen
prototyping at small sizes and will look soft in print or at large sizes. Please supply the
EPS/SVG/AI master (and, if it exists, the single-line variant, which the guide describes for
long formats but which is not reproducible from this PDF at usable quality).

**The TAFE Victoria logo** is required on the back page of every piece and on the website
footer. It is a Victorian Government asset and is not included — the templates leave a
labelled space for it.

**Sub brands** (Safe TAFE, Koorie Services, Student Support Services, the restaurants and
hair salons) do not have logos: the guide is explicit that there is one logo, and sub brands
carry *identifiers* — colour palettes, word marks and illustration treatments. Only their
colour palettes were recoverable; the Student Support Services "Your happy place" word mark
and the restaurant/salon marks were not.

## Known gaps

1. **Fonts.** Tiempos Text and Graphik are licensed and were not supplied. This system loads
   **Martel** (display) and **Lato** (body) from Google Fonts — the guide's own sanctioned
   website substitutes, section 2.5.2 — and keeps `--font-display-print` /
   `--font-body-print` pointing at the real families for production files. Georgia and Arial
   remain the Microsoft Office fallbacks. Please upload the Tiempos Text and Graphik files
   if screen work needs to match print exactly.
2. **Illustrations** — vector, not extractable. Not included.
3. **Page turning device** — reconstructed as two flat triangles from the device as built on
   the website. Replace with the real vector artwork when supplied.
4. **Icon set** — not in the guide; Lucide substituted and flagged above.
5. **Slide template** — the guide contains no PowerPoint or Keynote template. The slide deck
   template here is extrapolated from the print applications in section 4 (covers, colour
   fields, the page turning device, the type ladder) at 16:9. If an official deck exists,
   send it and this will be rebuilt against it.
6. **Signage, stationery, uniforms, merchandise and vehicle decals** (sections 7 and 8) are
   described in the guide but out of scope here.

