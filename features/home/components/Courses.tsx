"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FiClipboard,
  FiFolder,
  FiClock,
  FiStar,
  FiArrowLeft,
} from "react-icons/fi";
import { groupedCourses, RelatedCourses, type Course } from "@/data/courses";
import type { IconType } from "react-icons";

export const StatItem = ({
  icon: Icon,
  value,
  label,
}: {
  icon: IconType;
  value: number;
  label: string;
}) => (
  <div className="flex items-center justify-center gap-1 py-1.5 bg-white rounded-lg">
    <Icon className="w-4 h-4 text-yellow-600 shrink-0" />
    <span className="text-sm font-bold">{value}</span>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
);

export const CourseCard = ({ course }: { course: RelatedCourses }) => {
  return (
    <div className="group flex flex-col bg-white rounded-lg border border-blue-100 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-45 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 z-10 bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
          {course.weeks_number} أسبوع
        </span>

        <span className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-white text-yellow-500 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          <FiStar className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          {course.rating}
        </span>
      </div>

      <Link href={`/courses/${course.slug}`} className="cursor-pointer">
        {/* Body */}
        <div className="flex flex-col p-3 gap-2 text-center">
          <h3 className="text-lg font-bold md:font-extrabold">
            {course.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {course.description}
          </p>

          <div className="grid grid-cols-3 gap-2 bg-blue-50 border border-blue-100 rounded-lg p-1.5">
            <StatItem
              icon={FiClipboard}
              value={course.practical_assignments_number ?? 0}
              label="تمرين"
            />
            <StatItem
              icon={FiFolder}
              value={course.course_projects_number}
              label="مشروع"
            />
            <StatItem icon={FiClock} value={course.hours_number} label="ساعة" />
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900"
          >
            عرض التفاصيل
            <FiArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </Link>
    </div>
  );
};

export const TrackSection = ({
  title,
  items,
}: {
  title: string;
  items: Course[];
}) => {
  if (!items.length) return null;
  return (
    <div className="space-y-6">
      <div className="w-full text-center overflow-hidden rounded-lg bg-linear-to-l from-blue-700 to-blue-900 py-1.5 md:py-2.5 text-white">
        <h3 className="text-lg md:text-2xl font-semibold md:font-bold">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-350 space-y-16 px-5 py-15 sm:px-8">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold leading-[1.4] sm:text-3xl md:text-3xl lg:text-5xl lg:leading-[1.3]">
            تصفح{" "}
            <span className="relative inline-block pb-5">
              الكورسات
              <span className="absolute bottom-0 left-0 right-0">
                <div className="flex justify-center">
                  <svg
                    width="120"
                    height="18"
                    viewBox="0 0 320 60"
                    fill="none"
                    className="text-blue-700"
                  >
                    <path
                      d="M10 40 Q160 5 310 50"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </span>
            </span>
          </h2>
          <p className="text-lg font-medium text-gray-700 sm:text-xl">
            اختر الكورس المناسب لك وابدأ رحلة التعلم وتطوير مهاراتك البرمجية
            خطوة بخطوة.
          </p>
        </div>

        {groupedCourses.map((group) => (
          <TrackSection
            key={group.id}
            title={group.title}
            items={group.courses}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
