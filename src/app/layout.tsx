import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hope Home Health Services",
  description:
    "Professional care, delivered with warmth and respect. We help patients heal, regain independence, and find hope—without leaving home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* Trust Banner */}
        <div className="bg-gradient-to-r from-[theme(hope-green.500)] to-[theme(hope-indigo.500)] text-white py-2 text-center">
          <p className="text-sm font-semibold">
            Illinois&apos; Most Trusted Home Health – 20 Years of Excellence
          </p>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
