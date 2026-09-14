# RVU Placement Website — Final QA Pass

Date: 14 September 2026
Baseline: V66 — text-only desktop audience hero

## 1. Interaction audit

**PASS — internal navigation**

- Main-page hash navigation checked against rendered `id` anchors.
- Audience page navigation uses existing `/students`, `/parents`, `/recruiters` routes.
- Vercel SPA rewrite is present in `vercel.json`.

**PASS — audience switcher**

Students, Parents and Recruiters links are present in the desktop audience bar and mobile menu.

**PASS — CTAs**

Recruitment CTAs consistently use the same Google Form URL in the header, audience pages and recruiter section.

**PASS — tracker**

Placement tracker CTA points to the existing Google Sheets tracker URL used by the project.

**PASS — rules source**

Rules section links to the official RVU placements page.

**PASS — external links**

External links use `target="_blank"` with `rel="noreferrer"` where appropriate.

**PASS — mobile menu**

- Closed menu links are removed from keyboard tab order.
- Escape closes the menu.
- Focus returns to the menu button after close.
- Body scroll is locked while the menu is open.

## 2. Accessibility pass

**PASS — image alt coverage**

All `<img>` elements in the TSX source have `alt` text or are explicitly marked decorative with `aria-hidden`.

**PASS — focus styling**

A global `:focus-visible` outline is present using the RVU gold accent.

**PASS — keyboard interaction**

School selectors and the rules accordion support keyboard input. Rule panels expose `aria-expanded` and `aria-controls` relationships.

**PASS — reduced motion**

The organisation ticker and CountUp animation now respect `prefers-reduced-motion: reduce` in addition to the existing CSS motion suppression.

**NOTE — dialog**

The placement video uses a native `<dialog>` with `showModal()`, a labelled close button, and a labelled iframe.

## 3. Performance pass

**PASS — image loading**

- Hero image is marked high priority and decoded asynchronously.
- Below-the-fold images use lazy loading where appropriate.
- Rule/gallery images now use lazy loading + async decoding.
- Student story and visual-interlude images already use lazy loading.

**PASS — organisation wall**

The large organisation set is reused through a motion rail rather than duplicated manually in JSX. Logos fall back to text when an icon is unavailable.

**PASS — animation behavior**

The continuous organisation wall and CountUp animations now stop moving under reduced-motion preferences.

## 4. Visual sweep

The current V66 desktop hero is intentionally text-only in the negative space after removing the experimental symbols. Mobile/tablet composition remains unchanged.

Internal hash references were checked programmatically; no missing referenced anchors were found.

## 5. Verification limitations

A production build could not be marked green in this container because `npm ci` timed out while fetching packages and the extracted environment did not contain the React type definitions required by `tsc`.

External Google Form/Sheet URLs also returned cache-miss responses in web retrieval, so live endpoint availability was not claimed.
