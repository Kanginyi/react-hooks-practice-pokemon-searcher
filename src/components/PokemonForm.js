import { useState } from "react";
import { create } from "json-server";
import { Form } from "semantic-ui-react";

function PokemonForm({createNewPoke}) {
  console.log("Rendering PokemonForm")

  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [imgFrnt, setImgFrnt] = useState("")
  const [imgBack, setImgBack] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    const newPoke = {
      name: name,
      hp: hp,
      sprite: {
        front: imgFrnt,
        back: imgBack
      }
    }

    createNewPoke(newPoke)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitHandler}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e) => setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(e) => setHp(e.target.value)}  fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setImgFrnt(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setImgBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
