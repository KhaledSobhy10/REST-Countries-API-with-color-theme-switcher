import React, { useState } from "react";

function SearchBox({ handleCountry }) {
  const [countryNameQuery, setCountryNameQuery] = useState("");
  return (
    <div className="p-2 text-xs shadow rounded w-[300px] max-w-full flex gap-4 items-center  bg-white dark:bg-[#2b3945] ">
      <svg
        className="fill-slate-400 dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16px"
        height="16px"
        onClick={() => {}}
      >
        {" "}
        const [countryNameQuery, setCountryNameQuery] = useState("");
        <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
      </svg>
      <input
        type={"text"}
        className="outline-none bg-white dark:bg-[#2b3945] placeholder:text-slate-400 dark:text-white"
        placeholder="Search for a country..."
        onChange={(e) => {
          setCountryNameQuery(e.target.value);
          handleCountry(e.target.value);
        }}
        value={countryNameQuery}
      />
    </div>
  );
}

export default SearchBox;
