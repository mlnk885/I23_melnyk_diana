
const laptops = [
  { name: "MacBook Air", price: "49 999 грн", icon: "💻" },
  { name: "ASUS VivoBook", price: "29 999 грн", icon: "💻" },
  { name: "Lenovo IdeaPad", price: "25 999 грн", icon: "🖥️" },
];

export default function LaptopsPage() {
  return (
    <main className="category-page">
      <span className="eyebrow">ТЕХНІКА ДЛЯ РОБОТИ</span>
      <h1>Ноутбуки</h1>
      <p className="catalog-description">
        Знайди ноутбук для навчання, роботи та творчості.
      </p>

      <div className="product-grid">
        {laptops.map((laptop) => (
          <article className="product-card" key={laptop.name}>
            <div className="product-icon">{laptop.icon}</div>
            <span className="product-category">Ноутбук</span>
            <h3>{laptop.name}</h3>
            <p className="price">{laptop.price}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
