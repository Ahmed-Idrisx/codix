"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MainButton from "@/components/shared/MainButton";

import AuthHeader from "./AuthHeader";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "../schemas/auth.schema";
import FormInput from "@/components/shared/FormInput";
import { FiSend } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ResetPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/login");

    reset();
  };

  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader
        title="إنشاء كلمة المرور"
        description="يجب أن تحتوي كلمة المرور الجديدة على 8 أحرف على الأقل"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          loadingText="جاري إعادة تعيين..."
          icon={<FiSend size={18} />}
        >
          إعادة تعيين كلمة المرور
        </MainButton>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
