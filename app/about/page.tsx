"use client";
import PageHero from "@/components/shared/PageHero";
import { partnersData } from "@/data/partners";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { FiArrowLeft } from "react-icons/fi";

const slides = [
  {
    id: 1,
    image: "/about_slide_one.webp",
    alt: "about_slide_one",
  },
  {
    id: 2,
    image: "/about_slide_two.webp",
    alt: "about_slide_two",
  },
  {
    id: 3,
    image: "/about_slide_three.webp",
    alt: "about_slide_three",
  },
  {
    id: 4,
    image: "/about_slide_four.webp",
    alt: "about_slide_four",
  },
];

const features = [
  {
    id: "01",
    title: "محتوى تدريبي عملي",
    description:
      "نقدم دورات تعتمد على التطبيق الفعلي لضمان اكتساب مهارات حقيقية يمكن استخدامها مباشرة في سوق العمل.",
  },
  {
    id: "02",
    title: "مدربون بخبرة احترافية",
    description:
      "يتم تقديم الكورسات بواسطة نخبة من المتخصصين ذوي الخبرة العملية في مجالاتهم المختلفة.",
  },
  {
    id: "03",
    title: "مسارات تعليمية متكاملة",
    description:
      "نوفر برامج تدريبية منظمة تساعدك على التدرج من المستوى المبتدئ إلى الاحترافي بخطوات واضحة.",
  },
];

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="من هي EraaSoft؟"
        subtitle="في إيرا سوفت، لا نقدّم دورات تدريبية فحسب، بل نبني رحلة تعليمية متكاملة تبدأ من اكتساب المهارة، وتمتد إلى التطبيق العملي والاستعداد الحقيقي لسوق العمل في مجالات البرمجة والتكنولوجيا والذكاء الاصطناعي."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-350 py-15 px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Section Title */}
            <div className="col-span-12 md:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center leading-[1.4] lg:leading-[1.3]">
                ماذا عن{" "}
                <span className="relative inline-block pb-5">
                  إيراسوفت
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

            {/* Text */}
            <div className="col-span-12 lg:col-span-8 space-y-2 lg:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 leading-[1.4] lg:leading-[1.3]">
                عن{" "}
                <span className="relative inline-block pb-5">
                  إيراسوفت
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
              </h3>

              <p className="text-base sm:text-lg md:text-xl leading-8 lg:leading-9 text-gray-500">
                إيراسوفت هي شركة متخصصة في تقديم الحلول البرمجية المتقدمة
                والتدريب التقني الاحترافي، تأسست بهدف تمكين الأفراد والشركات من
                مواكبة التطور السريع في مجالات البرمجة وعلوم الحاسوب. نعتمد في
                إيراسوفت على رؤية واضحة تقوم على أن التجربة العملية هي الأساس
                الحقيقي للاحتراف، لذلك نحرص على تقديم برامج تدريبية وتطويرية
                تعتمد على التطبيق الفعلي، بما يساهم في إعداد كوادر مؤهلة وقادرة
                على المنافسة بقوة في سوق العمل.
              </p>
            </div>
            {/* Images */}
            <div className="col-span-12 lg:col-span-4 w-full h-full min-h-62.5 relative">
              <Image
                src="/about_erasoft.webp"
                alt="فريق إيراسوفت"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-350 pb-15 px-5 sm:px-8">
          <div className="grid grid-cols-12 items-center gap-8 lg:gap-10">
            {/* Features */}
            <div className="col-span-12 lg:col-span-7">
              <div className="flex flex-col gap-5">
                {features.map((feature, index) => {
                  const isReversed = index % 2 !== 1;

                  return (
                    <div
                      key={feature.id}
                      className={`flex items-center gap-3 sm:gap-5 ${
                        isReversed ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Number */}
                      <div className="hidden w-16 shrink-0 sm:block md:w-20 lg:w-24 xl:w-28">
                        <span className="block text-[55px] font-bold leading-none text-slate-200 sm:text-[70px] md:text-[85px] xl:text-[105px]">
                          {feature.id}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/60 sm:gap-5 sm:p-6">
                        {/* Arrow */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 sm:h-14 sm:w-14">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full border-l-2 border-blue-600 sm:h-10 sm:w-10">
                            <FiArrowLeft className="h-4 w-4 text-blue-700 sm:h-5 sm:w-5" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-slate-900 sm:text-lg lg:text-xl">
                            {feature.title}
                          </h3>

                          <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Images Gallery */}
            <div className="col-span-12 lg:col-span-5">
              {/* Main Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                <Image
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].alt}
                  fill
                  priority
                  className="object-cover transition-all duration-500"
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-4 gap-3">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`عرض الصورة ${slide.id}`}
                    className={`relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ${
                      activeSlide === index
                        ? "ring-2 ring-orange-400 ring-offset-2"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-350 py-15 px-5 sm:px-8 space-y-8">
          {/* Section Title */}

          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center leading-[1.4] lg:leading-[1.3]">
            شركاء{" "}
            <span className="relative inline-block pb-5">
              النجاح
              <span className="absolute bottom-0 left-0 right-0">
                <div className="flex justify-center">
                  <svg width="120" height="18" viewBox="0 0 320 60" fill="none">
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

          {/* Partners */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="group relative flex h-35 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* Top Decoration */}
                <span className="absolute left-0 top-0 h-px w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Bottom Decoration */}
                <span className="absolute bottom-0 right-0 h-px w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Corner */}
                <span className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-600/5 transition-transform duration-500 group-hover:scale-200" />

                {/* Logo */}
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={180}
                  height={100}
                  className="relative z-10 max-h-16 w-auto max-w-[85%] object-contain grayscale opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  unoptimized
                />

                {/* Partner Name */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-2 whitespace-nowrap text-xs font-medium text-blue-700 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
