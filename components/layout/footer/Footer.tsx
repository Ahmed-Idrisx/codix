"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const quickLinks = [
  { label: "الدورات", href: "/courses" },
  { label: "سجّل الآن", href: "/enroll" },
  { label: "آراء الطلاب", href: "/reviews" },
  { label: "عن إيراسوفت", href: "/about" },
];

const usefulLinks = [
  { label: "فريق العمل", href: "/instructors" },
  { label: "المقالات", href: "/articles" },
  { label: "تواصل معنا", href: "/contact" },
];

const socialLinks = [
  { label: "فيسبوك", href: "https://facebook.com", Icon: FaFacebookF },
  { label: "يوتيوب", href: "https://youtube.com", Icon: FaYoutube },
  {
    label: "لينكدإن",
    href: "https://linkedin.com",
    Icon: FaLinkedinIn,
  },
  {
    label: "إنستجرام",
    href: "https://instagram.com",
    Icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="overflow-x-hidden bg-blue-950">
      <div className="grid grid-cols-12 justify-between gap-6 sm:gap-8 mx-auto max-w-350 py-15 px-5 sm:px-8">
        {/* Logo + About */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-3">
          <Link href="#hero">
            <Image
              src="/logo.png"
              alt="شعار إيراسوفت | Eraasoft"
              width={130}
              height={44}
            />
          </Link>
          <p className="text-sm font-semibold leading-relaxed text-white">
            إيراسوفت هي منصة تعليمية تهدف إلى تقديم أفضل الدورات التقنية في
            مجالات البرمجة والذكاء الاصطناعي.
          </p>
          {/* Social + Newsletter */}

          <div className="flex items-center gap-5">
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  href={href}
                  className="rounded-lg bg-blue-800 p-2.5 text-xl text-white transition-opacity hover:opacity-80"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* تصفح */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-3">
          <h3 className="text-base font-bold text-blue-200 sm:text-lg">تصفح</h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li
                key={link.href}
                className="relative pr-6 before:absolute before:right-0 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-linear-to-b before:from-yellow-50 before:to-blue-700 before:content-['']"
              >
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-white sm:text-base transition-colors hover:text-blue-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* روابط سريعة */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-3">
          <h3 className="text-base font-bold text-blue-200 sm:text-lg">
            روابط سريعة
          </h3>
          <ul className="flex flex-col gap-3">
            {usefulLinks.map((link) => (
              <li
                key={link.href}
                className="relative pr-6 before:absolute before:right-0 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-linear-to-b before:from-yellow-50 before:to-blue-700 before:content-['']"
              >
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-white sm:text-base transition-colors hover:text-blue-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-3">
          <h3 className="text-base font-bold text-blue-200 sm:text-lg">
            تواصل معنا
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="text-sm font-semibold text-white sm:text-base">
              <Link
                href="mailto:info@eraasoft.com"
                className="transition-colors hover:text-blue-200"
              >
                info@eraasoft.com
              </Link>
            </li>
            <li className="text-sm font-semibold text-white sm:text-base">
              <Link
                href="tel:+2001070783809"
                className="transition-colors hover:text-blue-200"
              >
                +2001070783809
              </Link>
            </li>
            <li className="text-sm font-semibold text-white sm:text-base  transition-colors hover:text-blue-200">
              5 مصدق الدقي -الجيزه، مصر
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="col-span-12">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-center text-sm text-white">
              إيراسوفت | Eraasoft © 2026. All Rights Reserved
            </p>
            <span className="hidden text-white/40 sm:inline">|</span>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-white transition-colors hover:text-blue-200"
              >
                سياسة الخصوصية
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href="/terms"
                className="text-sm text-white transition-colors hover:text-blue-200"
              >
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
