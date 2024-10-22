import React from "react";

const CardsThreeSkeleton = () => {
  return (
    <div>
      {/* List of Placeholder Cards */}
      <ul className="list-none flex md:flex-wrap overflow-x-auto md:overflow-x-hidden border-t-2 md:border-t-3 border-y-black w-full">
        {Array.from({ length: 3 }, (_, index) => (
          <li
            key={`placeholder-${index}`}
            className={`min-w-64 md:min-w-0 md:w-1/3 border-x-black border-x-1px md:border-x-1.5px border-b-black border-b-2px md:border-b-3px 
        ${(index + 3) % 3 === 0 ? "md:border-l-0" : ""} 
        ${(index + 1) % 3 === 0 ? "md:border-r-0" : ""}`}
          >
            <div className="flex flex-col p-1 md:p-2 min-h-full animate-pulse">
              <article>
                <figure className="h-64 w-full rounded-md bg-black bg-opacity-10 flex-shrink-0"></figure>
                <div className="mt-4 p-2 md:p-3 lg:p-4">
                  <div className="h-4 bg-black bg-opacity-10 rounded-md mb-2 w-1/4"></div>
                  <div className="h-6 bg-black bg-opacity-10 rounded-md w-3/4"></div>
                </div>
              </article>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsThreeSkeleton;
