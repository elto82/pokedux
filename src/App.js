import { Col } from "antd";
import "./App.css";
import Searcher from "./components/Searcher.jsx";
import logo from "../src/statics/logo.svg";
import PokemonList from "./components/PokemonList";
import { useEffect, useState } from "react";
import { getPokemon } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fethPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
    fethPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
        <PokemonList pokemons={pokemons} />
      </Col>
    </div>
  );
}

export default App;
