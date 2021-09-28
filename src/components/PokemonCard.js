import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  console.log("Rendering PokemonCard")

  return (
    <Card>
      <div>
        <div className="image">
          <img src={sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

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