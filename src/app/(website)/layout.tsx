import type { Metadata } from "next";
import ".././globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Bill-if",
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
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
