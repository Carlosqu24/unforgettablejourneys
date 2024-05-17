import React from 'react'

const NextPlacesToVisit = () => {
  return (
    <section>
        <h1 className="text-center sm:text-left font-bold text-[36px] mb-4">Next cities to visit</h1>
        <ul className="text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          <li>Richmond, Virginia, USA 🇺🇸</li>
          <li>Memphis, Tenessee, USA 🇺🇸</li>
          <li>Washinton Island, Wisconsin, USA 🇺🇸</li>
          <li>Yosemite, California, USA 🇺🇸</li>
          <li>Panama city, Panama 🇵🇦</li>
          <li>Guatemala city, Guatemala 🇬🇹</li>
        </ul>
      </section>
  )
}

export default NextPlacesToVisit