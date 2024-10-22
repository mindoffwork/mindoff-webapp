import React from "react";
export default function Loading() {
  return (
    <div className="flex-grow">
      <div>
        <div className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6 animate-pulse">
          <div className="h-10 md:h-16 bg-black bg-opacity-10 rounded-md w-3/4 mb-4"></div>
          <div className="h-6 bg-black bg-opacity-10 rounded-md w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
