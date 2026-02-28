'use client';

export function Experience() {
  return (
    <section>
      <div className="section-heading">
        <div className="icon-anim">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="14" y1="4" x2="14" y2="24" className="circuit-line"/>
            <line x1="4" y1="14" x2="24" y2="14" className="circuit-line"/>
            <circle cx="14" cy="4" r="2" className="node"/>
            <circle cx="14" cy="14" r="3" className="node"/>
            <circle cx="24" cy="14" r="2" className="node"/>
            <circle cx="14" cy="24" r="2" className="node"/>
            <circle cx="4" cy="14" r="2" className="node" style={{ animationDelay: '1.2s' }}/>
          </svg>
        </div>
        <h2>EXPERIENCE</h2>
      </div>
      <div className="exp-grid">

        <div className="exp-card featured full">
          <div className="exp-role">Chief Executive Officer</div>
          <div className="exp-company">AMINUTEMAN TECHNOLOGIES</div>
          <div className="exp-period">DEC 2023 – PRESENT · PUNE, MAHARASHTRA</div>
          <div className="exp-desc">
            Leading innovation across <span className="hl-steel">defense AI, robotics, aerospace engineering,</span> and
            <span className="hl-grey"> cybersecurity</span> — developing next-generation drones and autonomous systems that
            shape the future of national security. <span className="hl-crimson">22-member engineering team</span> |
            US Innovation Grant | 12 consecutive hackathon wins | Enterprise AI for
            <span className="hl-brown"> Rolls-Royce · Bentley · Aston Martin · Porsche</span>.
          </div>
        </div>

        <div className="exp-card">
          <div className="exp-role">Analyst</div>
          <div className="exp-company">DATAISGOOD</div>
          <div className="exp-period">MAY 2024 – APR 2025 · PUNE</div>
          <div className="exp-desc">
            Mastering principles of <span className="hl-steel">extracting insights from complex datasets</span> —
            building data pipelines and analytical frameworks for real-world decision-making.
          </div>
        </div>

        <div className="exp-card">
          <div className="exp-role">Intern</div>
          <div className="exp-company">SETV GLOBAL</div>
          <div className="exp-period">NOV 2024 – MAR 2025 · HYDERABAD</div>
          <div className="exp-desc">
            Hands-on experience in rapidly evolving AI — applying theoretical knowledge to
            <span className="hl-grey"> production-grade challenges</span> in autonomous systems.
          </div>
        </div>

        <div className="exp-card full">
          <div className="exp-role">Student</div>
          <div className="exp-company">CODING NINJAS</div>
          <div className="exp-period">JAN 2023 – APR 2024 · MAHARASHTRA</div>
          <div className="exp-desc">
            Intensive multi-disciplinary learning across{' '}
            <span className="hl-black">Python</span>{' '}
            <span className="hl-black">DSA</span>{' '}
            <span className="hl-black">Machine Learning</span>{' '}
            <span className="hl-black">Data Analytics</span> —
            mastering advanced problem-solving and data-driven methodologies.
          </div>
        </div>

      </div>
    </section>
  );
}
