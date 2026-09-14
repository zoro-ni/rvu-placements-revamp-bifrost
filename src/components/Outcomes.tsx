import { outcomes } from '../data/placementData'
import CountUp from './CountUp'

export function Outcomes() {
  return (
    <section id="outcomes" className="outcomes dark section-anchor">
      <div className="section-grid">
        <div className="section-intro">
          <p className="eyebrow eyebrow-light">The year in numbers</p>
          <h2 className="section-scroll-heading">
            What the <em>2025-26</em> cycle tells us.
          </h2>
          <div className="gold-rule" />
          <p>Reported placement outcomes from RV University's Corporate &amp; Alumni Relations office.</p>
        </div>
        <div className="outcome-grid">
          {outcomes.map((item) => (
            <article className="outcome" key={item.label}>
              <div className="outcome-status">{item.status === 'approximate' ? '≈' : item.status === 'more-than' ? 'more than' : 'reported'}</div>
              <div className="outcome-value">
                {item.numericValue !== undefined ? (
                  <>
                    {item.prefix}
                    <CountUp to={item.numericValue} duration={0.42} separator="," />
                    {item.suffix}
                  </>
                ) : item.value}
              </div>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="method-note">Method note: figures use the wording and qualifiers published by RVU. Approximate figures are intentionally shown as approximate.</p>
    </section>
  )
}
