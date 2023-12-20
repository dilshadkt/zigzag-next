import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  mainHead: String;
  desc: String;
  image: string;
  id: String;
}

const BlogCard = ({ mainHead, desc, image, id }: Props) => {
  return (
    <div className="border p-2 w-fit rounded-xl flex-1 mx-2 cursor-pointer hover:bg-gray-100">
      <Link href={`blogs/${id}`}>
        <div className="w-full h-[250px] overflow-hidden">
          <Image
            src={image}
            alt={image.split("/")[image.split("/").length - 1]}
            width={250}
            height={250}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="my-[5%]">
          <h3 className="text-lg text-primary font-medium text-center">
            {mainHead}
          </h3>
        </div>
        <div className="px-3">
          <p className="text-justify text-[17px]">{`${desc.slice(
            0,
            150
          )} ...`}</p>
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
