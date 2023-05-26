import { NextPage } from "next";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

interface EventCardProps {
  ticket: EventCard;
}

const EventCard: NextPage<EventCardProps> = ({ ticket }) => {
  const barcodeContainerRef = useRef<HTMLDivElement>(null);
  const barcodeTextRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const container = barcodeContainerRef.current;
    const text = barcodeTextRef.current;

    const handleResize = () => {
      if (container && text) {
        const containerWidth = container.offsetWidth;
        const textWidth = text.offsetWidth;
        const scaleFactor = containerWidth / textWidth;
        text.style.transform = `scale(${scaleFactor}, 1.35)`;
      }
    };

    setTimeout(handleResize, 100);
    handleResize(); // Initial sizing

    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <>
      <div className="inter flex flex-col items-center justify-center text-6xl font-extrabold uppercase ">
        <div className="relative z-[10] flex h-[577px] w-[382px] flex-col items-center justify-center ">
          {/* Background */}
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full">
            <Image
              src="/images/EventCardBG.png"
              width={382}
              height={577}
              alt="Event Card Background Image"
            />
          </div>
          {/* Barcode + Event ID */}
          <div
            ref={barcodeContainerRef}
            className="relative mt-2 flex h-[103px] w-[90%] flex-col items-center align-middle"
          >
            <div className="barcode text-[80px]">
              <p
                ref={barcodeTextRef}
                className="mt-9 flex scale-y-[1.35] text-justify leading-[30px]"
              >
                {ticket.id}
              </p>
            </div>
            <div className="mt-[2px] flex w-full flex-col items-start justify-start text-[15px] font-semibold uppercase text-white">
              <h5>EVENT: #{ticket.id}</h5>
            </div>
          </div>
          {/* Dashed Line */}
          <div className="dashed-line -mt-2 mb-[10px] mr-1 h-[2px] w-[90%] opacity-70"></div>
          {/* Title and Description */}
          <div className="mt-4 flex w-[90%] flex-col justify-center font-medium text-white">
            {/* Title and Icon */}
            <div className="flex items-center ">
              <div className="flex h-6 w-8 items-center ">
                <Image
                  src={
                    ticket.icon === "english"
                      ? "/images/flag.png"
                      : "/images/controller.png"
                  }
                  width={24}
                  height={20}
                  className="brightness-200 contrast-200 invert"
                  alt=""
                />
              </div>
              <p className="text-[22px] font-bold uppercase">{ticket.title}</p>
            </div>
            {/* Event Description */}
            <p className="h-24 pt-2 text-[10px] font-normal leading-3">
              {ticket.description}
            </p>
            {/* Event Image */}
            <div className="mb-3 h-[215px] bg-white"></div>
            {/* Section Line */}
            <div className="h-[1px] w-full bg-white"></div>
            {/* Date Location Tickets */}
            <div className="mb-1 mt-4 flex h-[63] w-[335] items-center justify-between text-center text-xs">
              <div>
                <p className="uppercase">{ticket.date}</p>
                <p className="mt-[10px] text-[15px] font-bold uppercase">
                  {ticket.time}
                </p>
              </div>
              <div>
                <p>LOCATION</p>
                <p className="mt-[10px] text-[15px] font-bold uppercase">
                  {ticket.location}
                </p>
              </div>
              <div>
                <p>TICKETS LEFT</p>
                <p className="mt-[10px] text-[15px] font-bold uppercase">
                  {ticket.ticketsLeft} Tickets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
