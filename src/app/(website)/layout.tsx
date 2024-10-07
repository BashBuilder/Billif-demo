import type { Metadata } from "next";
// import localFont from "next/font/local";
import ".././globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "NextGen",
  description: "Revenue pament-tech by QorePay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
