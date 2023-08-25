import React, { useContext } from 'react';
import { RootContext } from '../App';
import '@fortawesome/fontawesome-free/js/fontawesome';
 import '@fortawesome/fontawesome-free/js/solid';
import './Header.css';

function Header() {
//   const [, , , , , setIsAll, colorMode, setColorMode] = useContext(RootContext);

//   function goHome() {
//     setIsAll(true);
//   }

//   function toggleColorMode() {
//     setColorMode(colorMode === 'light' ? 'dark' : 'light');
//   }

   return (
     <header className="header">
      <div className="container">
      <a href="/App.js" className="headerTitle">
         <p> Where in the world?</p> 
        </a>
        </div>
    
    </header>
  );
}

export default Header;