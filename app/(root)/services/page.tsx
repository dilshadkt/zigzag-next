import React from "react";
import Services from "../components/Services";
import { Metadata } from "next";

const Service = () => {
  return (
    <div className="bg-white lg:pb-[10%]">
      <Services />
    </div>
  );
};

export default Service;

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
  },
};
