import React from "react";
import Navabar from "./components/Navabar";
import SideBar from "./components/SideBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col h-screen ">
      <>
        <Navabar />
        <div className="flex  min-h-[87vh]">
          <div className="flex-initial overflow-y-scroll  shadow-2xl bg-gray-100 border w-[20%] border-r-[1px] hidden md:flex  items-center">
            <SideBar />
          </div>
          <div className="flex-1 px-[1%] overflow-scroll ">
            <main>{children}</main>
          </div>
        </div>
      </>
    </div>
  );
};

export default Layout;
