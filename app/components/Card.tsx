import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
}

const Card = ({ img }: Props) => {
  return (
    <div className="w-[32.5%] rounded-xl bg-gray-400 overflow-hidden mb-3">
      <Image
        src={img}
        alt="image"
        className="object-cover    w-full h-full hover:scale-105 transition-all duration-700"
      />
    </div>
  );
};

export default Card;
