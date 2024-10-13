"use server";
import React from "react";
import Image from "next/image";
import ButtonLink from "@/components/buttons/ButtonLink";
import TopicsSlider from "@/components/topics/TopicsSlider";
import PostCardsMedium from "@/components/postcards/PostCardsMedium";
import GetTopics from "@/api/GetTopics";
import GetPostHtml from "@/api/GetPostHtml";
import GetPostJson from "@/api/GetPostJson";
import GetPostsTopicwise from "@/api/GetPostsTopicwise";
import FloatingLogo from "@/components/FloatingLogo";
import { notFound } from "next/navigation";

export default async function PostPage(post_slug) {
  // Slugs
  const currentSlug = post_slug.params.post_slug
  const topicSlug = post_slug.params.topic_slug

  // API Calls
  const [topicsListApiResponse, postHtmlApiResponse, postObjApiResponse, postsListApiResponse] = await Promise.all([GetTopics(), GetPostHtml(currentSlug), GetPostJson(currentSlug), GetPostsTopicwise("design")]);

  // API Data Extraction
  const topicsList = topicsListApiResponse?.status === "pass" ? topicsListApiResponse?.data : [];
  const postsList = postsListApiResponse?.status === "pass" ? postsListApiResponse?.data : [];
  const postHtml = postHtmlApiResponse?.status === "pass" ? postHtmlApiResponse?.data : null;
  const postObj = postObjApiResponse?.status === "pass" ? postObjApiResponse?.data : null;

  // Check -- isPageExist
  if (!postHtml || !postObj) {
    notFound();
  } else if (postObj.topic !== topicSlug) {
    notFound();
  }

  return (
    <>
      <header>
        <FloatingLogo />
        <TopicsSlider topicsList={topicsList} currentTopic={"design"} />
      </header>

      <main>
        <article className="flex flex-col lg:flex-row min-h-screen border-black border-b-2px md:border-b-3px">
          <section className="lg:w-4/12 max-h-screen lg:sticky lg:top-0">
            <div
              className="flex flex-col justify-center p-4 border-black border-b-2px md:border-b-3px lg:border-b-0 lg:border-r-3px h-full overflow-auto"
              style={{ backgroundColor: "#7ec4a1" }}
            >
              <figure className=" aspect-w-1 aspect-h-1 flex-shrink-0 mx-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/mindoffwork/illustrate-ions@root/cardtoon-style-3d-minimalistic-retro-style-app-inside-a-phone-surrounded-by-minimalists-objects-with-green-background.jpeg"
                  alt="image alt"
                  width={500}
                  height={500}
                  className="w-full h-full max-w-full object-scale-down"
                />
                <figcaption className="sr-only">image alt</figcaption>
              </figure>
            </div>
          </section>

          <section className="lg:w-8/12">
            <div className="py-10 md:py-16 border-black border-b-2px md:border-b-3px">
              <header className="w-10/12 mx-auto my-6">
                <h1 className="font-sans font-black text-4xl md:text-5xl leading-tight">Crafting the Perfect Outdoor Space: Nature Meets Design</h1>

                <div className="flex flex-wrap gap-5 pt-10 pb-2">
                  <div className="flex items-center opacity-50">
                    <span className="material-symbols-outlined text-base mr-2 " aria-hidden="true">
                      edit_calendar
                    </span>
                    <time className="font-serif italic font-bold text-nowrap" dateTime="2024-06-26">
                      June 26, 2024
                    </time>
                  </div>
                  <div className="flex items-center opacity-50">
                    <span className="material-symbols-outlined text-base mr-2" aria-hidden="true">
                      timer
                    </span>
                    <span className="font-serif italic font-bold text-nowrap">2 Minutes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-base mr-2 opacity-50" aria-hidden="true">
                      topic
                    </span>
                    <ButtonLink tag="a" href="/topic/design" content={"Design"} />
                  </div>
                </div>

                <p className="font-serif font-normal text-xl mt-6">
                  Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem
                  ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus
                  laoreet metus, at cursus leo est vel tellus. Sed ac posuere est.
                </p>
              </header>
            </div>

            <section className="w-10/12 mx-auto py-16 content">
              <div dangerouslySetInnerHTML={{ __html: postHtml }} />
            </section>
          </section>
        </article>

        <aside>
          <section className="border-black border-b-0 md:border-b-3px">
            <h4 className="px-5 md:px-8 lg:px-10 py-7 md:py-8 lg:py-8 font-sans font-extrabold text-xl lg:text-2xl">More to Read</h4>
          </section>
          <section className="-mt-2px md:-mt-3px">
            <PostCardsMedium postsList={postsList} />
          </section>
        </aside>
      </main>
    </>
  );
}
