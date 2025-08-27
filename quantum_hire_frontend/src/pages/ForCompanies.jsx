import React from 'react';

// PUBLIC_INTERFACE
export default function ForCompanies() {
  /** For Companies page shell. */
  return (
    <main id="main" className="qh-page">
      <div className="qh-container">
        <h1>For Companies</h1>
        <p>Partner with Quantum Hire to access pre-vetted, trained freshers and interns ready to contribute from day one.</p>
      </div>
      <style>{`
        :root { --qh-text: #0B1F35; --qh-accent: #9AA7B0; }
        .qh-container { max-width: 1120px; margin: 0 auto; padding: 24px 16px; }
        h1 { color: var(--qh-text); margin-bottom: 8px; }
        p { color: var(--qh-accent); }
      `}</style>
    </main>
  );
}
