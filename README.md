# RVU Placement V72

Final targeted fix for the organisation wall animation.

## What changed
- Replaced the requestAnimationFrame-driven logo rail with a compositor-friendly CSS marquee.
- The actual rendered width of one organisation track determines the duration.
- Desktop/laptop speed: 58 px/s.
- Mobile speed: 44 px/s.
- Row 1 moves left; Row 2 moves right.
- Reduced-motion preference still disables the animation.
- No other site content/layout was intentionally changed.

## Why
The previous implementation behaved inconsistently across viewport classes: mobile moved while laptop/desktop could appear static. V72 uses a two-copy CSS marquee so the loop is independent of viewport width and does not depend on a per-frame JS transform loop.

## Build note
A local dependency install/build attempt timed out in the working container. No clean production build is claimed here.
