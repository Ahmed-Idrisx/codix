import Image from "next/image";
import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-75 w-full overflow-hidden md:h-100 lg:h-125">
      <Image
        src="/section_hero.webp"
        alt="دبلوماتنا في EraaSoft"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>

        <p className="mt-5 w-full max-w-3xl text-base leading-relaxed text-white sm:text-lg md:mt-6 md:text-xl lg:text-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
