const evidence = [
  ['01', 'Internships', 'Structured industry exposure helps students apply classroom learning to real-world work.'],
  ['02', 'Live projects', 'Students work on real business problems while developing practical problem-solving skills.'],
  ['03', 'Industry mentoring', 'Industry professionals contribute guidance, technical insight and workplace context.'],
]


export function ExperienceProof() {
  return (
    <section id="proof" className="experience-proof section-anchor">
      <div className="experience-copy">
        <p className="eyebrow">The work before the offer</p>
        <h2 className="section-scroll-heading">Career readiness is built before recruitment.</h2>
        <p>RVU’s placement story is supported by internships, live projects, mentoring and capstone work-not just the final offer.</p>
      </div>
      <div className="evidence-list">
        {evidence.map(([num, title, text]) => (
          <article key={num}>
            <span>{num}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
