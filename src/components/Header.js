import React, { useContext } from "react";
import { RootContext } from "../App";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "./Header.css";
import "../darkmode.css";

function Header() {
  const { colorMode, toggleColorMode } = useContext(RootContext);
  return (
    <header className={`header ${colorMode === "dark" ? "dark" : ""}`}>
      <div className="container">
        <a
          href="/"
          className={`headerTitle ${colorMode === "dark" ? "whiteText" : ""}`}
        >
          <p> Where in the world?</p>
        </a>

        <div className="modeToggle" onClick={toggleColorMode}>
          <i className="modeIcon fas fa-moon"></i>
          <p className="modeText">Dark Mode</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
