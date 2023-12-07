"use client";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Link from "next/link";
const page = () => {
  const [image, setImage] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-start my-[2%]">
        <Link href={"/admin/works"}>
          <div className="cursor-pointer hover:text-red-500">
            <ArrowBackIcon />
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="p-5 border  rounded-lg flex flex-col items-center flex-wrap">
          <div className="w-[500px] h-[200px] flex items-center justify-center">
            <label className="  text-black  opacity-30 cursor-pointer flex items-center justify-center p-1 rounded-full ">
              <input
                type="file"
                className="hidden"
                name="photos"
                onChange={(e) => setImage(e.target.files)}
              />
              <AddAPhotoIcon className="text-[100px]" />
            </label>
          </div>
          <div className="w-full flex justify-center">
            <form>
              <select className="border p-3 rounded-lg w-[250px]">
                <option
                  value="Brand Identity
"
                >
                  Brand Identity
                </option>
                <option
                  value="Social Media
"
                >
                  Social Media
                </option>
              </select>
              <br />
              <label className="mr-3">stared:</label>
              <input type="radio" name="stared" id="" className="my-7 mr-2" />
              yes
              <input type="radio" name="stared" id="" className="my-7 mx-2" />
              No
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
