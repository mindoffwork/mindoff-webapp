import React from "react";
import Link from "next/link";
import Image from "next/image";
// --- FUNCTIONALITIES ---
// 1. mobile:1 tablet:2 large:1 ✔️

export const PostCardsRelated = ({ postsList }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap w-full">
      {postsList.map((post, index) => (
        <article
          key={post.id}
          className={`md:w-1/2 lg:w-full 
            border-t-black border-t-2px md:border-t-3px 
            transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
        >
          <Link
            className="flex p-1 md:p-2 min-h-full"
            href={"/" + post.link}
            aria-label={`Read more about ${post.name}`}
            style={{ backgroundColor: post.color }}
          >
            <figure className="w-1/3 aspect-w-1 aspect-h-1 flex-shrink-0">
              <Image
                src={process.env.ILUSTRATION_URL + post.img}
                alt={post.img_alt}
                width={500}
                height={500}
                className="w-full h-full max-w-full object-scale-down"
              />
              <figcaption className="sr-only">{post.name}</figcaption>
            </figure>
            <div className="flex flex-col justify-center px-2 md:px-3 lg:px-4 py-8 ">
              {/* <span className="font-sans font-semibold text-xs lg:text-xs uppercase tracking-wide mb-1 opacity-50">{post.topic}</span> */}
              <h3 className="text-base font-semibold font-sans leading-snug">{post.name}</h3>
            </div>
          </Link>
        </article>
      ))}
      {postsList.length % 3 !== 0 || postsList.length % 2 !== 0 ? (
        <div
          className={`flex-grow first:border-l-0 last:border-r-0 border-b-black border-b-0 md:border-b-3px border-x-black border-x-1px md:border-x-1.5px`}
        ></div>
      ) : null}
    </div>
  );
};

export default PostCardsRelated;
