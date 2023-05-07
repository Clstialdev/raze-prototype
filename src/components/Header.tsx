import Image from "next/image";
import { useState } from "react";
const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="absolute top-6 w-screen backdrop-blur">
        {/* Hamburger Menu */}
        <div
          className="absolute right-5 z-10 mt-[14px] flex flex-col justify-between space-y-2 lg:hidden"
          onClick={() => setActive((current) => !current)}
        >
          <div
            className="h-[2px] w-10 bg-white duration-300"
            style={{
              rotate: active ? "-45deg" : "0deg",
              translate: active ? "0 10px" : "",
            }}
          ></div>
          <div
            className="h-[2px] w-10 bg-white duration-300"
            style={{ opacity: active ? 0 : 1 }}
          ></div>
          <div
            className="h-[2px] w-10 bg-white duration-300"
            style={{
              rotate: active ? "45deg" : "0deg",
              translate: active ? "0 -10px" : "",
            }}
          ></div>
        </div>
        {/* Desktop Nav bar */}
        <div className="inter relative grid w-full grid-cols-3 px-[5%] text-center text-sm font-semibold text-[#EED3B4]">
          <ul className="hidden w-fit flex-row items-center justify-center gap-16 lg:flex">
            <li>SHOP</li>
            <li>EVENTS</li>
            <li>JOIN</li>
            <li>ABOUT</li>
          </ul>
          <div className="logo left-5 top-3 max-lg:absolute lg:flex lg:justify-center ">
            <Image width={90} height={26} src="/images/logo.png" alt="" />
          </div>
          <div className="social mt-[2px] hidden w-full text-right lg:block">
            <p>
              FOLLOW US <span>@RAZE_SOCIETY</span>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 h-[1px] w-[95%] bg-beige lg:mt-7"></div>
      </div>
    </>
  );
};

export default Header;
