import React from 'react';
import quantumLogo from '../../assets/quantum_logo.png';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with brand styling and accessibility.
   * Uses app-level CSS variables from App.css for consistent theming.
   */
  const year = new Date().getFullYear();

  return (
    <footer className="qh-footer" role="contentinfo">
      <div className="qh-container qh-footer__inner">
        <div className="qh-footer__brand" aria-label="Site logo">
          <img
            src={quantumLogo}
            alt="Quantum Hire logo"
            className="qh-footer__logo-img"
            width="36"
            height="36"
            decoding="async"
          />
        </div>

        <nav className="qh-footer__nav" aria-label="Footer navigation">
          <a className="qh-footer__link" href="/about">About</a>
          <a className="qh-footer__link" href="/for-companies">For Companies</a>
          <a className="qh-footer__link" href="/for-freshers">For Freshers</a>
          <a className="qh-footer__link" href="/contact">Contact</a>
        </nav>

        <div className="qh-footer__copy">
          © {year} Quantum Hire. All rights reserved.
        </div>
      </div>

      <style>{`
        .qh-footer {
          background: linear-gradient(180deg, var(--qh-surface) 0%, var(--bg-primary) 100%);
          border-top: 1px solid var(--border-color);
          color: var(--text-primary);
          margin-top: 48px;
        }
        .qh-footer__inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 16px;
          padding: 28px 0;
          align-items: center;
        }

        .qh-footer__brand { display: inline-flex; gap: 0; align-items: center; }
        .qh-footer__logo-img {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          object-fit: contain;
          background: transparent;
          display: block;
        }

        .qh-footer__nav { display: flex; align-items: center; gap: 12px; justify-content: flex-end; flex-wrap: wrap; }
        .qh-footer__link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
          padding: 8px 10px;
          border-radius: 8px;
        }
        .qh-footer__link:hover { color: var(--qh-accent); text-decoration: underline; background: rgba(44,78,126,0.06); }
        @media (prefers-color-scheme: dark) {
          .qh-footer__link:hover { background: rgba(255,255,255,0.06); }
        }

        .qh-footer__copy {
          grid-column: 1 / -1;
          color: var(--qh-accent);
          font-size: 14px;
          border-top: 1px dashed var(--border-color);
          padding-top: 16px;
        }

        @media (max-width: 880px) {
          .qh-footer__inner { grid-template-columns: 1fr; }
          .qh-footer__brand { margin-bottom: 6px; }
          .qh-footer__nav { justify-content: flex-start; }
        }
      `}</style>
    </footer>
  );
}
