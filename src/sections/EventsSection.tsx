import EventCard from "@/components/EventCard";
import { NextPage } from "next";
import Image from "next/image";

const Events: Array<EventCard> = [
  {
    id: "czn7x9",
    icon: "english",
    title: "ENGLISH LITERATURE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Morbi tristique senectus et netus et malesuada. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.  ",
    image: "",
    date: "19 MAY 23",
    time: "21:30 PM",
    location: "UNDISCLOSED",
    ticketsLeft: 112,
  },
  {
    id: "xz23904",
    icon: "gaming",
    title: "GAMING TOURNAMENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Morbi tristique senectus et netus et malesuada. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.  ",
    image: "",
    date: "16 MAY 23",
    time: "19:30 PM",
    location: "UNDISCLOSED",
    ticketsLeft: 30,
  },
];

const EventsSection: NextPage = () => {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-around bg-[#121211] py-[5%] xl:h-screen xl:py-0">
      {/* Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full">
        <Image
          src="/images/EventSectionBG.png"
          width={2880}
          height={2048}
          alt="event section background"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="inter mb-8 text-5xl font-extrabold uppercase text-white">
          Events
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-[35px] xl:grid-cols-3">
        <EventCard ticket={Events[0] as EventCard} />
        <EventCard ticket={Events[1] as EventCard} />
        <h1 className="inter my-auto text-center text-3xl font-bold uppercase text-white">
          MORE COMING SOON
        </h1>
      </div>
      <div className="inter mb-10 mt-4 text-center text-xs font-bold uppercase text-white text-opacity-[35%] xl:mb-0 xl:mt-0">
        dates, rates and tickets may change, Subscribe to our{" "}
        <span className="text-[#FC5858] text-opacity-[35%]">Newsletter</span> to
        stay updated!
      </div>
    </div>
  );
};

export default EventsSection;
