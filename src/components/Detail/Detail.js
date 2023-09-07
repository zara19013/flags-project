import React, { useEffect, useState } from "react";
import "./detail.css";
import { Link } from "react-router-dom";
import { fetchCountryDetailsByCode } from "../../Api/api";
import { useLocation } from "react-router";

function DetailsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const countryCode = queryParams.get("code");

  const [countryData, setCountryData] = useState({});
  const [borderCountryNames, setBorderCountryNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCountryData = await fetchCountryDetailsByCode(countryCode);
        setCountryData(fetchedCountryData);

        const borderPromises = fetchedCountryData.borders?.map(
          async (borderCountryCode) => {
            const borderCountryData = await fetchCountryDetailsByCode(
              borderCountryCode
            );
            return borderCountryData.name.common;
          }
        );

        if (borderPromises) {
          const borderCountryNames = await Promise.all(borderPromises);
          setBorderCountryNames(borderCountryNames);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
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
                  <strong>Native Name:</strong> {countryData.name?.common}
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
              <span className="wrapBorderCountries">
                {borderCountryNames.map((borderCountryName, index) => (
                  <Link
                    to={`/border-details?code=${countryData.borders[index]}`}
                    className="borderCountry"
                  >
                    {borderCountryName}
                  </Link>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
