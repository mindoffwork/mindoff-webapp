import React from "react";
import TopicsSlider from "@/components/topics/TopicsSlider";
import GetTopicsList from "@/api/GetTopicsList";
import PostCardsMedium from "@/components/postcards/PostCardsMedium";
import { ButtonUnderlined } from "@/components/ButtonUnderlined";
import GetTopicwisePostList from "@/api/GetTopicwisePostList";

export default async function TopicPage(topic_slug) {
  // API Calls
  const topicsListApiResponse = await GetTopicsList();
  const postsListApiResponse = await GetTopicwisePostList(
    topic_slug.params.topic_slug
  );

  // Topics List
  const topicsList =
    topicsListApiResponse.status == "pass" ? topicsListApiResponse.data : [];
  const currentTopicObject = topicsList.find(
    (topic) => topic.link === topic_slug.params.topic_slug
  );

  // Post List
  let postsList =
    postsListApiResponse.status == "pass" ? postsListApiResponse.data : [];
  const sortPostList = (data) => {
    const latest = [...data].sort(
      (a, b) => new Date(b.created_on) - new Date(a.created_on)
    );
    const oldest = [...data].sort(
      (a, b) => new Date(a.created_on) - new Date(b.created_on)
    );
    const alphabet = [...data].sort((a, b) => a.name.localeCompare(b.name));
    return { latest, oldest, alphabet };
  };

  // Use the function to get sorted data
  const sortedData = sortPostList(postsList);
  postsList =
    topic_slug.searchParams.sort == "Latest"
      ? sortedData.latest
      : topic_slug.searchParams.sort == "Oldest"
      ? sortedData.oldest
      : topic_slug.searchParams.sort == "Alphabet"
      ? sortedData.alphabet
      : sortedData.latest;

  return (
    <main>
      <section>
        <TopicsSlider
          topics__listobj={topicsList}
          current_topic={topic_slug.params.topic_slug}
        />
      </section>
      <section className="px-5 md:px-10 lg:px-14 py-12 md:py-14 lg:w-3/6">
        <header>
          <h1 className="font-sans font-black text-3xl mb-4">
            {currentTopicObject.name}
          </h1>
        </header>
        <p className="font-sans text-md leading-6 font-medium -tracking-normal mb-6">
          {currentTopicObject.description}
        </p>
        <aside className="flex items-center space-x-4" aria-label="Sort Posts">
          <span className="font-serif italic">Sort by:</span>
          <ButtonUnderlined
            content={"Latest"}
            is_selected={
              !topic_slug.searchParams.sort ||
              topic_slug.searchParams.sort === "Latest"
            }
          />
          <ButtonUnderlined
            content={"Oldest"}
            is_selected={topic_slug.searchParams.sort === "Oldest"}
          />
          <ButtonUnderlined
            content={"Alphabet"}
            is_selected={topic_slug.searchParams.sort === "Alphabet"}
          />
        </aside>
      </section>

      <section aria-label="Posts Section">
        <PostCardsMedium postsList={postsList} />
      </section>
    </main>
  );
}
