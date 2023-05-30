import { type NextPage } from "next";
import Image from "next/image";

const EnglishSection: NextPage = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#0D0D0D] px-[3%]">
      {/* City Ornament */}
      <p className="inter mt-[45px] text-sm font-bold uppercase text-white opacity-60">
        Annaba, Algeria
      </p>

      {/* Background Text + Picture + Star */}
      <div className="relative w-full">
        {/* Picture + Star */}
        <div className="absolute left-1/2 top-2 hidden aspect-square w-[390px] -translate-x-1/2 sm:left-auto sm:right-0 sm:top-auto sm:block sm:w-[454px] sm:translate-x-0 xl:w-[550px] xxxl:right-[7%]">
          <Image
            src="/images/Members.png"
            width={454}
            height={454}
            className="h-full w-full"
            alt="Two Members holding books after a meetup"
          />

          <Image
            src="/images/RedStar.svg"
            width={319}
            height={319}
            className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay"
            alt=""
          />
        </div>

        {/* GIANT TEXT */}
        <p className="inter text-stroke-english absolute -left-[210px] top-40 mt-6 rotate-90 text-[200px] font-extrabold uppercase leading-[160px] text-transparent opacity-50 sm:left-0 sm:top-0 sm:rotate-0 sm:text-[235px] sm:leading-[190px] sm:opacity-100 xl:text-[335px] xl:leading-[270px]">
          English <br></br>
          Centric <br></br>
          Society
        </p>
      </div>
      {/* Full Details */}
      <div className="mt-auto h-fit w-full">
        {/* Title */}
        <div className="inter relative mb-4 text-[70px] font-extrabold uppercase text-white sm:text-[140px]">
          <div className="flex ">
            <h1 className="leading-[65px] sm:leading-[130px]">English</h1>
            <div className="-ml-[105px] -mt-8 sm:-ml-[65px]">
              <p className="whitespace-nowrap text-sm font-extrabold uppercase text-raze-red">
                Inspire and be Inspired
              </p>
              <div className="mx-auto mt-2 hidden h-14 w-[2px] bg-raze-red sm:block"></div>
            </div>
          </div>
          <h1 className="text-[57px] leading-[65px] sm:text-[140px] sm:leading-[130px]">
            Community
          </h1>
        </div>
        {/* Description */}
        <p className="inter w-full text-justify text-xs font-medium uppercase text-white sm:text-sm">
          We&apos;re thrilled to have you as part of our community, where the{" "}
          <span className="text-raze-red">language</span> is our common bond and
          the fun never stops. Whether you&apos;re a grammar guru, a vocab
          virtuoso, or just a lover of all things{" "}
          <span className="text-raze-red">English</span>, we&apos;ve got
          something for you. Our sub-communities cater to all interests, from
          the hardcore <span className="text-raze-red">gamers</span> who
          dominate the leaderboards, to the{" "}
          <span className="text-raze-red">bookworms</span> who devour literature
          faster than a speeding bullet. From{" "}
          <span className="text-raze-red">literary</span> luncheons to{" "}
          <span className="text-raze-red">movie</span> marathons,{" "}
          <span className="text-raze-red">gaming</span> tournaments to{" "}
          <span className="text-raze-red">women&apos;s</span> empowerment
          workshops, we&apos;re always finding new ways to showcase our passions
          and connect with each other. So grab a cuppa, kick back, and{" "}
          <span className="text-raze-red">join us</span> on this wild and wacky
          ride. Together, we&apos;ll create a{" "}
          <span className="text-raze-red">community</span> that&apos;s
          chock-full of{" "}
          <span className="text-raze-red">good times, great memories</span>, and
          of course, plenty of <span className="text-raze-red">puns</span> along
          the way!
        </p>
        {/* Star */}
        <div className="my-3 sm:mb-[40px] sm:mt-[20px] ">
          <Image
            src="/images/RedStar.svg"
            width={93}
            height={93}
            className="mx-auto h-[40px] sm:h-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EnglishSection;
