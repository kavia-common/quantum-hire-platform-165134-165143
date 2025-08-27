import React from 'react';
import SectionHeader from '../common/SectionHeader';

/**
 * PUBLIC_INTERFACE
 * AboutContent renders the mission, vision, and values blocks used on the About page.
 */
export default function AboutContent() {
  const values = [
    { icon: '🤝', title: 'Integrity', desc: 'We prioritize fairness, transparency, and trust in every engagement.' },
    { icon: '🎯', title: 'Outcomes', desc: 'We are measured by the success of our talent and partner companies.' },
    { icon: '🚀', title: 'Growth', desc: 'We enable continuous learning and upward mobility for freshers.' },
  ];

  return (
    <>
      <section className="qh-section" aria-label="Our mission">
        <div className="qh-container">
          <SectionHeader eyebrow="Our mission" title="Building future-ready talent at scale" subtitle="Quantum Hire connects businesses with high-potential freshers and interns through training, internships, and performance incentives." />
          <div className="qh-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <article className="qh-card">
              <div className="qh-icon qh-icon--primary" aria-hidden="true">🧭</div>
              <h3 className="qh-value__title">Our vision</h3>
              <p className="qh-value__desc">A world where early-career talent ramps quickly, delivers meaningful impact, and grows into tomorrow’s leaders.</p>
            </article>
            <article className="qh-card">
              <div className="qh-icon" aria-hidden="true">📊</div>
              <h3 className="qh-value__title">Our approach</h3>
              <p className="qh-value__desc">An outcomes-first model pairing practical training, internships, and top-performer bonuses with active placement support.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="qh-section qh-section--tight" aria-label="Our values">
        <div className="qh-container">
          <SectionHeader eyebrow="Values" title="What we stand for" subtitle="Principles that guide how we serve talent and companies." />
          <div className="qh-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {values.map(v => (
              <article key={v.title} className="qh-card">
                <div className="qh-icon" aria-hidden="true">{v.icon}</div>
                <h3 className="qh-value__title">{v.title}</h3>
                <p className="qh-value__desc">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
