import type { Metadata } from "next";
import "./globals.css";
import "./fontiran.css";

export const metadata: Metadata = {
  title: "آنلاین شاپ",
  description: "توضیحات مربوط به آنلاین شاپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        {children}
      </body>
    </html>
  );
}
