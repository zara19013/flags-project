import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/homepage/card";
import Filter from "./components/homepage/filter";
import DetailsPage from "./components/Detail/Detail";
import Header from "./components/Header";
import axios from "axios";
import "./darkmode.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const RootContext = createContext();

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [colorMode, setColorMode] = useState("light");

  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountriesData(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const handleFilterChange = (filteredData) => {
    setFilteredCountries(filteredData);
  };

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light"); // Toggle color mode
  };

  return (
    <RootContext.Provider value={{ colorMode, toggleColorMode }}>
      <div className={`App ${colorMode === "dark" ? "dark" : ""}`}>
        {/* <div className="App"> */}
          <Header />

          {/* <Filter countriesData={countriesData} onFilterChange={handleFilterChange} /> */}
           {/* <Card countries={filteredCountries} /> */}
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Card countries={filteredCountries} />  } /> */}
              <Route
              path="/" element={ <>
              <Filter countriesData={countriesData}onFilterChange={handleFilterChange}/>
              <Card countries={filteredCountries} />
                </>
              }
            />
              {/* <Filter countriesData={countriesData} onFilterChange={handleFilterChange} /> */}
              <Route path="/details" element={<DetailsPage />} />
            </Routes>
          </BrowserRouter>

        </div>
      {/* </div> */}
    </RootContext.Provider>
  );
}

export default App;
