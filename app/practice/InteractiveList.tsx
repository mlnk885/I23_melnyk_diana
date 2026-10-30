
"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export default function InteractiveList({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState("");
  const [onlyCheap, setOnlyCheap] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = !onlyCheap || product.price <= 10000;

    return matchesSearch && matchesPrice;
  });

  return (
    <section className="catalog-section">
      <div className="catalog-heading">
        <div>
          <span className="practice-label">TECH STORE</span>
          <h2>Популярні товари</h2>
        </div>
        <span className="results-count">
          Знайдено: {filteredProducts.length}
        </span>
      </div>

      <div className="catalog-controls">
        <input
          className="search-input"
          type="text"
          placeholder="⌕  Пошук товарів..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <label className="filter-label">
          <input
            type="checkbox"
            checked={onlyCheap}
            onChange={(e) => setOnlyCheap(e.target.checked)}
          />
          Тільки до 10 000 грн
        </label>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-message">
          <h3>Нічого не знайдено</h3>
          <p>Спробуй змінити пошуковий запит або фільтр.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-icon">
                {product.category === "Ноутбуки" && "💻"}
                {product.category === "Аксесуари" && "⌨️"}
                {product.category === "Монітори" && "🖥️"}
                {product.category === "Навушники" && "🎧"}
                {product.category === "Комплектуючі" && "⚙️"}
              </div>

              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="product-price">
                {product.price.toLocaleString("uk-UA")} грн
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
