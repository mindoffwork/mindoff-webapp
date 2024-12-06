import React, { Suspense } from "react";
import CardsOne from "@/components/cards/CardsOne";
import CardsOneSkeleton from "@/components/cards/CardsOneSkeleton";
import SortOptions from "@/components/buttons/SortOptions";
import { notFound } from "next/navigation";
import ApiCaller from "@/components/ApiCaller";

export default async function TopicPage(topic_slug) {
	const topicSlug = topic_slug.params.topic_slug;
	const sortQuery = topic_slug.searchParams.sort;

	// 2. Gather -- API Response

	const topicsList = await ApiCaller("GetTopics");
	const currentTopicObject = topicsList.find(
		(topic) => topic.link === topicSlug
	);

	// 2. Handle -- Errors
	if (topicsList.length === 0) {
		throw new Error("Error: Topics API is not responding");
	}
	if (!currentTopicObject) {
		notFound();
	}

	return (
		<main className="flex-grow" role="main">
			<header className="w-10/12 mx-auto" aria-labelledby="topic-header">
				<div className="py-12 md:py-24 lg:w-4/6">
					<h1
						className="font-sans font-black text-4xl md:text-5xl mb-4"
						id="topic-header"
					>
						{currentTopicObject.name}
					</h1>
					<p className="font-serif font-thin text-xl md:text-2xl">
						{currentTopicObject.description}
					</p>
					<SortOptions sortQuery={sortQuery} />
				</div>
			</header>
			<section
				className="mb-16"
				aria-label={`Posts under topic ${currentTopicObject.name}`}
			>
				<Suspense fallback={<CardsOneSkeleton />}>
					<CardsOne
						apiName={"GetPostsTopicwise"}
						formatName={topicSlug}
						sortBy={sortQuery}
					/>
				</Suspense>
			</section>
		</main>
	);
}
