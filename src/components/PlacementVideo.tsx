import HeroVideoDialog from './HeroVideoDialog'

const videoSrc = 'https://www.youtube.com/embed/oV5zD2mh40A'
const thumbnailSrc = 'https://img.youtube.com/vi/oV5zD2mh40A/maxresdefault.jpg'

export function PlacementVideo() {
  return (
    <section id="placement-video" className="placement-video section-anchor" aria-labelledby="placement-video-title">
      <div className="placement-video-copy">
        <p className="eyebrow">Inside the placement office</p>
        <h2 className="section-scroll-heading" id="placement-video-title">
          The people behind the process.
        </h2>
        <p>
          Corporate &amp; Alumni Relations brings students, schools and employers together through the placement and internship process.
        </p>
        <div className="placement-office-points">
          <article><span>01</span><div><strong>Student coordination</strong><p>Registration, eligibility and recruitment coordination across Schools.</p></div></article>
          <article><span>02</span><div><strong>Employer engagement</strong><p>Connecting organisations with the relevant talent and hiring route.</p></div></article>
          <article><span>03</span><div><strong>Internships &amp; placements</strong><p>Supporting experiential opportunities and full-time recruitment.</p></div></article>
        </div>
      </div>
      <HeroVideoDialog
        className="placement-video-dialog-trigger"
        animationStyle="from-center"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt="RV University placement office walkthrough"
      />
    </section>
  )
}
