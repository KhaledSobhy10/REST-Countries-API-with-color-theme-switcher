import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, population, capital, region, flag }) {
  return (
    <Link to={name}>
      <div className="flex flex-col gap-4 justify-between  w-[180px] min-h-[250px] text-xs  shadow-md rounded overflow-hidden dark:bg-[#2b3945] dark:text-white hover:cursor-pointer hover:scale-105 ease-in-out	duration-300		">
        <img src={flag} alt="flag" className="w-full bg-white" />
        <div className="flex flex-col gap-1 p-2">
          <strong className="w-fit mb-1 text-sm">{name}</strong>
          <div className="flex gap-1">
            {"Population:"}
            <span className="text-slate-500 dark:text-slate-300">
              {population}
            </span>
          </div>
          <div className="flex gap-1">
            {"Region:"}
            <span className="text-slate-500 dark:text-slate-300">{region}</span>
          </div>
          <div className="flex gap-1">
            {"Capital:"}
            <span className="text-slate-500 dark:text-slate-300">
              {capital}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
