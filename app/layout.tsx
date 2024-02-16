import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import GoogleTagManger from "./GoogleTagManger";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Best Digital Marketing Agency in Malappuram",
  description:
    " As your trusted digital marketing agency in malappuram, we provide corporate branding, seo, social media, paid ads, website development services for your brand.   ",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  openGraph: {
    title: "Leading Digital Marketing Agency in Malappuram | Branding Services",
    description:
      "Best digital marketing agency in Malappuram, offering comprehensive digital marketing and branding solutions for brands worldwide.",
  },
  keywords:
    "Digital Marketing Agency, Malappuram, Digital Marketing Services, Branding Services, Online Marketing, Online Advertising, Brand Promotion, Digital Advertising",
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
