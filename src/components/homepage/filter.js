import React, { useState } from "react";
import SearchInput from "./search";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "./filter.css";
import "./feild_container.css";
import { fetchCountriesByRegion } from "../../Api/api";
import { filterValues } from "../../const";

function Filter({ countriesData, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Filter by Region");
  const handleSearch = (searchData) => {
    onFilterChange(searchData);
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (value === "All") {
      onFilterChange(countriesData);
    } else {
      fetchCountriesByRegion(value)
        .then((filteredCountries) => onFilterChange(filteredCountries))
        .catch((error) => console.error("Error filtering countries:", error));
    }
  };

  // const handleSearch = (searchData) => {
  //   onFilterChange(searchData);
  // };

  // const toggleList = () => {
  //   setIsOpen(!isOpen);
  // };

  // function openList() {
  //   setIsOpen(!isOpen);
  // }

  // async function handleChange(e) {
  //   const region = e.target.getAttribute("data-value");

  //   if (region === "All") {
  //     onFilterChange(countriesData);
  //   } else {
  //     try {
  //       const filteredCountries = await fetchCountriesByRegion(region);
  //       onFilterChange(filteredCountries);
  //     } catch (error) {
  //       console.error("Error filtering countries:", error);
  //     }
  //   }

  //   setTitle(region);
  //   setIsOpen(false);
  // }
  
  return (
    <div className="feild">
      <div className="feild_container">
        <div className="inline-elements">
          <SearchInput onSearch={handleSearch} />
          <div className="custom-select">
            <div className="selected-option" onClick={toggleList}>
              {selectedValue} <i className="fas fa-angle-down downIcon"></i>
            </div>
            {isOpen && (
              <ul className="select-list">
                {filterValues.map((value) => (
                  <li onClick={() => handleSelect(value)} key={value}>
                    {value}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* <div className="FilterBox">
            <div className="selectTitle" onClick={openList}>
              {title} <i className="fas fa-angle-down downIcon"></i>
            </div>
            {isOpen && (
              <ul className="selectList">
                {filterValues.map((value) => (
                  <li data-value={value} onClick={handleChange} key={value}>
                    {value}
                  </li>
                ))}
              </ul>
            )}
          </div> */}
        </div>
      </div>
    </div>

  );
}

export default Filter;
