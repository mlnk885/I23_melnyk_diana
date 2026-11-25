
"use client";

import { useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
};

export default function ProductSearch({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <input
        type="search"
        placeholder="Пошук товарів..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="product-search"
      />

      <p className="search-count">
        Знайдено товарів: {filteredProducts.length}
      </p>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <span className="product-category">
              {product.category}
            </span>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price} $</p>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>Товарів за вашим запитом не знайдено.</p>
      )}
    </section>
  );
}
