import React, { Suspense } from "react";
import CardsThree from "@/components/cards/CardsThree";
import CardsThreeSkeleton from "@/components/cards/CardsThreeSkeleton";
import CardsOne from "@/components/cards/CardsOne";
import CardsOneTwoSkeleton from "@/components/cards/CardsOneTwoSkeleton";
import CardsFour from "@/components/cards/CardsFour";

export default async function HomePage() {
  // 2. Handle -- Errors
  // if (Object.keys(postsList).length === 0 || topicsList.length === 0 || !featuredPostsList || !popularPostsList || !recommendedPostsList) {
  //   throw new Error("Error: TopicsList or PostsList API ran out of Juice");
  // }

  return (
    <>
      <main className="flex-grow">
        <header>
          <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6 ">
            <h1 className="font-sans font-black text-3xl md:text-5xl leading-tight mb-4">Simplifying Work to Elevate living</h1>
            <p className="sr-only">My Culmination of wisdom for creative minds around the world to learn, explore and prosper.</p>
            <span className="font-serif font-normal text-xl ">Choose a topic you love and dive right in!</span>
          </section>
        </header>

        <section className="flex flex-col">
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Featured for You</p>
          </div>
          <Suspense fallback={<CardsOneTwoSkeleton />}>
            <CardsOne apiName={"GetPostsExpo"} formatName={"featured"} />
          </Suspense>
        </section>
        <section>
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Popular Now</p>
          </div>
          <Suspense fallback={<CardsThreeSkeleton />}>
            <CardsThree apiName={"GetPostsExpo"} formatName={"popular"} />
          </Suspense>
        </section>
        <section>
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Recommended by MindOff</p>
          </div>
          <Suspense fallback={<CardsOneTwoSkeleton />}>
            <CardsFour apiName={"GetPostsExpo"} formatName={"recommended"} />
          </Suspense>
        </section>
      </main>
    </>
  );
}
