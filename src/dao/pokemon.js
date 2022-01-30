import * as Model from '../database/Models/index.js';

class PokemonDAO {
  selectAll(limit, sortBy, orderBy) {
    const lm = limit || 100;
    const sort = sortBy || 'id';
    const dir = orderBy || 'ASC';

    return Model.Pokemon.query().limit(lm).orderBy(sort, dir);
  }

  insertAll(data) {
    return Model.Pokemon.query().insert(data);
  }
}

export default function pokemonDAO() {
  return new PokemonDAO();
}
