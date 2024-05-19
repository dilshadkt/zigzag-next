"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideBar } from "@/constant";
import { nanoid } from "nanoid";

const SideBar = () => {
  const path = usePathname();

  return (
    <div className="my-[100px] text-gray-800  w-full ">
      <ul>
        {sideBar.map((item) => (
          <Link key={nanoid()} href={item.router}>
            <li
              className={`${
                path === item.router && `text-blue-500 bg-gray-300`
              } py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
            >
              <item.icon />
              <h4 className="ml-3">{item.title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
