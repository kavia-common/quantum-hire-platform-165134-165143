import React, { useState } from 'react';
import Faq from '../components/common/Faq';
import { submitContact, validateContactPayload } from '../services/contactService';

// PUBLIC_INTERFACE
export default function Contact() {
  /**
   * Contact page with validated form and stub service submission.
   * Fields: name, email, company, message
   */
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'idle', text: '' });

    // Validate
    const validationErrors = validateContactPayload(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // Focus first invalid field for accessibility
      const firstInvalid = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstInvalid);
      if (el && el.focus) el.focus();
      return;
    }

    setStatus({ type: 'loading', text: 'Sending...' });
    try {
      const res = await submitContact(form);
      if (res.ok) {
        setStatus({ type: 'success', text: 'Thanks! We will get back to you shortly.' });
        setForm({ name: '', email: '', company: '', message: '' });
        setErrors({});
      } else {
        setStatus({ type: 'error', text: res.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: err?.message || 'Something went wrong. Please try again later.' });
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
          <form className="qh-form" onSubmit={onSubmit} aria-labelledby="contact-title" noValidate>
            <div className="qh-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <div id="name-error" className="qh-error" role="alert">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="qh-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <div id="email-error" className="qh-error" role="alert">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="qh-field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                value={form.company}
                onChange={onChange}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? 'company-error' : undefined}
                required
              />
              {errors.company && (
                <div id="company-error" className="qh-error" role="alert">
                  {errors.company}
                </div>
              )}
            </div>

            <div className="qh-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <div id="message-error" className="qh-error" role="alert">
                  {errors.message}
                </div>
              )}
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
        input[aria-invalid="true"], textarea[aria-invalid="true"] {
          border-color: #B00020;
          box-shadow: 0 0 0 3px rgba(176,0,32,0.10);
        }
        input:focus, textarea:focus { border-color: var(--qh-primary); box-shadow: 0 0 0 3px rgba(0,82,204,0.15); }

        .qh-btn { display: inline-block; padding: 12px 16px; border-radius: 10px; text-decoration: none; font-weight: 700; border: none; cursor: pointer; }
        .qh-btn--primary { background: var(--qh-primary); color: #fff; box-shadow: 0 6px 14px rgba(0,82,204,0.25); }
        .qh-btn--primary:disabled { opacity: 0.8; cursor: not-allowed; }

        .qh-error { color: #B00020; font-size: 14px; }
        .qh-status { margin-top: 10px; font-weight: 600; }
        .qh-status--success { color: #0B8A3A; }
        .qh-status--error { color: #B00020; }
        .qh-status--loading { color: var(--qh-accent); }
      `}</style>
    </main>
  );
}
