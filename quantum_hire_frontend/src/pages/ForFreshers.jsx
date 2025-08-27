import React from 'react';
import ProgramPath from '../components/common/ProgramPath';
import HowItWorks from '../components/common/HowItWorks';
import Faq from '../components/common/Faq';
import CTASection from '../components/common/CTASection';

// PUBLIC_INTERFACE
export default function ForFreshers() {
  /**
   * For Freshers page
   * - Clear content blocks: Intro, Program path, How it works, FAQ, CTA
   */
  const milestones = [
    { icon: '🧩', label: 'Foundations', detail: 'Core skills in web, data, and problem solving.' },
    { icon: '🛠️', label: 'Projects', detail: 'Hands-on assignments and feedback loops.' },
    { icon: '🧑‍🏫', label: 'Mentorship', detail: 'Guidance from experienced engineers and mentors.' },
    { icon: '💼', label: 'Internship', detail: 'Real-world team experience with measurable outcomes.' },
    { icon: '🚀', label: 'Placement', detail: 'Interview prep, referrals, and job conversions.' },
  ];

  const faqs = [
    { q: 'Do I need prior experience?', a: 'No. We look for fundamentals, curiosity, and grit. The training and internships will build experience.' },
    { q: 'Are there stipends or bonuses?', a: 'Internships may include stipends. Top performers receive bonuses and additional opportunities.' },
    { q: 'How long until placement?', a: 'Timelines vary. Many freshers complete the training + internship in 3–4 months and then move into interviews.' },
    { q: 'Is the program remote or onsite?', a: 'We support both, depending on partner companies and project needs.' },
  ];

  return (
    <main id="main" className="qh-page" aria-label="For Freshers">
      <section className="qh-section" aria-labelledby="ff-title">
        <div className="qh-container">
          <span className="qh-eyebrow">For freshers</span>
          <h1 id="ff-title" className="qh-title" style={{ fontSize: 36 }}>Kickstart your tech career</h1>
          <p className="qh-subtitle" style={{ maxWidth: 820 }}>
            Learn practical skills, build real projects, gain internship experience, and convert to a full-time role with placement support.
          </p>
          <div className="qh-hero__actions" style={{ marginTop: 10 }}>
            <a href="/contact" className="qh-btn qh-btn--primary">Apply now</a>
            <a href="/about" className="qh-btn qh-btn--secondary">About the program</a>
          </div>
        </div>
      </section>

      <ProgramPath milestones={milestones} title="Your journey" eyebrow="Program path" />

      <HowItWorks
        title="Learn by doing"
        eyebrow="How it works"
        subtitle="Hands-on curriculum with mentorship, projects, and real-world internships."
      />

      <Faq items={faqs} title="Fresher FAQs" eyebrow="FAQ" subtitle="Everything you need to know to get started." />

      <CTASection
        title="Ready to launch your career?"
        subtitle="Join the Quantum Hire program and get on the fast track to your first role."
        primary={{ href: '/contact', label: 'Apply / Contact' }}
        secondary={{ href: '/about', label: 'Learn more' }}
      />

      <style>{`
        :root { --qh-text: #0B1F35; --qh-accent: #9AA7B0; }
        .qh-container { max-width: 1120px; margin: 0 auto; padding: 24px 16px; }
      `}</style>
    </main>
  );
}
