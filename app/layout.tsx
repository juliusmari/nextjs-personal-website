import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";

const openSans = Libre_Franklin({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julius Chan",
  description: "Julius Chan personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-white.svg" />
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
        ></Script>
      </head>
      <body className={openSans.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
