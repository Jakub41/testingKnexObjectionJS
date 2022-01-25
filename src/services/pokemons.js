import PokemonsDAO from '../dao/pokemons.js';

class PokemonsService {
  getPokemons() {
    return PokemonsDAO().selectAll();
  }
}

export default function pokemonsService() {
  return new PokemonsService();
}
