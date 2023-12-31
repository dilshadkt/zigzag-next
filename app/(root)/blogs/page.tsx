import React from "react";
import BlogCard from "./BlogCard";
interface Blog {
  _id: String;
  mainHead: String;
  description: String;
  photos: string;
}

const page = async () => {
  const res = await fetch("http://localhost:8080/blogs", {
    next: { revalidate: 3 },
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
            key={`${item._id}-${item.mainHead}`}
            id={item._id}
            mainHead={item.mainHead}
            desc={item.description}
            image={item.photos}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
