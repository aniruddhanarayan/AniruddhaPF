'use client';

export function Projects() {
  return (
    <section>
      <div className="section-heading">
        <div className="icon-anim">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="5" className="crosshair-ring"/>
            <circle cx="14" cy="14" r="10" className="crosshair-ring outer"/>
            <line x1="14" y1="2" x2="14" y2="7" className="crosshair-line"/>
            <line x1="14" y1="21" x2="14" y2="26" className="crosshair-line"/>
            <line x1="2" y1="14" x2="7" y2="14" className="crosshair-line"/>
            <line x1="21" y1="14" x2="26" y2="14" className="crosshair-line"/>
            <circle cx="14" cy="14" r="1.5" fill="#c0392b"/>
          </svg>
        </div>
        <h2>KEY PROJECTS</h2>
      </div>
      <div className="projects-list">

        <div className="project-card">
          <div>
            <div className="project-name">Valley AI</div>
            <div className="project-desc">
              <span className="hl-steel">Unified defense intelligence platform</span> connecting command centers
              to last-mile soldiers for real-time, autonomous mission control. The world&apos;s first
              <span className="hl-crimson"> Physical AI Operating System</span> for autonomous drone coordination
              in GPS-denied environments.
            </div>
            <div className="arch-block" style={{ marginTop: '20px' }}>
              <span className="arch-block-label">ARCHITECTURE OVERVIEW</span>
{`Command Center ──▶ Valley AI Core ──▶ Field Soldiers
       │                 │                   │
       │         Real-time Mesh              │
       │        Autonomous Edge              │
       └──────── Decision Engine ────────────┘
* Real-time intelligence feeds
* Autonomous mission execution at the edge
* Encrypted C2 communication layers`}
            </div>
          </div>
          <div className="project-stack">
            <span className="stack-tag">AI</span>
            <span className="stack-tag">REAL-TIME</span>
            <span className="stack-tag">MISSION CONTROL</span>
            <span className="stack-tag">C&amp;C</span>
          </div>
        </div>

        <div className="project-card">
          <div>
            <div className="project-name">Ankosha A Drones</div>
            <div className="project-desc">
              Long-range, <span className="hl-brown">fire-and-forget kamikaze drone</span> built for endurance and precision —
              executing high-stakes missions with <span className="hl-grey">minimal human intervention</span>.
              AI-powered precision target acquisition with no-recovery mission profiles.
            </div>
          </div>
          <div className="project-stack">
            <span className="stack-tag">UAV</span>
            <span className="stack-tag">AUTONOMOUS</span>
            <span className="stack-tag">DEFENSE TECH</span>
          </div>
        </div>

        <div className="project-card">
          <div>
            <div className="project-name">Enterprise AI Solutions</div>
            <div className="project-desc">
              High-stakes AI for <span className="hl-brown">Rolls-Royce · Bentley · Aston Martin · Porsche</span> —
              funding defense research and development through <span className="hl-steel">commercial innovation</span>.
              Production ML systems driving the dual-vertical business model.
            </div>
          </div>
          <div className="project-stack">
            <span className="stack-tag">ML</span>
            <span className="stack-tag">ENTERPRISE AI</span>
            <span className="stack-tag">ANALYTICS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
