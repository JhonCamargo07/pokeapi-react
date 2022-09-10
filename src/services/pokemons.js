const API_URL = 'https://pokeapi.co/api/v2/';

export async function getAllPokemon(){
    try {
        const response = await fetch(`${API_URL}/pokemon`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Ocurrio un error:' + error);
    }
}