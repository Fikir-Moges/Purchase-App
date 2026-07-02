import '../../styles/body.css';

const categories = [
  { emoji: '📱', name: 'Electronics',  count: '1,240 items' },
  { emoji: '👗', name: 'Fashion',       count: '3,800 items' },
  { emoji: '🏠', name: 'Home & Living', count: '980 items'   },
  { emoji: '💄', name: 'Beauty',        count: '560 items'   },
  { emoji: '⚽', name: 'Sports',        count: '720 items'   },
  { emoji: '📚', name: 'Books',         count: '2,100 items' },
  { emoji: '🎮', name: 'Gaming',        count: '430 items'   },
  { emoji: '🍕', name: 'Food & Drink',  count: '890 items'   },
];

const Categories = () => (
  <section className="section section-alt">
    <div className="section-inner">
      <div className="section-header">
        <div className="section-label">Browse</div>
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-desc">
          Find everything you need across our wide range of categories — from the latest tech to everyday essentials.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((cat, i) => (
          <a
            key={cat.name}
            href="#"
            className="category-card"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <span className="category-emoji">{cat.emoji}</span>
            <span className="category-name">{cat.name}</span>
            <span className="category-count">{cat.count}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
