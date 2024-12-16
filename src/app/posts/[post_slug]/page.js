"use server";
import React, { Suspense } from "react";
import Image from "next/image";
import ButtonLink from "@/components/buttons/ButtonLink";
import BlockText from "@/components/contents/BlockText";
import BlockImage from "@/components/contents/BlockImage";
import BlockScript from "@/components/contents/BlockScript";
import CardsThree from "@/components/cards/CardsThree";
import CardsThreeSkeleton from "@/components/cards/CardsThreeSkeleton";
import CardsFour from "@/components/cards/CardsFour";
import ApiCaller from "@/components/ApiCaller";
import { notFound } from "next/navigation";
import CardsOne from "@/components/cards/CardsOne";
import Link from "next/link";
import BlockTitle from "@/components/contents/BlockTitle";
import CardsOneSkeleton from "@/components/cards/CardsOneSkeleton";

// META DATA + OG
export async function generateMetadata(post_slug) {
	// 1. Fetch post data (e.g., post head for metadata)
	const postSlug = post_slug.params.post_slug;
	const postHead = await ApiCaller("GetPostHead", postSlug, null);

	// 2. Handle error
	if (!postHead || postHead.length === 0) {
		notFound();
	}

	// 3. Construct metadata
	return {
		title: `${postHead.name}: ${postHead.subtitle}`,
		description: postHead.description,
		openGraph: {
			type: "article",
			title: postHead.title,
			description: postHead.description,
			images: [
				{
					url: process.env.ILUSTRATION_URL + postHead.img,
					alt: postHead.img_alt,
				},
			],
			url: "posts/" + postSlug,
			siteName: process.env.NAME,
		},
		alternates: {
			canonical: "posts/" + postSlug,
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export default async function PostPage(post_slug) {
	// 1. Gather -- Slugs & Passed Down Data
	const postSlug = post_slug.params.post_slug;

	// 2. Gather -- API Response
	const [postHead, postBody] = await Promise.all([
		ApiCaller("GetPostHead", postSlug, null),
		ApiCaller("GetPostBody", postSlug, null),
	]);

	// 3. Handle -- Errors
	if (!postHead || postHead.length === 0) {
		notFound();
	}

	// 4. Process -- Formatting Date
	const postUpdatedOn = new Date(postHead.updated_on);
	const formattedUpdatedOn = postUpdatedOn.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "2-digit",
	});

	// 5. Process -- Calculating Reading Time
	const calculateApproxReadingTime = (jsonArray) => {
		const totalLength = jsonArray.reduce(
			(acc, { content }) => acc + (content?.length || 0),
			0
		);
		return Math.ceil(totalLength / (250 * 5)) + " minutes"; // Approximate reading time
	};
	const postReadingTime = calculateApproxReadingTime(postBody);

	return (
		<main className="flex-grow mb-12 md:mb-24">
			<article className="flex flex-col ">
				{/* Content Head */}
				<header className="w-10/12 md:w-7/12 mx-auto py-10 md:py-24">
					<h1 className=" mx-auto my-6 font-sans font-black text-3xl md:text-4xl md:text-5xl leading-tight">
						{postHead.name}
						<span className="block font-light text-2xl md:text-3xl opacity-50 mt-5">
							{postHead.subtitle}
						</span>
					</h1>
					<p className="font-serif font-light text-lg md:text-xl mt-6 md:mt-10 leading-7 md:leading-9 tracking-wide">
						{postHead.description}
					</p>
				</header>

				{/* Content Image */}
				<section
					className="w-full md:w-5/6 mx-auto h-auto md:rounded-xl"
					style={{ backgroundColor: postHead.color }}
				>
					<figure className="w-5/6 lg:w-2/6 aspect-w-1 aspect-h-1 flex-shrink-0 mx-auto">
						<Image
							src={process.env.ILUSTRATION_URL + postHead.img}
							alt={postHead.img_alt}
							width={500}
							height={500}
							className="w-full h-auto max-w-full object-scale-down"
						/>
						<figcaption className="sr-only">{postHead.img_alt}</figcaption>
					</figure>
				</section>

				<section className="flex flex-col">
					{/* Content Body */}
					{postHead.length !== 0 && (
						<section
							className="py-8 md:py-16 content order-2"
							aria-label="Post Content"
						>
							<div className="w-10/12 md:w-7/12 mx-auto ">
								{postBody.map((block, index) =>
									block.name === "text" ? (
										<BlockText
											key={block.name + index}
											name={block.name}
											content={block.content}
										/>
									) : block.name === "img" ? (
										<BlockImage
											key={block.name + index}
											name={block.name}
											content={block.content}
											link={block.link}
										/>
									) : block.name === "script" ? (
										<BlockScript
											key={block.name + index}
											name={block.name}
											content={block.content}
											link={block.link}
										/>
									) : null
								)}
							</div>
						</section>
					)}
					{/* Content Info */}
					<aside className="w-full mt-16">
						<ul className="list-none flex flex-wrap gap-5 w-10/12 md:w-7/12 mx-auto">
							<li className="flex items-center">
								<span
									className="material-symbols-outlined text-base mr-2 select-none"
									aria-hidden="true"
								>
									edit_calendar
								</span>
								<time
									className="font-sans font-semibold text-nowrap text-sm"
									dateTime={postHead.updated_on}
								>
									<span className="sr-only">Last updated on&nbsp;</span>
									{formattedUpdatedOn}
								</time>
							</li>
							<li className="flex items-center">
								<span
									className="material-symbols-outlined text-base mr-2 select-none"
									aria-hidden="true"
								>
									timer
								</span>
								<span className="font-sans text-nowrap font-semibold text-sm">
									{postReadingTime}
									<span className="sr-only">&nbsp;Read</span>
								</span>
							</li>
							<li className="flex items-center">
								<span
									className="material-symbols-outlined text-base mr-2 select-none"
									aria-hidden="true"
								>
									account_tree
								</span>
								<span className="sr-only">Topic:&nbsp;</span>
								<ButtonLink
									link={"/topics/" + postHead.topic}
									content={postHead.topic}
								/>
							</li>
						</ul>
					</aside>
				</section>
			</article>

			{/* More to Read -- Related */}
			<aside className="flex flex-col gap-y-8 md:gap-y-12">
				<section className="w-full ">
					<BlockTitle
						htmlTag="h3"
						boldText={"More from "}
						lightText={postHead.topic}
						id={2}
						cardType={"CardsThree"}
					/>
					<Suspense fallback={<CardsThreeSkeleton />}>
						<CardsThree
							apiName={"GetPostsTopicwise"}
							formatName={postHead.topic}
							noOfPosts={8}
							id={2}
							excludePost={postSlug}
						/>
					</Suspense>
				</section>
				<section className="w-full">
					<BlockTitle
						htmlTag="h2"
						boldText={"Recommended "}
						lightText={"for you"}
						id={3}
						cardType={"CardsFour"}
						isScrollButtons={false}
					/>
					<Suspense fallback={<CardsOneSkeleton />}>
						<CardsOne
							apiName={"GetPostsExpo"}
							formatName={"featured"}
							id={3}
							excludeTopic={postHead.topic}
						/>
					</Suspense>
				</section>
			</aside>
		</main>
	);
}
