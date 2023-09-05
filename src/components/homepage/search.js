import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function SearchInput({ onSearch }) {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchAPI = () => {
    if (searchText.trim() === "") {
      return;
    }
    axios
      .get(`${apiBaseUrl}name/${searchText}`)
      .then((response) => {
        onSearch(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
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
