import React, { useEffect, useRef } from 'react'

type Organisation = {
  name: string
  src?: string
  slug?: string
}

type ScrollRunProps = {
  children: React.ReactNode
  direction?: 1 | -1
}

function ScrollRun({ children, direction = 1 }: ScrollRunProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const copy = copyRef.current
    if (!viewport || !copy) return

    const updateDuration = () => {
      const distance = copy.getBoundingClientRect().width
      if (!distance) return

      // Use the actual rendered rail width so the physical speed stays
      // consistent on mobile, laptop, and desktop.
      const speed = window.innerWidth <= 820 ? 44 : 58
      viewport.style.setProperty('--logo-duration', `${distance / speed}s`)
    }

    const resizeObserver = new ResizeObserver(updateDuration)
    resizeObserver.observe(copy)
    window.addEventListener('resize', updateDuration, { passive: true })

    updateDuration()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateDuration)
    }
  }, [])

  return (
    <div ref={viewportRef} className={`scroll-velocity-parallax ${direction < 0 ? 'is-reverse' : ''}`} aria-hidden="true">
      <div className="scroll-velocity-scroller">
        <span ref={copyRef} className="scroll-velocity-copy">{children}</span>
        <span className="scroll-velocity-copy" aria-hidden="true">{children}</span>
      </div>
    </div>
  )
}

// Full organisation set visible in the student-maintained placement sheets shared for this design pass.
// The visual intentionally presents these as organisations appearing in placement records,
// not as a list of confirmed current RVU recruiters.
const organisations: Organisation[] = [
  { name: 'ArcticWolf' },
  { name: 'TCS', src: '/recruiter-logos/tcs.png' },
  { name: 'Infosys', src: '/recruiter-logos/infosys.png' },
  { name: 'ShareChat', slug: 'sharechat' },
  { name: 'RingCentral', slug: 'ringcentral' },
  { name: 'Everpure' },
  { name: 'Kinaxis', slug: 'kinaxis' },
  { name: 'Coupa', slug: 'coupa' },
  { name: 'Juspay' },
  { name: 'Dover', slug: 'dover' },
  { name: 'Baker Hughes', slug: 'bakerhughes' },
  { name: 'ZS Associates' },
  { name: 'Societe Generale', slug: 'societegenerale' },
  { name: 'MSD Global' },
  { name: 'Deloitte', src: '/recruiter-logos/deloitte.png' },
  { name: 'Prodapt' },
  { name: 'GameBerry' },
  { name: 'HSBC', slug: 'hsbc' },
  { name: 'UsefulBI' },
  { name: 'Mobisy' },
  { name: 'Red Hat', slug: 'redhat' },
  { name: 'Fox' },
  { name: 'AMD', slug: 'amd' },
  { name: 'IDFC' },
  { name: 'InMobi', slug: 'inmobi' },
  { name: 'Greenlight' },
  { name: 'Cognizant', src: '/recruiter-logos/cognizant.png' },
  { name: 'BitGo', slug: 'bitgo' },
  { name: 'Tekion' },
  { name: 'NextHop' },
  { name: 'Walmart', src: '/recruiter-logos/walmart.png' },
  { name: 'Cloudera', slug: 'cloudera' },
  { name: 'Qnance' },
  { name: 'Warner Music', slug: 'warnermusicgroup' },
  { name: 'Mareana' },
  { name: 'Smartsheet', slug: 'smartsheet' },
  { name: 'SAP', slug: 'sap' },
  { name: 'PaloAlto Networks', slug: 'paloaltonetworks' },
  { name: 'Eternal' },
  { name: 'SuperMoney' },
  { name: 'ARM', slug: 'arm' },
  { name: 'Qualcomm', slug: 'qualcomm' },
  { name: 'NXTWave' },
  { name: 'NewRelic', slug: 'newrelic' },
  { name: 'Grow' },
  { name: 'Ethos' },
  { name: 'Saviynt' },
  { name: 'Verint', slug: 'verint' },
  { name: 'MuFG', slug: 'mufg' },
  { name: 'ZS Associates (Bangalore)' },
  { name: 'IBM', slug: 'ibm' },
  { name: 'HPE', slug: 'hpe' },
  { name: 'AppLogic' },
  { name: 'Chevron', slug: 'chevron' },
  { name: 'Snabbit' },
  { name: 'Global Foundaries', slug: 'globalfoundries' },
  { name: 'OneTrust', slug: 'onetrust' },
  { name: 'PrimeNumbers' },
  { name: 'Infineon', slug: 'infineon' },
  { name: 'Cynlr' },
  { name: 'Ather Energy', slug: 'atherenergy' },
  { name: 'Axxela' },
  { name: 'Epsilon', slug: 'epsilon' },
  { name: 'Airbus', slug: 'airbus' },
  { name: 'Honeywell', slug: 'honeywell' },
  { name: 'Koch/Molex' },
  { name: 'HP', slug: 'hp' },
  { name: 'MathCo' },
  { name: 'EY GDS', slug: 'ey' },
  { name: 'Titan' },
  { name: 'Inflection' },
  { name: 'TruEstate' },
  { name: 'Siemens Healthcare Pvt Ltd', slug: 'siemens' },
  { name: 'Whatfix' },
  { name: 'Astuto' },
  { name: 'GyanSys' },
  { name: 'Skylark Drones' },
  { name: 'Stanverse Technologies' },
  { name: 'Rentomojo' },
  { name: 'MSG Global' },
  { name: 'Progress', src: '/recruiter-logos/progress-sharefile.png' },
  { name: 'Novo Nordisk GBS', slug: 'novonordisk' },
  { name: 'UCIC' },
  { name: 'Offlyn' },
  { name: 'SignOff Today' },
  { name: 'Grant Thornton', src: '/recruiter-logos/grant-thornton.png' },
  { name: 'Go Desi' },
]

