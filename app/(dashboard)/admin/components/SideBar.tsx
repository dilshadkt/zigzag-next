import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="my-[100px]">
      <ul>
        <Link href={"/admin"}>
          <li className="py-5 cursor-pointer text-lg font-medium hover:text-red-500 hover:bg-red-200 rounded-lg flex items-center justify-center">
            Home
          </li>
        </Link>

        <Link href={"/admin/works"}>
          <li className="py-5 cursor-pointer text-lg font-medium hover:text-red-500 hover:bg-red-200 rounded-lg flex items-center justify-center">
            Works
          </li>
        </Link>
        <Link href={"/admin/blogs"}>
          <li className="py-5 cursor-pointer text-lg font-medium hover:text-red-500 hover:bg-red-200 rounded-lg flex items-center justify-center">
            Blogs
          </li>
        </Link>
        <Link href={"/admin/experts"}>
          <li className="py-5 cursor-pointer text-lg font-medium hover:text-red-500 hover:bg-red-200 rounded-lg flex items-center justify-center">
            Experts
          </li>
        </Link>
        <Link href={"/admin/client"}>
          <li className="py-5 cursor-pointer text-lg font-medium hover:text-red-500 hover:bg-red-200 rounded-lg flex items-center justify-center">
            Client logo
          </li>
        </Link>
        <Link href={"/admin/testimonial"}>
          <li className="py-5 cursor-pointer text-lg font-medium hover:text-red-500 hover:bg-red-200 rounded-lg flex items-center justify-center">
            Testimonials
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
