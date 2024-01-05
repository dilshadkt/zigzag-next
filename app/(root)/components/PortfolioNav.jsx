import Link from "next/link";
import React from "react";

const PortfolioNav = () => {
  return (
    <div className="mx-[17%]  sm:mx-0 py-[2%] sm:py-[5%]">
      <div className=" flex justify-center">
        <ul className="flex ">
          <Link href={"?type=all"}>
            {" "}
            <li className="mx-3 cursor-pointer hover:text-red-500">ALL</li>
          </Link>
          <Link href={"?type=Brand Identity"}>
            {" "}
            <li className="mx-3 cursor-pointer hover:text-red-500">
              Brand Identity
            </li>
          </Link>
          <Link href={"?type=Social Media"}>
            {" "}
            <li className="mx-3 cursor-pointer hover:text-red-500">
              Social Media
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioNav;
