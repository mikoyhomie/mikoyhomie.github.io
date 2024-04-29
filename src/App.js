import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePokemons from "./pages/HomePokemons";
import PokemonDetails from "./pages/PokemonDetails";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<HomePokemons />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;