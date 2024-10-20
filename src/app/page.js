import React from "react";
import FloatingLogo from "@/components/FloatingLogo";
import TopicsSlider from "@/components/TopicsSlider";
import PostCardsLarge from "@/components/PostCardsLarge";
import PostCardsMedium from "@/components/PostCardsMedium";
import PostCardsSmall from "@/components/PostCardsSmall";
import GetTopics from "@/api/GetTopics";
import GetPostsHome from "@/api/GetPostsHome";

export default async function HomePage() {
  // 1. Gather -- API Response
  const [topicsListApiResponse, postsListApiResponse] = await Promise.all([GetTopics(), GetPostsHome()]);
  const topicsList = topicsListApiResponse.status == "pass" ? topicsListApiResponse.data : [];
  const postsList = postsListApiResponse.status == "pass" ? postsListApiResponse.data : {};
  const featuredPostsList = postsList?.is_featured;
  const popularPostsList = postsList?.is_popular;
  const recommendedPostsList = postsList?.is_recommended;

  // 2. Handle -- Errors
  if (Object.keys(postsList).length === 0 || topicsList.length === 0 || !featuredPostsList || !popularPostsList || !recommendedPostsList) {
    throw new Error("Error: TopicsList or PostsList API ran out of Juice");
  }
  return (
    <>
      <header>
        <FloatingLogo />
        <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6">
          <h1 className="font-sans font-black text-3xl md:text-5xl leading-tight">Simplifying Work to Elevate living</h1>
          <p className="font-serif font-normal text-xl mt-4">Choose a topic you love and dive right in!</p>
        </section>
        <TopicsSlider topicsList={topicsList} />
      </header>
      <main className="flex-grow">
        <header></header>
        <section className="flex flex-col">
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Featured for you</p>
          </div>
          <PostCardsLarge postsList={featuredPostsList} />
        </section>
        <section>
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Popular Now</p>
          </div>
          <PostCardsMedium postsList={popularPostsList} />
        </section>
        <section>
          <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10 lg:w-3/6">
            <p className="font-sans font-extrabold text-xl lg:text-2xl">Recommended</p>
          </div>
          <PostCardsMedium postsList={recommendedPostsList} />
        </section>
      </main>
    </>
  );
}
