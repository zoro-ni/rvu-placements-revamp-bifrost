const RECRUIT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NvofrE_eNnPRsJZd-sG-1TkPb7BauIZHDneOa_jt25n5yg/viewform'


export function Hero() {
  return (
    <section id="overview" className="hero section-anchor">
      <div className="hero-copy">
        <p className="eyebrow">Placement Outcomes 2025-26</p>
        <h1 className="hero-scroll-heading">
          Many disciplines. <em>One launchpad.</em>
        </h1>
        <p className="hero-lede">From computing and business to design, law, media and liberal arts, RVU brings different capabilities into one career ecosystem.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#outcomes">Explore outcomes <span>↓</span></a>
          <a className="btn btn-ghost" href={RECRUIT_FORM} target="_blank" rel="noreferrer">Recruit at RVU <span>↗</span></a>
        </div>
      </div>
      <figure className="hero-media">
        <img src="/hero-rvu-students.jpg" alt="RV University students walking on campus" decoding="async" fetchPriority="high" />
      </figure>
    </section>
  )
}
