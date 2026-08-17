"use client";
import PageHero from "@/components/shared/PageHero";
import { allTestimonials } from "@/data/courses";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { FiStar } from "react-icons/fi";

const PAGE_SIZE = 12;

const Reviews = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(allTestimonials.length / PAGE_SIZE));

  const currentTestimonials = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return allTestimonials.slice(start, start + PAGE_SIZE);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);

    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  const goNext = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  const goPrev = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="قصص طلابنا - نجاح يُروى بثقة"
        subtitle="في إيرا سوفت، لا تنتهي رحلة التعلّم بانتهاء الدبلومة ، بل تبدأ معها خطوات جديدة نحو التطور المهني. هنا نشارك آراء طلابنا وتجاربهم الملهمة، وكيف ساعدتهم المعرفة والتدريب العملي على الاقتراب من أهدافهم بثقة."
      />
      <section className="bg-blue-50">
        <div className="mx-auto max-w-350 px-5 py-15 sm:px-8 space-y-10">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center leading-[1.4] lg:leading-[1.3]">
              آراء{" "}
              <span className="relative inline-block pb-5">
                طلابنا
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
            <p className="mt-3 text-slate-500">
              شوف تجربة اللي اتدربوا معانا قبل كده
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentTestimonials.map((t) => (
              <div
                key={t.id}
                className="group flex flex-col justify-between shrink-0 rounded-lg border border-transparent bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:border-yellow-500 hover:shadow-lg"
              >
                <div className="space-y-2">
                  {/* Stars */}
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.round(t.stars)
                            ? "text-yellow-500 fill-yellow-500"
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
                    <p className="text-sm font-bold text-gray-800">{t.name}</p>

                    <p className="text-xs text-gray-500">{t.courseTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div dir="ltr" className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={goNext}
                disabled={page === totalPages}
                className="rounded-full border border-slate-200 bg-white px-2 py-1.5 sm:px-5 sm:py-2.5 text-sm font-bold text-slate-600 transition-colors hover:border-blue-900 hover:text-blue-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-400"
              >
                التالي
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const num = i + 1;
                const isActive = num === page;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handlePageChange(num)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-blue-900 text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-900 hover:text-blue-900"
                    }`}
                  >
                    {num}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={goPrev}
                disabled={page === 1}
                className="rounded-full border border-slate-200 bg-white px-2 py-1.5 sm:px-5 sm:py-2.5 text-sm font-bold text-slate-600 transition-colors hover:border-blue-900 hover:text-blue-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-400"
              >
                السابق
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Reviews;
