import React, { useState } from 'react';
import Faq from '../components/common/Faq';


// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact page with simple form and integration hook placeholder. */
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Sending...' });
    try {
      // Integration hook: replace with actual submission logic
      await new Promise((res) => setTimeout(res, 600));
      setStatus({ type: 'success', text: 'Thanks! We will get back to you shortly.' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again later.' });
    }
  };

  const faqs = [
    { q: 'Do you support enterprise hiring?', a: 'Yes, we can run multi-cohort pilots and scale with your needs.' },
    { q: 'How fast can we start?', a: 'We can typically start discovery within a week and align on cohorts quickly after scoping.' },
  ];

  return (
    <main id="main" className="qh-page">
      <div className="qh-container">
        <h1>Contact Us</h1>
        <p style={{ color: 'var(--qh-accent)' }}>HR teams and companies can reach out via this form.</p>

        <div className="qh-card" style={{ marginTop: 12 }}>
          <form className="qh-form" onSubmit={onSubmit} aria-labelledby="contact-title">
            <div className="qh-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={onChange} required />
            </div>
            <div className="qh-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} required />
            </div>
            <div className="qh-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={onChange} required />
            </div>
            <button type="submit" className="qh-btn qh-btn--primary" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status.type !== 'idle' && (
              <div
                role={status.type === 'error' ? 'alert' : 'status'}
                className={`qh-status qh-status--${status.type}`}
                aria-live="polite"
              >
                {status.text}
              </div>
            )}
          </form>
        </div>

        <section className="qh-section--tight" aria-label="Contact information" style={{ paddingTop: 18 }}>
          <div className="qh-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="qh-card">
              <div className="qh-icon" aria-hidden="true">📧</div>
              <div className="qh-value__title" style={{ fontWeight: 700, marginTop: 8 }}>Email</div>
              <p className="qh-value__desc">hello@quantumhire.example</p>
            </div>
            <div className="qh-card">
              <div className="qh-icon" aria-hidden="true">📞</div>
              <div className="qh-value__title" style={{ fontWeight: 700, marginTop: 8 }}>Phone</div>
              <p className="qh-value__desc">+1 (000) 000-0000</p>
            </div>
          </div>
        </section>
      </div>

      <Faq items={faqs} eyebrow="FAQ" title="Before you reach out" subtitle="Quick answers that may help you right away." />

      <style>{`
        :root {
          --qh-primary: #0052CC;
          --qh-accent: #9AA7B0;
          --qh-text: #0B1F35;
        }
        .qh-container { max-width: 720px; margin: 0 auto; padding: 24px 16px; }
        h1 { color: var(--qh-text); margin-bottom: 8px; }

        .qh-form { display: grid; gap: 14px; margin-top: 12px; }
        .qh-field { display: grid; gap: 8px; }
        label { font-weight: 600; color: var(--qh-text); }
        input, textarea {
          padding: 12px 12px; border-radius: 10px; border: 1px solid #D9DFE6; font-size: 16px;
          outline: none; transition: border-color .2s ease, box-shadow .2s ease;
        }
        input:focus, textarea:focus { border-color: var(--qh-primary); box-shadow: 0 0 0 3px rgba(0,82,204,0.15); }

        .qh-btn { display: inline-block; padding: 12px 16px; border-radius: 10px; text-decoration: none; font-weight: 700; border: none; cursor: pointer; }
        .qh-btn--primary { background: var(--qh-primary); color: #fff; box-shadow: 0 6px 14px rgba(0,82,204,0.25); }
        .qh-btn--primary:disabled { opacity: 0.8; cursor: not-allowed; }

        .qh-status { margin-top: 10px; font-weight: 600; }
        .qh-status--success { color: #0B8A3A; }
        .qh-status--error { color: #B00020; }
        .qh-status--loading { color: var(--qh-accent); }
      `}</style>
    </main>
  );
}
