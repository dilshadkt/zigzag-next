import React from "react";
import BlogCard from "./BlogCard";

const page = () => {
  return (
    <div className=" px-[12%] py-[4%]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-2xl text-secondary font-medium">
          Blogs
        </h2>
      </div>
      <div className="flex justify-center my-[2%]">
        <h4 className="text-xl font-semibold">
          Gain Digital Marketing Industry Insights and Trending Tips
        </h4>
      </div>
      <div className="flex flex-wrap">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default page;
