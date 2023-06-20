import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import GamingTitle from "@/components/GamingTitle";

const GamingSection: NextPage = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [inView, setInView] = useState(false);
  const [inGame, setInGame] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Check if this section is in view
  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      const rect = section
        ? section.getBoundingClientRect()
        : { top: 0, bottom: 0 };
      const isInView = Math.abs(rect.top) <= 140;
      setInView(isInView);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const updateViewportDimensions = () => {
        setViewportWidth(window.innerWidth);
        setViewportHeight(window.innerHeight);
      };

      function handleKeyDown(event: KeyboardEvent) {
        if (event.code === "Space" && inView) {
          event.preventDefault();
          // Do something when space bar is pressed
          console.log("Space bar pressed");
          setInGame(true);
        }
      }
      // Get viewport height and width
      updateViewportDimensions();
      window.addEventListener("resize", updateViewportDimensions);

      // Listen for keypress
      document.addEventListener("keydown", handleKeyDown);

      // As soon as we're out of view, stop the game
      !inView && setInGame(false);

      console.log("inview", inView);

      return () => {
        window.removeEventListener("resize", updateViewportDimensions);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [inView]);

  return (
    <div
      className="relative h-screen w-full bg-[#0D0D0D]"
      ref={sectionRef}
      id="taptoplay"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-full w-full">
        {/* Top Border */}
        <div className="absolute left-0 top-0 h-fit w-full">
          <PixelatedBorder viewportWidth={viewportWidth} />
        </div>

        {/* Grid Background */}
        <GridBackground
          viewportHeight={viewportHeight}
          viewportWidth={viewportWidth}
        />

        {/* Game */}
        {inGame && (
          <Script type="text/javascript" src="./brick-breaker/game.js" />
        )}
        {inGame && <BrickBreaker />}

        {/* Icons */}
        {!inGame && <GamingIcons />}

        {/* Title */}
        {!inGame && (
          <div className="z-20 flex h-screen w-full items-center justify-center">
            <GamingTitle />
            <div className="relative hidden sm:block">
              <Image
                src="/images/skull.png"
                width={432}
                height={454}
                alt="gaming skull"
              />
              <div className="absolute -top-[55%] left-1/2 -ml-[5px] h-[250px] w-[7px] bg-raze-green"></div>
            </div>
          </div>
        )}

        {/* Press Space to Play */}
        {!inGame && (
          <div className="absolute left-0 top-0 hidden h-screen w-full items-center justify-center sm:flex">
            <p className="pp z-20 mt-[420px] text-6xl font-normal text-raze-green">
              Press Space to Play
            </p>
          </div>
        )}

        {/* Press Space to Play */}
        {!inGame && (
          <div
            className="absolute left-0 top-0 flex h-screen w-full items-center justify-center sm:hidden"
            onClick={() => setInGame(true)}
          >
            <p className="pp z-20 mt-[180px] text-3xl font-normal text-raze-green sm:mt-[420px] md:text-6xl">
              Tap Here to Play
            </p>
          </div>
        )}

        {/* Description */}
        {!inGame && (
          <div className="absolute bottom-20 left-0 flex justify-center sm:bottom-32">
            <p className="inter w-[90%] text-center text-sm font-semibold uppercase text-white sm:text-base ">
              Whether you&apos;re a seasoned pro or just starting out,
              we&apos;ve got thrilling tournaments and events that will keep you
              on the edge of your seat. From nail-biting e-sports competitions
              to casual game nights with friends, our community is all about
              having fun and connecting with like-minded gamers.
            </p>
          </div>
        )}

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full">
          <PixelatedBorder viewportWidth={viewportWidth} flipped />
        </div>
      </div>
    </div>
  );
};

export default GamingSection;

