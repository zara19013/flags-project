import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/homepage/card";
import Filter from "./components/homepage/filter";
import DetailsPage from "./components/Detail/Detail";
import Header from "./components/Header";
import "./darkmode.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAllCountries } from "./Api/api";

export const RootContext = createContext();

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchAllCountries();
        setCountriesData(response);
        setFilteredCountries(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
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
        <Header />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filter
                    countriesData={countriesData}
                    onFilterChange={handleFilterChange}
                  />
                  <Card countries={filteredCountries} />
                </>
              }
            />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/border-details" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RootContext.Provider>
  );
}

export default App;
