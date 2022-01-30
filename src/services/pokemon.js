import * as DAO from '../dao/index.js';

import log from '../utils/logger.js';

const doubleHp = (type1, type2, pokeType, hp) => {
  return type1 === pokeType || type2 === pokeType ? hp * 2 : hp;
};

const percentage = (num, per) => {
  return (num / 100) * per;
};

const lowerAtk = (type1, type2, pokeType, attack, percent) => {
  const per = percentage(attack, percent);
  return type1 === pokeType || type2 === pokeType ? attack - per : attack;
};

const increaseSpeedAttack = (
  type1,
  type2,
  pokeType1,
  pokeType2,
  spAttack,
  percent
) => {
  const per = percentage(spAttack, percent);
  return type1 === pokeType1 && type2 === pokeType2 ? spAttack + per : spAttack;
};

const addDefense = (name, def) => {
  const n = name.toLowerCase().replaceAll('g', '').length;
  return n * 5 + def;
};

const editPokemonValues = (result) =>
  result.map(
    ({ Name, Type1, Type2, HP, Attack, SpAtk, Defense, ...result }) => {
      let def;
      const dHp = doubleHp(Type1, Type2, 'Steel', HP);
      const lAtk = lowerAtk(Type1, Type2, 'Fire', Attack, '10'); // float to db
      const spAtk = increaseSpeedAttack(
        Type1,
        Type2,
        'Bug',
        'Flying',
        SpAtk,
        '10'
      );
      Name.startsWith('G')
        ? (def = addDefense(Name, Defense))
        : (def = Defense);

      return {
        Name,
        Type1,
        Type2,
        ...result,
        dHp,
        lAtk,
        spAtk,
        def,
      };
    }
  );

class PokemonService {
  getPokemon(limit, order, direction) {
    return DAO.PokemonDAO().selectAll(limit, order, direction);
  }
  postPokemon(data) {
    log.info('Mapping pokemons to DB with requirements');
    let newObj = [];
    const filteredData = data.filter((p) => {
      return (
        p.Legendary !== 'True' && p.Type1 !== 'Ghost' && p.Type2 !== 'Ghost'
      );
    });

    const result = editPokemonValues(filteredData);

    result.map((p) => {
      newObj.push({
        name: p.Name,
        type_1: p.Type1,
        type_2: p.Type2,
        total: p.Total,
        hp: p.dHp,
        attack: p.lAtk,
        defense: p.def,
        sp_atk: p.spAtk,
        sp_def: p.SpDef,
        speed: p.Speed,
        generation: p.Generation,
        legendary: p.Legendary,
      });
      return newObj;
    });
    return DAO.PokemonDAO().insertAll(newObj);
  }
}

export default function pokemonService() {
  return new PokemonService();
}
