import { Toaster } from "@/components/ui/toaster";
import ".././globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="NextGen waitlist"
          content="NextGen: Revenue pament-tech by QorePay join waitlist"
        />
      </head>
      <Toaster />
      <body>{children}</body>
    </html>
  );
}
