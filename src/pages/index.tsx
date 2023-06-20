import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Store from "@/components/Store";
import EnglishSection from "@/sections/EnglishSection";
import GamingSection from "@/sections/GamingSection";
// import GamingSection from "@/sections/GamingSection";
import HeroSection from "@/sections/HeroSection";
import WomenEmporowement from "@/sections/WomenEmporowement";
import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicEventsSection = dynamic(() => import("@/sections/EventsSection"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Raze Society - English Community</title>
        <meta
          name="description"
          content="The Language Is Our Common Bond And The Fun Never Stops. Whether You're A Grammar Guru, A Vocab Virtuoso, Or Just A Lover Of All Things English, We've Got Something For You. Our Sub-communities Cater To All Interests, From The Hardcore Gamers Who Dominate The Leaderboards, To The Bookworms Who Devour Literature Faster Than A Speeding Bullet. From Literary Luncheons To Movie Marathons, Gaming Tournaments To Women's Empowerment Workshops, We're Always Finding New Ways To Showcase Our Passions And Connect With Each Other. So Grab A Cuppa, Kick Back, And Join Us On This Wild And Wacky Ride. Together, We'll Create A Community That's Chock-full Of Good Times, Great Memories, And Of Course, Plenty Of Puns Along The Way!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-black">
        <HeroSection />
        <DynamicEventsSection />
        <EnglishSection />
        <GamingSection />
        <WomenEmporowement />
        <Store />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default Home;
