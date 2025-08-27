import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import quantumLogo from '../../assets/quantum_logo.png';

// PUBLIC_INTERFACE
export default function Navbar() {
  /** Navbar with brand styling for Quantum Hire.
   * - Sticky top behavior with subtle shadow on scroll
   * - Accessible skip link and ARIA labels
   * - Responsive: collapses into a menu on small screens
   * - Keyboard navigation and focus management for the mobile menu
   * Brand palette: orange/white/blue per new guidelines. Logo: mark only (no word text).
   */
  const [isOpen, setIsOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Trap focus inside mobile nav when open
  useEffect(() => {
    if (!isOpen) return;
    const menu = menuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    // focus first link when opened
    first?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const toggle = () => setIsOpen((o) => !o);
  const close = () => setIsOpen(false);

  return (
    <>
      <a href="#main" className="qh-skip-link">Skip to content</a>
      <header className={`qh-navbar ${elevated ? 'qh-navbar--elevated' : ''}`} role="banner">
        <div className="qh-container" style={{ paddingTop: 10, paddingBottom: 10 }}>
          <div className="qh-navbar__inner">
            <div className="qh-brand">
              <Link
                to="/"
                className="qh-brand__link"
                onClick={close}
                aria-label="Quantum Hire home — Q with rocket logo"
              >
                <img
                  src={quantumLogo}
                  alt="Stylized navy Q with an orange rocket arcing upward through it."
                  className="qh-brand__img"
                  width="44"
                  height="44"
                  decoding="async"
                />
              </Link>
            </div>

            <button
              ref={toggleBtnRef}
              className="qh-nav-toggle"
              onClick={toggle}
              aria-expanded={isOpen}
              aria-controls="qh-primary-nav"
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            >
              <span className="qh-nav-toggle__bar" />
              <span className="qh-nav-toggle__bar" />
              <span className="qh-nav-toggle__bar" />
            </button>

            <nav
              id="qh-primary-nav"
              ref={menuRef}
              className={`qh-nav ${isOpen ? 'is-open' : ''}`}
              aria-label="Primary navigation"
              aria-hidden={!isOpen}
            >
              <ul className="qh-nav__list" role="menubar">
                <li role="none">
                  <NavLink to="/" end role="menuitem" className={({isActive}) => 'qh-nav__link' + (isActive ? ' is-active' : '')} onClick={close}>
                    Home
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/for-companies" role="menuitem" className={({isActive}) => 'qh-nav__link' + (isActive ? ' is-active' : '')} onClick={close}>
                    For Companies
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/for-freshers" role="menuitem" className={({isActive}) => 'qh-nav__link' + (isActive ? ' is-active' : '')} onClick={close}>
                    For Freshers
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/about" role="menuitem" className={({isActive}) => 'qh-nav__link' + (isActive ? ' is-active' : '')} onClick={close}>
                    About
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/contact" role="menuitem" className={({isActive}) => 'qh-nav__cta' + (isActive ? ' is-active' : '')} onClick={close}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* overlay on small screens when nav is open */}
        <div
          className={`qh-nav-overlay ${isOpen ? 'is-open' : ''}`}
          aria-hidden="true"
          onClick={close}
        />
      </header>

      <style>{`
        :root {
          --qh-primary: var(--brand-primary); /* blue */
          --qh-secondary: var(--brand-white);
          --qh-accent: var(--brand-accent);   /* orange accent */
          --qh-text: var(--brand-navy);
          --qh-text-on-primary: #FFFFFF;
          --qh-shadow: rgba(0,0,0,0.08);
        }

        .qh-container { max-width: 1120px; margin: 0 auto; padding: 0 16px; }

        .qh-skip-link {
          position: absolute; left: -999px; top: auto; width: 1px; height: 1px; overflow: hidden;
        }
        .qh-skip-link:focus {
          position: fixed; left: 16px; top: 12px; width: auto; height: auto;
          background: var(--qh-primary); color: var(--qh-text-on-primary);
          padding: 8px 12px; border-radius: 6px; z-index: 10000;
        }

        .qh-navbar {
          position: sticky; top: 0; z-index: 999;
          background: var(--qh-secondary);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .qh-navbar--elevated { box-shadow: 0 6px 18px var(--qh-shadow); }

        .qh-navbar__inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }

        .qh-brand__link { display: inline-flex; align-items: center; text-decoration: none; padding: 6px; }
        .qh-brand__img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 10px;
          background: transparent;
          display: block;
        }

        .qh-nav-toggle {
          display: none; width: 44px; height: 44px;
          border: 1px solid rgba(0,0,0,0.08); border-radius: 10px; background: #fff;
        }
        .qh-nav-toggle__bar {
          display: block; width: 20px; height: 2px; margin: 4px auto; background: var(--qh-text);
        }

        .qh-nav { display: flex; }
        .qh-nav__list { display: flex; align-items: center; gap: 12px; list-style: none; margin: 0; padding: 0; }
        .qh-nav__link {
          text-decoration: none;
          color: var(--qh-text);
          padding: 10px 12px; border-radius: 8px; font-weight: 600;
        }
        .qh-nav__link:hover { color: var(--brand-primary); background: rgba(44,78,126,0.06); text-decoration: underline; }
        .qh-nav__link.is-active { color: var(--brand-primary); background: rgba(44,78,126,0.10); }

        /* Primary CTA is blue; orange reserved for accent use only */
        .qh-nav__cta {
          text-decoration: none; font-weight: 700;
          background: var(--brand-primary); color: var(--qh-text-on-primary);
          padding: 10px 14px; border-radius: 10px;
          box-shadow: 0 6px 14px rgba(44,78,126,0.28);
        }
        .qh-nav__cta:hover { background: #1E3C6A; }

        /* Overlay for mobile menu */
        .qh-nav-overlay { display: none; }

        @media (max-width: 880px) {
          .qh-nav-toggle { display: inline-flex; align-items: center; justify-content: center; }
          .qh-nav {
            position: absolute; top: 64px; left: 0; right: 0;
            background: var(--qh-secondary);
            display: none;
            border-bottom: 1px solid rgba(0,0,0,0.06);
          }
          .qh-nav.is-open { display: block; }
          .qh-nav__list { flex-direction: column; align-items: stretch; padding: 12px; gap: 8px; }
          .qh-nav__link, .qh-nav__cta { padding: 12px 14px; }

          .qh-nav-overlay {
            position: fixed; inset: 64px 0 0 0;
            background: rgba(0,0,0,0.3);
            display: none;
            z-index: 998;
          }
          .qh-nav-overlay.is-open { display: block; }
        }

        @media (prefers-reduced-motion: reduce) {
          .qh-navbar { transition: none; }
        }
      `}</style>
    </>
  );
}
