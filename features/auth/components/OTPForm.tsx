import Link from "next/link";
import OTPInput from "./OTPInput";
import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";

const OTPForm = () => {
  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader
        title="التحقق من الكود"
        description="ادخل الكود المكون من 4 أرقام"
      />

      <form className="flex flex-col gap-6">
        <div className="flex justify-center gap-3">
          {[0, 1, 2, 3].map((input) => {
            return <OTPInput key={input} />;
          })}
        </div>

        <MainButton fullWidth> اعد تعيين كلمة المرور</MainButton>

        <p className="text-center text-sm text-zinc-500">
          لم يصلك الكود؟
          <Link
            href="/login"
            className="mr-1 font-semibold text-blue-700 hover:underline"
          >
            إرسال مره اخرى
          </Link>
        </p>
      </form>
    </div>
  );
};

export default OTPForm;
