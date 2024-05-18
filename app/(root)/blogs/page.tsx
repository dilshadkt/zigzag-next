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

const Blogs = async () => {
  const allBlogData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
      next: { revalidate: 10 },
    });
    const blogs = await response.json();
    return blogs;
  };
  const blogs: Blog[] = await allBlogData();

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-16  sm:px-5">
        <div className="text-center">
          <h2 className="text-3xl sm:text-2xl text-secondary font-medium">
            Blogs
          </h2>
        </div>
        <div className="flex justify-center my-[2%] ">
          <h4 className="text-xl font-semibold px-3">
            Gain Digital Marketing Industry Insights and Trending Tips
          </h4>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1">
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
    canonical: "https://www.zigzagdigitalsolutions.com/blogs",
  },
};
