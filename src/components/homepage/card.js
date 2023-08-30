import React from "react";
import "./Card.css";
import "../../App.css";
import { Link } from "react-router-dom";

export const Card = ({ countries }) => {
  const renderCountryCards = () => {
    return countries.map((country) => (
      <div className="card-container" key={country.name.common}>
        <div className="flag">
          <Link to={`/details?code=${country.cca2}`} className="flag-link">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="picture-image"
            />
          </Link>
          <div className="card-container">
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
