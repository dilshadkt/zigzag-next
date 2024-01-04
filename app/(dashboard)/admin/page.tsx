import logo from "@/public/digital-market-agency-in-malappuram.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-[100vh] overflow-hidden flex items-center justify-center ">
      <Image
        src={logo}
        alt="digital-market-agency-in-malappuram"
        className="object-cover w-[60%]"
      />
    </div>
  );
};

export default Home;
