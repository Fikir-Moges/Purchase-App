import { useState } from 'react';
import { FaShoppingCart, FaHeart, FaArrowRight } from 'react-icons/fa';
import '../../styles/body.css';

export type Product = {
  id: number;
  emoji: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: 'new' | 'hot' | 'sale';
};

export const ALL_PRODUCTS: Product[] = [
  { id: 1,  emoji: '📱', name: 'ProMax Ultra Smartphone',       category: 'Electronics', price: 899,  originalPrice: 1199, rating: 4.8, reviews: 2341, badge: 'hot'  },
  { id: 2,  emoji: '🎧', name: 'AuraSound Wireless Headphones', category: 'Electronics', price: 199,  originalPrice: 299,  rating: 4.9, reviews: 1876, badge: 'sale' },
  { id: 3,  emoji: '👟', name: 'CloudStep Running Shoes',       category: 'Sports',      price: 149,  originalPrice: 189,  rating: 4.7, reviews: 934,  badge: 'new'  },
  { id: 4,  emoji: '⌚', name: 'SmartPulse Watch Series 5',     category: 'Electronics', price: 349,  originalPrice: 449,  rating: 4.6, reviews: 1203, badge: 'sale' },
  { id: 5,  emoji: '💻', name: 'ProBook 15" Laptop',            category: 'Electronics', price: 1299, originalPrice: 1599, rating: 4.9, reviews: 456                  },
  { id: 6,  emoji: '🎮', name: 'GameStorm Controller Pro',      category: 'Gaming',      price: 79,   originalPrice: 99,   rating: 4.5, reviews: 789,  badge: 'new'  },
  { id: 7,  emoji: '👜', name: 'Luxe Leather Handbag',          category: 'Fashion',     price: 259,  originalPrice: 329,  rating: 4.8, reviews: 612                  },
  { id: 8,  emoji: '🕶️', name: 'AeroFrame Sunglasses',          category: 'Fashion',     price: 119,  originalPrice: 149,  rating: 4.4, reviews: 328,  badge: 'hot'  },
];

type Props = {
  onAddToCart: (product: Product) => void;
};

const renderStars = (rating: number) => {
  const stars = [];
  const full = Math.floor(rating);
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= full ? 'star-filled' : 'star-empty'}>
        {i <= full ? '★' : '☆'}
      </span>
    );
  }
  return stars;
};

const ProductCard = ({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (p: Product) => void;
}) => {
  const [wished, setWished] = useState(false);
  const [added, setAdded]   = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <span className="product-emoji">{product.emoji}</span>

        {product.badge && (
          <span className={`product-badge badge-${product.badge}`}>
            {product.badge === 'new' ? '✨ New' : product.badge === 'hot' ? '🔥 Hot' : '🏷️ Sale'}
          </span>
        )}

        <button
          className={`product-wishlist ${wished ? 'active' : ''}`}
          onClick={() => setWished(!wished)}
          aria-label="Toggle wishlist"
        >
          <FaHeart style={{ color: wished ? '#ec4899' : '#9ca3af' }} />
        </button>
      </div>

      <div className="product-info">
        <div className="product-category-tag">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-count">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="product-footer">
          <div className="product-price">
            <span className="price-current">${product.price}</span>
            {product.originalPrice && (
              <span className="price-original">${product.originalPrice}</span>
            )}
            {discount > 0 && (
              <span className="price-discount">-{discount}%</span>
            )}
          </div>

          <button
            className={`btn-add-cart ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added' : <><FaShoppingCart /> Add</>}
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = ({ onAddToCart }: Props) => (
  <section className="section">
    <div className="section-inner">
      <div className="section-header">
        <div className="section-label">Top Picks</div>
        <h2 className="section-title">Featured Products</h2>
        <p className="section-desc">
          Handpicked bestsellers and new arrivals, all with unbeatable prices and fast shipping.
        </p>
      </div>

      <div className="products-grid">
        {ALL_PRODUCTS.map((p, i) => (
          <div key={p.id} style={{ animationDelay: `${i * 0.08}s` }}>
            <ProductCard product={p} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <a href="#" className="btn-view-all">
          View All Products <FaArrowRight />
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
