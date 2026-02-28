'use client';

export function Skills() {
  return (
    <>
      {/* SKILLS */}
      <section>
        <div className="section-heading">
          <div className="icon-anim">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="14,3 20,7 20,15 14,19 8,15 8,7" className="hex"/>
              <polygon points="14,8 17,10 17,14 14,16 11,14 11,10" className="hex"/>
              <circle cx="14" cy="13" r="1.5" fill="#3d6fa8"/>
            </svg>
          </div>
          <h2>SKILLS &amp; STACK</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-group">
            <h4>CORE EXPERTISE</h4>
            <div className="skill-item"><div className="skill-dot"></div> Physical AI</div>
            <div className="skill-item"><div className="skill-dot"></div> Avionics</div>
            <div className="skill-item"><div className="skill-dot"></div> Cyber Defense</div>
            <div className="skill-item"><div className="skill-dot"></div> Autonomous Systems</div>
            <div className="skill-item"><div className="skill-dot"></div> UAV Development</div>
          </div>
          <div className="skill-group">
            <h4>ENGINEERING</h4>
            <div className="skill-item"><div className="skill-dot"></div> Python</div>
            <div className="skill-item"><div className="skill-dot"></div> Machine Learning</div>
            <div className="skill-item"><div className="skill-dot"></div> Data Structures &amp; Algorithms</div>
            <div className="skill-item"><div className="skill-dot"></div> Robotics</div>
            <div className="skill-item"><div className="skill-dot"></div> Aerospace Engineering</div>
          </div>
          <div className="skill-group">
            <h4>OPERATIONS</h4>
            <div className="skill-item"><div className="skill-dot"></div> Defense Intelligence</div>
            <div className="skill-item"><div className="skill-dot"></div> Mission Control</div>
            <div className="skill-item"><div className="skill-dot"></div> Drone Engineering</div>
            <div className="skill-item"><div className="skill-dot"></div> Data Analytics</div>
            <div className="skill-item"><div className="skill-dot"></div> AI Systems</div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <div className="divider"><div className="divider-line"></div><div className="divider-diamond"></div><div className="divider-line"></div></div>

      <section>
        <div className="section-heading">
          <div className="icon-anim">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g className="arrow-shaft">
                <line x1="14" y1="22" x2="14" y2="6" stroke="#b09050" strokeWidth="2" strokeLinecap="round"/>
                <polyline points="8,12 14,6 20,12" stroke="#b09050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <line x1="8" y1="24" x2="20" y2="24" stroke="#4a3018" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h2>ACHIEVEMENTS</h2>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-title">US Innovation Grant</div>
            <div className="achievement-desc">Awarded for innovative defense technology solutions pushing the boundaries of <span className="hl-grey">autonomous warfare systems</span>.</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-title">12× Hackathon Champion</div>
            <div className="achievement-desc">Twelve consecutive hackathon victories — demonstrating consistent excellence in <span className="hl-steel">rapid innovation</span> and defense-technology problem solving.</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-title">Enterprise Partnerships</div>
            <div className="achievement-desc">Trusted by <span className="hl-brown">Rolls-Royce · Bentley · Aston Martin · Porsche</span> to deliver high-stakes enterprise AI solutions.</div>
          </div>
        </div>
      </section>
    </>
  );
}
