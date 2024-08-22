import React, { useRef, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { nanoid } from "nanoid";
import emailjs from "@emailjs/browser";
const CareerForm = ({ jobs, isVisible }: CareerFormProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsloading(true);

    // if (form.current) {
    //   emailjs
    //     .sendForm(
    //       "service_uyx61ym",
    //       "template_k438js2",
    //       form.current,
    //       "feYFFeEJ8N7t8b0ih"
    //     )
    //     .then(
    //       (result) => {
    //         form.current?.reset();
    //         localStorage.setItem("hasVisited", "true");
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     )
    //     .finally(() => {
    //       setIsloading(false);
    //     });
    // }
  };
  return (
    <section
      id="apply"
      className=" bg-white max-w-screen-xl mx-auto mt-20 mb-60 px-7 flex flex-col items-center"
    >
      <div
        className={` ${
          isVisible ? `flex` : `hidden`
        } w-full h-full  flex-col items-center`}
      >
        <h4 className="w-full text-left font-semibold mt-3 text-xl">
          Career Application Form
        </h4>
        <form className="w-full" ref={form} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 w-full my-7 sm:grid-cols-2 gap-3 sm:gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="text-sm font-semibold">NAME</label>
                <input
                  type="text"
                  required
                  name="name"
                  className="p-3 rounded-lg bg-[#D6D6D6] mt-2"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold">EMAIL</label>
                <input
                  type="email"
                  required
                  name="email"
                  className="p-3 rounded-lg bg-[#D6D6D6] mt-2"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col ">
                <label className="text-sm font-semibold">JOB TITLE</label>
                <div className="w-full h-full relative text-xl">
                  <select
                    required
                    className="  w-full p-3 mt-2  text-base rounded-lg bg-[#D6D6D6] appearance-none"
                    name="find-us"
                  >
                    {jobs.map((item) => (
                      <option key={nanoid()}>{item.title}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                  <ArrowDownwardIcon
                    className="absolute top-2 bottom-0 my-auto right-3 text-gray-400"
                    fontSize="inherit"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold">PHONE NUMBER</label>
                <div className="mt-2 flex items-center w-full relative">
                  <input
                    type="number"
                    required
                    name="Number"
                    className="p-3 rounded-lg flex-1 bg-[#D6D6D6] "
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Resume</label>
            <div className="flex items-center">
              <input
                type="file"
                required
                name="name"
                className="p-3 flex-1 rounded-lg bg-[#D6D6D6] mt-2"
              />
              <button
                disabled={isLoading}
                className="text-white bg-[#DB002F] p-3 w-[200px] rounded-xl mt-2 font-semibold ml-3"
              >
                {isLoading ? "SUBMITING ...." : `APPLY NOW`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
