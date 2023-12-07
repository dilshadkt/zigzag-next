import Image from "next/image";
import React from "react";
interface Props {
  params: { blog: string };
}
const page = ({ params: { blog } }: Props) => {
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
          src="https://a0.muscache.com/im/pictures/miso/Hosting-888269360780625633/original/521ab928-cb08-42d3-8948-fafaf96c7317.jpeg?im_w=720"
          alt=" "
          width={200}
          height={200}
          className="w-full object-cover "
        />
      </div>
      <div className="flex justify-center my-[2%]">
        <h1 className="text-3xl text-red-500 font-bold">{data[0].heading}</h1>
      </div>
      <div className="text-xl">
        <div>
          <p>{data[0].content}</p>
        </div>
        <div className="my-[2%]  leading-8">
          <ul className="list-[number] pl-5 text-red-500 font-medium">
            {data[0].list.map((item, index) => (
              <li key={index} className="my-2">
                {item.subhead}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="list-[number]">
            {data[0].list.map((item, index) => (
              <>
                <li key={index} className="my-2">
                  {item.subhead}
                </li>
                {item.content.map((items, index) => (
                  <ul key={index}>
                    <li>{items}</li>
                  </ul>
                ))}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
