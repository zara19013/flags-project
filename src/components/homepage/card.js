import React from 'react';
import './Card.css';
import '../../App.css';
import App from '../../App';

export const Card = ({ imageUrl, countryName, population, region, capital }) => {
  return (
    <div className='card-container'>
    <img src={imageUrl} alt="countryName" className="picture-image" />
    <div className="description">
     <h2 className="countryName">{countryName}</h2> 
    <div className="population">
      <span className="title"><b>Population: </b></span>
      {population}
    </div>
    <div className="region">
      <span className="title"><b>Region: </b></span>
      {region}
    </div>
    <div className="Capital">
      <span className="title"><b>Capital: </b></span>
      {capital}
    </div>
    </div>
    
  </div>   
);
};
