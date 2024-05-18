import React from 'react'
import Link from 'next/link'
import ROUTES from '@/app/constants/routes'

const Banner = () => {
  return (
    <section className="h-[50vh] flex flex-col items-center justify-center text-center leading-8">
        <h1 className={`font-bold text-[36px] mb-4`}>Explore my world</h1>
        <p className="mt-2">Step into my travel history with [App Name], where every destination tells a story. Discover the places I’ve visited, from bustling cities to serene landscapes, through rich visuals and insightful statistics.</p>

        <div className="mt-8">
          <Link 
            className="block p-2 bg-[#FFA500] text-[#000] font-bold rounded-[6px] cursor-pointer"
            href={ROUTES.CITIES_I_HAVE_VISITED}
          >Explore cities I've visited</Link>

        {/* <Link 
            className="mr-6 p-2 bg-[#3C6E47] text-[#000] font-bold rounded-[6px] cursor-pointer"
            href={"/"}
          >Trace my travel routes</Link> */}

        </div>
      </section>
  )
}

export default Banner