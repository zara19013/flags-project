// import React from 'react';
// import './Card.css';
// import '../../App.css';
// import App from '../../App';

// export const Card = ({ imageUrl, countryName, population, region, capital }) => {
//   return (
//     <div className='card-container'>
//       <img src={imageUrl} alt="countryName" className="picture-image" />
//       <div className="description">
//         <h2 className="countryName">{countryName}</h2>
//         <div className="population">
//           <span className="title"><b>Population: </b></span>
//           {population}
//         </div>
//         <div className="region">
//           <span className="title"><b>Region: </b></span>
//           {region}
//         </div>
//         <div className="Capital">
//           <span className="title"><b>Capital: </b></span>
//           {capital}
//         </div>
//       </div>

//     </div>
//   );
// };

import React from "react";
import "./Card.css";
import "../../App.css";
import { Link } from "react-router-dom";

// export const ClickableFlag = ({ country }) => {
//   return (
//     <Link to={`/details?name=${country.name.common}`} className="flag-link">
//       <div className="flag">
//         <div className="card-container">
//           <img
//             src={country.flags.png}
//             alt={country.name.common}
//             className="picture-image"
//           />
//         </div>
//       </div>
//     </Link>
//   );
// };

export const Card = ({ countries }) => {
  const renderCountryCards = () => {
    return countries.map((country) => (
      <div className="card-container" key={country.name.common}>
        <div className="flag">
          {/* <Link to={`/details?name=${country.tld}`} className="flag-link"> */}
          <Link to={`/details?code=${country.cca2}`} className="flag-link">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="picture-image"
            />

            <div className="card-container">
              {/* <img src={country.flags.png} alt={country.name.common} className="picture-image" /> */}
              <div className="description">
                <h2 className="countryName">{country.name.common}</h2>
                <div className="population">
                  <span className="title">
                    <b>Population: </b>
                  </span>
                  {country.population}
                </div>
                <div className="region">
                  <span className="title">
                    <b>Region: </b>
                  </span>
                  {country.region}
                </div>
                <div className="Capital">
                  <span className="title">
                    <b>Capital: </b>
                  </span>
                  {country.capital ? country.capital.join(", ") : "N/A"}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="contents">
      <div className="feild-header">
        <div className="card-container">{renderCountryCards()}</div>
      </div>
    </div>
  );
};
