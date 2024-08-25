import Image from "next/image";
import React from "react";

const GalleryDetails = () => {
  return (
    <section className="min-h-[50vh] bg-white max-w-screen-xl mx-auto py-16 mb-32 px-5 flex flex-col items-center">
      <h2 className="md:text-3xl text-2xl text-secondary font-medium">
        Star Of the Month
      </h2>
      <p className="text-gray-600 text-center mt-3 text-sm md:text-lg font-medium">
        Experience the Power of Digital Marketing through our Success Stories
      </p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-y-5 md:gap-5 w-full max-w-screen-lg mx-auto mt-16 my-10">
        <div className="flex items-center md:col-span-4 justify-center h-[400px]  rounded-md">
          <Image
            src={"/gallery/Rectangle 1.png"}
            alt="gallery"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center md:col-span-2 justify-center h-fit md:h-[400px] overflow-hidden  rounded-md">
          <div className="w-full h-full grid grid-cols-1  gap-4">
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              {" "}
              <Image
                src={"/gallery/Rectangle 8.png"}
                alt="gallery"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              {" "}
              <Image
                src={"/gallery/Rectangle 9.png"}
                alt="gallery"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center md:col-span-2 justify-center h-fit md:h-[400px] overflow-hidden  rounded-md">
          <div className="w-full h-full grid grid-cols-1  gap-4">
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              {" "}
              <Image
                src={"/gallery/Rectangle 8.png"}
                alt="gallery"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              {" "}
              <Image
                src={"/gallery/Rectangle 9.png"}
                alt="gallery"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center md:col-span-4 justify-center h-[400px]  rounded-md">
          <Image
            src={"/gallery/Rectangle 10.png"}
            alt="gallery"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryDetails;
