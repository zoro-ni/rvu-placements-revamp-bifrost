# RVU Placement Website Revamp

> A student-led redesign concept for the **RV University Placement Website Revamp Competition 2026**.

**Live website:** https://rvu-placement.vercel.app/  
**GitHub:** https://github.com/zoro-ni/rvu-placements-revamp-bifrost

---

## The Idea

### Placement as Proof.

RV University's placement experience serves more than one audience.

Students want clarity on opportunities and preparation.  
Parents want confidence, transparency, and support.  
Recruiters want a clear path to capable, industry-ready talent.

This redesign brings those needs into one placement experience built around a simple narrative:

**DISCIPLINES → PREPARATION → OPPORTUNITIES → OUTCOMES**

Rather than presenting placements as a conventional list of recruiters and salary figures, the website treats the placement ecosystem as a story - showing how students prepare, where they come from, how they are supported, who appears in the placement records, and what outcomes follow.

---

## Design Approach

The redesign combines RV University's institutional identity with an editorial, data-led interface.

### Editorial, not corporate

Large typography, generous spacing, structured grids, and restrained motion create a placement experience that feels closer to an annual report than a conventional corporate recruitment site.

### Three audiences, one ecosystem

Students, Parents, and Recruiters have distinct needs, so each receives a dedicated journey while remaining part of the same placement ecosystem.

### Data as composition

Placement statistics, school-level talent, salary ranges, and organisation records are treated as visual content rather than isolated numbers.

### Honest by design

Where published figures or placement records have limitations or inconsistencies, the experience preserves that uncertainty instead of silently inventing a cleaner story.

---

## Key Experiences

- **Student journey** - understand eligibility, preparation, school support, placement expectations, and opportunities.
- **Parent journey** - understand the placement ecosystem, student support, outcomes, and institutional process.
- **Recruiter journey** - understand the talent pool, hiring process, recruitment route, and engagement with RVU.
- **Placement outcomes** - interactive representation of offers, salary ranges, and placement statistics.
- **Talent landscape** - explore the distribution of students across schools and programmes.
- **Organisation wall** - a continuously animated two-row record of organisations appearing in the placement records.
- **Rules & Regulations** - a visual, accessible summary of placement requirements with a direct path to RV University's published placement information.

---

## Visual Language

**Primary palette**
- RVU Ink - `#233039`
- RVU Gold - `#D7AC54`

**Typography**
- Cantarell - primary interface typeface
- Playfair Display - editorial accent typeface

The visual system intentionally avoids heavy gradients, glassmorphism, excessive cards, and generic SaaS patterns in favour of typography, structure, photography, and data.

---

## Data & Sources

Placement statistics, programme information, placement-process content, eligibility requirements, and governance information are based on RV University's published placement information.

Organisation information used in the organisation wall comes from student-maintained placement records used for this design concept and is presented as an organisation record rather than a blanket claim of confirmed RVU recruitment.

Where published figures do not reconcile cleanly, the site preserves the published values rather than silently inferring a correction.

---

## Technology

- React
- TypeScript
- Vite
- Motion
- GSAP
- Responsive CSS

---

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

## Project Structure

```text
src/
  components/   Reusable page and interaction components
  data/         Placement and audience content
  styles/       Global and component styling
public/         Images, logos, and static assets
```

---

## Deployment

The project is configured for Vercel deployment through the included Vite configuration and `vercel.json`.

**Production:** https://rvu-placement.vercel.app/

---

## Competition Context

This repository contains the implementation for the **RV University Placement Website Revamp Competition 2026**.

It is a **student design concept** and is not an official RV University website or institutional publication.

---

## Team

**RV University - Student Design Concept · 2026**
