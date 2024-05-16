import dynamic from "next/dynamic";
import { useMemo } from "react";

export default async function Page() {
    const Map = useMemo(() => dynamic(
        () => import('../../components/Map/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <>
        <h2>Countries I have visited</h2>
            <div className="bg-white-700 mx-auto my-5 w-[100%] h-[480px]">
                <Map posix={[4.79029, -75.69003]} />
            </div>
        </>
    )
}