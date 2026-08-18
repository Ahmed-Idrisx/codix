"use client";
import FormInput from "@/components/shared/FormInput";
import MainButton from "@/components/shared/MainButton";
import { ProfileFormValues } from "@/features/profile/schemas/profile.schema";
import { FormEventHandler } from "react";
import {
  UseFormRegister,
  FieldErrors,
  Control,
  useWatch,
} from "react-hook-form";
import { FiMail, FiPhone, FiSave, FiUser } from "react-icons/fi";

interface PersonalInfoFormProps {
  register: UseFormRegister<ProfileFormValues>;
  errors: FieldErrors<ProfileFormValues>;
  control: Control<ProfileFormValues>;
  isSubmitting: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const PersonalInfoForm = ({
  register,
  errors,
  control,
  isSubmitting,
  onSubmit,
}: PersonalInfoFormProps) => {
  const password = useWatch({
    control,
    name: "password",
  });

  return (
    <div className="rounded-3xl border border-gray-100 bg-gray-100 p-6 shadow-sm sm:p-8">
      <div className="mb-5 flex items-center border-b border-gray-200 pb-5">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          البيانات الشخصية
        </h2>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-6">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormInput<ProfileFormValues>
            label="الاسم الأول"
            name="first_name"
            type="text"
            placeholder="الاسم الأول"
            register={register}
            error={errors.first_name}
            icon={<FiUser />}
          />

          <FormInput<ProfileFormValues>
            label="اسم العائلة"
            name="last_name"
            type="text"
            placeholder="اسم العائلة"
            register={register}
            error={errors.last_name}
            icon={<FiUser />}
          />
        </div>

        {/* Email */}

        <FormInput<ProfileFormValues>
          label=" البريد الإلكتروني"
          name="email"
          type="email"
          placeholder="example@email.com"
          register={register}
          error={errors.email}
          icon={<FiMail />}
        />

        {/* Phone */}

        <FormInput<ProfileFormValues>
          label="رقم الهاتف"
          name="phone"
          type="phone"
          placeholder="رقم الهاتف"
          register={register}
          error={errors.phone}
          icon={<FiPhone />}
        />

        {/* Bio */}

        <div className="flex flex-col gap-2">
          <label htmlFor="bio" className="text-sm font-semibold sm:text-lg">
            السيرة الذاتية
          </label>

          <textarea
            id="bio"
            rows={4}
            placeholder="اكتب نبذة عن نفسك..."
            {...register("bio")}
            className={`min-h-40 w-full resize-none rounded-2xl border bg-white px-5 py-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 sm:text-base ${
              errors.bio
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-600"
            }`}
          />

          {errors.bio && (
            <p className="text-xs font-medium text-red-500">
              {errors.bio.message}
            </p>
          )}
        </div>

        {/* Password */}

        <div className="border-t border-gray-200 pt-6">
          <h3 className="mb-4 text-lg font-bold text-gray-800">
            تغيير كلمة المرور
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormInput<ProfileFormValues>
              label="كلمة المرور الجديدة"
              name="password"
              type="password"
              placeholder="••••••••"
              register={register}
              error={errors.password}
            />

            <FormInput<ProfileFormValues>
              label="تأكيد كلمة المرور"
              name="password_confirmation"
              type="password"
              placeholder="••••••••"
              register={register}
              error={errors.password_confirmation}
            />
          </div>

          {!password && (
            <p className="mt-2 text-xs text-gray-400">
              اترك الحقول فارغة إذا كنت لا تريد تغيير كلمة المرور.
            </p>
          )}
        </div>

        {/* Submit */}

        <div className="pt-4">
          <MainButton
            type="submit"
            fullWidth
            isLoading={isSubmitting}
            loadingText="جاري الحفظ..."
            icon={<FiSave size={18} />}
          >
            حفظ التغييرات
          </MainButton>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
