import { partnersData } from "@/data/partners";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
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
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="group relative mx-3 flex h-35 w-52 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 p-5 transition-all duration-500 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10"
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
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
