"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/digital-market-agency-in-malappuram.png";
import PersonIcon from "@mui/icons-material/Person";

import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Navabar = () => {
  const router = useRouter();
  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      router.push("/");
    }
  };
  return (
    <>
      <div className="py-5 px-[5%] shadow-xl border-b-[1px]  flex items-center justify-between">
        <div className="h-[40px] flex items-center">
          <Image
            src={logo}
            alt="digital marcketing agency in malappuram"
            className="w-[100px]"
          />
        </div>
        <div>
          <div
            title="log out"
            onClick={() => Logout()}
            className="border rounded-full p-3 hover:bg-slate-200 cursor-pointer"
          >
            <PersonIcon />
          </div>
        </div>
      </div>
      <div className="h-[50px] w-full hidden md:flex p-2  sticky top-[15px] z-50">
        <details className="dropdown">
          <summary className="m-1 btn">
            <DensityMediumIcon />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-white">
            <li>
              <Link href={"/admin/works"}>Works</Link>
            </li>
            <li>
              <Link href={"/admin/client"}>Client Logo</Link>
            </li>
            <li>
              <Link href={"/admin/experts"}>Experts</Link>
            </li>
            <li>
              <Link href={"/admin/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/admin/testimonial"}>Testimonial</Link>
            </li>
          </ul>
        </details>
      </div>{" "}
    </>
  );
};

export default Navabar;
