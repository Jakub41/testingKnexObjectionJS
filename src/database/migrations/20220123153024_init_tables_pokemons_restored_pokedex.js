import tableNames from '../../constants/tableNames.js';
import { createTableName } from '../../utils/tableUtils.js';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await Promise.all([
    createTableName(knex, tableNames.pokemons),
    createTableName(knex, tableNames.restoredPokeDex),
  ]);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await Promise.all(
    [tableNames.pokemons, tableNames.restoredPokeDex].map((tableName) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
}
