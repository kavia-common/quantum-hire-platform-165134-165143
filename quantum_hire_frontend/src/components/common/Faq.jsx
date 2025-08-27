import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

/**
 * PUBLIC_INTERFACE
 * Faq renders an accessible accordion FAQ list.
 *
 * @param {object} props
 * @param {Array<{q:string,a:string}>} props.items - Questions and answers.
 * @param {string} [props.title='Frequently asked questions'] - Title text.
 * @param {string} [props.eyebrow='FAQ'] - Eyebrow text.
 * @param {string} [props.subtitle] - Subtitle text.
 */
export default function Faq({
  items,
  title = 'Frequently asked questions',
  eyebrow = 'FAQ',
  subtitle = 'Answers to common questions from companies and freshers.'
}) {
  return (
    <section className="qh-section" aria-labelledby="faq-title">
      <div className="qh-container">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
        <div className="qh-grid" style={{ gridTemplateColumns: '1fr', gap: 10, maxWidth: 820, margin: '0 auto' }}>
          {items.map((f, idx) => (
            <FaqItem key={idx} index={idx} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ index, q, a }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;
  return (
    <article className="qh-card" aria-labelledby={`${id}-label`}>
      <button
        className="qh-faq__button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-label`}
        onClick={() => setOpen(o => !o)}
      >
        <span>{q}</span>
        <span aria-hidden="true" className="qh-faq__icon">{open ? '−' : '+'}</span>
      </button>
      <div id={`${id}-panel`} role="region" hidden={!open} aria-labelledby={`${id}-label`} style={{ padding: open ? '0 2px 2px' : 0 }}>
        <p className="qh-value__desc" style={{ marginTop: 8 }}>{a}</p>
      </div>

      <style>{`
        .qh-faq__button {
          width: 100%;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          padding: 8px 0;
          font-weight: 700;
          color: var(--qh-text);
          cursor: pointer;
        }
        .qh-faq__icon {
          width: 28px; height: 28px; border-radius: 8px;
          background: #EEF2F7; display: grid; place-items: center;
          font-size: 18px; font-weight: 800; color: var(--qh-text);
        }
      `}</style>
    </article>
  );
}
