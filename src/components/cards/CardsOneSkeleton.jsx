import React from "react";

const CardsOneSkeleton = () => {
	return (
		<div>
			<ul className="list-none flex flex-col md:flex-row md:flex-wrap justify-center items-center">
				<li className="w-11/12 md:w-10/12 bg-black bg-opacity-5 p-4 rounded-xl">
					<div className="flex flex-col md:flex-row p-1 md:p-2 min-h-full">
						<div className="w-full md:w-5/12 aspect-w-1 aspect-h-1 flex-shrink-0">
							<div className="h-96 bg-black bg-opacity-10 rounded-md animate-pulse"></div>
						</div>
						<div className="flex flex-col justify-center w-full md:w-2/4 px-2 md:px-3 lg:px-4 py-12 mx-auto">
							<div className="h-8 bg-black bg-opacity-10 rounded-md mb-2 animate-pulse w-2/3"></div>
							<div className="h-6 bg-black bg-opacity-10 rounded-md mb-2 animate-pulse w-3/6"></div>
							<div className="h-24 bg-black bg-opacity-10 rounded-md mb-4 animate-pulse "></div>
							<div className="h-4 bg-black bg-opacity-10 rounded-md animate-pulse w-12"></div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default CardsOneSkeleton;
