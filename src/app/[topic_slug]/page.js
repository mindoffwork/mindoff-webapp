import React, { Suspense } from "react";
import CardsOneTwo from "@/components/cards/CardsOneTwo";
import CardsOneTwoSkeleton from "@/components/cards/CardsOneTwoSkeleton";
import SortOptions from "@/components/buttons/SortOptions";
import { notFound } from "next/navigation";
import ApiCaller from "@/components/ApiCaller";

export default async function TopicPage(topic_slug) {
  const topicSlug = topic_slug.params.topic_slug;
  const sortQuery = topic_slug.searchParams.sort;

  // 2. Gather -- API Response
  const topicsList = await ApiCaller("GetTopics");
  const currentTopicObject = topicsList.find((topic) => topic.link === topicSlug);

  // 2. Handle -- Errors
  if (topicsList.length === 0) {
    throw new Error("Error: TopicsList or PostsList API ran out of Juice");
  }
  if (!currentTopicObject) {
    notFound();
  }

  return (
    <>
      <main className="flex-grow">
        <header aria-labelledby="topic-header">
          <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6">
            <h1 className="font-sans font-black text-3xl mb-4" id="topic-header">
              {currentTopicObject.name}
            </h1>
            <p className="font-serif font-normal text-xl">{currentTopicObject.description}</p>
            <SortOptions sortQuery={sortQuery} />
          </section>
        </header>
        <section aria-label="Posts Section">
          <Suspense fallback={<CardsOneTwoSkeleton />}>
            <CardsOneTwo apiName={"GetPostsTopicwise"} formatName={topicSlug} sortBy={sortQuery} />
          </Suspense>
        </section>
      </main>
    </>
  );
}
