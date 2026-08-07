"use client";

import Link from "next/link";
import { FormInput } from "./FormInput";
import MainButton from "@/components/shared/MainButton";
import AuthHeader from "./AuthHeader";

export function LoginForm() {
  return (
    <div className="w-full max-w-lg px-4">
      <AuthHeader title="مرحباً بعودتك!" />
      <div className="mb-6 flex w-full justify-center">
        <div className="flex w-full max-w-sm gap-2 rounded-full bg-blue-100 p-2 text-xs sm:text-base">
          <button className="flex-1 rounded-full bg-blue-400 py-3 font-medium text-white">
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

      <form className="space-y-4">
        <FormInput label="البريد الإلكتروني" type="email" />

        <FormInput label="كلمة المرور" type="password" />

        <div className="flex items-center justify-between">
          <label className="flex justify-start gap-2 text-sm font-semibold">
            <input type="checkbox" />
            تذكرني
          </label>

          <Link
            href="/forgot-password"
            className="text-blue-700 hover:underline text-sm font-semibold"
          >
            نسيت كلمة المرور؟
          </Link>
        </div>

        <MainButton fullWidth> تسجيل الدخول</MainButton>
      </form>
    </div>
  );
}
