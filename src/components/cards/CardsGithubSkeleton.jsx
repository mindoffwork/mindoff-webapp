import React from "react";

const CardsGithubSkeleton = () => {
	return (
		<div className="w-10/12 mx-auto">
			<div className="w-full">
				<ul className="list-none flex flex-wrap gap-4 pl-4 -mr-8 ">
					{Array.from({ length: 2 }).map((_, index) => (
						<li key={index} className="w-1/2 -ml-4 pr-4">
							<div className="flex flex-col rounded-lg p-5 md:p-10 bg-white">
								<div className="h-16 w-16 bg-black bg-opacity-5 rounded-md mb-4  animate-pulse"></div>
								<div className="h-4 bg-black bg-opacity-5 rounded w-1/3 mb-2  animate-pulse"></div>
								<div className="h-6 bg-black bg-opacity-5 rounded w-full mb-2  animate-pulse"></div>
								<div className="h-5 bg-black bg-opacity-5 rounded w-full animate-pulse"></div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CardsGithubSkeleton;
