"use server";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ApiCaller from "../ApiCaller";
import ButtonLink from "../buttons/ButtonLink";

export const CardsOneTwo = async ({ apiName, formatName, sortBy = "Latest" }) => {
  const postsList = await ApiCaller(apiName, formatName, sortBy);
  const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  return postsList.length > 0 ? (
    <ul className="list-none flex flex-col md:flex-row md:flex-wrap border-y-black border-t-2px md:border-t-3px w-full" >
      {postsList.map((post, index) =>
        index % 5 === 0 ? (
          <li
            key={post.id}
            className={`w-full border-x-black border-x-0 border-b-black border-b-2px md:border-b-3px 
            transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
          >
            <Link
              className="flex p-1 md:p-2 min-h-full"
              href={"/" + post.topic + "/" + post.link}
              aria-label={`Read more about ${post.name}`}
              style={{ backgroundColor: post.color }}
            >
              <article className="flex flex-col md:flex-row justify-around">
                <figure className="md:w-1/3 aspect-w-1 aspect-h-1 flex-shrink-0">
                  <Image
                    src={process.env.ILUSTRATION_URL + post.img}
                    alt={post.img_alt}
                    width={500}
                    height={500}
                    className="h-full w-9/12 md:w-auto m-auto max-w-full object-scale-down"
                    placeholder="blur"
                    blurDataURL={process.env.ILUSTRATION_BASE64_URL + post.img}
                  />
                  <figcaption className="sr-only">Cover Image for the Post: {post.name}</figcaption>
                </figure>
                <div className="flex flex-col justify-center w-11/12 mx-auto md:w-3/6 px-2 md:px-3 lg:px-4 py-8 ">
                  <span className="font-sans font-semibold text-sm uppercase tracking-wide mb-1 opacity-50">{post.topic}</span>
                  <h3 className="font-serif font-extrabold text-2xl lg:text-3xl mb-4">{post.name}</h3>
                  <p className="font-sans text-lg mb-4">{truncate(post.description, 250)}</p>
                  <ButtonLink content={"Read"}/>
                </div>
              </article>
            </Link>
          </li>
        ) : (
          <>
            <li
              key={post.id}
              className={`md:w-1/2 border-x-black border-x-0 md:border-x-1.5px border-b-black border-b-2px md:border-b-3px 
            first:border-l-0 last:border-r-0 
            ${(index % 5) % 2 === 0 ? "md:border-r-0" : "md:border-l-0"}
            transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
            >
              <Link
                className="flex p-1 md:p-2 min-h-full"
                href={"/" + post.topic + "/" + post.link}
                aria-label={`Read more about ${post.name}`}
                style={{ backgroundColor: post.color }}
              >
                <article className="flex py-3">
                  <figure className="w-2/5 aspect-w-1 aspect-h-1 flex-shrink-0">
                    <Image
                      src={process.env.ILUSTRATION_URL + post.img}
                      alt={post.img_alt}
                      width={500}
                      height={500}
                      className="w-full h-full max-w-full object-scale-down"
                      placeholder="blur"
                      blurDataURL={process.env.ILUSTRATION_BASE64_URL + post.img}
                    />
                    <figcaption className="sr-only">Cover Image for the Post: {post.name}</figcaption>
                  </figure>
                  <div className="flex flex-col justify-center w-3/5 px-2 md:px-3 lg:px-5 py-8 ">
                    <span className="font-sans font-semibold text-xs uppercase tracking-wide mb-1 opacity-50">{post.topic}</span>
                    <h2 className="font-serif text-xl md:text-2xl font-black leading-normal mb-5">{post.name}</h2>
                    <ButtonLink content={"Read"}/>
                  </div>
                </article>
              </Link>
            </li>
            {(postsList.length % 5) % 2 !== 0 && postsList.length === index && (
              <li
                className={`flex-grow first:border-l-0 last:border-r-0 border-b-black border-b-0 md:border-b-3px border-x-black border-x-1px md:border-x-1.5px`}
                aria-hidden="true"
              ></li>
            )}
          </>
        )
      )}
    </ul>
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
  );
};

export default CardsOneTwo;
