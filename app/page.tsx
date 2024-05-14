"use client"
import Banner from "./components/LandingSections/Banner/Banner";
import NextPlacesToVisit from "./components/LandingSections/NextPlacesToVisit/NextPlacesToVisit";

export default function Home() {
  return (
    <>
      <Banner />
      <NextPlacesToVisit />
      <span 
        className="block text-center mt-28"
      >Made by <a href="https://twitter.com/WebdevQuesada" className="text-[#FFA500] underline">Carlos Quesada</a></span>
    </>
  );
}
