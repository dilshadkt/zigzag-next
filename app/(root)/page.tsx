import LandPage from "./LandPage";
import AboutUs from "@/app/(root)/components/AboutUs";
import Whychoose from "@/app/(root)/components/Whychoose";
import OurClient from "@/app/(root)/components/OurClient";
import Blogs from "@/app/(root)/components/Blogs";
import OurExpert from "@/app/(root)/components/OurExpert";
import Portfolio from "@/app/(root)/components/Portfolio";
import Services from "@/app/(root)/components/Services";
import Testimonial from "./components/Testimonial";

export default async function Home() {
  const res = await fetch("https://zigzag.onrender.com/testimonial", {
    next: { revalidate: 5 },
  });
  const testimonia = await res.json();

  return (
    <div>
      <LandPage />
      <AboutUs />
      <Whychoose />
      <OurClient />
      <Blogs />
      <Portfolio />
      <OurExpert />
      <Services />
      <Testimonial data={testimonia} />
    </div>
  );
}
