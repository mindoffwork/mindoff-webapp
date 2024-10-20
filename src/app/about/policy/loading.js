export default function Loading() {
  return (
    <>
      <div className="flex-grow">
        {/* Main content with article and sidebar */}
        <div className="flex flex-col lg:flex-row min-h-screen border-black border-b-2px md:border-b-3px">
          {/* Article Section */}
          <div className="w-full lg:w-3/4 order-2">
            {/* Article Header */}
            <div>
              <div className="border-black border-b-2px md:border-b-3px bg-yellow ">
                <div className="w-5/6 py-12 md:py-16 mx-auto animate-pulse">
                  <div className="w-32 h-12 bg-black bg-opacity-10 rounded-md"></div>
                </div>
              </div>
              <div className="border-black border-b-2px md:border-b-3px ">
                <div className="w-5/6 py-12 md:py-16 mx-auto animate-pulse">
                  <div className="h-12 bg-black bg-opacity-10 w-3/4 rounded-md mb-6"></div>
                  <div className="h-6 bg-black bg-opacity-10 w-full rounded-md mb-4"></div>
                  <div className="h-6 bg-black bg-opacity-10 w-2/3 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* Section Skeletons */}
            <div className="w-full animate-pulse">
              <div className="w-5/6 py-12 md:py-16 mx-auto">
                <div className="h-8 w-24 bg-black bg-opacity-10 rounded-md mb-7"></div>
                <div className="space-y-4 ">
                  <div className="h-6 bg-black bg-opacity-10 rounded-md"></div>
                  <div className="h-6 bg-black bg-opacity-10 rounded-md"></div>
                  <div className="h-6 bg-black bg-opacity-10 rounded-md w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 h-auto lg:h-screen bg-green border-black border-b-2px lg:border-b-0 lg:border-r-3px sticky left-0 top-0 ">
            <div className="flex flex-row lg:flex-col overflow-auto scrollable p-4 md:p-8 animate-pulse">
              <div className="h-6 bg-black bg-opacity-10 w-24 lg:mb-6 rounded-md"></div>
              <ul className="flex flex-row space-x-4 lg:space-x-0 lg:flex-col lg:space-y-4 w-48 lg:w-full">
                <li className="h-6 bg-black bg-opacity-10  lg:w-3/4 rounded-md"></li>
                <li className="h-6 bg-black bg-opacity-10 w-3/4 rounded-md"></li>
                <li className="h-6 bg-black bg-opacity-10 w-3/4 rounded-md"></li>
                <li className="h-6 bg-black bg-opacity-10 w-3/4 rounded-md"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
