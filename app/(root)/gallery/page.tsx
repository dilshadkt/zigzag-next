import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <section className="min-h-[50vh] bg-white max-w-screen-xl mx-auto py-16 mb-6 px-5 flex flex-col items-center">
      <h2 className="md:text-3xl text-2xl text-secondary font-medium">
        Our Gallery
      </h2>
      <p className="text-gray-600 text-center mt-3 text-lg font-medium">
        Experience the Power of Digital Marketing through our Success Stories{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-screen-lg mx-auto mt-16 my-10">
        <Link href={"/gallery/star-of-month"}>
          <div className="flex items-center justify-center h-[400px]  rounded-md">
            <Image
              src={"/gallery/Rectangle 1.png"}
              alt="gallery"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="flex items-center justify-center h-[400px]  rounded-md">
          <Image
            src={"/gallery/Rectangle 2.png"}
            alt="gallery"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center h-[400px]  rounded-md">
          <Image
            src={"/gallery/Rectangle 4.png"}
            alt="gallery"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className=" w-full max-w-screen-lg mx-auto mt-10 mb-28  p-10 rounded-xl bg-[#DB002F] 
      flex flex-col md:flex-row items-center justify-between "
      >
        <div className="flex flex-col flex-1">
          <h4 className="text-xl text-white font-semibold">JOIN OUT TEAM</h4>
          <p className="mt-3 text-white/80 text-center md:text-left md:w-[80%]">
            At ZigZag Digital Solutions, we take pride in our work and love to
            showcase our achievements. Browse through our gallery to see how
            we&apos;ve transformed businesses and helped them thrive in the
            digital landscape.
          </p>
        </div>
        <div className="flex-initial w-fit mt-3 md:mt-0">
          <Link href={"/career"}>
            <button className="bg-white py-3 px-4 rounded-xl text-[#DB002F] text-sm font-medium">
              CURRENT OPENINGS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
