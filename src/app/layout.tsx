import type { Metadata } from "next";
import "./globals.css";
import getFontVars from "./fonts";
import MainNavigation from "@/components/MainNavigation";
import MainContent from "@/components/MainContent";

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
      <body className={getFontVars()}>
        <main className="flex min-h-screen justify-between">
          <div className="gradient fixed top-0 left-0 w-screen h-dvh box-border flex-col-reverse sm:flex-row flex">
            <MainNavigation />
            <MainContent>{children}</MainContent>
          </div>
        </main>
      </body>
    </html>
  );
}
