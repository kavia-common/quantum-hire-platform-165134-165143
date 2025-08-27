import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import ForCompanies from './pages/ForCompanies';
import ForFreshers from './pages/ForFreshers';
import About from './pages/About';
import Contact from './pages/Contact';

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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/for-freshers" element={<ForFreshers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
