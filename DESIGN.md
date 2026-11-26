---
name: Sonam Eyden
description: Measured results on a calm midnight field, for a researcher and AI engineer.
colors:
  bg: "#0b1020"
  surface: "#111831"
  surface-2: "#161f3d"
  line: "#222c4c"
  line-strong: "#34416b"
  text: "#e7ebf6"
  muted: "#a1abc7"
  faint: "#7d88a8"
  aqua: "#5ee0d0"
  blue: "#7aa0ff"
  violet: "#b7a0ff"
typography:
  display:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 6vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  display-case:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.9vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Geist Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "tnum"
  measure:
    fontFamily: "'Geist Mono Variable', ui-monospace, monospace"
    fontSize: "clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  measure-lg:
    fontFamily: "'Geist Mono Variable', ui-monospace, monospace"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  measure-sm:
    fontFamily: "'Geist Mono Variable', ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
rounded:
  focus: "4px"
  base: "10px"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  "9": "7rem"
components:
  button-primary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.05rem"
  button-primary-hover:
    backgroundColor: "color-mix(in oklab, #161f3d 78%, #7aa0ff)"
    textColor: "{colors.text}"
  link-ruled:
    textColor: "{colors.text}"
    padding: "0.35rem 0"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
  nav-link-hover:
    textColor: "{colors.text}"
  ledger-row:
    textColor: "{colors.text}"
    padding: "1.5rem 1rem"
  ledger-row-hover:
    backgroundColor: "color-mix(in oklab, #111831 80%, transparent)"
  ledger-result:
    textColor: "{colors.aqua}"
    typography: "{typography.measure}"
  case-result:
    textColor: "{colors.aqua}"
    typography: "{typography.measure-lg}"
  track-label-engineering:
    textColor: "{colors.blue}"
  track-label-research:
    textColor: "{colors.violet}"
  figure-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.base}"
    padding: "2rem 2rem 1.5rem"
  note-research:
    backgroundColor: "color-mix(in oklab, #b7a0ff 7%, #0b1020)"
    textColor: "{colors.text}"
    rounded: "{rounded.base}"
    padding: "1rem 1.5rem"
---

# Design System: Sonam Eyden

## Overview

**Creative North Star: "The Midnight Ledger"**

The site is a ledger of measured outcomes laid on a calm midnight field. Each piece of work is a ruled row that ends in its number, and that number is set in mono and coloured aqua, because it is a measurement. Everything around the numbers stays quiet: a navy ground, three close tonal steps of indigo, soft white text, and 1px rules that divide content instead of boxing it. The one expressive material is a fine field of streamlines in an aqua→blue→violet blend that sits behind the top of each page, bends gently around the pointer, and fades out before the content begins.

Density is moderate and editorial: a 1200px page, generous section breaks (7rem), and tight, consistent rhythm inside sections. Hue carries meaning, not mood. Aqua marks measurements and link affordances, blue marks engineering work, violet marks research. Motion is restrained and exponential: one entrance on load, hairlines that draw in on intent, chart dots that settle on view, a timeline that fills with scroll. Every one of these resolves to a complete still state.

The system is built to print. A light print palette swaps every colour token, the flow field and navigation are hidden, and external links print their URLs, so the same page serves as a one-page resume.

**Key Characteristics:**
- Midnight navy ground with two indigo surface steps; no light theme on screen.
- Ruled ledger rows, not cards; one shared 9.5rem label column across lists.
- Three role hues: aqua for measurements and links, blue for engineering, violet for research.
- Geist for all text; Geist Mono only for measured numbers.
- The aqua→blue→violet blend appears only as moving line: the flow field and 1px hairlines drawn in on hover or focus.
- Flat: no shadows, no glow; depth comes from tonal steps, hairlines and a masked canvas layer.
- Exponential ease-out motion that is fully still under reduced motion and in print.

## Colors

A near-monochrome midnight-indigo ramp with three cool, light accents, each assigned a meaning.

