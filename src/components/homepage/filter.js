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
  const [title, setTitle] = useState("Filter by Region");

  const handleSearch = (searchData) => {
    onFilterChange(searchData);
  };

  function openList() {
    setIsOpen(!isOpen);
  }

  async function handleChange(e) {
    const region = e.target.getAttribute("data-value");

    if (region === "All") {
      onFilterChange(countriesData);
    } else {
      try {
        const filteredCountries = await fetchCountriesByRegion(region);
        onFilterChange(filteredCountries);
      } catch (error) {
        console.error("Error filtering countries:", error);
      }
    }

    setTitle(region);
    setIsOpen(false);
  }
  
  return (
    <div className="feild">
      <div className="feild_container">
        <div className="inline-elements">
          <SearchInput onSearch={handleSearch} />
          <div className="FilterBox">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
