# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- Lightweight: No heavy UI frameworks — uses only vanilla CSS and React
- Modern UI: Clean, responsive design with Quantum Hire brand styling
- Fast: Minimal dependencies for quick loading times
- Simple: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open http://localhost:3000 to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Contact Form Integration

The Contact page uses a validated form and a stubbed service to simulate submission. This provides a clear integration point to connect to a real backend or email handler.

### Files

- src/pages/Contact.jsx — UI, form state, accessibility, and validation flow
- src/services/contactService.js — Stub service functions for submission and validation

### Payload

The submitContact function expects the following payload shape:

```ts
{
  name: string;     // Required, min 2 chars
  email: string;    // Required, valid email format
  company: string;  // Required, min 2 chars
  message: string;  // Required, min 10 chars
}
```

Validation is performed by validateContactPayload(payload) and returns a map of field errors when present.

### Stub Handler

The default stub simulates latency and allows you to test success and error states locally:

- Success path: Any payload with valid fields and an email not containing the substring "fail"
- Simulated error: If email includes "fail", submitContact throws an error with code "SIMULATED_ERROR"

```javascript
// src/services/contactService.js (excerpt)
export async function submitContact(payload) {
  // ...guards and simulated latency...
  if (String(payload.email).toLowerCase().includes('fail')) {
    const error = new Error('Simulated submission error.');
    error.code = 'SIMULATED_ERROR';
    throw error;
  }
  return { ok: true, message: 'Contact request submitted.' };
}
```

### Wiring to a Real Backend (Replace the Stub)

Replace the body of submitContact with a real network call. Example using fetch:

```javascript
export async function submitContact(payload) {
  const res = await fetch(process.env.REACT_APP_CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Failed to submit contact request');
  }
  return { ok: true, message: 'Contact request submitted.' };
}
```

- Configure REACT_APP_CONTACT_ENDPOINT in your environment to point to your API route (e.g., https://api.example.com/contact).
- Ensure CORS and CSRF protections are configured appropriately on your backend.
- Consider spam protection (honeypot fields or server-side checks) rather than intrusive CAPTCHAs for better UX.

## Privacy-Friendly Analytics (Placeholder)

This project does not ship with analytics by default. You can add a privacy-friendly analytics tool later (e.g., Plausible, Umami, or self-hosted PostHog) following a minimal and consent-friendly approach.

### Recommended Approach

1. Add a small analytics loader component that can be toggled via an environment variable.
2. Use a first-party subdomain or self-hosted instance to minimize third-party tracking risk.
3. Respect Do Not Track and provide a simple toggle or link to opt out.

### Example Placeholder

```jsx
// Example: src/components/analytics/Analytics.js (to be created in the future)
export default function Analytics() {
  if (process.env.REACT_APP_ANALYTICS_ENABLED !== 'true') return null;
  // Insert the script tag or SDK init here when you integrate your chosen provider.
  return null;
}
```

Then include it at the top level (e.g., in App.js) once you implement it:

```jsx
// import Analytics from './components/analytics/Analytics';
// ...
// <Analytics />
```

Environment variables:

- REACT_APP_ANALYTICS_ENABLED=true|false
- REACT_APP_SITE_URL=https://www.yoursite.example (used by SEO component for canonical links)

## Customization

### Colors

The main brand and theme variables are defined in src/App.css and src/styles/home.css. Update these CSS variables to customize the palette and theme.

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles primarily in src/App.css and src/styles/home.css.

Common components include:
- Buttons (.qh-btn, .qh-btn--primary)
- Container (.qh-container)
- Navigation (Navbar.jsx)
- Typography (.qh-title, .qh-subtitle)
- Sections (SectionHeader.jsx, CTASection.jsx)

## Learn More

To learn React, check out the React documentation.

### Code Splitting

See: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

See: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

See: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

See: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

See: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

See: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
