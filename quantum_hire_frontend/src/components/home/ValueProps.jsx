import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ValueProps outlines key business value points for both companies and freshers.
 */
export default function ValueProps() {
  const values = [
    {
      icon: '⚡',
      title: 'Faster time-to-productivity',
      desc: 'Pre-vetted, trained freshers contribute from week one with minimal ramp-up.',
    },
    {
      icon: '🛡️',
      title: 'Reduced hiring risk',
      desc: 'Data-backed assessment and performance tracking during internships.',
    },
    {
      icon: '📈',
      title: 'Scalable talent pipeline',
      desc: 'Predictable inflow of qualified candidates aligned with growth needs.',
    },
  ];

  return (
    <section className="qh-section qh-section--tight" aria-labelledby="values-title">
      <div className="qh-container">
        <span className="qh-eyebrow">Why companies choose us</span>
        <h2 id="values-title" className="qh-title">Value built for impact</h2>
        <div className="qh-grid qh-values__grid">
          {values.map((v) => (
            <article key={v.title} className="qh-card">
              <div className="qh-icon" aria-hidden="true">{v.icon}</div>
              <h3 className="qh-value__title">{v.title}</h3>
              <p className="qh-value__desc">{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
