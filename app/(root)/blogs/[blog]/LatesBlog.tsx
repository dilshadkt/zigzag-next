import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Blog {
  heading: string;
  photos: string;
  _id: string;
}
const LatesBlog = async () => {
  const res = await fetch("http://localhost:8080/blogs/latest");
  const blog: Blog[] = await res.json();
  return (
    <div className="mt-5 pb-[10%]">
      <div>
        <h2 className="text-primary text-lg font-semibold py-4">
          Latest Articles
        </h2>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2  ">
        {blog.map((item, index) => (
          <div
            key={`${index}-${item._id}`}
            className=" flex flex-col bg-box  m-2 rounded-xl overflow-hidden hover:shadow-lg pb-3 transition-all  duration-700 cursor-pointer"
          >
            <Link href={`/blogs/${item._id}`}>
              <div className="w-full flex-initial h-[150px] overflow-hidden ">
                <Image
                  src={item.photos}
                  width={300}
                  height={300}
                  alt={
                    item.photos.split("/")[item.photos.split("/").length - 1]
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center flex-1 w-full p-3 ">
                <h3 className="text-center text-secondary">{item.heading}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatesBlog;
