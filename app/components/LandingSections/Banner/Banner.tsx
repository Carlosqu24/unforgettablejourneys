import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="h-[50vh] flex flex-col items-center justify-center">
        <h1 className={`font-bold`}>Explore my world</h1>
        <p className="mt-2">Step into my travel history with [App Name], where every destination tells a story. Discover the places I’ve visited, from bustling cities to serene landscapes, through rich visuals and insightful statistics.</p>

        <div className="mt-8">
          <Link 
            className="mr-6 p-2 bg-[#e4db87] text-[#000] font-bold rounded-[6px] cursor-pointer"
            href={"/"}
          >Countries around the world</Link>

        <Link 
            className="mr-6 p-2 bg-[#d1da92] text-[#000] font-bold rounded-[6px] cursor-pointer"
            href={"/"}
          >Beautiful travels</Link>

        </div>
      </section>
  )
}

export default Banner