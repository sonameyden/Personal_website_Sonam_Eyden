# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated (owner asked for a recommendation, 26 Nov 2026): **Astro**, fully
static output, with all resume content in one data file rendered by the
pages, so the web page, print view and any PDF show the same facts. Hosting:
**GitHub Pages** (free, fits the owner's existing GitHub account
`sonameyden`); Vercel is the fallback if a custom domain or previews are
needed. No backend, database or client framework unless a later feature
needs one.

## Users

A general personal website, read equally by two audiences:

- **Research supervisors and fellowship panels** (for example IIT Delhi
  IIRF, CERN openlab / Summer Student) checking whether Sonam can do careful,
  self-directed research: what the hydrology calibration work is, what is
  published, how results are reported.
- **Engineering recruiters and hiring managers** (for example Google SWE /
  Forward Deployed Engineer) checking what Sonam has built and shipped, with
  which stack, and how well it was tested.

Both usually arrive from a link on a CV, application or LinkedIn, skim for
under a minute, then open one project or paper in depth.

## Product Purpose

Show who Sonam Eyden is (a 3rd-year B.E. Information Technology student at
the College of Science and Technology, Royal University of Bhutan, working
as an AI engineer and independent researcher), what Sonam has built and
researched, and how to get in touch. Success: a visitor can name Sonam's
strongest work and find the email, GitHub or LinkedIn within the first
screen, and can go deeper into any project without leaving the site.

## Positioning

Recommended by Claude and accepted as the working line (owner asked for a
recommendation): **builds AI systems for real problems in Bhutan, and
measures whether they work.** The evaluation habit is the thread nobody else
can claim with the same evidence: a 138-case grounding gate on TourSync,
542-message evaluation with two LLM judges on DrukSerenity, 60-document
harness with 0 false accepts on the Document Intake Agent, physical
plausibility checks and preliminary results labelled as preliminary in the
calibration research. The Bhutan setting (Dzongkha, glacial lakes,
Punatsangchu basin, government platforms) is the context, not a gimmick.

## Operating Context

- Visitors come from CVs and applications that already list the facts; the
  site adds depth (project write-ups, research narrative, links to code and
  the paper) rather than repeating the one-page CV.
- Read on laptops by recruiters and supervisors, and on phones from LinkedIn.
- Some readers will print it or want a PDF of the resume.

## Capabilities and Constraints

- Sections: introduction, research, engineering experience, projects,
  publications and talks, skills, education, contact. Detailed case studies
  where the evidence exists (calibration co-pilot, TourSync, DrukSerenity,
  Document Intake Agent).
- Single source of facts: `resume-source/MASTER_FACTS.md`; its "Decisions"
  section overrides every CV.
- Public contact: email, LinkedIn, GitHub only. **Never the phone number.**
- Never published: CID or student number, grades and transcript, other
  people's contact details from letters.
- Decided 26 Nov 2026 (owner accepted Claude's recommendations):
  - **Domain:** published from the repository
    `sonameyden/Personal_website_Sonam_Eyden` at
    `https://sonameyden.github.io/Personal_website_Sonam_Eyden/` (Astro `base`
    set to match). A custom domain (e.g. `sonameyden.com`) may come later;
    then `base` is removed.
  - **Headshot:** optional. One small photo beside the name if the owner
    supplies one; the design must look complete without it.
  - **PDF:** yes. One general resume PDF generated from the same data and
    print layout (never hand-maintained, never with the phone number).
    Tailored CVs stay private.
  - **Repositories linked:** `doc-intake-agent`, `Project_2_AURA`,
    `AURA_feel_and_experience_Music`,
    `Smart-Public-Toilet-Smoke-and-Hygiene-Notification-System`,
    `Genetics_mutation_classification`.
    `Glof_flood_modeling_bhutan_prototype` only after the owner pushes the
    model notebook (today it holds one EDA notebook).
    **Never linked:** `drukserenity` (empty; the paper and DOI are the
    evidence), `Cyber_watchdog_frontend_initail` (a disconnected mock-up
    that contradicts the backend credit), lab reports and coursework apps.
    `kaggle-arc-prize-2026` and `Identifying_data_mentions_in_scientific_papers`
    are left out unless the owner asks for an "Other work" list.
- Undecided: blog or writing section (none planned).

## Brand Commitments

- Name: **Sonam Eyden**.
- Voice: plain, specific and honest, as in the CVs: numbers stated exactly,
  preliminary results called preliminary, team work credited ("team of 2",
  "10 of 15 commits").

## Evidence on Hand

- CVs: `resume-source/cvs/` (newest: `Sonam_Eyden_CV_IIT_Research_Internship`).
- Merged facts: `resume-source/MASTER_FACTS.md`.
- Research write-ups: `resume-source/research/` (calibration co-pilot notes
  and documentation, research-interest statement).
- Presentation certificates, ICSciEnTec 2025 and 2026:
  `resume-source/certificates/`.
- Published paper: Zorig Melong vol. 9 no. 1, doi:10.17102/zmv9.i1.013.
- Public code: github.com/sonameyden (approved links listed under
  Capabilities and Constraints).
- Absent, must not be invented: testimonials, employer logos, screenshots of
  client systems (TourSync and the GovTech lakehouse are government work;
  confirm before showing anything), headshot (until supplied), live demo URLs.

## Product Principles

1. Every claim traces to the fact sheet; no rounding up, no filler.
2. Show the evidence, not adjectives: metrics, evaluation method and links
   to code or paper beat descriptions of skill.
3. Serve both audiences in one page: research and shipped engineering sit
   side by side, each reachable in one click.
4. Contact is never more than one scroll or one click away.
5. Respect privacy: client confidentiality and personal identifiers stay off
   the site.

## Accessibility & Inclusion

Target WCAG 2.2 AA: readable on slow mobile connections in Bhutan (light
pages, few font files), keyboard navigable, works with reduced motion and
with JavaScript off for the core content, clean print stylesheet.
