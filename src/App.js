import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Home page/filter';
// import All from './components/Home page/feild_container';
import { Card } from './components/Home page/card';
import Header from './components/Header';
import axios from 'axios';
export const RootContext = createContext(); 
function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  
  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/all")
  //     .then(response => setCountries(response.data))
      
  //     .catch(error => console.error(error))
  // }, []);
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
    // <div className="App">
    //   <Header />
    //   {/* <All/> */}
    //   {/* <Filter/> */}
    //   <div className="contents"> 
    //   <div>
    //   <div className="feild-header">
    //   </div>
    //     <div className="card-container">
    //       {/* <button className="backBtn">Back</button> */}
    //       {countries.map(country => (
    //         <div className="card-container" key={country.name.common}>
    //           <div className="flag">
    //             <Card
    //               imageUrl={country.flags.png}
    //               countryName={country.name.common}
    //               population={country.population}
    //               region={country.region}
    //               capital={country.capital}
    //             />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    // </div>
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



//  import React, {createContext, useState, useEffect }  from 'react';
// import './App.css'
// import axios from 'axios';
// import Header from './components/Header';

// export const RootContext = createContext();
// export const PictureCard = ({ imageUrl, countryName, population, region, capital }) => {
//   return (
//     <div className='card-container'>
//       <img src={imageUrl} alt="countryName" className="picture-image" />
//       <div className="description">
//        <h2 className="countryName">{countryName}</h2> 
//       <div className="population">
//         <span className="title">Population: </span>
//         {population}
//       </div>
//       <div className="region">
//         <span className="title">Region: </span>
//         {region}
//       </div>
//       <div className="capitanpl">
//         <span className="title">Capital: </span>
//         {capital}
//       </div>
//       </div>
      
//     </div>   
//   );
// };

// function App() {
//  const [countries, setcountries]= useState([]);
//   useEffect(()=>{
//     axios.get("https://restcountries.com/v3.1/all")
//     .then(response => setcountries(response.data))
//     .catch(error => console.error(error))
//   })
//   return (
// <div className="App">
//   <Header/>
      
//       <div className="card-container">
//       {countries.map(country => (
//         <div className="card-container" key={country.name.common}>
//           <div className="flag">
//             <PictureCard
//               imageUrl={country.flags.png}
//               countryName={country.name.common}
//               population={country.population}
//               region={country.region}
//               capital={country.capital}
//             />
//           </div>
//         </div>
//       ))}
     
        
//       </div>
//       {/* <div className="card-container">
//         <div className="flag">
//           <PictureCard 
//           imageUrl={imageUrl}
//           countryName="Pakistan"
//           population="23456789"
//           region="Asia"
//           capital="Islambad"
//           />
//         </div>
//       </div> */}
//       </div>

//   );
// }

// export default App;