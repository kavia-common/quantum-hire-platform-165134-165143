import React from 'react';
import SectionHeader from './SectionHeader';

/**
 * PUBLIC_INTERFACE
 * HowItWorks shows a 3-4 step process with icons and descriptions.
 *
 * @param {object} props
 * @param {Array<{icon:string,title:string,desc:string}>} [props.steps] - Custom steps to render.
 * @param {string} [props.title='How it works'] - Title override.
 * @param {string} [props.eyebrow] - Eyebrow label.
 * @param {string} [props.subtitle] - Subtitle text.
 */
export default function HowItWorks({
  steps,
  title = 'How it works',
  eyebrow = 'Simple process',
  subtitle = 'A straightforward path from talent discovery to successful hiring.'
}) {
  const items = steps || [
    { icon: '🔎', title: 'Discover', desc: 'We assess fresher talent through projects and challenges.' },
    { icon: '🎓', title: 'Train', desc: 'Job-ready curriculum with mentor feedback and checkpoints.' },
    { icon: '💼', title: 'Intern', desc: 'Real-world internship aligned to your team’s goals.' },
    { icon: '🤝', title: 'Hire', desc: 'Convert top performers into dependable full-time hires.' },
  ];

  return (
    <section className="qh-section" aria-labelledby="hiw-title">
      <div className="qh-container">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
        <div className="qh-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {items.map((s) => (
            <article key={s.title} className="qh-card" aria-label={s.title}>
              <div className="qh-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="qh-highlight__title">{s.title}</h3>
              <p className="qh-highlight__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
