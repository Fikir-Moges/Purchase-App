import '../../styles/body.css';

const testimonials = [
  {
    text: "I've ordered from PurchaseApp three times already and every single time the quality blew me away. Super fast delivery too — arrived in 24 hours!",
    name: 'Sarah K.',
    role: 'Verified Buyer',
    avatar: '👩‍💼',
    rating: 5,
    color: '#7c3aed',
  },
  {
    text: "The return process is so smooth. I returned a pair of shoes that didn't fit and got my refund the next day. Customer support is genuinely amazing.",
    name: 'Marcus T.',
    role: 'Premium Member',
    avatar: '👨‍🎤',
    rating: 5,
    color: '#ec4899',
  },
  {
    text: "Found this amazing headset at half the price of other sites. The quality is identical. PurchaseApp has become my go-to for tech products.",
    name: 'Priya R.',
    role: 'Tech Enthusiast',
    avatar: '👩‍💻',
    rating: 5,
    color: '#10b981',
  },
  {
    text: "The loyalty rewards program is incredible. I've earned enough points for a free order just from my regular shopping. Love this platform!",
    name: 'James O.',
    role: 'Gold Member',
    avatar: '🧑‍🚀',
    rating: 5,
    color: '#f97316',
  },
  {
    text: "Shopping UI is incredibly clean and the search filters make it so easy to find exactly what I need. Highly recommend to everyone.",
    name: 'Leila M.',
    role: 'Fashion Blogger',
    avatar: '👸',
    rating: 5,
    color: '#06b6d4',
  },
  {
    text: "I was skeptical at first, but their product verification really works. Everything I've bought has been 100% authentic. Will keep coming back.",
    name: 'Daniel W.',
    role: 'Verified Buyer',
    avatar: '🧔',
    rating: 5,
    color: '#a855f7',
  },
];

const Testimonials = () => (
  <section className="section">
    <div className="section-inner">
      <div className="section-header">
        <div className="section-label">Reviews</div>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-desc">
          Real reviews from real shoppers. We're proud of our 4.9★ average rating across 50,000+ customers.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="testimonial-card"
            style={{ animationDelay: `${i * 0.09}s` }}
          >
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{t.text}</p>

            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                style={{ background: `${t.color}22`, border: `1px solid ${t.color}44` }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
                <div className="testimonial-stars">
                  {'★'.repeat(t.rating).split('').map((s, j) => (
                    <span key={j} className="star-filled">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
