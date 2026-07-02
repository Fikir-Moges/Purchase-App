import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaShoppingCart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa';
import './styles/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="site-footer">
      {/* Wave divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--footer-bg)"
          />
        </svg>
      </div>

      <div className="footer-body">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <span className="footer-brand-icon">🛒</span>
              <span className="footer-brand-text">
                Purchase<span className="footer-brand-highlight">App</span>
              </span>
            </div>
            <p className="footer-tagline">
              Your premium shopping experience — discover, compare, and buy with confidence.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-icon"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {['Home', 'Shop', 'About Us', 'Blog', 'FAQ'].map((l) => (
                <li key={l}>
                  <a href="#" className="footer-link">
                    <span className="link-arrow">›</span> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              {['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Beauty'].map((c) => (
                <li key={c}>
                  <a href="#" className="footer-link">
                    <span className="link-arrow">›</span> {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Commerce St, Addis Ababa</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+251 91 234 5678</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>hello@purchaseapp.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="newsletter">
              <p className="newsletter-label">Subscribe to our newsletter</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button className="newsletter-btn" aria-label="Subscribe">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} PurchaseApp. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;