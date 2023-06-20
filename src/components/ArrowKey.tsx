import Link from "next/link";

const ArrowKey = () => {
  return (
    <>
      <div className="absolute bottom-40 w-screen ">
        <div className="flex w-full justify-center ">
          <Link href="#events" scroll={false}>
            <div className="group flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-raze-beige duration-300 hover:translate-y-2 hover:cursor-pointer">
              <div className="absolute -top-1 left-0 h-1/4 w-full overflow-hidden rounded-full bg-white bg-opacity-0 blur-sm duration-300 group-hover:bg-opacity-40"></div>
              <div className="absolute -bottom-1 left-0 z-10 h-1/4 w-full overflow-hidden rounded-full bg-black bg-opacity-0 blur-sm duration-300 group-hover:bg-opacity-20 "></div>
              <div className="duration-300 group-hover:translate-y-2 ">
                <div className="z-20 h-8 w-[2.5px] bg-raze-brown duration-300 group-hover:h-6 "></div>
                <div className="absolute h-4 w-4 -translate-x-[6.5px] -translate-y-[17px] rotate-45 border-b-[2.5px] border-r-[2.5px] border-raze-brown"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArrowKey;
