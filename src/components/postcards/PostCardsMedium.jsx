import React from "react";
import Link from "next/link";
import Image from "next/image";
// --- POST CARDS LARGE FUNCTIONALITIES ---
// 1. 3 cards per row on screens above medium ✔️
// 2. scrollable single row on small screens ✔️
// 3. Outline to align responsively and properly ✔️
// 4. Text and Padding Responsiveness for different screens ✔️
// 5. Responsive image with square aspect ratio✔️
// 6. Dynamic Card background Color ✔️

export const PostCardsMedium = ({ postsList }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap border-y-black border-t-2px md:border-t-3px w-full">
      {postsList.map((post, index) => (
        <article
          key={post.id}
          className={`md:w-1/2 lg:w-1/3 border-x-black border-x-0 md:border-x-1.5px border-b-black border-b-2px md:border-b-3px 
            first:border-l-0 last:border-r-0 
            ${
              (index + 1) % 2 === 0
                ? "md:border-r-0 lg:border-r-1.5px"
                : (index + 1) % 3 === 0
                ? "md:border-l-0 md:border-r-1.5px lg:border-l-1.5px lg:border-r-0 "
                : "md:border-l-0 lg:border-l-1.5px"
            }
            ${(index + 3) % 3 === 0 ? "lg:border-l-0" : ""}
            ${(index + 3) % 6 === 0 ? "lg:border-r-0" : ""}
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
            <div className="flex flex-col justify-center w-2/3 px-2 md:px-3 lg:px-4 py-8 ">
              <span className="font-sans font-semibold text-xs lg:text-xs uppercase tracking-wide mb-1 opacity-50">
                {post.topic}
              </span>
              <h3 className="text-lg font-black font-serif leading-normal">
                {post.name}
              </h3>
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

export default PostCardsMedium;