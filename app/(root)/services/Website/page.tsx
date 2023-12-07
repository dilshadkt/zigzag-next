import Image from "next/image";
import React from "react";
import webdev from "@/public/services/webdev/Content Integration.jpg";
import webdev1 from "@/public/services/webdev/Design and Development.jpg";
import webdev2 from "@/public/services/webdev/Discovery and Planning.jpg";
import webdev3 from "@/public/services/webdev/Launch and Maintenance.jpg";
import webdev4 from "@/public/services/webdev/Search Engine Optimization (SEO) Integration.jpg";
import webdev5 from "@/public/services/webdev/Testing and Quality Assurance.jpg";
import webdev6 from "@/public/services/webdev/Website Development.jpg";
import RecentWork from "@/app/(root)/components/RecentWork";

const page = () => {
  const data = [
    {
      title: "1.Discovery and Planning  ",
      id: 1,
      img: webdev1,
      desc: "Discovering a unique style and theme is the first step to website development. Our team of website development experts understands your business objectives, target audience, and USP to determine which platform works best for you to develop your website.     ",
    },
    {
      title: "2.Design and Development   ",
      id: 2,
      img: webdev2,
      desc: "We custom design and develop a website that aligns with your brand’s persona. The interface will be a perfect blend of aesthetics and functionality. Designs are meant to be responsive and work well on both PC and mobile phones.  A complex website interface and a bad user experience will immediately repel your traffic, making your reach and authority go down.",
    },
    {
      title: "3.Content Integration    ",
      id: 3,
      img: webdev3,
      desc: "Adding content that is converting while adding value is crucial for the user experience of a website design. We integrate effective content with clear call-to-actions and engaging layouts that guide visitors through your website, encouraging them to explore and take action.    ",
    },
    {
      title: "4. Testing and Quality Assurance    ",
      id: 4,
      img: webdev4,
      desc: "The performance of a website matters, especially the loading speed. We optimize your website's performance to ensure fast loading and smooth scrolling. A seamless browsing experience keeps visitors engaged and boosts your search engine rankings .",
    },
    {
      title: "5. Launch and Maintenance    ",
      id: 5,
      img: webdev5,
      desc: "Our partnership continues after the launch. We offer ongoing maintenance and support to keep your website running smoothly and remain up-to-date and secure. Create your signature websites with us today!",
    },
    {
      title: "6. Search Engine Optimization (SEO) Integration    ",
      id: 6,
      img: webdev6,
      desc: "Creating a visually attractive and purposeful site is only part of the equation. To maximize its impact and attain your audience effectively, we recognize the significance of integrating search engine optimization into every element of your internet site improvement. By integrating search engine optimization into the internet site improvement system, we make sure that your website is not just visually spectacular but is discoverable by search engines like google.This strategic method helps long-term achievement using organic site visitors that converts to customers.",
    },
  ];

  return (
    <>
      <div className="mx-[13%] mt-9 sm:mx-5">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={webdev}
              alt="Website Development Services in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            Website Development Services in Malappuram
          </h1>
          <div className="text-2xl  sm:text-[20px]">
            <p className="text-justify leading-[35px] ">
              A website is a visual representation of your brand online. It
              should be a reflection of your corporate brand identity. We
              specialize in creating websites with above-the-mark user
              interfaces and user experiences that are highly captivating,
              engaging, and converting.
            </p>
          </div>
          <h4 className="font-semibold text-xl my-5 sm:mt-[10%]">
            Why Website Development Matters?
          </h4>
          <p className="text-justify text-xl leading-[35px]">
            Your website is the first impression and virtual front door to your
            business. Greet your potential customers with irresistible copy,
            offering your best services and persuading them to take the next
            step.
          </p>

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
                <div className="flex-initial sm:w-full sm:mb-5 w-[30%] max-h-[250px]  bg-green-400 rounded-3xl overflow-hidden">
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
