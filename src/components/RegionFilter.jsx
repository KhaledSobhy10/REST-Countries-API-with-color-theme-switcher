import React, { useState } from "react";

function RegionFilter({ handleRegionsFilter }) {
  const [showRegions, setShowRegions] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  function handleSelection(v) {
    console.log(v.target.value);
    setSelectedRegion(v.target.value);
    setShowRegions((prev) => !prev);
    handleRegionsFilter(v.target.value);
  }
  return (
    <div className="w-[150px] bg-white dark:bg-[#2b3945] relative  shadow rounded flex p-2 dark:text-white">
      <button
        className="text-sm capitalize w-full text-start flex justify-between items-center"
        onClick={() => {
          setShowRegions((prev) => !prev);
        }}
      >
        {`${
          selectedRegion && selectedRegion !== "None"
            ? selectedRegion
            : "Filter by Region"
        }`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4"
        >
          <title>Chevron Down</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="36"
            d="M112 184l144 144 144-144"
          />
        </svg>
      </button>
      <div
        className={`${
          showRegions ? "" : "hidden"
        } absolute bg-white dark:bg-[#2b3945] flex flex-col gap-2 p-2 px-4 items-start shadow rounded w-full top-10 left-0 text-xs`}
      >
        <button value="Africa" onClick={handleSelection}>
          Africa
        </button>
        <button value="Americas" onClick={handleSelection}>
          Americas
        </button>
        <button value="Asia" onClick={handleSelection}>
          Asia
        </button>
        <button value="Europe" onClick={handleSelection}>
          Europe
        </button>
        <button value="Oceania" onClick={handleSelection}>
          Oceania
        </button>
        <button value="None" onClick={handleSelection}>
          None
        </button>
      </div>
    </div>
  );
}

export default RegionFilter;
