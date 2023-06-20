import { motion } from "framer-motion";
import Image from "next/image";
import Sticker from "./Sticker";
import { useRef } from "react";
import Link from "next/link";
const Store = () => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div
        ref={constraintsRef}
        className="relative flex h-screen w-full flex-col justify-center text-center "
        id="shop"
      >
        <div className="headingPro text-[120px] leading-[110px] text-white  md:leading-[112px] lg:text-[340px] lg:leading-[280px]">
          <h1>OUR</h1>
          <div className="group relative hover:cursor-pointer">
            <Link href="https://store.razesociety.com">
              <h1 className="textShadow z-30 duration-300 group-hover:!text-white">
                OFFICIAL
              </h1>
            </Link>
            <div className="group absolute left-1/2 top-1/2 mt-[6px] h-4 w-[350px] -translate-x-[50%] -translate-y-[50%] border-[1px] border-[#C2C2C2] bg-black group-hover:border-none md:h-4  md:w-[400px] lg:h-[34px] lg:w-[950px]"></div>
            <div className="group absolute left-1/2 top-1/2 mt-[6px] h-4 w-[350px] -translate-x-[50%] -translate-y-[50%] border-[1px] border-[#C2C2C2] group-hover:border-none  md:h-4 md:w-[400px] lg:h-[34px] lg:w-[950px]">
              {" "}
              <div className="group h-full w-[0px] bg-white duration-500 group-hover:w-full"></div>
            </div>
          </div>
          <h1>STORE</h1>
        </div>
        <div className="absolute bottom-10 left-0 flex w-full justify-center">
          <p className="inter mt-12 w-full text-center text-xs font-bold uppercase text-white opacity-30">
            More coming soon.... Subscribe to our{" "}
            <Link href="#newsletter">
              <span className=" text-[#96FC58] underline"> Newsletter</span>
            </Link>{" "}
            to get notified of limited edition drops!
          </p>
        </div>

        {/* STICKERS  */}
        <div className="pointer-events-none absolute inset-0 h-screen w-full scale-50 sm:scale-100">
          <Sticker
            src={"/images/stickers/StickerGreen.png"}
            className="pointer-events-auto -right-[10%] top-[10%] sm:right-[32%] sm:top-[60px]"
            height={118}
            width={188}
            drag={true}
            dragConstraints={constraintsRef}
            alt="sticker green"
          />
          <Sticker
            className="pointer-events-auto -left-[40%] top-[10%] sm:left-[24%] sm:top-[190px]"
            drag={true}
            dragConstraints={constraintsRef}
            src={"/images/stickers/StickerOrange.png"}
            width={224}
            height={70}
            alt="orange sticker"
          />
          <Sticker
            className="pointer-events-auto left-[40%] top-[45%] sm:right-[41%] sm:top-[460px]"
            drag={true}
            dragConstraints={constraintsRef}
            src={"/images/stickers/StickerYellow.png"}
            width={137}
            height={137}
            alt="yellow sticker"
          />
          <Sticker
            className="pointer-events-auto -left-[40%] bottom-[20%] sm:left-[29%] sm:top-[610px]"
            drag={true}
            dragConstraints={constraintsRef}
            src={"/images/stickers/StickerRed.png"}
            width={225}
            height={69}
            alt="red sticker"
          />
          <Sticker
            className="pointer-events-auto -right-[50%] top-[23%] sm:right-[22%] sm:top-[600px]"
            drag={true}
            dragConstraints={constraintsRef}
            src={"/images/stickers/StickerPurple.png"}
            width={230}
            height={74}
            alt="purple sticker"
          />
        </div>
      </div>
    </>
  );
};

export default Store;
