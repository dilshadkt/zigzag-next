import React from "react";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/app/(root)/components/Footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className=" md:mb-0 "> {children}</main>

      <Footer />
    </div>
  );
};

export default layout;
