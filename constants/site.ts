import { FiAward, FiBookOpen, FiUser } from "react-icons/fi";
export const SITE = {
  name: "Codix",
  tagline: "تعلم البرمجة الان",
  description: "تعلم البرمجة الان لضمان مستقبل افضل، نساعدك توصل لحلمك",
  address: "مصدق، الدقي",
  email: "email@example.com",
  phone: "0123456789",
};

export const navLinks = [
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

export type User = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string | null;
} | null;
// if no user :
// const user = null as User;
// if user : // if user :
export const user: User = {
  first_name: "ahmed",
  last_name: "idris",
  email: "ahmedbashirx@gmail.com",
  avatar: null,
  phone: "",
  bio: "",
};

// Profile Tabs
export type ProfileTab = "personal" | "courses" | "certificates";
export const tabs = [
  {
    id: "personal" as ProfileTab,
    label: "البيانات الشخصية",
    icon: FiUser,
  },
  {
    id: "courses" as ProfileTab,
    label: "الكورسات المسجلة",
    icon: FiBookOpen,
  },
  {
    id: "certificates" as ProfileTab,
    label: "شهاداتي",
    icon: FiAward,
  },
];
