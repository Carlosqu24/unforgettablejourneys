"use client"
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

import {LatLngExpression} from "leaflet";

interface Country {
    id: number,
    name: string,
    posix: number[]
}

const SELECTED_VISITED_COUNTRY_INITIAL_STATE: Country = {
    id: 1,
    name: "Colombia",
    posix: [4.79029, -75.69003]
}

export default function Page() {

    const [selectedVisitedCountry, setSelectedVisitedCountry] = useState<Country>(SELECTED_VISITED_COUNTRY_INITIAL_STATE)

    const Map = useMemo(() => dynamic(
        () => import('../../components/Map/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [selectedVisitedCountry.posix])


    const countriesVisitedList = [{
        id: 1,
        name: "Colombia",
        posix: [4.79029, -75.69003]
    }, {
        id: 2,
        name: "Panama",
        posix: [8.98238, -79.51987]
    }, {
        id: 3,
        name: "Guatemala",
        posix: [14.63491, -90.50688]
    }]

    const handleSelectCountry = (countryId: number) => {
        console.log("alert1")
        const foundCountry = countriesVisitedList.find(country => country.id === countryId) ?? SELECTED_VISITED_COUNTRY_INITIAL_STATE
        console.log(foundCountry.name)
        setSelectedVisitedCountry(foundCountry)
    }

    return (
        <>
        <h2>Countries I have visited</h2>

            <div className="grid grid-cols-3 gap-2">
                {
                    countriesVisitedList.map((country) => (
                        <div 
                            key={country.id} 
                            className="p-2 bg-white text-[#000]"
                            onClick={() => handleSelectCountry(country.id)}
                        >
                            <h2>{country.name}</h2>
                        </div>
                    ))
                }
            </div>

            <div className="bg-white-700 mx-auto my-5 w-[100%] h-[480px]">
                <Map posix={selectedVisitedCountry.posix as LatLngExpression} />
            </div>
        </>
    )
}