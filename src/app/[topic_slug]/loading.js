import React from 'react'

function loading() {
  return (
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
  )
}

export default loading