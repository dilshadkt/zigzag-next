import ServiceBox from "@/app/(root)/components/ServiceBox";
import Image from "next/image";
import React from "react";
import social1 from "@/public/services/social/Adaptation.jpg";
import social2 from "@/public/services/social/Community Engagement.jpg";
import social3 from "@/public/services/social/Compelling Content Creation.jpg";
import social4 from "@/public/services/social/Performance Analytics.jpg";
import social5 from "@/public/services/social/Social Media Marketing.jpg";
import social6 from "@/public/services/social/Targeted Advertising.jpg";
import social from "@/public/services/social/Strategy Planning.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";

const page = () => {
  const benifits = [
    " Social media marketing is vital for brands due to its diverse user engagement.",
    "It's where customers are and unlike traditional methods, it offers personalized targeting for rapid growth.",
    "Accurate performance measurement makes it the best marketing method for brands.",
    "Our tailored social media strategies boost brand awareness, engagement, and growth.",
  ];

  const data = [
    {
      title: "1. Strategy Planning",
      id: 1,
      img: social1,
      desc: "A strong action plan is our first step to developing a successful social media marketing strategy. The strategy planning gives us a clear idea of the goals, target audience, and their pain points. Our social media experts go above and beyond to develop a customized social media plan comprising various content formats. We follow a particular posting schedule to maintain consistency.Our main goal is to bring value to your customers' lives through quality content that will impact people's minds longer. ",
    },
    {
      title: "2. Compelling Content Creation",
      id: 2,
      img: social2,
      desc: " We believe that content has unlimited power when influencing a customer. It is not just the product that wins the heart. It is the   emotions that connect each other. We have gathered brilliant creative   minds nationwide to craft compelling content, including visually   captivating graphics, videos, and a solid content plan that aligns    with the brand’s voice and resonates with your audience. Let us   provide you with content that's creative, engaging, and drives   meaningful interactions.",
    },
    {
      title: "3. Community Engagement",
      id: 3,
      img: social3,
      desc: "The biggest success point of social media is the community you build online with shared vision and values. It is vital for building customers who are loyal to the brand, giving you a cutting edge over the competition. We keep in touch with your community by engaging with your audience and responding to comments, messages, etc. An authentic and prompt conversation from the other end increases the credibility and trust of the brand in the mind.   ",
    },
    {
      title: "4. Targeted Advertising",
      id: 4,
      img: social4,
      desc: "Social media marketing is popular and effective because it can accurately reach targeted audiences. Social media marketing is Data-driven. You decide to launch a new campaign based on the data.    Navigating through this Data by conducting A/B tests maximizes the reach and ROI for your brands.   With an effective social media strategy, your message reaches the right people in any corner of the world.    ",
    },
    {
      title: "5. Performance Analytics  ",
      id: 5,
      img: social5,
      desc: "As your trusted social media marketing managers, we keep a keen eye on the performance statistics of your page. Closely monitoring the data allows us to optimize the campaign accordingly.     There are various key metrics used to measure the success of a social media campaign, including click-through rates, conversations, shares, followers, etc.   Our role is to understand this data and take actions that improve the result.   ",
    },
    {
      title: "6. Adaptation  ",
      id: 6,
      img: social6,
      desc: "In the ever-evolving landscape of social media, adaptability is prime to long periods of success. We understand that what works today won't necessarily be working the next day or day after that.    That's why we prioritize continuous variation and improvement as an essential pillar of our social media advertising and marketing approach.    We proactively regulate our strategies to leverage new possibilities and trends. This ensures that your brand remains relevant and competitive in the dynamic world of social media.",
    },
  ];

  return (
    <>
      <div className="mx-[13%] mt-9 sm:mx-5">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={social}
              alt="Social Media Marketing in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            Social Media Marketing in Malappuram
          </h1>
          <div className="text-2xl sm:text-[20px]">
            <p className="text-justify leading-[35px] ">
              Our team of social media experts specializes in crafting strategic
              and engaging{" "}
              <b className="text-red-500">social media campaigns </b> that gain
              you worldwide brand recognition and growth. Leverage social media
              marketing with quality content that adds value, copy that compels
              you to take action, and an aesthetically pleasing feed that gives
              a lasting impression on your audience.
            </p>
          </div>
          <h4 className="font-semibold text-xl my-5 sm:mt-[10%]">
            Why Social Media Marketing?
          </h4>
          <div className="my-4">
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
                } mb-[4%] border p-4 rounded-3xl sm:flex-col`}
              >
                <div className="flex-initial  sm:w-full sm:mb-5 w-[30%] max-h-[250px]  bg-green-400 rounded-3xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title.split(".")[1]}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="flex-1 flex items-center  mx-5 sm:mx-0">
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
