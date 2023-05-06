import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const GamingSection: NextPage = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateViewportWidth();
      window.addEventListener("resize", updateViewportWidth);
      return () => {
        window.removeEventListener("resize", updateViewportWidth);
      };
    }
  }, []);

  return (
    <div className="h-screen w-full bg-[#0D0D0D]">
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full">
        {/* Top Border */}
        <div className="absolute left-0 top-0 h-fit w-full">
          <PixelatedBorder viewportWidth={viewportWidth} />
        </div>

        {/* Grid Background */}
        <GridBackground
          viewportHeight={viewportHeight}
          viewportWidth={viewportWidth}
        />

        {/* Icons */}
        <div className="absolute left-0 top-0 h-full w-full">
          {/* Smiley Bubble Icon */}
          <Image
            src="/images/gaming/smileybubble.png"
            width={87}
            height={80}
            className="absolute left-[8%] top-40"
            alt=""
          />
          <Image
            src={"/images/gaming/arrow1.png"}
            width={87}
            height={114}
            className="absolute right-[21%] top-[326px]"
            alt=""
          />
          <Image
            src={"/images/gaming/arrow2.png"}
            width={82}
            height={66}
            className="absolute right-[44%] top-52 -rotate-180"
            alt=""
          />
          <Image
            src={"/images/gaming/arrow3.png"}
            width={87}
            height={114}
            className="absolute right-[4%] top-36 "
            alt=""
          />
          <Image
            src={"/images/gaming/wifi.png"}
            width={48}
            height={52}
            className="absolute left-[30%] top-40 "
            alt=""
          />
          <Image
            src={"/images/gaming/wifi.png"}
            width={48}
            height={52}
            className="absolute bottom-[251px] left-[23.5%] "
            alt=""
          />
          <Image
            src={"/images/gaming/arrow5.png"}
            width={81}
            height={82}
            className="absolute left-[1.5%] top-[380px] "
            alt=""
          />
          <Image
            src={"/images/gaming/pointer.png"}
            width={85}
            height={77}
            className="absolute right-[27%] top-[150px] "
            alt=""
          />
          <Image
            src={"/images/gaming/textbubble.png"}
            width={76}
            height={82}
            className="absolute bottom-[375px] left-[4%] "
            alt=""
          />
          <Image
            src={"/images/gaming/arrow4.png"}
            width={43}
            height={69}
            className="absolute bottom-[215px] left-[13%] "
            alt=""
          />
          <Image
            src={"/images/gaming/heartbubble.png"}
            width={83}
            height={86}
            className="absolute bottom-[197px] right-[24%] "
            alt=""
          />
          <Image
            src={"/images/gaming/refresh.png"}
            width={46}
            height={56}
            className="absolute bottom-[200px] right-[11%] "
            alt=""
          />
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full">
          <PixelatedBorder viewportWidth={viewportWidth} flipped />
        </div>
      </div>
    </div>
  );
};

export default GamingSection;

interface GridBackgroundProps {
  viewportWidth: number;
  viewportHeight: number;
}

const GridBackground: NextPage<GridBackgroundProps> = ({
  viewportWidth,
  viewportHeight,
}) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      {/* Vertical Lines */}
      <div className="absolute flex h-full w-full justify-between">
        {[...Array<number>(Math.floor(viewportWidth / 163))].map((_, index) => (
          <div
            className="h-full w-[1px] bg-white bg-opacity-5"
            key={index}
          ></div>
        ))}
      </div>
      {/* Horizontal Lines */}
      <div className="absolute flex h-full w-full flex-col justify-between">
        {[...Array<number>(Math.floor(viewportHeight / 163))].map(
          (_, index) => (
            <div
              className="h-[1px] w-full bg-white bg-opacity-5"
              key={index}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

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
      {!flipped && (
        <div className="-mt-[1px] h-[16px] w-full bg-raze-green"></div>
      )}
    </div>
  );
};

const FloatingPixels: NextPage = () => {
  return (
    <div className="h-[73px] w-[calc(9*16px+3px)]">
      <div className="flex w-full justify-between">
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
      </div>
      <div className="mx-auto h-[16px] w-[16px] bg-raze-green"></div>
      <div className="mt-2 flex w-full justify-between px-[16px]">
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
      </div>
      <div className="flex w-full justify-between px-[32px]">
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
      </div>
    </div>
  );
};
