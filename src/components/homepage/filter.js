import React, { useContext, useState } from 'react';
import { RootContext } from '../../App';
import axios from 'axios';
import SearchInput from './search';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import './filter.css';
import'./feild_container.css';

function Filter({ countriesData, onFilterChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("Filter by Region");
  

   
  const handleSearch = (searchData) => {
    onFilterChange(searchData);
  };

    function openList() {
      setIsOpen(!isOpen);
    }
  
    function handleChange(e) {
        const region = e.target.getAttribute("data-value");
        
        if (region === "All") {
          onFilterChange(countriesData);
        } else {
          fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(data => {
              onFilterChange(data);
            })
            .catch(err => console.log("Error: ", err));
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
                <li data-value="All" onClick={handleChange}> All</li>
                <li data-value="Africa" onClick={handleChange}> Africa</li>
                <li data-value="Americas" onClick={handleChange}> America</li>
                <li data-value="Antarctic" onClick={handleChange}> Antarctic</li>
                <li data-value="Asia" onClick={handleChange}> Asia</li>
                <li data-value="Europe" onClick={handleChange}> Europe</li>
                <li data-value="Oceania" onClick={handleChange}> Oceania</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;