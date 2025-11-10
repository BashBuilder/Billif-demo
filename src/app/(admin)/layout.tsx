export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="Billif Blog Admin"
          content="Billif: Revenue pament-tech by QorePay Blog management"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
