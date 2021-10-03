import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

// GET https://pokeapi.co/api/v2/pokemon/{id or name}/

export default function App() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        setPokemonList(res.data.results)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='App'>
      <ul>
        {pokemonList.map(pokemonItem => (
          <li>{pokemonItem.name}</li>
        ))}
      </ul>
    </div>
  );
}
