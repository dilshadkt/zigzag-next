import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Blog {
  heading: string;
  photos: string;
  _id: string;
}
const Blogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/latest`);
  const blog: Blog[] = await res.json();
  return (
    <div className="bg-white py-6 sm:px-5 md:px-6">
      <div className="text-center">
        <h4 className="md:text-3xl text-2xl text-secondary font-medium">
          Blogs
        </h4>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-[6%] max-w-screen-xl mx-auto">
        {blog.map((item, index) => (
          <div
            key={`${index}-${item._id}`}
            className=" flex flex-col shadow-xl border-[1px] border-gray-300 hover:bg-box  m-2 rounded-xl overflow-hidden hover:shadow-lg pb-3 transition-all  duration-700 cursor-pointer"
          >
            <Link href={`/blogs/${item._id}`}>
              <div className="w-full flex-initial h-[200px] overflow-hidden ">
                <Image
                  src={item.photos}
                  width={400}
                  height={400}
                  loading="eager"
                  alt={
                    item.photos.split("/")[item.photos.split("/").length - 1]
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center flex-1 w-full p-3 ">
                <h3 className="text-center text-secondary font-medium">
                  {item.heading}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href={"/blogs"}>
          <h4 className="text-red-500 font-medium hover:underline cursor-pointer">
            Explore more
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
