import React from "react";
import Link from "next/link";
import Image from "next/image";
import ApiCaller from "../ApiCaller";
import { ScrollButtons } from "../buttons/ScrollButtons";
import ButtonLink from "../buttons/ButtonLink";
import CardsThreeSkeleton from "./CardsThreeSkeleton";

export const CardsThree = async ({
	apiName,
	formatName,
	sortBy = "Latest",
	noOfPosts = null,
	id = 1,
	htmlTag = "h2",
	excludePost = null,
}) => {
	const Tag = htmlTag;
	const postsList = await ApiCaller(apiName, formatName, sortBy, noOfPosts);
	const truncate = (str, maxLength) => {
		return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
	};
	return (
		<div
			className="flex flex-col items-center overflow-x-auto scrollable"
			id={`CardsThree__${id}`}
		>
			<div className="relative w-11/12 md:w-10/12">
				<ul className="list-none flex scrollable gap-x-4 ">
					{postsList.map(
						(post, index) =>
							post.link !== excludePost && (
								<li
									key={post.id}
									className={`flex-shrink-0 flex-grow w-10/12 md:w-4/12
              transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
								>
									<Link
										className="flex min-h-full rounded-lg p-7 md:p-10"
										style={{ backgroundColor: post.color }}
										href={"/posts/" + post.link}
										aria-label={`Read more about ${post.name}`}
									>
										<article className="flex flex-col w-full">
											<figure className="w-full h-auto flex-grow aspect-w-1 aspect-h-1 flex-shrink-0 order-2">
												<Image
													src={process.env.ILUSTRATION_URL + post.img}
													alt={post.img_alt}
													width={500}
													height={500}
													className="h-full w-9/12 m-auto max-w-full object-scale-down"
												/>
											</figure>
											<div>
												{/* <span className="font-serif font-medium text-xs uppercase tracking-widest mb-2 opacity-50">
												{post.topic}
											</span> */}
												<Tag className="font-sans font-bold text-xl mb-3">
													{post.name}
													<span className="block font-light text-lg tracking-wide mt-1">
														{post.subtitle}
													</span>
												</Tag>
											</div>
										</article>
									</Link>
								</li>
							)
					)}
					<span
						className={`flex-shrink-0 flex-grow w-1/12 -ml-4`}
						aria-hidden="true"
						role="presentation"
					></span>
				</ul>
			</div>
		</div>
	);
};

export default CardsThree;
