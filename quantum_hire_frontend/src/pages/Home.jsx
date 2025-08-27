import React from 'react';

// PUBLIC_INTERFACE
export default function Home() {
  /** Home page shell with hero and CTA. */
  return (
    <main id="main" className="qh-page">
      <section className="qh-hero">
        <div className="qh-container">
          <h1 className="qh-hero__title">Build your future workforce with Quantum Hire</h1>
          <p className="qh-hero__subtitle">
            Connecting companies with top freshers and interns, backed by training, bonus incentives, and placement support.
          </p>
          <div className="qh-hero__cta">
            <a href="/for-companies" className="qh-btn qh-btn--primary">For Companies</a>
            <a href="/for-freshers" className="qh-btn qh-btn--secondary">For Freshers</a>
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --qh-primary: #0052CC;
          --qh-secondary: #FFFFFF;
          --qh-accent: #9AA7B0;
          --qh-text: #0B1F35;
        }

        .qh-container { max-width: 1120px; margin: 0 auto; padding: 0 16px; }
        .qh-page { padding-top: 24px; }

        .qh-hero {
          padding: 48px 0 28px;
          background: linear-gradient(180deg, rgba(0,82,204,0.06), rgba(0,82,204,0.0));
        }
        .qh-hero__title { font-size: 34px; line-height: 1.2; margin: 0 0 8px; color: var(--qh-text); }
        .qh-hero__subtitle { margin: 0 0 16px; color: var(--qh-accent); font-size: 18px; }
        .qh-hero__cta { display: flex; gap: 10px; }

        .qh-btn { display: inline-block; padding: 12px 16px; border-radius: 10px; text-decoration: none; font-weight: 700; }
        .qh-btn--primary { background: var(--qh-primary); color: #fff; box-shadow: 0 6px 14px rgba(0,82,204,0.25); }
        .qh-btn--primary:hover { filter: brightness(0.96); }
        .qh-btn--secondary { background: #EEF2F7; color: var(--qh-text); }
        .qh-btn--secondary:hover { background: #E7EDF6; }
      `}</style>
    </main>
  );
}
