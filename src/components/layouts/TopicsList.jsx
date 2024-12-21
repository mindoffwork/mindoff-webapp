"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollButtons } from "../buttons/ScrollButtons";
import { useParams } from "next/navigation";

const TopicsList = ({ topicsList }) => {
	const params = useParams();
	const currentTopic = params.topic_slug;
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isAtBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight;
			setIsHidden(isAtBottom);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<section
			className={`fixed bottom-0 md:top-0 left-0 z-30 w-full h-fit transition-all duration-500 ${
				isHidden ? "translate-y-full md:translate-y-0" : "translate-y-0"
			}`}
		>
			<nav
				className="relative w-full md:pl-16 border-b-black border-opacity-5 border-t-2px md:border-t-0 md:border-b-3px bg-fawn backdrop-blur-md bg-opacity-80 overflow-x-auto scrollable"
				aria-label="Topics Navigation"
				id="topics_slider__id"
			>
				<ul className="list-none flex scrollable">
					{topicsList.map((topic) => (
						<li
							key={topic.id}
							className="flex flex-col flex-shrink-0 items-center "
						>
							<Link
								href={"/topics/" + topic.link}
								className={`flex items-center justify-center py-3 md:py-4 px-3 md:px-5 lg:px-6 transition-all duration-200 ease-in-out hover:opacity-100 active:opacity-100 ${
									currentTopic === topic.link
										? "grayscale-0 opacity-100"
										: "grayscale opacity-60"
								}`}
								aria-current={currentTopic === topic.link ? "page" : undefined}
							>
								<div>
									<span
										className="material-symbols-outlined scale-75 md:scale-90 align-top w-5 h-5"
										aria-hidden="true"
									>
										{topic.icon}
									</span>
								</div>
								<div>
									<h2 className="ml-2 md:ml-3 font-medium tracking-wider uppercase text-1xs md:text-xs ">
										{topic.name}
									</h2>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<ScrollButtons idToScroll={"topics_slider__id"} isGroupButtons={false} />
		</section>
	);
};

export default TopicsList;
