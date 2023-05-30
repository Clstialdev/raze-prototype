import Image from "next/image";
import { useState } from "react";
const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="absolute top-0 h-[78px] w-screen backdrop-blur-[4px]">
        {/* Nav bar */}
        <div className="inter relative -ml-[calc(35px/2)] grid h-full w-full grid-cols-3 px-[10%] text-center text-sm font-semibold text-raze-beige lg:px-[5%]">
          {/* Desktop Nav */}
          <ul className="hidden w-full flex-row items-center justify-start gap-16 drop-shadow-[0_4px_16px_rgba(0,0,0,1)] lg:flex">
            <li>SHOP</li>
            <li>EVENTS</li>
            <li>JOIN</li>
            <li>ABOUT</li>
          </ul>
          {/* Raze Logo */}
          <div className="flex w-full items-center justify-start drop-shadow-[0_4px_16px_rgba(0,0,0,1)] lg:justify-center">
            <Image width={90} height={26} src="/images/Logo.png" alt="" />
          </div>
          {/* Hamburger Menu */}
          <div className="block lg:hidden"></div>
          <div className="z-10 flex h-full items-center justify-end lg:hidden">
            <div
              className=" flex flex-col justify-between space-y-2 lg:hidden"
              onClick={() => setActive((current) => !current)}
            >
              <div
                className="h-[2px] w-10 bg-raze-beige duration-300"
                style={{
                  rotate: active ? "-45deg" : "0deg",
                  translate: active ? "0 10px" : "",
                }}
              ></div>
              <div
                className="h-[2px] w-10 bg-raze-beige duration-300"
                style={{ opacity: active ? 0 : 1 }}
              ></div>
              <div
                className="h-[2px] w-10 bg-raze-beige duration-300"
                style={{
                  rotate: active ? "45deg" : "0deg",
                  translate: active ? "0 -10px" : "",
                }}
              ></div>
            </div>
          </div>
          {/* Follow us */}
          <div className="hidden h-full w-full text-right drop-shadow-[0_4px_16px_rgba(0,0,0,1)] lg:flex lg:items-center lg:justify-end">
            <p>
              FOLLOW US <span>@RAZE_SOCIETY</span>
            </p>
          </div>
        </div>
        {/* Bottom Line */}
        <div className="absolute bottom-0 left-1/2 -ml-[calc(30px/2)] h-[1px] w-[95%] -translate-x-1/2 bg-raze-beige"></div>
      </div>
    </>
  );
};

export default Header;
