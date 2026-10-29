
import Link from "next/link";

const products = [
  {
    name: "iPhone 16",
    category: "Смартфон",
    price: "34 999 грн",
    icon: "📱",
  },
  {
    name: "Samsung Galaxy",
    category: "Смартфон",
    price: "27 999 грн",
    icon: "📲",
  },
  {
    name: "MacBook Air",
    category: "Ноутбук",
    price: "49 999 грн",
    icon: "💻",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <span className="eyebrow">TECH STORE — ТЕХНОЛОГІЇ МАЙБУТНЬОГО</span>
        <h1>Техніка, яка надихає.</h1>
        <p>
          Відкривай нові можливості з сучасними смартфонами,
          ноутбуками та аксесуарами.
        </p>
        <Link href="/catalog" className="primary-button">
          Перейти до каталогу →
        </Link>
      </section>

      <section className="products">
        <div className="section-heading">
          <div>
            <span className="eyebrow">НАШ ВИБІР</span>
            <h2>Популярні товари</h2>
          </div>
          <Link href="/catalog" className="text-link">
            Усі товари →
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-icon">{product.icon}</div>
              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <Link href="/catalog" className="product-link">
                Переглянути →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="promo">
        <div>
          <span className="eyebrow">ЗРУЧНО ТА ШВИДКО</span>
          <h2>Знайди свою ідеальну техніку</h2>
          <p>Обирай пристрої для навчання, роботи та відпочинку.</p>
        </div>
        <Link href="/contacts" className="secondary-button">
          Зв’язатися з нами
        </Link>
      </section>
    </main>
  );
}
