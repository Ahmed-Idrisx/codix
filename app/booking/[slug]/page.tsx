"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FiArrowRight,
  FiMapPin,
  FiTag,
  FiUser,
  FiMail,
  FiPhone,
  FiMonitor,
} from "react-icons/fi";

import { courses } from "@/data/courses";
import {
  BookingFormData,
  bookingSchema,
} from "@/features/booking/schemas/booking.schema";
import FormInput from "@/components/shared/FormInput";
import MainButton from "@/components/shared/MainButton";

const attendanceOptions = [
  {
    value: "online",
    label: "أونلاين",
  },
  {
    value: "offline",
    label: "أوفلاين",
  },
];

const branches = [
  {
    value: "nasr-city",
    label: "فرع مدينة نصر",
  },
  {
    value: "dokki",
    label: "فرع الدقي",
  },
  {
    value: "alexandria",
    label: "فرع الإسكندرية",
  },
];

const BookingPage = () => {
  const params = useParams();

  const slug = params.slug as string;

  const course = useMemo(
    () => courses.find((course) => course.slug === slug),
    [slug],
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
  });
  const attendanceType = watch("attendance_type");

  if (!course) {
    return (
      <section className="bg-blue-50">
        <div className="mx-auto max-w-350 px-5 py-15 sm:px-8">
          <div className="text-center">
            <h1 className="mb-3 text-2xl font-bold text-gray-900">
              الكورس غير موجود
            </h1>

            <p className="mb-6 text-gray-500">
              عفواً، لم نتمكن من العثور على الكورس المطلوب.
            </p>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-[#19327D]"
            >
              العودة إلى الكورسات
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const onSubmit = async (data: BookingFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-350 px-5 py-15 sm:px-8">
          {/* Back */}
          <Link
            href={`/courses/${course.slug}`}
            className="mb-5 flex w-fit items-center gap-1 text-base text-gray-600 transition-colors hover:text-blue-800 sm:text-lg"
          >
            <FiArrowRight className="h-5 w-5" />
            <span>العودة إلى تفاصيل الكورس</span>
          </Link>

          <div className="grid grid-cols-12 items-start gap-5">
            {/* Booking Form */}
            <div className="order-2 col-span-12 md:col-span-8 lg:order-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5 rounded-2xl bg-blue-50 p-6 sm:p-8"
              >
                {/* Header */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    إتمام الإشتراك
                  </h1>

                  <p className="text-sm text-gray-500 sm:text-base">
                    أكمل البيانات التالية لإتمام عملية الإشتراك بالدورة
                  </p>
                </div>

                {/* Name */}
                <FormInput<BookingFormData>
                  label="الاسم"
                  name="name"
                  type="text"
                  placeholder="أدخل اسمك"
                  register={register}
                  error={errors.name}
                  icon={<FiUser />}
                />
                {/* Email */}
                <FormInput<BookingFormData>
                  label=" البريد الإلكتروني"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  register={register}
                  error={errors.email}
                  icon={<FiMail />}
                />
                {/* Phone */}
                <FormInput<BookingFormData>
                  label="رقم الهاتف"
                  name="phone"
                  type="phone"
                  placeholder="رقم الهاتف"
                  register={register}
                  error={errors.phone}
                  icon={<FiPhone />}
                />

                {/* Attendance */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="attendance_type"
                    className="text-sm font-semibold sm:text-lg"
                  >
                    طريقة الحضور
                  </label>

                  <div className="relative">
                    <FiMonitor className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />

                    <select
                      id="attendance_type"
                      {...register("attendance_type")}
                      className={`w-full appearance-none rounded-full border bg-white py-3 pr-12 pl-5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 sm:text-base ${
                        errors.attendance_type
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-600"
                      }`}
                    >
                      <option value="">اختر طريقة الحضور</option>

                      {attendanceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {errors.attendance_type && (
                    <p className="text-xs font-medium text-red-500">
                      {errors.attendance_type.message}
                    </p>
                  )}
                </div>

                {/* Branch */}
                {attendanceType !== "online" && (
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="branch"
                      className="text-sm font-semibold sm:text-lg"
                    >
                      اختر الفرع المناسب ليك
                    </label>

                    <div className="relative">
                      <FiMapPin className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />

                      <select
                        id="branch"
                        {...register("branch")}
                        className={`w-full appearance-none rounded-full border bg-white py-3 pr-12 pl-5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 sm:text-base ${
                          errors.branch
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-800"
                        }`}
                      >
                        <option value="">اختر الفرع المناسب ليك</option>

                        {branches.map((branch) => (
                          <option key={branch.value} value={branch.value}>
                            {branch.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {errors.branch && (
                      <p className="text-xs font-medium text-red-500">
                        {errors.branch.message}
                      </p>
                    )}
                  </div>
                )}

                {/* Submit */}
                <MainButton
                  type="submit"
                  fullWidth
                  isLoading={isSubmitting}
                  loadingText="جاري إتمام الحجز..."
                >
                  إتمام الحجز
                </MainButton>
              </form>
            </div>

            {/* Course Summary */}
            <div className="order-1 col-span-12 md:col-span-4 md:sticky md:top-18 lg:order-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                {/* Course */}
                <div className="rounded-xl bg-blue-50 p-4">
                  <h3 className="font-bold text-base leading-7 sm:text-lg">
                    {course.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {course.description}
                  </p>
                </div>

                {/* Coupon */}
                <div className="my-3 border-b border-gray-200 py-4">
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                    <FiTag className="h-4 w-4 text-blue-800" />
                    هل لديك كوبون خصم؟
                  </h4>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="أدخل كود الكوبون"
                      className="grow rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-800"
                    />

                    <button
                      type="button"
                      className="shrink-0 rounded-full bg-blue-800 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      تطبيق
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-1  py-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-[#4A5565] sm:text-base">
                      سعر الاشتراك
                    </h4>

                    <p className="text-base font-bold sm:text-lg">
                      {course.final_price} ج.م
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold sm:text-xl">الإجمالي</h4>

                  <p className="text-lg font-bold text-blue-800 sm:text-xl">
                    {course.final_price} ج.م
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
