const ArrowKey = () => {
  return (
    <>
      <div className="absolute bottom-40  w-screen ">
        <div className="flex w-full justify-center ">
          <div className="group flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-beige duration-300 hover:translate-y-2">
            <div className="absolute -top-1 left-0 h-1/4 w-full overflow-hidden rounded-full bg-white bg-opacity-0 blur-sm duration-300 group-hover:bg-opacity-50"></div>
            <div className="absolute -bottom-1 left-0 z-10 h-1/4 w-full overflow-hidden rounded-full bg-black bg-opacity-0 blur-sm duration-300 group-hover:bg-opacity-30"></div>
            <div className="duration-300 group-hover:translate-y-2">
              <div className="z-20 h-8 w-[2px] bg-white duration-300 group-hover:h-6 "></div>
              <div className="absolute h-4 w-4 -translate-x-[7px] -translate-y-[17px] rotate-45 border-b-2 border-r-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArrowKey;
