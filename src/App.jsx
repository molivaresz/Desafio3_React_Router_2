import './App.css'
import Navbar from './components/Narbar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import PokemonDetalle from './views/PokemonDetalle'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pokemones' element={<Pokemones/>}/>
        <Route path='/pokemones/:name' element={<PokemonDetalle/>}/>
      </Routes>
    </div>
  )
}

export default App
