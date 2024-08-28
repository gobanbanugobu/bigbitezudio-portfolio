import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="border">
          <nav className="nav">
            <div className="nav-left">
              <div className="square"></div>
              <a className="companyName">bigbytezudio</a>
            </div>
            <div className={`nav-right ${menuOpen ? "open" : ""}`}>
              <ul className="nav-list">
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/Projects">Project</a>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
        </div>
      </header>

      <div>
        <h1 style={{color:"white",textAlign:"center"}}>We are Digital marketing Company in Coimbatore</h1>
      </div>
    </div>
  );
}
