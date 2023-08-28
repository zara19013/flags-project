import React, { useContext } from 'react';
import SearchInput from './search';
import Filter from './filter';
import { RootContext } from '../../App';
import './filter_container.css';

function All() {
  const [countriesData] = useContext(RootContext);

  console.log(countriesData);
  return (
    <div className="feild">
      <div className="feild_header">
        <div className="choicesWrap">
          <SearchInput />
          <Filter />
        </div>
        <div className="cardWrap">
          {countriesData ? (
            countriesData.map((country, i) => {
              return <Card key={i} country={country} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default All;
