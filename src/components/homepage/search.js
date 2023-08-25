import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

function SearchInput({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchAPI = () => {
    if (searchText.trim() === "") {
      return;
    }

    axios.get(`https://restcountries.com/v3.1/name/${searchText}`)
      .then(response => {
        onSearch(response.data);
      })
      .catch(error => {
        console.error("Error fetching country data:", error);
      });
  };

  return (
    <div className="inputBox">
      <i className="fas fa-search searchIcon"></i>
      <input
        type="text"
        className="searchBox"
        placeholder="Search by country name"
        value={searchText}
        onChange={handleInputChange}
        onClick={handleSearchAPI} 
      />

    </div>
  );
}

export default SearchInput;
