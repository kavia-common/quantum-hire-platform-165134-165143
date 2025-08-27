import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy-loaded route components to enable route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const ForCompanies = lazy(() => import('./pages/ForCompanies'));
const ForFreshers = lazy(() => import('./pages/ForFreshers'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Lightweight fallback UI shown during lazy chunk loading
function RouteFallback() {
  return (
    <div role="status" aria-live="polite" style={{ padding: 24 }}>
      Loading…
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** App root with theme toggle and route layout. */
  const [theme, setTheme] = useState('light');

  // Apply theme attribute to document for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{ position: 'fixed', zIndex: 1000 }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-companies" element={<ForCompanies />} />
            <Route path="/for-freshers" element={<ForFreshers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
