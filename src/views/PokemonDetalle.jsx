import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router'

const PokemonDetalle = () => {

  const { name } = useParams()
  const [data, setData] = useState({})

  const getPokemonDetalle = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const dataPokemon = await response.json();

        setData(dataPokemon)
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getPokemonDetalle()
}, [])

if (!Object.entries(data).length == 0) {

  return (
    <>
    <div className='posCard'>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={data.sprites.other.dream_world.front_default} />
        <Card.Body>
          <Card.Title><h3>Pokemon: {name}</h3></Card.Title>
          <Card.Text>
            {data.types[0].type.name}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{data.stats[0].stat.name}: {data.stats[0].base_stat}</ListGroup.Item>
          <ListGroup.Item>{data.stats[1].stat.name}: {data.stats[1].base_stat}</ListGroup.Item>
          <ListGroup.Item>{data.stats[2].stat.name}: {data.stats[2].base_stat}</ListGroup.Item>
          <ListGroup.Item>{data.stats[3].stat.name}: {data.stats[3].base_stat}</ListGroup.Item>
          <ListGroup.Item>{data.stats[4].stat.name}: {data.stats[4].base_stat}</ListGroup.Item>
          <ListGroup.Item>{data.stats[5].stat.name}: {data.stats[5].base_stat}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
    </>
  )
}

}

export default PokemonDetalle