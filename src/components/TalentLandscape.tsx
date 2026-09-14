import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { schools } from '../data/placementData'
import CountUp from './CountUp'

const capabilityMap: Record<string, string[]> = {
  SoCSE: ['Computing', 'Engineering', 'Technical problem-solving'],
  SoEB: ['Economics', 'Commerce & management', 'Business analysis'],
  SDI: ['Design', 'Innovation', 'Making & prototyping'],
  SoFMCA: ['Filmmaking', 'Media', 'Creative practice'],
  SoLAS: ['Psychology', 'Environmental science', 'Politics & international relations'],
  SoL: ['Law', 'Cyber law', 'Criminology & forensic sciences'],
}

export function TalentLandscape() {
  const [active, setActive] = useState('SoCSE')
  const selected = useMemo(() => schools.find(s => s.shortName === active) ?? schools[0], [active])
  const capabilityAreas = capabilityMap[selected.shortName] ?? []
  const sectionRef = useRef<HTMLElement | null>(null)
  const [barsVisible, setBarsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el || barsVisible) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => setBarsVisible(true))
        observer.disconnect()
      }
    }, { threshold: 0, rootMargin: '0px 0px -28% 0px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [barsVisible])

  return (
    <section ref={sectionRef} id="talent" className={`talent section-anchor ${barsVisible ? 'is-visible' : ''}` }>
      <div className="section-headline">
        <div>
          <p className="eyebrow">The talent ecosystem</p>
          <h2 className="section-scroll-heading">Students across six schools. One talent pool.</h2>
        </div>
        <p className="section-deck"><CountUp to={1608} separator="," duration={0.42} /> students are eligible for recruitment across six interdisciplinary schools. The scale is concentrated-but the capabilities are not.</p>
      </div>

      <div className="talent-grid">
        <div className="school-list" role="list" aria-label="Schools and eligible student counts">
          {schools.map((school, index) => {
            const ratio = (school.eligibleStudents / 737) * 100
            const isActive = active === school.shortName
            return (
              <button
                key={school.shortName}
                className={`school-row ${isActive ? 'is-active' : ''}`}
                onClick={() => setActive(school.shortName)}
                aria-expanded={isActive}
                aria-controls="selected-school-panel"
              >
                <span className="school-meta"><b>{school.shortName}</b><span><CountUp to={school.eligibleStudents} separator="," duration={0.42} /></span></span>
                <span className="school-bar"><i style={{ width: `${Math.max(ratio, 4)}%`, ['--bar-delay' as string]: `${Math.min(index * 70, 350)}ms` } as CSSProperties} /></span>
                <span className="school-name">{school.name}</span>
              </button>
            )
          })}
          <div className="bar-note">Bars are proportional. The 4-student SoFMCA cohort uses a minimum display width for legibility; the value remains 4.</div>
          <div className="data-note"><strong>Data note:</strong> RVU publishes an overall eligible-student figure of 1,608 and school-wise figures that total 1,591. Both figures are retained as published; no reconciliation has been inferred.</div>
        </div>

        <aside id="selected-school-panel" className="school-detail" aria-live="polite">
          <div className="detail-index">Selected school</div>

          <div className="detail-hero-line">
            <div className="detail-number" aria-label={`${selected.eligibleStudents} eligible students`}>{selected.eligibleStudents.toLocaleString()}</div>
            <h2 className="detail-count-label">eligible {selected.eligibleStudents === 1 ? 'student' : 'students'}</h2>
          </div>

          <div className="detail-school-name">{selected.name}</div>
          <div className="detail-capability">{selected.capability}</div>

          <div className="detail-divider" />
          <div className="detail-label">Programme-linked areas</div>
          <div className="capability-list" aria-label="Programme-linked areas">
            {capabilityAreas.map((area, index) => (
              <span key={area} style={{ '--item-delay': `${index * 45}ms` } as CSSProperties}>{area}</span>
            ))}
          </div>

          <div className="detail-divider detail-divider-tight" />
          <div className="detail-programme-head">
            <div className="detail-label">Programme breakdown</div>
            <div className="detail-programme-count">{selected.programmes.length} programmes</div>
          </div>
          <ul>
            {selected.programmes.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  )
}
