"use client";
import React, { useEffect, useState } from "react";
import Navabar from "./components/Navabar";
import SideBar from "./components/SideBar";
import Login from "./Login";
const layout = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    const val = localStorage.getItem("admin");
    setIsLogin(val === "true" ? false : true);
  }, []);
  return (
    <div>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <>
          <Navabar />
          <div className="flex  min-h-[87vh]">
            <div className="flex-initial bg-slate-100 w-[20%] border">
              <SideBar />
            </div>
            <div className="flex-1 px-[1%] ">
              <main>{children}</main>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default layout;
