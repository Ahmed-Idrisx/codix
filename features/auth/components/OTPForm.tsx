"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";
import { OTPFormData, otpSchema } from "../schemas/auth.schema";
import { FiSend } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function OTPForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: OTPFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/reset-password");

    reset();
  };

  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader
        title="التحقق من الكود"
        description="ادخل الكود المكون من 4 أرقام"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex justify-center gap-3">
          <input
            {...register("otp")}
            inputMode="numeric"
            maxLength={4}
            autoComplete="one-time-code"
            className="w-48 rounded-xl border border-zinc-300 px-4 py-4 text-center text-2xl tracking-[1rem] outline-none focus:border-blue-600 focus:bg-blue-50"
          />
        </div>

        {errors.otp && (
          <p className="text-center text-sm font-medium text-red-500">
            {errors.otp.message}
          </p>
        )}

        {/* Submit */}
        <MainButton
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingText="جاري إعادة التعيين..."
          icon={<FiSend size={18} />}
        >
          إعادة تعيين كلمة المرور
        </MainButton>

        <p className="text-center text-sm text-zinc-500">
          لم يصلك الكود؟
          <Link
            href="/forgot-password"
            className="mr-1 font-semibold text-blue-700 hover:underline"
          >
            إرسال مرة أخرى
          </Link>
        </p>
      </form>
    </div>
  );
}
