"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiUser } from "react-icons/fi";
import {
  IoSchoolOutline,
  IoInformationCircleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { useState } from "react";

type Props = {
  user: {
    name: string;
    image: string;
  };
};

const menuItems = [
  { title: "الملف الشخصي", href: "/profile", icon: FiUser },
  { title: "كورساتي", href: "/my-courses", icon: IoSchoolOutline },
  { title: "المساعدة", href: "/help", icon: IoInformationCircleOutline },
];

export default function UserMenu({ user }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2"
      >
        <FiChevronDown />

        <div className="relative">
          <Image
            src={user.image}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />

          <span className="absolute right-0 top-0 size-3 rounded-full border border-white bg-emerald-400" />
        </div>
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)} className="fixed inset-0 z-20" />
          <div className="z-50 absolute left-0 top-11 w-64 rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xl">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-2 py-3.5 text-zinc-600 transition-colors hover:bg-zinc-100"
                >
                  <Icon className="h-5 w-5 shrink-0 text-zinc-400" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              );
            })}

            <button
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-3 rounded-xl px-2 py-3.5 text-red-500 transition-colors hover:bg-red-100"
            >
              <IoLogOutOutline className="h-5 w-5 shrink-0 text-red-500" />
              <span className="text-sm font-medium">تسجيل الخروج</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
