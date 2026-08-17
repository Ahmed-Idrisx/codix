"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FiEye, FiSearch, FiUser } from "react-icons/fi";

import PageHero from "@/components/shared/PageHero";
import { articles } from "@/data/articles";

const PAGE_SIZE = 6;

const Articles = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Search
  const filteredArticles = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return articles;

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(value) ||
        article.excerpt?.toLowerCase().includes(value)
      );
    });
  }, [search]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / PAGE_SIZE),
  );

  const currentArticles = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredArticles.slice(start, start + PAGE_SIZE);
  }, [filteredArticles, page]);

  // Pagination
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
      {/* Hero */}
      <PageHero
        title="تعلّم مع EraaSoft"
        subtitle="اكتشف مقالات تعليمية متخصصة في البرمجة، والذكاء الاصطناعي، والتكنولوجيا، وتطوير المسار المهني. نساعدك في إيرا سوفت على فهم أحدث المهارات التقنية واتخاذ خطوات أوضح نحو سوق العمل."
      />

      {/* Articles */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-350 px-5 py-15 sm:px-8 space-y-10">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center leading-[1.4] lg:leading-[1.3]">
              أحدث المقالات في{" "}
              <span className="relative inline-block pb-5">
                عالم التقنية
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
              اكتشف أحدث التقنيات والاتجاهات البرمجية، وتعلّم مهارات جديدة من
              خلال مقالات متخصصة تساعدك على تطوير معرفتك ومسارك المهني.{" "}
            </p>
          </div>

          {/* Search */}
          <form>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="ابحث في المقالات..."
              className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-11 pl-4 text-sm text-gray-800 outline-none shadow-sm transition-all placeholder:text-gray-400 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/10"
            />

            <FiSearch className="absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-400" />
          </form>

          {/* Results Count */}
          {search && (
            <div className="text-sm text-gray-500">
              نتائج البحث عن:
              <span className="mr-1 font-semibold text-blue-800">{search}</span>
              <span className="mr-2">({filteredArticles.length} مقال)</span>
            </div>
          )}

          {/* Articles Grid */}
          {currentArticles.length > 0 ? (
            <div className="grid grid-cols-12 gap-6">
              {currentArticles.map((article) => (
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
          ) : (
            // Empty State
            <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl bg-white px-5 text-center shadow-sm space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                <FiSearch className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                لا توجد مقالات متوفرة
              </h3>

              <p className="text-sm text-gray-500">
                لم نجد أي مقال يطابق كلمة البحث.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 p-3 text-sm font-bold text-white transition-colors hover:bg-blue-900"
              >
                عرض جميع المقالات
              </button>
            </div>
          )}

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

export default Articles;
