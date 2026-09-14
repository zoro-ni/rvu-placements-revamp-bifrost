const steps = [
  ['01', 'Register & declare', 'Complete placement registration and declarations.'],
  ['02', 'Build experience', 'Complete required internship, immersion or capstone components.'],
  ['03', 'Prepare', 'Attend mandatory pre-placement training across technical and professional skills.'],
  ['04', 'Apply & assess', 'Participate in eligible applications, assessments and interviews.'],
  ['05', 'Evaluate & honour', 'Make informed decisions and honour accepted offers.'],
]


export function Preparation() {
  return (
    <section id="preparation" className="preparation section-anchor">
      <div className="section-headline">
        <div><p className="eyebrow">Before the offer</p><h2 className="section-scroll-heading">Preparation is part of the outcome.</h2></div>
        <p className="section-deck">RVU's placement rules make the preparation pathway visible: experiential learning, mandatory training, eligibility and professional responsibility all sit before recruitment.</p>
      </div>
      <div className="process-line">
        {steps.map(([num, title, text]) => <article className="process-step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="training-strip">
        <div><span>01</span><b>Domain / technical</b></div>
        <div><span>02</span><b>Soft skills</b></div>
        <div><span>03</span><b>Emotional, behaviour &amp; networking intelligence</b></div>
      </div>
    </section>
  )
}
