import React from "react";
import Link from "next/link";
import Image from "next/image";

export const PostCardsSmall = ({ postsList, typeOfCard }) => {
  return (
    <ul className="list-none flex md:flex-wrap overflow-x-auto scrollable md:overflow-x-hidden border-y-black border-t-2px md:border-t-3px overscroll-none w-full">
      {postsList.map((post, index) => (
        <li
          key={post.id}
          className={`min-w-64 md:min-w-0 md:w-1/4  border-x-black border-x-1px md:border-x-1.5px border-b-black border-b-2px md:border-b-3px first:border-l-0 last:border-r-0 
        ${(index + 4) % 4 === 0 ? "md:border-l-0" : ""} 
        ${(index + 1) % 4 === 0 ? "md:border-r-0" : ""}
        transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
        >
          {typeOfCard === "img" && (
            <Link
              className="flex flex-col p-1 md:p-2 min-h-full"
              style={{ backgroundColor: post.color }}
              href={process.env.ILUSTRATION_URL + post.img}
              target="_blank"
              aria-label={`View Cover Image for ${post.name}`}
            >
              <figure className="w-full aspect-w-1 aspect-h-1 flex-shrink-0 lg:p-10 ">
                <Image
                  src={process.env.ILUSTRATION_URL + post.img}
                  alt={post.img_alt}
                  width={500}
                  height={500}
                  className="w-full h-full max-w-full object-scale-down"
                />
              </figure>
              {/* <figcaption className="absolute">Cover Image for {post.name}</figcaption> */}
            </Link>
          )}
          {typeOfCard === "text" && (
            <Link
              className="flex flex-col p-1 md:p-2 min-h-full"
              style={{ backgroundColor: post.color }}
              href={"/" + post.topic + "/" + post.link}
              aria-label={`Read more about ${post.name}`}
            >
              <article className="p-8 lg:px-8 lg:py-24">
                <span className="font-sans font-semibold text-xs lg:text-sm uppercase tracking-wide mb-2 opacity-50">{post.topic}</span>
                <h2 className="font-serif font-extrabold text-xl lg:text-2xl mb-5">{post.name}</h2>
                <span
                  className="w-auto text-sm font-bold uppercase leading-relaxed text-nowrap text-black border-b-2 border-black opacity-40 hover:opacity-100 hover:bg-yellow transition duration-200"
                  aria-label="Read"
                >
                  Read
                </span>
              </article>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PostCardsSmall;
