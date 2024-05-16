"use client"
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { LatLngExpression } from "leaflet";

import {
    Country,
    SELECTED_VISITED_COUNTRY_INITIAL_STATE,
    countriesVisitedList
} from "./data/countries";

export default function Page() {

    const [selectedVisitedCountry, setSelectedVisitedCountry] = useState<Country>(SELECTED_VISITED_COUNTRY_INITIAL_STATE)

    const Map = useMemo(() => dynamic(
        () => import('../../components/Map/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [selectedVisitedCountry.posix])


    const handleSelectCountry = (countryId: number) => {
        const foundCountry = countriesVisitedList
            .find(country => country.id === countryId) ??
            SELECTED_VISITED_COUNTRY_INITIAL_STATE

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
                <Map
                    posix={
                        selectedVisitedCountry.posix as LatLngExpression
                    }
                />
            </div>
        </>
    )
}