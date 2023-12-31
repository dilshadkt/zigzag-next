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
      </head>

      <body className={rajdhani.className}>
        <main className=" sm:mb-[18%]"> {children}</main>
      </body>
    </html>
  );
}
