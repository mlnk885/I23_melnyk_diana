
export default function Loading() {
  return (
    <main className="catalog-page loading-page">
      <div className="loader"></div>
      <h1>Завантажуємо товари...</h1>
      <p className="catalog-description">
        Будь ласка, зачекайте. Готуємо для вас каталог техніки.
      </p>
      <div className="skeleton-grid">
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
    </main>
  );
}
