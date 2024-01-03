import React from "react";
import Image from "next/image";
import logo from "@/public/digital-market-agency-in-malappuram.png";

import { redirect } from "next/navigation";
const page = () => {
  return (
    <div className="h-[100vh] overflow-hidden flex items-center justify-center ">
      <Image
        src={logo}
        alt="digital-market-agency-in-malappuram"
        className="object-cover w-[60%]"
      />
    </div>
  );
};

export default page;
