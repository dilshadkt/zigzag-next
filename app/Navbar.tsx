"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="h-20 bg-[#DB002F] sticky top-0 z-20">
      <div className="px-14 flex justify-between">
        <div className="flex-1 h-full">
          <Image src={logo} alt="logo" width={80} />
        </div>
        <div className="flex-initial w-[40%] text-rose-200">
          <ul className="flex  items-center h-full justify-around">
            <Link
              href={"/"}
              className={
                currentPath === "/" ? `underline underline-offset-8 ` : ``
              }
            >
              <li>Home</li>
            </Link>

            <li>About</li>
            <li>Service</li>
            <Link
              href={"/portfolio?type=all"}
              className={
                currentPath === "/portfolio"
                  ? `underline underline-offset-8 `
                  : ``
              }
            >
              {" "}
              <li>Portfolio</li>
            </Link>

            <li>Blogs</li>
            <Link
              className={
                currentPath === "/contact"
                  ? `underline underline-offset-8 `
                  : ``
              }
              href={"/contact"}
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-end text-white ">
          <PersonOutlineOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