const BrickBreaker: NextPage = () => {
  return (
    <div className="absolute flex h-full w-full items-center justify-center  overflow-hidden">
      <div className="relative aspect-[3/4.5] w-[100vw] bg-opacity-5 md:aspect-[4/3] md:w-[100vw] lg:aspect-[4/2.25] lg:w-[100vw] xxl:w-[140vh]">
        <div className="absolute z-50 h-full w-full" id="brick-breaker">
          <svg
            id="svgRoot"
            height="100%"
            width="100%"
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full scale-y-[-1] border-x-2 border-dashed"
          >
            {/* SUBMISSIVE BALL QUEEN, BREAKER OF BRICKS */}
            <circle cx="180" cy="25" r="10" id="ball" fill="white" />
            {/* THE HOLY BOUNCY LOG THE THIRD OF HIS NAME BOUNCER OF BALLS, DOMINANT KING, SPANKER OF HIS QUEEN, HE MAY COME FORTH*/}
            <rect
              id="pad"
              height="15px"
              width="150px"
              fill="#52FA9B"
              x="100"
              y="0"
              rx="4"
              ry="4"
            />
            <text
              id="levelText"
              x="50"
              fill="white"
              fontSize="24"
              transform="scale(1,-1)"
              className="text-xl sm:text-2xl"
            >
              Level 1
            </text>
            <text
              id="discountText"
              x="0"
              fill="white"
              fontSize="24"
              transform="scale(1,-1)"
              className="text-right text-xl sm:text-2xl"
            >
              0% Discount
            </text>
          </svg>
          <div
            className="absolute ml-2 hidden h-full w-[calc(100%-20px)] backdrop-blur-sm"
            id="game-over"
          >
            <div className="absolute left-1/2 top-1/2 z-10  -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-6xl font-bold text-white sm:text-9xl">
              Game Over!
              <p className="mt-4 text-center text-2xl">
                Press Space to play again!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GamingIcons: NextPage = () => {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      {/* Smiley Bubble Icon */}
      <Image
        src="/images/gaming/smileybubble.png"
        width={87}
        height={80}
        className="absolute left-[8%] top-40"
        alt=""
      />
      <Image
        src={"/images/gaming/arrow1.png"}
        width={87}
        height={114}
        className="absolute right-[21%] top-[326px]"
        alt=""
      />
      <Image
        src={"/images/gaming/arrow2.png"}
        width={82}
        height={66}
        className="absolute right-[44%] top-52 -rotate-180"
        alt=""
      />
      <Image
        src={"/images/gaming/arrow3.png"}
        width={87}
        height={114}
        className="absolute right-[4%] top-36 "
        alt=""
      />
      <Image
        src={"/images/gaming/wifi.png"}
        width={48}
        height={52}
        className="absolute left-[30%] top-40 "
        alt=""
      />
      <Image
        src={"/images/gaming/wifi.png"}
        width={48}
        height={52}
        className="absolute bottom-[251px] left-[23.5%] "
        alt=""
      />
      <Image
        src={"/images/gaming/arrow5.png"}
        width={81}
        height={82}
        className="absolute left-[1.5%] top-[380px] hidden sm:block"
        alt=""
      />
      <Image
        src={"/images/gaming/pointer.png"}
        width={85}
        height={77}
        className="absolute right-[27%] top-[150px] "
        alt=""
      />
      <Image
        src={"/images/gaming/textbubble.png"}
        width={76}
        height={82}
        className="absolute bottom-[375px] left-[4%] hidden sm:block"
        alt=""
      />
      <Image
        src={"/images/gaming/arrow4.png"}
        width={43}
        height={69}
        className="absolute bottom-[215px] left-[13%] "
        alt=""
      />
      <Image
        src={"/images/gaming/heartbubble.png"}
        width={83}
        height={86}
        className="absolute bottom-[197px] right-[24%] "
        alt=""
      />
      <Image
        src={"/images/gaming/refresh.png"}
        width={46}
        height={56}
        className="absolute bottom-[200px] right-[11%] "
        alt=""
      />
    </div>
  );
};

interface GridBackgroundProps {
  viewportWidth: number;
  viewportHeight: number;
}

const GridBackground: NextPage<GridBackgroundProps> = ({
  viewportWidth,
  viewportHeight,
}) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      {/* Vertical Lines */}
      <div className="absolute flex h-full w-full justify-between">
        {[...Array<number>(Math.floor(viewportWidth / 163))].map((_, index) => (
          <div
            className="h-full w-[1px] bg-white bg-opacity-5"
            key={index}
          ></div>
        ))}
      </div>
      {/* Horizontal Lines */}
      <div className="absolute flex h-full w-full flex-col justify-between">
        {[...Array<number>(Math.floor(viewportHeight / 163))].map(
          (_, index) => (
            <div
              className="h-[1px] w-full bg-white bg-opacity-5"
              key={index}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

interface PixerlatedBorderProps {
  viewportWidth: number;
  flipped?: boolean;
}

const PixelatedBorder: NextPage<PixerlatedBorderProps> = ({
  viewportWidth,
  flipped = false,
}) => {
  return (
    <div>
      <div
        className="flex justify-between"
        style={{ rotate: flipped ? "180deg" : "0deg" }}
      >
        {[...Array<number>(Math.floor(viewportWidth / 160))].map((_, index) => (
          <FloatingPixels key={index} />
        ))}
      </div>
      {!flipped && (
        <div className="-mt-[1px] h-[16px] w-full bg-raze-green"></div>
      )}
    </div>
  );
};

const FloatingPixels: NextPage = () => {
  return (
    <div className="h-[73px] w-[calc(9*16px+3px)]">
      <div className="flex w-full justify-between">
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
      </div>
      <div className="mx-auto h-[16px] w-[16px] bg-raze-green"></div>
      <div className="mt-2 flex w-full justify-between px-[16px]">
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
      </div>
      <div className="flex w-full justify-between px-[32px]">
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
        <div className="h-[16px] w-[16px] bg-raze-green"></div>
      </div>
    </div>
  );
};
