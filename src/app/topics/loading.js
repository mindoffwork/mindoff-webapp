import React from "react";
export default function Loading() {
	return (
		<div className="flex-grow">
			<div className="w-4/5 md:w-10/12 mx-auto pt-28 pb-28">
				<div className="h-16 bg-black bg-opacity-10 rounded-md mb-4 w-3/5 animate-pulse"></div>
				<div className="h-8 bg-black bg-opacity-10 rounded-md w-4/5 mb-4 animate-pulse"></div>
				<div className="h-8 bg-black bg-opacity-10 rounded-md w-4/5 mb-4 animate-pulse"></div>
				<div className="flex space-x-4 animate-pulse ">
					<div className="h-10 w-24 bg-black bg-opacity-10 rounded-md"></div>
					<div className="h-10 w-24 bg-black bg-opacity-10 rounded-md"></div>
					<div className="h-10 w-24 bg-black bg-opacity-10 rounded-md"></div>
				</div>
			</div>
		</div>
	);
}
