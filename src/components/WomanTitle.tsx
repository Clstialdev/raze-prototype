import Image from "next/image";
const WomenTitle = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="relative flex h-[80%] w-full flex-col items-center justify-center sm:mt-32 sm:h-auto sm:flex-row sm:items-start">
          {/* women Image */}
          <div className="relative">
            <div className="absolute bottom-0 left-0 z-20 w-40 translate-y-[50%] mix-blend-exclusion lg:w-60 xl:w-[313px]">
              <Image
                className=""
                src={"/images/womenStar1.png"}
                width={319}
                height={319}
                alt=""
              />
            </div>
            <div className=" absolute right-0 top-0 z-0 w-[70px] translate-x-[100%]  md:w-[100px] lg:w-[120px] xl:w-[162px] ">
              <Image
                src={"/images/womenStar2.png"}
                width={162}
                height={319}
                alt=""
              />
            </div>

            <Image
              className=" relative z-10 w-[300px] md:w-[480px] lg:w-[600px] xl:w-[794px]"
              src={"/images/women.png"}
              width={794}
              height={454}
              alt=""
            />
          </div>

          {/* TITLE */}
          <div className="relative h-fit md:-mb-2 md:self-end md:leading-[145px] lg:-mb-6">
            <div className="duera relative ml-4 text-center align-text-bottom text-6xl text-white  md:text-6xl lg:text-right lg:text-8xl xl:text-[145px]">
              <h1>WOMEN</h1>
              <h1 className="relative right-0 md:absolute">
                EMPOWERMENT
                <div className="absolute -left-2 top-8 z-10 -translate-x-[100%] -translate-y-1/2">
                  <Image
                    src="/images/womenSymbol.png"
                    width={100}
                    height={174}
                    className="hidden object-contain sm:block"
                    alt=""
                  />
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WomenTitle;
