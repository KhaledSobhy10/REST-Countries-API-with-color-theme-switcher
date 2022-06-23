import React, { useEffect, useState } from "react";

import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";
import SearchBox from "../components/SearchBox";
import RegionFilter from "../components/RegionFilter";

function Main({ countries }) {
  const [resultCountries, setResultCountries] = useState([]);
  const [filterRegion, setFilterRegion] = useState("None");

  useEffect(() => {
    if (countries) {
      setResultCountries(countries.slice(67, 77));
    }
  }, [countries]);

  function handelSearchQuery(userQuery) {
    userQuery = userQuery.trim();
    if (!userQuery) {
      setResultCountries(countries.slice(67, 77));
      console.log("userQuery", userQuery);
      return;
    }
    userQuery = userQuery.toLocaleLowerCase();
    const result = countries.filter((country) => {
      const countryName = country.name.toLocaleLowerCase();
      if (countryName !== "israel") {
        return countryName.includes(userQuery);
      }
      return false;
    });
    if (result && result.length > 0) setResultCountries(result);
  }

  function handleRegionsFilter(filter) {
    setFilterRegion(filter);
  }

  function filterFun(country) {
    if (filterRegion !== "None") {
      return country.region === filterRegion;
    }
    return true;
  }

  return (
    <>
      {(resultCountries.length && (
        <div className="flex flex-col gap-4 md:px-16 px-8 py-4 w-full items-center mt-8">
          <div className="w-full flex flex-wrap gap-2 justify-between ">
            <SearchBox handleCountry={handelSearchQuery} />
            <RegionFilter handleRegionsFilter={handleRegionsFilter} />
          </div>
          <div className="gap-5 grid grid-cols-mainGrid w-full  place-items-center  md:place-items-start ">
            {resultCountries
              .filter(filterFun)
              .map(({ name, population, region, capital, flag }) => (
                <CountryCard
                  key={name}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                  flag={flag}
                />
              ))}
          </div>
        </div>
      )) || <Spinner />}
    </>
  );
}

export default Main;
