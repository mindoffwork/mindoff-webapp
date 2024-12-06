"use server";
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import ApiCaller from "../ApiCaller";
import ButtonLink from "../buttons/ButtonLink";

export const CardsOne = async ({
	apiName,
	formatName,
	sortBy = "Latest",
	noOfPosts = null,
	htmlTag = "h2",
	excludeTopic = null,
}) => {
	const Tag = htmlTag;
	const postsList = await ApiCaller(apiName, formatName, sortBy, noOfPosts);
	const truncate = (str, maxLength) => {
		return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
	};

	return postsList.length > 0 ? (
		<div>
			<ul className="list-none flex flex-col justify-center items-center gap-y-4">
				{postsList.map(
					(post, index) =>
						post.topic !== excludeTopic && (
							<li
								key={post.id}
								className={`w-11/12 md:w-10/12 transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
							>
								<Link
									className="flex p-1 md:p-4 min-h-full rounded-xl"
									href={"/posts/" + post.link}
									aria-label={`Read more about ${post.name}`}
									style={{ backgroundColor: post.color }}
								>
									<article className="flex flex-col md:flex-row justify-around">
										<figure
											className={`md:w-1/3 py-4 aspect-w-1 aspect-h-1 flex-shrink-0 ${
												index % 2 && "md:order-2"
											}`}
										>
											<Image
												src={process.env.ILUSTRATION_URL + post.img}
												alt={post.img_alt}
												width={500}
												height={500}
												className="h-full w-6/12 md:w-11/12 m-auto max-w-full object-scale-down"
												placeholder="blur"
												blurDataURL={
													process.env.ILUSTRATION_BASE64_URL + post.img
												}
											/>
											<figcaption className="sr-only">
												Cover Image for the Post: {post.name}
											</figcaption>
										</figure>
										<div className="flex flex-col justify-center mx-auto md:mx-0 w-11/12 md:w-3/6 px-2 md:px-3 lg:px-4 py-8 ">
											<Tag className="font-sans font-extrabold text-2xl mb-4">
												{post.name}
												<span className="block font-light text-lg md:text-xl tracking-wide mt-2">
													{post.subtitle}
												</span>
											</Tag>
											<p className="font-serif text-base mb-4 font-normal leading-6 opacity-80">
												{truncate(post.description, 250)}
											</p>
											<ButtonLink content={"Read"} />
										</div>
									</article>
								</Link>
							</li>
						)
				)}
			</ul>
		</div>
	) : (
		<div className="p-16" aria-labelledby="no-posts-message" aria-live="polite">
			<div className="md:3/4 lg:w-2/4 mx-auto text-center">
				<span className="block material-symbols-outlined" aria-hidden="true">
					sentiment_very_dissatisfied
				</span>
				<p
					className="block font-serif font-extrabold text-xl"
					id="no-posts-message"
				>
					<span>No Posts here for now!</span>
					<span className="block font-normal text-lg pt-2">
						Check back later for some fresh content.
					</span>
				</p>
			</div>
		</div>
	);
};

export default CardsOne;
