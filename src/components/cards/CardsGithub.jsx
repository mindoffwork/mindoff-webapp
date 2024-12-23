import React from "react";
import Link from "next/link";
import GetGithubRepos from "@/api/GetGithubRepos";
import ButtonLink from "../buttons/ButtonLink";

export const CardsGithub = async () => {
	const postsListApiResponse = await GetGithubRepos();
	const postsList =
		postsListApiResponse.status == "pass" ? postsListApiResponse.data : [];
	return (
		<div className="md:flex w-11/12 md:w-10/12 mx-auto">
			<ul className="list-none flex flex-col md:flex-row md:flex-wrap gap-4 md:pl-4 md:-mr-8">
				{postsList.map((post, index) => (
					<li
						key={post.id}
						className={`flex-shrink-0 flex-grow md:w-1/2 md:-ml-4 md:pr-4
            transition-all duration-200 ease-in-out hover:opacity-80 active:opacity-80`}
					>
						<Link
							className="flex flex-col p-8 md:p-12 min-h-full bg-black bg-opacity-5 rounded-lg"
							target="_blank"
							href={post.html_url}
							aria-label={`Read more about ${post.name}`}
						>
							<div className="pb-4 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									fill="currentColor"
									className="bi bi-github"
									viewBox="0 0 16 16"
								>
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
								</svg>
							</div>
							<h4 className="text-xl md:text-2xl font-black leading-7 font-serif pb-4 capitalize">
								{post.name}
							</h4>
							<p className="font-sans font-medium text-sm md:text-base leading-normal opacity-50 pb-4 ">
								{post.description}
							</p>
							<ButtonLink content={"Visit Repo"} />
						</Link>
					</li>
				))}
				{postsList.length % 3 !== 0 || postsList.length % 2 !== 0 ? (
					<span className={`flex-grow `} aria-hidden="true"></span>
				) : null}
			</ul>
		</div>
	);
};

export default CardsGithub;
