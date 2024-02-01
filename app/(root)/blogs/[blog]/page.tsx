import Image from "next/image";
import React from "react";
import LatesBlog from "./LatesBlog";
import { Metadata } from "next";
import parse from "html-react-parser";

interface Props {
  params: { blog: string };
}
interface Blog {
  _id: string;
  photos: string;
  test: string;
  metaTitle: string;
  metaDescription: string;
}

const BlogPage = async ({ params: { blog } }: Props) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?blogId=${blog}`
  );
  const Blog: Blog = await res.json();

  return (
    <>
      <div className="bg-white px-[14%]  md:px-4  py-[4%]">
        <div className="w-full h-[300px] md:h-[240px] sm:h-[200px] overflow-hidden flex rounded-xl">
          <Image
            src={Blog.photos}
            alt={Blog.photos.split("/")[Blog.photos.split("/").length - 1]}
            width={600}
            height={400}
            className="w-full object-cover "
            quality={100}
          />
        </div>
        <div className="my-3 ">{parse(Blog.test)}</div>

        <LatesBlog />
      </div>
    </>
  );
};

export default BlogPage;
export async function generateMetadata({
  params: { blog },
}: Props): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?blogId=${blog}`,
    {
      next: { revalidate: 2 },
    }
  );
  const blogs: Blog = await res.json();

  return {
    title: blogs.metaTitle,
    description: blogs.metaDescription,
  };
}
