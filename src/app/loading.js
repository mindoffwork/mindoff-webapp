export default function Loading() {
  return (
    <div className="flex-grow">
      {/* Header Skeleton */}
      <div>
        <div className="px-5 md:px-10 lg:px-14 py-12 md:py-16 lg:w-3/6 animate-pulse">
          <div className="h-10 md:h-16 bg-black bg-opacity-10 rounded-md w-3/4 mb-4"></div>
          <div className="h-6 bg-black bg-opacity-10 rounded-md w-1/2"></div>
        </div>
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
      </div>

      {/* Popular Now Section Skeleton */}
      <div>
        <div className="px-5 md:px-10 lg:px-14 py-7 md:py-8 lg:py-10">
          <div className="h-8 bg-black bg-opacity-10 rounded-md w-1/4 animate-pulse  lg:w-2/6 "></div>
        </div>
        <ul className="list-none flex md:flex-wrap overflow-x-auto scrollable md:overflow-x-hidden border-y-black border-t-2px md:border-t-3px overscroll-none w-full">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                className={`min-w-64 md:min-w-0 md:w-1/3 border-x-black border-x-1px md:border-x-1.5px border-b-black border-b-2px md:border-b-3px 
              ${(index + 3) % 3 === 0 ? "md:border-l-0" : ""} 
              ${(index + 1) % 3 === 0 ? "md:border-r-0" : ""}`}
              >
                <div className="flex flex-col p-1 md:p-2 min-h-full animate-pulse">
                  <article>
                    <figure className="h-64 w-full rounded-md aspect-w-1 aspect-h-1 bg-black bg-opacity-10 flex-shrink-0 lg:px-10"></figure>
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
    </div>
  );
}
