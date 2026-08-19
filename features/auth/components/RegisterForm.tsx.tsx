"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";
import FormInput from "@/components/shared/FormInput";
import { RegisterFormData, registerSchema } from "../schemas/auth.schema";
import { FiSend } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/login");
    reset();
  };

  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader title="مرحباً بك!" />

      <div className="mb-6 flex w-full justify-center">
        <div className="flex w-full max-w-sm gap-2 rounded-full bg-blue-100 p-2 text-xs sm:text-base">
          <Link
            href="/login"
            className="flex-1 rounded-full bg-blue-700 py-3 text-center font-medium text-white"
          >
            تسجيل الدخول
          </Link>

          <button
            type="button"
            className="flex-1 rounded-full bg-blue-400 py-3 font-medium text-white"
          >
            إنشاء حساب
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            label="الاسم الأول"
            type="text"
            name="first_name"
            register={register}
            error={errors.first_name}
          />

          <FormInput
            label="اسم العائلة"
            type="text"
            name="last_name"
            register={register}
            error={errors.last_name}
          />
        </div>

        <FormInput
          label="البريد الإلكتروني"
          type="email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormInput
          label="رقم الهاتف"
          type="tel"
          name="phone"
          register={register}
          error={errors.phone}
        />

        <FormInput
          label="كلمة المرور"
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />

        <FormInput
          label="تأكيد كلمة المرور"
          type="password"
          name="password_confirmation"
          register={register}
          error={errors.password_confirmation}
        />

        {/* Submit */}
        <MainButton
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingText="جاري إنشاء الحساب..."
          icon={<FiSend size={18} />}
        >
          إنشاء حساب
        </MainButton>
      </form>
    </div>
  );
}
