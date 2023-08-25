
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/homepage/card';
import Filter from './components/homepage/filter';
import Header from './components/Header';
import axios from 'axios';
export const RootContext = createContext(); 


function App() {

 const [countries, setcountries]= useState([]);
  useEffect(()=>{

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

        </div>
      ))}   
      </div>
      </div>


  );
}
export default App;