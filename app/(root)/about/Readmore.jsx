"use client";
import React, { useState } from "react";

const Readmore = () => {
  const [readmore, setReadmore] = useState(false);
  return (
    <>
      {readmore ? (
        <>
          <div className="my-[2%]">
            <p>
              With the challenges we faced, the opportunities we seized and the
              lessons we learned, our determination was stronger than ever to
              build a digital marketing agency in Malappuram that provided
              global services to brands.
            </p>
          </div>
          <div>
            <p>
              Our journey is a testament to what determination and unwavering
              commitment can lead us. Client Centric and Result-Oriented
              approach with Innovative and creative thinking helped us surpass
              the expectations of our esteemed clients each time. Rather than a
              digital marketing agency, we strive to be your business growth
              partner that helps you every step of the way with creative
              solutions and strategic brilliance till you achieve your goals.
            </p>
          </div>
          <div>
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => setReadmore(!readmore)}
            >
              read less{" "}
            </span>
          </div>
        </>
      ) : (
        <span
          className="text-red-500 cursor-pointer"
          onClick={() => setReadmore(!readmore)}
        >
          read more . . .{" "}
        </span>
      )}
    </>
  );
};

export default Readmore;
