import Image from "next/image";
import React from "react";
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

  const data = [
    {
      heading: "We Serve You The Best Digital 10 Marketing Agency In Kerala",
      content:
        "are you tired of looking best digital marketing agency in Kerala, don’t worry we will be with you. We are sharing here the best 10 digital marketing agencies in Kerala",
      list: [
        {
          subhead: "list of best 10 digital marketing agencies in Kerala",
          content: [
            "Zig zag Digital digital solution",
            "Haris&co.",
            "Viral mafia",
            "web dura technology",
            "OREXIS Digital Marketing Company",
          ],
        },
        {
          subhead: "why use digital marketing in the present time",
          content: [
            "In today’s world, digital marketing is like a superpower for businesses. Imagine the internet as a big playground where lots of people hang out. Digital marketing helps businesses join the fun and talk directly to these people. It’s like having a magic wand to find the exact people who would love what you offer. And guess what? You can see how well your magic is working by checking numbers that tell you what’s happening.",
          ],
        },
      ],
    },
  ];
  return (
    <div className=" px-[14%] py-[4%]">
      <div className="w-full h-[300px] overflow-hidden flex rounded-xl">
        <Image
          src={Blog.photos}
          alt={Blog.photos.split("/")[Blog.photos.split("/").length - 1]}
          width={200}
          height={200}
          className="w-full object-cover "
        />
      </div>
      <div className="flex justify-center my-[2%]">
        <h1 className="text-3xl text-red-500 font-bold">{Blog.mainHead}</h1>
      </div>
      <div className="text-xl">
        <div>
          <p>{Blog.description}</p>
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
              <>
                <li key={`${index}-nested${item.name}`} className="my-2">
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
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    )}
                    {item?.nestedArray.map((items, index) => (
                      <ul key={`${index}-${items}`}>
                        <li className="my-2">{items?.subhead}</li>

                        <li>{items?.desc}</li>
                      </ul>
                    ))}
                  </ul>
                ))}
              </>
            ))}
          </ul>
        </div>
        {Blog?.conclustion && (
          <div>
            <h4 className="text-lg font-semibold my-4 text-red-500">
              conclusion :{" "}
            </h4>
            <div className="my-1">{Blog?.conclustion}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
