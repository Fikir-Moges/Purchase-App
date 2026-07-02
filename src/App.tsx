import { useState, useCallback } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import Hero            from './assets/components/Hero';
import Categories      from './assets/components/Categories';
import FeaturedProducts, { type Product } from './assets/components/FeaturedProducts';
import DealsSection    from './assets/components/DealsSection';
import Features        from './assets/components/Features';
import Testimonials    from './assets/components/Testimonials';
import CtaBanner       from './assets/components/CtaBanner';
import CartDrawer, { type CartItem } from './assets/components/CartDrawer';

import './styles/body.css';

type Toast = { id: number; message: string; icon: string };

let toastId = 0;

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen]   = useState(false);
  const [toasts, setToasts]       = useState<Toast[]>([]);

  const showToast = (message: string, icon = '🛒') => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, icon }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  };

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`${product.name} added to cart`, product.emoji);
  }, []);

  const handleQtyChange = useCallback((id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const totalQty = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      {/* ── Page body sections ── */}
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={handleAddToCart} />
      <DealsSection />
      <Features />
      <Testimonials />
      <CtaBanner />

      {/* ── Floating cart button ── */}
      <button
        className="cart-fab"
        onClick={() => setCartOpen(true)}
        aria-label="Open cart"
        id="cart-fab"
      >
        <FaShoppingCart />
        {totalQty > 0 && (
          <span className="cart-fab-badge">{totalQty}</span>
        )}
      </button>

      {/* ── Cart drawer ── */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onQtyChange={handleQtyChange}
      />

      {/* ── Toast notifications ── */}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <span className="toast-icon">{t.icon}</span>
            {t.message}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;