### Primary
- **Measurement Aqua** (`aqua`): The colour of a measured result. Ledger result values, case-page result values, the "after" dot in charts, the focus outline, the `accent-color`, the link underline tint (at 55% mix) and its hover, the ruled-link hover rule, and the arrow on "Next". It is the only accent a visitor's eye should land on first in a ledger row.

### Secondary
- **Engineering Blue** (`blue`): The engineering track. Track dot and label, timeline nodes and the timeline's scroll fill, list bullets on engineering case pages. Also tints the primary button's hover fill.

### Tertiary
- **Research Violet** (`violet`): The research track. Track dot and label, research timeline nodes, co-pilot dots in the calibration chart, list bullets on research case pages, the research "preliminary" note's border and wash, and the research section's "How the co-pilot works" link. Also used (at 45% mix into the ground) for text selection.

### Neutral
- **Midnight Navy** (`bg`): The page ground everywhere; also the hollow centre of timeline nodes and the browser `theme-color`.
- **Deep Indigo** (`surface`): The figure panel and the ledger-row hover wash (80% mix).
- **Raised Indigo** (`surface-2`): The primary Email pill and the skip link; the highest tonal step.
- **Hairline** (`line`): Every structural 1px rule: ledger row dividers, list dividers, section and footer tops, figure borders.
- **Strong Hairline** (`line-strong`): Resting underlines on ruled links, the chart axis, chart span lines, the timeline track, the scrollbar thumb.
- **Soft White** (`text`): Headings, body copy, link text.
- **Mist** (`muted`): Secondary copy: summaries, thesis, result labels, legend, section descriptors, resting nav links, hollow chart dots.
- **Dusk** (`faint`): Tertiary metadata: dates, periods, years, skill group names, figure captions, axis ticks, separators. Holds at least 4.5:1 on every surface.

### Named Rules
**The Three Roles Rule.** Aqua means measured or clickable, blue means engineering, violet means research. A new element takes an accent only if it carries one of those meanings; otherwise it is neutral.

**The Blend Is Motion Rule.** The aqua→blue→violet blend (`--flow`) is only ever a line that moves or draws: the flow-field streamlines, the experience timeline's scroll fill, and 1px hairlines that scale in from the left on hover or focus (ledger rows, ruled links, the contact email, "Next", and the primary pill's border). It is never a fill, a text colour, or a resting state.

**The Print Swap Rule.** Every colour is a custom property, and the print stylesheet redefines all of them to a light palette (white ground, near-black text, darkened aqua, blue and violet). New colour use goes through the tokens so it prints.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist Variable (same stack)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, monospace), for measured numbers only

**Character:** One technical grotesque does all the speaking, tightened with negative tracking as size grows; its mono sibling appears only where a number is a result, so a glance down the page reads the evidence.

### Hierarchy
- **Display** (600, clamp 3rem→5.75rem, 0.95): The owner's name in the home hero, top-left. Used once per site.
- **Display Case** (600, clamp 2.5rem→4.5rem, 1, max 16ch): The work title at the top of each case page.
- **Headline** (600, clamp 1.875rem→2.75rem, 1.1): Section heads (Selected work, Research, Experience, Skills, Education, Get in touch).
- **Title** (600, clamp 1.375rem→1.75rem, 1.1): Ledger row titles, the research question, case-page section heads, the "Next" title. The hero role line uses this size at weight 500.
- **Title Small** (600, 1.25rem): Timeline roles, more-projects titles, the degree, the publications subhead; publication titles use it at 500 with 1.35 line height.
- **Body** (400, 1.0625rem, 1.65): Running copy. Prose blocks cap at 68ch (`--measure`); ledger summaries at 62ch, timeline lines at 64ch.
- **Body Small** (400, 0.9375rem): Secondary lines: org names, publication venues, experience lines, case-page bylines and fact values, nav links.
- **Label** (400, 0.8125rem, tabular figures): Dates, periods, years, result labels, fact terms, figure sublabels. Sentence case, never uppercase.
- **Measure** (Mono 500, Title size, tabular): The ledger result value, in aqua. **Measure Large** (Mono 500, clamp 2.25rem→3.5rem) is the case-page result. **Measure Small** (Mono 500, 0.8125rem) labels chart dots; axis ticks use mono at 0.75rem.

