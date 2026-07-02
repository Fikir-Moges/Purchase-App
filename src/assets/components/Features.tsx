import '../../styles/body.css';

const features = [
  {
    icon: '🚚',
    title: 'Free Fast Delivery',
    desc: 'Free shipping on all orders over $50. Express 2-day delivery available for premium members.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    desc: 'All transactions are encrypted with 256-bit SSL. We support all major cards and digital wallets.',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    desc: 'Not happy? Return any item within 30 days for a full refund, no questions asked.',
  },
  {
    icon: '🎁',
    title: 'Loyalty Rewards',
    desc: 'Earn points on every purchase. Redeem for discounts, early access, and exclusive products.',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    desc: 'Our customer support team is always available via live chat, email, or phone — anytime, anywhere.',
  },
  {
    icon: '✅',
    title: 'Verified Products',
    desc: 'Every product is vetted for quality and authenticity. Shop with complete confidence.',
  },
];

const Features = () => (
  <section className="section section-alt">
    <div className="section-inner">
      <div className="section-header">
        <div className="section-label">Why Us</div>
        <h2 className="section-title">Why Shop With Us?</h2>
        <p className="section-desc">
          We go beyond just selling products. We deliver an experience built on trust, speed, and care.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="feature-card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
