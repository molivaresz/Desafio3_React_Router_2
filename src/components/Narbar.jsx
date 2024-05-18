import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <img src="src\assets\localizadorpokemon.png" alt="" />
            <div>
                <NavLink className={({isActive}) => isActive ? 'activa' : ''} to="/">Home</NavLink> | 
                <NavLink className={({isActive}) => isActive ? 'activa' : ''} to="/pokemones">Pokemones</NavLink>
            </div>
        </nav>
    )
}

export default Navbar 