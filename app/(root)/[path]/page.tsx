import parse from "html-react-parser";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";
import LatesBlog from "../blogs/[blog]/LatesBlog";
import { Metadata } from "next";
import { nanoid } from "nanoid";
import { notFound } from "next/navigation";

interface Props {
  params: { path: string };
}
interface Blog {
  page: any;
  image: string;
  path: string;
  ogDescription: string;
  ogTitle: string;
  metaKeyWord: string;
  metaDescription: string;
  metaTitle: string;

  _id: string;
}

const page = async ({ params: { path } }: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/${path}`);
  if (res.status === 404) {
    return notFound();
  }
  const Blog: Blog = await res.json();
  return (
    <>
      <div className="bg-white overflow-hidden px-[10%] flex  md:px-4  pb-[4%]">
        <div className="flex-initial md:hidden lg:flex bg-red-300"></div>
        <div className="flex-1 bg-white   my-4  overflow-scroll">
          {Blog.page?.map((item: any) => (
            <div key={nanoid()} className="mb-4">
              <div className="bg-blue-200 h-[80px] text-blue-950 font-bold text-xl flex items-center justify-start px-5">
                <SchoolIcon /> <span className="mx-2">{item?.heading}?</span>
              </div>
              {item?.image && (
                <div className="h-[250px] w-full overflow-hidden flex-center my-3">
                  <Image
                    src={item.image}
                    alt={item?.heading}
                    width={400}
                    height={250}
                    className=" object-contain w-full h-full"
                  />
                </div>
              )}
              <p className="px-2 text-justify">{parse(item?.description)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[10%] mb-[100px]">
        <LatesBlog />
      </div>
    </>
  );
};

export default page;

export async function generateMetadata({
  params: { path },
}: Props): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/${path}`, {
    next: { revalidate: 2 },
  });
  if (res.status === 404) {
    return {
      title: "page not found",
    };
  }
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
