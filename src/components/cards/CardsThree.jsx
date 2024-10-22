import React from "react";
import Link from "next/link";
import Image from "next/image";
import ApiCaller from "../ApiCaller";
import { ScrollButtons } from "../buttons/ScrollButtons";
import ButtonLink from "../buttons/ButtonLink";


export const CardsThree = async ({ apiName, formatName, id = 1 }) => {
  const postsList = await ApiCaller(apiName, formatName);
  const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  return (
    <section className="relative border-y-black border-y-2px md:border-y-3px">
      <ul className="list-none flex overflow-auto scrollable overscroll-x-none w-full px-0 md:px-6 lg:px-8" id={`CardsThree__${id}`}>
        {postsList.map((post, index) => (
          <li
            key={post.id}
            className={`flex-shrink-0 flex-grow w-10/12 md:w-4/12 border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px
              transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
          >
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
                    className="h-full w-9/12 md:w-7/12 m-auto max-w-full object-scale-down"
                  />
                </figure>
                <div>
                  <span className="font-sans font-semibold text-xs uppercase tracking-wide mb-5 opacity-50">{post.topic}</span>
                  <h2 className="font-serif font-black text-2xl mb-3">{post.name}</h2>
                  <p className="font-sans text-base mb-3 ">{truncate(post.description, 100)}</p>
                  <ButtonLink content={"Read"}/>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
      <ScrollButtons idToScroll={`CardsThree__${id}`} />
    </section>
  );
};

export default CardsThree;
