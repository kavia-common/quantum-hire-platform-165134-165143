import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ProgramHighlights displays core offerings: training, internships, bonuses, placement support.
 */
export default function ProgramHighlights() {
  const items = [
    {
      icon: '📚',
      title: 'Training',
      desc: 'Practical, job-ready curriculum co-designed with industry mentors.',
    },
    {
      icon: '🧑‍💻',
      title: 'Internships',
      desc: 'Real-world projects with measurable outcomes and mentorship.',
    },
    {
      icon: '🏅',
      title: 'Bonuses',
      desc: 'Top performer incentives to reward impact and drive excellence.',
    },
  ];

  return (
    <section className="qh-section" aria-labelledby="highlights-title">
      <div className="qh-container">
        <span className="qh-eyebrow">Program highlights</span>
        <h2 id="highlights-title" className="qh-title">What powers Quantum Hire</h2>
        <p className="qh-subtitle">An outcomes-first model to source, train, and enable emerging talent at scale.</p>

        <div className="qh-grid qh-highlights__grid">
          {items.map((item) => (
            <article key={item.title} className="qh-card" aria-label={item.title}>
              <div className="qh-icon" aria-hidden="true">{item.icon}</div>
              <h3 className="qh-highlight__title">{item.title}</h3>
              <p className="qh-highlight__desc">{item.desc}</p>
            </article>
          ))}
          <article className="qh-card" aria-label="Placement support">
            <div className="qh-icon" aria-hidden="true">🚀</div>
            <h3 className="qh-highlight__title">Placement support</h3>
            <p className="qh-highlight__desc">Interview prep, resume polish, and employer connects to convert talent to hires.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
