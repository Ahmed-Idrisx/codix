"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { SITE } from "@/constants/site";
import MainButton from "@/components/shared/MainButton";

export const links = [
  { label: "الرئيسية", href: "/" },
  { label: "الدورات", href: "/courses" },
  { label: "حلول برمجية", href: "/solutions" },
  { label: "المقالات", href: "/articles" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

// const user = {
//   name: "Ahmed",
//   image: "/avatar.jpg",
// };

const user = null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/">
            <Image src="/logo1.png" alt={SITE.name} width={120} height={48} />
          </Link>

          <nav className="hidden items-center gap-14 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-blue-700 active:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-8 lg:flex">
            {user ? (
              <UserMenu user={user} />
            ) : (
              <MainButton className="py-2 px-3"> اشترك الآن</MainButton>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-5">
            {user && <UserMenu user={user} />}
            <button onClick={() => setMobileOpen(true)}>
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
