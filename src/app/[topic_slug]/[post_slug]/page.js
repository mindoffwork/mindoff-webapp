"use server";
import React from "react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import TopicsSlider from "@/components/TopicsSlider";
import PostCardsLarge from "@/components/PostCardsLarge";
import PostCardsMedium from "@/components/PostCardsMedium";
import GetTopics from "@/api/GetTopics";
import GetPostBody from "@/api/GetPostBody";
import GetPostHead from "@/api/GetPostHead";
import GetPostsTopicwise from "@/api/GetPostsTopicwise";
import FloatingLogo from "@/components/FloatingLogo";
import BlockText from "@/components/jsonxhtml/BlockText";
import BlockImage from "@/components/jsonxhtml/BlockImage";
import BlockScript from "@/components/jsonxhtml/BlockScript";
import { notFound } from "next/navigation";

export default async function PostPage(post_slug) {
  // 1. Gather -- Slugs & Passed Down Data
  const currentSlug = post_slug.params.post_slug;
  const topicSlug = post_slug.params.topic_slug;

  // 2. Gather -- API Response
  const [topicsListApiResponse, postHeadApiResponse, postBodyApiResponse, postsListApiResponse] = await Promise.all([
    GetTopics(),
    GetPostHead(currentSlug),
    GetPostBody(currentSlug),
    GetPostsTopicwise("design"),
  ]);
  const topicsList = topicsListApiResponse?.status === "pass" ? topicsListApiResponse?.data : [];
  const postHead = postHeadApiResponse?.status === "pass" ? postHeadApiResponse?.data : null;
  const postBody = postBodyApiResponse?.status === "pass" ? postBodyApiResponse?.data : null;
  const postsList = postsListApiResponse?.status === "pass" ? postsListApiResponse?.data : [];
  // 3. Handle -- Errors
  if (topicsList.length === 0 || postsList.length === 0) {
    throw new Error("Error: TopicsList or PostsList API ran out of Juice");
  }
  if (!postBody || !postHead || postHead?.topic !== topicSlug) {
    notFound();
  }

  // 4. Process -- Formatting Date
  const postUpdatedOn = new Date(postHead.updated_on);
  const formattedUpdatedOn = postUpdatedOn.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // 5. Process -- Calculating Reading Time
  // const calculateReadingTime = (content) => {
  //   const words = content.split(/\s+/).filter((word) => word.length > 0);
  //   const wordCount = words.length;
  //   const readingSpeed = 250;
  //   const minutes = Math.ceil(wordCount / readingSpeed);
  //   return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
  // };
  // const postReadingTime = calculateReadingTime(postBody);

  const calculateApproxReadingTime = (jsonArray) => {
    const totalLength = jsonArray.reduce((acc, { content }) => acc + (content?.length || 0), 0);
    return Math.ceil(totalLength / (250 * 5)) + " minutes"; // Approximate reading time
  };

  const postReadingTime = calculateApproxReadingTime(postBody);

  return (
    <>
      <main className="flex-grow">
        <TopicsSlider topicsList={topicsList} currentTopic={topicSlug} />
        <article className="flex flex-col lg:flex-row min-h-screen border-black border-b-2px md:border-b-3px">
          {/* Content Image */}
          <section className="lg:w-4/12 max-h-screen lg:sticky lg:top-0">
            <div
              className="flex flex-col justify-center p-4 border-black border-b-2px md:border-b-3px lg:border-b-0 lg:border-r-3px h-full overflow-auto"
              style={{ backgroundColor: postHead.color }}
            >
              <figure className="aspect-w-1 aspect-h-1 flex-shrink-0 mx-auto">
                <Image
                  src={process.env.ILUSTRATION_URL + postHead.img}
                  alt={postHead.img_alt}
                  width={500}
                  height={500}
                  className="w-full h-full max-w-full object-scale-down"
                />
                <figcaption className="sr-only">{postHead.img_alt}</figcaption>
              </figure>
            </div>
          </section>

          {/* Content Head */}
          <section className="lg:w-8/12">
            <div className="py-10 md:py-16 border-black border-b-2px md:border-b-3px">
              <header className="w-10/12 mx-auto my-6">
                <h1 className="font-sans font-black text-4xl md:text-5xl leading-tight">{postHead.name}</h1>
                <div>
                  <ul className="list-none flex flex-wrap gap-5 pt-10 pb-2">
                    <li className="flex items-center opacity-50">
                      <span className="material-symbols-outlined text-base mr-2 select-none" aria-hidden="true">
                        edit_calendar
                      </span>
                      <time className="font-serif italic font-bold text-nowrap" dateTime={postHead.updated_on}>
                        <span className="sr-only">Last updated on&nbsp;</span>
                        {formattedUpdatedOn}
                      </time>
                    </li>
                    <li className="flex items-center opacity-50">
                      <span className="material-symbols-outlined text-base mr-2 select-none" aria-hidden="true">
                        timer
                      </span>
                      <span className="font-serif italic font-bold text-nowrap">
                        {postReadingTime}
                        <span className="sr-only">&nbsp;Read</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-base mr-2 opacity-50 select-none" aria-hidden="true">
                        account_tree
                      </span>
                      <span className="sr-only">Topic:&nbsp;</span>
                      <ButtonLink link={"/" + postHead.topic} content={postHead.topic} />
                    </li>
                  </ul>
                </div>
                <p className="font-serif font-normal text-xl mt-6">{postHead.description}</p>
              </header>
            </div>

            {/* Content Body */}
            <section className="w-10/12 mx-auto py-16 content" aria-label="Post Content">
              {postBody.map((block, index) =>
                block.name === "text" ? (
                  <BlockText key={index} name={block.name} content={block.content} />
                ) : block.name === "img" ? (
                  <BlockImage key={index} name={block.name} content={block.content} link={block.link} />
                ) : block.name === "script" ? (
                  <BlockScript key={index} name={block.name} content={block.content} link={block.link} />
                ) : null
              )}
            </section>
          </section>
        </article>

        {/* More to Read -- Related */}
        <aside>
          <section>
            <div className="border-black border-b-0 md:border-b-3px">
              <h3 className="px-5 md:px-8 lg:px-10 py-7 md:py-8 lg:py-8 font-sans font-extrabold text-xl lg:text-2xl">
                More from <span className="capitalize">{postHead.topic}</span>
              </h3>
            </div>
            <div className="-mt-2px md:-mt-3px">
              <PostCardsLarge postsList={postsList} />
            </div>
          </section>
          <section>
            <div className="border-black border-b-0 md:border-b-3px">
              <h3 className="px-5 md:px-8 lg:px-10 py-7 md:py-8 lg:py-8 font-sans font-extrabold text-xl lg:text-2xl">Recommended for You</h3>
            </div>
            <div className="-mt-2px md:-mt-3px">
              <PostCardsMedium postsList={postsList} />
            </div>
          </section>
        </aside>
      </main>
    </>
  );
}
