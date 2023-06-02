import { motion } from "framer-motion";
import Image from "next/image";
const Store = () => {
  return (
    <>
      {/* STICKERS  */}
      <div className="relative inset-0 w-full">
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: 300,
            right: 300,
            bottom: 50,
          }}
          className="absolute right-[710px] top-[60px]"
        >
          <Image
            src={"/images/stickers/StickerGreen.png"}
            width={118}
            height={118}
            alt="green sticker"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: 300,
            right: 300,
            bottom: 50,
          }}
          className="absolute left-[410px] top-[190px]"
        >
          <Image
            src={"/images/stickers/StickerOrange.png"}
            width={224}
            height={70}
            alt="orange sticker"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: 300,
            right: 300,
            bottom: 50,
          }}
          className="absolute right-[870px] top-[460px] z-30"
        >
          <Image
            src={"/images/stickers/StickerYellow.png"}
            width={137}
            height={137}
            alt="yellow sticker"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: 300,
            right: 300,
            bottom: 50,
          }}
          className="absolute left-[580px] top-[610px] z-30"
        >
          <Image
            src={"/images/stickers/StickerRed.png"}
            width={225}
            height={69}
            alt="red sticker"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: 300,
            right: 300,
            bottom: 50,
          }}
          className="absolute right-[340px] top-[600px] z-30"
        >
          <Image
            src={"/images/stickers/StickerPurple.png"}
            width={230}
            height={74}
            alt="purple sticker"
          />
        </motion.div>
      </div>
      <div className=" 2xl:mt-[50px] mt-[50%] h-screen w-full text-center md:mt-[35%] lg:mt-[5%]">
        <div className="headingPro text-[120px] leading-[110px] text-white  md:leading-[112px] lg:text-[340px] lg:leading-[280px]">
          <h1>OUR</h1>
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 mt-[6px] h-4 w-[350px] -translate-x-[50%] -translate-y-[50%] border-[1px] border-[#C2C2C2] bg-black md:h-4  md:w-[400px] lg:h-[34px] lg:w-[950px]"></div>
            <h1 className="textShadow">OFFICIAL</h1>
          </div>
          <h1>STORE</h1>
        </div>
        <div className="">
          <p className="inter mt-12 text-xs uppercase text-white opacity-30">
            More coming soon.... Subscribe to our{" "}
            <span className=" text-[#96FC58] underline"> Newsletter</span> to
            get notified of limited edition drops!
          </p>
        </div>
      </div>
    </>
  );
};

export default Store;
