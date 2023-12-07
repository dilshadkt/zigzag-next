import React from "react";
import Navbar from "./Navbar";
import Footer from "@/app/(root)/components/Footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="mb-[10%]"> {children}</main>

      <Footer />
    </div>
  );
};

export default layout;
