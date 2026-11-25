
import RequestForm from "./components/RequestForm";

export default function PracticeNinePage() {
  return (
    <main className="practice-container">
      <div className="practice-card">
        <span className="practice-label">ПРАКТИЧНА РОБОТА №9</span>

        <h1>Запис на консультацію</h1>

        <p className="practice-description">
          Заповніть форму, щоб надіслати викладачу запит
          на консультацію з веброзробки.
        </p>

        <RequestForm />

        <p className="student-info">
          Виконала: Діана Мельник | Група І-23
        </p>
      </div>
    </main>
  );
}
