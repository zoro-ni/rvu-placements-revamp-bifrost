import { useEffect, useRef, useState } from 'react'
import BorderGlow from './BorderGlow'

const RECRUIT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NvofrE_eNnPRsJZd-sG-1TkPb7BauIZHDneOa_jt25n5yg/viewform'

const links = [
  ['Overview', 'overview'],
  ['Outcomes', 'outcomes'],
  ['Talent', 'talent'],
  ['Preparation', 'preparation'],
  ['Recruiters', 'recruiters'],
]

export function Header() {
  const [stuck, setStuck] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 110)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    window.requestAnimationFrame(() => menuButtonRef.current?.focus())
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${stuck ? 'is-stuck' : ''}`}>
        <a className="brand-lockup" href="#overview" aria-label="RV University placement outcomes home">
          <img src="/rvu-logo-dark.png" alt="RV University" />
        </a>
        <nav className="main-nav" aria-label="Placement page navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <BorderGlow
          className="header-cta-glow"
          backgroundColor="#233039"
          borderRadius={0}
          glowRadius={16}
          glowIntensity={0.72}
          glowColor="40 61 60"
          coneSpread={28}
          animated
          colors={["#D7AC54", "#233039", "#D7AC54"]}
        >
          <a className="header-cta" href={RECRUIT_FORM} target="_blank" rel="noreferrer">Recruit at RVU <span>↗</span></a>
        </BorderGlow>

        <button
          ref={menuButtonRef}
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="mobile-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="mobile-menu-label">Menu</span>
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-nav-panel ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile placement navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>{label}</a>
          ))}
          <a href="/students" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Students</a>
          <a href="/parents" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Parents</a>
          <a href="/recruiters" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>Recruiters</a>
          <a className="mobile-nav-cta" tabIndex={menuOpen ? 0 : -1} href={RECRUIT_FORM} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Recruit at RVU <span>↗</span>
          </a>
        </nav>
      </div>

      <div className="audience-bar" aria-label="Audience shortcuts"><span>For</span>
        <a href="/students">Students</a>
        <a href="/parents">Parents</a>
        <a href="/recruiters">Recruiters</a>
      </div>
    </>
  )
}
