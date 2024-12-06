"use server";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ApiCaller from "../ApiCaller";
import ButtonLink from "../buttons/ButtonLink";

export const CardsOneTwo = async ({
	apiName,
	formatName,
	sortBy = "Latest",
	htmlTag = "h2",
}) => {
	const Tag = htmlTag;
	const postsList = await ApiCaller(apiName, formatName, sortBy);
	const truncate = (str, maxLength) => {
		return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
	};

	return postsList.length > 0 ? (
		<div className="w-10/12 mx-auto">
			<ul className="list-none flex flex-col md:flex-row md:flex-wrap w-full gap-x-4">
				{postsList.map((post, index) => (
					<>
						<li
							key={post.id}
							className={`md:w-1/2
            transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
						>
							<Link
								className="flex p-1 md:p-2 min-h-full rounded-lg"
								href={"/posts/" + post.link}
								aria-label={`Read more about ${post.name}`}
								style={{ backgroundColor: post.color }}
							>
								<article className="flex py-3">
									<figure className="w-2/5 aspect-w-1 aspect-h-1 flex-shrink-0">
										<Image
											src={process.env.ILUSTRATION_URL + post.img}
											alt={post.img_alt}
											width={500}
											height={500}
											className="w-full h-full max-w-full object-scale-down"
											placeholder="blur"
											blurDataURL={
												process.env.ILUSTRATION_BASE64_URL + post.img
											}
										/>
										<figcaption className="sr-only">
											Cover Image for the Post: {post.name}
										</figcaption>
									</figure>
									<div className="flex flex-col justify-center w-3/5 px-2 md:px-3 lg:px-5 py-8 ">
										<Tag className="font-serif text-xl md:text-2xl font-black leading-normal mb-5">
											{post.name}
											<span className="block font-light text-xl tracking-wide mt-2">
												{post.subtitle}
											</span>
										</Tag>
									</div>
								</article>
							</Link>
						</li>
						{(postsList.length % 5) % 2 !== 0 && postsList.length === index && (
							<span className={`flex-grow `} aria-hidden="true"></span>
						)}
					</>
				))}
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

export default CardsOneTwo;
