import { ScrollVelocityLogos } from './ScrollVelocityLogos'
import CountUp from './CountUp'

const hiringSteps = [
  ['01', 'Share a role', 'Send the role brief and eligibility criteria.'],
  ['02', 'Receive eligible profiles', 'CAR coordinates the profile flow.'],
  ['03', 'Assess candidates', 'Run your assessment and interview process.'],
  ['04', 'Confirm the offer', 'Close the loop with the candidate and CAR.'],
]

export function Recruiters() {
  return (
    <>
      <section id="recruiters" className="recruiters section-anchor">
        <div className="recruiter-intro">
          <p className="eyebrow">For recruiters</p>
          <h2 className="section-scroll-heading">Recruiting at RVU.</h2>
          <p>Start with a school, a programme or a role brief. CAR coordinates the placement and internship process across schools.</p>
          <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSd7NvofrE_eNnPRsJZd-sG-1TkPb7BauIZHDneOa_jt25n5yg/viewform" target="_blank" rel="noreferrer">Share a role ↗</a>
        </div>

        <div className="recruiter-process">
          <div className="mini-title">A simple route from role to offer</div>
          {hiringSteps.map(([n, t, d]) => (
            <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>
          ))}
        </div>

        <div className="ecosystem">
          <div className="ecosystem-top">
            <div><span className="huge"><CountUp to={250} duration={0.42} separator="," /><span aria-hidden="true">+</span></span><span className="huge-label">recruiting organisations</span></div>
            <p>Reported for 2025-26 across MNCs, GCCs, technology, consulting, finance and startups.</p>
            <div className="ecosystem-mix" aria-label="Employer mix reported by RVU">
              <span>MNCs</span><span>GCCs</span><span>Technology</span><span>Consulting</span><span>Finance</span><span>Startups</span>
            </div>
          </div>
        </div>
      </section>

      <ScrollVelocityLogos />
    </>
  )
}
