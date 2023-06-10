import EventCard from "@/components/EventCard";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Events: Array<EventCard> = [
  {
    id: "czn7x9",
    icon: "english",
    title: "ENGLISH LITERATURE",
    description:
      "Immerse yourself in the captivating world of literature at our enchanting literary event. Journey through the pages of imagination, where words come alive, and stories unfold. Discover literary treasures, engage in thought-provoking discussions, and celebrate the power of storytelling. Let your imagination soar!  ",
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
      "Get ready for an epic gaming extravaganza that will ignite your competitive spirit! Join us for a thrilling gaming event packed with intense battles, heart-pounding action, and unforgettable moments. Experience the thrill of victory, forge new friendships, and become a legend in the gaming community. Game on!  ",
    image: "",
    date: "16 MAY 23",
    time: "19:30 PM",
    location: "UNDISCLOSED",
    ticketsLeft: 30,
  },
];

const EventsSection: NextPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-around bg-[#121211] py-20 md:py-0">
      {/* Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full">
        <Image
          src="/images/EventSectionBg.png"
          width={2880}
          height={2048}
          alt="event section background"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="inter text-5xl font-extrabold uppercase text-white">
          Events
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[35px]">
        <EventCard ticket={Events[0] as EventCard} />
        <EventCard ticket={Events[1] as EventCard} />
        <h1 className="inter my-auto text-center text-3xl font-bold uppercase text-white">
          MORE COMING SOON
        </h1>
      </div>
      <div className="inter text-xs font-bold uppercase text-white text-opacity-[35%]">
        dates, rates and tickets may change, Subscribe to our{" "}
        <Link href="#newsletter">
          <span className="text-[#FC5858] text-opacity-[35%] duration-200 hover:cursor-pointer hover:underline">
            Newsletter
          </span>
        </Link>{" "}
        to stay updated!
      </div>
    </div>
  );
};

export default EventsSection;
