import MainButton from "@/components/shared/MainButton";
import { FormInput } from "./FormInput";
import AuthHeader from "./AuthHeader";

const ResetPasswordForm = () => {
  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader
        title="إنشاء كلمة المرور"
        description="يجب أن تحتوي كلمة المرور الجديدة على 8 أحرف على الأقل"
      />

      <form className="space-y-4">
        <FormInput label="كلمة المرور" type="password" />

        <FormInput label="تأكيد كلمة المرور" type="password" />

        <MainButton fullWidth> اعد تعيين كلمة المرور</MainButton>
        <label className="flex justify-start gap-2 text-sm font-semibold">
          <input type="checkbox" />
          تذكرني
        </label>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