const logoFallback = (name: string) => name

function OrganisationRun({ organisations, reverse = false }: { organisations: Organisation[]; reverse?: boolean }) {
  return (
    <div className="recruiter-organisation-run">
      {organisations.map((organisation) => (
        <div className="organisation-mark" key={organisation.name}>
          {organisation.src ? (
            <img src={organisation.src} alt="" aria-hidden="true" />
          ) : organisation.slug ? (
            <img
              src={`https://cdn.simpleicons.org/${organisation.slug}/5c6770?viewbox=auto`}
              alt=""
              aria-hidden="true"
              loading="eager"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                const fallback = event.currentTarget.nextElementSibling
                if (fallback instanceof HTMLElement) fallback.style.display = 'block'
              }}
            />
          ) : null}
          <span style={{ display: organisation.src || organisation.slug ? 'none' : 'block' }}>{logoFallback(organisation.name)}</span>
        </div>
      ))}
      <span className="organisation-run-gap" aria-hidden="true" />
    </div>
  )
}

export function ScrollVelocityLogos({
  heading = 'Organisations appearing in placement records.',
  description = 'Organisation names drawn from the student-maintained RVU / RVCE placement sheets shared for this design pass. Inclusion here does not imply confirmed recruitment.',
}: {
  heading?: string
  description?: string
}) {
  return (
    <section className="recruiter-logo-band" aria-labelledby="recruiter-logos-title">
      <div className="recruiter-logo-heading">
        <div>
          <p className="eyebrow">Organisation record · 2026</p>
          <h3 id="recruiter-logos-title" className="logo-scroll-heading">{heading}</h3>
        </div>
        <p>{description}</p>
      </div>

      <div className="recruiter-velocity-frame" aria-label="Animated list of organisations in the placement record">
        <div className="recruiter-velocity-row">
          <ScrollRun direction={1}>
            <OrganisationRun organisations={organisations} />
          </ScrollRun>
        </div>
        <div className="recruiter-velocity-row">
          <ScrollRun direction={-1}>
            <OrganisationRun organisations={[...organisations].reverse()} reverse />
          </ScrollRun>
        </div>
      </div>
    </section>
  )
}

export default ScrollVelocityLogos
