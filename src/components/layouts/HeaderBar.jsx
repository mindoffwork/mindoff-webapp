import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import GetTopics from "@/api/GetTopics";
import TopicsList from "./TopicsList";
import TopicsListSkeleton from "./TopicsListSkeleton";

const HeaderBar = async () => {
	const topicsListApiResponse = await GetTopics();
	const topicsList =
		topicsListApiResponse.status == "pass" ? topicsListApiResponse.data : [];
	if (topicsList.length === 0) {
		throw new Error("Error: TopicsList or PostsList API ran out of Juice");
	}
	return (
		<header className="mb-4 md:mb-14">
			<div className="md:fixed top-0 block z-40 w-fit" role="banner">
				<Link href="/" aria-label="Go to Home Page">
					<figure className="flex items-center bg-yellow p-3 md:p-4 rounded-br-3xl border-black border-opacity-5 border-b-2px md:border-b-3px border-r-2px md:border-r-3px">
						<Image
							src="/images/MindOff_Logo_Icon.png"
							alt="MindOff Logo"
							sizes="100vw"
							height={40}
							width={40}
							className="h-8 w-8"
						/>
						<figcaption className="sr-only">MindOff Logo</figcaption>
					</figure>
				</Link>
			</div>

			<Suspense fallback={<TopicsListSkeleton />}>
				<TopicsList topicsList={topicsList} />
			</Suspense>
		</header>
	);
};

export default HeaderBar;
