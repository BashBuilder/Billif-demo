import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Roboto, Fredoka } from "@next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "NextGen",
  description: "Revenue pament-tech by QorePay",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // specify the weights you need
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"], // specify the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="NextGen: Revenue pament-tech by QorePay"
        />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${roboto.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
