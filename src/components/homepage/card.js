// //  import React, {useContext} from "react";
// import React, {useState, useEffect} from "react";
// import axios from "axios";
// // import { RootContext } from "../../App"; 
// import './Card.css'
// import './App.css'

// export const PictureCard = ({ imageUrl, countryName, population, region, capital }) => {
//     return (
//       <div className='card-container'>
//         <img src={imageUrl} alt="countryName" className="picture-image" />
//         <div className="description">
//          <h2 className="countryName">{countryName}</h2> 
//         <div className="population">
//           <span className="title">Population: </span>
//           {population}
//         </div>
//         <div className="region">
//           <span className="title">Region: </span>
//           {region}
//         </div>
//         <div className="capital">
//           <span className="title">Capital: </span>
//           {capital}
//         </div>
//         </div>
        
//       </div>   
//     );
//   };
  

// export function card ()
// {
//     const [countries, setcountries]= useState([]);
//     useEffect(()=>{
//       axios.get("https://restcountries.com/v3.1/all")
//       .then(response => setcountries(response.data))
//       .catch(error => console.error(error))
//     })
//     return (
//         <div className="App">
              
//               <div className="card-container">
//               {countries.map(country => (
//                 <div className="card-container" key={country.name.common}>
//                   <div className="flag">
//                     <PictureCard
//                       imageUrl={country.flags.png}
//                       countryName={country.name.common}
//                       population={country.population}
//                       region={country.region}
//                       capital={country.capital}
//                     />
//                   </div>
//                 </div>
//               ))}
             
                
//               </div>
//               </div>
        
//           );
// }
import React from 'react';
import './Card.css';
import '../../App.css';
export const Card = ({ imageUrl, countryName, population, region, capital }) => {
  return (
    <div className='card-container'>
    <img src={imageUrl} alt="countryName" className="picture-image" />
    <div className="description">
     <h2 className="countryName">{countryName}</h2> 
    <div className="population">
      <span className="title">Population: </span>
      {population}
    </div>
    <div className="region">
      <span className="title">Region: </span>
      {region}
    </div>
    <div className="capitanpl">
      <span className="title">Capital: </span>
      {capital}
    </div>
    </div>
    
  </div>   
);
};
