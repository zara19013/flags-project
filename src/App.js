// import React, {useState, useEffect }  from 'react';
import React from 'react';
import './App.css'
//import ReactDOM from 'react-dom';


export const PictureCard = ({ imageUrl, countryName, population, region, capital }) => {
  return (
    // <div className="card-container">
    <div className='card-container'>
      <img src={imageUrl} alt="countryName" className="flag" />
      <div className="description">
       <h2 className="countryName">{countryName}</h2> 
      <div className="population">
        <span className="title">Population: </span>
        {population}
      </div>
      <div className="region">
        <span className="title">Region: </span>
        {region}
      </div>
      <div className="capital">
        <span className="title">Capital: </span>
        {capital}
      </div>
      </div>
      
    </div>   
  );
};

function App() {

  const imageUrl = 'https://cdn.countryflags.com/thumbs/pakistan/flag-400.png';
  return (
<div className="App">
      <div className="card-container">
        <div className="flag">
          <PictureCard 
          imageUrl={imageUrl}
          countryName="Pakistan"
          population="23456789"
          region="Asia"
          capital="Islambad"
          />
        </div>
      </div>

      <div className="card-container">
        <div className="flag">
          <PictureCard 
          imageUrl={imageUrl}
          countryName="Pakistan"
          population="23456789"
          region="Asia"
          capital="Islambad"
          />
        </div>
      </div>
      <div className="card-container">
        <div className="flag">
          <PictureCard 
          imageUrl={imageUrl}
          countryName="Pakistan"
          population="23456789"
          region="Asia"
          capital="Islambad"
          />
        </div>
      </div>
      <div className="card-container">
        <div className="flag">
          <PictureCard 
          imageUrl={imageUrl}
          countryName="Pakistan"
          population="23456789"
          region="Asia"
          capital="Islambad"
          />
        </div>
      </div>
      <div className="card-container">
        <div className="flag">
          <PictureCard 
          imageUrl={imageUrl}
          countryName="Pakistan"
          population="23456789"
          region="Asia"
          capital="Islambad"
          />
        </div>
      </div>
      <div className="card-container">
        <div className="flag">
          <PictureCard 
          imageUrl={imageUrl}
          countryName="Pakistan"
          population="23456789"
          region="Asia"
          capital="Islambad"
          />
        </div>
      </div>
      <div className="card-container">
        <div className="flag">
          <PictureCard 
          imageUrl={imageUrl}
          countryName="Pakistan"
          population="23456789"
          region="Asia"
          capital="Islambad"
          />
        </div>
      </div>
      </div>

  );
}

export default App;




// const App = () => {

//   return (<div className="App">
  
// </div>)
//   // const [Countries, setcountries]= useState([]);
//   // useEffect(() => {
//   //   fetch('https://restcountries.com/v3.1/all')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       setcountries(data);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching data:', error);
//   //     });
//   // }, []);
//   // return
  
// };
 
// export default App;

