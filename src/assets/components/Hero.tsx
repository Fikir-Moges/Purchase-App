import { useEffect, useRef } from 'react';
import { FaShoppingBag, FaArrowRight, FaPlay } from 'react-icons/fa';
import '../../styles/body.css';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const count = 20;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'hero-particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${6 + Math.random() * 10}s`;
      p.style.animationDelay = `${Math.random() * 8}s`;
      p.style.width = `${1 + Math.random() * 3}px`;
      p.style.height = p.style.width;
      p.style.opacity = `${0.3 + Math.random() * 0.6}`;
      container.appendChild(p);
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-particles" ref={particlesRef} />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          🎉 New arrivals every week — up to 60% off
        </div>

        <h1 className="hero-title">
          Shop Smarter,<br />
          Live <span className="hero-title-gradient">Better.</span>
        </h1>

        <p className="hero-subtitle">
          Discover thousands of premium products handpicked for quality and value.
          Fast delivery, easy returns, and prices you'll love.
        </p>

        <div className="hero-actions">
          <button className="btn-primary-hero">
            <FaShoppingBag />
            Shop Now
            <FaArrowRight style={{ fontSize: 12 }} />
          </button>
          <button className="btn-secondary-hero">
            <FaPlay style={{ fontSize: 12 }} />
            Watch Demo
          </button>
        </div>

        <div className="hero-stats">
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '10K+', label: 'Products Listed' },
            { value: '99%',  label: 'Satisfaction Rate' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
