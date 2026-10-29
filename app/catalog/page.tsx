
import Link from "next/link";

async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return [
    { name: "iPhone 16", category: "Смартфон", price: "34 999 грн" },
    { name: "Samsung Galaxy", category: "Смартфон", price: "27 999 грн" },
    { name: "MacBook Air", category: "Ноутбук", price: "49 999 грн" },
    { name: "ASUS VivoBook", category: "Ноутбук", price: "29 999 грн" },
  ];
}
const products = [
  { name: "iPhone 16", category: "Смартфон", price: "34 999 грн" },
  { name: "Samsung Galaxy", category: "Смартфон", price: "27 999 грн" },
  { name: "MacBook Air", category: "Ноутбук", price: "49 999 грн" },
  { name: "ASUS VivoBook", category: "Ноутбук", price: "29 999 грн" },
];

export default async function CatalogPage() {
  const products = await getProducts();
  return (
    <main className="catalog-page">
      <span className="eyebrow">НАШ АСОРТИМЕНТ</span>
      <h1>Каталог товарів</h1>
      <p className="catalog-description">
        Обирай сучасну техніку для навчання, роботи та відпочинку.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-icon">
              {product.category === "Смартфон" ? "📱" : "💻"}
            </div>
            <span className="product-category">{product.category}</span>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <Link
              href={
                product.category === "Смартфон"
                  ? "/catalog/smartphones"
                  : "/catalog/laptops"
              }
              className="product-link"
            >
              Переглянути категорію →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
