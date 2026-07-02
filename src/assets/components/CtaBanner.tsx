import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../../styles/body.css';

const CtaBanner = () => {
  const [email, setEmail]       = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="section section-alt" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <h2 className="cta-title">
              {subscribed ? '🎉 You\'re In!' : 'Get Exclusive Deals First'}
            </h2>
            <p className="cta-desc">
              {subscribed
                ? 'Thanks for subscribing! Watch your inbox for the best deals, hand-picked just for you.'
                : 'Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and members-only discounts.'}
            </p>

            {!subscribed && (
              <form className="cta-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="cta-input"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email for newsletter subscription"
                />
                <button type="submit" className="cta-btn">
                  Subscribe <FaArrowRight style={{ marginLeft: 6 }} />
                </button>
              </form>
            )}

            {subscribed && (
              <p style={{ fontSize: 48, marginTop: 8 }}>✅</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
