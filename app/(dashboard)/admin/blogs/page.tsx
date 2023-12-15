import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" my-[2%]">
      <div className="flex items-center justify-end my-[2%]">
        <Link href={"/admin/blogs/add-blog"}>
          <div className="cursor-pointer hover:text-red-400" title="add image">
            <AddIcon />
          </div>
        </Link>
      </div>
      <div className="p-5 border w-full rounded-xl ">
        <div className="grid grid-cols-3">
          <div className="border p-3 cursor-pointer hover:bg-gray-200 rounded-xl m-2">
            <div className="w-full border h-[180px] rounded-xl overflow-hidden">
              {/* <Image src={} width={200} height={200} className="w-full h-full object-cover"/> */}
            </div>
            <div>
              <h3 className="text-center text-primary font-medium">
                We Serve You The Best Digital 10 Marketing Agency In Kerala
              </h3>
            </div>
            <div className="my-[3%]">
              <p className="text-justify">
                are you tired of looking best digital marketing agency in
                Kerala, don’t worry we will be with you. We are sharing here the
                best 10 digital marketing agencies in Kerala
              </p>
            </div>
            <div className="flex justify-center my-3">
              <span className="underline text-red-500">Readmore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
