import React from "react";
import Image from "next/image";
import about from "@/public/moblie-nav/About Digital-Marketing-Malappuram.png";
import service from "@/public/moblie-nav/services  Digital-Marketing-Malappuram.png";
import home from "@/public/moblie-nav/home Digital-Marketing-Malappuram.png";
import portfolio from "@/public/moblie-nav/works Digital-Marketing-Malappuram.png";
import contact from "@/public/moblie-nav/contact Digital-Marketing-Malappuram.png";
import Link from "next/link";
interface Props {
  currentPath: string;
}
const MobileNav = ({ currentPath }: Props) => {
  return (
    <div className=" hidden fixed md:flex left-0 right-0 m-auto mx-5 bottom-4 py-3 px-2 bg-white shadow-2xl z-50 rounded-2xl ">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Link href={"/about"}>
          <div className="mb-2 flex items-center justify-center">
            <Image
              src={about}
              alt="digital marketing agency in malappuram"
              className={`w-[22px] ${
                currentPath === "/about" ? `opacity-100` : `opacity-60`
              } `}
            />
          </div>
          <h5
            className={`${
              currentPath === "/about"
                ? `text-black font-semibold`
                : `text-red-500`
            } text-sm `}
          >
            About
          </h5>
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Link href={"/services"}>
          <div className="mb-2 flex items-center justify-center">
            <Image
              src={service}
              alt="digital marketing agency in malappuram"
              className={`w-[22px]  ${
                currentPath === "/services" ? `opacity-100` : `opacity-60`
              }`}
            />
          </div>
          <h5
            className={` ${
              currentPath === "/services"
                ? `text-black font-semibold`
                : `text-red-500`
            } text-sm`}
          >
            Service
          </h5>
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Link href={"/"}>
          <div className="mb-2 flex items-center justify-center">
            <Image
              src={home}
              alt="digital marketing agency in malappuram"
              className={`w-[22px]  ${
                currentPath === "/" ? `opacity-100` : `opacity-60`
              }`}
            />
          </div>
          <h5
            className={` text-sm ${
              currentPath === "/" ? `text-black font-semibold` : `text-red-500`
            }`}
          >
            Home
          </h5>
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Link href={"/portfolio?type=all"}>
          <div className="mb-2 flex items-center justify-center">
            <Image
              src={portfolio}
              alt="digital marketing agency in malappuram"
              className={`w-[22px] ${
                currentPath === "/portfolio" ? `opacity-100` : `opacity-60`
              }`}
            />
          </div>
          <h5
            className={`${
              currentPath === "/portfolio"
                ? `text-black font-semibold`
                : `text-red-500`
            }  text-sm`}
          >
            Portfolio
          </h5>
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center ">
        <Link href={"/contact"}>
          <div className="mb-2 flex items-center justify-center">
            <Image
              src={contact}
              alt="digital marketing agency in malappuram"
              className={`w-[22px]  ${
                currentPath === "/contact" ? `opacity-100` : `opacity-60`
              }`}
            />
          </div>
          <h5
            className={`${
              currentPath === "/contact"
                ? `text-black font-semibold`
                : `text-red-500`
            } text-sm`}
          >
            Contact
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
