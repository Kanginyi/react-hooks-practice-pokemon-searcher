import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  console.log("Rendering PokemonCollection")

  const renderPokemons = pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemons}
    </Card.Group>
  );
}

export default PokemonCollection;

/**    {
      "id": 2,
      "name": "ivysaur",
      "hp": 60,
      "sprites": {
        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
      }
    },
     */