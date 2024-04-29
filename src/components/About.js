
import React from "react";
import "./About.css";
import Navbar from '../components/Navbar';
import Miko from '../components/Miko.jpeg'; // Import Miko image
import Wojtek from '../components/Wojtek.jpeg'; // Import Wojtek image
function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <h1>Miko & Wojtek</h1>
        <p>
         Two Global Business Engineering students with passion for Pokemon... 
         From young age both of these students have shown interest in the 
         pocket monsters and with the help of web design classes they decided to create a pokedex on their own. Who knows what future will hold for them,
         but you can be sure that it will involve pokemon.
         <br></br>
         May they catch 'em all...
        </p>
        <div className="about-us-picture-wrapper">
<img src={Miko} width="200px" alt="Miko image" />
        <img src={Wojtek} width="200px" alt="Wojtek image" />
        </div>
        
        
      </div>
    </div>
  );
}

export default AboutMe;
