import React from "react";
import Image from "next/image";
import Coperate from "@/public/services/Coperate-Digital-Marketing-Malappuram.gif";
import Media from "@/public/services/Media-Production-Digital-Marketing-Malappuram.gif";
import Performance from "@/public/services/Performance-Marketing-Digital-Marketing-Malappuram.gif";
import Website from "@/public/services/Website-Development-Digital-Marketing-Malappuram.gif";
import Seo from "@/public/services/seo-Digital-Marketing-Malappuram.gif";
import Social from "@/public/services/Social-media-marketing-Digital-Marketing-Malappuram.gif";
import bg from "@/public/services/services.png";
import Link from "next/link";
const Services = () => {
  const data = [
    {
      image: Coperate,
      title: "Corporate Branding",
      items: [
        "Market Research",
        "Strategy Development",
        "Design and Collateral Creation",
        "Implementation",
        "Visual Identity",
      ],
    },
    {
      image: Media,
      title: "Social media marketing",
      items: [
        "Strategy Development",
        "Design Creation",
        "Content Scheduling & Publishing",
        "Community Engagement",
        "Analytics",
      ],
    },
    {
      image: Seo,
      title: "SEO",
      items: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Link Building",
        "Analytics and Reporting",
      ],
    },
    {
      image: Website,
      title: "Website Development",
      items: [
        "Discovery and Planning",
        "Design and Mockup",
        "Development",
        "Testing and Quality Assurance",
        "Launch and Deployment",
      ],
    },
    {
      image: Performance,
      title: "Performance Marketing",
      items: [
        "Goal Setting",
        "Audience and Channel Research",
        "Campaign Creation",
        "Launch and Monitoring",
        "Data Analysis and Optimization",
      ],
    },
    {
      image: Social,
      title: "Media Production",
      items: [
        "Concept Development",
        "Pre-Production Planning",
        "Production Phase",
        "Post-Production Editing",
        "Review and Feedback",
      ],
    },
  ];
  return (
    <div className="bg-white px-[12%] py-[4%] relative overflow-hidden z-0 sm:px-5">
      <div className="text-center">
        <h2 className="text-3xl sm:text-2xl text-secondary font-medium">
          Services
        </h2>
      </div>
      <div className="flex  flex-wrap py-[6%]">
        {data.map((item, index) => (
          <div
            key={`${index}-${item.title}`}
            className="flex-1 sm:min-w-[200px]  min-w-[30%] flex flex-col  items-center my-7"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={60}
              className="opacity-60"
            />
            <h3 className="font-semibold my-5 text-lg">{item.title}</h3>
            <ul className="list-[circle] w-[40%] ">
              {item.items.map((item, index) => (
                <li
                  key={`${index} - ${item}`}
                  className="my-2 font-medium text-gray-700 text-[17px]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-center mt-3 ">
              <Link href={`services/${item.title.split(" ")[0]}`}>
                <span className="text-red-500 cursor-pointer hover:underline">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -top-[20%] right-0 w-full  -z-[2] left-2/4 opacity-50">
        <Image src={bg} alt="background" className="w-full" />
      </div>
    </div>
  );
};

export default Services;
