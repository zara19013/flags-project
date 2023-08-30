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

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}alpha/${countryCode}`)
      .then((response) => {
        const fetchedCountryData = response.data[0];
        setCountryData(fetchedCountryData);

        const borderPromises = fetchedCountryData.borders?.map(
          (borderCountryCode) =>
            axios.get(`${apiBaseUrl}alpha/${borderCountryCode}`)
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
