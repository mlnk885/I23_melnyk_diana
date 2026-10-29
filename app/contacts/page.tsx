
export default function ContactsPage() {
  return (
    <main className="contacts-page">
      <span className="eyebrow">МИ НА ЗВ’ЯЗКУ</span>
      <h1>Контакти</h1>
      <p className="catalog-description">
        Маєш запитання щодо товарів? Ми радо допоможемо!
      </p>

      <div className="contact-grid">
        <article className="contact-card">
          <span className="contact-icon">📍</span>
          <h2>Наша адреса</h2>
          <p>м. Київ, вул. Технологічна, 10</p>
        </article>

        <article className="contact-card">
          <span className="contact-icon">📞</span>
          <h2>Телефон</h2>
          <p>+380 00 123 45 67</p>
        </article>

        <article className="contact-card">
          <span className="contact-icon">✉️</span>
          <h2>Електронна пошта</h2>
          <p>info@techstore.example</p>
        </article>
      </div>
    </main>
  );
}
