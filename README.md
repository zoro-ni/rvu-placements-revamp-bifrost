# RVU Placement Website Revamp

A student-led redesign concept for the **RV University Placement Website Revamp Competition 2026**.

The project is designed as an editorial, data-led placement experience for three audiences: **Students, Parents, and Recruiters**.

## Concept

**Placement as proof.**

Instead of treating placements as a list of salary numbers, the experience connects:

**Disciplines → Preparation → Employers → Outcomes**

The interface combines RVU's institutional visual language with data storytelling, audience-specific journeys, and restrained motion.

## Highlights

- Audience-specific experiences for Students, Parents, and Recruiters
- Responsive desktop, tablet, and mobile layouts
- Placement outcomes and salary storytelling
- Interactive school/talent breakdowns
- Placement preparation and Rules & Regulations sections
- Animated organisation wall using organisations appearing in student-maintained placement records
- Audience-specific content and CTAs
- Accessible accordion interactions and keyboard focus states
- Reduced-motion support for animated UI
- Official RVU imagery and student-provided story photography where appropriate

## Organisation Wall

The organisation wall is intentionally presented as an **organisation record**, not as a blanket claim that every listed organisation is a confirmed RVU recruiter.

Organisation names are drawn from the student-maintained RVU / RVCE placement records used for this design concept. The animated wall uses a two-row continuous marquee with opposing directions.

## Data & Sources

Placement statistics, programme information, placement-process content, eligibility requirements, and governance information are based on RV University's published placement information.

Organisation names and recruiter-related records are drawn from student-maintained RVU / RVCE placement sheets shared for this design project.

Where the published source contains figures that do not reconcile cleanly, the site preserves the published values rather than silently inferring a correction.

## Tech Stack

- React
- TypeScript
- Vite
- Motion
- GSAP
- CSS / responsive media queries

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/   Reusable page and interaction components
  data/         Placement and audience content
  styles/       Global and component styling
public/         Images, logos, and static assets
```

## Deployment

The project is configured for Vercel deployment through the included Vite configuration and `vercel.json`.

## Competition Context

This repository contains the implementation for the RV University Placement Website Revamp Competition 2026. It is a student design concept and is not an official RV University website or institutional publication.

---

**RV University Placement Website Revamp · 2026**  
Student Design Concept
