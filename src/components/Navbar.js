import { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import "./Navbar.css";

function Navbar() {
  // Declare state and a reference to the navigation element
  const navRef = useRef();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Define a function to show or hide the responsive navigation menu
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Use useEffect to update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        // Define format for the time string
      });
      setTime(timeString);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <h3>Miko & Wojtek</h3>
     
      <nav ref={navRef}>
        <a href="/pokedex/">
          <AiFillHome /> Home
        </a>
        <a href="https://www.linkedin.com/in/w-padilla-chrobok/">
          <BsPersonWorkspace /> Wojtek LinkedIn
        </a>
        <a href="https://www.linkedin.com/in/mikolaj-miko-olejnik/">
          <BsPersonWorkspace /> Miko  LinkedIn
        </a>
        <a href="/pokedex/#/about">
          <RxGithubLogo /> About us
        </a>
        {/* Render a button to close the navigation menu */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/* Render a button to show or hide the responsive navigation menu */}
      {
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      }
      <p className="rightNav">{time}</p>
    </header>
  );
}

export default Navbar;