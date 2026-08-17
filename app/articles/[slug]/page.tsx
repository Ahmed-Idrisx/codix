"use client";
import { notFound, useParams } from "next/navigation";
import { articles } from "@/data/articles";
import Image from "next/image";
import { BiCalendar, BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex items-center min-h-[50vh] sm:min-h-[60vh] px-5 sm:px-8 lg:px-13 py-12">
          <div className="max-w-3xl space-y-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {article.categories.map((cat) => (
                <span
                  key={cat}
                  className="inline-block bg-blue-800 text-white text-xs sm:text-sm px-4 py-1.5 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex gap-3 sm:gap-5 text-gray-300 text-xs sm:text-sm">
              <span className="flex gap-1.5">
                <BiUser className="w-4 h-4 shrink-0" aria-hidden="true" />
                {article.author}
              </span>
              <span className="flex gap-1.5">
                <BiCalendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                {article.published_at}
              </span>
              <span className="flex gap-1.5">
                <BsEye className="w-4 h-4 shrink-0" aria-hidden="true" />
                {article.views} مشاهدة
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-6 py-10">
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}
