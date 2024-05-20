import parse from "html-react-parser";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";
import LatesBlog from "../blogs/[blog]/LatesBlog";
import { Metadata } from "next";
import { nanoid } from "nanoid";
import { notFound } from "next/navigation";
import Link from "next/link";

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
  const offer = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/offer`);
  if (res.status === 404) {
    return notFound();
  }
  const offers: { offers: Offer[] } = await offer.json();

  const Blog: Blog = await res.json();
  return (
    <>
      <div className="bg-white overflow-hidden px-[10%] flex  md:px-4  pb-[4%]">
        {offers.offers.length !== 0 && (
          <div className="flex-initial w-[20%] mr-3 mt-3 md:hidden lg:block ">
            {offers?.offers.slice(0, 2).map((offer) => (
              <Link href={offer.link}>
                <div
                  key={offer._id}
                  className="mb-5 bg-blue-400 h-[350px] rounded-md overflow-hidden"
                >
                  <Image
                    src={offer.image}
                    alt="offer banner"
                    width={250}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="flex-1 bg-white   my-4  overflow-scroll max-w-screen-xl mx-auto">
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
