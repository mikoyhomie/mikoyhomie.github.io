
import React, { useState, useEffect } from "react";
import PokemonFetch from '../pages/PokemonFetch';
import Navbar from '../components/Navbar';

import "./HomePokemons.css";

function HomePokemons() {
  const [page, setPage] = useState(1);
  const [totalPokemons, setTotalPokemons] = useState(0);

  useEffect(() => {
    const fetchTotalPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setTotalPokemons(data.count);
    };
    fetchTotalPokemons();
  }, []);

  function makeArray() {
    let array = [];
    for (
      let i = (page - 1) * 20 + 1;
      i <= page * 20 && i <= totalPokemons;
      i++
    ) {
      array.push(i);
    }
    return array;
  }

  const pokemonIds = makeArray();

  function handleNextClick() {
    setPage(page + 1);
  }

  function handlePrevClick() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="App">
        <PokemonFetch pokemonIds={pokemonIds} />
      </div>
      <div className="button-container">
        <button
          onClick={handlePrevClick}
          disabled={page === 1}
          className={page === 1 ? "disabled" : ""}
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          disabled={page * 20 >= totalPokemons}
          className={page * 20 >= totalPokemons ? "disabled" : ""}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePokemons;
