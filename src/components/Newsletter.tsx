import Image from "next/image";
const Newsletter = () => {
  return (
    <>
      <div className=" inter flex min-h-screen min-w-full flex-col items-center justify-center">
        <div className="min-w-screen absolute min-h-screen bg-[#A470CD]"></div>
        <Image
          className="absolute left-0 -z-50 hidden md:block"
          src={"/images/newsletterbg.png"}
          width={1199}
          height={1024}
          alt=""
        />
        <div className="flex h-screen w-screen">
          {/* Left Side */}
          <div className="hidden h-screen w-1/2 md:flex "></div>
          {/* Right Side */}
          <div className="w-min-screen flex min-h-screen w-full flex-col items-center justify-center bg-[#A470CD] md:w-1/2">
            <div className="h-40">
              <Image
                className="flex flex-col items-center justify-center "
                src={"/images/logoB.png"}
                width={301}
                height={86}
                alt=""
              />
            </div>
            <div className="text-center -tracking-[0.035rem] md:h-20">
              <p className="text-[41px] font-bold">
                Sign up for our newsletter
              </p>
              <p className="text-[25px] font-[600] ">
                Sign up for exclusive discounts and more.
              </p>
            </div>
            <div className="mt-16  flex h-20 w-[380px] flex-col rounded   border-2 border-black md:w-[470px]">
              <p className="mb-1 ml-2 font-bold">Email</p>
              <input
                placeholder="johndoe@raze-society.com"
                className=" ml-2 border-0 bg-transparent placeholder:text-black placeholder:text-opacity-60"
                id="email"
                type="email"
              />
            </div>
            <button className=" mt-8 h-[80px] w-[380px] rounded-md bg-black tracking-[0.125em] text-[#A470CD] md:w-[470px]">
              RAZE UP!!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
