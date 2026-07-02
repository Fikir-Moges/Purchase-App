import { useState, useEffect } from 'react';
import { FaFire, FaArrowRight } from 'react-icons/fa';
import '../../styles/body.css';

const TARGET_DATE = new Date(Date.now() + 1000 * 60 * 60 * 23 + 1000 * 60 * 47 + 1000 * 32); // ~23h 47m 32s from now

const pad = (n: number) => String(n).padStart(2, '0');

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 47, s: 32 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section deals-section">
      <div className="deals-inner">
        <div className="deal-highlight">
          {/* Left: content */}
          <div className="deal-content">
            <div className="deal-badge">
              <FaFire /> Flash Deal — Limited Time
            </div>

            <h2 className="deal-title">
              Today's<br />
              Hottest Deal
            </h2>

            <p className="deal-desc">
              Get the ProMax Ultra Smartphone at an unprecedented price. 
              Don't miss out — this offer disappears when the timer hits zero.
            </p>

            {/* Countdown */}
            <div className="countdown">
              <div className="countdown-unit">
                <span className="countdown-value">{pad(timeLeft.h)}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{pad(timeLeft.m)}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{pad(timeLeft.s)}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>

            <button className="btn-primary-hero">
              Grab This Deal <FaArrowRight style={{ fontSize: 12 }} />
            </button>
          </div>

          {/* Right: product showcase */}
          <div className="deal-product-showcase">
            <div className="deal-product-glow" />
            <span className="deal-product-emoji">📱</span>
            <div className="deal-product-card-price">
              <span className="deal-price-current">$899</span>
              <span className="deal-price-original">$1,199</span>
              <span className="deal-price-save">You save $300 (25%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
