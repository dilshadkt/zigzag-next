import React from "react";
import BlogCard from "./BlogCard";
interface Blog {
  _id: String;
  heading: String;
  description: String;
  photos: string;
}

const Blogs = async () => {
  const res = await fetch("https://zigzag.onrender.com/blogs", {
    next: { revalidate: 0 },
  });
  const blogs: Blog[] = await res.json();

  return (
    <div className=" px-[12%] py-[4%] sm:px-5">
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
  );
};

export default Blogs;
