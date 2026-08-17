"use client";

import { faq } from "@/data/faq";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-350 px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex gap-10 lg:gap-16">
          {/* =========================
              FAQ CONTENT
          ========================== */}
          <div className="relative flex-1">
            {/* Heading */}
            <div className="relative mb-8 text-center lg:text-right">
              <p className="mb-3 text-lg font-medium text-blue-800 sm:text-xl">
                الأسئلة الشائعة
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold leading-[1.4] lg:leading-[1.3]">
                <span className="relative inline-block pb-7">
                  بتفكر في ايه؟
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
            </div>

            {/* FAQ Items */}
            <div className="relative space-y-4">
              {faq.map((q, i) => {
                const isOpen = openFAQ === i;

                return (
                  <div
                    key={q.id}
                    className="rounded-lg border border-blue-100 shadow-lg"
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => setOpenFAQ(isOpen ? null : i)}
                      className="flex w-full justify-between gap-4 bg-blue-50 px-5 py-4"
                    >
                      {/* Question */}
                      <span className="text-start text-sm lg:text-lg font-bold text-blue-950">
                        {q.question}
                      </span>
                      {/* Arrow */}
                      <FiChevronDown
                        className={`h-5 w-5 shrink-0 text-blue-600 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <div className="space-y-2 px-5 py-4">
                        <p className="flex gap-2 text-sm font-semibold text-gray-600 lg:text-lg">
                          {q.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================
              IMAGE COLLAGE
          ========================== */}
          <div className="max-lg:hidden self-start flex-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Image 1 */}
              <div className="relative aspect-square overflow-hidden rounded-[45%_0_45%_0] bg-gray-200">
                <Image
                  src="/faq1.webp"
                  alt="تعلم البرمجة"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="relative aspect-square overflow-hidden rounded-[0_45%_0_45%] bg-gray-200">
                <Image
                  src="/faq2.webp"
                  alt="مجال البرمجة"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 */}
              <div className="relative aspect-square overflow-hidden rounded-[0_45%_0_45%] bg-gray-200">
                <Image
                  src="/faq3.webp"
                  alt="التدريب والعمل"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 4 */}
              <div className="relative aspect-square overflow-hidden rounded-[45%_0_45%_0] bg-gray-200">
                <Image
                  src="/faq4.webp"
                  alt="البرمجة والتطوير"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
