import React from "react";
import FloatingLogo from "@/components/FloatingLogo";
import TopicsSlider from "@/components/topics/TopicsSlider";
import PostCardsLarge from "@/components/postcards/PostCardsLarge";
import GetTopics from "@/api/GetTopics";
import GetPostsHome from "@/api/GetPostsHome";

export default async function HomePage() {
  const [topicsListApiResponse, postsListApiResponse] = await Promise.all([GetTopics(), GetPostsHome()]);
  const topicsList = topicsListApiResponse.status == "pass" ? topicsListApiResponse.data : [];
  return (
    <>
      <header>
        <FloatingLogo />
      </header>
      <main>
        <header>
          <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6">
            <h1 className="font-sans font-black text-3xl md:text-5xl leading-tight">Simplifying Work to Elevate living</h1>
            <p className="font-serif font-normal text-xl mt-4">Choose a topic you love and dive right in!</p>
          </section>
          <TopicsSlider topicsList={topicsList} />
        </header>
        <section>
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Featured for you</p>
          </div>
          <PostCardsLarge />
        </section>
        <section>
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Popular Now</p>
          </div>
        </section>
      </main>
    </>
  );
}
