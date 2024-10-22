import React from "react";
export default function Loading() {
  return (
    <div className="flex-grow">
      {/* Topics Slider Skeleton */}
      <div className="flex flex-col lg:flex-row min-h-screen border-black border-b-2px md:border-b-3px">
        {/* Content Image Skeleton */}
        <div className="h-64 lg:w-4/12 md:h-auto md:max-h-screen lg:sticky lg:top-0">
          <div className="flex flex-col justify-center p-4 border-black border-b-2px md:border-b-3px lg:border-b-0 lg:border-r-3px h-full overflow-auto ">
            <div className="h-full w-full bg-black bg-opacity-10 rounded-md animate-pulse"></div>
          </div>
        </div>

        {/* Content Head Skeleton */}
        <div className="lg:w-8/12">
          <div className="py-10 md:py-16 border-black border-b-2px md:border-b-3px">
            <div className="w-10/12 mx-auto my-6">
              <div className="h-10 bg-black bg-opacity-10 rounded-md mb-4 animate-pulse"></div>
              <div className="flex flex-wrap gap-5 pt-10 pb-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={'post_slug__loading__' + index} className="flex items-center">
                    <span className="h-5 w-5 bg-black bg-opacity-10 rounded-full animate-pulse mr-2"></span>
                    <div className="h-4 bg-black bg-opacity-10 rounded-md w-20 animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="h-6 bg-black bg-opacity-10 rounded-md mt-6 animate-pulse"></div>
              <div className="h-6 bg-black bg-opacity-10 rounded-md mt-6 animate-pulse"></div>
              <div className="h-6 bg-black bg-opacity-10 rounded-md mt-6 animate-pulse"></div>
            </div>
          </div>

          {/* Content Body Skeleton */}
          <div className="w-10/12 mx-auto py-16 content" aria-label="Post Content">
            <div className="mb-6">
              <div className="h-6 bg-black bg-opacity-10 rounded-md mb-2 animate-pulse"></div>
              <div className="h-4 bg-black bg-opacity-10 rounded-md mb-2 animate-pulse w-3/4"></div>
              <div className="h-4 bg-black bg-opacity-10 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
