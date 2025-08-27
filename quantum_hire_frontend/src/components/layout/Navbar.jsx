import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Navbar() {
  /** Navbar with brand styling for Quantum Hire.
   * - Sticky top behavior with subtle shadow on scroll
   * - Accessible skip link and ARIA labels
   * - Responsive: collapses into a menu on small screens
   * Brand colors:
   *   Primary: #0052CC (blue)
   *   Secondary: #FFFFFF (white)
   *   Accent: #9AA7B0 (muted gray-blue)
   */
  const [isOpen, setIsOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = () => setIsOpen((o) => !o);
  const close = () => setIsOpen(false);

  return (
    <>
      <a href="#main" className="qh-skip-link">Skip to content</a>
      <header className={`qh-navbar ${elevated ? 'qh-navbar--elevated' : ''}`} role="banner">
        <div className="qh-container">
          <div className="qh-navbar__inner">
            <div className="qh-brand">
              <Link to="/" className="qh-brand__link" onClick={close} aria-label="Quantum Hire home">
                <div className="qh-brand__logo" aria-hidden="true">QH</div>
                <span className="qh-brand__name">Quantum Hire</span>
              </Link>
            </div>

            <button
              className="qh-nav-toggle"
              onClick={toggle}
              aria-expanded={isOpen}
              aria-controls="qh-primary-nav"
              aria-label="Toggle navigation"
            >
              <span className="qh-nav-toggle__bar" />
              <span className="qh-nav-toggle__bar" />
              <span className="qh-nav-toggle__bar" />
            </button>

            <nav id="qh-primary-nav" className={`qh-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
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
      </header>

      <style>{`
        :root {
          --qh-primary: #0052CC;
          --qh-secondary: #FFFFFF;
          --qh-accent: #9AA7B0;
          --qh-text: #0B1F35;
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

        .qh-brand__link { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .qh-brand__logo {
          width: 36px; height: 36px; border-radius: 8px;
          background: var(--qh-primary);
          color: var(--qh-text-on-primary);
          display: grid; place-items: center;
          font-weight: 800; letter-spacing: 0.5px;
        }
        .qh-brand__name { color: var(--qh-text); font-weight: 700; font-size: 18px; }

        .qh-nav-toggle {
          display: none; width: 44px; height: 44px;
          border: 1px solid rgba(0,0,0,0.08); border-radius: 10px; background: #fff;
        }
        .qh-nav-toggle__bar {
          display: block; width: 20px; height: 2px; margin: 4px auto; background: var(--qh-text);
        }

        .qh-nav { display: flex; }
        .qh-nav__list { display: flex; align-items: center; gap: 8px; list-style: none; margin: 0; padding: 0; }
        .qh-nav__link {
          text-decoration: none;
          color: var(--qh-text);
          padding: 10px 12px; border-radius: 8px; font-weight: 600;
        }
        .qh-nav__link:hover { background: rgba(0,0,0,0.04); }
        .qh-nav__link.is-active { color: var(--qh-primary); background: rgba(0,82,204,0.10); }

        .qh-nav__cta {
          text-decoration: none; font-weight: 700;
          background: var(--qh-primary); color: var(--qh-text-on-primary);
          padding: 10px 14px; border-radius: 10px;
          box-shadow: 0 6px 14px rgba(0,82,204,0.25);
        }
        .qh-nav__cta:hover { filter: brightness(0.96); }

        @media (max-width: 880px) {
          .qh-nav-toggle { display: inline-flex; align-items: center; justify-content: center; }
          .qh-nav { position: absolute; top: 64px; left: 0; right: 0; background: var(--qh-secondary); display: none; border-bottom: 1px solid rgba(0,0,0,0.06); }
          .qh-nav.is-open { display: block; }
          .qh-nav__list { flex-direction: column; align-items: stretch; padding: 12px; }
          .qh-nav__link, .qh-nav__cta { padding: 12px 14px; }
        }
      `}</style>
    </>
  );
}
