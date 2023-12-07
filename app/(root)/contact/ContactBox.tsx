import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

const ContactBox = () => {
  return (
    <div className="flex sm:flex-col my-[5%]">
      <div className="p-[4%] border flex-1 flex flex-col items-center justify-center m-3 rounded-xl">
        <LocationOnIcon className="text-red-500 text-[50px] my-3" />
        <h4 className="text-center">
          THAR PLAZA, KACHERIPADI - PANDIKKAD RD BYPASS, MANJERI, KERALA 676121
        </h4>
      </div>
      <div className="p-[4%] border flex-1 flex flex-col items-center justify-center m-3 rounded-xl">
        <MailOutlineIcon className="text-red-500  text-[50px] my-3" />
        <h4 className="text-center">zigzagmpm@gmail.com</h4>
      </div>
      <div className="p-[4%] border flex-1 flex flex-col items-center justify-center m-3 rounded-xl">
        <WifiCalling3Icon className="text-red-500  text-[50px] my-3" />
        <h4 className="text-center">
          +91 994-644-3551 <br />
          +91 965-645-3551
        </h4>
      </div>
    </div>
  );
};

export default ContactBox;
