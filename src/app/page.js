import React from "react";
import TopicsSlider from "@/components/topics/TopicsSlider";
import PostCardsLarge from "@/components/postcards/PostCardsLarge";
import GetTopicsList from "@/api/GetTopicsList";

export default async function HomePage() {
  const topicsListApiResponse = await GetTopicsList();
  const topicsList = topicsListApiResponse.status=="pass" ? topicsListApiResponse.data : []
  return (
    <>
    <TopicsSlider topics__listobj={topicsList}/>
    <div>
      <p className="px-5 md:px-8 lg:px-10 py-7 md:py-8 lg:py-10 font-sans font-extrabold text-xl lg:text-3xl">Featured for you</p>
    </div>
    <PostCardsLarge />
    <div>
      <p className="px-5 md:px-8 lg:px-10 py-7 md:py-8 lg:py-10 font-sans font-extrabold text-xl lg:text-3xl">Popular Now</p>
    </div>
    </>
  );
}
