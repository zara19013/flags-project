// layout dessign
// import React, { useEffect, useState } from 'react';
// import './detail.css';
// import App from '../../App';

// function DetailsPage() {
//   const countryData = {
//     name: 'Algeria',
//     nativeName: 'الجزائر',
//     population: 43000000,
//     region: 'Africa',
//     subregion: 'Northern Africa',
//     capital: 'Algiers',
//     topLevelDomain: '.dz',
//     currency: 'Algerian Dinar (DZD)',
//     languages: ['Arabic', 'Berber'],
//     borderCountries: ['Tunisia', 'Libya', 'Niger', 'Mali', 'Mauritania', 'Western Sahara'],
//   };

// return (

//       <div  className="contents">
//       <div className="container">
//         <div className="backBtn">
//           <span className="backArrow">←</span> Back
//         </div>

//         <div className="wrapDetail">
//           <div className="leftFlag">
//             <img src="https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=" alt="Algeria Flag" className="leftFlag" />
//           </div>
//           <div className="rightDetail">
//             <h2 className="countryName">{countryData.name}</h2>
//             <div className="wrapInsideDetail">
//               <div className="leftInsideDetail">
//               <p><strong>Native Name:</strong> {countryData.nativeName}</p>
//                 <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
//                 <p><strong>Region:</strong> {countryData.region}</p>
//                 <p><strong>Sub Region:</strong> {countryData.subregion}</p>
//                <p><strong>Capital:</strong> {countryData.capital}</p>
//                </div>
//                <div className="rightInsideDetail">
//                <p><strong>Top Level Domain:</strong> {countryData.topLevelDomain}</p>
//               <p><strong>Currency:</strong> {countryData.currency}</p>
//                 <p><strong>Languages:</strong> {countryData.languages.join(', ')}</p>
//               </div>
//             </div>
//             <div className="borderCountries">
//               <div className="title">Border Countries:</div>
//               <div className="wrapBorderCountries">
//                 {countryData.borderCountries.map((borderCountry, index) => (
//                   <button className="borderCountry" key={index}>
//                     {borderCountry}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailsPage;
//--------------------------------------------------------------------------- layout design
import React, { useEffect, useState } from "react";
import "./detail.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";

function DetailsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const countryCode = queryParams.get("code");

  const [countryData, setCountryData] = useState({});
  const [borderCountryNames, setBorderCountryNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      // .get(`https://restcountries.com/v3.1/alpha/pk`)
      .then((response) => {
        const fetchedCountryData = response.data[0];
        setCountryData(fetchedCountryData);

        const borderPromises = fetchedCountryData.borders?.map(
          (borderCountryCode) =>
            axios.get(
              `https://restcountries.com/v3.1/alpha/${borderCountryCode}`
            )
        );

        if (borderPromises) {
          Promise.all(borderPromises)
            .then((responses) => {
              const borderNames = responses.map(
                (response) => response.data[0].name.common
              );
              setBorderCountryNames(borderNames);
            })
            .catch((error) => {
              console.error(error);
            });
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [countryCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(countryData);
  return (
    <div className="contents">
      <div className="container">
        <div className="backBtn" onClick={() => window.history.back()}>
          <span className="backArrow">←</span> Back
        </div>

        <div className="wrapDetail">
          <div className="leftFlag">
            <img
              src={countryData.flags?.png}
              alt={`${countryData.name?.common} Flag`}
              className="leftFlag"
            />
          </div>
          <div className="rightDetail">
            <h2 className="countryName">{countryData.name?.common}</h2>
            <div className="wrapInsideDetail">
              <div className="leftInsideDetail">
                <p>
                  <strong>Native Name:</strong> {countryData.name?.official}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {countryData.population?.toLocaleString()}
                </p>
                <p>
                  <strong>Region:</strong> {countryData.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {countryData.subregion}
                </p>
                <p>
                  <strong>Capital:</strong>{" "}
                  {Array.isArray(countryData.capital)
                    ? countryData.capital.join(", ")
                    : countryData.capital}
                </p>
              </div>
              <div className="rightInsideDetail">
                <p>
                  <strong>Top Level Domain:</strong>{" "}
                  {countryData.tld.join(", ")}
                </p>
                <p>
                  <strong>Currencies:</strong>{" "}
                  {Object.entries(countryData.currencies)
                    .map(
                      ([code, currency]) =>
                        `${currency.name} (${currency.symbol})`
                    )
                    .join(", ")}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {Object.values(countryData.languages).join(", ")}
                </p>
              </div>
            </div>
            <div className="borderCountries">
              <div className="title">Border Countries:</div>
              <div className="wrapBorderCountries">
                {borderCountryNames.map((borderCountryName, index) => (
             <Link
             to={`/border-details?code=${countryData.borders[index]}`}
             className="borderCountry"
           >
             {borderCountryName}
           </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
