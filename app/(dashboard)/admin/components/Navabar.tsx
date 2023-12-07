import Image from "next/image";
import React from "react";
import logo from "@/public/digital-market-agency-in-malappuram.png";
import PersonIcon from "@mui/icons-material/Person";
const Navabar = () => {
  return (
    <div className="py-5 px-[5%] border flex items-center justify-between">
      <div className="h-[40px] flex items-center">
        <Image
          src={logo}
          alt="digital marcketing agency in malappuram"
          className="w-[100px]"
        />
      </div>
      <div>
        <div className="border rounded-full p-3 hover:bg-slate-200 cursor-pointer">
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};

export default Navabar;
