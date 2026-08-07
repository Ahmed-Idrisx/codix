import Link from "next/link";
import { FormInput } from "./FormInput";
import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";

export default function ForgotPasswordForm() {
  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader
        title="نسيت كلمة المرور؟"
        description="ادخل بريدك الإلكتروني وسوف نقوم بإرسال كود لإعادة تعيين كلمة المرور"
      />

      <form className="flex flex-col gap-6">
        <FormInput label="البريد الإلكتروني" type="email" />

        <MainButton fullWidth> إرسال الكود</MainButton>

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
