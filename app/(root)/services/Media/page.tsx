import Image from "next/image";
import React from "react";
import media1 from "@/public/services/media/Creative Conceptualization.jpg";
import media from "@/public/services/media/Diverse Content Formats.jpg";
import media2 from "@/public/services/media/Final Delivery.jpg";
import media3 from "@/public/services/media/High-Quality Production.jpg";
import media4 from "@/public/services/media/Media Production Services.jpg";
import media5 from "@/public/services/media/Review and Feedback.jpg";
import media6 from "@/public/services/media/Storytelling.jpeg";
import RecentWork from "@/app/(root)/components/RecentWork";
const page = () => {
  const data = [
    {
      title: "1.Creative Conceptualization    ",
      id: 1,
      img: media1,
      desc: "Behind every great media is a great idea. Our creative minds collaborate with you to understand your brand, objectives, and message. We then transform these understandings into imaginative concepts that captivate and inspire. ",
    },
    {
      title: "2. High-Quality Production    ",
      id: 2,
      img: media3,
      desc: "Quality is our core focus. From pre-production planning to filming and editing, our team ensures every aspect of production meets the highest standards. We use state-of-the-art equipment and techniques to bring your vision to life.    ",
    },
    {
      title: "3.  Diverse Content Formats  ",
      id: 3,
      img: media4,
      desc: "We offer diverse media content formats. From short videos for reels and YouTube shorts to documentaries and stunning photography, we produce a wide range of content that suits your brand's needs.    ",
    },
    {
      title: "4.Review and Feedback    ",
      id: 4,
      img: media5,
      desc: "This is where we open our hearts to constructive feedback from our clients and deliver results that exceed all their expectations.    By opening the communication channel, both teams can discuss their thoughts and finally land on the same page for successful media production     ",
    },
    {
      title: "5.Final Delivery    ",
      id: 5,
      img: media2,
      desc: "We firmly believe time management is the key to sustaining fruitful relationships with our esteemed clients.  Talk to our expert media professionals to create visuals that captivate, inspire, and drive meaningful engagement for you! .  ",
    },
    {
      title: "6. Storytelling   ",
      id: 6,
      img: media6,
      desc: "Every piece of media we create is an opportunity for your brand to tell a compelling story that the audience can connect with, to deliver your unique voice, values, and messaging.  Whether it's a promotional video, a social media campaign, or an images series, we try to carry a steady brand picture that resonates with your audience. We create media that appears amazing and conveys a significant and remarkable message. This approach facilitates your target audience to connect with your brand on a deeper level retaining them as your customers.",
    },
  ];
  return (
    <>
      <div className="mx-[13%] mt-9 sm:mx-5">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center  rounded-xl overflow-hidden h-[320px] sm:h-[220px]">
            <Image
              className="w-full h-full object-cover"
              src={media}
              alt="Media Production Services in Malappuram"
            />
          </div>

          <h1 className="text-center my-7 text-3xl font-semibold text-red-500">
            Media Production Services in Malappuram
          </h1>
          <div className="text-2xl sm:text-[20px]">
            <p className="text-justify leading-[35px] ">
              As a cutting-edge digital marketing agency in Malappuram, we
              specialize in bringing captivating visual narratives that amplify
              brand impact. Join us in media production, and let us get your
              brand's storytelling to new heights with stunning visuals.
            </p>
          </div>
          <h4 className="font-semibold text-xl my-5 sm:mt-[10%]">
            Why Media Production Matters?
          </h4>
          <p className="text-justify text-xl leading-[35px]">
            Great visuals and compelling stories make you stand out in a world
            of endless information and content consumption. Media production is
            the key to engaging your audience deeper and leaving a lasting
            impression.
          </p>

          <h4 className="font-semibold text-xl my-5 sm:my-[10%]">
            Our Media Production Approach
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
