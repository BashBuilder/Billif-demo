import type { Metadata } from "next";
//eslint-disable-next-line
// @ts-ignore: Allow side-effect import of global CSS without type declarations
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import CookieModal from "@/components/global/cookie-modal";

export const metadata: Metadata = {
  title: "Billif",
  description: "Revenue pament-tech by QorePay",
};

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
          content="BIll Intelligent Flow Technologies by QorePay"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        {/* Google Ads Global site tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17119316230"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17119316230');
            `,
          }}
        />
      </head>
      <body>
        {/* <Script
          id="cuoral-inline-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            const s = document.createElement('script');
            s.src = 'https://js.cuoral.com/inline.js';
            s.defer = true;

            // Required widget key
            s.dataset.cuoralKey = "e7e3bc9f-eae4-42d1-b39b-aa968c26cbb8";

            // Pass User Details (if available)
            try {
              const tm = {
                first_name: "Anthony",
                last_name: "Adelowotan",
                email: "aadelowotan@qorepay.com"
              }

              if (tm.email) {
                s.dataset.email = tm.email;
                s.dataset.first_name = tm.first_name || "";
                s.dataset.last_name = tm.last_name || "";
              }
            } catch (e) {
              // Fail silently
            }

            document.head.appendChild(s);
          })();
        `,
          }}
        /> */}

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
        <CookieModal />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
