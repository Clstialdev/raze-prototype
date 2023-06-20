import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        title="Raze Society - English Community"
        description="The Language Is Our Common Bond And The Fun Never Stops. Whether You're A Grammar Guru, A Vocab Virtuoso, Or Just A Lover Of All Things English, We've Got Something For You. Our Sub-communities Cater To All Interests, From The Hardcore Gamers Who Dominate The Leaderboards, To The Bookworms Who Devour Literature Faster Than A Speeding Bullet. From Literary Luncheons To Movie Marathons, Gaming Tournaments To Women's Empowerment Workshops, We're Always Finding New Ways To Showcase Our Passions And Connect With Each Other. So Grab A Cuppa, Kick Back, And Join Us On This Wild And Wacky Ride. Together, We'll Create A Community That's Chock-full Of Good Times, Great Memories, And Of Course, Plenty Of Puns Along The Way!"
        openGraph={{
          type: "website",
          url: "https://razesociety.com",
          title: "Raze Society - English Community",
          description:
            "The Language Is Our Common Bond And The Fun Never Stops. Whether You're A Grammar Guru, A Vocab Virtuoso, Or Just A Lover Of All Things English, We've Got Something For You. Our Sub-communities Cater To All Interests, From The Hardcore Gamers Who Dominate The Leaderboards, To The Bookworms Who Devour Literature Faster Than A Speeding Bullet. From Literary Luncheons To Movie Marathons, Gaming Tournaments To Women's Empowerment Workshops, We're Always Finding New Ways To Showcase Our Passions And Connect With Each Other. So Grab A Cuppa, Kick Back, And Join Us On This Wild And Wacky Ride. Together, We'll Create A Community That's Chock-full Of Good Times, Great Memories, And Of Course, Plenty Of Puns Along The Way!",
          images: [
            {
              url: "/images/newsletterbg2.png",
              alt: "Preview Image",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
