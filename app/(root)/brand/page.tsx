import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <section className="h-fit bg-white">
      <div className="max-w-screen-2xl h-full overflow-y-auto mx-auto">
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dob1zdjnp/image/upload/v1726060597/amkwhqmq7ensokexe8xl.jpg"
            }
            alt="brand"
            width={1000}
            height={1100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Brand;
