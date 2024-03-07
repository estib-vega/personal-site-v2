import type { Metadata } from "next";
import "./globals.css";
import getFontVars from "./fonts";

export const metadata: Metadata = {
  title: "estib",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={getFontVars()}>{children}</body>
    </html>
  );
}
