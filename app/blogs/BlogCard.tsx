import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="border p-2 w-fit rounded-xl flex-1 mx-2 cursor-pointer hover:bg-gray-100">
      <Link href={"blogs/dilshhad"}>
        <div>
          <Image
            src="https://a0.muscache.com/im/pictures/miso/Hosting-888269360780625633/original/521ab928-cb08-42d3-8948-fafaf96c7317.jpeg?im_w=720"
            alt=""
            width={250}
            height={250}
            className="w-full rounded-xl"
          />
        </div>
        <div className="my-[5%]">
          <h3 className="text-lg text-primary font-medium text-center">
            we serve you the best 10 digital marketing agency in Kerala
          </h3>
        </div>
        <div className="px-3">
          <p className="text-justify text-[17px]">
            we serve you the best 10 digital marketing agency in Kerala No
            Comments are you tired of looking best digital marketing agency in
            Kerala, don’t worry we will be with you. We are ...
          </p>
        </div>
        <div className="flex justify-center my-[5%]">
          <button className="text-red-500  hover:font-semibold">
            Read More
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
