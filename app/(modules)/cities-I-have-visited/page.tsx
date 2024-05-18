"use client"
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { LatLngExpression } from "leaflet";

import { useRouter } from 'next/navigation'

import {
    Country,
    SELECTED_VISITED_COUNTRY_INITIAL_STATE,
    countriesVisitedList
} from "./data/countries";


function Loader() {
    return <div className="absolute z-80 top-0 left-0 w-[100%] h-[100%] bg-[#3a3a3a] m-auto">
        <p className="text-[65px]">Map loading...</p>
    </div>
}

export default function Page() {

    const [selectedVisitedCountry, setSelectedVisitedCountry] = useState<Country>(SELECTED_VISITED_COUNTRY_INITIAL_STATE)

    const Map = useMemo(() => dynamic(
        () => import('../../components/Map/Map'),
        {
            loading: () => <Loader />,
            ssr: false
        }
    ), [selectedVisitedCountry.posix])

    const router = useRouter()

    const handleSelectCountry = (countryId: number) => {
        const foundCountry = countriesVisitedList
            .find(country => country.id === countryId) ??
            SELECTED_VISITED_COUNTRY_INITIAL_STATE

        setSelectedVisitedCountry(foundCountry)
    }

    return (
        <>
            <h2>Countries I have visited</h2>

            <div 
                className="
                    w-[100vw] 
                    h-[auto] 
                    p-4
                    absolute 
                    bg-[#3a3a3a]
                    bottom-0 
                    left-0
                    z-20 
                    overflow-hidden
                ">
            <div
                id="countries-visited-list"
                className="
                    w-[200%]
                    h-[auto] 

                    flex
                    justify-start
                    items-center    

                    overflow-x-scroll
                "
            >
                {
                    countriesVisitedList.map((country) => {
                    
                    const isSelected = selectedVisitedCountry.id === country.id
                    
                    const style = 
                        isSelected 
                            ? "bg-[#FFA500] text-[#000] font-bold" 
                            : "bg-white text-[#2d2d2d]"

                    return (
                        <div
                            key={country.id}
                            className={`py-4 px-12 mr-4 ${style} rounded-[10px] hover:cursor-pointer hover:bg-[#FFA500] hover:text-[#000] hover:font-bold`}
                            onClick={() => handleSelectCountry(country.id)}
                        >
                            <h2>{country.name}</h2>
                        </div>
                    )}
                    )
                }
            </div>
            </div>

            <div className="absolute top-0 left-0 bg-white-700 w-[100%] h-[100vh] z-10">
                <Map
                    posix={
                        selectedVisitedCountry.posix as LatLngExpression
                    }
                />

            </div>

            <div
                className="
                mt-2
                mr-2
                    bg-[#3a3a3a] 
                    text-[#fff] 
                    absolute 
                    top-0 
                    right-0 
                    z-20 
                    w-[auto] 
                    h-[auto] 
                    p-2
                    rounded-[10px]
                    flex 
                    justify-center 
                    items-center 
                    hover:cursor-pointer
                "
                onClick={() => router.push('/')}
            >{`<`}</div>
        </>
    )
}