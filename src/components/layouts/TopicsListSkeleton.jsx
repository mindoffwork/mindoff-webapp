import React from "react";

const TopicsListSkeleton = () => {
	return (
		<section className="fixed bottom-0 md:top-0 left-0 z-30 w-full h-fit transition-all duration-500">
			<nav
				className="relative w-full md:pl-16 border-b-black border-opacity-5 border-t-2px md:border-t-0 md:border-b-3px bg-fawn backdrop-blur-md bg-opacity-80 overflow-x-auto scrollable"
				aria-label="Topics Navigation"
				id="topics_slider__id"
			>
				<ul className="list-none flex">
					<li className="flex flex-shrink-0 items-center justify-center space-x-2 px-3 py-3 w-auto animate-pulse">
						<div className="bg-black opacity-5 w-8 h-8 rounded-full"></div>
						<div className="bg-black opacity-5 w-16 h-6 rounded-md"></div>
					</li>
					<li className="flex flex-shrink-0 items-center justify-center space-x-2 px-3 py-3 w-auto animate-pulse">
						<div className="bg-black opacity-5 w-8 h-8 rounded-full"></div>
						<div className="bg-black opacity-5 w-16 h-6 rounded-md"></div>
					</li>
					<li className="flex flex-shrink-0 items-center justify-center space-x-2 px-3 py-3 w-auto animate-pulse">
						<div className="bg-black opacity-5 w-8 h-8 rounded-full"></div>
						<div className="bg-black opacity-5 w-16 h-6 rounded-md"></div>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default TopicsListSkeleton;
