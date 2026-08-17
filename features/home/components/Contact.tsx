"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="mx-auto max-w-350 px-5 py-16 sm:px-8 lg:py-20">
      {/* =========================
          Section Title
      ========================== */}
      <h2 className="mb-5 text-2xl text-center sm:text-3xl md:text-3xl lg:text-5xl font-bold leading-[1.4] lg:leading-[1.3]">
        تواصل{" "}
        <span className="relative inline-block pb-5">
          معنا
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

      {/* =========================
          Mobile Version
      ========================== */}
      <div className="block rounded-3xl bg-linear-to-l from-blue-700 to-blue-900 px-6 py-10 text-center text-white sm:px-10 xl:hidden">
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
          مستقبلك يبدأ بسؤال
        </h2>
        <p className="mb-6 text-base font-semibold text-white/90 sm:text-lg">
          تواصل معنا الآن ودعنا نساعدك في اختيار المسار الصحيح.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 transition-colors hover:bg-white/10"
        >
          <span>تواصل معنا الآن</span>
          <FiArrowLeft className="h-4.5 w-4.5" />
        </Link>
      </div>

      {/* =========================
          Desktop Version
      ========================== */}
      <div className="relative mx-auto hidden h-71 overflow-visible rounded-4xl bg-linear-to-l from-blue-700 to-blue-900 py-15 text-white xl:block">
        {/* Decorative Arabic Shape */}
        <Image
          src="/arabic_shape.webp"
          alt="Arabic Shape"
          width={200}
          height={150}
          className="absolute right-0 top-0 object-cover"
        />

        {/* Content */}
        <div className="absolute -right-17 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 z-10">
          <h2 className="text-4xl font-bold">مستقبلك يبدأ بسؤال</h2>
          <p className="text-2xl font-semibold">
            تواصل معنا الآن ودعنا نساعدك في اختيار المسار الصحيح.
          </p>
          <Link
            href="/contact"
            className="flex w-fit items-center gap-2 rounded-4xl border px-6 py-4 transition-colors hover:bg-white/10"
          >
            <span>تواصل معنا الآن</span>
            <FiArrowLeft className="h-6 w-6" />
          </Link>
        </div>

        {/* Person + Frame */}
        <div className="absolute -top-17 left-0">
          <Image
            src="/mon_person.webp"
            alt="Person Contact Image"
            width={350}
            height={500}
          />
          <div className="absolute -top-5 left-[30%]">
            <Image
              src="/mob_frame.webp"
              alt="Frame Contact Image"
              width={200}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
