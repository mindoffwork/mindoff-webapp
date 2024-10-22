import React from "react";
import Link from "next/link";
import Image from "next/image";
import ApiCaller from "../ApiCaller";
import { ScrollButtons } from "../buttons/ScrollButtons";
export const CardsFour = async ({ apiName, formatName, typeOfCard = null, id = 1 }) => {
  const postsList = await ApiCaller(apiName, formatName);
  return (
    <section className="relative border-y-black border-y-2px md:border-y-3px">
      <ul className="list-none flex overflow-auto scrollable overscroll-x-none w-full px-0 md:px-6 lg:px-8" id={`CardsFour__${id}`}>
        {postsList.map((post, index) => (
          <li
            key={post.id}
            className={`flex-shrink-0 flex-grow w-3/4 md:w-1/4 border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px
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
                  <span className="font-sans font-semibold text-xs lg:text-base uppercase tracking-wide mb-2 opacity-50">{post.topic}</span>
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
            {!typeOfCard && (
              <Link
                className="flex min-h-full"
                style={{ backgroundColor: post.color }}
                href={"/" + post.topic + "/" + post.link}
                aria-label={`Read more about ${post.name}`}
              >
                <article className="flex flex-col p-5 md:p-10">
                  <figure className="w-full h-auto flex-grow aspect-w-1 aspect-h-1 flex-shrink-0 ">
                    <Image
                      src={process.env.ILUSTRATION_URL + post.img}
                      alt={post.img_alt}
                      width={500}
                      height={500}
                      className="h-full w-9/12 md:w-auto m-auto max-w-full object-scale-down"
                    />
                  </figure>
                  <div>
                    <span className="font-sans font-semibold text-xs uppercase tracking-wide mb-2 opacity-50">{post.topic}</span>
                    <h2 className="font-serif font-extrabold text-xl mb-5">{post.name}</h2>
                    <span
                      className="w-auto text-sm font-bold uppercase leading-relaxed text-nowrap text-black border-b-2 border-black opacity-40 hover:opacity-100 hover:bg-yellow transition duration-200"
                      aria-label="Read"
                    >
                      Read
                    </span>
                  </div>
                </article>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <ScrollButtons idToScroll={`CardsFour__${id}`} />
    </section>
  );
};

export default CardsFour;
