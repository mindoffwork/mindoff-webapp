import React from "react";

export default function Loading() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col space-y-4">
        {/* Topics Slider Skeleton */}
        <div className="relative border-y-black border-y-2px md:border-y-3px">
          <div aria-label="Topics Navigation">
            <ul className="flex overflow-x-auto scrollable flex-row list-none overscroll-none">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <li
                    key={index}
                    className="flex flex-col flex-shrink-0 items-center bg-white border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px"
                  >
                    <div className="flex flex-col items-center justify-center py-6 px-6 md:px-8 lg:px-10 animate-pulse">
                      <div className="bg-black bg-opacity-10 rounded-full w-5 h-5 lg:w-6 lg:h-6"></div>
                      <div className="mt-2 bg-black bg-opacity-10 h-4 w-16 lg:w-20 rounded-md"></div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Header Skeleton */}
        <div className="px-5 md:px-10 lg:px-14 py-12 md:py-24">
          <div className="h-8 bg-black bg-opacity-10 rounded-md mb-4 animate-pulse"></div>
          <div className="h-4 bg-black bg-opacity-10 rounded-md mb-2 w-3/4 animate-pulse"></div>
          <div className="h-4 bg-black bg-opacity-10 rounded-md mb-2 w-3/4 animate-pulse"></div>
          <div className="h-4 bg-black bg-opacity-10 rounded-md mb-2 w-3/4 animate-pulse"></div>
          <div className="flex items-center space-x-4 mt-8">
            <div className="h-6 bg-black bg-opacity-10 rounded-md w-16 animate-pulse"></div>
            <div className="h-6 bg-black bg-opacity-10 rounded-md w-16 animate-pulse"></div>
            <div className="h-6 bg-black bg-opacity-10 rounded-md w-16 animate-pulse"></div>
          </div>
        </div>

        {/* Posts Section Skeleton */}
        <div>
          <ul className="list-none flex flex-col md:flex-row md:flex-wrap border-y-black border-t-2px md:border-t-3px w-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="md:w-1/2 lg:w-1/3 border-x-black border-x-0 md:border-x-1.5px border-b-black border-b-2px md:border-b-3px first:border-l-0 last:border-r-0"
              >
                <div className="flex p-1 md:p-2 min-h-full">
                  <div className="w-1/3 aspect-w-1 aspect-h-1 flex-shrink-0">
                    <div className="h-full bg-black bg-opacity-10 rounded-md animate-pulse"></div>
                  </div>
                  <div className="flex flex-col justify-center w-2/3 px-2 md:px-3 lg:px-4 py-12">
                    <div className="h-4 bg-black bg-opacity-10 rounded-md mb-1 animate-pulse w-24"></div>
                    <div className="h-6 bg-black bg-opacity-10 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
