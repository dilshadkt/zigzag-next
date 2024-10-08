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
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(0);
  const [changeTheme, setChangeTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      className={`h-20 relative ${isMenuOpen ? `` : " "} sticky top-0 z-20   ${
        changeTheme
          ? ` bg-white`
          : `bg-[#DB002F] transition-all ease-out duration-75 `
      }  `}
      onMouseLeave={() => setisOpen(0)}
    >
      <div className=" max-w-screen-2xl mx-auto  md:px-12 px-5 flex justify-between">
        <div className="flex-1 h-full">
          <Link href={"/"}>
            <Image
              src={changeTheme ? changeLogo : logo}
              alt="logo"
              width={80}
            />
          </Link>
        </div>
        <div
          className={`flex-initial lg:w-[45%]  md:w-[67%] md:mt-1 hidden md:flex   rounded-xl ${
            changeTheme
              ? `bg-white text-black shadow-2xl px-5 `
              : `text-rose-200 `
          } `}
        >
          <ul className="flex  items-center h-full font-semibold w-full  justify-around">
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
                className={`p-3 rounded-xl bg-white border shadow-lg top-6 absolute  ${
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
                currentPath === "/career" ? `underline underline-offset-8 ` : ``
              }
              href={"/career"}
              onClick={() => setisOpen(0)}
            >
              <li>Career</li>
            </Link>
            <Link
              className={
                currentPath === "/gallery"
                  ? `underline underline-offset-8 `
                  : ``
              }
              href={"/gallery"}
              onClick={() => setisOpen(0)}
            >
              <li>Gallery</li>
            </Link>
            {/* <Link
              className={
                currentPath === "/contact"
                  ? `underline underline-offset-8 `
                  : ``
              }
              href={"/contact"}
              onClick={() => setisOpen(0)}
            >
              <li>Contact</li>
            </Link> */}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-end text-white ">
          <Link href={"/contact"} className="hidden md:block">
            <PersonOutlineOutlinedIcon />
          </Link>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <MenuIcon
              className={`${changeTheme ? "text-black" : `text-white`}`}
            />
          </div>
        </div>
      </div>
      <MobileNav currentPath={currentPath} />
      <div className="bg-green-500 w-[45px] h-[45px] rounded-full fixed bottom-5 md:bottom-[13%] right-5  text-white cursor-pointer flex items-center justify-center">
        <a href="https://wa.me/9946443551?text=Hello ZigZag">
          <WhatsAppIcon />
        </a>
      </div>
      {/* slider menu  */}
      <div
        className={` w-[200px] bg-white/80 flex flex-col p-4 border-b border-l rounded-bl-lg h-[200px] absolute transition-all duration-300 ${
          isMenuOpen ? `right-0` : `-right-[100%]`
        } `}
      >
        <ul className="flex flex-col gap-3">
          <Link
            className={
              currentPath === "/blogs" ? `underline underline-offset-8 ` : ``
            }
            href={"/blogs"}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>Blogs</li>
          </Link>
          <Link
            className={
              currentPath === "/career" ? `underline underline-offset-8 ` : ``
            }
            href={"/career"}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>Career</li>
          </Link>
          <Link
            className={
              currentPath === "/gallery" ? `underline underline-offset-8 ` : ``
            }
            href={"/gallery"}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>Gallery</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
