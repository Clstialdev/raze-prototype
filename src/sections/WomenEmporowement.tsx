import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import WomenTitle from "@/components/WomanTitle";

const WomenEmporowement: NextPage = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Check if this section is in view
  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      const rect = section
        ? section.getBoundingClientRect()
        : { top: 0, bottom: 0 };
      const isInView =
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);
      setInView(isInView);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const updateViewportDimensions = () => {
        setViewportWidth(window.innerWidth);
        setViewportHeight(window.innerHeight);
      };
      // Get viewport height and width
      updateViewportDimensions();
      window.addEventListener("resize", updateViewportDimensions);
      // As soon as we're out of view, stop the game
      !inView;
      return () => {
        window.removeEventListener("resize", updateViewportDimensions);
      };
    }
  }, [inView]);

  return (
    <div className="relative h-screen w-full bg-[#0D0D0D]" ref={sectionRef}>
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full">
        {/* Top Border */}
        <div className="absolute left-0 top-0 h-fit w-full">
          <PixelatedBorder viewportWidth={viewportWidth} />
        </div>
      </div>
      <WomenTitle />
      {/* Description */}
      <div className="absolute bottom-56 left-0 flex w-full justify-center sm:bottom-36">
        <p className="inter mx-auto w-[95%] text-center text-xs font-medium uppercase text-white sm:text-sm">
          We believe in supporting and uplifting each other to achieve our
          dreams. From networking events to workshops, we provide a space where
          you can grow personally and professionally. meet like-minded women,
          share experiences, and inspire one another to reach new heights.
          Let&apos;s break barriers and shatter glass ceilings together!
        </p>
      </div>
    </div>
  );
};

export default WomenEmporowement;

interface PixerlatedBorderProps {
  viewportWidth: number;
  flipped?: boolean;
}

const PixelatedBorder: NextPage<PixerlatedBorderProps> = ({
  viewportWidth,
  flipped = false,
}) => {
  return (
    <div>
      <div
        className="flex justify-between"
        style={{ rotate: flipped ? "180deg" : "0deg" }}
      >
        {[...Array<number>(Math.floor(viewportWidth / 160))].map((_, index) => (
          <FloatingPixels key={index} />
        ))}
      </div>
    </div>
  );
};

const Star = ({ className }: { className: string }) => {
  return (
    <Image
      className={cn("absolute", className)}
      alt="star"
      height={319}
      width={319}
      src={"/images/womenStar1.png"}
    />
  );
};

const FloatingPixels: NextPage = () => {
  return (
    <div className="relative w-[calc(9*24px+3px)] bg-green-400/30">
      <div className="absolute top-[88vh] w-[100px] bg-blue-300">
        <Star className="left-[0px] top-[0px] rotate-[25deg] scale-[20%]" />
        <Star className="left-[0px] top-[27px] w-[62px] rotate-[25deg] scale-[40%]" />
        <Star className="left-[0px] top-[27px] rotate-[15deg] scale-[40%]" />
      </div>
      <div className="absolute top-[220px] w-[100px] bg-blue-300">
        <Star className="left-[-80px] top-[0px] rotate-[63deg] scale-[42%]" />
        <Star className="left-[0px] top-[70px] rotate-[23deg] scale-[22%]" />
        <Star className="left-[80px] top-[130px] rotate-[-10deg] scale-[25%] " />
      </div>
      <div className="relative w-[100px] bg-blue-300">
        <Star className="left-[-20px] top-[-10px] rotate-[63deg] scale-[42%]" />
        <Star className="left-[30px] top-[24px] rotate-[21deg] scale-[20%]" />
        <Star className="left-[88px] top-[11px] rotate-[3deg] scale-[20%]" />
        <Star className="left-[55px] top-[-19px] rotate-[41deg] scale-[25%]" />
        <Star className="left-[91px] top-[45px] rotate-[19deg] scale-[25%]" />
      </div>
    </div>
  );
};
