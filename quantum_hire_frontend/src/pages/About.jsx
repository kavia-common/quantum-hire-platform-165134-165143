import React from 'react';
import AboutContent from '../components/about/AboutContent';
import Faq from '../components/common/Faq';
import CTASection from '../components/common/CTASection';

// PUBLIC_INTERFACE
export default function About() {
  /** About page with mission, values, FAQ and CTA. */
  const faqs = [
    { q: 'What industries do you support?', a: 'Primarily software engineering and data roles, with expanding coverage into related tech functions.' },
    { q: 'How do you ensure quality?', a: 'We combine assessments, mentor feedback, internship KPIs, and conversion metrics to drive outcomes.' },
  ];

  return (
    <main id="main" className="qh-page" aria-label="About Quantum Hire">
      <section className="qh-section" aria-labelledby="about-title">
        <div className="qh-container">
          <span className="qh-eyebrow">About</span>
          <h1 id="about-title" className="qh-title" style={{ fontSize: 36 }}>Quantum Hire</h1>
          <p className="qh-subtitle" style={{ maxWidth: 820 }}>
            Connecting companies with future-ready talent through training, internships, top-performer bonuses, and placement support.
          </p>
        </div>
      </section>

      <AboutContent />
      <Faq items={faqs} title="About FAQs" eyebrow="FAQ" subtitle="More context on how we work." />

      <CTASection
        title="Let’s build the future of talent together"
        subtitle="Whether you’re hiring or getting started, we’re here to help."
        primary={{ href: '/contact', label: 'Get in touch' }}
        secondary={{ href: '/for-companies', label: 'For Companies' }}
      />

      <style>{`
        :root { --qh-text: #0B1F35; --qh-accent: #9AA7B0; }
        .qh-container { max-width: 1120px; margin: 0 auto; padding: 24px 16px; }
      `}</style>
    </main>
  );
}
