import { NextPage } from "next";
import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";
import Header from "@/components/Header";
import ArrowKey from "@/components/ArrowKey";

const HeroSection: NextPage = () => {
  return (
    <div className="h-full min-h-screen w-full bg-raze-beige">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-[35px] border-[15px] border-raze-beige">
        {/* Background Image */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <Image
            src="/images/website-wallpaper-up2.png"
            width={7527}
            height={4080}
            alt="Raze Hero Background Image"
            className="h-full w-full object-cover"
          />
        </div>
        <Header />
        <HeroTitle />
        <ArrowKey />
      </div>
    </div>
  );
};

export default HeroSection;
