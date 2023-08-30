import React, { useEffect, useState } from "react";
import "./detail.css";

import axios from "axios";

import { useLocation } from "react-router";

function DetailsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const countryCode = queryParams.get("code");

  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
     
      .then((response) => {
        const fetchedCountryData = response.data[0];
        setCountryData(fetchedCountryData);
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
        <div className="backBtn">
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
                {countryData.borders?.map((borderCountry, index) => (
                  <button className="borderCountry" key={index}>
                    {borderCountry}
                  </button>
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
