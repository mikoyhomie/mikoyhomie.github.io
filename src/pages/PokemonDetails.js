
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';

import "./PokemonDetails.css";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const typeColor = typeColors[pokemon.types[0].type.name];
  return (
    <div className="pokemon-details-background">
      <Navbar />
      <div className="pokemon-details-container" style = {{ backgroundColor: typeColor }}>
        <div className="pokemon-image-container">
          <img
            className="pokemon-image"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="pokemon-info-container">
          <h1 className="pokemon-name">{pokemon.name}</h1>
          <div className="pokemon-info">
            <div className="pokemon-stats-container">
              <h2 className="pokemon-stats-headers">Stats</h2>
              <br></br>
              <ul className="pokemon-stats-list">
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pokemon-stats-container">
                <h2 className="pokemon-stats-headers">Abilities</h2>
                <br></br>
              <ul className="pokemon-abilities-list">
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            <div>
              <h2 className="pokemon-stats-headers">Height</h2>
              <br></br>
              <p className="pokemon-height">{pokemon.height / 10} m</p>
            </div>
            <div>
              <h2 className="pokemon-stats-headers">Weight</h2>
              <p className="pokemon-weight">{pokemon.weight / 10} kg</p>
            </div>
              </div>
          
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
