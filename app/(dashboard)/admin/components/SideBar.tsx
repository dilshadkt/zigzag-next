"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SideBar = () => {
  const path = usePathname();
  const currentPath = path.split("/")[(path.split("/"), length)];

  return (
    <div className="my-[100px] text-gray-800 ">
      <ul>
        <Link href={"/admin"}>
          <li
            className={`${
              currentPath === undefined && `text-blue-500 bg-gray-300`
            } py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-[#5D87FF] rounded-lg flex items-center justify-center`}
          >
            Home
          </li>
        </Link>

        <Link href={"/admin/works"}>
          <li
            className={`${
              currentPath == "works" && `text-blue-600 bg-gray-300`
            } py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-[#5D87FF] rounded-lg flex items-center justify-center`}
          >
            Works
          </li>
        </Link>
        <Link href={"/admin/blogs"}>
          <li
            className={`${
              currentPath == "blogs" && `text-blue-600 bg-gray-300`
            }   py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-[#5D87FF] rounded-lg flex items-center justify-center`}
          >
            Blogs
          </li>
        </Link>
        <Link href={"/admin/seo"}>
          <li
            className={`${
              currentPath == "seo" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-[#5D87FF] rounded-lg flex items-center justify-center`}
          >
            Pages
          </li>
        </Link>
        <Link href={"/admin/experts"}>
          <li
            className={` ${
              currentPath == "experts" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-[#5D87FF] rounded-lg flex items-center justify-center`}
          >
            Experts
          </li>
        </Link>
        <Link href={"/admin/client"}>
          <li
            className={`${
              currentPath == "client" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-[#5D87FF] rounded-lg flex items-center justify-center`}
          >
            Client logo
          </li>
        </Link>
        <Link href={"/admin/testimonial"}>
          <li
            className={`${
              currentPath == "testimonial" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-[#5D87FF] rounded-lg flex items-center justify-center`}
          >
            Testimonials
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
