
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/homepage/card';
import Filter from './components/homepage/filter';
import DetailsPage from './components/Detail/Detail';
import Header from './components/Header';
import axios from 'axios';
import './darkmode.css'; 

export const RootContext = createContext(); 


function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountriesData(response.data);
        setFilteredCountries(response.data);
      })
      .catch(error => console.error(error))
  }, []);
  const handleFilterChange = (filteredData) => {
    setFilteredCountries(filteredData);
  };

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light"); // Toggle color mode
  };


  return (

    <RootContext.Provider value={{ colorMode, toggleColorMode }}>
      <div className={`App ${colorMode === 'dark' ? 'dark' : ''}`}>
    <div className="App">
    <Header />
     {/* <Filter countriesData={countriesData} onFilterChange={handleFilterChange} /> */}
    <DetailsPage/>
    {/* <div className="contents">
      <div className="feild-header">
     
      <div className="card-container">
        {filteredCountries.map(country => (
          <div className="card-container" key={country.name.common}>
            <div className="flag">
              <Card
                imageUrl={country.flags.png}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </div>
            
          </div>
        ))}
      </div>
       </div>
    </div> */}
  </div>
  </div>
  </RootContext.Provider>
  );
}

export default App;