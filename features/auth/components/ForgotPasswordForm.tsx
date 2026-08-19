"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";
import FormInput from "@/components/shared/FormInput";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "../schemas/auth.schema";
import { FiSend } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/otp");

    reset();
  };

  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader
        title="نسيت كلمة المرور؟"
        description="ادخل بريدك الإلكتروني وسوف نقوم بإرسال كود لإعادة تعيين كلمة المرور"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormInput
          label="البريد الإلكتروني"
          type="email"
          name="email"
          register={register}
          error={errors.email}
        />

        {/* Submit */}
        <MainButton
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingText="جاري الإرسال..."
          icon={<FiSend size={18} />}
        >
          إرسال الكود{" "}
        </MainButton>

        <p className="text-center text-sm text-zinc-500">
          اضغط هنا للعودة إلى{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-700 hover:underline"
          >
            تسجيل الدخول
          </Link>
        </p>
      </form>
    </div>
  );
}
