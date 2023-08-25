import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Home page/filter';
import { Card } from './components/Home page/card';
import Header from './components/Header';
import axios from 'axios';
export const RootContext = createContext(); 
function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

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


  return (

    <div className="App">
    <Header />
    <Filter countriesData={countriesData} onFilterChange={handleFilterChange} />

    <div className="contents">
      <div className="feild-header">
      </div>
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
  </div>
  );
}

export default App;
