import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  console.log("Rendering PokemonPage")

  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearch] = useState("");

  const createNewPoke = (newPoke) => {
    setPokemons((prevArray) => [newPoke, ...prevArray] )
  }

  useEffect(() => {
    function getPokemons(){
      fetch("http://localhost:3001/pokemon")
        .then(r => r.json())
        .then(data=> setPokemons(data))
    }
    return getPokemons()
  }, [])

  //retuurn something else

  const filteredPoke = pokemons.filter(poke => poke.name.includes(searchText))
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm createNewPoke={createNewPoke} />
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPoke}/>
    </Container>
  );
}

export default PokemonPage;
