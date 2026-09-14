import type { ReactNode } from 'react'
import CountUp from './CountUp'
import BorderGlow from './BorderGlow'
import ScrollVelocityLogos from './ScrollVelocityLogos'
import AccordionGallery, { type AccordionRuleItem } from './AccordionGallery'
import { AudienceHeader } from './AudienceHeader'
import { Footer } from './Footer'
import { schools } from '../data/placementData'
import { spcSchools } from '../data/audienceData'

const RECRUIT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NvofrE_eNnPRsJZd-sG-1TkPb7BauIZHDneOa_jt25n5yg/viewform'
const PLACEMENT_TRACKER_URL = 'https://docs.google.com/spreadsheets/d/1Ab3fb-UKuKapEpWN3KQfYxIC6rrzAKxAfJxoT3RmVas/edit?gid=0#gid=0'

function PageShell({ children, active }: { children: ReactNode; active: 'students' | 'parents' | 'recruiters' }) {
  return <div className="audience-page"><AudienceHeader active={active} /><main>{children}</main><Footer /></div>
}

function AudienceGlance({ items, className = '' }: { items: Array<{ value: ReactNode; label: string }>; className?: string }) {
  return (
    <section className={`audience-glance ${className}`} aria-label="Key placement facts">
      {items.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}
    </section>
  )
}

function PlacementTracker({ audience }: { audience: 'students' | 'parents' }) {
  const student = audience === 'students'
  return (
    <section className="placement-tracker-section">
      <div className="placement-tracker-copy">
        <p className="eyebrow">Placement tracking</p>
        <h2>{student ? 'Keep track of the cycle as it moves.' : 'A clearer view of recruitment activity.'}</h2>
        <p>{student ? 'Use the Placement Office tracker to follow current recruitment activity, key updates and next steps.' : 'Use the official Placement Office tracking sheet as a clearer reference point for recruitment activity and updates.'}</p>
      </div>
      <div className="placement-tracker-card">
        <span className="tracker-index">TRACKER</span>
        <strong>Placement cycle 2025-26</strong>
        <span className="tracker-status">Official Placement Office tracker.</span>
        <a className="btn btn-primary" href={PLACEMENT_TRACKER_URL} target="_blank" rel="noreferrer">Open tracker ↗</a>
      </div>
    </section>
  )
}


function AudienceHeroSide({ index, note }: { index: string; note: string }) {
  return (
    <div className="audience-hero-side">
      <div className="audience-hero-note"><span>{index}</span><p>{note}</p></div>
    </div>
  )
}

function SPCDirectory() {
  return (
    <section id="support" className="audience-support">
      <div className="audience-section-head">
        <p className="eyebrow">School-level support</p>
        <h2>Need a school-specific answer?</h2>
        <p>Student Placement Coordinators support school-level placement guidance. Students can request the appropriate school contact through the Placement Office.</p>
      </div>
      <div className="spc-grid">
        {spcSchools.map((school) => (
          <article className="spc-card" key={school}>
            <span className="spc-index">SPC</span>
            <h3>{school}</h3>
            <p>School Placement Coordinator</p>
            <a href="mailto:placements@rvu.edu.in?subject=SPC%20contact%20request">Request contact ↗</a>
          </article>
        ))}
      </div>
    </section>
  )
}


