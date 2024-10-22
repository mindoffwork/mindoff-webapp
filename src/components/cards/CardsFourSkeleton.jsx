import React from 'react'

const CardsFourSkeleton = () => {
  return (
    <ul className="list-none flex md:flex-wrap overflow-x-auto scrollable md:overflow-x-hidden border-y-black border-t-2px md:border-t-3px overscroll-none w-full">
      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={'CardsFourSkeleton__' + index}
          className={`min-w-64 md:min-w-0 md:w-1/4 border-x-black border-x-1px md:border-x-1.5px border-b-black border-b-2px md:border-b-3px first:border-l-0 last:border-r-0 
            ${(index + 4) % 4 === 0 ? 'md:border-l-0' : ''} 
            ${(index + 1) % 4 === 0 ? 'md:border-r-0' : ''} transition-all duration-200 ease-in-out`}
        >
          <div className="flex flex-col p-1 md:p-2 min-h-full bg-gray-200 animate-pulse">
            <figure className="w-full aspect-w-1 aspect-h-1 flex-shrink-0 lg:p-10">
              <div className="bg-gray-300 w-full h-full" />
            </figure>
            <article className="p-8 lg:px-8 lg:py-24">
              <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded" />
              <div className="bg-gray-300 h-6 w-4/5 mb-5 rounded" />
              <div className="bg-gray-300 h-4 w-1/3 rounded" />
            </article>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CardsFourSkeleton