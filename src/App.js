import { useState } from 'react'
import './App.css'

// GET https://pokeapi.co/api/v2/pokemon/{id or name}/

export default function App() {

  const fetchPokemonData = (name) => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetch(endpoint)
      .then(res => {
        if (res.ok) return res.json()
        console.log('API Error')
      })
      .then(json => setData(JSON.stringify(json)))
      .catch(err => console.error(err))
  }

  const [data, setData] = useState('')
  fetchPokemonData('charizard')

  return (
    <div className='App'>
      <p className='data'>
        {data}
      </p>
    </div>
  );
}
