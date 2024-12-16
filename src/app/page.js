import React, { Suspense } from "react";
import CardsGithub from "@/components/cards/CardsGithub";
import CardsFeatured from "@/components/cards/CardsFeatured";
import CardsFeaturedSkeleton from "@/components/cards/CardsFeaturedSkeleton";
import CardsGithubSkeleton from "@/components/cards/CardsGithubSkeleton";
import Head from "next/head";

export default async function HomePage() {
	return (
		<main className="flex-grow mb-12 md:mb-24">
			<header className="w-10/12 mx-auto my-12 md:my-24">
				<h1 className="font-black text-3xl md:text-4xl leading-normal md:leading-normal w-full md:w-6/12 ">
					Explore
					<span className="font-light tracking-wide mt-2">
						{" "}
						purpose, minimalism, design and creativity
					</span>
				</h1>
			</header>
			<section>
				<Suspense fallback={<CardsFeaturedSkeleton />}>
					<CardsFeatured
						apiName={"GetPostsExpo"}
						formatName={"featured"}
						id={1}
					/>
				</Suspense>
			</section>
			<section className="mt-20">
				<div className="w-10/12 mx-auto mb-16">
					<h1 className="font-black text-3xl md:text-4xl leading-normal md:leading-normal mb-12 md:w-7/12">
						Discover opensource
						<span className="font-light tracking-wide mt-2">
							{" "}
							projects crafted to declutter, aid and elevate living
						</span>
					</h1>
				</div>
				<Suspense fallback={<CardsGithubSkeleton />}>
					<CardsGithub apiName={"GetGithubRepos"} />
				</Suspense>
			</section>
		</main>
	);
}
