
import Pokemon from "../components/Pokemon";
import React, { useState, useEffect } from "react";
import "./PokemonFetch.css";

function PokemonFetch({ pokemonIds }) {
  const [pokemon, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await Promise.all(
        pokemonIds.map(async (id) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();
          return data;
        })
      );
      setPokemonData(data);
    };
    fetchPokemonData();
  }, [pokemonIds]);
  console.log(pokemon);

  return (
    <div className="home">
      {pokemon.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
export default PokemonFetch;
