
"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form action={formAction} noValidate className="request-form">
      <div className="form-group">
        <label htmlFor="fullName">ПІБ студента</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Введіть ваше ім'я та прізвище"
        />
        {state.errors.fullName && (
          <p className="error">{state.errors.fullName[0]}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Електронна пошта</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />
        {state.errors.email && (
          <p className="error">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="topic">Тема консультації</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>Оберіть тему</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Next.js">Next.js</option>
        </select>
        {state.errors.topic && (
          <p className="error">{state.errors.topic[0]}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="details">Запитання до викладача</label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Опишіть ваше запитання (мінімум 10 символів)"
        />
        {state.errors.details && (
          <p className="error">{state.errors.details[0]}</p>
        )}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Надсилання..." : "Надіслати запит"}
      </button>

      {state.message && (
        <p
          className={state.success ? "success" : "error"}
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
