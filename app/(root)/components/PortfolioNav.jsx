"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { categories } from "@/constant";
import { nanoid } from "nanoid";

const PortfolioNav = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [category, setCategory] = useState(categories);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/category`)
      .then((res) => setCategory(res.data.category))
      .catch((err) => console.log(err));
  }, []);
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
          {category?.map((item) => (
            <Link key={nanoid()} href={`?type=${item}`}>
              <li
                className={`${
                  type === item && `text-red-500 font-semibold`
                }  mx-3 cursor-pointer hover:text-red-500`}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioNav;
