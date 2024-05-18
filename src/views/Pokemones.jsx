import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Pokemones = () => {

  const navigate = useNavigate()
  const [selectedPokemon, setSelectedPokemon] = useState('')  
  const [data, setData] = useState([])

  
  const hChange = (e) => {
    setSelectedPokemon(e.target.value)
  }

  const hClick = () => {
    navigate(`/pokemones/${selectedPokemon}`)
  }

  const getPokemones = async () => {
      try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
          const dataPokemon = await response.json();

          setData(dataPokemon.results)
      } catch (error) {
          console.log(error);
      }
  };
  
  useEffect(() => {
      getPokemones()
  }, [])

  return (
    <div className='SelectPokemones'>
      <h2>Selecciona un Pokemon</h2>
      {
        <>
          <select onChange={(e) => hChange(e)}>
          {
            data.map((NamePokemon, index) => {
              return (
                <option key={index} value={NamePokemon.name}>{NamePokemon.name}</option>
              )
            })
          }
          </select>
          <div>
            <button className='mybutton' onClick={() => hClick()}>Ver Detalle</button>
          </div>
        </>
      }
    </div>
  )
}

export default Pokemones