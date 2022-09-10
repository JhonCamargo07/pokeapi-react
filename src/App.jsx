import logo from './logo.svg';
import * as API from "./services/pokemons"
import { useEffect, useState } from 'react';

function App() {

    const [pokemon, setPokemon] = useState([]);

    useEffect( () => {
        API.getAllPokemon();
    } )

    return (
        <div className="App">
            
        </div>
    );
}

export default App;
