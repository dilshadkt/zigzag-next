import LandPage from "./LandPage";
import AboutUs from "./components/AboutUs";
import Whychoose from "./components/Whychoose";
import OurClient from "./components/OurClient";
import Blogs from "./components/Blogs";
import Services from "./components/Services";
import OurExpert from "@/app/components/OurExpert";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div>
      <LandPage />
      <AboutUs />
      <Whychoose />
      <OurClient />
      <Blogs />
      <Portfolio />
      {/* <OurExpert /> */}
      <Services />
    </div>
  );
}
