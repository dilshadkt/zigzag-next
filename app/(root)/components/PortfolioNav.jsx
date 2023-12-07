import Link from "next/link";
import React from "react";

const PortfolioNav = () => {
  return (
    <div className="mx-[17%] sm:mx-0 my-[2%] sm:my-[5%]">
      <div className=" flex justify-center">
        <ul className="flex ">
          <Link href={"?type=all"}>
            {" "}
            <li className="mx-3 cursor-pointer hover:text-red-500">ALL</li>
          </Link>
          <Link href={"?type=brand"}>
            {" "}
            <li className="mx-3 cursor-pointer hover:text-red-500">
              Brand Identity
            </li>
          </Link>
          <Link href={"?type=social"}>
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
