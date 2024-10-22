import React from "react";

const CardsOneTwoSkeleton = () => {
  return (
    <div>
      <ul className="list-none flex flex-col md:flex-row md:flex-wrap border-y-black border-t-2px md:border-t-3px w-full">
        <li className="w-full border-x-black border-x-0 border-b-black border-b-2px md:border-b-3px">
          <div className="flex p-1 md:p-2 min-h-full">
            <div className="w-2/4 aspect-w-1 aspect-h-1 flex-shrink-0">
              <div className="h-96 bg-black bg-opacity-10 rounded-md animate-pulse"></div>
            </div>
            <div className="flex flex-col justify-center w-2/4 px-2 md:px-3 lg:px-4 py-12">
              <div className="h-4 bg-black bg-opacity-10 rounded-md mb-2 animate-pulse w-24"></div>
              <div className="h-8 bg-black bg-opacity-10 rounded-md mb-2 animate-pulse w-2/3"></div>
              <div className="h-4 bg-black bg-opacity-10 rounded-md mb-1 animate-pulse "></div>
              <div className="h-4 bg-black bg-opacity-10 rounded-md mb-4 animate-pulse"></div>
              <div className="h-4 bg-black bg-opacity-10 rounded-md animate-pulse w-10"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardsOneTwoSkeleton;
