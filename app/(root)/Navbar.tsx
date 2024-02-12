"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./components/MobileNav";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import changeLogo from "@/public/digital-market-agency-in-malappuram.png";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(0);
  const [changeTheme, setChangeTheme] = useState(false);
  const currentPath = usePathname();
  const handleScroll = () => {
    window.scrollY > 720 ? setChangeTheme(true) : setChangeTheme(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`h-20 ${
        changeTheme
          ? ` bg-transparent`
          : `bg-[#DB002F] transition-all ease-out duration-75 `
      } sticky top-0 z-20   `}
      onMouseLeave={() => setisOpen(0)}
    >
      <div className="px-14 flex justify-between">
        <div className="flex-1 h-full">
          <Image src={changeTheme ? changeLogo : logo} alt="logo" width={80} />
        </div>
        <div
          className={`flex-initial w-[40%] md:hidden  rounded-xl ${
            changeTheme ? `bg-white text-black shadow-2xl ` : `text-rose-200 `
          } `}
        >
          <ul className="flex  items-center h-full font-semibold  justify-around">
            <Link
              href={"/"}
              className={
                currentPath === "/" ? `underline underline-offset-8 ` : ``
              }
              onClick={() => setisOpen(0)}
            >
              <li>Home</li>
            </Link>
            <Link
              href={"/about"}
              className={
                currentPath === "/about" ? `underline underline-offset-8 ` : ``
              }
              onClick={() => setisOpen(0)}
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
                <li
                  onMouseEnter={() => setisOpen(1)}
                  onClick={() => setisOpen(0)}
                >
                  Service
                </li>
              </Link>
              <div
                onMouseLeave={() => setisOpen(0)}
                className={`p-3 rounded-xl bg-white/70 absolute  ${
                  isOpen ? `visible` : `invisible`
                }`}
              >
                <ul className="text-black font-medium whitespace-nowrap">
                  <Link href={"/services/Corporate"}>
                    <li className="my-3 font-medium hover:text-red-500 cursor-pointer">
                      Corporate Branding
                    </li>
                  </Link>
                  <Link href={"/services/Social"}>
                    <li className="my-3 font-medium hover:text-red-500 cursor-pointer">
                      Social media marketing
                    </li>
                  </Link>
                  <Link href={"/services/SEO"}>
                    <li className="my-3 font-medium hover:text-red-500 cursor-pointer">
                      SEO
                    </li>
                  </Link>{" "}
                  <Link href={"/services/Website"}>
                    <li className="my-3 font-medium hover:text-red-500 cursor-pointer">
                      Website Development{" "}
                    </li>
                  </Link>
                  <Link href={"/services/Performance"}>
                    <li className="my-3 font-medium hover:text-red-500 cursor-pointer">
                      Performance Marketing{" "}
                    </li>
                  </Link>
                  <Link href={"/services/Media"}>
                    <li className="my-3 font-medium hover:text-red-500 cursor-pointer">
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
              onClick={() => setisOpen(0)}
            >
              {" "}
              <li>Portfolio</li>
            </Link>
            <Link
              className={
                currentPath === "/blogs" ? `underline underline-offset-8 ` : ``
              }
              href={"/blogs"}
              onClick={() => setisOpen(0)}
            >
              <li>Blogs</li>
            </Link>
            <Link
              className={
                currentPath === "/contact"
                  ? `underline underline-offset-8 `
                  : ``
              }
              href={"/contact"}
              onClick={() => setisOpen(0)}
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-end text-white ">
          <PersonOutlineOutlinedIcon />
        </div>
      </div>
      <MobileNav currentPath={currentPath} />
      <div className="bg-green-500 w-[45px] h-[45px] rounded-full fixed bottom-5 md:bottom-[13%] right-5  text-white cursor-pointer flex items-center justify-center">
        <a href="https://wa.me/9946443551?text=Hello ZigZag">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
