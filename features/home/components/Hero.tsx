"use client";

import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiUsers } from "react-icons/fi";

const STATISTICS = [
  {
    id: 1,
    icon: FiBookOpen,
    value: "200+",
    label: "كورسات",
  },
  {
    id: 2,
    icon: FiUsers,
    value: "10,000+",
    label: "طالب",
  },
  {
    id: 3,
    icon: FiUsers,
    value: "50+",
    label: "مدربين",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-r from-indigo-950 via-blue-900 to-blue-950"
    >
      <div className="mx-auto max-w-350 px-5 sm:px-8">
        <div className="grid grid-cols-12 lg:min-h-screen">
          {/* HERO CONTENT */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center text-right py-15">
            {/* TITLE */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl font-bold leading-[1.4] text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56] lg:leading-[1.3]">
                خطوتك الأولى نحو النجاح
                <br />
                تبدأ مع{" "}
                <span className="relative inline-block pb-5">
                  EraaSoft
                  <span className="absolute bottom-0 left-0 right-0">
                    <div className="flex justify-center">
                      <svg
                        width="160"
                        height="18"
                        viewBox="0 0 320 60"
                        fill="none"
                      >
                        <path
                          d="M10 40 Q160 5 310 50"
                          stroke="url(#paint0_linear)"
                          stroke-width="6"
                          stroke-linecap="round"
                        ></path>
                        <defs>
                          <linearGradient
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                            id="paint0_linear"
                          >
                            <stop offset="0%" stop-color="#E6C238"></stop>
                            <stop offset="100%" stop-color="#806C1F"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </span>
                </span>
              </h1>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl">
              <p className="max-w-2xl leading-relaxed text-gray-200 ">
                ابدأ رحلتك في البرمجة، تحليل البيانات، والذكاء الاصطناعي مع
                مسارات تعليمية متخصصة ومشاريع عملية تؤهلك لسوق العمل.
              </p>

              <p className="mt-4 max-w-2xl  font-bold text-yellow-400">
                #بنساعدك_توصل_لحلمك
              </p>
            </div>

            {/* BUTTON */}

            <Link
              href="/courses"
              className="my-3 w-fit rounded-full bg-blue-600 px-8 py-3.5 text-center text-lg font-medium text-white transition-colors hover:bg-blue-700"
            >
              ابدأ التعلم الآن
            </Link>

            {/* STATISTICS */}
            <div className="flex items-center py-4 gap-3.5 sm:gap-8 sm:py-6 md:gap-10 md:py-8 lg:gap-16">
              {STATISTICS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-yellow-400 shadow-lg sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                      <Icon size={18} />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                        {stat.value}
                      </span>

                      <span className="text-xs text-gray-400 sm:text-sm md:text-base">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* HERO IMAGE */}
          <div className="relative col-span-12 hidden lg:col-span-6 lg:block hero-float">
            <Image
              src="/new_hero.webp"
              alt="Hero"
              width={1200}
              height={1200}
              priority
              sizes="50vw"
              className="absolute bottom-0 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
