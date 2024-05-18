import React from "react";
import footer from "@/public/digital-market-agency-in-malappuram.png";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface Blog {
  heading: string;
  _id: string;
}
const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/latest`
  );
  const latestArticle: Blog[] = await response.json();
  return (
    <>
      <div className="bg-[#FCFAFA] px-[5%]  py-[5%] relative ">
        <div className="flex w-full ">
          <div className="flex-initial md:w-[40%] w-full ">
            <div>
              <div className="md:h-[90px] h-[40px] mt-6  overflow-hidden flex items-center justify-start">
                <Image
                  src={footer}
                  alt={"digital marketing solution in malappuram"}
                  className="md:w-[200px] w-[120px] "
                  loading="eager"
                />
              </div>

              <h3 className=" my-2 text-lg text-primary font-medium">
                Your Digital Crossroad to Success
              </h3>
              <div className="flex items-center my-4">
                <Link href={"/contact"}>
                  <button className="py-2  font-semibold px-8 bg-secondary w-fit flex items-center justify-center text-white rounded-full">
                    Start here
                  </button>
                </Link>
                <div className="ml-6">
                  <span className="text-sm ">CALL US NOW</span>
                  <h4 className="font-bold  ">+91 9946443551</h4>
                </div>
              </div>
              <div className="flex">
                <div className="hover:text-red-500 cursor-pointer">
                  <a
                    href="https://instagram.com/zig_zag_digital_solutions/"
                    target="blank"
                    title="Instagram"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <InstagramIcon />
                  </a>
                </div>
                <div className="mx-2 hover:text-red-500 cursor-pointer">
                  <a
                    href="https://www.facebook.com/ZIGZAGDigitalSolutions/"
                    target="blank"
                    title="facebook"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <FacebookIcon />
                  </a>
                </div>
                <div className="hover:text-red-500 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/company/zig-zag-digital-solution-s"
                    target="blank"
                    title="linkedIn"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-1  md:flex text-primary">
            <div className="flex-initial  w-[20%]">
              <h3 className="font-semibold text-xl mb-6">Company</h3>

              <ul className="list-disc pl-4">
                <Link href={"/"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Home
                  </li>
                </Link>
                <Link href={"/services"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Service
                  </li>
                </Link>
                <Link href={"/portfolio"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Portfolio
                  </li>
                </Link>
                <Link href={"/blogs"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Blog
                  </li>
                </Link>
                <Link href={"/contact"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Contact Us
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    About
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex-initial w-[30%]">
              <h3 className="font-semibold text-xl mb-6">Services</h3>

              <ul className="list-disc pl-4">
                <Link href={"/services/Corporate"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Corporate identity
                  </li>
                </Link>
                <Link href={"/services/Social"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Social Media Marketing
                  </li>
                </Link>
                <Link href={"/services/SEO"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    SEO
                  </li>
                </Link>
                <Link href={"/services/Website"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Website Development
                  </li>
                </Link>
                <Link href="/services/Performance">
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    {" "}
                    Performance Marketing
                  </li>
                </Link>
                <Link href={"/services/Media"}>
                  <li className="my-2 font-medium cursor-pointer hover:text-[#15181e]">
                    Media Production
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex-1 ">
              <h3 className="font-semibold text-xl mb-6">Latest Articles</h3>

              <ul className="list-disc pl-4">
                {latestArticle.map((item) => (
                  <Link key={item._id} href={`/blogs/${item._id}`}>
                    <li className="my-2 cursor-pointer font-medium hover:text-[#15181e]">
                      {item.heading}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white flex flex-col items-center md:flex-row rounded-3xl shadow-2xl absolute px-5 md:py-[2%] py-[3%] bottom-[90%] md:w-[70%] w-[90%] left-0 right-0 m-auto z-0">
            <div className="flex-1  text-3xl flex items-center justify-center">
              <div className="md:w-[70%] w-full ">
                <h3 className="text-xl md:text-2xl text-center font-semibold text-red-500">
                  Wish To Take Your Business To The Next Level?
                </h3>
              </div>
            </div>
            <div className="flex-1  flex justify-center items-center ">
              <div className="flex flex-col items-center w-[80%]">
                <h3 className="hidden md:flex  text-lg mb-2 text-primary">
                  Create Compelling Online Presence & Drive Sales With The Best
                  Digital Marketing Agency in Malappuram
                </h3>
                <Link href={"/contact"}>
                  <span className="my-3 md:my-0 whitespace-nowrap text-black  font-medium md:text-red-500 cursor-pointer hover:bg-gray-100 p-2 rounded-2xl px-4">
                    Get A Free Consultation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FCFAFA] ">
        <h4 className="p-2 text-center text-sm pb-[22%] md:pb-3">
          © 2023 Zig Zag Digital Marketing Agency Manjeri. All rights reserved
        </h4>
      </div>
    </>
  );
};

export default Footer;
