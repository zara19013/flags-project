import React, { useContext} from 'react';
import './Header.css';
import { RootContext } from './App';

// export default function Header() {
//     return (
//         <div className="App-header">
//                 <p>Where in the world?</p>
//         </div>
//     )
// }s

function Header() {
    const [, , , , , setIsAll, colorMode, setColorMode] = useContext(RootContext);
  
    function goHome() {
      setIsAll(true);
    }
    function changeMord() {
      (colorMode === "light") ? setColorMode("dark") : setColorMode("light")
    }
  
    return (
      <header className="header">
        <div className="container">
          <p className="headerTitle" onClick={goHome}>Where in the world?</p>
          <p onClick={changeMord}>
            <i className="fas fa-moon moonIcon"></i>
            Dark Mord
          </p>
        </div>
      </header>
    );
  }
  
  export default Header;
