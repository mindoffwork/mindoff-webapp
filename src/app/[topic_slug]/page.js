import React from "react";
import TopicsSlider from "@/components/topics/TopicsSlider";
import PostCardsMedium from "@/components/postcards/PostCardsMedium";
import { ButtonUnderlined } from "@/components/ButtonUnderlined";
import GetTopics from "@/api/GetTopics";
import GetPostsTopicwise from "@/api/GetPostsTopicwise";
import FloatingLogo from "@/components/FloatingLogo";
import { notFound } from "next/navigation";

export default async function TopicPage(topic_slug) {
  // Slugs
  const currentSlug = topic_slug.params.topic_slug
  const sortSlug = topic_slug.searchParams.sort
  
  // API Calls
  const [topicsListApiResponse, postsListApiResponse] = await Promise.all([GetTopics(), GetPostsTopicwise(currentSlug)]);

  // API Data Extraction
  const topicsList = topicsListApiResponse?.status === "pass" ? topicsListApiResponse?.data : [];
  let postsList = postsListApiResponse?.status === "pass" ? postsListApiResponse?.data : [];
  const currentTopicObject = topicsList.find((topic) => topic.link === currentSlug);
  
  // Check -- isPageExist
  if (!currentTopicObject) {
    notFound();
  }

  // Sorting
  const sortBy = sortSlug || "Latest";
  postsList = [...postsList].sort((a, b) => {
    if (sortBy === "Oldest") return new Date(a.created_on) - new Date(b.created_on);
    if (sortBy === "Alphabet") return a.name.localeCompare(b.name);
    return new Date(b.created_on) - new Date(a.created_on); // Default: Latest
  });

  return (
    <>
      <header>
        <FloatingLogo />
        <TopicsSlider topicsList={topicsList} currentTopic={topic_slug.params.topic_slug} />
      </header>

      <main>
        <header className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6">
          <h1 className="font-sans font-black text-3xl mb-4">{currentTopicObject.name}</h1>
          <p className="font-serif font-normal text-xl">{currentTopicObject.description}</p>
          <aside className="flex items-center space-x-4 mt-5" aria-label="Sort Posts">
            <span className="font-serif italic">Sort by:</span>
            <ButtonUnderlined content={"Latest"} is_selected={!topic_slug.searchParams.sort || topic_slug.searchParams.sort === "Latest"} />
            <ButtonUnderlined content={"Oldest"} is_selected={topic_slug.searchParams.sort === "Oldest"} />
            <ButtonUnderlined content={"Alphabet"} is_selected={topic_slug.searchParams.sort === "Alphabet"} />
          </aside>
        </header>

        <section aria-label="Posts Section">
          <PostCardsMedium postsList={postsList} />
        </section>
      </main>
    </>
  );
}
