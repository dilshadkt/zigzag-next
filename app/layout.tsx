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
        <meta
          property="og:title"
          content="Leading Digital Marketing Agency in Malappuram | Branding Services"
        />
        <meta
          property="og:description"
          content="Best digital marketing agency in Malappuram, offering comprehensive digital marketing and branding solutions for brands worldwide. "
        />

        <meta
          name="keywords"
          content="Digital Marketing Agency, Malappuram, Digital Marketing Services, Branding Services, Online Marketing, Online Advertising, Brand Promotion, Digital Advertising
"
        />
      </head>

      <body className={rajdhani.className}>
        <main> {children}</main>
      </body>
    </html>
  );
}
