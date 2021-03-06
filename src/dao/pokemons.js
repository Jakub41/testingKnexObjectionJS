import * as Model from '../database/Models/index.js';

class PokemonsDAO {
  selectAll(limit, sortBy, orderBy) {
    const lm = limit || 100;
    const sort = sortBy || 'id';
    const dir = orderBy || 'ASC';

    return Model.Pokemons.query().limit(lm).orderBy(sort, dir);
  }

  insertAll(data) {
    return Model.Pokemons.query().insert(data);
  }
}

export default function pokemonsDAO() {
  return new PokemonsDAO();
}