Headings balance their lines (`text-wrap: balance`); paragraphs use `text-wrap: pretty`.

### Named Rules
**The Mono Means Measured Rule.** Geist Mono is reserved for numbers that are measurements: results, chart values, axis ticks. Dates and periods are not measurements; they stay in Geist with tabular figures.

**The Weight Ladder Rule.** Three weights only: 600 for headings, 500 for the role line, values and publication titles, 400 for everything else.

## Layout

A single centred column: `min(100% − 2 × gutter, 1200px)`, with a fluid gutter of clamp(1.25rem, 4vw, 3rem). Sections are separated by 7rem (space 9) and open with a section head: the headline on the left and a short muted descriptor (max 44ch, 0.875rem) right-aligned on the same baseline; below 720px the descriptor stacks under the headline and aligns left.

Spacing follows a nine-step scale from 0.25rem to 7rem. Inside sections the working steps are 1rem, 1.5rem and 2rem; 3rem and 4.5rem separate major blocks.

Lists are ruled ledgers that share one geometry: a 9.5rem label column (date, year, skill group, chart gauge) and a fluid content column, separated by 1.5rem. The Selected work ledger uses three columns: content, a 12–17rem result column, and a 1.5rem arrow column. Below 720px every ledger collapses to one column; in work rows the result drops under the content and the arrow moves to the top-right.

Two-column compositions (research prose beside the figure at 0.85fr / 1.15fr; skills beside education at 1.4fr / 1fr; case-page body at 68ch beside a sticky 14rem+ facts aside) collapse to one column below 900px, and the aside stops being sticky.

The first viewport on the home page holds the name, role, thesis and contact row, with the work ledger beginning beneath it. Case pages open with title, byline, summary and the result as a large measured number, then a ruled body.

### Named Rules
**The Ledger Rule.** Peer items are ruled rows divided by 1px `line` borders, never a grid of cards. Rows that link get the full-row hover wash and the drawn hairline.

**The Shared Column Rule.** Any label-plus-content list uses the 9.5rem label column, so dates, years and group names align down the page.

## Elevation & Depth

The system is flat. There is no `box-shadow` anywhere. Depth comes from three tonal steps (ground, surface, raised surface), 1px hairlines, and one background layer: the flow-field canvas, fixed behind the whole page, strongest over the first screen and quieter beneath the content. On the home page its mask clears the left 8% and reaches full strength at 52%; on case pages it clears the left half and reaches full strength at 78%, keeping the lines off the header text. Below 720px it gathers in the top-right corner.

### Named Rules
**The Hairline, Not Shadow Rule.** Separation and emphasis use a 1px rule or a tonal step. No shadows, no glow, no blurred halos.

## Shapes

Mostly square-edged: rows, lists and sections are defined by straight 1px rules rather than enclosures. Corners appear only where something is genuinely contained: the figure panel and the research note use a gently curved 10px radius; the primary Email action is a full pill; focus outlines round to 4px. Dots are the recurring small form: 8px track dots, 14px timeline nodes that fill as the rail reaches them, 7px list bullets, 14px chart dots, 12px legend keys.

The arrow is the one icon: a 16-unit inline SVG stroke arrow pointing up-right (1.6 stroke, round caps), in `currentColor`. It nudges 2–3px up-right on hover and is rotated −135° to point back on the case-page return link.

## Components

### Buttons
Calm and quiet: there is one filled action per screen.
- **Shape:** full pill (999px).
- **Primary (Email me):** raised indigo fill, soft white text, padding 0.6rem 1.05rem, a 1px border mixing aqua 50% into the strong hairline.
- **Hover / Focus:** the border turns into the aqua→blue→violet blend (a gradient border-box) and the fill shifts toward blue (78% surface-2). Transitions 0.3s.
- **Secondary (contact row links, Save resume as PDF):** not boxed. Soft white text at 0.9875rem with a 1px strong-hairline bottom border and 0.35rem vertical padding; on hover the border turns aqua and the arrow nudges up-right. The print action is a real `<button>` styled identically to the links.

