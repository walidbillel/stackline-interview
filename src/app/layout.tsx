import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stackline Retail Store",
  description: "Buy all the things!",
  generator: "Next.js",
  applicationName: "Stackline Retail Store",
  referrer: "origin-when-cross-origin",
  robots: "follow, index",
  authors: [
    {
      name: "Walid Boubguira",
      url: "walid.boubguira.com",
    },
  ],
  creator: "Walid Boubguira",
  publisher: "Walid Boubguira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
