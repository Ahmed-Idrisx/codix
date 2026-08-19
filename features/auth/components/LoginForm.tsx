"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";
import { LoginFormData, loginSchema } from "../schemas/auth.schema";
import FormInput from "@/components/shared/FormInput";
import { FiSend } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/");

    reset();
  };

  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader title="مرحباً بعودتك!" />

      <div className="mb-6 flex w-full justify-center">
        <div className="flex w-full max-w-sm gap-2 rounded-full bg-blue-100 p-2 text-xs sm:text-base">
          <button
            type="button"
            className="flex-1 rounded-full bg-blue-400 py-3 font-medium text-white"
          >
            تسجيل الدخول
          </button>

          <Link
            href="/register"
            className="flex-1 rounded-full bg-blue-700 py-3 text-center font-medium text-white"
          >
            إنشاء حساب
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label="البريد الإلكتروني"
          type="email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormInput
          label="كلمة المرور"
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-semibold">
            <input type="checkbox" {...register("rememberMe")} />
            تذكرني
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            نسيت كلمة المرور؟
          </Link>
        </div>

        {/* Submit */}
        <MainButton
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingText="جاري التسجيل..."
          icon={<FiSend size={18} />}
        >
          تسجيل الدخول{" "}
        </MainButton>
      </form>
    </div>
  );
}
