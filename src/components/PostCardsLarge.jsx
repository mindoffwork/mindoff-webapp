import React from "react";
import Link from "next/link";
import Image from "next/image";

export const PostCardsLarge = ({ postsList }) => {
  return (
    <ul className="list-none flex md:flex-wrap overflow-x-auto scrollable md:overflow-x-hidden border-y-black border-t-2px md:border-t-3px overscroll-none w-full">
      {postsList.map((post, index) => (
        <li
          key={post.id}
          className={`min-w-64 md:min-w-0 md:w-1/3  border-x-black border-x-1px md:border-x-1.5px border-b-black border-b-2px md:border-b-3px first:border-l-0 last:border-r-0 
          ${(index + 3) % 3 === 0 ? "md:border-l-0" : ""} 
          ${(index + 1) % 3 === 0 ? "md:border-r-0" : ""}
          transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
        >
          <Link
            className="flex flex-col p-1 md:p-2 min-h-full"
            style={{ backgroundColor: post.color }}
            href={"/" + post.topic + "/" + post.link}
            aria-label={`Read more about ${post.name}`}
          >
            <article>
              <figure className="w-full aspect-w-1 aspect-h-1 flex-shrink-0 lg:px-10 ">
                <Image
                  src={process.env.ILUSTRATION_URL + post.img}
                  alt={post.img_alt}
                  width={500}
                  height={500}
                  className="w-full h-full max-w-full object-scale-down"
                />
              </figure>
              <div className="mt-4 p-2 md:p-3 lg:p-4">
                <span className="font-sans font-semibold text-xs lg:text-sm uppercase tracking-wide mb-2 opacity-50">{post.topic}</span>
                <h2 className="font-serif font-extrabold text-xl lg:text-2xl">{post.name}</h2>
                
              </div>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostCardsLarge;
