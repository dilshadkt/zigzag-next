"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import AnimationIcon from "@mui/icons-material/Animation";
import StyleIcon from "@mui/icons-material/Style";
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
            } py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
          >
            <HomeIcon />
            <h4 className="ml-3">Home</h4>
          </li>
        </Link>

        <Link href={"/admin/works"}>
          <li
            className={`${
              currentPath == "works" && `text-blue-600 bg-gray-300`
            } py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
          >
            <MovieFilterIcon />
            <h4 className="ml-3">Works</h4>
          </li>
        </Link>
        <Link href={"/admin/blogs"}>
          <li
            className={`${
              currentPath == "blogs" && `text-blue-600 bg-gray-300`
            }   py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
          >
            <LibraryBooksIcon />
            <h4 className="ml-3">Blogs</h4>
          </li>
        </Link>
        <Link href={"/admin/seo"}>
          <li
            className={`${
              currentPath == "seo" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
          >
            <NoteAddIcon />
            <h4 className="ml-3">Pages</h4>
          </li>
        </Link>
        <Link href={"/admin/experts"}>
          <li
            className={` ${
              currentPath == "experts" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
          >
            <GroupsIcon />
            <h4 className="ml-3">Experts</h4>
          </li>
        </Link>
        <Link href={"/admin/client"}>
          <li
            className={`${
              currentPath == "client" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
          >
            <AnimationIcon />
            <h4 className="ml-3"> Client logo</h4>
          </li>
        </Link>
        <Link href={"/admin/testimonial"}>
          <li
            className={`${
              currentPath == "testimonial" && `text-blue-600 bg-gray-300`
            }  py-5 cursor-pointer text-lg font-semibold hover:text-white hover:bg-gray-700 rounded-lg flex items-center justify-start px-10`}
          >
            <StyleIcon />
            <h4 className="ml-3"> Testimonials</h4>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
