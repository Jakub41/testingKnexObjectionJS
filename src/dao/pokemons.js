import { Pokemons } from '../database/Models/index.js';

class PokemonsDAO {
  selectAll() {
    return Pokemons.query();
  }
}

export default function pokemonsDAO() {
  return new PokemonsDAO();
}
