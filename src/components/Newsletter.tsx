import Image from "next/image";
const Newsletter = () => {
  return (
    <>
      <div className="inter relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="min-w-screen absolute min-h-screen bg-[#A470CD]"></div>
        <Image
          className="absolute left-0 top-0 hidden h-full w-full object-cover lg:block"
          src={"/images/newsletterbg2.png"}
          width={5813}
          height={4136}
          alt=""
        />
        <div className="z-10 flex h-screen w-screen">
          {/* Left Side */}
          <div className="hidden h-screen w-1/2 lg:flex "></div>
          {/* Right Side */}
          <div className="w-min-screen flex min-h-screen w-full flex-col items-center justify-center bg-[#A470CD] lg:w-1/2">
            <div className="h-40">
              <Image
                className="flex flex-col items-center justify-center "
                src={"/images/LogoB.png"}
                width={301}
                height={86}
                alt=""
              />
            </div>
            <div className="text-center -tracking-[0.035rem] lg:h-20">
              <p className="text-[41px] font-bold">
                Sign up for our newsletter
              </p>
              <p className="text-[25px] font-[600] ">
                Sign up for exclusive discounts and more.
              </p>
            </div>
            <div className="mt-16  flex h-20 w-[380px] flex-col rounded   border-2 border-black lg:w-[470px]">
              <p className="mb-1 ml-2 font-bold">Email</p>
              <input
                placeholder="johndoe@raze-society.com"
                className=" ml-2 border-0 bg-transparent placeholder:text-black placeholder:text-opacity-60"
                id="email"
                type="email"
              />
            </div>
            <button className=" mt-8 h-[80px] w-[380px] rounded-lg bg-black tracking-[0.125em] text-[#A470CD] lg:w-[470px]">
              RAZE UP!!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
