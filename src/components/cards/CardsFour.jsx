import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import ApiCaller from "../ApiCaller";
import ButtonLink from "../buttons/ButtonLink";
import CardsFourSkeleton from "@/components/cards/CardsFourSkeleton";

export const CardsFour = async ({
	apiName,
	formatName,
	sortBy = "Latest",
	htmlTag = "h2",
	noOfPosts = null,
	typeOfCard = null,
	id = 1,
	excludePost = null,
}) => {
	const Tag = htmlTag;
	const postsList = await ApiCaller(apiName, formatName, sortBy, noOfPosts);
	return (
		<>
			<Suspense fallback={<CardsFourSkeleton />}>
				<div
					className="flex flex-col items-center overflow-x-auto scrollable"
					id={`CardsFour__${id}`}
				>
					<div className="relative w-11/12 md:w-10/12">
						<ul className="list-none flex scrollable gap-x-4">
							{postsList.map(
								(post, index) =>
									post.link !== excludePost && (
										<li
											key={post.id}
											className={`${
												postsList.length > 4 && "flex-shrink-0 flex-grow"
											} w-3/4 md:w-1/4 transition-all duration-200 ease-in-out hover:brightness-95 active:brightness-95`}
										>
											{typeOfCard === "img" && (
												<Link
													className="flex min-h-full p-5 md:p-8 rounded-lg"
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
													className="flex min-h-full p-5 md:p-8 rounded-lg"
													style={{ backgroundColor: post.color }}
													href={"/posts/" + post.link}
													aria-label={`Read more about ${post.name}`}
												>
													<article className="py-8">
														<span className="block font-serif font-medium text-xs uppercase tracking-widest mb-2 opacity-50">
															{post.topic}
														</span>
														<Tag className="font-sans font-bold text-xl mb-4">
															{post.name}
															<span className="block font-normal text-lg mt-2">
																{post.subtitle}
															</span>
														</Tag>
														<ButtonLink content={"Read"} />
													</article>
												</Link>
											)}
											{!typeOfCard && (
												<Link
													className="flex min-h-full rounded-lg p-5 md:p-8"
													style={{ backgroundColor: post.color }}
													href={"/posts/" + post.link}
													aria-label={`Read more about ${post.name}`}
												>
													<article className="flex flex-col w-full">
														<figure className="w-full h-auto flex-grow aspect-w-1 aspect-h-1 flex-shrink-0 ">
															<Image
																src={process.env.ILUSTRATION_URL + post.img}
																alt={post.img_alt}
																width={300}
																height={300}
																className="h-full w-9/12 md:w-auto m-auto max-w-full object-scale-down"
															/>
														</figure>
														<div className="w-full overflow-hidden">
															<span className="font-serif font-medium text-xs uppercase tracking-widest mb-2 opacity-50">
																{post.topic}
															</span>
															<Tag className="font-sans font-bold text-lg ">
																{post.name}:{" "}
																<span className="font-normal">
																	{post.subtitle}
																</span>
															</Tag>
														</div>
													</article>
												</Link>
											)}
										</li>
									)
							)}
							<span
								className={`flex-shrink-0 flex-grow w-3/4 md:w-1/12`}
								aria-hidden="true"
								role="presentation"
							></span>
						</ul>
					</div>
				</div>
			</Suspense>
		</>
	);
};

export default CardsFour;
