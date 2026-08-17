import { z } from "zod";
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون حرفين على الأقل")
    .max(50, "الاسم طويل جدًا"),

  email: z.string().email("من فضلك أدخل بريد إلكتروني صحيح"),

  phone: z
    .string()
    .min(10, "رقم الهاتف غير صحيح")
    .max(15, "رقم الهاتف غير صحيح")
    .regex(/^[0-9+\s-]+$/, "رقم الهاتف غير صحيح"),

  message: z
    .string()
    .min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل")
    .max(1000, "الرسالة طويلة جدًا"),
});
export type ContactFormData = z.infer<typeof contactSchema>;
