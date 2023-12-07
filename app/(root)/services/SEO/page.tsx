import Image from "next/image";
import React from "react";
import seo6 from "@/public/services/seo/Comprehensive Website Audit.jpg";
import seo1 from "@/public/services/seo/High-Quality Content Creation.jpg";
import seo2 from "@/public/services/seo/Keyword Research and Strategy.jpeg";
import seo3 from "@/public/services/seo/Link Building.jpg";
import seo4 from "@/public/services/seo/On-Page Optimization.jpg";
import seo5 from "@/public/services/seo/Performance Tracking and Analytics.jpg";
import seo from "@/public/services/seo/seo.jpg";
import ServiceBox from "@/app/(root)/components/ServiceBox";
import RecentWork from "@/app/(root)/components/RecentWork";

const page = () => {
  const benifits = [
    "SEO is your gateway to being found on search engine result pages like Google",
    "It is the strategic placement of websites through an effective SEO plan",
    "As SEO experts in Malappuram with years of experience in the field",
    "SEO It is the most common way we search for a particular product, service, or solution",
  ];

  const data = [
    {
      title: "1. Comprehensive Website Audit",
      id: 1,
      img: seo1,
      desc: "Our first step to an effective SEO strategy is a comprehensive website audit. Understanding various metrics determining the website's health is crucial to starting the SEO process. Our SEO experts conduct an in-depth technical website audit and ensure the website is ready for SEO. While Ads might give you exposure and leads for the short term, SEO is your go-to strategy if you aim for long-term gain.",
    },
    {
      title: "2. Keyword Research and Strategy ",
      id: 2,
      img: seo2,
      desc: "Keywords are the foundation of a successful SEO campaign. We dive into a deep understanding of your target audience, do keyword research, and understand their intent. Our team develops a keyword strategy that ensures your website ranks for relevant terms, driving qualified traffic to your site.",
    },
    {
      title: "3. On-Page Optimization",
      id: 3,
      img: seo3,
      desc: "Every element of your website sends a message to the search engines about whether or not you provide the relevant information the person is looking for.   From meta tags, meta titles, URLs, and content structure, we optimize each page to ensure it's search engine-friendly. Our approach balances user experience with technical excellence.",
    },
    {
      title: "4. High-Quality Content Creation    ",
      id: 4,
      img: seo4,
      desc: "Content plays a crucial role in every aspect of digital marketing, and SEO is no different.  We create SEO-friendly content that is informative, engaging, and converting based on the brand's requirements.    The content is the backbone of the SEO strategy, as it is also how you earn trust and authority for the website.",
    },
    {
      title: "5. Link Building    ",
      id: 5,
      img: seo5,
      desc: "All of the above might only do it for you if you have effective link-building in place.   Earning credible backlinks marks the success of an SEO process. We implement a unique link-building plan to secure backlinks from reputable websites.    Backlinks from relevant websites increase website authority and favor your position in search results",
    },
    {
      title: "6. Performance Tracking and Analytics    ",
      id: 6,
      img: seo6,
      desc: "We continuously monitor the performance of your website by tracking key metrics such as keyword positions, organic traffic, and conversion rates.  Data-driven insights are the guide we use for growing the SEO process for your website.    Join us today, and let’s take your brand to the top of Google with SEO excellence.   ",
    },
  ];

  return (
    <>
      <div className="mx-[13%] mt-9  sm:mx-5 ">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={seo}
              alt="SEO Services in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            SEO Services in Malappuram
          </h1>
          <div className="text-2xl sm:text-[20px]">
            <p className="text-justify leading-[35px] ">
              As a prominent digital marketing company rooted in Malappuram, we
              specialize in providing{" "}
              <b className="text-red-500">
                search engine optimization services
              </b>{" "}
              to position your brand at the forefront of Google search results.
              As more companies turn digital, this is the best way to drive
              organic traffic and generate high-quality leads without spending
              huge amounts on advertisements. Our SEO approach is a step-by-step
              process that continues to improve your position on Google till you
              rank No.1 on Google!
            </p>
          </div>
          <h4 className="font-semibold text-xl my-5 sm:mt-[10%]">
            Why Social Media Marketing?
          </h4>
          <div className="my-3 sm:my-2">
            <ServiceBox data={benifits} />
          </div>
          <h4 className="font-semibold text-xl my-5 sm:my-[10%]">
            Our Social Media Marketing Approach
          </h4>
          <div>
            {data.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className={`flex ${
                  item.id % 2 === 0 && `flex-row-reverse`
                } mb-[4%] border p-4 rounded-3xl  sm:flex-col`}
              >
                <div className="flex-initial sm:w-full sm:mb-5 w-[30%] max-h-[250px]  bg-green-400 rounded-3xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title.split(".")[1]}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="flex-1 flex items-center  mx-5 sm:mx-0 ">
                  <div>
                    <h3 className="font-semibold text-primary text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xl sm:text-lg leading-[30px] text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RecentWork />
    </>
  );
};

export default page;
