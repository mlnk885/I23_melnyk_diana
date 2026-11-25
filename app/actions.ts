
"use server";

import { z } from "zod";

const orderSchema = z.object({
  fullName: z.string().trim().min(2, "Введіть ім'я (мінімум 2 символи)"),
  email: z.email("Введіть коректну електронну пошту"),
  phone: z.string().trim().min(10, "Введіть коректний номер телефону"),
  address: z.string().trim().min(5, "Вкажіть адресу доставки"),
});

export type OrderState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    phone?: string[];
    address?: string[];
  };
};

export async function submitOrder(
  _prevState: OrderState,
  formData: FormData
): Promise<OrderState> {
  const result = orderSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Перевірте правильність заповнення форми",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    success: true,
    message: "Ваше замовлення успішно оформлено!",
    errors: {},
  };
}
