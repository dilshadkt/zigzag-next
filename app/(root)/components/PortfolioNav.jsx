"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const PortfolioNav = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  return (
    <div className="max-w-screen-2xl mx-auto  font-medium   md:py-[2%] py-[5%]">
      <div className=" flex justify-center">
        <ul className="flex ">
          <Link href={"?type=all"}>
            <li
              className={` ${
                type === "all" && `text-red-500 font-semibold`
              } mx-3 cursor-pointer hover:text-red-500`}
            >
              ALL
            </li>
          </Link>
          <Link href={"?type=Brand Identity"}>
            <li
              className={`${
                type === "Brand Identity" && `text-red-500 font-semibold`
              }  mx-3 cursor-pointer hover:text-red-500`}
            >
              Brand Identity
            </li>
          </Link>
          <Link href={"?type=Social Media"}>
            <li
              className={` ${
                type === "Social Media" && `text-red-500 font-semibold`
              }  mx-3 cursor-pointer hover:text-red-500`}
            >
              Social Media
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioNav;
