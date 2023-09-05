import React, { useState } from "react";
import { searchCountriesByName } from "../../Api/api";
import "./Search.css";

function SearchInput({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchAPI = async () => {
    // Mark the function as async
    if (searchText.trim() === "") {
      return;
    }
    try {
      const response = await searchCountriesByName(searchText);
      onSearch(response);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  return (
    <div className="inputBox">
      <i className="fas fa-search searchIcon"></i>
      <input
        type="text"
        className="searchBox"
        placeholder="Search by country name..."
        value={searchText}
        onChange={handleInputChange}
        onInput={handleSearchAPI}
      />
    </div>
  );
}

export default SearchInput;
