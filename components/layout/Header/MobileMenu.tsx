"use client";

import Link from "next/link";
import Image from "next/image";

import { SITE } from "@/constants/site";

import { IoClose, IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail, MdKeyboardArrowLeft } from "react-icons/md";

import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { links } from "./Navbar";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const contactInfo = [
  { icon: IoLocationOutline, text: "مصدق، الدقي" },
  { icon: MdOutlineEmail, text: "email@example.com" },
  { icon: FiPhone, text: "0123456789" },
];

const socialLinks = [
  { icon: FaYoutube, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaFacebookF, href: "#" },
];

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-75 max-w-[85vw] overflow-y-auto scrollbar-none bg-zinc-700 p-8 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" onClick={onClose}>
            <Image src="/logo2.png" alt={SITE.name} width={120} height={48} />
          </Link>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white"
          >
            <IoClose className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between border-b border-zinc-500 pb-2 text-white "
            >
              <span className="font-medium text-sm">{link.label}</span>
              <MdKeyboardArrowLeft className="text-base" />
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-8 space-y-5">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center not-only:gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700">
                  <Icon className="text-white" />
                </div>
                <span className="text-white">{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Social */}
        <div className="mt-8 flex justify-center gap-5">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex h-9 w-10 items-center justify-center rounded-xl bg-white"
              >
                <Icon className="text-blue-700" />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
