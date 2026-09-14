import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { salaryBands } from '../data/placementData'

export function SalaryLandscape() {
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
    <section ref={sectionRef} id="salary" className={`salary dark section-anchor ${barsVisible ? 'is-visible' : ''}` }>
      <div className="salary-intro">
        <p className="eyebrow eyebrow-light">The offer landscape</p>
        <h2 className="section-scroll-heading">Look at the shape of the year.</h2>
        <p>The published placement summary reports approximate offer bands. This visualization preserves that uncertainty instead of implying exact offer-level data.</p>
        <div className="salary-min"><span>Minimum campus compensation</span><strong>≈ ₹4L</strong></div>
      </div>
      <div className="salary-chart" aria-label="Approximate salary distribution bands">
        {salaryBands.map((band, index) => (
          <div className="salary-row" key={band.label}>
            <div className="salary-label"><span>{band.label}</span><b>{band.count}</b></div>
            <div className="salary-track"><i style={{ width: `${band.width}%`, ['--bar-delay' as string]: `${index * 90}ms` } as CSSProperties} /></div>
            <p>{band.note}</p>
          </div>
        ))}
        <div className="salary-outlier">
          <div className="salary-outlier-label"><span>Highest annual compensation</span><small>Aviatrix</small></div>
          <div className="salary-scale-line"><span className="salary-dot" /></div>
          <strong>₹43.5L</strong>
        </div>
      </div>
    </section>
  )
}
