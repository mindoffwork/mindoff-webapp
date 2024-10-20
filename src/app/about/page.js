import React from "react";
import ButtonLink from "@/components/ButtonLink";
import BlockImage from "@/components/jsonxhtml/BlockImage";
import PostCardsSmall from "@/components/PostCardsSmall";
import PostCardsGithub from "@/components/PostCardsGithub";
import GetPostsHome from "@/api/GetPostsHome";
import GetGithubRepos from "@/api/GetGithubRepos";
import Link from "next/link";

const pageTitle = "About Mindoff";
const pageDescription =
  "MindOff is a Blog to Log my knowledge, wisdom and discoveries. A Place where I share my approach towards a variety of task ranging from organizing to building variety stuff. I started this blog to share my thoughts on applying simplicity to various aspects of work and life.";
const pageSrc = "https://mindoff.dev/images/logo/MindOff_Logo_YellowBgFull.png";
const pageAlt = "Mind Off Logo";

export default async function AboutPage() {
  const [postsListApiResponse, reposListApiResponse] = await Promise.all([GetPostsHome(), GetGithubRepos()]);
  const postsList = postsListApiResponse.status == "pass" ? postsListApiResponse.data : {};
  const reposList = reposListApiResponse.status == "pass" ? reposListApiResponse.data : [];
  const combinedPostsList = postsList?.is_featured.concat(postsList?.is_recommended);

  const getRandomFour = (arr) => {
    const result = new Set();
    while (result.size < 4) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.add(arr[randomIndex]);
    }
    return Array.from(result);
  };
  const aboutPostsList = getRandomFour(combinedPostsList);

  return (
    <main>
      {/*  Header */}
      <header>
        <section className="pt-24 pb-28 w-3/5 mx-auto">
          <div className="content">
            <h1 className="sr-only">{pageTitle}</h1>
            <p className="font-semibold text-2xl ">
              <span className="block font-sans font-black text-3xl md:text-5xl leading-tight mb-4">Hi 👋,</span>
              {pageDescription}
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-8" aria-label="Sort Posts">
            <ButtonLink content={"Email"} link={"#contact"} />
            <ButtonLink content={"Pinterest"} link={"#social"} />
            <ButtonLink content={"Github"} link={"#social"} />
            <ButtonLink content={"Dribbble"} link={"#social"} />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center border-black border-y-2px md:border-y-3px bg-yellow py-32">
          <BlockImage name={"img"} content={"Mind Off Full Logo"} link={"/images/MindOff_Logo_Full.svg"} is_caption={false} />
        </section>
      </header>

      {/*  About Posts */}
      <section>
        <div className="px-5 md:px-10 lg:px-14 py-12 md:py-24 lg:w-3/6">
          <h2 className="font-sans font-black text-3xl mb-4">Simple & Straight Forward Content</h2>
          <p className="font-serif font-normal text-xl">
            Posts focus on clean design, both in content and presentation. Each article is rooted in personal experience, focusing on actionable
            advice. Explore concepts like functionality, aesthetics, and emotional connection.
          </p>
        </div>
        <div>
          <PostCardsSmall postsList={aboutPostsList} typeOfCard={"text"} />
        </div>
      </section>

      {/*  About Illustrations*/}
      <section>
        <div className="px-5 md:px-10 lg:px-14 py-12 md:py-24 lg:w-3/6">
          <h2 className="font-sans font-black text-3xl mb-4">Unique Illustrations & Infographics</h2>
          <p className="font-serif font-normal text-xl mb-5">
            You’ll find unique images, used to enrich the text and offer visual insights and delves into how philosophical ideas shape our
            understanding of design.
          </p>
          <ButtonLink link={process.env.ILUSTRATEION_REPO_URL} content={"ILLUSTRATE-IONS: CARTOONIST IMAGES"} isNewTab={true} />
        </div>
        <div>
          <PostCardsSmall postsList={aboutPostsList} typeOfCard={"img"} />
        </div>
      </section>
      {/*  About Opensource */}
      <section>
        <div className="px-5 md:px-10 lg:px-14 py-12 md:py-24 lg:w-3/6">
          <h2 className="font-sans font-black text-3xl mb-4">Open-source Everything</h2>
          <p className="font-serif font-normal text-xl mb-5">
            Knowledge is shared freely here, with all unique images and many tools on this blog made open-source. This approach supports community
            contribution and ensures that the blog remains accessible to everyone.
          </p>
        </div>
        <div>
          <PostCardsGithub postsList={reposList} />
        </div>
      </section>
      {/*  About Contact & Social */}
      <section id="contact" className="bg-brown border-black borderb-2px md:border-b-3px">
        <div className="px-5 md:px-10 lg:px-14 py-12 md:py-24 lg:w-3/6">
          <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#000000" aria-hidden="true">
            <path d="M479-55q-87.52 0-164.76-33T179-179q-58-58-91-135.45-33-77.44-33-165.5Q55-568 88-645.5q33-77.5 90.84-135.55 57.85-58.06 135.36-91.5Q391.72-906 479.86-906t165.76 33.37q77.62 33.37 135.59 91.29 57.98 57.92 91.39 135.2Q906-568.86 906-481v52.5q0 62.15-45.61 103.82Q814.79-283 751-283q-39.33 0-73.16-18.5Q644-320 627-354q-24 37-63.34 54t-83.35 17q-82.92 0-140.61-56.97Q282-396.93 282-480.48q0-83.55 57.46-141.03Q396.91-679 479.76-679q82.84 0 140.54 57.49Q678-564.02 678-480v45.93q0 28.97 22.07 49.02Q722.13-365 751.48-365q28.91 0 49.71-20.05Q822-405.1 822-434.07V-481q0-141.96-100.02-241.48Q621.96-822 480-822q-141.96 0-241.98 100.02Q138-621.96 138-480q0 141.96 99.52 241.98Q337.04-138 479.4-138H694v83H479Zm1.24-310Q528-365 562-398.93q34-33.92 34-81.25Q596-529 561.76-563q-34.23-34-82-34Q432-597 398-562.82q-34 34.17-34 83 0 47.32 34.24 81.07 34.23 33.75 82 33.75Z" />
          </svg>
          <p className="font-serif font-normal text-4xl mt-5 mb-10">
            Got Something to Discuss? <br />
            Send an email to <br />
            <span className="font-black">joe (at) mindoff.work</span>
          </p>
          <ButtonLink link={"/design/the-zero-inbox-organizational-system"} content={"Learn How I manage mails"} />
        </div>
      </section>
    </main>
  );
}