function StudentStoryCard({ audience }: { audience: 'students' | 'parents' }) {
  const student = audience === 'students'
  const story = student
    ? {
        name: 'Dhruti Avadhani',
        meta: 'SoCSE · B.Tech (Hons.) in Computer Science & Engineering · Specialisation in Cyber Security',
        type: 'Internship',
        outcome: 'Grant Thornton INDUS',
        image: '/dhruti-avadhani.jpg',
        alt: 'Dhruti Avadhani',
        quote: '“I\'m grateful that RVU is bringing companies in for hiring and giving us the opportunity to gain real industry exposure. It\'s a great starting point for our careers.”',
        note: 'Currently building industry experience through an internship - placement outcome to follow.',
      }
    : {
        name: 'Kirthan Prashanth Sapate',
        meta: 'SoCSE · B.Tech in Computer Science & Engineering (AI & ML)',
        type: 'Internship',
        outcome: 'DocuSign',
        image: '/kirthan-prashanth-sapate.jpg',
        alt: 'Kirthan Prashanth Sapate',
        quote: '“The internship gave me a chance to step beyond the classroom and experience how work happens in a real product environment. It\'s been a valuable learning experience.”',
        note: 'Industry internship experience at DocuSign.',
      }

  return (
    <section className="student-story-ready student-story-populated" aria-label={`${student ? 'Student' : 'Parent'} story`}>
      <div className="student-story-ready-copy">
        <p className="eyebrow">{student ? 'Student perspective' : 'A student perspective'}</p>
        <h2>
          {student ? 'A real internship story, before the offer.' : 'See the kind of experience a student can build before the offer.'}
        </h2>
        <p>
          {student
            ? 'One current student perspective shows how an internship can become an early bridge between university learning and the workplace.'
            : 'One current student perspective gives a grounded view of the experience that can sit alongside classroom learning before full-time recruitment.'}
        </p>
      </div>
      <div className="student-story-card-grid student-story-card-grid-single">
        <article className="student-story-card student-story-card-populated">
          <div className="student-story-photo">
            <img src={story.image} alt={story.alt} loading="lazy" decoding="async" />
            <span className="student-story-photo-credit">Student story</span>
          </div>
          <div className="student-story-card-body">
            <span className="student-story-status">{story.type}</span>
            <h3>{story.name}</h3>
            <p className="student-story-meta">{story.meta}</p>
            <div className="student-story-outcome">
              <span>Organisation</span>
              <strong>{story.outcome}</strong>
            </div>
            <blockquote>{story.quote}</blockquote>
            <p className="student-story-note">{story.note}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function EmployerLandscapePrompt({ audience }: { audience: 'students' | 'parents' }) {
  const student = audience === 'students'
  return (
    <section className="audience-employer-prompt">
      <div className="audience-employer-prompt-inner">
        <div className="audience-employer-copy">
          <p className="eyebrow">Selected employer ecosystem</p>
          <h2>See the employer landscape around the university.</h2>
          <p>{student ? 'Explore the range of organisations shaping the opportunities you may encounter across the placement cycle.' : 'See the breadth of organisations that give context to the opportunities and career pathways around your student.'}</p>
        </div>
      </div>
      <ScrollVelocityLogos
        heading="Selected employer marks across the RVU talent pool."
        description="Selected organisation marks from student-maintained RVU / RVCE 2023-batch placement records; shown as reported recruiter information."
      />
    </section>
  )
}

export function StudentsPage() {
  return (
    <PageShell active="students">
      <section id="overview" className="audience-hero audience-hero-students">
        <div>
          <p className="eyebrow">For students</p>
          <h1>Make the placement process work for you.</h1>
          <p className="audience-hero-copy">Understand what has to happen before an offer - and where you can get help along the way.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#journey">View your route ↓</a>
            <a className="btn btn-ghost" href="#support">Find school support ↗</a>
          </div>
        </div>
        <AudienceHeroSide
          index="01"
          note="Registration, experience, preparation, applications, interviews and offer decisions each have a place in the process."
        />
      </section>

      <AudienceGlance className="audience-glance-student" items={[
        { value: <CountUp to={1608} duration={0.42} separator="," className="glance-count glance-count-gold" />, label: 'eligible students' },
        { value: '6', label: 'interdisciplinary schools' },
        { value: '5', label: 'core placement stages' },
      ]} />

      <section id="journey" className="audience-section audience-section-light">
        <div className="audience-section-head">
          <p className="eyebrow">Your route</p>
          <h2>Six moves. Six chances to prepare well.</h2>
          <p>Use the pathway as a checklist, not just a timeline.</p>
        </div>
        <div className="audience-steps audience-steps-six">
          {[
            ['01', 'Register', 'Complete placement registration and declarations.'],
            ['02', 'Build experience', 'Complete required internship, immersion or capstone components.'],
            ['03', 'Prepare', 'Attend mandatory pre-placement training.'],
            ['04', 'Apply', 'Participate in eligible applications and assessments.'],
            ['05', 'Interview', 'Meet the employer assessment and interview process.'],
            ['06', 'Evaluate', 'Make informed decisions and honour accepted offers.'],
          ].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="audience-school-preview">
        <div className="audience-section-head">
          <p className="eyebrow">Your school matters</p>
          <h2>Different disciplines need different preparation.</h2>
          <p>Use your school as the first lens for programmes, experiences and placement support.</p>
        </div>
        <div className="audience-school-list">
          {schools.map((school) => <div key={school.shortName} className="audience-school-row"><strong>{school.shortName}</strong><span>{school.name}</span><b>{school.eligibleStudents}</b></div>)}
        </div>
      </section>

      <EmployerLandscapePrompt audience="students" />
      <StudentStoryCard audience="students" />
      <PlacementTracker audience="students" />
      <RulesAndRegulations />
      <SPCDirectory />
    </PageShell>
  )
}

export function ParentsPage() {
  return (
    <PageShell active="parents">
      <section id="overview" className="audience-hero audience-hero-parents">
        <div>
          <p className="eyebrow">For parents</p>
          <h1>See what happens before the offer.</h1>
          <p className="audience-hero-copy">The placement journey is built around preparation, experience, eligibility and support - not just the final compensation figure.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#journey">Understand the pathway ↓</a><a className="btn btn-ghost" href="#support">School support ↗</a></div>
        </div>
        <AudienceHeroSide
          index="02"
          note="Look for the evidence behind the outcome: training, experiential requirements, governance, career support and employer exposure."
        />
      </section>

      <AudienceGlance className="audience-glance-parent" items={[
        { value: '80%', label: 'minimum training attendance' },
        { value: '3', label: 'pre-placement training areas' },
        { value: '6', label: 'school-level talent pools' },
      ]} />

      <section id="journey" className="audience-section dark audience-parent-proof">
        <div className="audience-section-head"><p className="eyebrow eyebrow-light">For parents</p><h2>What supports a student's journey to the workplace?</h2><p>Look for the system behind the outcome: preparation, participation rules, career support and responsibilities that continue through recruitment.</p></div>
        <div className="parent-proof-grid parent-proof-grid-reassurance">
          <article><span>01</span><h3>Is my child prepared?</h3><p>Internships, immersion, live projects, capstones and pre-placement training build experience before recruitment begins.</p></article>
          <article><span>02</span><h3>How is the process managed?</h3><p>Corporate &amp; Alumni Relations coordinates placement and internship activities across Schools and supports the recruitment route.</p></article>
          <article><span>03</span><h3>What determines participation?</h3><p>Academic standing, attendance, experiential requirements, company criteria and conduct all form part of eligibility.</p></article>
          <article><span>04</span><h3>What happens after selection?</h3><p>Students are expected to act professionally, honour accepted offers and raise exceptional concerns with CAR.</p></article>
        </div>
      </section>

      <section className="audience-parent-sequence">
        <div className="audience-section-head">
          <p className="eyebrow">Before an offer</p>
          <h2>A sequence parents can follow.</h2>
          <p>The placement journey moves through visible checkpoints before a student reaches an employer.</p>
        </div>
        <div className="parent-sequence-grid">
          <article><span>01</span><strong>Experience</strong><p>Build real-world exposure.</p></article>
          <article><span>02</span><strong>Prepare</strong><p>Complete training and readiness work.</p></article>
          <article><span>03</span><strong>Qualify</strong><p>Meet eligibility and recruiter criteria.</p></article>
          <article><span>04</span><strong>Engage</strong><p>Apply, assess and interview.</p></article>
          <article><span>05</span><strong>Decide</strong><p>Make informed offer decisions.</p></article>
        </div>
      </section>

      <EmployerLandscapePrompt audience="parents" />
      <StudentStoryCard audience="parents" />
      <PlacementTracker audience="parents" />
      <RulesAndRegulations />
      <SPCDirectory />
    </PageShell>
  )
}

function RecruiterCapabilityLandscape() {
  const groups = [
    {
      label: 'Technical & analytical',
      copy: 'Computing, engineering, data, economics and technical problem-solving.',
      schools: ['SoCSE'],
    },
    {
      label: 'Business & management',
      copy: 'Business, commerce, finance, economics and management perspectives.',
      schools: ['SoB', 'SoEB'],
    },
    {
      label: 'Creative & media',
      copy: 'Design, innovation, film, media and creative practice.',
      schools: ['SDI', 'SoFMCA'],
    },
    {
      label: 'Human, social & legal',
      copy: 'Law, psychology, politics, criminology, cyber law and forensic sciences.',
      schools: ['SoL', 'SoLAS'],
    },
  ]

  return (
    <section id="capabilities" className="recruiter-capabilities">
      <div className="audience-section-head">
        <p className="eyebrow">Talent across RVU's schools</p>
        <h2>What can you hire from RVU?</h2>
        <p>Start with the capability you need, then explore the schools and programmes that can support the brief.</p>
      </div>
      <div className="recruiter-capability-grid">
        {groups.map((group, index) => (
          <article key={group.label} className="recruiter-capability-card">
            <span className="capability-index">0{index + 1}</span>
            <div>
              <h3>{group.label}</h3>
              <p>{group.copy}</p>
              <div className="capability-schools">
                {group.schools.map((school) => <span key={school}>{school}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="recruiter-capability-note">
        Recruitment at RVU can begin with a school, a programme or a role brief. Internship and full-time engagement routes are available through CAR.
      </div>
    </section>
  )
}

export function RecruitersPage() {
  return (
    <PageShell active="recruiters">
      <section id="overview" className="audience-hero audience-hero-recruiters">
        <div>
          <p className="eyebrow">For recruiters</p>
          <h1>Bring the brief. Meet multidisciplinary talent.</h1>
          <p className="audience-hero-copy">Start with a role, a programme or a capability need. CAR coordinates the route from eligibility to offer across schools.</p>
          <BorderGlow className="audience-form-glow" backgroundColor="#233039" borderRadius={0} glowRadius={18} glowIntensity={0.72} glowColor="40 61 60" coneSpread={28} animated colors={["#D7AC54", "#233039", "#D7AC54"]}>
            <a className="audience-form-btn" href={RECRUIT_FORM} target="_blank" rel="noreferrer">Recruit at RVU ↗</a>
          </BorderGlow>
        </div>
        <AudienceHeroSide
          index="03"
          note="Six schools, one multidisciplinary talent ecosystem - with internship and full-time routes for employer engagement."
        />
      </section>

      <AudienceGlance className="audience-glance-recruiter" items={[
        { value: '250+', label: 'recruiting organisations' },
        { value: '6', label: 'schools in one talent pool' },
        { value: '2', label: 'engagement routes: internships and full-time' },
      ]} />

      <RecruiterCapabilityLandscape />

      <section id="journey" className="audience-section audience-recruiter-route">
        <div className="audience-section-head"><p className="eyebrow">From role brief to offer</p><h2>Tell us what your team needs to solve.</h2><p>CAR coordinates the operating route. Your team defines the role, assesses candidates and makes the final selection.</p></div>
        <div className="audience-steps audience-steps-four">
          {[
            ['01', 'Share the brief', 'Send the role, programme fit and eligibility criteria.'],
            ['02', 'Meet eligible profiles', 'CAR coordinates the profile flow with the relevant schools.'],
            ['03', 'Assess & interview', 'Run your assessment, technical rounds, case work or interview process.'],
            ['04', 'Close the loop', 'Confirm the offer and coordinate the next step with CAR.'],
          ].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="recruiter-engagement-routes">
        <div className="audience-section-head">
          <p className="eyebrow">Engage with RVU</p>
          <h2>Hire for the immediate role - or build the relationship earlier.</h2>
        </div>
        <div className="recruiter-route-grid">
          <article><span>Internships</span><p>Engage students through internships, live projects or other experiential routes where appropriate.</p></article>
          <article><span>Full-time recruitment</span><p>Bring eligible students into your assessment and interview process for full-time opportunities.</p></article>
        </div>
      </section>

      <RulesAndRegulations />
    </PageShell>
  )
}

function RulesAndRegulations() {
  const rules: AccordionRuleItem[] = [
    {
      label: 'Placement governance',
      image: 'https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2026/08/recruit_img3.jpg',
      alt: 'RV University recruitment and industry-engagement setting',
      items: [
        'Corporate & Alumni Relations (CAR) coordinates placement and internship activities across Schools.',
        'Placement-related violations are formally referred to the Student Disciplinary Committee (STDC).',
        'CAR facilitates processes but does not adjudicate disciplinary matters.',
      ],
    },
    {
      label: 'Student eligibility',
      image: 'https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2026/08/internship_img2.jpg',
      alt: 'RV University student internship setting',
      items: [
        'No academic backlogs at the time of registering for placement drives unless permitted by a recruiter.',
        'Minimum 80% attendance in mandatory pre-placement training.',
        'Placement Registration & Declaration Form must be submitted.',
        'Required experiential components such as internship, immersion or capstone must be completed unless exceptionally approved.',
        'Students must meet company-specific eligibility criteria.',
      ],
    },
    {
      label: 'Pre-placement training',
      image: 'https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2026/08/internship_img4.jpg',
      alt: 'RV University students in an experiential learning setting',
      items: [
        'Domain / Technical Training (School-specific)',
        'Soft Skills Training',
        'Emotional, Behavioural & Networking Intelligence',
        'Minimum 80% attendance across all components is compulsory.',
      ],
    },
    {
      label: 'Student responsibilities',
      image: 'https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2026/08/recruit_img1.jpg',
      alt: 'RV University recruiter and industry-engagement setting',
      items: [
        'Apply only to roles and organisations the student is genuinely willing to join.',
        'Maintain professional conduct at all stages.',
        'Honour accepted offers in line with institutional ethics and industry expectations.',
        'Report exceptional concerns promptly to CAR.',
      ],
    },
  ]

  return (
    <section id="rules" className="audience-rules">
      <div className="audience-section-head audience-rules-head">
        <p className="eyebrow">Rules & regulations</p>
        <h2>A clear framework for participation.</h2>
        <p>These requirements summarise RV University's published placement guidelines. Open a panel to explore the detail.</p>
      </div>
      <AccordionGallery items={rules} defaultIndex={1} trigger="hover" height={430} expandRatio={0.5} gap={10} radius={14} duration={0.55} parallax={0.35} />
      <p className="rules-source-note">Summary based on RV University's published placement guidelines. <a href="https://rvu.edu.in/placements/" target="_blank" rel="noreferrer">View the official placement page ↗</a> for the university-published requirements.</p>
    </section>
  )
}
