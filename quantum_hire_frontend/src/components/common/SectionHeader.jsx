import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SectionHeader renders a standardized section header with eyebrow, title, and subtitle.
 *
 * @param {object} props
 * @param {string} [props.eyebrow] - Small uppercase label above the title.
 * @param {string} props.title - Main section title.
 * @param {string} [props.subtitle] - Optional supporting text.
 * @param {string} [props.align='left'] - Text alignment: 'left' | 'center'
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  const style = { textAlign: align };
  const headingId = `${title}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '') + '-title';
  return (
    <header style={style} aria-labelledby={headingId}>
      {eyebrow && <div className="qh-eyebrow">{eyebrow}</div>}
      <h2 id={headingId} className="qh-title" style={{ marginTop: 6 }}>{title}</h2>
      {subtitle && <p className="qh-subtitle" style={{ marginTop: 6 }}>{subtitle}</p>}
    </header>
  );
}
