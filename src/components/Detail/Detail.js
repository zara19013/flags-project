// import React from 'react';
// import './detail.css'; // Import your CSS for styling

// function DetailsPage({ countryData }) {
//   const { name, population, region, capital, flag, languages, currencies } = countryData;

//   return (
//     <div className="country-details">
//       <img src={flag} alt={`${name.common} Flag`} className="flag-image" />
//       <div className="details">
//         <h2>{name.common}</h2>
//         <p><strong>Population:</strong> {population.toLocaleString()}</p>
//         <p><strong>Region:</strong> {region}</p>
//         <p><strong>Capital:</strong> {capital}</p>
//         <p><strong>Languages:</strong> {Object.values(languages).join(', ')}</p>
//         <p><strong>Currencies:</strong> {Object.values(currencies).join(', ')}</p>
//       </div>
//     </div>
//   );
// }

// export default DetailsPage;

import React from 'react';
import './detail.css'; // Import your CSS for styling
import App from '../../App';

function DetailsPage() {
  const countryData = {
    name: 'Algeria',
    nativeName: 'الجزائر',
    population: 43000000,
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Algiers',
    topLevelDomain: '.dz',
    currency: 'Algerian Dinar (DZD)',
    languages: ['Arabic', 'Berber'],
    borderCountries: ['Tunisia', 'Libya', 'Niger', 'Mali', 'Mauritania', 'Western Sahara'],
  };

//   return (
//     <div className='App'>
//         <div className="contents">
//         <div className="backBtn">
//           <span className="backArrow">←</span> Back
//           </div>
//     <div className="country-details">
//       <img src="https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=" alt="Algeria Flag" className="flag-image" />
//       <div className="details">
//         <h2>{countryData.name}</h2>
//         <div className="wrapInsideDetail">
//         <div className="leftDetail">
//         <p><strong>Native Name:</strong> {countryData.nativeName}</p>
//         <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
//         <p><strong>Region:</strong> {countryData.region}</p>
//         <p><strong>Sub Region:</strong> {countryData.subregion}</p>
//         <p><strong>Capital:</strong> {countryData.capital}</p>
//         </div>
    
    
//             <div className="rightInsideDetail">
//         <p><strong>Top Level Domain:</strong> {countryData.topLevelDomain}</p>
//         <p><strong>Currency:</strong> {countryData.currency}</p>
//         <p><strong>Languages:</strong> {countryData.languages.join(', ')}</p>
//         <p><strong>Border Countries:</strong> {countryData.borderCountries.join(', ')}</p>
//       </div>
//       </div>
// </div>
//     </div>
//     </div>
//    </div>
   
//   );
// }

// export default DetailsPage;

return (
    <div className="contents">
      <div className="container">
        <div className="backBtn">
          <span className="backArrow">←</span> Back
        </div>
        
        <div className="wrapDetail">
          <div className="leftFlag">
            <img src="https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=" alt="Algeria Flag" className="leftFlag" />
          </div>
          <div className="rightDetail">
            <h2 className="countryName">{countryData.name}</h2>
            <div className="wrapInsideDetail">
              <div className="leftInsideDetail">
              <p><strong>Native Name:</strong> {countryData.nativeName}</p>
                <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {countryData.region}</p>
                <p><strong>Sub Region:</strong> {countryData.subregion}</p>
               <p><strong>Capital:</strong> {countryData.capital}</p>
               </div>
               <div className="rightInsideDetail">
               <p><strong>Top Level Domain:</strong> {countryData.topLevelDomain}</p>
              <p><strong>Currency:</strong> {countryData.currency}</p>
                <p><strong>Languages:</strong> {countryData.languages.join(', ')}</p>
              </div>
            </div>
            <div className="borderCountries">
              <div className="title">Border Countries:</div>
              <div className="wrapBorderCountries">
                {countryData.borderCountries.map((borderCountry, index) => (
                  <button className="borderCountry" key={index}>
                    {borderCountry}
                  </button>
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