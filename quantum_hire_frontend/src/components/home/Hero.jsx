import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Hero section for the homepage.
 * Displays headline, subheadline, primary CTAs, and a stat/info panel.
 */
export default function Hero() {
  return (
    <section className="qh-hero" aria-labelledby="hero-title">
      <div className="qh-container qh-hero__wrap">
        <div>
          <span className="qh-eyebrow">Future-ready talent</span>
          <h1 id="hero-title" className="qh-hero__title">
            Build your future workforce with Quantum Hire
          </h1>
          <p className="qh-hero__subtitle">
            Connecting companies with top freshers and interns, backed by training, top-performer bonuses, and placement support.
          </p>
          <div className="qh-hero__actions">
            <a href="/for-companies" className="qh-btn qh-btn--primary" aria-label="Learn more for companies">
              For Companies
            </a>
            <a href="/for-freshers" className="qh-btn qh-btn--secondary" aria-label="Learn more for freshers">
              For Freshers
            </a>
          </div>
          <div style={{ marginTop: 14 }}>
            <span className="qh-badge">Trustworthy • Growth-focused • Innovative</span>
          </div>
        </div>

        <aside className="qh-hero__panel" aria-label="Program stats">
          <div className="qh-hero__stat">
            <div className="qh-icon" aria-hidden="true">🎯</div>
            <div>
              <div className="qh-highlight__title">Job-ready training</div>
              <div className="qh-highlight__desc">Industry-curated curriculum to ramp talent faster.</div>
            </div>
          </div>
          <div className="qh-hero__stat">
            <div className="qh-icon" aria-hidden="true">💼</div>
            <div>
              <div className="qh-highlight__title">Internship programs</div>
              <div className="qh-highlight__desc">Structured internships aligned to business needs.</div>
            </div>
          </div>
          <div className="qh-hero__stat">
            <div className="qh-icon" aria-hidden="true">🏆</div>
            <div>
              <div className="qh-highlight__title">Top performer bonuses</div>
              <div className="qh-highlight__desc">Motivation and retention from day one.</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
