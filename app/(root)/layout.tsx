import React, { useState } from "react";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/app/(root)/components/Footer";
import ContactModal from "./components/contactModal";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className=" md:mb-0 "> {children}</main>
      <ContactModal />
      <Footer />
    </div>
  );
};

export default layout;
