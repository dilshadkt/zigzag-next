import LandPage from "./LandPage";
import AboutUs from "@/app/(root)/components/AboutUs";
import Whychoose from "@/app/(root)/components/Whychoose";
import OurClient from "@/app/(root)/components/OurClient";
import Blogs from "@/app/(root)/components/Blogs";
import OurExpert from "@/app/(root)/components/OurExpert";
import Portfolio from "@/app/(root)/components/Portfolio";
import Services from "@/app/(root)/components/Services";

export default function Home() {
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
    </div>
  );
}
