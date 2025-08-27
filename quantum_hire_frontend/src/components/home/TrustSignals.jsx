import React from 'react';

/**
 * PUBLIC_INTERFACE
 * TrustSignals displays logo placeholders and trust badges to reinforce credibility.
 */
export default function TrustSignals() {
  const logos = ['ACME', 'ALPHA', 'NOVA', 'ZENITH', 'ORBIT', 'PIXEL'];

  return (
    <section className="qh-section qh-trust" aria-labelledby="trust-title">
      <div className="qh-container">
        <span className="qh-eyebrow">Trusted by teams</span>
        <h2 id="trust-title" className="qh-title">Built for trust and results</h2>
        <p className="qh-subtitle">We combine rigorous training, performance incentives, and placement success to deliver reliable outcomes.</p>

        <div className="qh-trust__logos" role="list" aria-label="Partner logos">
          {logos.map((l) => (
            <div key={l} className="qh-logo" role="listitem" aria-label={`${l} logo placeholder`}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
