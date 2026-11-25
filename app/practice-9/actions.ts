
"use server";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "Введіть ПІБ (мінімум 2 символи)"),
  email: z.email("Введіть коректну електронну адресу"),
  topic: z.enum(["HTML", "CSS", "Next.js"], {
    error: "Оберіть тему консультації",
  }),
  details: z.string().trim().min(10, "Запитання має містити мінімум 10 символів"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    topic?: string[];
    details?: string[];
  };
};

export async function submitRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    details: formData.get("details"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    success: true,
    message: "Запит на консультацію перевірено!",
    errors: {},
  };
}
