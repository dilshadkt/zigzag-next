import Image from "next/image";
import React from "react";
import Corperate from "@/public/services/corperate/Corporate Branding.jpg";
import Corperate1 from "@/public/services/corperate/Brand Consistency.jpg";
import Corperate2 from "@/public/services/corperate/Brand Guidelines.png";
import Corperate3 from "@/public/services/corperate/Brand Strategy.jpg";
import Corperate4 from "@/public/services/corperate/Corporate Branding.jpg";
import Corperate5 from "@/public/services/corperate/Online Presence.jpg";
import Corperate6 from "@/public/services/corperate/Brand Messaging.jpg";
import ServiceBox from "@/app/(root)/components/ServiceBox";
import RecentWork from "@/app/(root)/components/RecentWork";

const page = () => {
  const benifits = [
    " A reflection of your company’s mission, vision, and values.",
    "An identity that influences the audience’s perception of the brand.",
    "To help your company stand out among the competitors.",
    "To build trust and credibility among your customers.",
  ];

  const data = [
    {
      title: "1. Brand Strategy   ",
      img: Corperate1,
      id: 1,
      desc: "A compelling brand strategy is the backbone of corporate branding. The  very first step of corporate branding is market research for us.  Understanding the market gives us many insights into the product   demand, KPIs, target audience, and paint points. The whole idea of  corporate branding is to leave a lasting positive impression in the market. Our key differences are important in crashing through the  competition and reaching the right customers. We understand the what,  how, and where to develop a strong brand strategy for your business. ",
    },
    {
      title: "2. Visual Identity    ",
      img: Corperate2,
      id: 2,
      desc: "What determines the worth of your brand is how the audience perceives  it. The simple and most underrated things give the uniqueness your brand deserves. Therefore, we do not look small at the brand's visual   identity. The logos, the colour palettes, the typography, and all the   other visual elements have their role in defining the brand’s essence  most aesthetically. The goal is to find a visual identity for your   brand across all digital platforms and collateral that aligns with   what your brand stands for! ",
    },
    {
      title: "3. Brand Messaging  ",
      img: Corperate3,
      id: 3,
      desc: "Words evoke emotions in humans. And when you are a brand, it is   crucial to define a specific tone and message for your brand. A unique   message conveys the brand’s goals to the target audience most simply   and effectively. Your taglines, brand story, and every piece of    content that you publish online should convey the same. Overall, the    brand messaging should resonate with your audience emotionally.",
    },
    {
      title: "4. Online Presence  ",
      img: Corperate4,
      id: 4,
      desc: "A strong online presence is at the core of branding for your business.    As you develop a corporate branding strategy, it becomes easy for you    to understand how to build a strong online presence. Whether your    website or social media profiles, the brand elements should reflect    your values and stand out from the competitors. We ensure your brand's    voice and visuals are seamlessly integrated into your digital assets. ",
    },
    {
      title: "5. Brand Guidelines   ",
      img: Corperate5,
      id: 5,
      desc: " Corporate branding is not just about visual elements. A brand without   guidelines is a bad option if you have long-term goals to increase   your business. In addition to building a recognizable corporate    identity, A brand guideline is a rulebook on how your brand elements    can be implemented across various platforms. This makes your branding    process much easier and more effective. We help you have an entire    brand identity that resonates with your market. It's a smart    investment that pays off by bringing in loyalty, recognition, and a    lasting impact on your target audience.",
    },
    {
      title: "6. Brand Consistency    ",
      img: Corperate6,
      id: 6,
      desc: "Consistency is the key to a successful company branding method. It's not just about having a great logo or a compelling message; it is preserving that consistency across all areas of your business.    We emphasize the importance of retaining a uniform brand presence in every consumer interaction, whether or not it is through advertising and marketing materials, customer support, or product packaging. Consistency breeds trust and helps your audience understand and don't forget your logo effortlessly.    ",
    },
  ];
  return (
    <>
      <div className="mx-[13%] mt-9 sm:mx-5 ">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={Corperate}
              alt="Best Corporate Branding Service in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            Best Corporate Branding Service in Malappuram
          </h1>
          <div className="text-2xl sm:text-[20px]">
            <p className="text-justify leading-[35px] ">
              Welcome to <b className="text-red-500">Zig Zag </b>Digital
              Solutions, your premier digital marketing partner in creating the
              most sought-after corporate brand identity that resonates with
              your vision. A strong corporate identity is more crucial than ever
              today due to the digital revolution. Our expert team based in
              Malappuram specializes in creating distinctive corporate
              identities that leave a lasting impression on your target
              audience, making you stay on top of their mind.
            </p>
          </div>
          <h4 className="font-semibold text-xl my-5 sm:mt-[10%]">
            Why Corporate Branding Matters?
          </h4>
          <div className="my-4 sm:my-2">
            <ServiceBox data={benifits} />
          </div>
          <h4 className="font-semibold text-xl my-5 sm:my-[10%]">
            Our Unique Corporate Branding Approach
          </h4>
          <div>
            {data.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className={`flex ${
                  item.id % 2 === 0 && `flex-row-reverse`
                } mb-[4%] border p-4 rounded-3xl  sm:flex-col`}
              >
                <div className="flex-initial w-[30%] sm:w-full sm:mb-5 max-h-[250px]     rounded-3xl overflow-hidden">
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
