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
  const offer = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/offer`);
  const offers: { offers: Offer[] } = await offer.json();
  return (
    <div className="relative">
      <div className="bg-white px-[14%]  md:px-6  py-[4%]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full h-[300px] md:h-[240px] sm:h-[200px] overflow-hidden flex rounded-xl">
            <Image
              src={Blog.photos}
              alt={Blog.photos.split("/")[Blog.photos.split("/").length - 1]}
              width={1200}
              height={400}
              className="w-full object-cover "
              quality={100}
            />
          </div>
          <div className="flex gap-5 ">
            <div
              className={` flex-initial w-[23%]   grid grid-cols-1 items-start   ${
                offers.offers.length === 0 ? `hidden` : `block`
              } `}
            >
              <div className="sticky top-[80px]">
                {offers.offers.map((offer) => (
                  <div
                    key={offer._id}
                    className="flex items-center justify-center  "
                  >
                    <Image
                      src={offers.offers[0].image}
                      alt="offer banner"
                      width={250}
                      height={400}
                      className="w-full h-full max-w-[350px] object-contain"
                    />
                    <div
                      className="absolute top-3 right-3 flex items-center justify-center w-8 aspect-square 
          rounded-full "
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-3 flex-1">{parse(Blog.test)}</div>
          </div>
        </div>

        <LatesBlog />
      </div>
    </div>
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
    alternates: {
      canonical: `https://www.zigzagdigitalsolutions.com/blogs/${blog}`,
    },
  };
}
