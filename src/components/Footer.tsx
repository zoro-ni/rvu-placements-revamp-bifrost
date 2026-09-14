const footerGroups = [
  {
    title: 'Main navigation',
    links: [
      ['About', 'https://rvu.edu.in/rvu-at-a-glance/'],
      ['Schools & Programmes', 'https://rvu.edu.in/schools-programmes/'],
      ['Library', 'https://rvu.edu.in/library/'],
      ['Research', 'https://rvu.edu.in/research/'],
      ['Media & Events', 'https://rvu.edu.in/events/'],
      ['Careers', 'https://rvu.edu.in/careers/'],
      ['Faculty', 'https://rvu.edu.in/faculty/'],
      ['Mysuru Campus', 'https://mysuru.rvu.edu.in/'],
    ],
  },
  {
    title: 'Schools',
    links: [
      ['School of Liberal Arts and Sciences', 'https://solas.rvu.edu.in/'],
      ['School of Design and Innovation', 'https://sdi.rvu.edu.in/'],
      ['School of Economics and Business', 'https://soeb.rvu.edu.in/'],
      ['School of Computer Science and Engineering', 'https://socse.rvu.edu.in/'],
      ['School of Law', 'https://sol.rvu.edu.in/'],
      ['School of Film, Media and Creative Arts', 'https://sofmca.rvu.edu.in/'],
      ['School of Allied and Healthcare Professions', 'https://soahp.rvu.edu.in/'],
    ],
  },
  {
    title: 'Admissions',
    links: [
      ['How to Apply', 'https://rvu.edu.in/admissions/'],
      ['Dates & Deadlines', 'https://rvu.edu.in/admissions/'],
      ['Student Activities', 'https://rvu.edu.in/events/'],
      ['Financial Aid & Support', 'https://rvu.edu.in/admissions/'],
      ['Cancellation & Refund Policy', 'https://rvu.edu.in/admissions/'],
    ],
  },
  {
    title: 'Helpful links',
    links: [
      ['Annual Reports', 'https://rvu.edu.in/annual-reports/'],
      ['Approvals', 'https://rvu.edu.in/approvals/'],
      ['Blog', 'https://rvu.edu.in/blog/'],
      ['Contact', 'https://rvu.edu.in/contact/'],
      ['Disclosures', 'https://rvu.edu.in/disclosures/'],
      ['Statutory Committees', 'https://rvu.edu.in/statutory-committees/'],
      ['IQAC', 'https://rvu.edu.in/internal-quality-assurance-cell-iqac/'],
      ['University Grievance Committees', 'https://rvu.edu.in/university-grievance-committees/'],
      ['Anti-Ragging Helpline', 'https://rvu.edu.in/anti-ragging-helpline/'],
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer site-footer-expanded">
      <div className="footer-mantra-row">
        <div className="footer-mantra" aria-label="RV University brand line">Go, change the world<sup>®</sup></div>
        <div className="footer-source-box">
          <div className="footer-source-box-label">ABOUT THIS DESIGN</div>
          <p>Design concept for the RV University Placement Website Revamp Competition. Placement statistics, programme names, benefit descriptions, eligibility rules and governance text are based on <a href="https://rvu.edu.in/placements/" target="_blank" rel="noreferrer">RV University’s published placement information</a>. Recruiter names, roles and channels are drawn from student-maintained RVU / RVCE 2023-batch placement sheets.</p>
        </div>
      </div>

      <div className="footer-topline">
        <div className="footer-intro">
          <div className="footer-kicker">PLACEMENTS - RV UNIVERSITY</div>
          <div className="footer-title">Career Development &amp; Corporate Relations</div>
          <div className="footer-brandline">RV University · Bengaluru</div>
        </div>
        <div className="footer-contact">
          <span>Placement and internship enquiries</span>
          <a href="mailto:placements@rvu.edu.in">placements@rvu.edu.in</a>
          <span>RV Vidyanikethan Post, 8th Mile, Mysuru Road, Bengaluru - 560 059</span>
        </div>
        <div className="footer-actions">
          <div className="footer-socials" aria-label="RV University social media">
            <a href="https://www.facebook.com/RV.University1" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.667.333-1 1-1Z"/></svg>
            </a>
            <a href="https://www.youtube.com/@RVUniversity" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.1a2.8 2.8 0 0 0-2-2C17.3 5.6 12 5.6 12 5.6s-5.3 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 15.9a2.8 2.8 0 0 0 2 2c1.7.5 7 .5 7 .5s5.3 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.9 29 29 0 0 0-.5-3.9ZM10 15.2V8.8l5.2 3.2L10 15.2Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/school/rv-university/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8.2H2.6V21H6V8.2ZM4.3 3A2 2 0 1 0 4.3 7a2 2 0 0 0 0-4ZM21.4 13.7c0-3.8-2-5.5-4.7-5.5-2.2 0-3.2 1.2-3.8 2v-2H9.5V21H13v-6.7c0-1.8.3-3.5 2.3-3.5 2 0 2.1 1.8 2.1 3.6V21h4v-7.3Z"/></svg>
            </a>
            <a href="https://www.instagram.com/rv.university/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.4" cy="6.7" r="1.1"/></svg>
            </a>
          </div>
          <a className="footer-top" href="#overview">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>

      <div className="footer-links-grid">
        {footerGroups.map((group) => (
          <section key={group.title} className="footer-link-group">
            <h3>{group.title}</h3>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={label}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{label}</a></li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="footer-meta-centered">
        <div className="footer-meta-line">
          <span>© 2026 RV University Placement Website Revamp · Student Design Concept</span>
          <a href="/">Placements</a>
          <a href="https://rvu.edu.in/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
          <a href="https://rvu.edu.in/terms-conditions/" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>
        </div>
        <div className="footer-powered">Powered by Vaishnav</div>
      </div>
    </footer>
  )
}
