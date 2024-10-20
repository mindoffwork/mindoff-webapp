"use server";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const PostCardsMedium = ({ postsList }) => {
  return (
    <ul className="list-none flex flex-col md:flex-row md:flex-wrap border-y-black border-t-2px md:border-t-3px w-full">
      {postsList.map((post, index) => (
        <li
          key={post.id}
          className={`md:w-1/2 lg:w-1/3 border-x-black border-x-0 md:border-x-1.5px border-b-black border-b-2px md:border-b-3px 
            first:border-l-0 last:border-r-0 
            ${(index + 1) % 2 === 0 && "md:border-r-0 lg:border-r-1.5px"}
            ${(index + 1) % 3 === 0 && "md:border-l-0 md:border-r-1.5px lg:border-l-1.5px lg:border-r-0"}
            ${(index + 1) % 2 !== 0 && (index + 1) % 3 !== 0 && "md:border-l-0 lg:border-l-1.5px"}
            ${(index + 3) % 3 === 0 && "lg:border-l-0"}
            ${(index + 3) % 6 === 0 && "lg:border-r-0"}
            transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
        >
          <Link
            className="flex p-1 md:p-2 min-h-full"
            href={"/" + post.topic + "/" + post.link}
            aria-label={`Read more about ${post.name}`}
            style={{ backgroundColor: post.color }}
          >
            <article className="flex">
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
                <span className="font-sans font-semibold text-xs uppercase tracking-wide mb-1 opacity-50">{post.topic}</span>
                <h3 className="font-serif text-lg md:text-xl font-black leading-normal">{post.name}</h3>
              </div>
            </article>
          </Link>
        </li>
      ))}
      {postsList.length % 3 !== 0 || postsList.length % 2 !== 0 ? (
        <li
          className={`flex-grow first:border-l-0 last:border-r-0 border-b-black border-b-0 md:border-b-3px border-x-black border-x-1px md:border-x-1.5px`}
          aria-hidden="true"
        ></li>
      ) : null}
    </ul>
  );
};

export default PostCardsMedium;
