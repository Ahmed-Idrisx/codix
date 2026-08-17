import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: {
    default: "Codix | تعلم البرمجة الآن",
    template: "%s | Codix",
  },
  description: "تعلم البرمجة الآن لضمان مستقبل أفضل بمساعدة أفضل المدربين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.className} min-h-screen bg-white text-zinc-950 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
