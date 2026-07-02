import { FaShoppingCart, FaTimes, FaArrowRight } from 'react-icons/fa';
import { type Product } from './FeaturedProducts';
import '../../styles/body.css';

export type CartItem = Product & { qty: number };

type Props = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onQtyChange: (id: number, delta: number) => void;
};

const CartDrawer = ({ isOpen, onClose, items, onQtyChange }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-label="Shopping Cart">
        <div className="cart-header">
          <h2 className="cart-title">
            <FaShoppingCart /> My Cart
            {totalQty > 0 && (
              <span
                style={{
                  background: 'rgba(168,85,247,0.15)',
                  color: '#a855f7',
                  borderRadius: 50,
                  padding: '2px 10px',
                  fontSize: 13,
                  fontWeight: 700,
                  border: '1px solid rgba(168,85,247,0.3)',
                }}
              >
                {totalQty}
              </span>
            )}
          </h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            <FaTimes />
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🛒</span>
              <strong style={{ color: '#9ca3af' }}>Your cart is empty</strong>
              <span>Start adding some amazing products!</span>
              <button
                className="btn-view-all"
                onClick={onClose}
                style={{ marginTop: 16, pointerEvents: 'all' }}
              >
                Browse Products <FaArrowRight />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-emoji">{item.emoji}</div>
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${(item.price * item.qty).toFixed(2)}</p>
                </div>
                <div className="cart-item-qty">
                  <button
                    className="qty-btn"
                    onClick={() => onQtyChange(item.id, -1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-value">{item.qty}</span>
                  <button
                    className="qty-btn"
                    onClick={() => onQtyChange(item.id, 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total ({totalQty} items)</span>
              <span className="cart-total-value">${total.toFixed(2)}</span>
            </div>
            <button className="btn-checkout">
              Proceed to Checkout <FaArrowRight />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
