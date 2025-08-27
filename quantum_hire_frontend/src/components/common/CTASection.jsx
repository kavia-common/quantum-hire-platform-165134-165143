import React from 'react';

/**
 * PUBLIC_INTERFACE
 * CTASection renders a prominent call-to-action block with primary and secondary links.
 *
 * @param {object} props
 * @param {string} props.title - Main CTA title.
 * @param {string} props.subtitle - Supporting subtitle text.
 * @param {{href: string, label: string}} props.primary - Primary CTA configuration.
 * @param {{href: string, label: string}} [props.secondary] - Optional secondary CTA configuration.
 */
export default function CTASection({ title, subtitle, primary, secondary }) {
  return (
    <section className="qh-section qh-cta" aria-labelledby="cta-title">
      <div className="qh-container">
        <div className="qh-cta__wrap">
          <div className="qh-cta__text">
            <h2 id="cta-title" className="qh-title" style={{ margin: 0 }}>{title}</h2>
            {subtitle && <div className="qh-cta__sub">{subtitle}</div>}
          </div>
          <div className="qh-hero__actions" style={{ justifyContent: 'flex-end' }}>
            {secondary && (
              <a className="qh-btn qh-btn--secondary" href={secondary.href}>
                {secondary.label}
              </a>
            )}
            <a className="qh-btn qh-btn--primary" href={primary.href}>
              {primary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
