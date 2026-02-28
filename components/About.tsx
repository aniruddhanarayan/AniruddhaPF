'use client';

export function About() {
  return (
    <section>
      <div className="section-heading">
        <div className="icon-anim">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="11" stroke="#2c4a6e" strokeWidth="1" opacity="0.4"/>
            <circle cx="14" cy="14" r="6" stroke="#2c4a6e" strokeWidth="1" opacity="0.5"/>
            <circle className="radar-circle" cx="14" cy="14" r={8}/>
            <line className="radar-sweep" x1="14" y1="14" x2="14" y2="3" strokeLinecap="round"/>
            <circle cx="14" cy="14" r="1.5" fill="#c0392b"/>
          </svg>
        </div>
        <h2>ABOUT</h2>
      </div>
      <div className="about-text">
        <p>
          I&apos;m Aniruddha Narayan — Founder and CEO of <span className="hl-crimson">Aminuteman Technologies</span>,
          a bootstrapped defense-tech company building <span className="hl-steel">AI-driven UAV and autonomous systems</span> to
          protect soldiers and strengthen global defense sovereignty.
        </p>
        <p>
          When I started studying defense technology, one truth stood out:
          <span className="hl-brown"> systems are decades behind</span>. And when technology fails, people pay the price.
        </p>
        <p>
          At <span className="hl-crimson">18</span>, I decided to change that. Starting from college labs, I assembled a
          <span className="hl-steel"> 22-member engineering team</span> united by one idea —
          build from first principles. Build technology that can bear the risks humans shouldn&apos;t.
        </p>
        <p>
          Our mission is to establish <span className="hl-grey">AI Brain sovereignty</span> — building systems where
          technology bears the highest risk, so more defenders come home safely.
        </p>
      </div>
    </section>
  );
}
