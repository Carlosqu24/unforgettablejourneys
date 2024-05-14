"use client"
import Banner from "./components/LandingSections/Banner/Banner";
import NextPlacesToVisit from "./components/LandingSections/NextPlacesToVisit/NextPlacesToVisit";

export default function Home() {
  return (
    <>
      <Banner />
      <NextPlacesToVisit />
      <h2 className="text-center mt-28">Made with ❤️ by Carlos Quesada</h2>
    </>
  );
}
