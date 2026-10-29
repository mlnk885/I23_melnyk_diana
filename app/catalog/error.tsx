
"use client";

import { useState } from "react";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="error-page">
      <div className="error-icon">!</div>

      <span className="eyebrow">СТАЛАСЯ ПОМИЛКА</span>

      <h1>Не вдалося завантажити товари</h1>

      <p>
        На жаль, під час завантаження каталогу виникла проблема.
        Спробуйте ще раз.
      </p>

      <button className="primary-button" onClick={reset}>
        Спробувати ще раз
      </button>

      <button
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Приховати деталі" : "Деталі помилки"}
      </button>

      {showDetails && (
        <pre className="error-details">
          {error.message || "Невідома помилка"}
        </pre>
      )}
    </main>
  );
}
