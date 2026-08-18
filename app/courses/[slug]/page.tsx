"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import {
  FiStar,
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiFolder,
  FiClipboard,
  FiChevronDown,
  FiChevronLeft,
  FiCheck,
} from "react-icons/fi";

import { courses } from "@/data/courses";
import { CourseCard } from "@/features/home/components/Courses";
import Marquee from "react-fast-marquee";

const categoryLabels = {
  fundamentals: "أساسيات البرمجة",
  web: "برمجة مواقع الويب",
  mobile: "برمجة تطبيقات الموبايل",
  "ai-data": "الذكاء الاصطناعي وعلم البيانات",
};

const CourseDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  if (!course) return notFound();
  const hasDiscount = parseFloat(course.price) > course.final_price;

  const discountPercent = hasDiscount
    ? Math.round(
        ((parseFloat(course.price) - course.final_price) /
          parseFloat(course.price)) *
          100,
      )
    : 0;

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="relative overflow-hidden bg-blue-950">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={course.background_image}
            alt={course.title}
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 via-blue-800/30 to-blue-700/40" />
        </div>

        {/* Header content */}
        <div className="relative mx-auto max-w-350 px-5 py-8 sm:px-8 md:py-10">
          {/* Breadcrumb */}
          <nav className="mb-3 flex flex-wrap items-center gap-1.5 text-sm text-blue-200">
            <Link href="/" className="transition-colors hover:text-white">
              الرئيسية
            </Link>

            <FiChevronLeft className="h-3 w-3 text-blue-400" />

            <Link
              href="/courses"
              className="transition-colors hover:text-white"
            >
              الكورسات
            </Link>

            <FiChevronLeft className="h-3 w-3 text-blue-400" />

            <span className="font-semibold text-white">{course.title}</span>
          </nav>

          {/* Category */}
          <span className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-blue-100 ring-1 ring-white/15 backdrop-blur-sm">
            {categoryLabels[course.category]}
          </span>

          {/* Title */}
          <h1 className="max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {course.title}
          </h1>

          {/* Rating */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <FiStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-bold text-white">
              {course.rating.toFixed(1)}
            </span>

            <span className="text-[11px] text-blue-200">تقييم المتدربين</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-350 py-15 px-5 sm:px-8">
          <div className="grid items-start gap-7 lg:grid-cols-[1fr_350px]">
            {/* MAIN CONTENT */}
            <div className="order-2 space-y-9 lg:order-1">
              {/* About Course */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-bold leading-[1.4] lg:leading-[1.3]">
                  <span className="relative inline-block pb-5">
                    حول الكورس
                    <span className="absolute bottom-0 left-0 right-0">
                      <div className="flex justify-center">
                        <svg
                          width="120"
                          height="18"
                          viewBox="0 0 320 60"
                          fill="none"
                        >
                          <path
                            d="M10 40 Q160 5 310 50"
                            stroke="#2243A4"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </span>
                  </span>
                </h2>

                <div className="space-y-6 mt-5">
                  {/* Description */}
                  <div>
                    <h3 className="mb-1 text-lg font-bold lg:text-xl">
                      وصف الكورس:
                    </h3>

                    <p className="text-lg leading-10 text-gray-500 lg:text-xl">
                      {course.description}
                    </p>
                  </div>

                  {/* What Will Learn */}
                  {course.what_will_learn.length > 0 && (
                    <div>
                      <h3 className="mb-3 text-lg font-bold lg:text-xl">
                        ما الذي سنتعلمه:
                      </h3>

                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {course.what_will_learn.map((item, i) => (
                          <div
                            key={i}
                            className="flex justify-end gap-2.5 rounded-xl border border-blue-100 bg-blue-50/60 px-3 py-2.5 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50"
                          >
                            <p className="text-base leading-relaxed text-gray-700">
                              {item}
                            </p>
                            <FiCheck className="h-6 w-6 text-blue-600" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {course.features.length > 0 && (
                    <div className="rounded-xl border border-blue-100 px-3 py-5 bg-amber-50">
                      <h3 className="mb-3 text-lg font-bold lg:text-xl">
                        مميزات الدورة:
                      </h3>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {course.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 mt-1">
                            <FiStar className="mt-1 h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <p className="text-base leading-relaxed text-gray-700">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* COURSE CONTENT */}
              {course.content.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-bold leading-[1.4] lg:leading-[1.3]">
                    <span className="relative inline-block pb-5">
                      محتوى الكورس
                      <span className="absolute bottom-0 left-0 right-0">
                        <div className="flex justify-center">
                          <svg
                            width="120"
                            height="18"
                            viewBox="0 0 320 60"
                            fill="none"
                          >
                            <path
                              d="M10 40 Q160 5 310 50"
                              stroke="#2243A4"
                              strokeWidth="6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </span>
                    </span>
                  </h2>

                  <div className="space-y-2.5 mt-5">
                    {course.content.map((week, i) => {
                      const isOpen = openWeek === i;

                      return (
                        <div
                          key={i}
                          className={`overflow-hidden rounded-xl border border-gray-200 bg-white transition-all ${
                            isOpen ? "shadow-lg" : "shadow-sm"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenWeek(isOpen ? null : i)}
                            className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-right transition-colors bg-blue-50"
                          >
                            <FiChevronDown
                              className={`h-4.5 w-4.5 shrink-0 text-blue-500 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                            <span className="font-bold">{week.title}</span>
                          </button>

                          {isOpen && (
                            <ul className="space-y-2 border-t border-blue-50 px-4 py-3.5">
                              {week.lessons.map((lesson, j) => (
                                <li
                                  key={j}
                                  className="flex items-start justify-end gap-2 text-gray-500"
                                >
                                  {lesson}
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="order-1 h-fit overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg lg:sticky lg:top-18 lg:order-2">
              {/* COURSE IMAGE */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {/* Discount */}
                {hasDiscount && (
                  <span className="absolute right-3 top-3 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-extrabold text-blue-950 shadow-md">
                    خصم {discountPercent}%
                  </span>
                )}
              </div>

              {/* SIDEBAR CONTENT */}
              <div className="p-5">
                {/* Small Header */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-px flex-1 bg-blue-100" />

                  <span className="shrink-0 text-xs font-bold text-gray-400">
                    تفاصيل الدورة
                  </span>

                  <span className="h-px flex-1 bg-blue-100" />
                </div>

                {/* PRICE */}
                <div className="mb-3 rounded-xl border border-blue-100 bg-blue-50/60 p-2">
                  <div className="flex items-center justify-between gap-3">
                    {/* Label */}
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                        <FiDollarSign className="h-4 w-4" />
                      </span>

                      <div>
                        <p className="text-xs font-bold text-gray-500">
                          سعر الكورس
                        </p>

                        {hasDiscount && (
                          <p className="mt-0.5 text-[10px] text-gray-400">
                            السعر قبل الخصم
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-left">
                      <div className="flex items-baseline justify-end gap-1">
                        <span className="text-xl font-extrabold tracking-tight text-blue-900">
                          {course.final_price}
                        </span>

                        <span className="text-[10px] font-semibold text-gray-500">
                          جنيه
                        </span>
                      </div>

                      {hasDiscount && (
                        <p className="mt-0.5 text-[10px] font-medium text-gray-400 line-through">
                          {course.price} جنيه
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* RATING */}
                <div className="mb-4 rounded-xl border border-yellow-100 bg-yellow-50/60 p-2">
                  <div className="flex items-center justify-between gap-3">
                    {/* Rating Info */}
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-yellow-700 shadow-sm">
                        <FiStar className="h-4 w-4 fill-current" />
                      </span>

                      <p className="text-xs font-bold text-gray-500">التقييم</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-xl font-extrabold text-blue-900">
                        {course.rating.toFixed(1)}
                      </span>

                      <FiStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                      <span className="text-[10px] text-gray-400">/ 5</span>
                    </div>
                  </div>
                </div>

                {/* COURSE STATS */}
                <div className="mb-4 grid grid-cols-2 gap-2.5">
                  {/* Weeks */}
                  <div className="group flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:bg-blue-50/50">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                      <FiCalendar className="h-4 w-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-base font-extrabold leading-none text-blue-900">
                        {course.weeks_number}
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-gray-500">
                        أسبوع
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:bg-blue-50/50">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                      <FiClock className="h-4 w-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-base font-extrabold leading-none text-blue-900">
                        {course.hours_number}+
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-gray-500">
                        ساعة تدريبية
                      </p>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="group flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:bg-blue-50/50">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                      <FiFolder className="h-4 w-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-base font-extrabold leading-none text-blue-900">
                        {course.course_projects_number}+
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-gray-500">
                        مشروع عملي
                      </p>
                    </div>
                  </div>

                  {/* Assignments */}
                  <div className="group flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:bg-blue-50/50">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                      <FiClipboard className="h-4 w-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-base font-extrabold leading-none text-blue-900">
                        {course.practical_assignments_number}+
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-gray-500">
                        تمرين عملي
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/booking/${course.slug}`}
                  className="flex items-center justify-center cursor-pointer rounded-xl bg-blue-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 active:scale-98 sm:text-base"
                >
                  {" "}
                  إشترك الآن
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      {course.testimonials.length > 0 && (
        <section className="bg-blue-50">
          <div className="mx-auto max-w-350 px-5 py-15 sm:px-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* Text */}
              <div>
                <h2 className="text-xl font-bold leading-[1.4] text-blue-800 sm:text-2xl md:text-3xl lg:leading-[1.3]">
                  تجارب{" "}
                  <span className="relative inline-block pb-5">
                    أبطالنا وآرائهم
                    <span className="absolute bottom-0 left-0 right-0">
                      <div className="flex justify-center">
                        <svg
                          width="120"
                          height="18"
                          viewBox="0 0 320 60"
                          fill="none"
                        >
                          <path
                            d="M10 40 Q160 5 310 50"
                            stroke="#2243A4"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </span>
                  </span>
                </h2>

                <p className="mt-4 text-lg leading-10 text-gray-500 lg:text-xl">
                  اسمع تجارب أبطالنا اللي سبقوك.. من أول خطوة لحد ما بقوا جاهزين
                  ينافسوا في سوق العمل.
                </p>
              </div>

              {/* Testimonials */}
              <div dir="ltr" className="min-w-0">
                <Marquee
                  direction="left"
                  speed={40}
                  pauseOnHover
                  gradient
                  gradientColor="#eff6ff"
                  gradientWidth={80}
                  autoFill
                >
                  {course.testimonials.map((t) => (
                    <div
                      key={t.id}
                      className="group mx-3 flex h-55 w-72 shrink-0 flex-col justify-between rounded-lg border border-transparent bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:border-yellow-500 hover:shadow-lg"
                    >
                      <div className="space-y-2">
                        {/* Stars */}
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FiStar
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.round(t.stars)
                                  ? "fill-yellow-500 text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Message */}
                        <p className="line-clamp-4 text-sm leading-relaxed text-gray-700">
                          {t.message}
                        </p>
                      </div>

                      {/* User */}
                      <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-700 text-sm font-bold text-white transition-all duration-300 group-hover:ring-2 group-hover:ring-yellow-500 group-hover:ring-offset-2">
                          {t.image ? (
                            <Image
                              src={t.image}
                              alt={t.name}
                              width={36}
                              height={36}
                              className="h-9 w-9 object-cover"
                            />
                          ) : (
                            t.name.trim().charAt(0)
                          )}
                        </span>

                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            {t.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {course.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CERTIFICATE */}
      <section className="bg-white">
        <div className="mx-auto max-w-350 py-15 px-5 sm:px-8">
          <div className="grid grid-cols-12 items-center gap-3">
            {/* Text */}
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-bold leading-[1.4] lg:leading-[1.3]">
                <span className="relative inline-block pb-5">
                  الشهادات
                  <span className="absolute bottom-0 left-0 right-0">
                    <div className="flex justify-center">
                      <svg
                        width="120"
                        height="18"
                        viewBox="0 0 320 60"
                        fill="none"
                      >
                        <path
                          d="M10 40 Q160 5 310 50"
                          stroke="#2243A4"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </span>
                </span>
              </h2>

              <p className="text-lg leading-10 text-gray-500 lg:text-xl">
                هذه الدورة التدريبية معتمدة رسمياً من نقابة المهندسين المصرية.
                يحصل المتدرب في نهايتها على شهادة حضور وإتمام موثقة، تحمل توقيع
                الجهة المنظمة وختم النقابة. يمكن استخدام الشهادة ضمن السيرة
                الذاتية أو عند التقديم للوظائف أو الترقية المهنية.
              </p>
            </div>

            {/* Certificate */}
            <div className="col-span-12 md:col-span-6">
              <div className="relative aspect-4/3 sm:aspect-3/2 rounded-lg overflow-hidden">
                <Image
                  src="/certificate.webp"
                  alt="شهادة إتمام الكورس"
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED COURSES */}
      {course.related_courses.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-350 py-15 px-5 sm:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-bold leading-[1.4] lg:leading-[1.3]">
              <span className="relative inline-block pb-5">
                دورات ذات صلة
                <span className="absolute bottom-0 left-0 right-0">
                  <div className="flex justify-center">
                    <svg
                      width="120"
                      height="18"
                      viewBox="0 0 320 60"
                      fill="none"
                    >
                      <path
                        d="M10 40 Q160 5 310 50"
                        stroke="#2243A4"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </span>
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-5">
              {course.related_courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CourseDetails;
