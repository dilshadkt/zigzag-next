import Image from "next/image";
import React from "react";
import LatesBlog from "../../[blog]/LatesBlog";
import { Metadata } from "next";
import parse from "html-react-parser";

interface Props {
  params: { path: string };
}
interface Blog {
  _id: string;
  photos: string;
  test: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyWord: string;
  ogTitle: string;
  ogDescription: string;
  path: string;
}

const page = async ({ params: { path } }: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/${path}`);
  const Blog: Blog = await res.json();

  return (
    <div className="bg-white px-[14%]  md:px-4  py-[4%]">
      <div className="w-full h-[300px] md:h-[240px] sm:h-[200px] overflow-hidden flex rounded-xl">
        <Image
          src={Blog?.photos}
          alt={decodeURIComponent(
            Blog?.photos
              .split("/")
              [Blog?.photos.split("/").length - 1].slice(0, -4)
          )}
          width={600}
          height={400}
          className="w-full object-cover "
          quality={100}
        />
      </div>
      <div className="my-3 ">{parse(Blog.test)}</div>

      <LatesBlog />
    </div>
  );
};

export default page;

export async function generateMetadata({
  params: { path },
}: Props): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/${path}`, {
    next: { revalidate: 2 },
  });
  const blogs: Blog = await res.json();

  return {
    title: blogs.metaTitle,
    description: blogs.metaDescription,
    openGraph: {
      title: blogs.ogTitle,
      description: blogs.ogDescription,
    },
    keywords: blogs.metaKeyWord,
    alternates: {
      canonical: `https://www.zigzagdigitalsolutions.com/blogs/latest/${path}`,
    },
  };
}
