import React from "react";
import Link from "next/link";
import GetGithubRepos from "@/api/GetGithubRepos";

export const CardsGithub = async () => {
  const postsListApiResponse = await GetGithubRepos();
  const postsList = postsListApiResponse.status == "pass" ? postsListApiResponse.data : [];
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
          <Link className="flex flex-col p-10 md:p-12 min-h-full bg-white" target="_blank" href={post.html_url} aria-label={`Read more about ${post.name}`}>
            <div className="pb-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </div>
            <h4 className="text-2xl font-black leading-7 font-serif pb-4 capitalize">{post.name}</h4>
            <p className="font-sans font-medium opacity-50 pb-4 ">{post.description}</p>
            <div>
              <span
                className="w-auto text-sm font-bold uppercase leading-relaxed text-nowrap text-black border-b-2 border-black opacity-50 hover:opacity-100 hover:bg-yellow transition duration-200"
                aria-label="Read"
              >
                Visit Repo
              </span>
            </div>
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

export default CardsGithub;
