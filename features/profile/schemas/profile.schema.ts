import { z } from "zod";

export const profileSchema = z
  .object({
    first_name: z
      .string()
      .min(2, "الاسم الأول يجب أن يكون حرفين على الأقل")
      .max(50, "الاسم الأول طويل جدًا"),

    last_name: z
      .string()
      .min(2, "اسم العائلة يجب أن يكون حرفين على الأقل")
      .max(50, "اسم العائلة طويل جدًا"),

    email: z.string().email("البريد الإلكتروني غير صحيح"),

    phone: z
      .string()
      .regex(/^[0-9+\s-]*$/, "رقم الهاتف غير صحيح")
      .refine(
        (value) => value === "" || (value.length >= 10 && value.length <= 15),
        "رقم الهاتف غير صحيح",
      ),

    bio: z
      .string()
      .max(500, "النبذة يجب ألا تتجاوز 500 حرف")
      .optional()
      .or(z.literal("")),

    password: z
      .string()
      .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
      .optional()
      .or(z.literal("")),

    password_confirmation: z.string().optional().or(z.literal("")),

    avatar: z.instanceof(File).optional(),
  })
  .refine(
    (data) =>
      data.password === "" || data.password === data.password_confirmation,
    {
      message: "كلمتا المرور غير متطابقتين",
      path: ["password_confirmation"],
    },
  );

export type ProfileFormValues = z.infer<typeof profileSchema>;
