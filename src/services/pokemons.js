import * as DAO from '../dao/index.js';

import log from '../utils/logger.js';

class PokemonsService {
  getPokemons(limit, order, direction) {
    return DAO.PokemonsDAO().selectAll(limit, order, direction);
  }
  postPokemons(data) {
    log.info('Mapping to DB');
    let newObj = [];
    data.map((p) => {
      newObj.push({
        name: p.Name,
        type_1: p.Type1,
        type_2: p.Type2,
        total: p.Total,
        hp: p.HP,
        attack: p.Attack,
        defense: p.Defense,
        sp_atk: p.SpAtk,
        sp_def: p.SpDef,
        speed: p.Speed,
        generation: p.Generation,
        legendary: p.Legendary,
      });
      return newObj;
    });
    return DAO.PokemonsDAO().insertAll(newObj);
  }
}

export default function pokemonsService() {
  return new PokemonsService();
}
