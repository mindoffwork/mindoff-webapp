export default function Loading() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Main Header Loading */}
        <div className="w-4/5 md:w-3/5 mx-auto pt-24 pb-28">
          <div className="h-16 bg-black bg-opacity-10 rounded-md mb-4 w-3/5 animate-pulse"></div>
          <div className="h-8 bg-black bg-opacity-10 rounded-md w-full mb-4 animate-pulse"></div>
          <div className="h-8 bg-black bg-opacity-10 rounded-md w-full mb-4 animate-pulse"></div>
          <div className="h-8 bg-black bg-opacity-10 rounded-md w-full mb-8 animate-pulse"></div>
          <div className="flex space-x-4 animate-pulse ">
            <div className="h-10 w-24 bg-black bg-opacity-10 rounded-md"></div>
            <div className="h-10 w-24 bg-black bg-opacity-10 rounded-md"></div>
            <div className="h-10 w-24 bg-black bg-opacity-10 rounded-md"></div>
            <div className="h-10 w-24 bg-black bg-opacity-10 rounded-md"></div>
          </div>
        </div>

        {/* Image Section Loading */}
        <div className="flex flex-col justify-center items-center w-full bg-yellow border-black border-y-2px md:border-y-3px py-32">
          <div className="h-40 w-64 bg-black bg-opacity-10 rounded-md animate-pulse "></div>
        </div>

        {/* About Posts Loading */}
        <div className="w-full py-16 md:py-24 border-black border-b-2px md:border-b-3px">
          <div className="w-4/5 md:w-3/6 mx-auto animate-pulse">
            <div className="h-20 bg-black bg-opacity-10 rounded-md mb-4"></div>
            <div className="h-10 bg-black bg-opacity-10 rounded-md mb-4"></div>
            <div className="h-10 bg-black bg-opacity-10 rounded-md mb-4"></div>
          </div>
        </div>

        {/* About Posts Loading */}
        <div className="w-full p-16 md:py-24 bg-brown border-black border-b-2px md:border-b-3px">
          <div className="w-4/5 md:w-3/6 animate-pulse">
            <div className="h-20 bg-black bg-opacity-10 rounded-md mb-4"></div>
            <div className="h-10 bg-black bg-opacity-10 rounded-md mb-4"></div>
            <div className="h-10 bg-black bg-opacity-10 rounded-md mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
