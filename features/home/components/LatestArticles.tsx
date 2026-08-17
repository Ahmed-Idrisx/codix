import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiEye, FiUser } from "react-icons/fi";

const LatestArticles = () => {
  const latestArticles = articles.slice(0, 3);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-350 py-15 px-5 sm:px-8 space-y-8">
        {/* Section Title */}

        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center leading-[1.4] lg:leading-[1.3]">
          أحدث{" "}
          <span className="relative inline-block pb-5">
            المقالات
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

        <div className="grid grid-cols-12 gap-6">
          {latestArticles.map((article) => (
            <article
              key={article.id}
              className="group col-span-12 md:col-span-6 lg:col-span-4 flex rounded-xl border border-gray-300 bg-whit shadow-sm hover:shadow-xl"
            >
              <div className="flex h-full w-full flex-col rounded-xl bg-white p-3 sm:p-4">
                {/* Image */}
                <Link
                  href={`/articles/${article.slug}`}
                  className="group relative block h-52 shrink-0 overflow-hidden rounded-xl sm:h-60"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-fill transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Date */}
                  <div className="absolute right-3 top-3">
                    <span className="rounded-3xl bg-blue-800/30 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                      {article.published_at}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-4 pb-2 space-y-3">
                  {/* Title */}
                  <Link href={`/articles/${article.slug}`}>
                    <h2 className="line-clamp-2 font-bold transition-colors group-hover:text-blue-800 sm:text-lg lg:text-xl">
                      {article.title}
                    </h2>
                  </Link>

                  {/* Description */}
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500 sm:text-base ">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between gap-3 text-xs text-gray-700 sm:text-sm ">
                    {/* Author */}
                    <span className="flex items-center gap-1.5 border border-gray-300 p-2 rounded-full group-hover:text-blue-800 group-hover:border-blue-800 transition-colors">
                      <FiUser className="h-3.5 w-3.5 shrink-0" />
                      {article.author}
                    </span>

                    {/* Views */}
                    <span className="flex items-center gap-1.5 border border-gray-300 p-2 rounded-full group-hover:text-blue-800 group-hover:border-blue-800 transition-colors">
                      <FiEye className="h-3.5 w-3.5 shrink-0" />
                      {article.views} مشاهدة
                    </span>
                  </div>

                  {/* Read Button */}
                  <Link
                    href={`/articles/${article.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900"
                  >
                    قراءة المقال
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
