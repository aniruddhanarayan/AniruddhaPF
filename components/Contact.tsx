'use client';

import { useState } from 'react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <>
      {/* EDUCATION */}
      <section>
        <div className="section-heading">
          <div className="icon-anim">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="9" height="16" rx="1" className="book-page" style={{ transformOrigin: '13px 14px' }}/>
              <rect x="15" y="6" width="9" height="16" rx="1" className="book-page right" style={{ transformOrigin: '15px 14px' }}/>
              <line x1="14" y1="6" x2="14" y2="22" stroke="#4a2f1a" strokeWidth="1.5"/>
            </svg>
          </div>
          <h2>EDUCATION</h2>
        </div>
        <div className="edu-card">
          <div className="edu-year">JUL 2022<br/>JAN 2026</div>
          <div>
            <div className="edu-degree">Bachelor of Engineering — Computer Science</div>
            <div className="edu-inst"><span className="hl-brown">Dr. D.Y. Patil Institute of Engineering, Management and Research</span> · Pune, Maharashtra, India</div>
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <div className="divider"><div className="divider-line"></div><div className="divider-diamond"></div><div className="divider-line"></div></div>

      <section>
        <div className="section-heading">
          <div className="icon-anim">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="20" r="2" fill="#3d6fa8"/>
              <path d="M8 16 Q14 10 20 16" className="signal-wave"/>
              <path d="M5 12 Q14 4 23 12" className="signal-wave"/>
              <path d="M2 8 Q14 -2 26 8" className="signal-wave"/>
            </svg>
          </div>
          <h2>LANGUAGES</h2>
        </div>
        <div className="lang-row">
          <div className="lang-item">
            <div className="lang-inner">
              <div className="lang-name">ENGLISH</div>
              <div className="lang-bar">
                <div className="lang-seg filled"></div><div className="lang-seg filled"></div>
                <div className="lang-seg filled"></div><div className="lang-seg filled"></div><div className="lang-seg filled"></div>
              </div>
            </div>
            <div className="lang-level">PROFESSIONAL</div>
          </div>
          <div className="lang-item">
            <div className="lang-inner">
              <div className="lang-name">HINDI</div>
              <div className="lang-bar">
                <div className="lang-seg filled"></div><div className="lang-seg filled"></div>
                <div className="lang-seg filled"></div><div className="lang-seg filled"></div><div className="lang-seg filled"></div>
              </div>
            </div>
            <div className="lang-level">NATIVE</div>
          </div>
          <div className="lang-item">
            <div className="lang-inner">
              <div className="lang-name">MARATHI</div>
              <div className="lang-bar">
                <div className="lang-seg filled"></div><div className="lang-seg filled"></div>
                <div className="lang-seg filled"></div><div className="lang-seg filled"></div><div className="lang-seg"></div>
              </div>
            </div>
            <div className="lang-level">PROFESSIONAL</div>
          </div>
          <div className="lang-item">
            <div className="lang-inner">
              <div className="lang-name">SPANISH</div>
              <div className="lang-bar">
                <div className="lang-seg filled"></div><div className="lang-seg filled"></div>
                <div className="lang-seg"></div><div className="lang-seg"></div><div className="lang-seg"></div>
              </div>
            </div>
            <div className="lang-level">ELEMENTARY</div>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <div className="divider"><div className="divider-line"></div><div className="divider-diamond"></div><div className="divider-line"></div></div>

      <section>
        <div className="section-heading">
          <div className="icon-anim">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="8" width="20" height="14" rx="1" stroke="#3d6fa8" strokeWidth="1.2"/>
              <polyline points="4,8 14,16 24,8" stroke="#3d6fa8" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>CONNECT</h2>
        </div>
        <div className="connect-links">
          <a href="mailto:aniruddhanarayan36@gmail.com" className="connect-link">EMAIL</a>
          <a href="https://linkedin.com/in/aniruddha-narayan-8b06a1257" className="connect-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://github.com/aniruddhanarayan" className="connect-link" target="_blank" rel="noopener noreferrer">GITHUB</a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="access_key" value="bad41d1a-7c2e-484b-a260-a314bde23d9a" />
          <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />

          <h3>SEND A MESSAGE</h3>

          <div className="form-field">
            <label htmlFor="name" className="form-label">NAME</label>
            <input type="text" id="name" name="name" required className="form-input" placeholder="Your name" />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">EMAIL</label>
            <input type="email" id="email" name="email" required className="form-input" placeholder="your.email@example.com" />
          </div>

          <div className="form-field">
            <label htmlFor="message" className="form-label">MESSAGE</label>
            <textarea id="message" name="message" required className="form-input form-textarea" placeholder="Your message..." rows={5} />
          </div>

          <button type="submit" disabled={formStatus === 'submitting'} className="form-submit">
            {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
          </button>

          {formStatus === 'success' && (
            <div className="form-success">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {formStatus === 'error' && (
            <div className="form-error">
              Something went wrong. Please try again or email directly at aniruddhanarayan36@gmail.com
            </div>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <div className="footer-text">AMINUTEMAN TECHNOLOGIES PVT. LTD. · PUNE, INDIA</div>
        <div className="footer-classify">DEFENSE TECHNOLOGY</div>
      </footer>
    </>
  );
}
