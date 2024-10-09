import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextGen",
  description: "Revenue pament-tech by QorePay",
};

// const openSans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

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
          content="NextGen Revenue Paymentech by QorePay"
        />
      </head>
      <body>
        <Script
          id="brevo-conversations"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(d, w, c) {
                w.BrevoConversationsID = '670362f58365a217a50b0078';
                w[c] = w[c] || function() {
                    (w[c].q = w[c].q || []).push(arguments);
                };
                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                if (d.head) d.head.appendChild(s);
            })(document, window, 'BrevoConversations');
          `,
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
