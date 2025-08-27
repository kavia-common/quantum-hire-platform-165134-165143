import React from 'react';
import SectionHeader from './SectionHeader';

/**
 * PUBLIC_INTERFACE
 * ProgramPath renders a vertical or horizontal path of milestones for the program.
 *
 * @param {object} props
 * @param {Array<{label:string, detail:string, icon?:string}>} props.milestones - The path milestones.
 * @param {'horizontal'|'vertical'} [props.direction='horizontal'] - Layout direction.
 * @param {string} [props.title='Program path'] - Title text.
 * @param {string} [props.eyebrow='Roadmap'] - Eyebrow text.
 * @param {string} [props.subtitle] - Subtitle text.
 */
export default function ProgramPath({
  milestones = [],
  direction = 'horizontal',
  title = 'Program path',
  eyebrow = 'Roadmap',
  subtitle = 'A staged journey that builds skills, delivers outcomes, and sets up long-term success.'
}) {
  const cols = direction === 'horizontal' ? `repeat(${Math.max(1, milestones.length)},1fr)` : '1fr';
  return (
    <section className="qh-section qh-section--tight" aria-labelledby="program-path-title">
      <div className="qh-container">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
        <div className="qh-grid" style={{ gridTemplateColumns: cols, gap: 16 }}>
          {milestones.map((m, i) => (
            <article key={`${m.label}-${i}`} className="qh-card" aria-label={m.label}>
              <div className="qh-icon" aria-hidden="true">{m.icon || '✅'}</div>
              <div className="qh-value__title" style={{ fontWeight: 700 }}>{m.label}</div>
              <p className="qh-value__desc" style={{ marginTop: 6 }}>{m.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
