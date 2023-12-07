import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Works } from "@/public/worls/Works";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-end my-[2%]">
          <Link href={"/admin/works/addwork"}>
            <div
              className="cursor-pointer hover:text-red-400"
              title="add image"
            >
              <AddIcon />
            </div>
          </Link>
        </div>
        <div className="p-5 border rounded-lg flex flex-wrap">
          {Works.map((item) => (
            <div className="flex-1 min-w-[20%] m-2  cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt=""
                className="hover:scale-105 transition-all duration-700 w-full h-full "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
