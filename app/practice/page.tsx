
import InteractiveList from "./InteractiveList";

export default function PracticePage() {
  const products = [
    { id: 1, name: "Ноутбук Lenovo IdeaPad", category: "Ноутбуки", price: 18500 },
    { id: 2, name: "Миша Logitech M185", category: "Аксесуари", price: 650 },
    { id: 3, name: "Клавіатура HyperX Alloy", category: "Аксесуари", price: 3200 },
    { id: 4, name: "Монітор Samsung 24", category: "Монітори", price: 7200 },
    { id: 5, name: "Навушники JBL Tune 510BT", category: "Навушники", price: 1900 },
    { id: 6, name: "Відеокарта ASUS RTX", category: "Комплектуючі", price: 14500 },
  ];

  return (
    <main className="practice-page">
      <div className="practice-heading">
        <span className="practice-label">НАША КОЛЕКЦІЯ</span>
        <h1>Магазин техніки</h1>
        <p>Знайди техніку, яка ідеально підходить саме тобі.</p>
        <div className="total-products">
          У нашому каталозі <strong>{products.length}</strong> товарів
        </div>
      </div>

      <InteractiveList products={products} />
    </main>
  );
}
