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
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZTXVB19FL"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2ZTXVB19FL');
        `,
          }}
        />
        <Script id="facebook-pixel">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '893808749088712'); 
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=893808749088712&ev=PageView&noscript=1"
          />
        </noscript>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
