import { z } from "zod";

// Login

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صحيح")
    .trim(),

  password: z.string().min(1, "كلمة المرور مطلوبة"),

  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Register

export const registerSchema = z
  .object({
    first_name: z
      .string()
      .min(2, "الاسم الأول يجب أن يكون حرفين على الأقل")
      .max(50, "الاسم الأول طويل جدًا")
      .trim(),

    last_name: z
      .string()
      .min(2, "اسم العائلة يجب أن يكون حرفين على الأقل")
      .max(50, "اسم العائلة طويل جدًا")
      .trim(),

    email: z
      .string()
      .min(1, "البريد الإلكتروني مطلوب")
      .email("البريد الإلكتروني غير صحيح")
      .trim(),

    phone: z
      .string()
      .min(10, "رقم الهاتف غير صحيح")
      .max(15, "رقم الهاتف غير صحيح")
      .regex(/^[0-9+\s-]+$/, "رقم الهاتف غير صحيح")
      .trim(),

    password: z.string().min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),

    password_confirmation: z.string().min(1, "تأكيد كلمة المرور مطلوب"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["password_confirmation"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

// Forgot Password

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صحيح")
    .trim(),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// OTP

export const otpSchema = z.object({
  otp: z
    .string()
    .length(4, "الكود يجب أن يتكون من 4 أرقام")
    .regex(/^\d{4}$/, "الكود يجب أن يحتوي على أرقام فقط"),
});

export type OTPFormData = z.infer<typeof otpSchema>;

// Reset Password

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),

    password_confirmation: z.string().min(1, "تأكيد كلمة المرور مطلوب"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["password_confirmation"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
