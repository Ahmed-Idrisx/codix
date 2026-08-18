import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون حرفين على الأقل")
    .max(100, "الاسم طويل جدًا")
    .trim(),

  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صحيح")
    .trim(),

  phone: z
    .string()
    .min(10, "رقم الهاتف غير صحيح")
    .max(20, "رقم الهاتف غير صحيح")
    .trim(),

  attendance_type: z.string().min(1, "اختر طريقة الحضور"),

  branch: z.string().min(1, "اختر الفرع المناسب ليك"),

  coupon: z.string().trim().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
