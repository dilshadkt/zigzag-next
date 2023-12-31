import Image from "next/image";
import React, { Fragment } from "react";
import LatesBlog from "./LatesBlog";
import { Metadata } from "next";

interface Props {
  params: { blog: string };
}
interface Blog {
  _id: string;
  mainHead: String;
  description: String;
  photos: string;
  test: Array<TestItem>;
  conclustion: string;
  metaTitle: string;
  metaDescription: string;
}
interface TestItem {
  name: string;
  nestedArray: Array<NesteItem>;
  image: string;
}
interface NesteItem {
  subhead: string;
  desc: string;
}
const page = async ({ params: { blog } }: Props) => {
  const res = await fetch(`http://localhost:8080/blogs?blogId=${blog}`);
  const Blog: Blog = await res.json();

  return (
    <>
      <div className=" px-[14%]  md:px-6  py-[4%]">
        <div className="w-full h-[300px] overflow-hidden flex rounded-xl">
          <Image
            src={Blog.photos}
            alt={Blog.photos.split("/")[Blog.photos.split("/").length - 1]}
            width={200}
            height={200}
            className="w-full object-cover "
            quality={100}
          />
        </div>
        <div className="flex justify-center my-[2%]">
          <h1 className="text-3xl text-red-500 font-bold">{Blog.mainHead}</h1>
        </div>
        <div className="text-xl">
          <div>
            <p className="text-justify">{Blog.description}</p>
          </div>
          <div className="my-[2%]  leading-8">
            <ul className="list-[number] pl-5 text-red-500 font-medium">
              {Blog.test.map((item, index) => (
                <li key={`${index}-${item.name}`} className="my-2">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="list-[number]">
              {Blog.test.map((item, index) => (
                <Fragment key={`${index}-nested${item.name}`}>
                  <li className="my-2 md:mx-4 font-semibold mt-5">
                    {item.name}
                  </li>
                  {item?.nestedArray?.map((items, index) => (
                    <ul key={`${index}-${items.subhead}`}>
                      <li>{items.subhead}</li>
                      {item?.image && (
                        <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden rounded-xl p-2 border">
                          <Image
                            src={item?.image}
                            alt="sybone"
                            width={100}
                            height={100}
                            quality={90}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      )}
                      {item?.nestedArray.map((items, index) => (
                        <ul key={`${index}-${items}`}>
                          <li className="my-2">{items?.subhead}</li>

                          <li>
                            <p className="text-justify"> {items?.desc}</p>
                          </li>
                        </ul>
                      ))}
                    </ul>
                  ))}
                </Fragment>
              ))}
            </ul>
          </div>
          {Blog?.conclustion && (
            <div>
              <h4 className="text-lg font-semibold my-4 text-red-500">
                conclusion :{" "}
              </h4>
              <div className="my-1">
                <p className="text-justify">{Blog?.conclustion}</p>
              </div>
            </div>
          )}
        </div>
        <LatesBlog />
      </div>
    </>
  );
};

export default page;
export async function generateMetadata({
  params: { blog },
}: Props): Promise<Metadata> {
  const res = await fetch(`http://localhost:8080/blogs?blogId=${blog}`, {
    next: { revalidate: 2 },
  });
  const blogs: Blog = await res.json();

  return {
    title: blogs.metaTitle,
    description: blogs.metaDescription,
  };
}
