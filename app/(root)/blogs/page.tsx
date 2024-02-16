import React from "react";
import BlogCard from "./BlogCard";
import RecentWork from "../components/RecentWork";
import { Metadata } from "next";
interface Blog {
  _id: String;
  heading: String;
  description: String;
  photos: string;
}
export const allBlogData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
  const blogs = await response.json();
  return blogs;
};
const Blogs = async () => {
  const blogs: Blog[] = await allBlogData();

  return (
    <>
      <div className=" px-[12%] py-[4%] bg-white pb-[10%] sm:px-5">
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
        <div className="grid grid-cols-3 sm:grid-cols-1">
          {blogs.map((item) => (
            <BlogCard
              key={`${item._id}-${item.heading}`}
              id={item._id}
              mainHead={item.heading}
              desc={item.description}
              image={item.photos}
            />
          ))}
        </div>
      </div>
      <RecentWork />
    </>
  );
};

export default Blogs;

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
  },
};
