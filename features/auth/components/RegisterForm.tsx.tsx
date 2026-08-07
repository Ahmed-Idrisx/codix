"use client";

import Link from "next/link";
import { FormInput } from "./FormInput";
import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";

export function RegisterForm() {
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

          <button className="flex-1 rounded-full bg-blue-400 py-3 font-medium text-white">
            إنشاء حساب
          </button>
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput label="الاسم الأول" type="text" />

          <FormInput label="اسم العائلة" type="text" />
        </div>

        <FormInput label="البريد الإلكتروني" type="email" />

        <FormInput label="رقم الهاتف" type="tel" />

        <FormInput label="كلمة المرور" type="password" />

        <MainButton fullWidth>إنشاء حساب</MainButton>
      </form>
    </div>
  );
}
