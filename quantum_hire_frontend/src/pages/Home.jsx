import React from 'react';
import '../styles/home.css';
import Hero from '../components/home/Hero';
import ProgramHighlights from '../components/home/ProgramHighlights';
import ValueProps from '../components/home/ValueProps';
import TrustSignals from '../components/home/TrustSignals';
import CTASection from '../components/common/CTASection';

// PUBLIC_INTERFACE
export default function Home() {
  /** Home page composed of hero, highlights, value props, trust signals, and CTAs. */
  return (
    <main id="main" className="qh-page" aria-label="Homepage">
      <Hero />
      <ProgramHighlights />
      <ValueProps />
      <TrustSignals />
      <CTASection
        title="Ready to build your fresher pipeline?"
        subtitle="Partner with Quantum Hire for a predictable, high-quality talent engine."
        primary={{ href: '/contact', label: 'Contact Us' }}
        secondary={{ href: '/for-companies', label: 'For Companies' }}
      />
    </main>
  );
}
