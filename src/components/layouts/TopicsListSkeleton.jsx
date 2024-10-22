import React from "react";

const TopicsListSkeleton = () => {
  return (
    <div className="relative border-y-black border-y-2px md:border-y-3px">
      <div aria-label="Topics Navigation">
        <ul className="flex overflow-x-auto scrollable flex-row list-none overscroll-none">
          <li className="flex flex-col flex-shrink-0 items-center bg-white border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px">
            <div className="flex flex-col items-center justify-center py-6 px-6 md:px-8 lg:px-10 animate-pulse">
              <div className="bg-black bg-opacity-10 rounded-full w-5 h-5 lg:w-6 lg:h-6"></div>
              <div className="mt-2 bg-black bg-opacity-10 h-4 w-16 lg:w-20 rounded-md"></div>
            </div>
          </li>
          <li className="flex flex-col flex-shrink-0 items-center bg-white border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px">
            <div className="flex flex-col items-center justify-center py-6 px-6 md:px-8 lg:px-10 animate-pulse">
              <div className="bg-black bg-opacity-10 rounded-full w-5 h-5 lg:w-6 lg:h-6"></div>
              <div className="mt-2 bg-black bg-opacity-10 h-4 w-16 lg:w-20 rounded-md"></div>
            </div>
          </li>
          <li className="flex flex-col flex-shrink-0 items-center bg-white border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px">
            <div className="flex flex-col items-center justify-center py-6 px-6 md:px-8 lg:px-10 animate-pulse">
              <div className="bg-black bg-opacity-10 rounded-full w-5 h-5 lg:w-6 lg:h-6"></div>
              <div className="mt-2 bg-black bg-opacity-10 h-4 w-16 lg:w-20 rounded-md"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopicsListSkeleton;
