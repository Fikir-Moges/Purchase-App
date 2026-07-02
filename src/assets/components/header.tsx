import { useState } from 'react';
import { FaHome, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#', icon: <FaHome /> },
    { label: 'Shop', href: '#', icon: <FaShoppingCart /> },
    { label: 'Profile', href: '#', icon: <FaUser /> },
  ];

  return (
    <header className="site-header">
      {/* Top accent bar */}
      <div className="header-accent-bar" />

      <div className="header-inner">
        {/* Brand */}
        <a href="#" className="header-brand">
          <span className="brand-icon">🛒</span>
          <span className="brand-text">
            Purchase<span className="brand-highlight">App</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="header-nav desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              <span className="nav-icon">{link.icon}</span>
              {link.label}
            </a>
          ))}
          <a href="#" className="nav-cta">Get Started</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-icon">{link.icon}</span>
            {link.label}
          </a>
        ))}
        <a href="#" className="nav-cta mobile-cta" onClick={() => setMenuOpen(false)}>
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Header;