### Ledger Row (signature)
The work entry. A full-width link row with a 1px top rule, padding 1.5rem 1rem pulled out by 1rem so text aligns with the column. Title (Title size), muted summary, and a byline with the track label and period on the left; the result value in aqua mono with its muted label in the middle column; a faint arrow on the right.
- **Hover:** a deep-indigo wash fades in (0.3s), the arrow turns aqua and moves 3px up-right, and a 1px blend hairline draws in from left to right along the row's bottom edge (0.6s ease-out). Focus-visible draws the same hairline.

### Ruled Links
Inline links inside lists (publication titles, more-projects titles, case-page links, the footer email) carry a resting 1px strong-hairline underline painted as a background, and a 1px blend hairline that scales in over it on hover (and on focus-visible for most). Body links elsewhere use a native underline tinted aqua at 55%, solid aqua on hover, offset 0.22em. The research section's "How the co-pilot works" link takes violet instead, matching its track.

### Track Label
A small dot plus a word ("Research", "Engineering") at 0.875rem in the track colour, used in ledger bylines and case-page bylines. Never uppercase, never above a heading.

### Navigation
- **Home:** a sticky header. At the top of the page it sits on the ground with no fill. Once you scroll it takes a 94% navy ground with a hairline beneath, hides while you scroll down, and slides back (0.45s) as soon as you scroll up or tab into it. The name in soft white at 600 sits on the left and the section links in muted on the right; the section being read is soft white with the signature hairline beneath. Below 720px the links fold into a menu button (two drawn strokes that cross into an ×), which opens a full-width list with hairline separators and includes the resume PDF; Esc or choosing a link closes it. Anchored sections keep 5rem clear above them.
- **Case pages:** a back link with a reversed arrow on the left, Email on the right.
- Hidden in print. A skip link (raised indigo, 10px radius) appears on focus.

### Portrait
The owner's photograph in the first screen. On desktop it sits top-right, beside the intro, at 220–300px wide; below 720px it sits above the name at 104px. It is 4:5 with a 10px radius and a 1px strong-hairline frame, with no glow and no ring, and the flow lines run behind it. On load it develops once: a clip reveals it upward while it comes up from desaturated (1.4s). It is served as WebP with a JPEG fallback at 360 and 720px, and hidden in print.

### Experience Timeline
A 2px rail on the left that runs exactly from the first node's centre to the last. Its fill, the aqua→blue→violet blend running top to bottom, follows a reading line 60% down the screen, and each 14px node lights up (hollow to filled, 85% to full size) as the fill reaches it: blue for engineering, violet for research, aqua for the current role. Ongoing roles come first and carry an aqua "Now" pill beside the date; the rest are ordered by end date, newest first. Each entry has the date in the 9.5rem column, then title, org and a muted line; titles of roles with a work page are ruled links to it. Entries are separated by faint hairlines. Without motion, in print or without JavaScript, the rail is full and every node filled.

### Calibration Figure
A dot plot on a shared NSE axis inside the one contained panel: deep-indigo fill, 1px hairline border, 10px radius, padding 2rem 2rem 1.5rem. Rows are ruled; each lane joins a hollow muted "before" dot to an aqua (set-up fix) or violet (co-pilot) "after" dot with a strong-hairline span. Values sit above dots in mono. On view, span lines grow from the left and dots slide in 24px and fade (1.1s, 0.3–0.35s delay). A visually hidden table carries the same values.

### Research Note
A contained callout for caveats on research pages: violet-tinted ground (7%), violet-tinted 1px border (35%), 10px radius, body-small text.

### Facts Aside
On case pages, a sticky definition list beside the body: faint label terms above body-small values, divided by hairlines. The stack is plain text joined with middle dots, like the home Skills list; links are ruled links.

