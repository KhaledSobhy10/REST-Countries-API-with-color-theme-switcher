import React from "react";
import { useParams, Link } from "react-router-dom";
function CountryDetails({ countries }) {
  const { countryName } = useParams();
  const country = countries.find(
    (country) => country.name === countryName && country.name !== "Israel"
  );
  console.log("country", country);

  function getBordersName(countriesAlpha3Code) {
    if (countries && countriesAlpha3Code && countriesAlpha3Code.length > 0) {
      return countries.filter((country) =>
        countriesAlpha3Code.includes(country.alpha3Code)
      );
    } else return null;
  }

  const {
    name,
    flag,
    nativeName,
    capital,
    population,
    region,
    subregion,
    currencies,
    topLevelDomain,
    languages,
    borders,
  } = country;

  return (
    <div className="w-full mt-8 md:px-16 px-8 py-4 flex flex-col justify-center items-start gap-4">
      <Link
        className="bg-white dark:bg-[#2b3945] dark:text-white  text-sm rounded shadow px-6 py-1"
        to={"/"}
      >
        {"Back"}
      </Link>
      <div className="p-2 grid md:grid-cols-4 grid-cols-1 md:grid-rows-[30px_150px_70px]  lg:gap-8 sm:gap-4 gap-8 text-sm text-black dark:text-white ">
        <img src={flag} className={"md:col-span-2  h-[250px]"} />
        <h1 className="md:col-start-3 md:row-start-1 font-bold text-lg dark:text-white">
          {name}
        </h1>
        {/*Most important*/}
        <div className="h-fit md:col-start-3 md:row-start-2 flex flex-col gap-2 ">
          <div className="flex gap-1 flex-wrap">
            {"Native Name:"}
            <span className="text-slate-500 dark:text-slate-300 break-words font-bold">
              {nativeName}
            </span>
          </div>
          <div className="flex gap-1">
            {"Population:"}
            <span className="text-slate-500 dark:text-slate-300 font-bold">
              {population}
            </span>
          </div>
          <div className="flex gap-1">
            {"Region:"}
            <span className="text-slate-500 dark:text-slate-300 font-bold">
              {region}
            </span>
          </div>
          <div className="flex gap-1">
            {"Sub Region:"}
            <span className="text-slate-500 dark:text-slate-300 font-bold">
              {subregion}
            </span>
          </div>
          <div className="flex gap-1">
            {"Capital:"}
            <span className="text-slate-500 dark:text-slate-300 font-bold">
              {capital}
            </span>
          </div>
        </div>
        {/*Important*/}
        <div className="flex flex-col gap-2 md:col-start-4 md:row-start-2">
          <div className="flex gap-1">
            {"Top Level Domain:"}
            <span className="text-slate-500 dark:text-slate-300 font-bold">
              {topLevelDomain[0]}
            </span>
          </div>
          <div className="flex gap-1">
            {"Currencies:"}
            <span className="text-slate-500 dark:text-slate-300 break-words font-bold">
              {currencies?.map((currency) => currency.name).join(", ")}
            </span>
          </div>
          <div className="flex gap-1">
            {"Languages:"}
            <span className="text-slate-500 dark:text-slate-300 break-words font-bold">
              {languages?.map((lang) => lang.name).join(", ")}
            </span>
          </div>
        </div>
        {/*Borders*/}
        <div className="md:col-start-3 md:col-span-2 md:row-start-3 flex gap-1 items-center flex-wrap text-sm ">
          {"Border Countries:"}
          {getBordersName(borders)?.map((country) => (
            <Link
              className="shadow px-2 py-1.5 rounded text-xs dark:bg-[#2b3945] font-bold"
              to={`/${country.name}`}
            >
              {country.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
