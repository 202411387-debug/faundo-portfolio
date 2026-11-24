import './App.css'

const moments = [
  { image: '/images/pic1.jpg', alt: 'A full-length mirror portrait', label: 'A little about me', number: '01' },
  { image: '/images/pic2.jpg', alt: 'A personal portrait', label: 'The person behind the work', number: '02' },
  { image: '/images/pic3.jpg', alt: 'A favorite personal photo', label: 'Life outside the screen', number: '03' },
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Faundo home">F<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Work</a>
          <a href="#gallery">Gallery</a>
          <a className="nav-contact" href="#contact">Let’s talk <ArrowIcon /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> BSIT student · aspiring developer</p>
          <h1>Curious by nature.<br /><span>Creative by choice.</span></h1>
          <p className="hero-intro">I’m Faundo — a student exploring the space where thoughtful design and useful technology meet.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">See what I do <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contact">Say hello <ArrowIcon /></a>
          </div>
          <div className="hero-note"><span>01 / 04</span><span className="note-line" /> A portfolio in progress</div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-halo" />
          <div className="portrait-frame">
            <img src="/images/pfp.jpg" alt="Faundo, portrait" />
          </div>
          <div className="portrait-label"><span className="label-mark">✳</span><span>Nice to meet you<br /><strong>I’m Faundo</strong></span></div>
          <span className="portrait-index">BASED IN THE PHILIPPINES</span>
        </div>
        <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
      </section>

      <section className="intro-section section-wrap" id="about">
        <div className="section-kicker"><span>01</span><span>THE INTRODUCTION</span></div>
        <div className="intro-content">
          <h2>A student of tech,<br />a student of <em>everything.</em></h2>
          <div className="intro-text">
            <p>I’m currently studying Information Technology and building my skills one project at a time. I enjoy learning how things work, trying new ideas, and turning what I learn into something people can use.</p>
            <p>This is my little corner of the internet — a place to share who I am and what inspires me along the way.</p>
            <a href="#contact" className="underlined-link">A little more about me <ArrowIcon /></a>
          </div>
        </div>
        <div className="skills-row"><span>WHAT I’M EXPLORING</span><div><b>Web development</b><b>UI &amp; UX</b><b>Creative problem-solving</b></div></div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-wrap experience-inner">
          <div className="section-kicker"><span>02</span><span>LEARNING ON THE JOB</span></div>
          <div className="experience-heading">
            <div><p className="eyebrow">MY EXPERIENCE AT RHEMUS</p><h2>Where IT meets<br /><em>creative work.</em></h2></div>
            <p>As a third-year BSIT student, I bring my technical background to a graphic and digital design workplace—supporting the people and tools behind the creative work.</p>
          </div>
          <div className="experience-grid">
            <article className="experience-feature">
              <div className="experience-image"><img src="/images/work2.jpg" alt="Troubleshooting a desktop computer at Rhemus" loading="lazy" /><span className="image-tag">ON THE JOB · RHEMUS</span></div>
              <div className="experience-caption"><div><span className="work-index">01 / IT SUPPORT</span><h3>Keeping the workstations working.</h3></div><p>I help troubleshoot computer issues so the design team can get back to the work that matters.</p></div>
            </article>
            <article className="experience-sidecard">
              <div className="experience-sideimage"><img src="/images/work1.jpg" alt="Printed design materials at Rhemus" loading="lazy" /></div>
              <div className="experience-sidecopy"><span className="work-index">02 / CREATIVE WORKFLOW</span><h3>Getting a closer look at the process.</h3><p>Working alongside a design team lets me see how digital ideas move into real, printed pieces.</p><div className="skill-tags"><span>Technical support</span><span>Problem solving</span><span>Teamwork</span></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-wrap gallery-inner">
          <div className="section-kicker"><span>03</span><span>THROUGH MY LENS</span></div>
          <div className="gallery-heading"><h2>A few frames<br />from <em>my world.</em></h2><p>Some snapshots that tell a little story about the person behind this page.</p></div>
          <div className="photo-grid">
            {moments.map((moment) => (
              <figure className="photo-card" key={moment.number}>
                <div className="photo-frame"><img src={moment.image} alt={moment.alt} loading="lazy" /></div>
                <figcaption><span>{moment.number} / {moment.label}</span><span aria-hidden="true">↗</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="section-kicker"><span>04</span><span>THE NEXT CHAPTER</span></div>
        <div className="contact-content"><div><p className="eyebrow">HAVE A QUESTION OR AN IDEA?</p><h2>Let’s make<br /><em>something matter.</em></h2></div><a className="contact-button" href="mailto:">Get in touch <ArrowIcon /></a></div>
        <p className="contact-note">Open to conversations, collaborations, and learning something new.</p>
      </section>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#home">F<span>.</span></a><span>Made with curiosity · 2026</span><a href="#home">Back to top ↑</a></footer>
    </main>
  )
}

export default App
