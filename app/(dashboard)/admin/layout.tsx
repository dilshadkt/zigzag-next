import React from "react";
import Navabar from "./components/Navabar";
import SideBar from "./components/SideBar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navabar />
      <div className="flex h-[87vh]">
        <div className="flex-initial w-[20%] border">
          <SideBar />
        </div>
        <div className="flex-1 px-[3%] ">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default layout;
