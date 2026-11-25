
import OrderForm from "../components/OrderForm";

export default function OrderPage() {
  return (
    <main className="practice-container">
      <div className="practice-card">
        <span className="practice-label">
          TECHSTORE
        </span>

        <h1>Оформлення замовлення</h1>

        <p className="practice-description">
          Заповніть контактні дані та адресу доставки,
          щоб підтвердити своє замовлення.
        </p>

        <OrderForm />

        <p className="student-info">
          Виконала: Діана Мельник | Група І-23
        </p>
      </div>
    </main>
  );
}
