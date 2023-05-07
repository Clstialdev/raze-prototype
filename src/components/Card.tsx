import Image from "next/image";
import englishIcon from "./../../../public/images/flag.png";
import heropic from "./../../../public/images/LandingHero.png";
const Card = () => {
  let ticketsLeft = 112;
  let icons = {
    english: "",
    gaming: "",
  };
  let tickets = {
    id: "455ADN45S ",
    icon: "english",
    title: "ENGLISH LITERATURE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Morbi tristique senectus et netus et malesuada. ",
    image: "",
    date: "16 MAY 23",
    time: "21:30",
    location: "UNDISCLOSED",
    ticketsLeft: { ticketsLeft },
  };
  return (
    <>
      <div className="inter flex min-h-screen flex-col items-center justify-center text-6xl font-extrabold uppercase ">
        <div className="flex">
          <div className="flex h-[577px] w-[382px] flex-col items-center justify-center bg-[#817262]">
            <div className=" flex h-[105px] w-[354] flex-col items-center justify-center border-b-2 border-dashed border-b-white align-middle">
              <div className="barcode h-[63px]  w-[340px] ">
                <p className="leading-14 mt-5">{tickets.id}</p>
              </div>
              <div className=" flex w-full flex-col items-start justify-start text-xs font-medium text-white">
                <h5>EVENT: ${tickets.id}</h5>
              </div>
            </div>
            <div className="bg-slate- mt-5 flex w-80  flex-col justify-center font-medium text-white">
              <div className="flex">
                <div className="flex h-6 w-8 items-center ">
                  <Image
                    className="invert"
                    src={
                      tickets.icon === "english"
                        ? "/images/flag.png"
                        : "/images/controller.png"
                    }
                    width={24}
                    height={20}
                    alt=""
                  />
                </div>
                <p className="mb-1 text-base font-semibold">{tickets.title}</p>
              </div>
              <p className="h-24 pt-3 text-[10px] font-normal leading-3">
                {tickets.description}
              </p>
              <Image
                className="mb-3"
                width={347}
                height={215}
                src={heropic}
                alt=""
              />
              <div className="h-[1px] w-[320px] bg-white"></div>
              <div className="flex h-[63] w-[335] items-center justify-between text-center text-xs leading-[2rem]">
                <div className="">
                  <p>{tickets.date}</p>
                  <p>{tickets.time}</p>
                </div>
                <div className="">
                  <p>LOCATION</p>
                  <p>{tickets.location}</p>
                </div>
                <div className="">
                  <p>TICKETS LEFT</p>
                  <p>{ticketsLeft}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
