import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import GoogleTagManger from "./GoogleTagManger";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    " Zig Zag: Malappuram's Leading Digital Marketing & Branding Agency | Branding & Digital Marketing Services",
  description:
    " Elevate your brand with Zig Zag, a trusted Malappuram digital marketing agency. We offer comprehensive branding & digital marketing services to help you succeed globally    ",
  alternates: {
    canonical: `https://www.zigzagdigitalsolutions.com`,
  },
  openGraph: {
    title: "Leading Digital Marketing Agency in Malappuram | Branding Services",
    description:
      "Find your brand's potential with Zig Zag, Malappuram's leading digital marketing agency. We offer everything you need to succeed: branding, SEO, social media, websites, and more!",
  },
  keywords:
    "Digital Marketing Agency, Malappuram, Digital Marketing Services, Branding Services, Online Marketing, Online Advertising, Brand Promotion, Digital Advertising    ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManger />
      </head>

      <body className={rajdhani.className}>
        <main> {children}</main>
      </body>
    </html>
  );
}
