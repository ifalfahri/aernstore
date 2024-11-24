import { Inter } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AernStore",
  description: "AernStore merupakan sebuah website dari toko online yang menjual berbagai macam barang dengan motto #SahabatBelanjaHemat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="95ff212a-1b5d-439f-b1ea-41d2af07bf2a"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
