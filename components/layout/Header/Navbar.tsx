"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiSettings,
  FiUser,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  avatar: string | null;
} | null;

const navLinks = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "الدورات",
    href: "/courses",
  },
  {
    title: "الرحلة التعليمية",
    href: "/journey",
  },
  {
    title: "اراء الطلاب",
    href: "/reviews",
  },
  // {
  //   title: "الدورات المجانية",
  //   href: "/free-courses",
  // },
  // {
  //   title: "تدريب الشركات",
  //   href: "/training-services",
  // },
  {
    title: "المقالات",
    href: "/articles",
  },
  {
    title: "من نحن",
    href: "/about",
  },
  {
    title: "تواصل معنا",
    href: "/contact",
  },
];

const Header = () => {
  // if no user :
  // const user = null as User;
  // if user :
  const user: User | null = {
    id: 91,
    first_name: "ahmed",
    last_name: "idris",
    full_name: "ahmed idris",
    email: "ahmedbashirx@gmail.com",
    avatar: null,
  };

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm py-2">
        <div className="mx-auto flex max-w-350 items-center justify-between gap-4 px-5 sm:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.webp"
              alt="EraaSoft"
              width={120}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`whitespace-nowrap font-medium transition-colors duration-200 ${
                        active
                          ? "font-bold text-blue-800"
                          : "text-gray-700 hover:text-blue-800"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="flex shrink-0 items-center gap-3">
            {/* WHATSAPP */}
            <Link
              href="https://wa.me/+249926694365"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا على واتساب"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-400 text-white shadow-sm transition-all duration-200 hover:bg-green-600"
            >
              <FaWhatsapp className="h-8 w-8" />
            </Link>

            {/* DESKTOP USER */}
            {user ? (
              <div className="relative hidden lg:block">
                <button
                  type="button"
                  onClick={toggleUserMenu}
                  className="flex h-11 items-center gap-2 rounded-full border border-gray-200 bg-white px-2 transition-all hover:border-gray-300 hover:shadow-sm"
                >
                  {/* Chevron */}
                  <FiChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                  {/* Name */}
                  <span className="max-w-20 truncate px-1 text-sm font-medium text-gray-700">
                    {user.first_name}
                  </span>

                  {/* Avatar */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                    {user.avatar ? (
                      <Image
                        src={user.avatar}
                        alt={user.full_name}
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <FiUser className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* DESKTOP USER DROPDOWN */}
                {isUserMenuOpen && (
                  <>
                    {/* Click outside */}
                    <button
                      type="button"
                      aria-label="close user menu"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="fixed inset-0 z-40 cursor-default"
                    />

                    <div className="absolute left-0 top-[calc(100%+12px)] z-50 w-55 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                      {/* User info */}
                      <div className="border-b border-gray-100 px-5 py-4 text-right">
                        <p className="text-xs text-gray-400">مرحبًا بك</p>

                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {user.full_name}
                        </p>
                      </div>

                      {/* Profile */}
                      <Link
                        href="/profile"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 px-5 py-4 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <FiSettings className="h-5 w-5 text-gray-400" />
                        <span>الملف الشخصي</span>
                      </Link>

                      {/* Logout */}
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 border-t border-gray-100 px-5 py-4 text-sm text-red-500 transition-colors hover:bg-red-50"
                      >
                        <FiLogOut className="h-5 w-5" />

                        <span>تسجيل الخروج</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              // DESKTOP LOGIN
              <Link
                href="/login"
                className="hidden h-12 items-center justify-center rounded-full bg-blue-800 border border-blue-800 px-5 text-sm font-bold text-white transition-all duration-200 hover:bg-blue-900 lg:flex"
              >
                تسجيل الدخول
              </Link>
            )}

            {/* MOBILE MENU BUTTON  */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="فتح القائمة"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY  */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      {/* MOBILE SIDEBAR  */}
      <aside
        className={`fixed right-0 top-0 z-70 flex h-dvh w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/*  SIDEBAR HEADER  */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-2.5">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.webp"
              alt="EraaSoft"
              width={120}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Close */}
          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="إغلاق القائمة"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-gray-100"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/*  USER INFO - ONLY WHEN LOGGED IN  */}
        {user && (
          <div className="flex shrink-0 items-center gap-4 border-b border-gray-100 px-5 py-4">
            {/* Avatar */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.full_name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              ) : (
                <FiUser className="h-7 w-7 text-gray-500" />
              )}
            </div>

            {/* User info */}
            <div className="min-w-0">
              <p className="font-semibold text-gray-800">{user.full_name}</p>

              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>
        )}

        {/*  MOBILE NAV  */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-start rounded-lg px-4 py-3 font-medium transition-colors ${
                      active
                        ? "font-bold text-blue-800 bg-blue-50"
                        : "text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Profile - Only logged in */}
        {user && (
          <div className="bg-white p-4 border-t border-gray-100">
            <Link
              href="/profile"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 font-medium text-blue-800 transition-colors hover:bg-blue-100"
            >
              <span>الملف الشخصي</span>

              <FiSettings className="h-5 w-5 text-gray-400" />
            </Link>
          </div>
        )}

        {/* MOBILE FOOTER ACTION */}
        <div className="bg-white p-4 pt-0">
          {user ? (
            <button
              type="button"
              className="w-full flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 font-medium text-red-500 transition-colors hover:bg-red-100"
            >
              <span>تسجيل الخروج</span>

              <FiLogOut className="h-5 w-5" />
            </button>
          ) : (
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="w-full flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              <FiLogIn className="h-5 w-5" />

              <span>تسجيل الدخول</span>
            </Link>
          )}
        </div>
      </aside>
    </>
  );
};

export default Header;
