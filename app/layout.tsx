import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen bg-white font-sans text-zinc-950 antialiased">
        {children}
      </body>
    </html>
  );
}
