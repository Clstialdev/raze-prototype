import { NextPage } from "next";
import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";
import Header from "@/components/Header";
import ArrowKey from "@/components/ArrowKey";

const HeroSection: NextPage = () => {
  return (
    <div className="h-full w-full bg-red-500">
      <Header />
      <HeroTitle />
      <ArrowKey />
    </div>
  );
};

export default HeroSection;
