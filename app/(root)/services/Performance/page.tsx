import Image from "next/image";
import React from "react";
import performance from "@/public/services/performance/A,B Testing.jpg";
import performance1 from "@/public/services/performance/Continuous Optimization.jpg";
import performance2 from "@/public/services/performance/Conversion-Oriented Design.jpg";
import performance3 from "@/public/services/performance/Data-Driven Strategy.jpg";
import performance4 from "@/public/services/performance/Multichannel Integration.jpg";
import performance5 from "@/public/services/performance/Performance Marketing Service.jpg";
import performance6 from "@/public/services/performance/Targeted Campaigns.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";

const page = () => {
  const data = [
    {
      title: "1. Data-Driven Strategy    ",
      id: 1,
      img: performance1,
      desc: "We believe in informed decisions. Our team analyses data to understand your audience, behaviors, and preferences. This deep understanding forms the foundation of our strategic approach, ensuring every strategy we follow is backed by Data. ",
    },
    {
      title: "2.Targeted Campaigns    ",
      id: 2,
      img: performance2,
      desc: "We run campaigns that reach your target audience in Malappuram or any corner of the world. By targeting those most likely to convert, we optimize your budget and maximize results, making us the best choice for performance marketing for your business",
    },
    {
      title: "3. Conversion-Oriented Design    ",
      id: 3,
      img: performance3,
      desc: "Driving traffic is one thing; converting it is another. Our conversion-oriented designs focus on creating landing pages and user experiences that guide visitors seamlessly from discovery to action.    ",
    },
    {
      title: "4.Continuous Optimization    ",
      id: 4,
      img: performance4,
      desc: "We monitor campaign performance promptly, fine-tuning strategies based on real-time data. This approach ensures we're always on the path to great results.    3x your marketing efforts with our performance-driven approach and turn your campaigns into success stories that generate real business growth.  ",
    },
    {
      title: "5.Multichannel Integration   ",
      id: 5,
      img: performance5,
      desc: "By strategically coordinating your advertising and marketing efforts throughout specific channels, we create a unified brand experience that enhances your message and drives conversions. Our multichannel method ensures that your target audience sees your brand anyplace they go online. This complete technique guarantees that your performance advertising and marketing efforts yield the first-class possible results.     ",
    },
    {
      title: " 6. A/B Testing  ",
      id: 6,
      img: performance6,
      desc: "To obtain peak performance on your marketing campaigns, we are committed to a continuous improvement through A/B checking out and experimentation.   By often experimenting with distinctive strategies and strategies, we find new opportunities for optimization. This iterative method allows us to stay alert and adapt to changing market dynamics. It also ensures that we're always imposing the best strategies to satisfy your overall performance goals      ",
    },
  ];

  return (
    <>
      <div className="mx-[13%] mt-9 sm:mx-5 ">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={performance}
              alt="Performance Marketing Service in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            Performance Marketing Service in Malappuram
          </h1>
          <div className="text-2xl sm:text-[20px]">
            <p className="text-justify leading-[35px] ">
              We turn data into action and strategies into success. As a growing
              digital marketing agency from Malappuram, we specialize in
              performance marketing beyond traditional methods. Our main focus
              areas in digital marketing are precise targeting, measurable
              outcomes, and increased ROI.
            </p>
          </div>
          <h4 className="font-semibold text-xl my-5">
            Why Performance Marketing Matters?
          </h4>
          <p className="text-justify text-xl  leading-[35px]">
            Businesses grow better when they invest in performance marketing,
            which drives measurable results. Generating tangible outcomes that
            drive your business forward. Our agency understands the dynamics of
            the business world and digital marketing, allowing us to design
            strategies that perform well.
          </p>

          <h4 className="font-semibold text-xl my-5 sm:my-[10%]">
            Our Performance Marketing Approach
          </h4>
          <div>
            {data.map((item) => (
              <div
                key={`${item.id}-${item.title}`}
                className={`flex ${
                  item.id % 2 === 0 && `flex-row-reverse`
                } mb-[4%] border p-4 rounded-3xl sm:flex-col`}
              >
                <div className="flex-initial w-[30%] sm:w-full sm:mb-5 max-h-[250px]  bg-green-400 rounded-3xl overflow-hidden">
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
