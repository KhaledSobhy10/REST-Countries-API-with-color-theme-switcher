import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import CountryDetails from "./pages/CountryDetails";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#202c37] flex flex-col items-center">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main countries={countries} />}></Route>
          <Route
            path="/:countryName"
            element={<CountryDetails countries={countries} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
