
const smartphones = [
  { name: "iPhone 16", price: "34 999 грн", icon: "📱" },
  { name: "Samsung Galaxy S25", price: "39 999 грн", icon: "📲" },
  { name: "Xiaomi Redmi Note", price: "10 999 грн", icon: "📱" },
];

export default function SmartphonesPage() {
  return (
    <main className="category-page">
      <span className="eyebrow">МОБІЛЬНІ ТЕХНОЛОГІЇ</span>
      <h1>Смартфони</h1>
      <p className="catalog-description">
        Обирай смартфон для спілкування, навчання та розваг.
      </p>

      <div className="product-grid">
        {smartphones.map((phone) => (
          <article className="product-card" key={phone.name}>
            <div className="product-icon">{phone.icon}</div>
            <span className="product-category">Смартфон</span>
            <h3>{phone.name}</h3>
            <p className="price">{phone.price}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
