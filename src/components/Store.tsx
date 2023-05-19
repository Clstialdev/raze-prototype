import Image from "next/image";
const Store = () => {
  return (
    <>
      <div className=" mt-[50%] h-screen w-screen text-center md:mt-[35%] lg:mt-[5%] 2xl:mt-[50px]">
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
            <span className=" text-[#96FC58]"> Newsletter</span> to get notified
            of limited edition drops!
          </p>
        </div>
      </div>

      {/* STICKERS  */}
      <div className="">
        <div className="absolute right-[30%] top-[10%]">
          <Image
            src={"/images/stickers/StickerGreen.png"}
            width={118}
            height={118}
            alt=""
          />
        </div>
        <div className="absolute left-[17%] top-[15%]">
          <Image
            src={"/images/stickers/StickerOrange.png"}
            width={224}
            height={70}
            alt=""
          />
        </div>
        <div className="absolute left-[50%] top-[50%]">
          <Image
            src={"/images/stickers/StickerYellow.png"}
            width={137}
            height={137}
            alt=""
          />
        </div>
        <div className="absolute bottom-[23%] left-[27%]">
          <Image
            src={"/images/stickers/StickerRed.png"}
            width={225}
            height={69}
            alt=""
          />
        </div>
        <div className="absolute bottom-[25%] right-[10%]">
          <Image
            src={"/images/stickers/StickerPurple.png"}
            width={230}
            height={74}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Store;
