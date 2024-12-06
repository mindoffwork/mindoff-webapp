import React from "react";

const CardsFeaturedSkeleton = () => {
	return (
		<div className="flex flex-col items-center overflow-x-auto scrollable">
			<div className="w-11/12 md:w-10/12">
				<ul className="list-none flex scrollable gap-4 pl-4 -mr-8">
					{Array.from({ length: 3 }).map((_, index) => (
						<li
							key={index}
							className="flex-shrink-0 flex-grow md:flex-shrink md:flex-grow-0 w-10/12 md:w-4/12 md:-ml-4 md:pr-4"
						>
							<div className="flex flex-col rounded-lg p-5 md:p-10 bg-black bg-opacity-5 ">
								<div className="w-full h-48 bg-black bg-opacity-5 rounded-md animate-pulse mb-4 "></div>
								<div className="h-4 bg-black bg-opacity-5 rounded w-1/3 mb-2 animate-pulse"></div>
								<div className="h-6 bg-black bg-opacity-5 rounded w-2/3 mb-2 animate-pulse"></div>
								<div className="h-5 bg-black bg-opacity-5 rounded w-3/4 animate-pulse"></div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CardsFeaturedSkeleton;
