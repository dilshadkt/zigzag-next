"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        fontSize: "20px",
        transform: "scale(1.5)",
        background: "black",
        color: "black",
        top: "40%",
        right: "-10%",
        opacity: "30%",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        fontSize: "20px",
        transform: "scale(1.5)",
        background: "black",
        color: "black",
        top: "40%",
        left: "-10%",
        opacity: "30%",
      }}
      onClick={onClick}
    />
  );
}
const Testimonial = ({ data }) => {
  const settings = {
    autoplay: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white  pb-5 pt-10 md:pt-0 md:pb-24 overflow-hidden  ">
      <div className="max-w-screen-xl mx-auto ">
        <div className="text-center lg:mb-10 md:mt-0 mb-4 ">
          <h4 className="md:text-3xl text-2xl  text-secondary font-medium">
            Testimonial
          </h4>
        </div>
        <div className=" mb-0 mx-[5px] md:mx-5  ">
          <Slider {...settings}>
            {data.map((item) => (
              <div
                key={item._id}
                className={` cursor-pointer mt-[25%] md:mt-[10%]    relative  mx-2  mb-[40%]`}
              >
                <div
                  style={{ background: `${item.color}` }}
                  className="rounded-xl flex flex-col shadow-xl justify-between min-h-[280px] p-5 border  mx-1"
                >
                  <div>
                    <div className="text-end ">
                      <h4 className="text-lg font-semibold">{item?.name}</h4>
                    </div>
                    <div className="mt-6 font-medium text-justify">
                      {item?.description}
                    </div>
                  </div>

                  <div className="avatar absolute -top-[7%]">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image
                        src={item?.photos}
                        alt="testimonial logo"
                        width={200}
                        height={200}
                        quality={50}
                      />
                    </div>
                  </div>

                  <div className=" flex flex-col my-2 items-end justify-end">
                    <h3 className="text-lg font-semibold">
                      {item?.designation}
                    </h3>
                    <h4 className="font-medium text-gray-600">{item?.role}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
