"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./components/MobileNav";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(0);
  const currentPath = usePathname();
  return (
    <div className="h-20 bg-[#DB002F] sticky top-0 z-20">
      <div className="px-14 flex justify-between">
        <div className="flex-1 h-full">
          <Image src={logo} alt="logo" width={80} />
        </div>
        <div className="flex-initial w-[40%] sm:hidden text-rose-200">
          <ul className="flex  items-center h-full font-medium justify-around">
            <Link
              href={"/"}
              className={
                currentPath === "/" ? `underline underline-offset-8 ` : ``
              }
            >
              <li>Home</li>
            </Link>
            <Link
              href={"/about"}
              className={
                currentPath === "/about" ? `underline underline-offset-8 ` : ``
              }
            >
              <li>About</li>
            </Link>
            <div className="relative">
              <Link
                href={"/services"}
                className={
                  currentPath === "/services"
                    ? `underline underline-offset-8 `
                    : ``
                }
              >
                <li onMouseEnter={() => setisOpen(1)}>Service</li>
              </Link>
              <div
                onMouseLeave={() => setisOpen(0)}
                className={`p-3 rounded-xl bg-white/70 absolute  ${
                  isOpen ? `visible` : `invisible`
                }`}
              >
                <ul className="text-black font-medium whitespace-nowrap">
                  <Link href={"/services/Corporate"}>
                    <li className="my-3 hover:text-red-500 cursor-pointer">
                      Corporate Branding
                    </li>
                  </Link>
                  <Link href={"/services/Social"}>
                    <li className="my-3 hover:text-red-500 cursor-pointer">
                      Social media marketing
                    </li>
                  </Link>
                  <Link href={"/services/SEO"}>
                    <li className="my-3 hover:text-red-500 cursor-pointer">
                      SEO
                    </li>
                  </Link>{" "}
                  <Link href={"/services/Website"}>
                    <li className="my-3 hover:text-red-500 cursor-pointer">
                      Website Development{" "}
                    </li>
                  </Link>
                  <Link href={"/services/Performance"}>
                    <li className="my-3 hover:text-red-500 cursor-pointer">
                      Performance Marketing{" "}
                    </li>
                  </Link>
                  <Link href={"/services/Media"}>
                    <li className="my-3 hover:text-red-500 cursor-pointer">
                      Media Production{" "}
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

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
            <Link href={"blogs"}>
              <li>Blogs</li>
            </Link>
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
      <MobileNav />
    </div>
  );
};

export default Navbar;
