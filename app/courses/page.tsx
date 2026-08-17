"use client";
import { groupedCourses } from "@/data/courses";
import { TrackSection } from "@/features/home/components/Courses";
import PageHero from "@/components/shared/PageHero";

const Courses = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <PageHero
        title="دبلوماتنا في EraaSoft"
        subtitle=" في إيرا سوفت، نقدم لك محتوى تعليمي مفصل وناخذك في رحلة عملية تبدأ من
            الأساسيات، وتصل بك إلى تنفيذ مشروعات حقيقية تعكس مهاراتك وتفتح أمامك
            فرصًا أقوى في عالم التكنولوجيا."
      />
      {/* COURSES */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-350 space-y-16 px-5 py-15 sm:px-8">
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <p className="text-base font-semibold text-blue-800 sm:text-lg">
              ابدأ رحلتك التعليمية
            </p>

            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              اكتشف الكورسات المتاحة
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              اختار المسار المناسب ليك وابدأ رحلة عملية تساعدك على بناء مهارات
              حقيقية ومشاريع قوية.
            </p>
          </div>

          {/* Courses Grid */}
          {groupedCourses.map((group) => (
            <TrackSection
              key={group.id}
              title={group.title}
              items={group.courses}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Courses;
