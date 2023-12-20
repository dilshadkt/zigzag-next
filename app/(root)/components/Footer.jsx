import React from "react";
import footer from "@/public/digital-market-agency-in-malappuram.png";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FCFAFA] px-[5%] flex py-[5%] relative">
        <div className="flex-initial w-[40%] sm:w-full ">
          <div>
            <div className="h-[90px] sm:h-[40px] sm:mt-6  overflow-hidden flex items-center justify-start">
              <Image
                src={footer}
                alt={footer}
                className="w-[200px] sm:w-[120px] "
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
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <InstagramIcon />
                </a>
              </div>
              <div className="mx-2 hover:text-red-500 cursor-pointer">
                <a
                  href="https://www.facebook.com/ZIGZAGDigitalSolutions/"
                  target="blank"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <FacebookIcon />
                </a>
              </div>
              <div className="hover:text-red-500 cursor-pointer">
                <a
                  href="https://www.linkedin.com/company/zig-zag-digital-solution-s"
                  target="blank"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex-1  flex text-primary">
          <div className="flex-initial  w-[20%]">
            <h3 className="font-semibold text-xl mb-6">Company</h3>

            <ul className="list-disc pl-4">
              <Link href={"/"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Home
                </li>
              </Link>
              <Link href={"/services"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Service
                </li>
              </Link>
              <Link href={"/portfolio"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Portfolio
                </li>
              </Link>
              <Link href={"/blogs"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Blog
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Contact Us
                </li>
              </Link>
              <Link href={"about"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  About
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex-initial w-[30%]">
            <h3 className="font-semibold text-xl mb-6">Services</h3>

            <ul className="list-disc pl-4">
              <Link href={"/services/Corporate"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Corporate identity
                </li>
              </Link>
              <Link href={"/services/Social"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Social Media Marketing
                </li>
              </Link>
              <Link href={"/services/SEO"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  SEO
                </li>
              </Link>
              <Link href={"/services/Website"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Website Development
                </li>
              </Link>
              <Link href="/services/Performance">
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  {" "}
                  Performance Marketing
                </li>
              </Link>
              <Link href={"/services/Media"}>
                <li className="my-2 cursor-pointer hover:text-[#15181e]">
                  Media Production
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex-1 ">
            <h3 className="font-semibold text-xl mb-6">Latest Articles</h3>

            <ul className="list-disc pl-4">
              <li className="my-2 cursor-pointer hover:text-[#15181e]">
                we serve you the best 10 digital marketing agency in Kerala{" "}
              </li>
              <li className="my-2 cursor-pointer hover:text-[#15181e]">
                Searching for the top digital marketing Training center in
                Kerala? Look no further
              </li>
              <li className="my-2 cursor-pointer hover:text-[#15181e]">
                Are you Hunting for Malappuram’s Best Digital Marketing Agency?
              </li>
              <li className="my-2 cursor-pointer hover:text-[#15181e]">
                Unlocking Organic Traffic: A Guide to Boosting Online Visibility
                for Zig Zag Digital Marketing Agency in Manjeri, Kerala
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white flex sm:flex-col rounded-3xl shadow-2xl absolute px-5 py-[2%] sm:py-[3%] bottom-[90%] w-[70%] sm:w-[90%] left-0 right-0 m-auto z-0">
          <div className="flex-1  text-3xl flex items-center justify-center">
            <div className="w-[70%] sm:w-[80%]">
              <h3 className="sm:text-xl sm:text-center font-semibold text-red-500">
                Wish To Take Your Business To The Next Level?
              </h3>
            </div>
          </div>
          <div className="flex-1  flex justify-center items-center ">
            <div className="flex flex-col items-center w-[80%]">
              <h3 className="sm:hidden text-lg mb-2 text-primary">
                Create Compelling Online Presence & Drive Sales With The Best
                Digital Marketing Agency in Malappuram
              </h3>
              <Link href={"/contact"}>
                <span className="my-3 sm:my-0 sm:text-black  font-medium text-red-500 cursor-pointer hover:bg-gray-100 p-2 rounded-2xl px-4">
                  Get A Free Consultation
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FCFAFA]">
        <h4 className="p-2 text-center">
          © 2023 Zig Zag Digital Marketing Agency Manjeri. All rights reserved.
        </h4>
      </div>
    </>
  );
};

export default Footer;
