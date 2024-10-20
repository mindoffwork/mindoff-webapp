import React from "react";
import TopicsSlider from "@/components/TopicsSlider";
import PostCardsMedium from "@/components/PostCardsMedium";
import SortOptions from "@/components/SortOptions";
import GetTopics from "@/api/GetTopics";
import GetPostsTopicwise from "@/api/GetPostsTopicwise";
import FloatingLogo from "@/components/FloatingLogo";
import { notFound } from "next/navigation";

export default async function TopicPage(topic_slug) {
  // 1. Gather -- Slugs & Passed Down Data
  const currentSlug = topic_slug.params.topic_slug;
  const sortSlug = topic_slug.searchParams.sort;

  // 2. Gather -- API Response
  const [topicsListApiResponse, postsListApiResponse] = await Promise.all([GetTopics(), GetPostsTopicwise(currentSlug)]);
  const topicsList = topicsListApiResponse?.status === "pass" ? topicsListApiResponse?.data : [];
  let postsList = postsListApiResponse?.status === "pass" ? postsListApiResponse?.data : [];
  const currentTopicObject = topicsList.find((topic) => topic.link === currentSlug);

  // 3. Handle -- Errors
  if (topicsList.length === 0) {
    throw new Error("Error: TopicsList or PostsList API ran out of Juice");
  }
  if (!currentTopicObject) {
    notFound();
  }

  // 4. Process -- Sorting Posts
  const sortOptions = [
    { id: 1, name: "Latest" },
    { id: 2, name: "Oldest" },
    { id: 3, name: "Alphabet" },
  ];
  const sortBy = sortSlug || "Latest";
  postsList = [...postsList].sort((a, b) => {
    if (sortBy === "Oldest") return new Date(a.created_on) - new Date(b.created_on);
    if (sortBy === "Alphabet") return a.name.localeCompare(b.name);
    return new Date(b.created_on) - new Date(a.created_on);
  });

  return (
    <>
      <main className="flex-grow">
        <header aria-labelledby="topic-header">
          <TopicsSlider topicsList={topicsList} currentTopic={currentSlug} />
          <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6">
            <h1 className="font-sans font-black text-3xl mb-4">{currentTopicObject.name}</h1>
            <p className="font-serif font-normal text-xl">{currentTopicObject.description}</p>
            {postsList.length > 0 && <SortOptions contentList={sortOptions} currentOption={sortSlug} />}
          </section>
        </header>

        <section aria-label="Posts Section">
          {postsList.length > 0 ? (
            <PostCardsMedium postsList={postsList} />
          ) : (
            <div className="p-16 border-black border-y-2px md:border-y-3px" aria-labelledby="no-posts-message" aria-live="polite">
              <div className="md:3/4 lg:w-2/4 mx-auto text-center">
                <span className="block material-symbols-outlined" aria-hidden="true">
                  sentiment_very_dissatisfied
                </span>
                <p className="block font-serif font-extrabold text-xl" id="no-posts-message">
                  <span>No Posts here for now!</span>
                  <span className="block font-normal text-lg pt-2">Check back later for some fresh content.</span>
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
