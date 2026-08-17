import { allTestimonials } from "@/data/courses";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-350 py-15 px-5 sm:px-8 space-y-8">
        {/* Section Title */}

        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center leading-[1.4] lg:leading-[1.3]">
          آراء{" "}
          <span className="relative inline-block pb-5">
            طلابنا
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

        <div dir="ltr">
          <Marquee
            direction="left"
            speed={40}
            pauseOnHover
            gradient
            gradientColor="#eff6ff"
            gradientWidth={80}
            autoFill
          >
            {allTestimonials.map((t) => (
              <div
                key={t.id}
                className="group mx-3 w-72 h-55 flex flex-col justify-between shrink-0 rounded-lg border border-transparent bg-white p-5 shadow-sm transition-all duration-300 ease-out  hover:border-yellow-500 hover:shadow-lg"
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
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
