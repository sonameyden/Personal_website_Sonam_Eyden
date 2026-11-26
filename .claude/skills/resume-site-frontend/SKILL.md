---
name: resume-site-frontend
description: "Use when building, restyling, refactoring, or reviewing the personal resume website: page sections (hero, about, experience, projects, skills, education, contact), layout, styling, responsiveness, print/PDF version, accessibility, SEO, performance, or deployment builds."
---

# Resume Website Frontend Best Practices

The site is a resume. Its job is to let a recruiter or hiring manager find out,
in under a minute, who the owner is, what they have done and how to reach
them. Everything on the page serves that; nothing on it is filler.

For visual direction (new sections, a redesign, critique, polish) use the
`impeccable` skill: this site is mostly **Experience** mode (a portfolio) with
a **Read** core (the resume content). For a rules audit use
`web-design-guidelines`. For the wording of the content itself use
`resume-content`.

## This repository at a glance

Decided on 26 November 2026, before any code existed. Once the project is
scaffolded, add the real dev command, port, build command and file layout
here, and keep them current.

- Stack: **Astro**, static output, no backend. Hosting: **GitHub Pages**
  (Vercel as fallback). See `PRODUCT.md` → Stack.
- Content: one data file rendered by the pages, built from
  `resume-source/MASTER_FACTS.md` (the only source of facts).
- Design context: `PRODUCT.md` (written) and `DESIGN.md` (created by
  `impeccable` new-work when the visual direction is chosen).

## Content ownership

- The owner's real resume is the only source of facts. Do not invent jobs,
  dates, titles, metrics, testimonials, logos, certifications or links.
- No placeholder text left in a shipped page: no lorem ipsum, "Your Name",
  `example.com`, fake phone numbers or stock "Project 1/2/3" cards. Where a
  fact is missing, ask the owner, or leave the section out.
- Content lives in the content source, not hardcoded in components, so the
  web page and the print/PDF version show the same facts.

## Structure

- One page with clear sections is the default: hero (name, role, one-line
  pitch, primary contact), experience, projects, skills, education, contact.
  Add pages only when a project needs a real case study.
- Sections are `<section>` with a heading; headings go in order (one `<h1>`,
  the owner's name or role). Navigation is anchor links that also work
  without JavaScript.
- Reverse-chronological order for experience and education.
- Contact must be reachable from the first viewport (email link, LinkedIn,
  GitHub, resume PDF download).
- When you replace a component or section, delete the old one in the same
  change.

## Styling

- Design tokens (CSS custom properties) for colour, type, spacing and radius;
  no stray hex values or ad hoc pixel spacing in components.
- Responsive from 360px wide upward, with no horizontal scroll. Long words,
  URLs and email addresses wrap.
- Respect `prefers-reduced-motion`; animation is an accent, never a gate to
  the content. Content is readable with JavaScript off where the stack allows.
- If there is a dark theme, both themes meet contrast and follow
  `prefers-color-scheme` by default.
- Images (headshot, project screenshots) are optimised, sized with
  `width`/`height`, lazy-loaded below the fold and have meaningful `alt`
  text.

## Print and PDF

- A `@media print` stylesheet (or a separate print page) turns the site into
  a clean one-to-two-page resume: no navigation, no animation, black on white,
  links shown as text.
- If a downloadable PDF is offered, it must match the site's current content.

## Accessibility, SEO and performance

- Text 4.5:1, large text and icons 3:1. Visible focus on every link and
  button. Icon-only links (GitHub, LinkedIn) have an accessible name.
- `<title>`, meta description, Open Graph and Twitter card tags, a favicon,
  `lang` on `<html>`, and canonical URL once the domain is known.
- Fast first paint: few or no web-font weights, no heavy libraries for
  effects a few lines of CSS can do. Aim for a green Lighthouse run.
- Never put API keys or private data in client code. The owner's email and
  phone appear only if the owner wants them public.

## Checks before you say it is done

1. Run the project's build (and lint, if set up) and read the output.
2. Look at the rendered page at 360px, 768px and 1440px wide, in each theme,
   and in print preview (`impeccable shot` or a browser).
3. Tab through the page once with the keyboard.
4. Search the page for placeholder text and confirm every fact against the
   owner's resume.
5. Report what you checked and what you did not. Say so if there are no
   automated tests.
