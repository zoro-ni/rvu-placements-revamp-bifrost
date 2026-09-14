import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import './AccordionGallery.css'

export type AccordionRuleItem = {
  image: string
  label: string
  alt: string
  items: string[]
}

export default function AccordionGallery({
  items,
  defaultIndex = 0,
  height = 430,
  gap = 10,
  radius = 14,
  expandRatio = 0.5,
  duration = 0.55,
  ease = 'power3.out',
  parallax = 0.35,
  trigger = 'hover',
}: {
  items: AccordionRuleItem[]
  defaultIndex?: number
  height?: number
  gap?: number
  radius?: number
  expandRatio?: number
  duration?: number
  ease?: string
  parallax?: number
  trigger?: 'hover' | 'click'
}) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const panelRefs = useRef<Array<HTMLDivElement | null>>([])
  const mediaRefs = useRef<Array<HTMLDivElement | null>>([])
  const detailRefs = useRef<Array<HTMLDivElement | null>>([])
  const activeRef = useRef(Math.min(Math.max(defaultIndex, 0), Math.max(items.length - 1, 0)))
  const [active, setActive] = useState(activeRef.current)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const applyLayout = useCallback((animate = true) => {
    const panels = panelRefs.current
    const root = rootRef.current
    if (!root || !panels.length) return

    const ratio = Math.min(Math.max(expandRatio, 0.25), 0.75)
    const count = items.length
    const grow = count > 1 ? (ratio * (count - 1)) / (1 - ratio) : 1
    tlRef.current?.kill()
    const tl = gsap.timeline()
    const dur = animate ? duration : 0

    panels.forEach((panel, index) => {
      if (!panel) return
      const isActive = index === activeRef.current
      const media = mediaRefs.current[index]
      const detail = detailRefs.current[index]
      const drift = (activeRef.current - index) * parallax * 4

      tl.to(panel, {
        flexGrow: isActive ? grow : 1,
        duration: dur,
        ease,
        boxShadow: isActive ? '0 18px 38px -22px rgba(0,0,0,.32)' : '0 10px 30px -22px rgba(0,0,0,.22)',
      }, 0)

      if (media) {
        tl.to(media, {
          x: isActive ? 0 : drift,
          scale: isActive ? 1.01 : 1,
          filter: isActive ? 'grayscale(0)' : 'grayscale(.28)',
          duration: dur,
          ease,
        }, 0)
      }

      if (detail) {
        tl.to(detail, {
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 12,
          duration: animate ? Math.min(duration, 0.35) : 0,
          ease,
        }, isActive ? 0.08 : 0)
      }
    })

    tlRef.current = tl
  }, [duration, ease, expandRatio, items.length, parallax])

  useEffect(() => {
    applyLayout(false)
    const onResize = () => applyLayout(false)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      tlRef.current?.kill()
    }
  }, [applyLayout])

  useEffect(() => {
    applyLayout(true)
  }, [active, applyLayout])

  const activate = (index: number) => {
    if (index === activeRef.current) return
    activeRef.current = index
    setActive(index)
  }

  return (
    <div
      ref={rootRef}
      className="accordion-gallery"
      style={{ '--ag-gap': `${gap}px`, '--ag-radius': `${radius}px`, height: `${height}px` } as React.CSSProperties}
      role="list"
      aria-label="Placement rules accordion"
    >
      {items.map((item, index) => {
        const isActive = index === active
        return (
          <div
            key={item.label}
            ref={el => { panelRefs.current[index] = el }}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            aria-controls={`rule-panel-${index}`}
            aria-label={`${item.label}${isActive ? ', expanded' : ', collapsed'}`}
            onMouseEnter={() => trigger === 'hover' && window.matchMedia('(hover: hover)').matches && activate(index)}
            onFocus={() => activate(index)}
            onClick={() => activate(index)}
            onKeyDown={event => {
              if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                event.preventDefault()
                activate((index + 1) % items.length)
              }
              if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                event.preventDefault()
                activate((index - 1 + items.length) % items.length)
              }
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                activate(index)
              }
            }}
          >
            <div className="ag-panel__media" ref={el => { mediaRefs.current[index] = el }}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" draggable={false} />
            </div>
            <div className="ag-panel__wash" />
            <div className="ag-panel__caption">
              <span className="ag-panel__index">0{index + 1}</span>
              <h3>{item.label}</h3>
            </div>
            <span className="ag-panel__toggle" aria-hidden="true">⌄</span>
            <div id={`rule-panel-${index}`} className="ag-panel__details" ref={el => { detailRefs.current[index] = el }}>
              <ul>
                {item.items.map(rule => <li key={rule}>{rule}</li>)}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
