import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Ubuntu_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/motion/ScrollReveal";
import "./globals.css";

const hind = Hind_Siliguri({
  variable: "--font-hind",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ubuntu = Ubuntu_Sans({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "সবুজ সেবা ফাউন্ডেশন — মানুষের পাশে, মানুষের জন্য",
  description:
    "শিক্ষা, মানবসেবা ও সামাজিক উন্নয়নে নিবেদিত একটি অলাভজনক প্রতিষ্ঠান। আপনার অনুদানে বদলে যাক হাজারো জীবন।",
};

export const viewport: Viewport = { themeColor: "#008e48" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" data-scroll-behavior="smooth" className={`${hind.variable} ${ubuntu.variable} h-full`}>
      <body suppressHydrationWarning className="flex min-h-full flex-col font-sans">
        <div aria-hidden="true" className="scroll-progress" />
        <ScrollReveal />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
