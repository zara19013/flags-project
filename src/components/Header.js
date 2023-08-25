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

        {/* <p className="headerTitle" >
          Where in the world?
        </p> */}
        {/* <div className="modeToggle" onClick={toggleColorMode}>
          <i className="fas fa-moon modeIcon"></i>
          <span className="modeText">Dark Mode</span>
        </div>
      </div> */}
        </div>
    
    </header>
  );
}

export default Header;

// import React, { useContext} from 'react';
// import './Header.css';
// // import { RootContext } from '../App';

// export default function Header() {
//     return (
//         <div className="App-header">
//                 <p>Where in the world?</p>
//         </div>
//     )
// }

// function Header() {
//     const [, , , , , setIsAll, colorMode, setColorMode] = useContext(RootContext);
  
//     function goHome() {
//       setIsAll(true);
//     }
//     function changeMode() {
//       (colorMode === "light") ? setColorMode("dark") : setColorMode("light")
//     }
  
//     return (
//       <header className="header">
//         <div className="container">
//           <p className="headerTitle" onClick={goHome}>Where in the world?</p>
//           <p onClick={changeMode}>
//             <i className="fas fa-moon moonIcon"></i>
//             Dark Mord
//           </p>
//         </div>
//       </header>
//     );
//   }
  
//   export default Header;
