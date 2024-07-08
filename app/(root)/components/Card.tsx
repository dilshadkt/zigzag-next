import React from "react";
import Image from "next/image";

interface Props {
  img: string;
}

const Card = ({ img }: Props) => {
  return (
    <div className="mx-1 sm:h-[260px] lg:h-fit max-h-[340px] h-fit md:h-[340px]  rounded-xl bg-gray-200 overflow-hidden mb-3">
      <Image
        src={img}
        alt={img.split("/")[img.split("/").length - 1]}
        width={400}
        height={400}
        loading="eager"
        className="md:object-cover object-fill  w-full h-full hover:scale-105 transition-all duration-700"
      />
    </div>
  );
};

export default Card;
