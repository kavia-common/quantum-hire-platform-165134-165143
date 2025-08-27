import React from 'react';
import HowItWorks from '../components/common/HowItWorks';
import ProgramPath from '../components/common/ProgramPath';
import Faq from '../components/common/Faq';
import CTASection from '../components/common/CTASection';
import SEO from '../components/seo/SEO';

// PUBLIC_INTERFACE
export default function ForCompanies() {
  /**
   * For Companies page
   * - Clear content blocks: Hero intro, How it works, Program path, FAQ, CTA
   */
  const milestones = [
    { icon: '🧭', label: 'Define needs', detail: 'We map your roles, skills, and project timelines.' },
    { icon: '🧪', label: 'Assess', detail: 'We evaluate freshers on practical tasks and teamwork.' },
    { icon: '🎓', label: 'Train', detail: 'Focused, outcomes-based training to ramp quickly.' },
    { icon: '💼', label: 'Internship', detail: 'Embed freshers into your team with clear KPIs.' },
    { icon: '🏆', label: 'Convert', detail: 'Hire top performers with confidence and clarity.' },
  ];

  const faqs = [
    { q: 'How do you evaluate freshers?', a: 'Through project-based assessments, code reviews, and behavioral interviews to ensure job readiness.' },
    { q: 'What is the typical internship duration?', a: 'Most internships run 8–12 weeks with predefined deliverables and mentor check-ins.' },
    { q: 'Can we customize training for our stack?', a: 'Yes. We can align modules to your tools, frameworks, and internal best practices.' },
    { q: 'How does placement support work?', a: 'We run interview preps, resume polish, mock interviews, and facilitate direct connects.' },
  ];

  return (
    <main id="main" className="qh-page" aria-label="For Companies">
      <SEO
        title="For Companies"
        description="Build a reliable fresher pipeline with Quantum Hire — discover, train, and convert top freshers with internships and measurable outcomes."
        path="/for-companies"
      />
      <section className="qh-section" aria-labelledby="fc-title">
        <div className="qh-container">
          <span className="qh-eyebrow">For companies</span>
          <h1 id="fc-title" className="qh-title" style={{ fontSize: 36 }}>Build a reliable fresher pipeline</h1>
          <p className="qh-subtitle" style={{ maxWidth: 820 }}>
            Partner with Quantum Hire to access pre-vetted, trained freshers and interns who contribute from day one —
            with measurable outcomes and a path to full-time conversion.
          </p>
          <div className="qh-hero__actions" style={{ marginTop: 10 }}>
            <a href="/contact" className="qh-btn qh-btn--primary">Talk to our team</a>
            <a href="/about" className="qh-btn qh-btn--secondary">Learn more</a>
          </div>
        </div>
      </section>

      <HowItWorks
        title="From scoping to conversion"
        eyebrow="How it works"
        subtitle="A structured, low-risk approach to discover, train, and hire top fresher talent."
      />

      <ProgramPath milestones={milestones} title="Your journey with us" eyebrow="Program path" />

      <Faq items={faqs} title="Hiring FAQs" eyebrow="FAQ" subtitle="Key details for HR and hiring managers." />

      <CTASection
        title="Ready to pilot an internship batch?"
        subtitle="Start with a small cohort and scale based on results."
        primary={{ href: '/contact', label: 'Contact Sales' }}
        secondary={{ href: '/about', label: 'About Quantum Hire' }}
      />

      <style>{`
        :root { --qh-text: var(--brand-navy); }
        .qh-container { max-width: 1120px; margin: 0 auto; padding: 24px 16px; }
      `}</style>
    </main>
  );
}