### Flow Field
The site's background: one fixed canvas behind every page. It has 84 streamlines on desktop and 54 under 720px, scaled by a density factor (0.6 on case pages), seeded from a fixed seed so the composition is identical every visit. Desktop seeds lean to the top-right; phone seeds start off the left edge so the lines sweep across the screen.
- **Drawing:** lines at 16% opacity (20% on phones) with travelling light dashes at 75% (85%).
- **Movement:** a slow invisible current drifts through the upper right and bends the lines with no input; a mouse or pen takes over the current on desktop, and touch never steers it. Scrolling moves the field forward and speeds the light along the lines.
- **Strength:** full over the first screen, settling to 32% opacity on desktop and 34% on phones once you scroll a screen's height into the content.
- **Running:** fades in over 1.6s; phones draw at 30 fps; pauses in background tabs.
- **Masks:** desktop clears the left 8% (left 50% on case pages); phones gather the field in a radial wash in the top-right corner, clear of the intro text.
- **Still:** under reduced motion it draws one still frame of the lines alone at 30% opacity.
- Hidden in print.

### Flow Diagram
On work pages, a pipeline of stages inside the figure panel (surface at 88%, hairline border, 10px radius). It runs left to right on desktop and top to bottom below 900px. Each stage has a faint label above raised-indigo nodes (1px strong-hairline border, 10px radius): a bold title and an optional muted note. A node's border takes the role's hue at 50% (blue for engineering steps, violet for research, aqua for checks and outcomes); aqua nodes also set their title in aqua. Stages are joined by 2px connectors with a small arrowhead; a soft aqua light travels along each connector (2.6s loop, offset per stage), the diagram's one looping motion, which stops under reduced motion. Stages arrive one after another (140ms stagger) when scrolled into view. A caption underneath states the result.

### Before/After Bars
On TourSync's page, three measures, each with a full-length strong-hairline "before" bar and an aqua "after" bar (10px, pill ends), the values in mono at the right. The after bars start at full length and shrink to their true size on view (1.6s, staggered), so the speed-up is watched rather than read. A visually hidden table carries the values.

### Printable Resume
A separate light document page (`/resume/`) that the deploy prints to a two-page A4 PDF on every push. Geist on white, ink text, muted body, and section headings in small tracked caps in print blue (`#1f4fd1`), over a thin rule; a teal (`#0b6e66`) bullet marker. It is drawn from the same content data as the site and never carries the phone number. The site's other print styles still turn any page into a clean light print.

### Motion
One easing for the whole system: exponential ease-out, cubic-bezier(0.16, 1, 0.3, 1). The hero's four intro elements rise 14px out of a 6px blur over 1s with 80ms stagger; the case header does the same once at 0.9s. As you scroll, content blocks reveal once (0.9s, 80ms stagger within a list), each kind differently:
- Rows and blocks rise 22px.
- Section headings rise 12px out of a 6px blur.
- Timeline entries slide in 18px from the left.

They start hidden only when JavaScript has confirmed it can reveal them. Everything else responds to intent or view. `prefers-reduced-motion` and the `?still` URL flag both produce the fully drawn final state.

## Do's and Don'ts

### Do:
- **Do** put every result in Geist Mono, aqua, with tabular figures, and its label in muted sentence case beneath it.
- **Do** divide peer items with 1px `line` rules and align their labels in the 9.5rem column.
- **Do** colour track markers by meaning only: blue for engineering, violet for research.
- **Do** use the aqua→blue→violet blend only as a 1px line drawn in from the left on hover or focus, or in the flow field.
- **Do** use cubic-bezier(0.16, 1, 0.3, 1) for every transition, and make every animated element render complete under reduced motion and in print.
- **Do** route every colour through the custom properties so the print palette swap covers it.

### Don't:
- **Don't** lay out peer items as a grid of cards; the figure panel and research note are the only enclosed blocks.
- **Don't** fill text, surfaces or buttons with the blend gradient, and don't add glow or box-shadows.
- **Don't** set prose, dates or labels in Geist Mono.
- **Don't** open the page with a strip of big standalone numbers; numbers sit in the ledger next to the work they prove.
- **Don't** add a fourth accent hue or use aqua, blue or violet decoratively.
- **Don't** uppercase small labels or place a label above a heading.
