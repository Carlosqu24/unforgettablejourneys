import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="h-[50vh] flex flex-col items-center justify-center">
        <h1 className={`font-bold text-7xl m-0`}>Explore my world</h1>
        <p className="mt-8 text-2xl">Step into my travel history with UnforgettableJourneys, where every destination tells a story. Discover the places I’ve visited, from bustling cities to serene landscapes, through rich visuals and insightful statistics.</p>

        <div className="mt-12">
          <Link 
            className="p-4 bg-[#FFA500] text-[#000] text-2xl font-bold rounded-[10px] cursor-pointer"
            href={"/"}
          >Explore Countries I've Visited</Link>

        {/* <Link 
            className="mr-6 p-2 bg-[#3C6E47] text-[#000] font-bold rounded-[6px] cursor-pointer"
            href={"/"}
          >Trace my travel routes</Link> */}

        </div>
      </section>
  )
}

export default Banner