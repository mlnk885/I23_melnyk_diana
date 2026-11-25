
"use client";

import { useActionState } from "react";
import { submitOrder, type OrderState } from "../actions";

const initialState: OrderState = {
  success: false,
  message: "",
  errors: {},
};

export default function OrderForm() {
  const [state, formAction, isPending] = useActionState(
    submitOrder,
    initialState
  );

  return (
    <form action={formAction} className="order-form" noValidate>
      <div className="form-group">
        <label htmlFor="fullName">Ваше ім'я та прізвище</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Діана Мельник"
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
        <label htmlFor="phone">Номер телефону</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+380..."
        />
        {state.errors.phone && (
          <p className="error">{state.errors.phone[0]}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="address">Адреса доставки</label>
        <textarea
          id="address"
          name="address"
          rows={3}
          placeholder="Місто, вулиця, номер будинку"
        />
        {state.errors.address && (
          <p className="error">{state.errors.address[0]}</p>
        )}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Оформлення..." : "Підтвердити замовлення"}
      </button>

      {state.message && (
        <p className={state.success ? "success" : "error"} aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}
